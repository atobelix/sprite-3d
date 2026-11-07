import { SHARED_GEOS, createCapsuleGeometry } from '../core/geometries.js';

// 构建通用高精度附加头饰 (Extra Add-on Builder)
export function buildExtraAddonMesh(addonId, mainMat, accentMat, headY = 0.65) {
    const g = new THREE.Group();
    if (!addonId || addonId === 'none') return g;

    if (addonId === 'halo') {
        // 1. 黄金光环：轻柔后倾的悬浮天使粗光环 + 周围微光星点
        const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.052, 16, 40), accentMat);
        haloRing.rotation.x = Math.PI / 2 - 0.22;
        haloRing.position.set(0, headY + 0.18, -0.04);
        g.add(haloRing);

        const spark = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        spark.position.set(0.32, headY + 0.22, 0.12);
        spark.scale.setScalar(0.045);
        g.add(spark);

    } else if (addonId === 'starPin') {
        // 2. 星芒胸针：左上方立体四角星徽 + 内部凸起圆珠
        const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
        star.position.set(-0.46, headY - 0.22, 0.36);
        star.rotation.z = 0.28;
        star.scale.setScalar(1.2);
        g.add(star);

        const gem = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        gem.position.set(-0.46, headY - 0.22, 0.40);
        gem.scale.setScalar(0.055);
        g.add(gem);

    } else if (addonId === 'crown') {
        // 3. 迷你王冠：真正的精雕五齿黄金小皇冠！
        const crownGroup = new THREE.Group();
        crownGroup.position.set(0, headY + 0.06, 0);

        // 底部戒托圆环
        const baseRing = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.08, 24), accentMat);
        crownGroup.add(baseRing);

        // 5 个向上翘起的皇冠齿尖
        const pts = 5;
        for (let i = 0; i < pts; i++) {
            const ang = (i / pts) * Math.PI * 2;
            const px = Math.cos(ang) * 0.21;
            const pz = Math.sin(ang) * 0.21;

            const prong = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.16, 12), accentMat);
            prong.position.set(px, 0.10, pz);
            prong.rotation.x = (pz / 0.21) * 0.18;
            prong.rotation.z = -(px / 0.21) * 0.18;
            crownGroup.add(prong);

            // 齿尖金珠
            const pearl = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            pearl.position.set(px * 1.08, 0.18, pz * 1.08);
            pearl.scale.setScalar(0.042);
            crownGroup.add(pearl);
        }

        // 皇冠正中央红宝珠
        const centerGem = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        centerGem.position.set(0, 0.06, 0.23);
        centerGem.scale.setScalar(0.05);
        crownGroup.add(centerGem);

        crownGroup.rotation.z = 0.08;
        g.add(crownGroup);

    } else if (addonId === 'sprout') {
        // 4. 灵感豆芽：圆润弯曲的嫩绿细茎 + 两片饱满展开的豆瓣小叶
        const stemCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, headY - 0.02, 0),
            new THREE.Vector3(0.02, headY + 0.08, 0),
            new THREE.Vector3(-0.02, headY + 0.18, 0.02)
        ]);
        const stem = new THREE.Mesh(new THREE.TubeGeometry(stemCurve, 16, 0.028, 12, false), accentMat);
        g.add(stem);

        // 两片豆瓣小叶
        [-1, 1].forEach((dir) => {
            const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
            leaf.position.set(dir * 0.12, headY + 0.20, 0.02);
            leaf.rotation.z = -dir * 0.55;
            leaf.rotation.y = dir * 0.20;
            leaf.scale.set(0.12, 0.06, 0.05);
            g.add(leaf);
        });

    } else if (addonId === 'bolt') {
        // 5. 闪电天线：三维 Z 字折线金属动感闪电 + 顶端发光天线球
        const boltShape = new THREE.Shape();
        boltShape.moveTo(0, 0);
        boltShape.lineTo(0.08, 0.14);
        boltShape.lineTo(0.02, 0.14);
        boltShape.lineTo(0.12, 0.32);
        boltShape.lineTo(-0.02, 0.16);
        boltShape.lineTo(0.04, 0.16);
        boltShape.closePath();

        const boltGeo = new THREE.ExtrudeGeometry(boltShape, {
            depth: 0.05, bevelEnabled: true, bevelSegments: 6, steps: 1, bevelSize: 0.02, bevelThickness: 0.02
        });
        boltGeo.center();

        const boltMesh = new THREE.Mesh(boltGeo, accentMat);
        boltMesh.position.set(0, headY + 0.16, 0);
        boltMesh.scale.setScalar(0.95);
        g.add(boltMesh);

    } else if (addonId === 'wings') {
        // 6. 浮空羽翼：左右两侧展开的丰满天使小羽翼（三瓣层次羽毛）
        [-1, 1].forEach((dir) => {
            const wingGroup = new THREE.Group();
            wingGroup.position.set(dir * 0.65, headY - 0.38, -0.06);
            wingGroup.rotation.y = -dir * 0.35;
            wingGroup.rotation.z = -dir * 0.25;

            // 主羽
            const feather1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
            feather1.scale.set(0.32, 0.12, 0.07);
            wingGroup.add(feather1);

            // 次羽
            const feather2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
            feather2.position.set(-dir * 0.04, -0.08, 0.02);
            feather2.scale.set(0.25, 0.09, 0.06);
            wingGroup.add(feather2);

            // 下羽
            const feather3 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
            feather3.position.set(-dir * 0.08, -0.15, 0.03);
            feather3.scale.set(0.18, 0.07, 0.05);
            wingGroup.add(feather3);

            g.add(wingGroup);
        });

    } else if (addonId === 'key') {
        // 7. 发条旋钮：圆润的心形发条大把手 + 中间轴柱
        const keyGroup = new THREE.Group();
        keyGroup.position.set(0, headY + 0.08, 0);

        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.16, 16), accentMat);
        shaft.position.set(0, -0.02, 0);
        keyGroup.add(shaft);

        const loopLeft = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.038, 14, 28), accentMat);
        loopLeft.position.set(-0.09, 0.10, 0);
        keyGroup.add(loopLeft);

        const loopRight = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.038, 14, 28), accentMat);
        loopRight.position.set(0.09, 0.10, 0);
        keyGroup.add(loopRight);

        const centerBar = new THREE.Mesh(createCapsuleGeometry(0.038, 0.24, 16), accentMat);
        centerBar.rotation.z = Math.PI / 2;
        centerBar.position.set(0, 0.10, 0);
        keyGroup.add(centerBar);

        g.add(keyGroup);
    }

    return g;
}
