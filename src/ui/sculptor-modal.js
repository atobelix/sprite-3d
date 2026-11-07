import { EXTRA_ADDONS } from '../config/addons.js';
import { PALETTES } from '../config/palettes.js';
import { INITIAL_SPRITES, getSpriteTaxonomy } from '../config/sprites-data.js';
import { showToast } from './toast.js';
import { exportSpritePNG } from '../core/exporter.js';
import { setupPillSlider } from './pill-slider.js';

export function setupSculptorModal(state) {
    const {
        cloudScenes,
        renderer,
        canvas,
        getGlobalViewAngleMode
    } = state;

    const sculptorModal = document.getElementById('sculptor-modal');
    const sculptorModalCard = document.getElementById('sculptor-modal-card');
    const sculptViewportSlot = document.getElementById('sculpt-viewport-slot');

    const pillSliders = {};

    function initSculptorControls() {
        // 1. 形体比例胶囊滑块 (无描边，纯中性 HSLA)
        const morphConfigs = [
            { id: 'pill-morph-sx', prop: 'sx', label: '宽度 X', min: 0.70, max: 1.35, step: 0.02 },
            { id: 'pill-morph-sy', prop: 'sy', label: '高度 Y', min: 0.70, max: 1.35, step: 0.02 },
            { id: 'pill-morph-sz', prop: 'sz', label: '厚度 Z', min: 0.65, max: 1.40, step: 0.02 },
            { id: 'pill-morph-feat', prop: 'featScale', label: '细节比例', min: 0.00, max: 1.60, step: 0.05 }
        ];

        morphConfigs.forEach(cfg => {
            const el = document.getElementById(cfg.id);
            if (!el) return;
            pillSliders[cfg.prop] = setupPillSlider(el, {
                label: cfg.label,
                min: cfg.min,
                max: cfg.max,
                step: cfg.step,
                value: 1.00,
                onChange: (val) => {
                    const inst = cloudScenes[state.activeSculptCloudIdx];
                    if (!inst) return;
                    inst.cloudDef[cfg.prop] = val;
                    inst.rebuildModel();
                }
            });
        });

        // 2. 眼神定位胶囊滑块
        const eyeConfigs = [
            { id: 'pill-eye-y', prop: 'eyeY', label: '垂直高低', min: -0.55, max: 0.55, step: 0.02 },
            { id: 'pill-eye-gap', prop: 'eyeGap', label: '两眼间距', min: 0.12, max: 0.38, step: 0.01 },
            { id: 'pill-eye-scale', prop: 'eyeScale', label: '眼睛缩放', min: 0.65, max: 1.45, step: 0.05 }
        ];

        eyeConfigs.forEach(cfg => {
            const el = document.getElementById(cfg.id);
            if (!el) return;
            pillSliders[cfg.prop] = setupPillSlider(el, {
                label: cfg.label,
                min: cfg.min,
                max: cfg.max,
                step: cfg.step,
                value: cfg.prop === 'eyeScale' ? 1.00 : 0.20,
                onChange: (val) => {
                    const inst = cloudScenes[state.activeSculptCloudIdx];
                    if (!inst) return;
                    inst.cloudDef[cfg.prop] = val;
                    inst.rebuildModel();
                }
            });
        });

        // 3. 附加饰品纯视觉图标组 (完全使用3D真实效果矢量图形贴图，彻底消除系统Emoji)
        const addonGrid = document.getElementById('addon-grid');
        if (addonGrid) {
            addonGrid.innerHTML = '';
            EXTRA_ADDONS.forEach((add) => {
                const btn = document.createElement('button');
                btn.dataset.addon = add.id;
                btn.title = add.name;
                btn.className = 'addon-btn w-9 h-9 rounded-2xl bg-[hsla(0,0%,96%,1)] text-[hsla(0,0%,35%,1)] transition flex items-center justify-center cursor-pointer hover:bg-[hsla(0,0%,91%,1)] p-1.5';
                btn.innerHTML = add.svg || `<span class="text-xs">${add.name.slice(0, 2)}</span>`;
                btn.addEventListener('click', () => {
                    const inst = cloudScenes[state.activeSculptCloudIdx];
                    inst.cloudDef.addon = add.id;
                    inst.rebuildModel();
                    inst.triggerPokeBounce(0.08);
                    syncSculptorUI();
                });
                addonGrid.appendChild(btn);
            });
        }

        // 4. 双色卡通涂装色板 (饱满 28px 圆盘，无边框，纯净微阴影)
        const palGrid = document.getElementById('palette-grid');
        if (palGrid) {
            palGrid.innerHTML = '';
            PALETTES.forEach((pal, pIdx) => {
                const btn = document.createElement('button');
                btn.dataset.pidx = pIdx;
                btn.title = pal.name;
                btn.className = 'pal-btn';
                btn.style.background = `linear-gradient(135deg, ${pal.main} 55%, ${pal.shade} 55%)`;
                btn.addEventListener('click', () => {
                    const inst = cloudScenes[state.activeSculptCloudIdx];
                    inst.cloudDef.paletteIdx = pIdx;
                    inst.rebuildModel();
                    inst.triggerPokeBounce(0.18);
                    syncSculptorUI();
                });
                palGrid.appendChild(btn);
            });
        }

        // 5. 眼神表情按钮 (带变形动画触发)
        document.querySelectorAll('.eye-type-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const inst = cloudScenes[state.activeSculptCloudIdx];
                const newType = btn.dataset.eye.trim();
                // 触发形变动画过渡到下一个表情
                inst.morphToEyeExpression(newType);
                syncSculptorUI(newType);
            });
        });
    }

    initSculptorControls();

    // 打开弹窗：启动连续视口物理飞跃动画 (消除视觉断层)
    function openSculptorModal(cloudIdx) {
        state.activeSculptCloudIdx = cloudIdx;
        state.isSculptorOpen = true;

        const targetSlot = document.querySelectorAll('.cloud-slot')[cloudIdx];
        const vpEl = targetSlot ? (targetSlot.querySelector('.sprite-viewport') || targetSlot) : null;
        const fromRect = vpEl ? vpEl.getBoundingClientRect() : null;

        document.body.classList.add('sculptor-active');
        sculptorModal.classList.remove('hidden');
        sculptorModal.classList.add('flex');

        const inst = cloudScenes[state.activeSculptCloudIdx];
        const viewAngleMode = getGlobalViewAngleMode();
        if (viewAngleMode === 'front') {
            inst.userRotX = -inst.baseRotX;
            inst.userRotY = -inst.baseRotY;
            highlightSculptViewBtn('front');
        } else if (viewAngleMode === 'side') {
            inst.userRotX = -inst.baseRotX;
            inst.userRotY = Math.PI * 0.5 - inst.baseRotY;
            highlightSculptViewBtn('side');
        } else {
            inst.userRotX = 0;
            inst.userRotY = 0;
            highlightSculptViewBtn('iso');
        }

        document.querySelectorAll('.cloud-slot').forEach((el, idx) => {
            el.classList.toggle('selected-slot', idx === cloudIdx);
        });

        syncSculptorUI();

        // 获取展开视口的目标屏幕物理矩形
        const toRect = sculptViewportSlot ? sculptViewportSlot.getBoundingClientRect() : null;

        if (fromRect && toRect) {
            // 启动 WebGL 连续视口插值器
            state.heroTransition.active = true;
            state.heroTransition.progress = 0;
            state.heroTransition.direction = 1;
            state.heroTransition.fromRect = fromRect;
            state.heroTransition.toRect = toRect;
            state.heroTransition.targetIdx = cloudIdx;

            // 弹窗卡片本身优雅轻柔纯透明度淡入，绝不施加改变几何物理位置的 scale/translateY，彻底根除落点跳变
            sculptorModal.style.opacity = '0';
            sculptorModal.style.transition = 'opacity 0.24s ease-out';
            sculptorModalCard.style.transform = 'none';

            requestAnimationFrame(() => {
                sculptorModal.style.opacity = '1';
            });
        }
    }

    // 关闭弹窗：反向连续缩回原卡片网格
    function closeSculptorModal() {
        const targetSlot = document.querySelectorAll('.cloud-slot')[state.activeSculptCloudIdx];
        const toSlotRect = targetSlot ? (targetSlot.querySelector('.sprite-viewport') || targetSlot).getBoundingClientRect() : null;
        const fromViewRect = sculptViewportSlot ? sculptViewportSlot.getBoundingClientRect() : null;

        if (toSlotRect && fromViewRect) {
            // 启动 WebGL 视口反向插值
            state.heroTransition.active = true;
            state.heroTransition.progress = 1;
            state.heroTransition.direction = -1;
            state.heroTransition.fromRect = toSlotRect;
            state.heroTransition.toRect = fromViewRect;
            state.heroTransition.targetIdx = state.activeSculptCloudIdx;

            sculptorModal.style.transition = 'opacity 0.22s ease-in';
            sculptorModal.style.opacity = '0';
            sculptorModalCard.style.transform = 'none';
        } else {
            state.isSculptorOpen = false;
            document.body.classList.remove('sculptor-active');
            sculptorModal.classList.add('hidden');
            sculptorModal.classList.remove('flex');
            document.querySelectorAll('.cloud-slot').forEach((el) => el.classList.remove('selected-slot'));
        }
    }

    function highlightSculptViewBtn(mode) {
        document.querySelectorAll('.sculpt-view-btn').forEach((btn) => {
            const active = btn.dataset.sview === mode;
            btn.className = active
                ? 'sculpt-view-btn h-6 px-2.5 rounded-full bg-[hsla(0,0%,25%,1)] text-white font-medium transition cursor-pointer flex items-center justify-center text-xs'
                : 'sculpt-view-btn h-6 px-2.5 rounded-full hover:bg-[hsla(0,0%,92%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center text-xs';
        });
    }

    document.querySelectorAll('.sculpt-view-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const mode = btn.dataset.sview;
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (!inst) return;
            if (mode === 'iso') {
                inst.userRotX = 0;
                inst.userRotY = 0;
            } else if (mode === 'front') {
                inst.userRotX = -inst.baseRotX;
                inst.userRotY = -inst.baseRotY;
            } else if (mode === 'side') {
                inst.userRotX = -inst.baseRotX;
                inst.userRotY = Math.PI * 0.5 - inst.baseRotY;
            } else if (mode === 'back') {
                inst.userRotX = -inst.baseRotX;
                inst.userRotY = Math.PI - inst.baseRotY;
            }
            inst.triggerPokeBounce(0.18);
            highlightSculptViewBtn(mode);
        });
    });

    function syncSculptorUI(overrideEyeType = null) {
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (!inst) return;
        const def = inst.cloudDef;

        const badgeIdx = document.getElementById('sculpt-badge-index');
        if (badgeIdx) badgeIdx.textContent = `#${String(def.id).padStart(2, '0')}`;

        const cloudTitle = document.getElementById('sculpt-cloud-title');
        if (cloudTitle) cloudTitle.textContent = def.name;

        const cloudCat = document.getElementById('sculpt-cloud-category');
        if (cloudCat) cloudCat.textContent = getSpriteTaxonomy(def);

        // 同步 4 个形体比例胶囊滑块
        if (pillSliders.sx) pillSliders.sx.setValue(def.sx || 1.00);
        if (pillSliders.sy) pillSliders.sy.setValue(def.sy || 1.00);
        if (pillSliders.sz) pillSliders.sz.setValue(def.sz || 1.00);
        if (pillSliders.featScale) pillSliders.featScale.setValue(def.featScale !== undefined ? def.featScale : 1.00);

        // 同步 3 个眼神定位胶囊滑块
        if (pillSliders.eyeY) pillSliders.eyeY.setValue(def.eyeY !== undefined ? def.eyeY : 0.00);
        if (pillSliders.eyeGap) pillSliders.eyeGap.setValue(def.eyeGap !== undefined ? def.eyeGap : 0.20);
        if (pillSliders.eyeScale) pillSliders.eyeScale.setValue(def.eyeScale !== undefined ? def.eyeScale : 1.00);

        // 同步配饰微胶囊 (真实效果矢量图形贴图，零描边，柔和高亮)
        document.querySelectorAll('.addon-btn').forEach((btn) => {
            const active = btn.dataset.addon === (def.addon || 'none');
            btn.classList.toggle('bg-white', active);
            btn.classList.toggle('shadow-sm', active);
            btn.classList.toggle('scale-105', active);
            btn.classList.toggle('bg-[hsla(0,0%,96%,1)]', !active);
            btn.classList.toggle('opacity-100', active);
            btn.classList.toggle('opacity-60', !active);
        });

        // 同步色板 (双层微环微阴影)
        document.querySelectorAll('.pal-btn').forEach((btn) => {
            const active = Number(btn.dataset.pidx) === def.paletteIdx;
            btn.style.boxShadow = active ? '0 0 0 2px #fff, 0 0 0 4px hsla(0,0%,35%,1)' : '0 1px 3px hsla(0, 0%, 0%, 0.10)';
        });

        // 同步表情纯视觉小巧圆润贴图按钮状态 (零描边，高亮加深与微光影指示)
        const activeEye = overrideEyeType || (def.eyeType === 'pill' ? 'normal' : (def.eyeType || 'normal'));
        document.querySelectorAll('.eye-type-btn').forEach((btn) => {
            const active = btn.dataset.eye.trim() === activeEye;
            btn.classList.toggle('scale-110', active);
            btn.classList.toggle('bg-black', active);
            btn.classList.toggle('bg-[#222226]', !active);
            btn.classList.toggle('opacity-100', active);
            btn.classList.toggle('opacity-50', !active);
            btn.classList.toggle('shadow-md', active);
        });
    }

    let isDraggingSculpt = false;
    let sculptDragMoved = false;
    let scStartX = 0, scStartY = 0;

    sculptViewportSlot.addEventListener('pointerdown', (e) => {
        isDraggingSculpt = true;
        sculptDragMoved = false;
        scStartX = e.clientX;
        scStartY = e.clientY;
        try { sculptViewportSlot.setPointerCapture(e.pointerId); } catch (err) {}
    });

    sculptViewportSlot.addEventListener('pointermove', (e) => {
        if (!isDraggingSculpt) return;
        const dx = e.clientX - scStartX;
        const dy = e.clientY - scStartY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) sculptDragMoved = true;

        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (inst) {
            inst.userRotY += dx * 0.012;
            inst.userRotX = THREE.MathUtils.clamp(inst.userRotX + dy * 0.012, -0.8, 0.8);
        }
        scStartX = e.clientX;
        scStartY = e.clientY;
    });

    sculptViewportSlot.addEventListener('pointerup', () => {
        if (isDraggingSculpt && !sculptDragMoved) {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (inst) inst.triggerPokeBounce();
        }
        isDraggingSculpt = false;
    });

    // 左侧视口鼠标滚轮平滑缩放精灵 (Zoom In / Zoom Out)
    sculptViewportSlot.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (!inst) return;
        if (!inst.viewZoom) inst.viewZoom = 1.0;
        const factor = e.deltaY < 0 ? 1.09 : 0.91;
        inst.viewZoom = THREE.MathUtils.clamp(inst.viewZoom * factor, 0.55, 2.6);
        inst.triggerPokeBounce(0.02);
    }, { passive: false });

    const sculptPokeBtn = document.getElementById('btn-sculpt-poke');
    if (sculptPokeBtn) {
        sculptPokeBtn.addEventListener('click', () => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (inst) inst.triggerPokeBounce();
        });
    }

    const btnReset = document.getElementById('btn-sculpt-reset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (!inst) return;
            const original = JSON.parse(JSON.stringify(INITIAL_SPRITES[state.activeSculptCloudIdx]));
            Object.assign(inst.cloudDef, original);
            inst.userRotX = 0;
            inst.userRotY = 0;
            inst.viewZoom = 1.0; // 重置滚轮缩放倍率
            inst.rebuildModel();
            inst.triggerPokeBounce(0.08);
            highlightSculptViewBtn('iso');
            syncSculptorUI();
            showToast('已还原参数');
        });
    }

    function getVisibleCloudIndices() {
        const indices = [];
        document.querySelectorAll('.cloud-slot').forEach((slot, idx) => {
            if (!slot.classList.contains('hidden')) indices.push(idx);
        });
        return indices.length > 0 ? indices : cloudScenes.map((_, i) => i);
    }

    const btnPrev = document.getElementById('btn-prev-cloud');
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            const vis = getVisibleCloudIndices();
            const pos = vis.indexOf(state.activeSculptCloudIdx);
            const prevIdx = pos > 0 ? vis[pos - 1] : vis[vis.length - 1];
            openSculptorModal(prevIdx);
        });
    }

    const btnNext = document.getElementById('btn-next-cloud');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const vis = getVisibleCloudIndices();
            const pos = vis.indexOf(state.activeSculptCloudIdx);
            const nextIdx = (pos !== -1 && pos < vis.length - 1) ? vis[pos + 1] : vis[0];
            openSculptorModal(nextIdx);
        });
    }

    window.addEventListener('keydown', (e) => {
        if (!state.isSculptorOpen) return;
        if (e.key === 'Escape') closeSculptorModal();
        else if (e.key === 'ArrowLeft') {
            const p = document.getElementById('btn-prev-cloud');
            if (p) p.click();
        } else if (e.key === 'ArrowRight') {
            const n = document.getElementById('btn-next-cloud');
            if (n) n.click();
        }
    });

    const btnClose = document.getElementById('btn-close-sculptor');
    if (btnClose) btnClose.addEventListener('click', closeSculptorModal);
    const btnDone = document.getElementById('btn-done-sculpt');
    if (btnDone) btnDone.addEventListener('click', closeSculptorModal);
    const btnOpenCloud = document.getElementById('btn-open-cloud-icon');
    if (btnOpenCloud) btnOpenCloud.addEventListener('click', () => openSculptorModal(0));
    const btnHeroCloud = document.getElementById('btn-hero-cloud');
    if (btnHeroCloud) btnHeroCloud.addEventListener('click', () => openSculptorModal(0));

    // 点击弹窗外部半透明背景区域关闭弹窗
    sculptorModal.addEventListener('click', (e) => {
        if (e.target === sculptorModal) {
            closeSculptorModal();
        }
    });

    // 阻断弹窗非滚动区域对底层窗口的滚轮穿透，仅允许参数定制 .custom-scroll 区域自由滚动
    sculptorModal.addEventListener('wheel', (e) => {
        if (e.target.closest('.custom-scroll')) {
            return;
        }
        e.preventDefault();
    }, { passive: false });

    const btnExport = document.getElementById('btn-export-png');
    if (btnExport) {
        btnExport.addEventListener('click', () => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (inst) exportSpritePNG(inst, renderer, canvas);
        });
    }

    return {
        openSculptorModal,
        closeSculptorModal,
        getVisibleCloudIndices
    };
}
