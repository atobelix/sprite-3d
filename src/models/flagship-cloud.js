import { SHARED_GEOS } from '../core/geometries.js';

// #01 旗舰云朵精灵生成器（单一纯粹的经典星芒金徽样式）
export         function buildIconicCloudMascot(def, mainMat, accentMat, featScale) {
            const root = new THREE.Group();

            // 1. 黄金比例雕塑主云身（饱满顺滑的无死角平底3D云体）
            const cloudShape = new THREE.Shape();
            cloudShape.moveTo(-0.50, -0.35);
            cloudShape.lineTo(0.50, -0.35);
            cloudShape.bezierCurveTo(0.86, -0.35, 0.90, 0.20, 0.52, 0.24);
            cloudShape.bezierCurveTo(0.50, 0.70, -0.06, 0.72, -0.15, 0.34);
            cloudShape.bezierCurveTo(-0.48, 0.44, -0.72, 0.18, -0.58, -0.02);
            cloudShape.bezierCurveTo(-0.84, -0.06, -0.82, -0.35, -0.50, -0.35);

            const bodyGeo = new THREE.ExtrudeGeometry(cloudShape, {
                depth: 0.36,
                bevelEnabled: true,
                bevelSegments: 18,
                steps: 1,
                bevelSize: 0.24,
                bevelThickness: 0.26
            });
            bodyGeo.center();
            root.add(new THREE.Mesh(bodyGeo, mainMat));

            // 2. 多层次鹅卵石云腹与双颊浮雕
            const frontCushion = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            frontCushion.position.set(0.04, -0.07, 0.18);
            frontCushion.scale.set(0.62, 0.40, 0.30);
            root.add(frontCushion);

            const leftCheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            leftCheek.position.set(-0.36, -0.12, 0.12);
            leftCheek.scale.set(0.34, 0.28, 0.28);
            root.add(leftCheek);

            const rightCheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            rightCheek.position.set(0.42, -0.10, 0.12);
            rightCheek.scale.set(0.36, 0.30, 0.28);
            root.add(rightCheek);

            const crownPuff = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            crownPuff.position.set(0.15, 0.22, 0.08);
            crownPuff.scale.set(0.45, 0.40, 0.36);
            root.add(crownPuff);

            // 顶部雕塑感翘曲卷云呆毛
            const swirlPts = [];
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const ang = t * Math.PI * 1.18;
                const r = 0.23 * (1 - t * 0.42);
                swirlPts.push(new THREE.Vector3(
                    0.10 + Math.cos(ang) * r,
                    0.48 + Math.sin(ang) * r * 1.12,
                    0.06 + t * 0.08
                ));
            }
            const swirlGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(swirlPts), 24, 0.105, 16, false);
            root.add(new THREE.Mesh(swirlGeo, mainMat));
            const swirlTip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
            swirlTip.position.copy(swirlPts[swirlPts.length - 1]);
            swirlTip.scale.setScalar(0.105);
            root.add(swirlTip);

            // 3. 标志性晴空四角星芒金徽与暖阳圆盘点缀
            const featGroup = new THREE.Group();
            featGroup.scale.setScalar(featScale);

            const starBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
            starBadge.position.set(-0.56, 0.42, 0.28);
            starBadge.rotation.z = 0.22;
            featGroup.add(starBadge);

            const miniSpark = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
            miniSpark.position.set(-0.34, 0.62, 0.22);
            miniSpark.scale.setScalar(0.068);
            featGroup.add(miniSpark);

            root.add(featGroup);
            return root;
        }
