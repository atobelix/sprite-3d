import { INITIAL_SPRITES, getSpriteTaxonomy } from './config/sprites-data.js';
import { OriginalSpriteScene } from './core/sprite-scene.js';
import { setupSculptorModal } from './ui/sculptor-modal.js';
import { setupToolbar } from './ui/toolbar.js';
import { showToast } from './ui/toast.js';

export function bootSpriteUniverse() {
    const canvas = document.getElementById('webgl-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const cloudGridEl = document.getElementById('cloud-grid');
    const cloudScenes = [];

    let sculptorApi = null;
    let toolbarApi = null;

    const state = {
        cloudScenes,
        renderer,
        canvas,
        cloudGridEl,
        viewAngleMode: 'iso',
        isSculptorOpen: false,
        activeSculptCloudIdx: 0,
        // 视口连续物理坐标插值状态 (彻底消除展开视觉断层)
        heroTransition: {
            active: false,
            progress: 0,
            direction: 1,
            fromRect: null,
            toRect: null,
            targetIdx: -1
        },
        getGlobalViewAngleMode: () => state.viewAngleMode,
        setGlobalViewAngleMode: (mode) => { state.viewAngleMode = mode; },
        getVisibleCloudIndices: () => (sculptorApi ? sculptorApi.getVisibleCloudIndices() : [])
    };
    window.__SPRITE_STATE__ = state;

    const mouseNDC = new THREE.Vector2(0, 0);

    const SPRITES_DATA = JSON.parse(JSON.stringify(INITIAL_SPRITES));

    function getCategoryLabel(tag) {
        const map = {
            'survey10': '调研角色',
            'fresh2': '新收录',
            'food30': '美食',
            'kept49': '经典',
            'landmark22': '地标',
            'creative20': '创意'
        };
        return map[tag] || '精选';
    }

    SPRITES_DATA.forEach((spriteDef, idx) => {
        const slot = document.createElement('div');
        slot.className = 'sprite-slot cloud-slot group';
        if (spriteDef.defaultChecked) {
            slot.classList.add('survey-checked');
        }
        slot.dataset.index = idx;
        slot.dataset.grouptag = spriteDef.groupTag;
        slot.dataset.taxonomy = getSpriteTaxonomy(spriteDef);

        slot.innerHTML = `
            <!-- 3D 精灵视口 (正方居中，四周留白充足，从容浮空呼吸) -->
            <div class="sprite-viewport w-full aspect-square flex items-center justify-center relative"></div>

            <!-- Bencho 风格底部极简药丸胶囊 (统一 11px Medium，高级克制，悬停深色高亮微浮) -->
            <div class="sprite-pill-badge mt-1.5 px-3 py-0.5 rounded-full bg-[hsla(0,0%,96%,1)] text-[hsla(0,0%,35%,1)] text-[11px] font-medium tracking-tight pointer-events-none whitespace-nowrap shadow-xs">
                ${spriteDef.name}
            </div>
        `;

        cloudGridEl.appendChild(slot);

        const instance = new OriginalSpriteScene(spriteDef, slot);
        cloudScenes.push(instance);

        let isDraggingSlot = false;
        let dragMoved = false;
        let startX = 0, startY = 0;

        slot.addEventListener('pointerenter', () => {
            instance.hovered = true;
        });
        slot.addEventListener('pointerleave', () => {
            instance.hovered = false;
            isDraggingSlot = false;
        });

        slot.addEventListener('pointerdown', (e) => {
            isDraggingSlot = true;
            dragMoved = false;
            startX = e.clientX;
            startY = e.clientY;
            try { slot.setPointerCapture(e.pointerId); } catch (err) {}
        });

        slot.addEventListener('pointermove', (e) => {
            if (!isDraggingSlot) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragMoved = true;

            instance.userRotY += dx * 0.012;
            instance.userRotX = THREE.MathUtils.clamp(instance.userRotX + dy * 0.012, -0.65, 0.65);
            startX = e.clientX;
            startY = e.clientY;
        });

        slot.addEventListener('pointerup', (e) => {
            if (isDraggingSlot && !dragMoved) {
                if (e.target.closest('.sprite-card-like')) {
                    isDraggingSlot = false;
                    return;
                }
                instance.triggerPokeBounce();
                if (document.body.classList.contains('survey-preview-mode')) {
                    slot.classList.toggle('survey-checked');
                    toolbarApi.updateSurveySelectedCount();
                } else {
                    sculptorApi.openSculptorModal(idx);
                }
            }
            isDraggingSlot = false;
        });
    });

    // 现代分类 Tab 与搜索统一联动过滤
    let currentCategory = 'all';
    const searchInput = document.getElementById('sprite-search-input');

    function applyUnifiedFilter() {
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        let visibleCount = 0;

        SPRITES_DATA.forEach((sp, i) => {
            const cardEl = cloudGridEl.children[i];
            if (!cardEl) return;
            const idxStr = String(i + 1);
            const matchesCategory = (currentCategory === 'all' || cardEl.dataset.taxonomy === currentCategory);
            const matchesSearch = !query ||
                sp.name.toLowerCase().includes(query) ||
                idxStr.includes(query) ||
                (sp.category && sp.category.toLowerCase().includes(query)) ||
                (sp.desc && sp.desc.toLowerCase().includes(query)) ||
                sp.groupTag.toLowerCase().includes(query);

            const isVisible = matchesCategory && matchesSearch;
            cardEl.classList.toggle('hidden', !isVisible);
            if (isVisible) visibleCount++;
        });
    }

    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.cat;
            categoryTabs.forEach((t) => {
                const isActive = t.dataset.cat === currentCategory;
                if (isActive) {
                    t.className = 'category-tab px-3.5 py-1.5 rounded-lg bg-white text-[#18181b] shadow-xs text-xs font-semibold transition-all cursor-pointer select-none';
                } else {
                    t.className = 'category-tab px-3.5 py-1.5 rounded-lg hover:bg-white/60 text-[#71717a] hover:text-[#18181b] text-xs font-medium transition-all cursor-pointer select-none';
                }
            });
            applyUnifiedFilter();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', applyUnifiedFilter);

        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
        });
    }

    window.addEventListener('pointermove', (e) => {
        mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    sculptorApi = setupSculptorModal(state);
    toolbarApi = setupToolbar(state);

    const sculptViewportSlot = document.getElementById('sculpt-viewport-slot');
    const clock = new THREE.Clock();

    // 根据屏幕绝对物理矩形精确渲染 WebGL 视口 (支持浮点插值与连续 Frustum 动态平滑过渡)
    function renderViewportRect(scene, camera, rect, isDetail = false, customFrustum = null) {
        if (!rect || rect.width <= 0 || rect.height <= 0) return;
        const width = rect.width;
        const height = rect.height;
        const left = rect.left;
        const bottom = window.innerHeight - rect.top - height;

        const aspect = width / height;
        // 常规卡片槽位留出充足呼吸感 (3.10)，弹窗详情视口呈现饱满细节并支持滚轮缩放 (2.45 / viewZoom)
        const baseFrustum = isDetail ? 2.45 : 3.10;
        const activeInst = cloudScenes[state.activeSculptCloudIdx];
        const zoom = (isDetail && activeInst && activeInst.viewZoom) ? activeInst.viewZoom : 1.0;
        const frustum = customFrustum !== null ? customFrustum : (baseFrustum / zoom);

        camera.left = (-frustum * aspect) / 2;
        camera.right = (frustum * aspect) / 2;
        camera.top = frustum / 2;
        camera.bottom = -frustum / 2;
        camera.updateProjectionMatrix();

        // 当弹窗打开时，底层背景精灵动态降低色彩亮度 (0.68)，与半透明遮罩完美融合；详情视口保持 100% 饱满高亮
        const dimValue = (!isDetail && (state.isSculptorOpen || state.heroTransition.active)) ? 0.68 : 1.0;
        scene.traverse((obj) => {
            if (obj.isMesh && obj.material && obj.material.uniforms && obj.material.uniforms.uDim) {
                obj.material.uniforms.uDim.value = dimValue;
            }
        });

        renderer.setViewport(left, bottom, width, height);
        renderer.setScissor(left, bottom, width, height);
        renderer.render(scene, camera);
    }

    function renderViewportForSlot(scene, camera, domElement, isDetail = false) {
        if (domElement.classList.contains('hidden') || domElement.offsetParent === null) {
            return;
        }
        const vpEl = domElement.querySelector('.sprite-viewport') || domElement;
        const rect = vpEl.getBoundingClientRect();
        if (
            rect.bottom < 0 ||
            rect.top > window.innerHeight ||
            rect.right < 0 ||
            rect.left > window.innerWidth ||
            rect.width === 0 ||
            rect.height === 0
        ) {
            return;
        }

        renderViewportRect(scene, camera, { left: rect.left, top: rect.top, width: rect.width, height: rect.height }, isDetail);
    }

    function animate() {
        requestAnimationFrame(animate);

        const width = window.innerWidth;
        const height = window.innerHeight;
        if (canvas.width !== Math.floor(width * renderer.getPixelRatio()) ||
            canvas.height !== Math.floor(height * renderer.getPixelRatio())) {
            renderer.setSize(width, height, false);
        }

        const dt = Math.min(clock.getDelta(), 0.05);
        const elapsed = clock.getElapsedTime();

        renderer.setScissorTest(false);
        renderer.clear();
        renderer.setScissorTest(true);

        const trans = state.heroTransition;
        const modalCard = state.isSculptorOpen ? document.getElementById('sculptor-modal-card') : null;
        const modalCardRect = (modalCard && !modalCard.closest('.hidden')) ? modalCard.getBoundingClientRect() : null;

        // 1. 常规精灵更新与槽位渲染
        cloudScenes.forEach((inst, idx) => {
            const isSculptingThis = (state.isSculptorOpen || trans.active) && idx === state.activeSculptCloudIdx;
            inst.update(dt, elapsed, mouseNDC, state.viewAngleMode, isSculptingThis);

            // 当正在执行插值飞跃动效时，飞跃中的那个精灵交由专用插值器渲染
            if (trans.active && idx === trans.targetIdx) {
                return;
            }

            // 弹窗展开时，被弹窗白色主体物理遮挡的底层槽位不重复绘制，未遮挡区域完整保留，主界面生机盎然
            if (state.isSculptorOpen && modalCardRect) {
                const vpEl = inst.slotEl.querySelector('.sprite-viewport') || inst.slotEl;
                const r = vpEl.getBoundingClientRect();
                if (
                    r.right > modalCardRect.left &&
                    r.left < modalCardRect.right &&
                    r.bottom > modalCardRect.top &&
                    r.top < modalCardRect.bottom
                ) {
                    return;
                }
            }

            renderViewportForSlot(inst.scene, inst.camera, inst.slotEl);
        });

        // 2. 连续视口飞跃动画 (无缝连续插值，动态实时对齐物理像素，终点亚像素零断层)
        if (trans.active) {
            // 展开 0.30s，关闭回撤延长至 0.40s (解决“回撤动画曲线太快”问题)
            const duration = trans.direction === 1 ? 0.30 : 0.40;
            trans.progress += (dt / duration) * trans.direction;
            const rawP = THREE.MathUtils.clamp(trans.progress, 0, 1);

            // 展开采用 iOS 灵动减速曲线；关闭回撤采用柔和平滑缓动曲线，平稳贴合落地
            const easeP = trans.direction === 1
                ? 1 - Math.pow(1 - rawP, 3)
                : rawP * rawP * (3 - 2 * rawP);

            // 动态追踪目标视口屏幕物理矩形，杜绝位移落点抖动
            const realToRect = (trans.direction === 1 && sculptViewportSlot)
                ? sculptViewportSlot.getBoundingClientRect()
                : trans.toRect;

            const fromRect = trans.fromRect;
            const toRect = realToRect || trans.toRect;

            if (fromRect && toRect) {
                const curRect = {
                    left: THREE.MathUtils.lerp(fromRect.left, toRect.left, easeP),
                    top: THREE.MathUtils.lerp(fromRect.top, toRect.top, easeP),
                    width: THREE.MathUtils.lerp(fromRect.width, toRect.width, easeP),
                    height: THREE.MathUtils.lerp(fromRect.height, toRect.height, easeP)
                };

                const targetInst = cloudScenes[trans.targetIdx];
                if (targetInst) {
                    const zoom = (targetInst && targetInst.viewZoom) ? targetInst.viewZoom : 1.0;
                    const startFrustum = 3.10;
                    const endFrustum = 2.45 / zoom;
                    // 平滑线性插值摄像机视锥，彻底消除落地瞬间尺寸突变
                    const curFrustum = THREE.MathUtils.lerp(startFrustum, endFrustum, easeP);
                    renderViewportRect(targetInst.scene, targetInst.camera, curRect, true, curFrustum);
                }
            }

            if (rawP >= 1 && trans.direction === 1) {
                trans.active = false;
            } else if (rawP <= 0 && trans.direction === -1) {
                trans.active = false;
                state.isSculptorOpen = false;
                document.body.classList.remove('sculptor-active');
                document.getElementById('sculptor-modal').classList.add('hidden');
                document.getElementById('sculptor-modal').classList.remove('flex');
                document.querySelectorAll('.cloud-slot').forEach((el) => el.classList.remove('selected-slot'));
            }
        } else if (state.isSculptorOpen) {
            // 稳定展开态，直接锁定大视口 (isDetail = true)
            const activeInst = cloudScenes[state.activeSculptCloudIdx];
            if (activeInst) {
                renderViewportForSlot(activeInst.scene, activeInst.camera, sculptViewportSlot, true);
            }
        }
    }

    animate();
}

// 自动引导启动
if (typeof window.THREE !== 'undefined') {
    bootSpriteUniverse();
} else {
    window.addEventListener('load', () => {
        if (typeof window.THREE !== 'undefined') bootSpriteUniverse();
    });
}
