import { SHARED_GEOS } from '../core/geometries.js';
import { EYE_WHITE_MAT, DARK_VISOR_MAT } from '../core/materials.js';

// 表情字典定义（纯中性高辨识度正面表情，赋予各表情独特的活体动态与神态）
export const EYE_EXPRESSIONS = [
    { id: 'normal',    name: '经典竖瞳' },
    { id: 'smile',     name: '微笑双瞳' },
    { id: 'squint',    name: '元气眯眼' },
    { id: 'happy',     name: '弯月笑眼' },
    { id: 'wink',      name: '俏皮眨眼' },
    { id: 'dots',      name: '呆萌豆豆' },
    { id: 'cat',       name: '猫咪波浪' },
    { id: 'shy',       name: '八字腮红' },
    { id: 'surprised', name: '惊奇圆嘴' },
    { id: 'flat',      name: '惬意悠闲' },
    { id: 'love',      name: '心动爱心' },
    { id: 'dizzy',     name: '旋转旋涡' }
];

// 构建标志性纯白眼眸与动态神态
export function buildEyesGroup(def) {
    const eyesGroup = new THREE.Group();
    eyesGroup.position.set(0.08, def.eyeY !== undefined ? def.eyeY : 0.0, def.eyeZ !== undefined ? def.eyeZ : 0.40);
    const s = def.eyeScale || 1.0;
    eyesGroup.scale.set(s, s, s);

    const halfGap = (def.eyeGap !== undefined ? def.eyeGap : 0.20) * 0.5;
    const rawType = (def.eyeType || 'normal').trim();
    const eyeType = (rawType === 'pill' || rawType === 'visor') ? 'normal' : rawType;

    // 单侧眼眸构建
    const createSingleEye = (isRight) => {
        const eyeNode = new THREE.Group();
        eyeNode.name = isRight ? 'rightEyeNode' : 'leftEyeNode';

        if (eyeType === 'normal' || eyeType === 'smile') {
            const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            eyeNode.add(pill);

        } else if (eyeType === 'happy') {
            const happyArc = new THREE.Mesh(
                new THREE.TorusGeometry(0.082, 0.028, 12, 24, Math.PI),
                EYE_WHITE_MAT
            );
            happyArc.name = 'anim_happyArc';
            happyArc.rotation.z = Math.PI;
            eyeNode.add(happyArc);

        } else if (eyeType === 'squint') {
            const squintGroup = new THREE.Group();
            squintGroup.name = 'anim_squint';

            const arm1 = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            arm1.scale.set(0.72, 0.72, 0.72);
            arm1.rotation.z = isRight ? 0.65 : -0.65;
            arm1.position.set(isRight ? -0.015 : 0.015, 0.035, 0);
            squintGroup.add(arm1);

            const arm2 = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            arm2.scale.set(0.72, 0.72, 0.72);
            arm2.rotation.z = isRight ? -0.65 : 0.65;
            arm2.position.set(isRight ? -0.015 : 0.015, -0.035, 0);
            squintGroup.add(arm2);

            eyeNode.add(squintGroup);

        } else if (eyeType === 'wink') {
            if (!isRight) {
                const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
                eyeNode.add(pill);
            } else {
                const winkArc = new THREE.Mesh(
                    new THREE.TorusGeometry(0.078, 0.026, 12, 24, Math.PI),
                    EYE_WHITE_MAT
                );
                winkArc.rotation.z = Math.PI * 0.55;
                eyeNode.add(winkArc);
            }

        } else if (eyeType === 'dots' || eyeType === 'surprised') {
            const dot = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            dot.name = 'anim_dot';
            dot.scale.set(0.072, 0.072, 0.045);
            eyeNode.add(dot);

        } else if (eyeType === 'cat') {
            const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            pill.scale.set(0.92, 0.92, 0.92);
            eyeNode.add(pill);

        } else if (eyeType === 'shy') {
            const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            pill.rotation.z = isRight ? -0.25 : 0.25;
            pill.scale.set(0.85, 0.95, 0.85);
            eyeNode.add(pill);

            const blush = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            blush.position.set(isRight ? 0.04 : -0.04, -0.075, 0.01);
            blush.scale.set(0.038, 0.022, 0.018);
            eyeNode.add(blush);

        } else if (eyeType === 'flat') {
            const bar = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            bar.rotation.z = Math.PI / 2;
            bar.scale.set(0.65, 0.82, 0.65);
            eyeNode.add(bar);

        } else if (eyeType === 'love') {
            const heartGroup = new THREE.Group();
            heartGroup.name = 'anim_heart';

            const lobe1 = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            lobe1.position.set(-0.028, 0.026, 0);
            lobe1.scale.set(0.042, 0.042, 0.024);
            heartGroup.add(lobe1);

            const lobe2 = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            lobe2.position.set(0.028, 0.026, 0);
            lobe2.scale.set(0.042, 0.042, 0.024);
            heartGroup.add(lobe2);

            const tip = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            tip.position.set(0, -0.028, 0);
            tip.scale.set(0.042, 0.048, 0.024);
            tip.rotation.z = Math.PI / 4;
            heartGroup.add(tip);

            eyeNode.add(heartGroup);

        } else if (eyeType === 'dizzy') {
            const ringGroup = new THREE.Group();
            ringGroup.name = 'anim_dizzyRing';

            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(0.076, 0.020, 12, 28),
                EYE_WHITE_MAT
            );
            ringGroup.add(ring);

            const dot = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
            dot.scale.setScalar(0.028);
            ringGroup.add(dot);

            eyeNode.add(ringGroup);

        } else {
            const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
            eyeNode.add(pill);
        }

        return eyeNode;
    };

    const leftEye = createSingleEye(false);
    leftEye.position.set(-halfGap, 0, 0);
    eyesGroup.add(leftEye);

    const rightEye = createSingleEye(true);
    rightEye.position.set(halfGap, 0, 0);
    eyesGroup.add(rightEye);

    // 附带正中小嘴巴（针对微表情，如 smile, squint, happy, wink, cat, surprised）
    if (eyeType === 'smile' || eyeType === 'squint' || eyeType === 'happy') {
        const mouthArc = new THREE.Mesh(
            new THREE.TorusGeometry(0.038, 0.014, 8, 16, Math.PI),
            EYE_WHITE_MAT
        );
        mouthArc.rotation.z = Math.PI;
        mouthArc.position.set(0, -0.072, 0.02);
        eyesGroup.add(mouthArc);
    } else if (eyeType === 'wink') {
        const winkMouth = new THREE.Mesh(
            new THREE.TorusGeometry(0.032, 0.012, 8, 14, Math.PI * 0.8),
            EYE_WHITE_MAT
        );
        winkMouth.rotation.z = Math.PI * 0.92;
        winkMouth.position.set(0.02, -0.070, 0.02);
        eyesGroup.add(winkMouth);
    } else if (eyeType === 'cat') {
        const mLeft = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.012, 8, 14, Math.PI), EYE_WHITE_MAT);
        mLeft.rotation.z = Math.PI;
        mLeft.position.set(-0.018, -0.068, 0.02);
        eyesGroup.add(mLeft);

        const mRight = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.012, 8, 14, Math.PI), EYE_WHITE_MAT);
        mRight.rotation.z = Math.PI;
        mRight.position.set(0.018, -0.068, 0.02);
        eyesGroup.add(mRight);
    } else if (eyeType === 'surprised') {
        const mO = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.012, 8, 16), EYE_WHITE_MAT);
        mO.scale.set(0.8, 1.2, 1);
        mO.position.set(0, -0.075, 0.02);
        eyesGroup.add(mO);
    }

    return eyesGroup;
}
