import { PALETTES } from '../config/palettes.js';
import { createCloudToonMaterial } from './materials.js';
import { SHARED_GEOS } from './geometries.js';
import { buildOriginalSpriteMesh, buildExtraAddonMesh, buildEyesGroup } from '../models/index.js';

// 角度平滑辅助函数 (保持在 -PI 到 PI 范围，实现最短弧度平滑旋转)
function lerpAngle(from, to, t) {
    const diff = (to - from) % (Math.PI * 2);
    const shortestDiff = ((diff + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
    return from + shortestDiff * t;
}

// 共享交互星芒微粒子材质池
const PARTICLE_MATS = [
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
    new THREE.MeshBasicMaterial({ color: 0xffd700 }),
    new THREE.MeshBasicMaterial({ color: 0xfef08a }),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
];

// 组装单个 3D 原创精灵场景实例 (OriginalSpriteScene)
export class OriginalSpriteScene {
    constructor(spriteDef, slotEl) {
        this.cloudDef = spriteDef;
        this.slotEl = slotEl;

        this.scene = new THREE.Scene();

        const frustum = 2.45;
        this.camera = new THREE.OrthographicCamera(-frustum / 2, frustum / 2, frustum / 2, -frustum / 2, 0.1, 20);
        this.camera.position.set(0, 0, 6);

        this.pivot = new THREE.Group();
        this.baseRotY = 0.42; // 经典 3/4 斜视角度
        this.baseRotX = 0.20;
        this.baseRotZ = -0.04;
        this.userRotY = 0;
        this.userRotX = 0;

        this.spinAngle = 0.42;

        this.pivot.rotation.set(this.baseRotX, this.baseRotY, this.baseRotZ);
        this.scene.add(this.pivot);

        this.hovered = false;
        this.hoverElev = 0.0;
        this.pokeTimer = 999.0; // 999 表示静止，小于 0.65 表示激活果冻软糖弹性
        this.blinkTimer = 2.5 + Math.random() * 4.0;
        this.isBlinking = false;
        this.blinkProgress = 0;

        // ========== 表情形变切换动效状态机 ==========
        this.isMorphingEye = false;
        this.morphProgress = 0;
        this.morphTargetEyeType = null;
        this.morphSwapped = false;

        // ========== 灵动互动动效系统 ==========
        this.spinSurge = 0;
        this.spinSurgeDecay = 3.5;
        this.particles = [];
        this.particleGroup = null;

        this.rebuildModel();
        this._initParticleSystem();
    }

    _initParticleSystem() {
        this.particleGroup = new THREE.Group();
        this.particles = [];
        for (let i = 0; i < 7; i++) {
            const mat = PARTICLE_MATS[i % PARTICLE_MATS.length];
            const p = new THREE.Mesh(SHARED_GEOS.starBadge, mat);
            p.scale.setScalar(0);
            p.visible = false;
            this.particleGroup.add(p);
            this.particles.push({
                mesh: p,
                vx: 0, vy: 0, vz: 0,
                life: 0, maxLife: 0,
                baseScale: 0.35
            });
        }
        this.pivot.add(this.particleGroup);
    }

    triggerPokeBounce() {
        // 重置果冻弹性计时器，启动温润受压下凹与回弹
        this.pokeTimer = 0.0;
        if (!this.isMorphingEye && !this.isBlinking) {
            this.isBlinking = true;
            this.blinkProgress = 0.25;
        }
    }

    // 触发表情变形动画 (从上一个表情平滑挤压过渡到下一个表情)
    morphToEyeExpression(newEyeType) {
        if (this.cloudDef.eyeType === newEyeType && !this.isMorphingEye) {
            this.triggerPokeBounce();
            return;
        }
        this.isMorphingEye = true;
        this.morphProgress = 0;
        this.morphTargetEyeType = newEyeType;
        this.morphSwapped = false;
    }

    _spawnParticles() {
        if (!this.particles || this.particles.length === 0) return;
        this.particles.forEach((p, i) => {
            const ang = (i / this.particles.length) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
            const speed = 0.7 + Math.random() * 0.8;
            p.vx = Math.cos(ang) * speed;
            p.vy = Math.sin(ang) * speed + 0.5;
            p.vz = (Math.random() - 0.5) * 0.4;
            p.life = 0;
            p.maxLife = 0.45 + Math.random() * 0.25;
            p.mesh.visible = true;
            p.mesh.position.set(
                (Math.random() - 0.5) * 0.18,
                (Math.random() - 0.5) * 0.18,
                0.22
            );
            p.baseScale = 0.28 + Math.random() * 0.20;
            p.mesh.scale.setScalar(p.baseScale);
            p.mesh.rotation.z = Math.random() * Math.PI * 2;
        });
    }

    rebuildModel() {
        while (this.pivot.children.length > 0) {
            this.pivot.remove(this.pivot.children[0]);
        }

        const palette = PALETTES[this.cloudDef.paletteIdx] || PALETTES[0];
        this.mainMat = createCloudToonMaterial(palette.main, palette.shade, 0.22);
        this.accentMat = createCloudToonMaterial(palette.accent, palette.main, 0.18);

        this.bodyContainer = new THREE.Group();
        this.bodyMeshGroup = buildOriginalSpriteMesh(this.cloudDef, this.mainMat, this.accentMat);
        this.bodyContainer.add(this.bodyMeshGroup);

        const headY = (this.cloudDef.headY !== undefined) ? this.cloudDef.headY : 0.65;
        this.addonGroup = buildExtraAddonMesh(this.cloudDef.addon, this.mainMat, this.accentMat, headY);
        this.bodyContainer.add(this.addonGroup);

        this.bodyContainer.scale.set(
            this.cloudDef.sx || 1.0,
            this.cloudDef.sy || 1.0,
            this.cloudDef.sz || 1.0
        );
        this.pivot.add(this.bodyContainer);

        this.eyesGroup = buildEyesGroup(this.cloudDef);
        this.pivot.add(this.eyesGroup);

        if (this.particleGroup) {
            this.pivot.add(this.particleGroup);
        }
    }

    update(dt, elapsed, mouseNDC, viewAngleMode, isSculptingThis) {
        // 1. 舒缓温润的果冻受压回弹动力学 (从容缓慢，绝无急促感与抖动)
        let pokeScaleY = 1.0;
        let pokeScaleXZ = 1.0;
        let pokeLiftY = 0.0;

        if (this.pokeTimer < 0.9) {
            this.pokeTimer += dt;
            const t = this.pokeTimer;
            // 低频阻尼振荡 (低频 9.5 rad/s，温润从容)
            const envelope = Math.exp(-t * 4.5);
            const wave = Math.sin(t * 9.2);
            // 阶段 1: 触摸慢速下凹软糖受压 (~8%) -> 阶段 2: 柔和慢速升起 -> 阶段 3: 舒缓静止
            const squash = -0.08 * envelope * wave;
            pokeScaleY = 1.0 + squash;
            pokeScaleXZ = 1.0 - squash * 0.48; // 体积守恒
            // 微升幅度极低 (0.02)，绝对无突然跳起或吓人瞬移
            pokeLiftY = Math.max(0, Math.sin(t * 7.5)) * 0.020 * envelope;
        }

        // 悬停抬升平滑插值 (低速平滑淡入抬升)
        const targetHoverElev = (this.hovered && !isSculptingThis) ? 0.030 : 0.0;
        this.hoverElev = THREE.MathUtils.lerp(this.hoverElev, targetHoverElev, dt * 5.0);

        // 2. 超舒缓深呼吸悬浮律动 (周期 ~5.5s，完全从容放松的宁静生命感)
        const breathFreq = 1.15;
        const breathAmp = 0.018;
        const breathY = Math.sin(elapsed * breathFreq + (this.cloudDef.id || 0) * 0.72) * breathAmp;

        let rollTilt = 0;
        if (this.hovered && !isSculptingThis) {
            rollTilt += Math.sin(elapsed * 1.5 + (this.cloudDef.id || 0)) * 0.015;
        }

        // 综合应用缩放与物理高度
        this.pivot.scale.set(
            pokeScaleXZ,
            pokeScaleY,
            pokeScaleXZ
        );
        this.pivot.position.y = breathY + this.hoverElev + pokeLiftY;

        if (this.spinSurge > 0) {
            this.spinSurge = Math.max(0, this.spinSurge - this.spinSurgeDecay * dt);
        }

        // 3. 视角旋转平滑插值 (柔和缓速阻尼跟随)
        let targetRotY = this.baseRotY + this.userRotY;
        let targetRotX = this.baseRotX + this.userRotX;
        let targetRotZ = this.baseRotZ + rollTilt;

        let lookX = mouseNDC.x * 0.09;
        let lookY = -mouseNDC.y * 0.06;

        if (!isSculptingThis) {
            if (viewAngleMode === 'front') {
                targetRotY = this.userRotY;
                targetRotX = this.userRotX;
                targetRotZ = 0;
                lookX = 0;
                lookY = 0;
            } else if (viewAngleMode === 'side') {
                targetRotY = Math.PI * 0.48 + this.userRotY;
                targetRotX = this.userRotX;
                targetRotZ = 0;
                lookX = 0;
                lookY = 0;
            } else if (viewAngleMode === 'spin') {
                this.spinAngle += (dt * 1.15) + (this.spinSurge * dt);
                targetRotY = this.spinAngle;
                targetRotX = 0.16 + this.userRotX;
                targetRotZ = 0;
                lookX = 0;
                lookY = 0;
            } else {
                if (this.spinSurge > 0) {
                    this.spinAngle += this.spinSurge * dt;
                    targetRotY = this.spinAngle;
                } else {
                    this.spinAngle = this.pivot.rotation.y;
                }
            }
        } else {
            lookX *= 0.2;
            lookY *= 0.2;
        }

        const rotLerpSpeed = Math.min(1.0, dt * 9.5);
        this.pivot.rotation.y = lerpAngle(this.pivot.rotation.y, targetRotY + lookX, rotLerpSpeed);
        this.pivot.rotation.x = THREE.MathUtils.lerp(this.pivot.rotation.x, targetRotX + lookY, rotLerpSpeed);
        this.pivot.rotation.z = THREE.MathUtils.lerp(this.pivot.rotation.z, targetRotZ, rotLerpSpeed);

        // 4. 纯白眼眸：动态生命力微动、自然眨眼与表情变形动画
        if (this.eyesGroup) {
            const eyeLookFactor = (viewAngleMode === 'front' && !isSculptingThis) ? 0.025 : 0.055;
            const baseEyeX = 0.08 + mouseNDC.x * eyeLookFactor;
            const baseEyeY = this.cloudDef.eyeY + mouseNDC.y * (eyeLookFactor * 0.85);
            this.eyesGroup.position.x = THREE.MathUtils.lerp(this.eyesGroup.position.x, baseEyeX, dt * 14);
            this.eyesGroup.position.y = THREE.MathUtils.lerp(this.eyesGroup.position.y, baseEyeY, dt * 14);
            this.eyesGroup.position.z = this.cloudDef.eyeZ * (this.cloudDef.sz || 1.0);

            const baseS = this.cloudDef.eyeScale || 1.0;

            if (this.isMorphingEye) {
                // 表情变形动画：平滑挤压闭眼 -> 极细线处无缝交接 -> 弹性超调展开
                this.morphProgress += dt * 3.8;
                const p = Math.min(1.0, this.morphProgress);

                if (p < 0.45) {
                    const t = p / 0.45;
                    const sy = 1.0 - 0.95 * Math.sin(t * Math.PI * 0.5);
                    const sx = 1.0 + 0.32 * Math.sin(t * Math.PI);
                    this.eyesGroup.scale.set(baseS * sx, baseS * Math.max(0.04, sy), baseS);
                } else {
                    if (!this.morphSwapped) {
                        this.morphSwapped = true;
                        this.cloudDef.eyeType = this.morphTargetEyeType;
                        const curPos = this.eyesGroup.position.clone();
                        this.pivot.remove(this.eyesGroup);
                        this.eyesGroup = buildEyesGroup(this.cloudDef);
                        this.eyesGroup.position.copy(curPos);
                        this.pivot.add(this.eyesGroup);
                    }

                    const t = (p - 0.45) / 0.55;
                    const bounce = 1.0 + 0.38 * Math.sin(t * Math.PI * 1.5) * Math.exp(-t * 3.5);
                    const sy = 0.05 + 0.95 * bounce;
                    const sx = 1.0 + 0.16 * Math.sin(t * Math.PI * 2.0) * (1 - t);
                    this.eyesGroup.scale.set(baseS * sx, baseS * Math.max(0.04, sy), baseS);

                    if (p >= 1.0) {
                        this.isMorphingEye = false;
                        this.eyesGroup.scale.setScalar(baseS);
                    }
                }
            } else {
                // 5. 持续活体微动态 (Living Expressions)
                // (1) 思考表情：灵感小圆点微光漂浮与呼吸
                const thinkDot = this.eyesGroup.getObjectByName('anim_thinkDot');
                if (thinkDot) {
                    thinkDot.position.y = 0.15 + Math.sin(elapsed * 4.8) * 0.022;
                    thinkDot.position.x = 0.10 + Math.cos(elapsed * 3.2) * 0.012;
                    thinkDot.scale.setScalar(0.034 * (1.0 + Math.sin(elapsed * 4.8) * 0.20));
                }

                // (2) 爱心表情：节律双峰心跳怦怦轻微脉动
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_heart') {
                        const beatT = (elapsed * 2.4) % (Math.PI * 2);
                        const beat = Math.sin(beatT) > 0.65 ? Math.sin(beatT * 2) * 0.14 : 0;
                        child.scale.setScalar(1.0 + beat);
                    }
                });

                // (3) 开心笑眼：随欢快呼吸微弹舒展
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_happyArc') {
                        child.scale.y = 1.0 + Math.sin(elapsed * 3.4) * 0.07;
                    }
                });

                // (4) 元气眯眼：细微力量微颤律动
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_squint') {
                        child.position.y = Math.sin(elapsed * 18.0) * 0.015;
                    }
                });

                // (5) 旋转眼：同心圆环流转自转
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_dizzyRing') {
                        child.rotation.z = elapsed * 0.95;
                    }
                });

                // (6) 豆豆眼：呆萌圆豆呼吸微缩放
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_dot') {
                        const breath = 1.0 + Math.sin(elapsed * 2.8) * 0.08;
                        child.scale.set(0.068 * breath, 0.068 * breath, 0.045);
                    }
                });

                // (7) 专注表情：瞳心高光星芒闪烁
                this.eyesGroup.traverse((child) => {
                    if (child.name === 'anim_glint') {
                        child.scale.setScalar(0.028 * (1.0 + Math.sin(elapsed * 5.2) * 0.25));
                    }
                });

                // 常规自然眨眼机制
                this.blinkTimer -= dt;
                if (this.blinkTimer <= 0 && !this.isBlinking) {
                    this.isBlinking = true;
                    this.blinkProgress = 0;
                    this.blinkTimer = 2.5 + Math.random() * 4.5;
                }
                if (this.isBlinking) {
                    this.blinkProgress += dt * 15;
                    const blinkScaleY = Math.abs(Math.cos(Math.min(this.blinkProgress, Math.PI)));
                    this.eyesGroup.scale.set(baseS, Math.max(0.08, blinkScaleY * baseS), baseS);
                    if (this.blinkProgress >= Math.PI) {
                        this.isBlinking = false;
                        this.eyesGroup.scale.setScalar(baseS);
                    }
                }
            }
        }
    }
}
