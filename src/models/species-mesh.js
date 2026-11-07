import { SHARED_GEOS, createRoundedRectExtrude, createCapsuleGeometry } from '../core/geometries.js';
import { createCloudToonMaterial } from '../core/materials.js';
import { buildIconicCloudMascot } from './flagship-cloud.js';

// 独立 3D 物种形体构建器
export function buildOriginalSpriteMesh(def, mainMat, accentMat) {
            const sp = def.species;
            const featS = def.featScale !== undefined ? def.featScale : 1.0;

            // #01 旗舰软件图标云朵
            if (sp === 'iconicCloud') {
                return buildIconicCloudMascot(def, mainMat, accentMat, featS);
            }

            const group = new THREE.Group();

            // ==================== 保留精选 10 款 ====================
            if (sp === 'origamiGlider') {
                const hullShape = new THREE.Shape();
                hullShape.moveTo(0, 0.62);
                hullShape.lineTo(0.68, -0.45);
                hullShape.lineTo(0, -0.22);
                hullShape.lineTo(-0.68, -0.45);
                hullShape.closePath();
                const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.14, bevelThickness: 0.16
                });
                hullGeo.center();
                const hull = new THREE.Mesh(hullGeo, mainMat);
                hull.rotation.x = 0.22;
                hull.rotation.z = -0.15;
                group.add(hull);

                const fin = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.55, 4), accentMat);
                fin.position.set(-0.08, 0.22, -0.12);
                fin.rotation.z = 0.25;
                fin.scale.setScalar(featS);
                group.add(fin);

            } else if (sp === 'mobiusLoop') {
                const curvePts = [];
                for (let i = 0; i <= 64; i++) {
                    const t = (i / 64) * Math.PI * 2;
                    curvePts.push(new THREE.Vector3(Math.sin(t) * 0.62, Math.sin(t * 2) * 0.38, Math.cos(t) * 0.22));
                }
                const tubeGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curvePts, true), 72, 0.24, 20, true);
                const loopMesh = new THREE.Mesh(tubeGeo, mainMat);
                loopMesh.rotation.z = 0.45;
                group.add(loopMesh);

                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.045, 14, 32), accentMat);
                ring.position.set(-0.32, -0.22, 0.12);
                ring.rotation.set(0.8, 0.4, 0);
                ring.scale.setScalar(featS);
                group.add(ring);

                        } else if (sp === 'periscopeSub') {
                // 水管/潜望镜：端正向前，X轴完全对称居中，镜头正对前方，彻底消除眼睛歪斜
                const pipeCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, -0.52, -0.06),
                    new THREE.Vector3(0, 0.14, -0.06),
                    new THREE.Vector3(0, 0.25, 0.08),
                    new THREE.Vector3(0, 0.25, 0.34)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(pipeCurve, 32, 0.36, 24, false), mainMat));

                // 底部饱满封口底托
                const bottomCap = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                bottomCap.position.set(0, -0.48, -0.06);
                bottomCap.scale.set(0.46, 0.28, 0.46);
                group.add(bottomCap);

                // 顶端镜头口金色/蓝色圆环饰边 (正对前方，中心 X=0, Y=0.25, Z=0.34)
                const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.065, 16, 36), accentMat);
                rim.position.set(0, 0.25, 0.34);
                rim.scale.setScalar(featS);
                group.add(rim);

                // 镜头口内嵌端面封口圆板 (彻底封闭模型，防穿模)
                const lensBacking = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.04, 28), mainMat);
                lensBacking.position.set(0, 0.25, 0.32);
                lensBacking.rotation.x = Math.PI / 2;
                group.add(lensBacking);
} else if (sp === 'cactusBuddy') {
                const trunk = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                trunk.scale.set(0.50, 0.68, 0.48);
                group.add(trunk);

                const leftArm = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                leftArm.position.set(-0.52, 0.12, 0);
                leftArm.rotation.z = 0.45;
                leftArm.scale.set(0.20 * featS, 0.36 * featS, 0.20 * featS);
                group.add(leftArm);

                const rightArm = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                rightArm.position.set(0.52, -0.05, 0);
                rightArm.rotation.z = -0.55;
                rightArm.scale.set(0.18 * featS, 0.32 * featS, 0.18 * featS);
                group.add(rightArm);

                for (let i = 0; i < 5; i++) {
                    const ang = (i / 5) * Math.PI * 2;
                    const petal = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    petal.position.set(Math.cos(ang) * 0.14, 0.68, Math.sin(ang) * 0.14);
                    petal.scale.set(0.10 * featS, 0.07 * featS, 0.10 * featS);
                    group.add(petal);
                }

            } else if (sp === 'hourglassTwin') {
                const pts = [
                    new THREE.Vector2(0.01, -0.62),
                    new THREE.Vector2(0.52, -0.56),
                    new THREE.Vector2(0.46, -0.25),
                    new THREE.Vector2(0.18, 0.0),
                    new THREE.Vector2(0.46, 0.25),
                    new THREE.Vector2(0.52, 0.56),
                    new THREE.Vector2(0.01, 0.62)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mainMat));

                const waistBelt = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 14, 36), accentMat);
                waistBelt.rotation.x = Math.PI / 2 + 0.2;
                waistBelt.scale.setScalar(featS);
                group.add(waistBelt);

            } else if (sp === 'stepCube') {
                const slabGeo = createRoundedRectExtrude(0.84, 0.84, 0.22, 0.26, 0.08);
                const botSlab = new THREE.Mesh(slabGeo, mainMat);
                botSlab.rotation.x = Math.PI / 2;
                botSlab.position.set(0, -0.22, 0);
                group.add(botSlab);

                const topSlab = new THREE.Mesh(slabGeo, mainMat);
                topSlab.rotation.x = Math.PI / 2;
                topSlab.rotation.z = 0.55 * featS;
                topSlab.position.set(0, 0.24, 0);
                topSlab.scale.setScalar(0.88);
                group.add(topSlab);

                const miniCube = new THREE.Mesh(new THREE.OctahedronGeometry(0.14 * featS, 0), accentMat);
                miniCube.position.set(0, 0.66, 0);
                group.add(miniCube);

            } else if (sp === 'foldedFolio') {
                const s = 0.55, r = 0.16, cut = 0.28;
                const noteShape = new THREE.Shape();
                noteShape.moveTo(-s + r, -s);
                noteShape.lineTo(s - r, -s);
                noteShape.quadraticCurveTo(s, -s, s, -s + r);
                noteShape.lineTo(s, s - cut);
                noteShape.lineTo(s - cut, s);
                noteShape.lineTo(-s + r, s);
                noteShape.quadraticCurveTo(-s, s, -s, s - r);
                noteShape.lineTo(-s, -s + r);
                noteShape.quadraticCurveTo(-s, -s, -s + r, -s);

                const noteGeo = new THREE.ExtrudeGeometry(noteShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.08, bevelThickness: 0.08
                });
                noteGeo.center();
                group.add(new THREE.Mesh(noteGeo, mainMat));

                const earShape = new THREE.Shape();
                earShape.moveTo(0, 0);
                earShape.lineTo(cut * 1.15, 0);
                earShape.lineTo(0, cut * 1.15);
                earShape.closePath();
                const earGeo = new THREE.ExtrudeGeometry(earShape, {
                    depth: 0.06, bevelEnabled: true, bevelSegments: 4, bevelSize: 0.03, bevelThickness: 0.03
                });
                const earMesh = new THREE.Mesh(earGeo, accentMat);
                earMesh.position.set(s - cut - 0.04, s - cut - 0.04, 0.16);
                earMesh.scale.setScalar(featS);
                group.add(earMesh);

            } else if (sp === 'keyholeClock') {
                const khShape = new THREE.Shape();
                khShape.moveTo(-0.38, -0.58);
                khShape.lineTo(0.38, -0.58);
                khShape.lineTo(0.24, -0.02);
                khShape.absarc(0, 0.24, 0.36, -0.65, Math.PI + 0.65, false);
                khShape.lineTo(-0.38, -0.58);

                const khGeo = new THREE.ExtrudeGeometry(khShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.12, bevelThickness: 0.14
                });
                khGeo.center();
                group.add(new THREE.Mesh(khGeo, mainMat));

                const keyBow = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.055, 14, 28), accentMat);
                keyBow.position.set(0, 0.72, 0);
                keyBow.scale.setScalar(featS);
                group.add(keyBow);

            } else if (sp === 'boomerangWing') {
                const bmShape = new THREE.Shape();
                bmShape.moveTo(0, 0.48);
                bmShape.quadraticCurveTo(0.25, 0.48, 0.70, -0.28);
                bmShape.quadraticCurveTo(0.75, -0.48, 0.52, -0.45);
                bmShape.quadraticCurveTo(0.15, -0.05, 0, -0.05);
                bmShape.quadraticCurveTo(-0.15, -0.05, -0.52, -0.45);
                bmShape.quadraticCurveTo(-0.75, -0.48, -0.70, -0.28);
                bmShape.quadraticCurveTo(-0.25, 0.48, 0, 0.48);

                const bmGeo = new THREE.ExtrudeGeometry(bmShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.12, bevelThickness: 0.14
                });
                bmGeo.center();
                const bmMesh = new THREE.Mesh(bmGeo, mainMat);
                bmMesh.rotation.z = -0.18;
                group.add(bmMesh);

            } else if (sp === 'kettlebellBot') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0, -0.18, 0);
                body.scale.set(0.58, 0.52, 0.54);
                group.add(body);

                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.11, 18, 36, Math.PI), mainMat);
                handle.position.set(0, 0.22, 0);
                handle.scale.setScalar(featS);
                group.add(handle);

            // ==================== 全新创作 19 款：日常器物 & 抽象拓扑 ====================

            // #12 磁力蹄铁 (Magneto)
                        } else if (sp === 'magnetU') {
                const uShape = new THREE.Shape();
                uShape.moveTo(-0.56, 0.52);
                uShape.lineTo(-0.56, -0.10);
                uShape.absarc(0, -0.10, 0.56, Math.PI, 0, false);
                uShape.lineTo(0.56, 0.52);
                uShape.lineTo(0.24, 0.52);
                uShape.lineTo(0.24, -0.10);
                uShape.absarc(0, -0.10, 0.24, 0, Math.PI, true);
                uShape.lineTo(-0.24, 0.52);
                uShape.closePath();

                const uGeo = new THREE.ExtrudeGeometry(uShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                uGeo.center();
                group.add(new THREE.Mesh(uGeo, mainMat));

                // 双端撞色磁极帽
                [-0.40, 0.40].forEach((xPos) => {
                    const cap = new THREE.Mesh(createRoundedRectExtrude(0.34, 0.18, 0.06, 0.30, 0.06), accentMat);
                    cap.position.set(xPos, 0.52, 0);
                    cap.scale.setScalar(featS);
                    group.add(cap);
                });

                // 磁极中央悬浮电光星
                const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                spark.position.set(0, 0.52, 0.10);
                spark.scale.setScalar(0.65 * featS);
                group.add(spark);
} else if (sp === 'coffeeMug') {
                // 圆润厚壁杯身
                const cupPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.44, -0.52),
                    new THREE.Vector2(0.52, -0.35),
                    new THREE.Vector2(0.52, 0.34),
                    new THREE.Vector2(0.45, 0.42),
                    new THREE.Vector2(0.01, 0.40)
                ];
                const cup = new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat);
                cup.position.x = -0.06;
                group.add(cup);

                // 右侧粗壮C型杯耳把
                const ear = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.085, 16, 32, Math.PI * 1.15), mainMat);
                ear.position.set(0.42, -0.04, 0);
                ear.rotation.z = -Math.PI * 0.55;
                group.add(ear);

                // 杯顶绵密奶泡螺旋云盖
                const foam = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                foam.position.set(-0.06, 0.46, 0);
                foam.scale.set(0.42 * featS, 0.22 * featS, 0.42 * featS);
                group.add(foam);

                const steamPuff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                steamPuff.position.set(-0.02, 0.68, 0.05);
                steamPuff.scale.setScalar(0.13 * featS);
                group.add(steamPuff);

            // #14 灵感灯泡 (Edison)
            } else if (sp === 'lightBulb') {
                // 1. 极其圆润的梨形球泡身躯 (高阶密集平滑样条 Lathe)
                const bulbPts = [];
                // 顶部平滑大半球
                for (let i = 0; i <= 18; i++) {
                    const a = (i / 18) * Math.PI * 0.58;
                    bulbPts.push(new THREE.Vector2(Math.sin(a) * 0.56, 0.12 + Math.cos(a) * 0.56));
                }
                // 向下优雅内收曲线
                bulbPts.push(new THREE.Vector2(0.38, -0.16));
                bulbPts.push(new THREE.Vector2(0.28, -0.32));
                bulbPts.push(new THREE.Vector2(0.26, -0.42));
                bulbPts.push(new THREE.Vector2(0.01, -0.43));

                const bulbGeo = new THREE.LatheGeometry(bulbPts, 36);
                const bulbMesh = new THREE.Mesh(bulbGeo, mainMat);
                group.add(bulbMesh);

                // 2. 底部立体的三层金属螺纹圈
                const screwGroup = new THREE.Group();
                screwGroup.position.set(0, -0.48, 0);
                [-0.06, 0.0, 0.06].forEach((yOffset) => {
                    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.045, 14, 32), accentMat);
                    ring.rotation.x = Math.PI / 2;
                    ring.position.y = yOffset;
                    screwGroup.add(ring);
                });
                // 螺口最底端圆触点
                const contact = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                contact.position.set(0, -0.12, 0);
                contact.scale.set(0.16, 0.08, 0.16);
                screwGroup.add(contact);
                group.add(screwGroup);

                // 3. 内部暖心发光双纽灯丝
                const filament = new THREE.Mesh(
                    new THREE.TorusGeometry(0.18, 0.038, 14, 28),
                    accentMat
                );
                filament.position.set(0, 0.22, 0);
                filament.rotation.x = 0.35;
                group.add(filament);

                // 4. 左上方灵感四角金星芒
                const ray = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                ray.position.set(-0.48, 0.58, 0.22);
                ray.scale.setScalar(0.95 * featS);
                group.add(ray);} else if (sp === 'retroTV') {
                // 圆角方盒机身
                const tvBody = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.84, 0.24, 0.42, 0.12), mainMat);
                tvBody.position.set(0, -0.10, 0);
                group.add(tvBody);

                // 顶部天线底座与V型兔耳天线
                const baseDome = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                baseDome.position.set(0, 0.40, 0);
                baseDome.scale.set(0.24, 0.12, 0.20);
                group.add(baseDome);

                [-1, 1].forEach((dir) => {
                    const rod = new THREE.Mesh(createCapsuleGeometry(0.038, 0.36, 14), accentMat);
                    rod.position.set(dir * 0.18, 0.56, 0);
                    rod.rotation.z = -dir * 0.48;
                    rod.scale.setScalar(featS);
                    group.add(rod);

                    const ball = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    ball.position.set(dir * 0.30, 0.72, 0);
                    ball.scale.setScalar(0.085 * featS);
                    group.add(ball);
                });

            // #16 三叶扭结甜圈 (Pretzel / Trefoil Knot)
            } else if (sp === 'trefoilKnot') {
                const pts = [];
                for (let i = 0; i <= 96; i++) {
                    const t = (i / 96) * Math.PI * 2;
                    const x = (Math.sin(t) + 2 * Math.sin(2 * t)) * 0.20;
                    const y = (Math.cos(t) - 2 * Math.cos(2 * t)) * 0.20;
                    const z = -Math.sin(3 * t) * 0.16;
                    pts.push(new THREE.Vector3(x, y, z));
                }
                const knotGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 96, 0.19, 20, true);
                group.add(new THREE.Mesh(knotGeo, mainMat));

                // 中心甜心核保证眼部平整饱满
                const corePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                corePad.position.set(0, -0.06, 0.14);
                corePad.scale.set(0.36, 0.30, 0.24);
                group.add(corePad);

                const sprinkle = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                sprinkle.position.set(-0.46, 0.44, 0.22);
                sprinkle.scale.setScalar(0.75 * featS);
                group.add(sprinkle);

            // #17 巧思拼图块 (Puzzlo)
            } else if (sp === 'puzzlePiece') {
                const tile = new THREE.Mesh(createRoundedRectExtrude(0.86, 0.86, 0.20, 0.24, 0.10), mainMat);
                tile.position.set(-0.06, -0.06, 0);
                group.add(tile);

                // 顶部拼图凸耳
                const topTab = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                topTab.position.set(-0.06, 0.52, 0);
                topTab.scale.set(0.24 * featS, 0.24 * featS, 0.21);
                group.add(topTab);

                // 右侧撞色拼图凸耳
                const rightTab = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                rightTab.position.set(0.52, -0.06, 0);
                rightTab.scale.set(0.24 * featS, 0.24 * featS, 0.21);
                group.add(rightTab);

            // #18 晴雨弯伞 (Brolly)
            } else if (sp === 'umbrellaDome') {
                // 1. 饱满圆润的蘑菇形深穹顶伞盖 (高阶流线 Lathe)
                const domePts = [];
                for (let i = 0; i <= 24; i++) {
                    const a = (i / 24) * (Math.PI * 0.52);
                    domePts.push(new THREE.Vector2(Math.sin(a) * 0.68, 0.62 - (1 - Math.cos(a)) * 0.65));
                }
                domePts.push(new THREE.Vector2(0.60, -0.06));
                domePts.push(new THREE.Vector2(0.01, -0.04));

                const domeGeo = new THREE.LatheGeometry(domePts, 36);
                const domeMesh = new THREE.Mesh(domeGeo, mainMat);
                group.add(domeMesh);

                // 2. 伞盖底缘圆润厚边圈
                const rimRing = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.042, 14, 36), accentMat);
                rimRing.position.set(0, -0.04, 0);
                rimRing.rotation.x = Math.PI / 2;
                group.add(rimRing);

                // 3. 伞顶圆锥尖针与金宝珠
                const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.07, 0.20, 16), accentMat);
                ferrule.position.set(0, 0.70, 0);
                group.add(ferrule);
                const tipSphere = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tipSphere.position.set(0, 0.81, 0);
                tipSphere.scale.setScalar(0.065);
                group.add(tipSphere);

                // 4. 下方探出的优雅粗实 J 型长弯钩伞柄
                const handleCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 0.12, 0),
                    new THREE.Vector3(0, -0.42, 0),
                    new THREE.Vector3(0, -0.58, 0),
                    new THREE.Vector3(0.08, -0.66, 0),
                    new THREE.Vector3(0.20, -0.62, 0),
                    new THREE.Vector3(0.22, -0.50, 0)
                ]);
                const handle = new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 32, 0.052 * featS, 16, false), accentMat);
                group.add(handle);} else if (sp === 'batteryCell') {
                // 圆润粗壮电池主体
                const cell = new THREE.Mesh(createCapsuleGeometry(0.45, 0.52, 32), mainMat);
                cell.position.set(0, -0.06, 0);
                group.add(cell);

                // 顶部撞色金属正极帽
                const cap = new THREE.Mesh(createCapsuleGeometry(0.22, 0.14, 24), accentMat);
                cap.position.set(0, 0.54, 0);
                cap.scale.setScalar(featS);
                group.add(cap);

                // 左上悬浮闪电/加号能量徽章
                const boltBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                boltBadge.position.set(-0.54, 0.36, 0.24);
                boltBadge.scale.setScalar(0.85 * featS);
                group.add(boltBadge);

            // #20 黄油吐司 (Toasty)
            } else if (sp === 'toastSlice') {
                const tShape = new THREE.Shape();
                tShape.moveTo(-0.46, -0.54);
                tShape.lineTo(0.46, -0.54);
                tShape.quadraticCurveTo(0.54, -0.54, 0.52, -0.36);
                tShape.lineTo(0.48, 0.14);
                // 吐司双肩圆弧
                tShape.bezierCurveTo(0.64, 0.26, 0.56, 0.58, 0.20, 0.54);
                tShape.quadraticCurveTo(0, 0.58, -0.20, 0.54);
                tShape.bezierCurveTo(-0.56, 0.58, -0.64, 0.26, -0.48, 0.14);
                tShape.lineTo(-0.52, -0.36);
                tShape.quadraticCurveTo(-0.54, -0.54, -0.46, -0.54);

                const toastGeo = new THREE.ExtrudeGeometry(tShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                toastGeo.center();
                group.add(new THREE.Mesh(toastGeo, mainMat));

                // 额头倾斜的方形融化黄油块
                const butter = new THREE.Mesh(createRoundedRectExtrude(0.32, 0.32, 0.06, 0.08, 0.04), accentMat);
                butter.position.set(-0.14, 0.26, 0.22);
                butter.rotation.z = 0.28;
                butter.scale.setScalar(featS);
                group.add(butter);

            // #21 双环锁扣 (Linko)
            } else if (sp === 'chainLink') {
                // 主体竖向厚圆环
                const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.19, 20, 40), mainMat);
                ring1.position.set(0, -0.10, 0);
                ring1.scale.set(1.0, 1.15, 1.0);
                group.add(ring1);

                // 填充下半软垫承载眼睛
                const eyePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                eyePad.position.set(0, -0.20, 0.14);
                eyePad.scale.set(0.38, 0.26, 0.22);
                group.add(eyePad);

                // 顶部正交90°扣合的撞色副环
                const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.30, 0.12, 18, 36), accentMat);
                ring2.position.set(0, 0.42, 0);
                ring2.rotation.y = Math.PI / 2;
                ring2.rotation.z = 0.25;
                ring2.scale.setScalar(featS);
                group.add(ring2);

            // #22 咔嚓快门相机 (Snappy)
            } else if (sp === 'cameraSnap') {
                const camBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.78, 0.22, 0.34, 0.10), mainMat);
                camBody.position.set(0, -0.06, 0);
                group.add(camBody);

                // 正面凸起大光圈镜头环（环绕双竖瞳）
                const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.075, 18, 40), accentMat);
                lensRing.position.set(0.08, -0.04, 0.28);
                lensRing.scale.setScalar(featS);
                group.add(lensRing);

                // 顶部快门按键与取景顶盖
                const shutter = new THREE.Mesh(createCapsuleGeometry(0.11, 0.10, 16), accentMat);
                shutter.position.set(-0.32, 0.44, 0);
                shutter.scale.setScalar(featS);
                group.add(shutter);

            // #23 旋涡甜心棒棒糖 (Swirly)
            } else if (sp === 'lollipopSwirl') {
                // 圆润糖果圆盘主体
                const candyDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                candyDisc.position.set(0, 0.08, 0);
                candyDisc.scale.set(0.58, 0.58, 0.34);
                group.add(candyDisc);

                // 正面浮雕螺旋糖纹环
                const swirlPts = [];
                for (let i = 0; i <= 40; i++) {
                    const t = i / 40;
                    const a = t * Math.PI * 3.2;
                    const r = 0.12 + t * 0.34;
                    swirlPts.push(new THREE.Vector3(Math.cos(a) * r, 0.08 + Math.sin(a) * r, 0.24 - t * 0.06));
                }
                const swirlTube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(swirlPts), 48, 0.048 * featS, 12, false), accentMat);
                group.add(swirlTube);

                // 底部斜插棒棒糖棍
                const stick = new THREE.Mesh(createCapsuleGeometry(0.068, 0.42, 16), accentMat);
                stick.position.set(0.20, -0.52, -0.05);
                stick.rotation.z = 0.32;
                group.add(stick);

            // #24 律动耳机精灵 (Beats)
            } else if (sp === 'headphoneBeat') {
                // 中心圆润鹅卵石脑袋
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.08, 0);
                head.scale.set(0.50, 0.48, 0.48);
                group.add(head);

                // 顶部耳机头梁圆弧
                const band = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.075, 16, 40, Math.PI), accentMat);
                band.position.set(0, -0.06, 0);
                band.scale.setScalar(featS);
                group.add(band);

                // 左右撞色厚耳罩
                [-1, 1].forEach((dir) => {
                    const cup = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    cup.position.set(dir * 0.56, -0.08, 0);
                    cup.scale.set(0.16 * featS, 0.28 * featS, 0.26 * featS);
                    group.add(cup);
                });

            // #25 三轴鲁班锁 (Nexus / XYZ Orthogonal Jack)
            } else if (sp === 'xyzJack') {
                const barGeo = createCapsuleGeometry(0.24, 0.82, 24);
                // Y轴竖柱
                const barY = new THREE.Mesh(barGeo, mainMat);
                group.add(barY);
                // X轴横柱
                const barX = new THREE.Mesh(barGeo, mainMat);
                barX.rotation.z = Math.PI / 2;
                group.add(barX);
                // Z轴纵深柱
                const barZ = new THREE.Mesh(barGeo, mainMat);
                barZ.rotation.x = Math.PI / 2;
                group.add(barZ);

                // 顶部与两侧金色端帽点缀
                const capTop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                capTop.position.set(0, 0.58, 0);
                capTop.scale.setScalar(0.16 * featS);
                group.add(capTop);

            // #26 远航船锚 (Anchor)
            } else if (sp === 'seaAnchor') {
                // 下方微笑月牙形锚臂
                const fluke = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.16, 18, 36, Math.PI), mainMat);
                fluke.rotation.z = Math.PI;
                fluke.position.set(0, -0.02, 0);
                group.add(fluke);

                // 锚臂两端圆润球冠
                [-0.46, 0.46].forEach((xPos) => {
                    const tip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    tip.position.set(xPos, -0.02, 0);
                    tip.scale.setScalar(0.17);
                    group.add(tip);
                });

                // 中央锚干与底部心垫
                const stem = new THREE.Mesh(createCapsuleGeometry(0.16, 0.72, 20), mainMat);
                stem.position.set(0, -0.06, 0);
                group.add(stem);

                // 顶部横杠与金色锚环
                const crossBar = new THREE.Mesh(createCapsuleGeometry(0.08, 0.48, 16), accentMat);
                crossBar.rotation.z = Math.PI / 2;
                crossBar.position.set(0, 0.26, 0);
                crossBar.scale.setScalar(featS);
                group.add(crossBar);

                const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.055, 14, 28), accentMat);
                topRing.position.set(0, 0.54, 0);
                topRing.scale.setScalar(featS);
                group.add(topRing);

            // #27 四叶幸运草 (Clover)
            } else if (sp === 'fourLeafClover') {
                // 四片饱满心形立体叶片
                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    leaf.position.set(Math.cos(ang) * 0.28, 0.04 + Math.sin(ang) * 0.28, 0);
                    leaf.rotation.z = ang;
                    leaf.scale.set(0.32, 0.26, 0.22);
                    group.add(leaf);
                }
                // 中心融合软核
                const centerPad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerPad.position.set(0, 0.04, 0.04);
                centerPad.scale.set(0.36, 0.36, 0.24);
                group.add(centerPad);

                // 右上叶片上的金色晨露珠
                const dew = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                dew.position.set(-0.36, 0.42, 0.20);
                dew.scale.setScalar(0.11 * featS);
                group.add(dew);

                // 底部小叶茎
                const stem = new THREE.Mesh(createCapsuleGeometry(0.065, 0.30, 14), accentMat);
                stem.position.set(0.12, -0.50, -0.05);
                stem.rotation.z = 0.25;
                group.add(stem);

            // ==================== 第三批保留精选 (14款) ====================

            // #22 三尖皇冠 (Crown Jewel)
            } else if (sp === 'crownJewel') {
                const cShape = new THREE.Shape();
                cShape.moveTo(-0.52, -0.45);
                cShape.lineTo(0.52, -0.45);
                cShape.lineTo(0.64, 0.36);
                cShape.quadraticCurveTo(0.32, -0.02, 0, 0.48);
                cShape.quadraticCurveTo(-0.32, -0.02, -0.64, 0.36);
                cShape.closePath();
                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.11, bevelThickness: 0.12
                });
                cGeo.center();
                group.add(new THREE.Mesh(cGeo, mainMat));

                [[-0.60, 0.50], [0, 0.62], [0.60, 0.50]].forEach(([px, py]) => {
                    const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    pearl.position.set(px, py, 0);
                    pearl.scale.setScalar(0.12 * featS);
                    group.add(pearl);
                });

            // #23 八分音符 (Music Note)
            } else if (sp === 'musicNote') {
                const noteHead = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                noteHead.position.set(-0.12, -0.26, 0);
                noteHead.rotation.z = 0.32;
                noteHead.scale.set(0.48, 0.36, 0.38);
                group.add(noteHead);

                const stem = new THREE.Mesh(createCapsuleGeometry(0.12, 0.85, 20), mainMat);
                stem.position.set(0.20, 0.16, 0);
                group.add(stem);

                const flagCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0.20, 0.58, 0),
                    new THREE.Vector3(0.54, 0.42, 0.06),
                    new THREE.Vector3(0.62, 0.10, 0.10)
                ]);
                const flag = new THREE.Mesh(new THREE.TubeGeometry(flagCurve, 24, 0.11 * featS, 16, false), accentMat);
                group.add(flag);

            // #24 四叶风车 (Pinwheel Spin)
            } else if (sp === 'pinwheelSpin') {
                for (let i = 0; i < 4; i++) {
                    const bladeShape = new THREE.Shape();
                    bladeShape.moveTo(0, 0);
                    bladeShape.quadraticCurveTo(0.45, 0.08, 0.56, 0.46);
                    bladeShape.quadraticCurveTo(0.16, 0.52, 0, 0.18);
                    bladeShape.closePath();
                    const bGeo = new THREE.ExtrudeGeometry(bladeShape, {
                        depth: 0.16, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.08, bevelThickness: 0.08
                    });
                    const blade = new THREE.Mesh(bGeo, mainMat);
                    blade.rotation.z = (i * Math.PI) / 2;
                    blade.position.z = -0.08;
                    group.add(blade);
                }
                const centerPad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerPad.scale.set(0.38, 0.38, 0.28);
                group.add(centerPad);

                const pin = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                pin.position.set(-0.34, 0.34, 0.22);
                pin.scale.setScalar(0.11 * featS);
                group.add(pin);

            // #25 炼金魔药锥形瓶 (Potion Flask)
            } else if (sp === 'potionFlask') {
                const pts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.56, -0.54),
                    new THREE.Vector2(0.62, -0.36),
                    new THREE.Vector2(0.22, 0.24),
                    new THREE.Vector2(0.22, 0.44),
                    new THREE.Vector2(0.30, 0.50),
                    new THREE.Vector2(0.01, 0.50)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mainMat));

                const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * featS, 0.14 * featS, 0.22 * featS, 20), accentMat);
                cork.position.set(0, 0.60, 0);
                group.add(cork);

            // #26 绅士蝴蝶领结 (Bowtie Ribbon)
            } else if (sp === 'bowtieRibbon') {
                [-1, 1].forEach((dir) => {
                    const wShape = new THREE.Shape();
                    wShape.moveTo(0, -0.12);
                    wShape.bezierCurveTo(dir * 0.36, -0.46, dir * 0.68, -0.38, dir * 0.66, 0.06);
                    wShape.bezierCurveTo(dir * 0.68, 0.48, dir * 0.36, 0.54, 0, 0.16);
                    wShape.closePath();
                    const wGeo = new THREE.ExtrudeGeometry(wShape, {
                        depth: 0.22, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                    });
                    wGeo.center();
                    const wing = new THREE.Mesh(wGeo, mainMat);
                    wing.position.set(dir * 0.34, 0.08, 0);
                    group.add(wing);

                    const tail = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.36 * featS, 16), accentMat);
                    tail.position.set(dir * 0.22, -0.42, -0.06);
                    tail.rotation.z = dir * 0.35;
                    group.add(tail);
                });
                const knot = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                knot.position.set(0, 0.06, 0.08);
                knot.scale.set(0.32, 0.36, 0.30);
                group.add(knot);

            // #27 竹蜻蜓帽 (Propeller Cap)
            } else if (sp === 'propellerCap') {
                const cap = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                cap.position.set(0, -0.14, 0);
                cap.scale.set(0.58, 0.48, 0.54);
                group.add(cap);

                const spindle = new THREE.Mesh(createCapsuleGeometry(0.06, 0.28, 14), accentMat);
                spindle.position.set(0, 0.42, 0);
                group.add(spindle);

                const rotor = new THREE.Mesh(createRoundedRectExtrude(0.96 * featS, 0.18 * featS, 0.08, 0.06, 0.03), accentMat);
                rotor.rotation.x = Math.PI / 2;
                rotor.rotation.z = 0.35;
                rotor.position.set(0, 0.58, 0);
                group.add(rotor);

            // #28 清风折扇 (Folding Fan)
            } else if (sp === 'foldingFan') {
                const fShape = new THREE.Shape();
                fShape.absarc(0, -0.38, 0.82, Math.PI * 0.18, Math.PI * 0.82, false);
                fShape.absarc(0, -0.38, 0.22, Math.PI * 0.82, Math.PI * 0.18, true);
                fShape.closePath();
                const fGeo = new THREE.ExtrudeGeometry(fShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                fGeo.center();
                group.add(new THREE.Mesh(fGeo, mainMat));

                const pivotBead = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                pivotBead.position.set(0, -0.46, 0.06);
                pivotBead.scale.setScalar(0.16 * featS);
                group.add(pivotBead);

            // #29 绘梦调色盘 (Artist Palette)
            } else if (sp === 'artPalette') {
                const pShape = new THREE.Shape();
                pShape.moveTo(-0.58, -0.10);
                pShape.bezierCurveTo(-0.68, 0.46, 0.12, 0.68, 0.56, 0.32);
                pShape.bezierCurveTo(0.76, 0.08, 0.62, -0.48, 0.18, -0.46);
                pShape.bezierCurveTo(-0.04, -0.44, -0.06, -0.18, -0.24, -0.22);
                pShape.bezierCurveTo(-0.42, -0.26, -0.52, -0.38, -0.58, -0.10);
                const pGeo = new THREE.ExtrudeGeometry(pShape, {
                    depth: 0.20, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                pGeo.center();
                group.add(new THREE.Mesh(pGeo, mainMat));

                [[-0.36, 0.30], [0.02, 0.42], [0.36, 0.24]].forEach(([px, py]) => {
                    const dot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    dot.position.set(px, py, 0.18);
                    dot.scale.set(0.13 * featS, 0.13 * featS, 0.08 * featS);
                    group.add(dot);
                });

            // #30 圣盾徽章 (Knight Shield)
            } else if (sp === 'knightShield') {
                const sShape = new THREE.Shape();
                sShape.moveTo(0, -0.62);
                sShape.quadraticCurveTo(0.56, -0.32, 0.54, 0.44);
                sShape.quadraticCurveTo(0, 0.56, -0.54, 0.44);
                sShape.quadraticCurveTo(-0.56, -0.32, 0, -0.62);
                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                const crest = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                crest.position.set(-0.34, 0.34, 0.22);
                crest.scale.setScalar(0.90 * featS);
                group.add(crest);

            // #31 留声机大喇叭 (Gramophone Horn)
            } else if (sp === 'gramophoneHorn') {
                const baseBox = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.38, 0.14, 0.38, 0.08), mainMat);
                baseBox.position.set(0, -0.30, 0);
                group.add(baseBox);

                const hornPts = [
                    new THREE.Vector2(0.08, -0.10),
                    new THREE.Vector2(0.16, 0.12),
                    new THREE.Vector2(0.34, 0.32),
                    new THREE.Vector2(0.58, 0.52),
                    new THREE.Vector2(0.50, 0.56)
                ];
                const horn = new THREE.Mesh(new THREE.LatheGeometry(hornPts, 24), accentMat);
                horn.position.set(0, 0.02, 0);
                horn.rotation.x = 0.38;
                horn.scale.setScalar(featS);
                group.add(horn);

            // #32 星际飞碟 UFO (Flying Saucer)
            } else if (sp === 'ufoSaucer') {
                const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                dome.position.set(0, 0.12, 0);
                dome.scale.set(0.48, 0.44, 0.46);
                group.add(dome);

                const rim = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                rim.position.set(0, -0.10, 0);
                rim.scale.set(0.84 * featS, 0.18 * featS, 0.76 * featS);
                group.add(rim);

                [-0.38, 0, 0.38].forEach((xPos) => {
                    const pod = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    pod.position.set(xPos, -0.28, 0.18);
                    pod.scale.setScalar(0.10 * featS);
                    group.add(pod);
                });

            // #33 樱桃纸杯蛋糕 (Cupcake Cherry)
            } else if (sp === 'cupcakeCherry') {
                const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.34, 0.48, 24), mainMat);
                cup.position.set(0, -0.24, 0);
                group.add(cup);

                const cream1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                cream1.position.set(0, 0.12, 0);
                cream1.scale.set(0.52 * featS, 0.26 * featS, 0.50 * featS);
                group.add(cream1);

                const cream2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                cream2.position.set(0, 0.34, 0);
                cream2.scale.set(0.36 * featS, 0.22 * featS, 0.36 * featS);
                group.add(cream2);

                const cherry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                cherry.position.set(0, 0.56, 0);
                cherry.scale.setScalar(0.15 * featS);
                group.add(cherry);

            // #34 路障雪糕筒 (Traffic Cone)
            } else if (sp === 'trafficCone') {
                const conePts = [
                    new THREE.Vector2(0.01, -0.46),
                    new THREE.Vector2(0.46, -0.46),
                    new THREE.Vector2(0.18, 0.54),
                    new THREE.Vector2(0.01, 0.58)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(conePts, 32), mainMat));

                const base = new THREE.Mesh(createRoundedRectExtrude(1.04, 1.04, 0.18, 0.12, 0.06), mainMat);
                base.rotation.x = Math.PI / 2;
                base.position.set(0, -0.48, 0);
                group.add(base);

                const collar = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.065 * featS, 16, 36), accentMat);
                collar.rotation.x = Math.PI / 2;
                collar.position.set(0, 0.18, 0);
                group.add(collar);

            // #35 法式牛角可颂 (Croissant Roll)
            } else if (sp === 'croissantRoll') {
                const midRoll = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                midRoll.position.set(0, 0.12, 0);
                midRoll.scale.set(0.46, 0.36, 0.38);
                group.add(midRoll);

                [-1, 1].forEach((dir) => {
                    const seg1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    seg1.position.set(dir * 0.38, -0.02, 0);
                    seg1.rotation.z = -dir * 0.45;
                    seg1.scale.set(0.32 * featS, 0.26 * featS, 0.30 * featS);
                    group.add(seg1);

                    const seg2 = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    seg2.position.set(dir * 0.56, -0.28, 0);
                    seg2.rotation.z = -dir * 0.95;
                    seg2.scale.set(0.24 * featS, 0.18 * featS, 0.22 * featS);
                    group.add(seg2);
                });

            // =========================================================================
            // 25 款【首次使用软件 · 职业/身份调研】专属抽象 3D 精灵构建器 (#36 ~ #60)
            // =========================================================================

            // #36 程序员 / 研发工程师：极客键帽终端 (DevKey)
            } else if (sp === 'roleDevTerminal') {
                // 微倾梯形机械键帽外壳
                const keyBase = new THREE.Mesh(createRoundedRectExtrude(1.02, 0.88, 0.24, 0.36, 0.12), mainMat);
                keyBase.position.set(0, -0.08, 0);
                group.add(keyBase);

                // 顶部悬浮的黄金 </> 代码尖括号与斜杠徽章
                const slash = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 0.32 * featS, 14), accentMat);
                slash.position.set(0, 0.54, 0.08);
                slash.rotation.z = -0.35;
                group.add(slash);

                [-1, 1].forEach((dir) => {
                    const brk1 = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
                    brk1.position.set(dir * 0.26, 0.60, 0.08);
                    brk1.rotation.z = dir * 0.65;
                    group.add(brk1);

                    const brk2 = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
                    brk2.position.set(dir * 0.26, 0.48, 0.08);
                    brk2.rotation.z = -dir * 0.65;
                    group.add(brk2);
                });

            // #37 设计师 / 创意视觉：矢量贝塞尔钢笔尖 (Bezier Nib)
            } else if (sp === 'roleBezierPen') {
                // 经典五边形收腰钢笔尖轮廓
                const nibShape = new THREE.Shape();
                nibShape.moveTo(-0.32, -0.56);
                nibShape.lineTo(0.32, -0.56);
                nibShape.lineTo(0.54, -0.04);
                nibShape.lineTo(0, 0.54);
                nibShape.lineTo(-0.54, -0.04);
                nibShape.closePath();

                const nibGeo = new THREE.ExtrudeGeometry(nibShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                nibGeo.center();
                group.add(new THREE.Mesh(nibGeo, mainMat));

                // 顶部横置黄金贝塞尔曲线切线控制柄（横杆+两端圆球锚点）
                const tangentBar = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.92 * featS, 16), accentMat);
                tangentBar.rotation.z = Math.PI / 2;
                tangentBar.position.set(0, 0.56, 0.06);
                group.add(tangentBar);

                [-0.48, 0.48].forEach((xPos) => {
                    const node = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    node.position.set(xPos * featS, 0.56, 0.06);
                    node.scale.setScalar(0.11 * featS);
                    group.add(node);
                });

            // #38 学生 / 学术教育：学士方帽精灵 (Scholar Mortarboard)
            } else if (sp === 'roleGradCap') {
                // 圆润学者脑袋
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.14, 0);
                head.scale.set(0.54, 0.50, 0.50);
                group.add(head);

                // 顶部倾斜方形学士帽板
                const board = new THREE.Mesh(createRoundedRectExtrude(0.96 * featS, 0.96 * featS, 0.14, 0.08, 0.04), accentMat);
                board.rotation.x = Math.PI / 2 + 0.18;
                board.rotation.y = 0.65;
                board.position.set(0, 0.38, 0);
                group.add(board);

                // 左侧垂挂的黄金流苏穗
                const tasselCord = new THREE.Mesh(createCapsuleGeometry(0.04 * featS, 0.34 * featS, 12), accentMat);
                tasselCord.position.set(-0.52, 0.18, 0.18);
                tasselCord.rotation.z = 0.25;
                group.add(tasselCord);

                const tasselDrop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tasselDrop.position.set(-0.56, -0.02, 0.20);
                tasselDrop.scale.set(0.09 * featS, 0.14 * featS, 0.09 * featS);
                group.add(tasselDrop);

            // #39 产品经理 / 项目策划：领航罗盘 (Navigator Compass)
            } else if (sp === 'roleCompass') {
                // 厚实圆盘罗盘机身
                const caseDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                caseDisc.position.set(0, -0.06, 0);
                caseDisc.scale.set(0.60, 0.60, 0.36);
                group.add(caseDisc);

                // 顶部怀表式黄金挂环
                const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.16 * featS, 0.055 * featS, 14, 28), accentMat);
                topRing.position.set(0, 0.60, 0);
                group.add(topRing);

                // 斜向指向右上方的黄金立体菱形指针
                const needle = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.52 * featS, 4), accentMat);
                needle.position.set(-0.26, 0.28, 0.24);
                needle.rotation.z = 0.68;
                group.add(needle);

            // #40 数据分析 / 商业智能：跃升柱状图与折线箭头 (Metric Chart)
            } else if (sp === 'roleBarChart') {
                // 左、中、右三阶递增的圆润柱体融合
                const barConfigs = [
                    { x: -0.36, y: -0.22, h: 0.36 },
                    { x: 0.0,   y: -0.10, h: 0.60 },
                    { x: 0.36,  y: 0.04,  h: 0.86 }
                ];
                barConfigs.forEach((b) => {
                    const bar = new THREE.Mesh(createCapsuleGeometry(0.20, b.h, 24), mainMat);
                    bar.position.set(b.x, b.y, 0);
                    group.add(bar);
                });

                // 底部融合软垫承载双竖瞳
                const basePad = new THREE.Mesh(createRoundedRectExtrude(1.02, 0.44, 0.18, 0.28, 0.08), mainMat);
                basePad.position.set(0, -0.22, 0.04);
                group.add(basePad);

                // 顶部破空上扬的黄金趋势箭头
                const trendCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.46, 0.18, 0.18),
                    new THREE.Vector3(-0.08, 0.42, 0.18),
                    new THREE.Vector3(0.38, 0.68, 0.18)
                ]);
                const trendLine = new THREE.Mesh(new THREE.TubeGeometry(trendCurve, 20, 0.065 * featS, 14, false), accentMat);
                group.add(trendLine);

                const arrowHead = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.26 * featS, 8), accentMat);
                arrowHead.position.set(0.44, 0.72, 0.18);
                arrowHead.rotation.z = -0.95;
                group.add(arrowHead);

            // #41 作家 / 新媒体文案：灵感羽根笔 (Feather Quill)
            } else if (sp === 'roleFeatherQuill') {
                const qShape = new THREE.Shape();
                qShape.moveTo(-0.18, -0.48);
                qShape.bezierCurveTo(-0.56, -0.10, -0.48, 0.48, 0.28, 0.64);
                qShape.bezierCurveTo(0.62, 0.42, 0.48, -0.18, 0.14, -0.48);
                qShape.closePath();

                const qGeo = new THREE.ExtrudeGeometry(qShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.11
                });
                qGeo.center();
                group.add(new THREE.Mesh(qGeo, mainMat));

                // 底部黄金钢笔尖底座
                const nibTip = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.36 * featS, 16), accentMat);
                nibTip.rotation.z = Math.PI - 0.22;
                nibTip.position.set(-0.12, -0.56, 0);
                group.add(nibTip);

            // #42 播客主播 / 自媒体：专业电容麦克风 (Studio Mic)
            } else if (sp === 'roleStudioMic') {
                // 饱满胶囊麦克风主体
                const micHead = new THREE.Mesh(createCapsuleGeometry(0.36, 0.42, 28), mainMat);
                micHead.position.set(0, 0.12, 0);
                group.add(micHead);

                // U型黄金金属托架环与桌面圆底座
                const uMount = new THREE.Mesh(new THREE.TorusGeometry(0.46 * featS, 0.065 * featS, 16, 36, Math.PI), accentMat);
                uMount.rotation.z = Math.PI;
                uMount.position.set(0, 0.12, 0);
                group.add(uMount);

                const standPost = new THREE.Mesh(createCapsuleGeometry(0.07 * featS, 0.26 * featS, 14), accentMat);
                standPost.position.set(0, -0.44, 0);
                group.add(standPost);

                const standBase = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                standBase.position.set(0, -0.58, 0);
                standBase.scale.set(0.38 * featS, 0.10 * featS, 0.34 * featS);
                group.add(standBase);

            // #43 影视导演 / 视频剪辑：场记拍板 (Clapperboard)
            } else if (sp === 'roleClapperboard') {
                // 下方圆角场记板主体
                const slate = new THREE.Mesh(createRoundedRectExtrude(1.04, 0.72, 0.18, 0.26, 0.09), mainMat);
                slate.position.set(0, -0.14, 0);
                group.add(slate);

                // 顶部张开28°的黄金场记打板条
                const clapBar = new THREE.Mesh(createRoundedRectExtrude(1.04 * featS, 0.20 * featS, 0.08, 0.24, 0.06), accentMat);
                clapBar.position.set(-0.06, 0.44, 0);
                clapBar.rotation.z = 0.36;
                group.add(clapBar);

                // 左端铰链铆钉球
                const hinge = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                hinge.position.set(-0.46, 0.24, 0.18);
                hinge.scale.setScalar(0.11 * featS);
                group.add(hinge);

            // #44 科研人员 / 自然科学：量子原子核 (Quantum Atom)
            } else if (sp === 'roleAtomCore') {
                // 中心饱满原子核
                const nucleus = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                nucleus.scale.setScalar(0.46);
                group.add(nucleus);

                // 两条正交斜交的3D黄金椭圆轨道与电子珠
                [-1, 1].forEach((dir) => {
                    const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.66 * featS, 0.052 * featS, 16, 48), accentMat);
                    orbit.rotation.x = Math.PI * 0.32;
                    orbit.rotation.y = dir * Math.PI * 0.26;
                    orbit.scale.set(1.0, 0.65, 1.0);
                    group.add(orbit);

                    const electron = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    electron.position.set(dir * 0.56 * featS, dir * 0.34 * featS, 0.16);
                    electron.scale.setScalar(0.11 * featS);
                    group.add(electron);
                });

            // #45 医疗健康 / 生物医药：仁心十字精灵 (Medical Cross)
            } else if (sp === 'roleMedCross') {
                const armV = new THREE.Mesh(createRoundedRectExtrude(0.52, 1.18, 0.16, 0.28, 0.10), mainMat);
                group.add(armV);

                const armH = new THREE.Mesh(createRoundedRectExtrude(1.18, 0.52, 0.16, 0.28, 0.10), mainMat);
                group.add(armH);

                // 左上守护星芒金徽
                const pulseBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                pulseBadge.position.set(-0.44, 0.44, 0.22);
                pulseBadge.scale.setScalar(0.85 * featS);
                group.add(pulseBadge);

            // #46 建筑工程 / 硬件制造：匠心工程师安全帽 (Hard Hat)
            } else if (sp === 'roleHardHat') {
                // 饱满半圆拱安全帽主体
                const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                dome.position.set(0, -0.06, 0);
                dome.scale.set(0.58, 0.52, 0.56);
                group.add(dome);

                // 底部环绕帽檐与前伸遮阳檐
                const brim = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                brim.position.set(0, -0.34, 0.08);
                brim.scale.set(0.72 * featS, 0.14 * featS, 0.68 * featS);
                group.add(brim);

                // 顶部中央黄金防撞凸脊
                const ridge = new THREE.Mesh(new THREE.TorusGeometry(0.46 * featS, 0.095 * featS, 16, 32, Math.PI * 0.85), accentMat);
                ridge.rotation.y = Math.PI / 2;
                ridge.rotation.x = 0.2;
                ridge.position.set(0, 0.06, 0);
                group.add(ridge);

            // #47 法律合规 / 政务咨询：公正法槌 (Justice Gavel)
            } else if (sp === 'roleJusticeGavel') {
                // 倾斜的双头圆鼓法槌头
                const mallet = new THREE.Mesh(createCapsuleGeometry(0.32, 0.64, 28), mainMat);
                mallet.rotation.z = Math.PI / 2 - 0.28;
                mallet.position.set(0, 0.10, 0);
                group.add(mallet);

                // 腰间黄金束环
                const band = new THREE.Mesh(new THREE.TorusGeometry(0.33 * featS, 0.065 * featS, 16, 36), accentMat);
                band.rotation.y = Math.PI / 2;
                band.rotation.x = -0.28;
                band.position.set(0, 0.10, 0);
                group.add(band);

                // 下方探出的法槌握柄
                const handle = new THREE.Mesh(createCapsuleGeometry(0.12 * featS, 0.48 * featS, 18), accentMat);
                handle.position.set(0.14, -0.36, -0.04);
                handle.rotation.z = -0.28;
                group.add(handle);

            // #48 市场营销 / 品牌公关：破圈靶心与羽箭 (Bullseye Target)
            } else if (sp === 'roleBullseye') {
                const disc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                disc.position.set(-0.06, -0.06, 0);
                disc.scale.set(0.60, 0.60, 0.34);
                group.add(disc);

                // 外圈立体凸环
                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.08, 16, 40), mainMat);
                ring.position.set(-0.06, -0.06, 0.12);
                group.add(ring);

                // 右上角斜向射入靶心的黄金羽箭
                const shaft = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.56 * featS, 14), accentMat);
                shaft.position.set(0.34, 0.34, 0.22);
                shaft.rotation.z = -Math.PI / 4;
                group.add(shaft);

                const fletch = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.24 * featS, 4), accentMat);
                fletch.position.set(0.52, 0.52, 0.22);
                fletch.rotation.z = Math.PI * 0.75;
                group.add(fletch);

            // #49 电商零售 / 品牌主理：潮玩手提购物袋 (Shopping Tote)
            } else if (sp === 'roleShopBag') {
                const bagShape = new THREE.Shape();
                bagShape.moveTo(-0.52, -0.54);
                bagShape.lineTo(0.52, -0.54);
                bagShape.lineTo(0.44, 0.28);
                bagShape.lineTo(-0.44, 0.28);
                bagShape.closePath();

                const bagGeo = new THREE.ExtrudeGeometry(bagShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.11
                });
                bagGeo.center();
                const bagMesh = new THREE.Mesh(bagGeo, mainMat);
                bagMesh.position.y = -0.10;
                group.add(bagMesh);

                // 顶部U型拱形提手绳
                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.068 * featS, 16, 32, Math.PI), accentMat);
                handle.position.set(0, 0.30, 0);
                group.add(handle);

                // 左上角斜挂的黄金价格吊牌
                const tag = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.32 * featS, 0.06, 0.06, 0.03), accentMat);
                tag.position.set(-0.44, 0.22, 0.22);
                tag.rotation.z = 0.42;
                group.add(tag);

            // #50 企业高管 / 创业团队：领航商务公文包 (Briefcase)
            } else if (sp === 'roleBriefcase') {
                const caseBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.78, 0.20, 0.30, 0.10), mainMat);
                caseBody.position.set(0, -0.08, 0);
                group.add(caseBody);

                // 顶部硬朗拱形提手
                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.065 * featS, 16, 32, Math.PI), accentMat);
                handle.position.set(0, 0.36, 0);
                group.add(handle);

                // 正面左右两枚黄金搭扣
                [-0.32, 0.32].forEach((xPos) => {
                    const clasp = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.16 * featS, 14), accentMat);
                    clasp.position.set(xPos, 0.18, 0.22);
                    group.add(clasp);
                });

            // #51 社群运营 / 人力行政：共鸣双对话气泡 (Chat Bubbles)
            } else if (sp === 'roleChatBubble') {
                const bShape = new THREE.Shape();
                bShape.moveTo(-0.52, -0.48);
                bShape.lineTo(-0.18, -0.34);
                bShape.quadraticCurveTo(0.56, -0.38, 0.56, 0.08);
                bShape.quadraticCurveTo(0.56, 0.52, 0.0, 0.52);
                bShape.quadraticCurveTo(-0.56, 0.52, -0.56, 0.08);
                bShape.quadraticCurveTo(-0.56, -0.18, -0.42, -0.28);
                bShape.closePath();

                const bGeo = new THREE.ExtrudeGeometry(bShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                bGeo.center();
                group.add(new THREE.Mesh(bGeo, mainMat));

                // 右上角探出的黄金回应小气泡
                const subBubble = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                subBubble.position.set(0.46, 0.44, -0.08);
                subBubble.scale.set(0.28 * featS, 0.22 * featS, 0.18 * featS);
                group.add(subBubble);

            // #52 游戏开发 / 动漫娱乐：次元游戏手柄 (Gamepad)
            } else if (sp === 'roleGamepad') {
                const padShape = new THREE.Shape();
                padShape.moveTo(-0.34, 0.38);
                padShape.lineTo(0.34, 0.38);
                padShape.quadraticCurveTo(0.68, 0.38, 0.64, -0.36);
                padShape.quadraticCurveTo(0.60, -0.58, 0.38, -0.46);
                padShape.quadraticCurveTo(0.22, -0.16, 0, -0.16);
                padShape.quadraticCurveTo(-0.22, -0.16, -0.38, -0.46);
                padShape.quadraticCurveTo(-0.60, -0.58, -0.64, -0.36);
                padShape.quadraticCurveTo(-0.68, 0.38, -0.34, 0.38);

                const padGeo = new THREE.ExtrudeGeometry(padShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                padGeo.center();
                group.add(new THREE.Mesh(padGeo, mainMat));

                // 顶部左右肩键与按键宝石
                [-0.36, 0.36].forEach((xPos) => {
                    const bumper = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    bumper.position.set(xPos, 0.46, 0);
                    bumper.scale.set(0.18 * featS, 0.08 * featS, 0.14 * featS);
                    group.add(bumper);
                });

            // #53 餐饮美食 / 生活方式：云朵高顶主厨帽 (Chef Toque)
            } else if (sp === 'roleChefHat') {
                // 下方挺括的厨师帽箍底座
                const band = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.42, 0.42, 28), mainMat);
                band.position.set(0, -0.22, 0);
                group.add(band);

                // 上方四团饱满蓬松的厨师帽云顶
                [[-0.28, 0.18, 0], [0.28, 0.18, 0], [0, 0.32, 0.12], [0, 0.26, -0.12]].forEach(([x, y, z]) => {
                    const puff = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    puff.position.set(x, y, z);
                    puff.scale.setScalar(0.32 * featS);
                    group.add(puff);
                });

                // 帽箍黄金装饰带
                const goldTrim = new THREE.Mesh(new THREE.TorusGeometry(0.45 * featS, 0.052 * featS, 14, 36), accentMat);
                goldTrim.rotation.x = Math.PI / 2;
                goldTrim.position.set(0, -0.02, 0);
                group.add(goldTrim);

            // #54 人工智能 / 算法工程：神经网络算力芯片 (AI Chip)
            } else if (sp === 'roleAIChip') {
                const chipCore = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.84, 0.18, 0.24, 0.08), mainMat);
                group.add(chipCore);

                // 四周对称探出的12根黄金芯片引脚
                [-0.24, 0, 0.24].forEach((offset) => {
                    // 上下引脚
                    const pinV = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.16 * featS, 12), accentMat);
                    pinV.position.set(offset, 0, -0.04);
                    group.add(pinV);

                    // 左右引脚
                    const pinH = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.16 * featS, 12), accentMat);
                    pinH.rotation.z = Math.PI / 2;
                    pinH.position.set(0, offset, -0.04);
                    group.add(pinH);
                });

                // 左上角AI算力星芒
                const aiSpark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                aiSpark.position.set(-0.36, 0.36, 0.22);
                aiSpark.scale.setScalar(0.75 * featS);
                group.add(aiSpark);

            // #55 网络安全 / 系统运维：守护密锁 (Cyber Padlock)
            } else if (sp === 'roleCyberLock') {
                const lockBody = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.78, 0.22, 0.30, 0.10), mainMat);
                lockBody.position.set(0, -0.18, 0);
                group.add(lockBody);

                // 顶部粗壮的黄金U型安全锁梁
                const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.095 * featS, 18, 36, Math.PI), accentMat);
                shackle.position.set(0, 0.28, 0);
                group.add(shackle);

                [-0.28, 0.28].forEach((xPos) => {
                    const leg = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.22 * featS, 16), accentMat);
                    leg.position.set(xPos * featS, 0.20, 0);
                    group.add(leg);
                });

            // #56 金融投资 / 财务会计：创投方孔金币 (FinTech Coin Sprout)
            } else if (sp === 'roleCoinSprout') {
                // 饱满圆饼钱币主体
                const coin = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                coin.position.set(0, -0.08, 0);
                coin.scale.set(0.60, 0.60, 0.34);
                group.add(coin);

                // 外圈立体钱币边环
                const rim = new THREE.Mesh(new THREE.TorusGeometry(0.50, 0.08, 16, 42), mainMat);
                rim.position.set(0, -0.08, 0.08);
                group.add(rim);

                // 顶部象征复利增长的黄金双叶春芽
                [-1, 1].forEach((dir) => {
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    leaf.position.set(dir * 0.16, 0.60, 0);
                    leaf.rotation.z = -dir * 0.65;
                    leaf.scale.set(0.11 * featS, 0.24 * featS, 0.08 * featS);
                    group.add(leaf);
                });

            // #57 航空差旅 / 供应链物流：机长领航飞翼徽 (Pilot Wings)
            } else if (sp === 'rolePilotWings') {
                // 中心圆润领航盾核
                const centerShield = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerShield.scale.set(0.46, 0.48, 0.38);
                group.add(centerShield);

                // 两侧对称展开的三层阶梯式流线飞翼
                [-1, 1].forEach((dir) => {
                    [0, 1, 2].forEach((layer) => {
                        const feather = new THREE.Mesh(createCapsuleGeometry((0.085 - layer * 0.012) * featS, (0.48 - layer * 0.10) * featS, 16), accentMat);
                        feather.position.set(dir * (0.46 + layer * 0.04), 0.14 - layer * 0.14, -0.04);
                        feather.rotation.z = dir * (1.18 + layer * 0.12);
                        group.add(feather);
                    });
                });

            // #58 体育运动 / 培训教练：荣耀双耳奖杯 (Trophy Cup)
            } else if (sp === 'roleTrophyCup') {
                const cupPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.36, -0.54),
                    new THREE.Vector2(0.14, -0.32),
                    new THREE.Vector2(0.14, -0.14),
                    new THREE.Vector2(0.46, 0.12),
                    new THREE.Vector2(0.50, 0.50),
                    new THREE.Vector2(0.01, 0.48)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat));

                // 左右对称C型黄金奖杯耳把
                [-1, 1].forEach((dir) => {
                    const ear = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.065 * featS, 16, 32, Math.PI * 1.1), accentMat);
                    ear.position.set(dir * 0.44, 0.24, 0);
                    ear.rotation.z = dir === 1 ? -Math.PI / 2 : Math.PI / 2;
                    group.add(ear);
                });

            // #59 时尚穿搭 / 工业家居：灵感宽肩衣架 (Boutique Hanger)
            } else if (sp === 'roleCoatHanger') {
                const hShape = new THREE.Shape();
                hShape.moveTo(-0.66, -0.38);
                hShape.lineTo(0.66, -0.38);
                hShape.quadraticCurveTo(0.76, -0.38, 0.64, -0.18);
                hShape.lineTo(0.12, 0.24);
                hShape.quadraticCurveTo(0, 0.32, -0.12, 0.24);
                hShape.lineTo(-0.64, -0.18);
                hShape.quadraticCurveTo(-0.76, -0.38, -0.66, -0.38);

                const hGeo = new THREE.ExtrudeGeometry(hShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                hGeo.center();
                const hangerBody = new THREE.Mesh(hGeo, mainMat);
                hangerBody.position.y = -0.10;
                group.add(hangerBody);

                // 顶部优雅弯曲的天鹅颈黄金挂钩
                const hookCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 0.20, 0),
                    new THREE.Vector3(0, 0.36, 0),
                    new THREE.Vector3(-0.14, 0.48, 0),
                    new THREE.Vector3(0.04, 0.62, 0),
                    new THREE.Vector3(0.18, 0.48, 0)
                ]);
                const hook = new THREE.Mesh(new THREE.TubeGeometry(hookCurve, 24, 0.068 * featS, 14, false), accentMat);
                group.add(hook);

            // #60 自由职业 / 斜杠探索者：环绕小行星 (Ringed Planet)
            } else if (sp === 'roleRingedPlanet') {
                const planet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                planet.scale.setScalar(0.50);
                group.add(planet);

                // 宽阔倾斜的360°黄金星环
                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.68 * featS, 0.085 * featS, 16, 48), accentMat);
                ring.rotation.x = Math.PI * 0.38;
                ring.rotation.y = -0.32;
                ring.scale.set(1.0, 1.0, 0.45);
                group.add(ring);

                // 伴生小卫星
                const moon = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                moon.position.set(-0.54, 0.48, 0.18);
                moon.scale.setScalar(0.11 * featS);
                group.add(moon);

            // =========================================================================
            // 全新重新设计的 10 款【首屏 5×2 职业与身份调研】专属 3D 精灵构建器 (#50 ~ #59)
            // =========================================================================

            // #50 【1. 学生】展翼书卷 (Bookie - Open Winged Hardcover Book + Bookmark + Star)
            } else if (sp === 'surveyStudentBook') {
                // 展开如双翼的立体精装书页轮廓
                const bookShape = new THREE.Shape();
                bookShape.moveTo(0, -0.32);
                bookShape.quadraticCurveTo(0.32, -0.18, 0.64, -0.28);
                bookShape.lineTo(0.58, 0.44);
                bookShape.quadraticCurveTo(0.28, 0.52, 0, 0.30);
                bookShape.quadraticCurveTo(-0.28, 0.52, -0.58, 0.44);
                bookShape.lineTo(-0.64, -0.28);
                bookShape.quadraticCurveTo(-0.32, -0.18, 0, -0.32);

                const bookGeo = new THREE.ExtrudeGeometry(bookShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                bookGeo.center();
                group.add(new THREE.Mesh(bookGeo, mainMat));

                // 书脊中央丰满软腹（承载双竖瞳）
                const spinePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                spinePad.position.set(0, -0.02, 0.12);
                spinePad.scale.set(0.42, 0.36, 0.26);
                group.add(spinePad);

                // 底部俏皮探出的黄金书签丝带
                const ribbon = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.28 * featS, 14), accentMat);
                ribbon.position.set(0.08, -0.52, 0.08);
                ribbon.rotation.z = 0.22;
                group.add(ribbon);

                // 左上悬浮的智慧四角星徽
                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.48, 0.52, 0.22);
                star.rotation.z = 0.20;
                star.scale.setScalar(0.92 * featS);
                group.add(star);

            // #51 【2. IT / 互联网】极客笔记本电脑 + </> 黄金代码徽章 (GeekBook Laptop + Code Crest)
            } else if (sp === 'surveyITBrowser') {
                // 1. 微后仰的笔记本显示屏主体（承载双竖瞳）
                const screenBody = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.72, 0.16, 0.20, 0.08), mainMat);
                screenBody.position.set(0, 0.08, -0.04);
                screenBody.rotation.x = -0.10;
                group.add(screenBody);

                // 2. 向前平伸展开的笔记本键盘底座与黄金触控板条
                const kbBase = new THREE.Mesh(createRoundedRectExtrude(1.16, 0.58, 0.14, 0.10, 0.05), mainMat);
                kbBase.rotation.x = Math.PI / 2;
                kbBase.position.set(0, -0.34, 0.22);
                group.add(kbBase);

                const kbPad = new THREE.Mesh(createRoundedRectExtrude(0.84 * featS, 0.24 * featS, 0.06, 0.05, 0.02), accentMat);
                kbPad.rotation.x = Math.PI / 2;
                kbPad.position.set(0, -0.27, 0.22);
                group.add(kbPad);

                // 3. 屏幕顶部醒目的黄金 </> 代码尖括号徽章
                const codeGroup = new THREE.Group();
                codeGroup.position.set(0, 0.58, 0.04);
                codeGroup.scale.setScalar(featS);

                // 中央斜杠 /
                const slash = new THREE.Mesh(createCapsuleGeometry(0.045, 0.28, 12), accentMat);
                slash.rotation.z = -0.32;
                codeGroup.add(slash);

                // 左右尖括号 < >
                [-1, 1].forEach((dir) => {
                    const topArm = new THREE.Mesh(createCapsuleGeometry(0.042, 0.17, 12), accentMat);
                    topArm.position.set(dir * 0.26, 0.06, 0);
                    topArm.rotation.z = dir * 0.68;
                    codeGroup.add(topArm);

                    const botArm = new THREE.Mesh(createCapsuleGeometry(0.042, 0.17, 12), accentMat);
                    botArm.position.set(dir * 0.26, -0.06, 0);
                    botArm.rotation.z = -dir * 0.68;
                    codeGroup.add(botArm);
                });
                group.add(codeGroup);

            // #52 【3. 产品 / 设计 / 运营】经典矢量钢笔尖 + 贝塞尔曲线控制柄 (Bezier Pen Nib)
            } else if (sp === 'surveyProdDesign') {
                // 1. 经典五边形收腰矢量钢笔尖轮廓
                const nibShape = new THREE.Shape();
                nibShape.moveTo(-0.34, -0.42);
                nibShape.lineTo(0.34, -0.42);
                nibShape.lineTo(0.54, 0.02);
                nibShape.quadraticCurveTo(0.28, 0.36, 0, 0.60);
                nibShape.quadraticCurveTo(-0.28, 0.36, -0.54, 0.02);
                nibShape.closePath();

                const nibGeo = new THREE.ExtrudeGeometry(nibShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                nibGeo.center();
                group.add(new THREE.Mesh(nibGeo, mainMat));

                // 2. 钢笔尖标志性的中心呼吸圆孔与开叉中缝线
                const breatherHole = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                breatherHole.position.set(0, 0.20, 0.20);
                breatherHole.scale.set(0.095 * featS, 0.095 * featS, 0.05 * featS);
                group.add(breatherHole);

                const slitLine = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.28 * featS, 10), accentMat);
                slitLine.position.set(0, 0.40, 0.20);
                group.add(slitLine);

                // 3. 底部黄金金属笔箍底座
                const ferrule = new THREE.Mesh(createRoundedRectExtrude(0.74 * featS, 0.18 * featS, 0.08, 0.26, 0.06), accentMat);
                ferrule.position.set(0, -0.52, 0);
                group.add(ferrule);

                // 4. 顶部横跨的黄金贝塞尔曲线切线控制柄与双方形锚点
                const handleBar = new THREE.Mesh(createCapsuleGeometry(0.038 * featS, 1.08 * featS, 14), accentMat);
                handleBar.rotation.z = Math.PI / 2;
                handleBar.position.set(0, 0.56, -0.02);
                group.add(handleBar);

                [-0.56, 0.56].forEach((xPos) => {
                    const anchorNode = new THREE.Mesh(createRoundedRectExtrude(0.16 * featS, 0.16 * featS, 0.04, 0.10, 0.03), accentMat);
                    anchorNode.position.set(xPos * featS, 0.56, 0.02);
                    group.add(anchorNode);
                });

            // #53 【4. 市场 / 销售 / 商务】破浪扩音喇叭 (Megaphone + Soundwave Arcs)
            } else if (sp === 'surveyMarketingHorn') {
                // 昂扬倾斜的圆润扩音喇叭锥体
                const hornGroup = new THREE.Group();
                hornGroup.rotation.z = 0.24;

                const conePts = [
                    new THREE.Vector2(0.01, -0.48),
                    new THREE.Vector2(0.24, -0.46),
                    new THREE.Vector2(0.34, -0.08),
                    new THREE.Vector2(0.54, 0.36),
                    new THREE.Vector2(0.46, 0.42),
                    new THREE.Vector2(0.01, 0.38)
                ];
                const hornBody = new THREE.Mesh(new THREE.LatheGeometry(conePts, 32), mainMat);
                hornBody.rotation.z = -Math.PI / 2;
                hornGroup.add(hornBody);

                // 喇叭口黄金宽边圈
                const lipRing = new THREE.Mesh(new THREE.TorusGeometry(0.48 * featS, 0.075 * featS, 16, 36), accentMat);
                lipRing.rotation.y = Math.PI / 2;
                lipRing.position.set(0.38, 0, 0);
                hornGroup.add(lipRing);

                // 下方小巧握把
                const grip = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.30 * featS, 16), accentMat);
                grip.position.set(-0.16, -0.42, 0);
                grip.rotation.z = 0.35;
                hornGroup.add(grip);

                group.add(hornGroup);

                // 右上前方激荡而出的两道黄金增长声浪弧
                [0.64, 0.82].forEach((r) => {
                    const wave = new THREE.Mesh(new THREE.TorusGeometry(r * featS, 0.048 * featS, 12, 24, Math.PI * 0.42), accentMat);
                    wave.position.set(0.05, 0.05, 0.10);
                    wave.rotation.z = -0.18;
                    group.add(wave);
                });

            // #54 【5. 教育 / 科研】量子烧瓶与双轨原子星环 (Conical Lab Flask + Atomic Orbits)
            } else if (sp === 'surveyEduScope') {
                // 1. 经典宽底收颈实验室锥形烧瓶主体
                const flaskPts = [
                    new THREE.Vector2(0.01, -0.48),
                    new THREE.Vector2(0.48, -0.48),
                    new THREE.Vector2(0.54, -0.32),
                    new THREE.Vector2(0.20, 0.16),
                    new THREE.Vector2(0.20, 0.44),
                    new THREE.Vector2(0.01, 0.44)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(flaskPts, 32), mainMat));

                // 烧瓶口黄金外翻唇圈
                const flaskRim = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.062 * featS, 16, 32), accentMat);
                flaskRim.rotation.x = Math.PI / 2;
                flaskRim.position.set(0, 0.46, 0);
                group.add(flaskRim);

                // 2. 环绕瓶身的双轨交叉3D黄金原子电子轨道与电子球
                [-1, 1].forEach((dir) => {
                    const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.68 * featS, 0.048 * featS, 16, 48), accentMat);
                    orbit.position.set(0, -0.06, 0);
                    orbit.rotation.x = Math.PI * 0.36;
                    orbit.rotation.y = dir * Math.PI * 0.26;
                    orbit.scale.set(1.0, 0.62, 1.0);
                    group.add(orbit);

                    const electron = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    electron.position.set(dir * 0.58 * featS, dir * 0.24 * featS - 0.06, 0.18);
                    electron.scale.setScalar(0.10 * featS);
                    group.add(electron);
                });

                // 3. 瓶口升腾的科研分子气泡
                const bubble1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                bubble1.position.set(-0.06, 0.64, 0.06);
                bubble1.scale.setScalar(0.10 * featS);
                group.add(bubble1);

                const bubble2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                bubble2.position.set(0.12, 0.78, 0.08);
                bubble2.scale.setScalar(0.068 * featS);
                group.add(bubble2);

            // #55 【6. 媒体 / 内容 / 创意】流光播客三角棱镜 (PlayMuse Prism + Beret Crown)
            } else if (sp === 'surveyMediaCreative') {
                // 饱满圆角播放键三角形轮廓 (▶)
                const playShape = new THREE.Shape();
                playShape.moveTo(-0.42, 0.52);
                playShape.quadraticCurveTo(-0.52, 0.56, -0.52, 0.42);
                playShape.lineTo(-0.52, -0.42);
                playShape.quadraticCurveTo(-0.52, -0.56, -0.42, -0.52);
                playShape.lineTo(0.54, -0.06);
                playShape.quadraticCurveTo(0.64, 0, 0.54, 0.06);
                playShape.closePath();

                const playGeo = new THREE.ExtrudeGeometry(playShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.11, bevelThickness: 0.13
                });
                playGeo.center();
                group.add(new THREE.Mesh(playGeo, mainMat));

                // 顶部斜戴的黄金艺术家贝雷帽与星徽
                const beret = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                beret.position.set(-0.22, 0.52, 0.04);
                beret.rotation.z = 0.32;
                beret.scale.set(0.34 * featS, 0.15 * featS, 0.30 * featS);
                group.add(beret);

                const stem = new THREE.Mesh(createCapsuleGeometry(0.04 * featS, 0.12 * featS, 10), accentMat);
                stem.position.set(-0.26, 0.66, 0.04);
                stem.rotation.z = 0.32;
                group.add(stem);

                const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                spark.position.set(0.46, 0.42, 0.20);
                spark.scale.setScalar(0.78 * featS);
                group.add(spark);

            // #56 【7. 金融 / 财务 / 法务】浮雕 ¥ 金币盾与高悬公正天平 (CoinScale + Currency Emblem)
            } else if (sp === 'surveyFinLegal') {
                // 1. 下方厚实宽边浮雕金币主体（承载双竖瞳）
                const coinDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                coinDisc.position.set(0, -0.16, 0);
                coinDisc.scale.set(0.52, 0.52, 0.32);
                group.add(coinDisc);

                const coinRim = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.082, 18, 40), mainMat);
                coinRim.position.set(0, -0.16, 0.10);
                group.add(coinRim);

                // 2. 金币左上正面镶嵌的立体黄金 ¥ 货币符号
                const yenGroup = new THREE.Group();
                yenGroup.position.set(-0.24, 0.08, 0.26);
                yenGroup.scale.setScalar(0.72 * featS);

                const yenStem = new THREE.Mesh(createCapsuleGeometry(0.045, 0.20, 10), accentMat);
                yenStem.position.set(0, -0.06, 0);
                yenGroup.add(yenStem);

                [-1, 1].forEach((dir) => {
                    const vArm = new THREE.Mesh(createCapsuleGeometry(0.042, 0.18, 10), accentMat);
                    vArm.position.set(dir * 0.08, 0.10, 0);
                    vArm.rotation.z = -dir * 0.55;
                    yenGroup.add(vArm);
                });

                const crossBar = new THREE.Mesh(createCapsuleGeometry(0.038, 0.22, 10), accentMat);
                crossBar.rotation.z = Math.PI / 2;
                crossBar.position.set(0, -0.02, 0);
                yenGroup.add(crossBar);
                group.add(yenGroup);

                // 3. 顶部高悬式黄金公正天平（左右双秤盘悬于金币外侧留白区，轮廓清晰）
                const pillar = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.34 * featS, 14), accentMat);
                pillar.position.set(0, 0.42, 0);
                group.add(pillar);

                const finial = new THREE.Mesh(new THREE.OctahedronGeometry(0.14 * featS, 0), accentMat);
                finial.position.set(0, 0.64, 0);
                group.add(finial);

                const beam = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.18 * featS, 18), accentMat);
                beam.rotation.z = Math.PI / 2;
                beam.position.set(0, 0.50, 0);
                group.add(beam);

                [-0.58, 0.58].forEach((xPos) => {
                    const cord = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.30 * featS, 10), accentMat);
                    cord.position.set(xPos * featS, 0.32, 0);
                    group.add(cord);

                    const pan = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    pan.position.set(xPos * featS, 0.14, 0);
                    pan.scale.set(0.22 * featS, 0.085 * featS, 0.22 * featS);
                    group.add(pan);
                });

            // #57 【8. 企业职能 / 管理】高管商务公文包 + 黄金领带 (ExecCase Briefcase & Necktie)
            } else if (sp === 'surveyCorpManage') {
                // 1. 稳重大气的圆角高管公文箱主体
                const caseBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.76, 0.18, 0.30, 0.10), mainMat);
                caseBody.position.set(0, -0.10, 0);
                group.add(caseBody);

                // 2. 顶部醒目的拱形公文包提手
                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.072 * featS, 16, 32, Math.PI), accentMat);
                handle.position.set(0, 0.34, 0);
                group.add(handle);

                // 3. 双肩对称的黄金锁扣搭扣
                [-0.36, 0.36].forEach((xPos) => {
                    const latch = new THREE.Mesh(createCapsuleGeometry(0.058 * featS, 0.15 * featS, 12), accentMat);
                    latch.position.set(xPos, 0.20, 0.22);
                    group.add(latch);
                });

                // 4. 正前方极具管理辨识度的3D立体黄金商务领带
                const tieShape = new THREE.Shape();
                tieShape.moveTo(-0.07, 0.12);
                tieShape.lineTo(0.07, 0.12);
                tieShape.lineTo(0.12, -0.16);
                tieShape.lineTo(0, -0.30);
                tieShape.lineTo(-0.12, -0.16);
                tieShape.closePath();

                const tieGeo = new THREE.ExtrudeGeometry(tieShape, {
                    depth: 0.06, bevelEnabled: true, bevelSegments: 6, steps: 1, bevelSize: 0.025, bevelThickness: 0.025
                });
                tieGeo.center();
                const tieMesh = new THREE.Mesh(tieGeo, accentMat);
                tieMesh.position.set(0.08, -0.30, 0.24);
                tieMesh.scale.setScalar(featS);
                group.add(tieMesh);

            // #58 【9. 自由职业 / 创业者】破空小火箭 (LaunchPad Startup Rocket)
            } else if (sp === 'surveyStartupRocket') {
                // 流线型胖肚火箭舱体
                const rPts = [
                    new THREE.Vector2(0.01, -0.44),
                    new THREE.Vector2(0.32, -0.42),
                    new THREE.Vector2(0.46, -0.08),
                    new THREE.Vector2(0.42, 0.26),
                    new THREE.Vector2(0.22, 0.56),
                    new THREE.Vector2(0.01, 0.68)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(rPts, 32), mainMat));

                // 顶部黄金鼻锥帽
                const nosePts = [
                    new THREE.Vector2(0.31, 0.36),
                    new THREE.Vector2(0.18, 0.58),
                    new THREE.Vector2(0.01, 0.70)
                ];
                const nose = new THREE.Mesh(new THREE.LatheGeometry(nosePts, 28), accentMat);
                nose.scale.setScalar(featS);
                group.add(nose);

                // 左右对称后掠黄金尾翼与底部推进火焰球
                [-1, 1].forEach((dir) => {
                    const fin = new THREE.Mesh(createCapsuleGeometry(0.09 * featS, 0.34 * featS, 14), accentMat);
                    fin.position.set(dir * 0.44, -0.26, 0);
                    fin.rotation.z = dir * 0.48;
                    group.add(fin);
                });

                const flame = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                flame.position.set(0, -0.56, 0);
                flame.scale.set(0.18 * featS, 0.22 * featS, 0.18 * featS);
                group.add(flame);

            // #59 【10. 其他（医疗、政府、服务业、制造、待业等）】万象分类四宫格 (BentoMore 2x2 Category Grid)
            } else if (sp === 'surveyOtherOmni') {
                const tileGeo = createRoundedRectExtrude(0.46, 0.46, 0.14, 0.26, 0.08);

                // 1. 左下、右下、左上三枚圆角分类模块 + 底部平滑融合软垫
                [[-0.26, -0.26], [0.26, -0.26], [-0.26, 0.26]].forEach(([tx, ty]) => {
                    const tile = new THREE.Mesh(tileGeo, mainMat);
                    tile.position.set(tx, ty, 0);
                    group.add(tile);
                });

                const bridgePad = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.44, 0.16, 0.26, 0.08), mainMat);
                bridgePad.position.set(0, -0.22, 0.02);
                group.add(bridgePad);

                // 2. 右上角第4模块：45°旋转跃出的黄金菱形块（通用“更多/其他分类”视觉符号）
                const diamondTile = new THREE.Mesh(createRoundedRectExtrude(0.42 * featS, 0.42 * featS, 0.12, 0.26, 0.08), accentMat);
                diamondTile.position.set(0.30, 0.30, 0.04);
                diamondTile.rotation.z = Math.PI / 4;
                group.add(diamondTile);

                // 3. 左上模块表面的三枚黄金“•••”更多圆点
                [-0.36, -0.26, -0.16].forEach((dx) => {
                    const dot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    dot.position.set(dx, 0.26, 0.22);
                    dot.scale.set(0.042 * featS, 0.042 * featS, 0.03 * featS);
                    group.add(dot);
                });

            // =========================================================================
            // 全新追加 31 款：【天然蔬果 (15款) & 匠心料理 (16款)】美食 3D 构建器 (#60 ~ #90)
            // =========================================================================


            } else if (sp === 'foodStrawberry') {
                const sbPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.24, -0.46),
                    new THREE.Vector2(0.46, -0.12),
                    new THREE.Vector2(0.54, 0.22),
                    new THREE.Vector2(0.38, 0.42),
                    new THREE.Vector2(0.01, 0.44)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(sbPts, 32), mainMat));

                // 顶部五角星形草莓叶萼冠 + 弯果蒂
                for (let i = 0; i < 5; i++) {
                    const ang = (i / 5) * Math.PI * 2;
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    leaf.position.set(Math.cos(ang) * 0.24 * featS, 0.44, Math.sin(ang) * 0.24 * featS);
                    leaf.rotation.y = -ang;
                    leaf.scale.set(0.22 * featS, 0.08 * featS, 0.12 * featS);
                    group.add(leaf);
                }
                const stem = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.22 * featS, 12), accentMat);
                stem.position.set(0.04, 0.58, 0);
                stem.rotation.z = -0.28;
                group.add(stem);

                // 双颊立体草莓籽点缀
                [[-0.32, 0.14, 0.36], [0.34, 0.14, 0.36], [-0.26, -0.22, 0.32], [0.28, -0.22, 0.32]].forEach(([x, y, z]) => {
                    const seed = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    seed.position.set(x, y, z);
                    seed.scale.set(0.038 * featS, 0.055 * featS, 0.03 * featS);
                    group.add(seed);
                });

            // #61 黄金凤梨 (Pineapple)
            } else if (sp === 'foodPineapple') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0, -0.16, 0);
                body.scale.set(0.50, 0.52, 0.46);
                group.add(body);

                // 两侧菠萝菱格凸粒纹理
                [-1, 1].forEach((dir) => {
                    [-0.32, -0.14, 0.04].forEach((yPos) => {
                        const bump = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                        bump.position.set(dir * 0.46, yPos, 0.08);
                        bump.scale.setScalar(0.11);
                        group.add(bump);
                    });
                });

                // 顶部双层高耸热带凤梨剑叶冠
                [-0.55, -0.26, 0, 0.26, 0.55].forEach((tilt, idx) => {
                    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.13 * featS, 0.48 * featS, 6), accentMat);
                    blade.position.set(tilt * 0.38, 0.48 + (idx % 2) * 0.08, (idx % 2 === 0 ? 0.04 : -0.04));
                    blade.rotation.z = -tilt * 0.85;
                    group.add(blade);
                });

            // #62 双生樱桃 (Twin Cherries)
            } else if (sp === 'foodTwinCherry') {
                // 主樱桃（正面承载双竖瞳）
                const mainBerry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                mainBerry.position.set(0.08, -0.22, 0.08);
                mainBerry.scale.set(0.46, 0.44, 0.44);
                group.add(mainBerry);

                // 左后方伴生小樱桃
                const subBerry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                subBerry.position.set(-0.42, -0.12, -0.12);
                subBerry.scale.setScalar(0.32);
                group.add(subBerry);

                // 高挑交汇的黄金V型双果柄与顶叶
                const stem1 = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0.08, 0.16, 0.08),
                    new THREE.Vector3(0.14, 0.42, 0.04),
                    new THREE.Vector3(0.02, 0.64, 0)
                ]);
                const stem2 = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.40, 0.14, -0.10),
                    new THREE.Vector3(-0.22, 0.44, -0.04),
                    new THREE.Vector3(0.02, 0.64, 0)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(stem1, 20, 0.048 * featS, 12, false), accentMat));
                group.add(new THREE.Mesh(new THREE.TubeGeometry(stem2, 20, 0.045 * featS, 12, false), accentMat));

                const topLeaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                topLeaf.position.set(0.22, 0.62, 0.04);
                topLeaf.rotation.z = -0.45;
                topLeaf.scale.set(0.22 * featS, 0.10 * featS, 0.08 * featS);
                group.add(topLeaf);

            // #63 森林橡果 (Acorn)
            } else if (sp === 'foodAcorn') {
                const nutPts = [
                    new THREE.Vector2(0.01, -0.58),
                    new THREE.Vector2(0.18, -0.48),
                    new THREE.Vector2(0.48, -0.16),
                    new THREE.Vector2(0.48, 0.18),
                    new THREE.Vector2(0.01, 0.22)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(nutPts, 32), mainMat));

                // 顶部宽檐贝雷帽壳斗与小枝蒂
                const capDome = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                capDome.position.set(0, 0.24, 0);
                capDome.scale.set(0.58 * featS, 0.28 * featS, 0.56 * featS);
                group.add(capDome);

                const twig = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.22 * featS, 14), accentMat);
                twig.position.set(0.04, 0.54, 0);
                twig.rotation.z = -0.25;
                group.add(twig);

            // #64 剥皮芭娜 (Peeled Banana - 弯月香蕉果肉 + 三瓣宽厚外翻蕉皮底座)
            } else if (sp === 'foodBanana') {
                // 1. 弯月形向上翘起的饱满香蕉果肉主体（带顶端香蕉柄小尖头）
                const bananaCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0.04, -0.34, 0),
                    new THREE.Vector3(-0.04, 0.08, 0.04),
                    new THREE.Vector3(0.10, 0.48, 0.02)
                ]);
                const fleshTube = new THREE.Mesh(new THREE.TubeGeometry(bananaCurve, 28, 0.29, 24, false), mainMat);
                group.add(fleshTube);

                const topCap = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                topCap.position.set(0.10, 0.48, 0.02);
                topCap.scale.set(0.28, 0.24, 0.28);
                group.add(topCap);

                // 香蕉顶端标志性的深金小果蒂尖
                const tipStem = new THREE.Mesh(createCapsuleGeometry(0.058 * featS, 0.14 * featS, 14), accentMat);
                tipStem.position.set(0.16, 0.68, 0.02);
                tipStem.rotation.z = -0.35;
                group.add(tipStem);

                // 2. 腰间向左右与前方优雅翻卷下垂的三片宽厚香蕉皮瓣
                [-1, 1].forEach((dir) => {
                    const pShape = new THREE.Shape();
                    pShape.moveTo(0, 0.10);
                    pShape.quadraticCurveTo(dir * 0.48, 0.12, dir * 0.68, -0.32);
                    pShape.quadraticCurveTo(dir * 0.42, -0.52, 0, -0.28);
                    pShape.closePath();

                    const pGeo = new THREE.ExtrudeGeometry(pShape, {
                        depth: 0.16, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.07, bevelThickness: 0.08
                    });
                    const peel = new THREE.Mesh(pGeo, accentMat);
                    peel.position.set(0, -0.08, -0.06);
                    peel.scale.setScalar(featS);
                    group.add(peel);
                });

                // 正前方下翻的第三片弧形蕉皮托
                const frontPeel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                frontPeel.position.set(0, -0.36, 0.18);
                frontPeel.rotation.x = 0.55;
                frontPeel.scale.set(0.38 * featS, 0.18 * featS, 0.26 * featS);
                group.add(frontPeel);

            // #65 脆甜西瓜切片 (Watermelon Wedge - 严丝合缝的扇形瓜瓤 + 厚实圆弧瓜皮托 + 5颗水滴瓜籽)
            } else if (sp === 'foodWatermelon') {
                // 专属高辨识度材质：红西瓜瓤、白翠皮、黑籽
                const fleshMat = createCloudToonMaterial('#FF3848', '#C9182B', 0.22);
                const rindGreenMat = createCloudToonMaterial('#16A34A', '#15803D', 0.20);
                const rindWhiteMat = createCloudToonMaterial('#E2F8EE', '#CBD5E1', 0.15);
                const seedDarkMat = new THREE.MeshBasicMaterial({ color: 0x0F172A });

                const apexY = 0.50;
                const radius = 0.98;
                const startAng = -Math.PI * 0.74;
                const endAng = -Math.PI * 0.26;

                // 1. 饱满红西瓜瓤（带俏皮小咬口缺角）
                const wShape = new THREE.Shape();
                wShape.moveTo(0, apexY);
                wShape.lineTo(Math.cos(startAng) * (radius - 0.08), apexY + Math.sin(startAng) * (radius - 0.08));
                wShape.absarc(0, apexY, radius - 0.08, startAng, endAng, false);
                wShape.quadraticCurveTo(0.22, 0.20, 0, apexY);

                const wGeo = new THREE.ExtrudeGeometry(wShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.09
                });
                wGeo.center();
                const fleshMesh = new THREE.Mesh(wGeo, fleshMat);
                group.add(fleshMesh);

                // 2. 紧贴底弧的白色内皮层
                const whiteArc = new THREE.Mesh(
                    new THREE.TorusGeometry(radius - 0.03, 0.055, 16, 44, endAng - startAng),
                    rindWhiteMat
                );
                whiteArc.position.set(0, apexY - 0.14, 0);
                whiteArc.rotation.z = startAng;
                group.add(whiteArc);

                // 3. 紧贴外弧的厚实翠绿外皮
                const rindArc = new THREE.Mesh(
                    new THREE.TorusGeometry(radius + 0.05, 0.095, 18, 48, endAng - startAng),
                    rindGreenMat
                );
                rindArc.position.set(0, apexY - 0.14, 0);
                rindArc.rotation.z = startAng;
                group.add(rindArc);

                // 瓜皮两端圆润封口球
                [startAng, endAng].forEach((ang) => {
                    const cap = new THREE.Mesh(SHARED_GEOS.sphere, rindGreenMat);
                    cap.position.set(Math.cos(ang) * (radius + 0.05), apexY - 0.14 + Math.sin(ang) * (radius + 0.05), 0);
                    cap.scale.setScalar(0.095);
                    group.add(cap);
                });

                // 4. 瓜瓤表面 6 颗标志性黑亮西瓜籽
                [[-0.26, -0.06, 0.22], [0.26, -0.06, -0.22], [-0.38, -0.22, 0.35], [0, -0.22, 0], [0.38, -0.22, -0.35], [-0.02, 0.08, 0.08]].forEach(([sx, sy, rot]) => {
                    const seed = new THREE.Mesh(SHARED_GEOS.sphere, seedDarkMat);
                    seed.position.set(sx, sy, 0.20);
                    seed.rotation.z = rot;
                    seed.scale.set(0.045, 0.082, 0.035);
                    group.add(seed);
                });
            } else if (sp === 'foodAvocado') {
                // 专属写实分色：深墨绿厚果皮 + 鲜嫩奶黄绿果肉 + 焦糖高光立体大圆核
                const skinMat = createCloudToonMaterial('#1A4D2E', '#0D2B1A', 0.22);
                const fleshMat = createCloudToonMaterial('#D9F99D', '#BEF264', 0.18);
                const pitMat = createCloudToonMaterial('#78350F', '#451A03', 0.26);

                // 1. 外层深墨绿糙面厚果皮（饱满梨形壳托）
                const skinShape = new THREE.Shape();
                skinShape.moveTo(0, 0.62);
                skinShape.bezierCurveTo(0.38, 0.62, 0.60, 0.10, 0.54, -0.32);
                skinShape.bezierCurveTo(0.48, -0.66, -0.48, -0.66, -0.54, -0.32);
                skinShape.bezierCurveTo(-0.60, 0.10, -0.38, 0.62, 0, 0.62);

                const skinGeo = new THREE.ExtrudeGeometry(skinShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.11, bevelThickness: 0.13
                });
                skinGeo.center();
                const skinMesh = new THREE.Mesh(skinGeo, skinMat);
                skinMesh.position.z = -0.04;
                group.add(skinMesh);

                // 2. 内层鲜嫩奶黄绿平滑切面果肉
                const fleshShape = new THREE.Shape();
                fleshShape.moveTo(0, 0.56);
                fleshShape.bezierCurveTo(0.33, 0.56, 0.52, 0.08, 0.46, -0.28);
                fleshShape.bezierCurveTo(0.42, -0.58, -0.42, -0.58, -0.46, -0.28);
                fleshShape.bezierCurveTo(-0.52, 0.08, -0.33, 0.56, 0, 0.56);

                const fleshGeo = new THREE.ExtrudeGeometry(fleshShape, {
                    depth: 0.12, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.04, bevelThickness: 0.05
                });
                fleshGeo.center();
                const fleshMesh = new THREE.Mesh(fleshGeo, fleshMat);
                fleshMesh.position.z = 0.08;
                group.add(fleshMesh);

                // 3. 腹部圆润高耸的焦糖色反光大牛油果核（半球凸起）
                const pit = new THREE.Mesh(SHARED_GEOS.sphere, pitMat);
                pit.position.set(0, -0.16, 0.18);
                pit.scale.set(0.32 * featS, 0.36 * featS, 0.26 * featS);
                group.add(pit);

                // 果核右上侧一道灵动的纯白反光高光点
                const glint = new THREE.Mesh(SHARED_GEOS.sphere, fleshMat);
                glint.position.set(0.08, -0.06, 0.34);
                glint.scale.setScalar(0.065 * featS);
                group.add(glint);
            } else if (sp === 'foodMushroom') {
                // 专属分色：伞盖红+菌柄白+波点白
                const capMat   = createCloudToonMaterial('#DC2626', '#991B1B', 0.22);
                const stalkMat = createCloudToonMaterial('#FAFAFA', '#E5E7EB', 0.18);
                const dotMat   = createCloudToonMaterial('#FFFFFF', '#F3F4F6', 0.15);

                // 1. 粗短白嫩菌柄（下宽上略窄，经典蘑菇比例）
                const stalkPts = [
                    new THREE.Vector2(0.01, -0.62),
                    new THREE.Vector2(0.30, -0.60),
                    new THREE.Vector2(0.36, -0.46),
                    new THREE.Vector2(0.30, -0.22),
                    new THREE.Vector2(0.24, -0.06),
                    new THREE.Vector2(0.01, -0.04)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(stalkPts, 32), stalkMat));

                // 菌柄根部的肥厚菌托环
                const skirt = new THREE.Mesh(new THREE.TorusGeometry(0.26 * featS, 0.06 * featS, 12, 28), stalkMat);
                skirt.position.y = -0.26;
                group.add(skirt);

                // 2. 宽阔饱满的半球形红色伞盖（高辨识度的蘑菇剪影）
                const capPts = [
                    new THREE.Vector2(0.01, -0.08),
                    new THREE.Vector2(0.60, -0.10),
                    new THREE.Vector2(0.74, 0.02),
                    new THREE.Vector2(0.68, 0.30),
                    new THREE.Vector2(0.44, 0.56),
                    new THREE.Vector2(0.01, 0.68)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(capPts, 40), capMat));

                // 3. 大号立体白色波点（高辨识度）
                [
                    [-0.44, 0.38, 0.38, 0.17],
                    [ 0.44, 0.38, 0.38, 0.17],
                    [ 0.00, 0.60, 0.16, 0.14],
                    [-0.60, 0.08, 0.28, 0.13],
                    [ 0.60, 0.08, 0.28, 0.13],
                    [-0.22, 0.14, 0.44, 0.10],
                    [ 0.22, 0.14, 0.44, 0.10]
                ].forEach(([x, y, z, r]) => {
                    const dot = new THREE.Mesh(SHARED_GEOS.sphere, dotMat);
                    dot.position.set(x, y, z);
                    dot.scale.setScalar(r * featS);
                    group.add(dot);
                });
            } else if (sp === 'foodKiwi') {
                // 清甜奇异果：棕褐毛茸厚果皮 + 鲜嫩翠绿切面果肉 + 奶油白圆芯 + 环形黑芝麻籽
                const skinMat = createCloudToonMaterial('#78350F', '#451A03', 0.20);
                const fleshMat = createCloudToonMaterial('#84CC16', '#4D7C0F', 0.18);
                const coreMat = createCloudToonMaterial('#FEF9C3', '#FEF08A', 0.16);
                const seedMat = createCloudToonMaterial('#1E293B', '#0F172A', 0.22);

                // 1. 棕褐色圆润外壳托（对半切开的果皮）
                const shell = new THREE.Mesh(SHARED_GEOS.sphere, skinMat);
                shell.scale.set(0.62, 0.58, 0.44);
                shell.position.z = -0.06;
                group.add(shell);

                // 2. 鲜嫩多汁的翠绿切面果肉大圆盘
                const slice = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.58, 0.16, 36), fleshMat);
                slice.rotation.x = Math.PI / 2;
                slice.position.z = 0.08;
                group.add(slice);

                // 3. 中央淡奶油黄白果芯（椭圆软核）
                const core = new THREE.Mesh(SHARED_GEOS.sphere, coreMat);
                core.position.set(0, -0.06, 0.18);
                core.scale.set(0.18 * featS, 0.24 * featS, 0.08 * featS);
                group.add(core);

                // 4. 环绕果芯呈放射状排布的一圈黑芝麻微型果籽（10颗）
                for (let i = 0; i < 10; i++) {
                    const ang = (i / 10) * Math.PI * 2;
                    const rx = Math.cos(ang) * 0.28;
                    const ry = -0.06 + Math.sin(ang) * 0.32;
                    const seed = new THREE.Mesh(SHARED_GEOS.sphere, seedMat);
                    seed.position.set(rx, ry, 0.18);
                    seed.scale.set(0.024 * featS, 0.040 * featS, 0.022 * featS);
                    seed.rotation.z = ang;
                    group.add(seed);
                }
            } else if (sp === 'foodEggplant') {
                const egPts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.38, -0.50),
                    new THREE.Vector2(0.50, -0.18),
                    new THREE.Vector2(0.34, 0.26),
                    new THREE.Vector2(0.24, 0.46),
                    new THREE.Vector2(0.01, 0.48)
                ];
                const body = new THREE.Mesh(new THREE.LatheGeometry(egPts, 32), mainMat);
                body.rotation.z = -0.12;
                group.add(body);

                // 顶部五爪茄蒂帽与弯钩柄
                const calyx = new THREE.Mesh(new THREE.ConeGeometry(0.32 * featS, 0.22 * featS, 5), accentMat);
                calyx.rotation.z = Math.PI - 0.12;
                calyx.position.set(0.04, 0.42, 0);
                group.add(calyx);

                const hook = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.055 * featS, 14, 24, Math.PI * 0.9), accentMat);
                hook.position.set(0.14, 0.56, 0);
                hook.rotation.z = 0.4;
                group.add(hook);

            // #70 拔地胡萝卜 (Carrot)
            } else if (sp === 'foodCarrot') {
                const cPts = [
                    new THREE.Vector2(0.01, -0.58),
                    new THREE.Vector2(0.16, -0.44),
                    new THREE.Vector2(0.36, -0.06),
                    new THREE.Vector2(0.46, 0.30),
                    new THREE.Vector2(0.32, 0.44),
                    new THREE.Vector2(0.01, 0.46)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(cPts, 32), mainMat));

                // 顶部三簇蓬松胡萝卜缨叶
                [-0.38, 0, 0.38].forEach((ang, i) => {
                    const plume = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    plume.position.set(ang * 0.45, 0.62 + (i === 1 ? 0.06 : 0), 0);
                    plume.rotation.z = -ang * 0.9;
                    plume.scale.set(0.14 * featS, 0.28 * featS, 0.12 * featS);
                    group.add(plume);
                });

            // #71 元气柠檬 (Sunny Lemon)
            } else if (sp === 'foodLemon') {
                const lemPts = [
                    new THREE.Vector2(0.01, -0.62),
                    new THREE.Vector2(0.14, -0.52),
                    new THREE.Vector2(0.46, -0.22),
                    new THREE.Vector2(0.50, 0.0),
                    new THREE.Vector2(0.46, 0.22),
                    new THREE.Vector2(0.14, 0.52),
                    new THREE.Vector2(0.01, 0.62)
                ];
                const lemonMesh = new THREE.Mesh(new THREE.LatheGeometry(lemPts, 32), mainMat);
                lemonMesh.rotation.z = -0.62;
                group.add(lemonMesh);

                // 右上顶端萌发的两片柠檬叶
                [-1, 1].forEach((dir) => {
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    leaf.position.set(0.38 + dir * 0.12, 0.48, 0);
                    leaf.rotation.z = dir * 0.55;
                    leaf.scale.set(0.18 * featS, 0.09 * featS, 0.08 * featS);
                    group.add(leaf);
                });

            // #72 开心果果 (Pistachio)
            } else if (sp === 'foodPistachio') {
                // 中央饱满翠绿果仁（承载双竖瞳）
                const kernel = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                kernel.position.set(0, 0.04, 0.06);
                kernel.scale.set(0.42, 0.52, 0.40);
                group.add(kernel);

                // 左右两侧微张开的坚果硬壳瓣
                [-1, 1].forEach((dir) => {
                    const shell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    shell.position.set(dir * 0.34, -0.06, -0.04);
                    shell.rotation.z = -dir * 0.38;
                    shell.scale.set(0.24 * featS, 0.52 * featS, 0.42 * featS);
                    group.add(shell);
                });

            // #73 三粒豌豆荚 (Pea Pod)
                        } else if (sp === 'foodPeaPod') {
                // 弯弯月牙船形豆荚底座
                const podShape = new THREE.Shape();
                podShape.moveTo(-0.68, 0.22);
                podShape.quadraticCurveTo(0, -0.62, 0.68, 0.22);
                podShape.quadraticCurveTo(0, -0.08, -0.68, 0.22);

                const podGeo = new THREE.ExtrudeGeometry(podShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                podGeo.center();
                const podMesh = new THREE.Mesh(podGeo, mainMat);
                podMesh.position.y = -0.10;
                group.add(podMesh);

                // 豆荚舱内并排坐着的三颗圆润豆珠
                [-0.34, 0, 0.34].forEach((px, idx) => {
                    const pea = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    pea.position.set(px * featS, 0.18 + (idx === 1 ? -0.04 : 0.04), 0.04);
                    pea.scale.setScalar(0.18 * featS);
                    group.add(pea);
                });
} else if (sp === 'foodChili') {
                const calyxMat = createCloudToonMaterial('#22C55E', '#15803D', 0.22);

                // 1. 三维弯月形渐变辣椒身躯 (基部圆胖、中段弯曲、尾端尖细翘起)
                const chiliPts = [];
                for (let i = 0; i <= 24; i++) {
                    const t = i / 24;
                    // 自然的 J 型弧线
                    const x = Math.sin(t * Math.PI * 0.95) * 0.38 - t * 0.24;
                    const y = 0.36 - t * 0.88 + Math.sin(t * Math.PI) * 0.12;
                    const z = Math.sin(t * Math.PI * 0.8) * 0.14;
                    chiliPts.push(new THREE.Vector3(x, y, z));
                }
                const chiliCurve = new THREE.CatmullRomCurve3(chiliPts);

                // 自定义管截面放样（基部粗 0.34，中部 0.28，末端收至 0.06）
                const chiliGeo = new THREE.TubeGeometry(chiliCurve, 40, 0.28, 20, false);
                const posAttr = chiliGeo.attributes.position;
                for (let i = 0; i < posAttr.count; i++) {
                    const segIdx = Math.floor(i / 21);
                    const t = segIdx / 40;
                    const factor = t < 0.2 ? (0.7 + t * 1.5) : Math.max(0.2, (1 - t * 0.85));
                    posAttr.setX(i, posAttr.getX(i) * factor);
                    posAttr.setZ(i, posAttr.getZ(i) * factor);
                }
                chiliGeo.computeVertexNormals();

                const chiliMesh = new THREE.Mesh(chiliGeo, mainMat);
                group.add(chiliMesh);

                // 尾端圆润小尖尖
                const tip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                tip.position.copy(chiliPts[chiliPts.length - 1]);
                tip.scale.setScalar(0.08);
                group.add(tip);

                // 2. 辣椒顶部的立体翠绿五角花萼蒂把 (Calyx)
                const calyxGroup = new THREE.Group();
                calyxGroup.position.copy(chiliPts[0]);
                calyxGroup.position.y += 0.04;

                const baseCap = new THREE.Mesh(SHARED_GEOS.sphere, calyxMat);
                baseCap.scale.set(0.28, 0.12, 0.28);
                calyxGroup.add(baseCap);

                // 5片包覆下垂的小花萼瓣
                for (let i = 0; i < 5; i++) {
                    const ang = (i / 5) * Math.PI * 2;
                    const petal = new THREE.Mesh(SHARED_GEOS.sphere, calyxMat);
                    petal.position.set(Math.cos(ang) * 0.22, -0.06, Math.sin(ang) * 0.22);
                    petal.scale.set(0.08, 0.16, 0.06);
                    petal.rotation.z = -Math.cos(ang) * 0.4;
                    petal.rotation.x = Math.sin(ang) * 0.4;
                    calyxGroup.add(petal);
                }

                // 弯曲的蒂梗
                const stemPts = [
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(0.04, 0.12, 0.02),
                    new THREE.Vector3(0.14, 0.22, -0.04)
                ];
                const stem = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(stemPts), 14, 0.042, 10, false), calyxMat);
                calyxGroup.add(stem);
                group.add(calyxGroup);

                // 3. 伴随辣椒侧面的跃动金红小火苗
                const flame = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                flame.position.set(0.38, 0.12, 0.18);
                flame.rotation.z = -0.35;
                flame.scale.setScalar(0.85 * featS);
                group.add(flame);            } else if (sp === 'foodOnigiri') {
                // 饭团专属分色：饭白+海苔深绿+梅干红
                const noriMat = createCloudToonMaterial('#1A3A1A', '#0F2410', 0.20);
                const umeMat  = createCloudToonMaterial('#C0392B', '#8B1A1A', 0.18);

                // 经典圆角三角饭团主体（偏宽扁，底部略平）
                const rShape = new THREE.Shape();
                rShape.moveTo(0, 0.58);
                // 右上斜边
                rShape.quadraticCurveTo(0.52, 0.28, 0.52, -0.08);
                // 右下圆角
                rShape.quadraticCurveTo(0.52, -0.46, 0.22, -0.46);
                // 底部直平边
                rShape.lineTo(-0.22, -0.46);
                // 左下圆角
                rShape.quadraticCurveTo(-0.52, -0.46, -0.52, -0.08);
                // 左上斜边
                rShape.quadraticCurveTo(-0.52, 0.28, 0, 0.58);

                const rGeo = new THREE.ExtrudeGeometry(rShape, {
                    depth: 0.32, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.12, bevelThickness: 0.14
                });
                rGeo.center();
                group.add(new THREE.Mesh(rGeo, mainMat));

                // 底部包裹的宽幅海苔片（高辨识度的标志性黑绿腰带）
                const nori = new THREE.Mesh(createRoundedRectExtrude(0.86 * featS, 0.40 * featS, 0.06, 0.38, 0.06), noriMat);
                nori.position.set(0, -0.28, 0.02);
                group.add(nori);

                // 顶部点缀的鲜红酸梅干（大圆珠 + 四瓣辐射纹）
                const plum = new THREE.Mesh(SHARED_GEOS.sphere, umeMat);
                plum.position.set(0, 0.54, 0.14);
                plum.scale.setScalar(0.14 * featS);
                group.add(plum);
                // 梅干四周的辐射小瓣
                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
                    const ray = new THREE.Mesh(SHARED_GEOS.sphere, umeMat);
                    ray.position.set(
                        Math.cos(ang) * 0.22 * featS,
                        0.52 + Math.sin(ang) * 0.08 * featS,
                        0.12
                    );
                    ray.scale.set(0.06 * featS, 0.06 * featS, 0.04 * featS);
                    group.add(ray);
                }

            // #76 咬口冰棍 (Popsicle)
            } else if (sp === 'foodPopsicle') {
                const popShape = new THREE.Shape();
                popShape.moveTo(-0.42, -0.38);
                popShape.lineTo(0.42, -0.38);
                popShape.lineTo(0.42, 0.14);
                // 右上角俏皮咬口圆弧凹槽
                popShape.absarc(0.38, 0.42, 0.24, -Math.PI * 0.45, Math.PI * 0.92, true);
                popShape.quadraticCurveTo(-0.42, 0.58, -0.42, 0.24);
                popShape.closePath();

                const popGeo = new THREE.ExtrudeGeometry(popShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                popGeo.center();
                const popBody = new THREE.Mesh(popGeo, mainMat);
                popBody.position.y = 0.08;
                group.add(popBody);

                // 底部探出的木雪糕棍
                const stick = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.34 * featS, 16), accentMat);
                stick.position.set(0, -0.52, 0);
                group.add(stick);

            // #77 糖霜甜甜圈 (Frosted Donut)
            } else if (sp === 'foodDonut') {
                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.22, 24, 48), mainMat);
                group.add(ring);

                // 下半圈填充甜心软垫承载双竖瞳
                const eyePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                eyePad.position.set(0, -0.22, 0.12);
                eyePad.scale.set(0.36, 0.26, 0.22);
                group.add(eyePad);

                // 上半圈淋面糖霜环与糖针豆
                const icing = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.235 * featS, 20, 40, Math.PI * 1.1), accentMat);
                icing.rotation.z = -0.05 * Math.PI;
                icing.position.z = 0.02;
                group.add(icing);

                [[-0.36, 0.32], [0, 0.46], [0.36, 0.30]].forEach(([sx, sy]) => {
                    const spk = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    spk.position.set(sx, sy, 0.26);
                    spk.scale.set(0.08 * featS, 0.05 * featS, 0.05 * featS);
                    group.add(spk);
                });

            // #78 瑞士多孔奶酪 (Swiss Cheese Wedge)
            } else if (sp === 'foodSwissCheese') {
                const cShape = new THREE.Shape();
                cShape.moveTo(-0.56, -0.44);
                cShape.lineTo(0.56, -0.44);
                cShape.lineTo(0.56, 0.44);
                cShape.lineTo(-0.56, 0.14);
                cShape.closePath();

                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                cGeo.center();
                group.add(new THREE.Mesh(cGeo, mainMat));

                // 奶酪表面与边缘标志性的立体圆孔与芝士珠
                [[-0.34, 0.18, 0.22, 0.14], [0.34, 0.32, 0.22, 0.16], [0.48, -0.18, 0.22, 0.11]].forEach(([x, y, z, r]) => {
                    const hole = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    hole.position.set(x, y, z);
                    hole.scale.set(r * featS, r * featS, 0.08 * featS);
                    group.add(hole);
                });

            // #79 太阳煎蛋 (Sunny-Side Egg)
                        } else if (sp === 'foodSunnyEgg') {
                const eShape = new THREE.Shape();
                eShape.moveTo(-0.58, -0.16);
                eShape.bezierCurveTo(-0.68, 0.36, -0.18, 0.64, 0.28, 0.50);
                eShape.bezierCurveTo(0.68, 0.38, 0.66, -0.22, 0.36, -0.48);
                eShape.bezierCurveTo(0.04, -0.64, -0.48, -0.54, -0.58, -0.16);

                const eGeo = new THREE.ExtrudeGeometry(eShape, {
                    depth: 0.18, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                eGeo.center();
                group.add(new THREE.Mesh(eGeo, mainMat));

                // 左上方高高鼓起的半球形黄金溏心蛋黄
                const yolk = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                yolk.position.set(-0.18, 0.22, 0.18);
                yolk.scale.set(0.32 * featS, 0.32 * featS, 0.22 * featS);
                group.add(yolk);
} else if (sp === 'foodIceCreamCone') {
                // 下方脆皮蛋筒锥底
                const cone = new THREE.Mesh(new THREE.ConeGeometry(0.38 * featS, 0.56 * featS, 24), accentMat);
                cone.rotation.z = Math.PI;
                cone.position.set(0, -0.34, 0);
                group.add(cone);

                // 上方双层绵密软冰淇淋云团（承载双竖瞳）
                const scoop1 = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                scoop1.position.set(0, 0.06, 0);
                scoop1.scale.set(0.50, 0.34, 0.46);
                group.add(scoop1);

                const scoop2 = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                scoop2.position.set(0, 0.34, 0);
                scoop2.scale.set(0.36, 0.28, 0.34);
                group.add(scoop2);

                const curlTip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                curlTip.position.set(0.08, 0.58, 0.04);
                curlTip.rotation.z = -0.4;
                curlTip.scale.set(0.16, 0.22, 0.16);
                group.add(curlTip);

            // #81 手握鲜寿司 (Nigiri Sushi)
            } else if (sp === 'foodNigiriSushi') {
                // 下方饱满椭球醋饭团（承载双竖瞳）
                const shari = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.50, 0.22, 0.38, 0.12), mainMat);
                shari.position.set(0, -0.18, 0);
                group.add(shari);

                // 顶部覆盖的微弯鲜虾仁切片与翘起分叉虾尾
                const topping = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                topping.position.set(-0.04, 0.22, 0);
                topping.scale.set(0.64 * featS, 0.22 * featS, 0.38 * featS);
                group.add(topping);

                const tailFin = new THREE.Mesh(new THREE.ConeGeometry(0.20 * featS, 0.32 * featS, 4), accentMat);
                tailFin.position.set(0.54, 0.32, 0);
                tailFin.rotation.z = 0.85;
                group.add(tailFin);

            // #82 灌汤小笼包 (Steamed Baozi)
            } else if (sp === 'foodSteamedBao') {
                // 白胖圆润的包子主体
                const bun = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                bun.position.set(0, -0.06, 0);
                bun.scale.set(0.60, 0.48, 0.56);
                group.add(bun);

                // 顶部汇聚的8道手工捏褶与黄金收口珠
                for (let i = 0; i < 8; i++) {
                    const ang = (i / 8) * Math.PI * 2;
                    const pleat = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    pleat.position.set(Math.cos(ang) * 0.22, 0.34, Math.sin(ang) * 0.22);
                    pleat.rotation.y = -ang;
                    pleat.scale.set(0.18, 0.10, 0.09);
                    group.add(pleat);
                }
                const topTwist = new THREE.Mesh(new THREE.TorusGeometry(0.10 * featS, 0.048 * featS, 12, 24), accentMat);
                topTwist.rotation.x = Math.PI / 2;
                topTwist.position.set(0, 0.44, 0);
                group.add(topTwist);

                // 底部蒸笼托圈
                const steamer = new THREE.Mesh(new THREE.CylinderGeometry(0.54 * featS, 0.50 * featS, 0.14 * featS, 28), accentMat);
                steamer.position.set(0, -0.48, 0);
                group.add(steamer);

            // #83 一乐拉面碗 (Ramen Bowl)
            } else if (sp === 'foodRamenBowl') {
                const bowlPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.32, -0.54),
                    new THREE.Vector2(0.28, -0.40),
                    new THREE.Vector2(0.56, -0.14),
                    new THREE.Vector2(0.62, 0.20),
                    new THREE.Vector2(0.01, 0.18)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(bowlPts, 32), mainMat));

                // 碗内高高隆起的拉面团与鸣人卷鱼板
                const noodles = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                noodles.position.set(0, 0.22, 0);
                noodles.scale.set(0.48 * featS, 0.22 * featS, 0.44 * featS);
                group.add(noodles);

                // 碗口斜架的双筷
                [-0.08, 0.06].forEach((offsetY) => {
                    const chopstick = new THREE.Mesh(createCapsuleGeometry(0.038 * featS, 1.16 * featS, 12), accentMat);
                    chopstick.position.set(0.08, 0.42 + offsetY, 0.06);
                    chopstick.rotation.z = 1.38;
                    group.add(chopstick);
                });

            // #84 珍珠波霸奶茶 (Boba Bubble Tea - 宽边封口圈 + 奶盖圆顶 + 粗波霸吸管 + 5颗大号珍珠)
            } else if (sp === 'foodBobaTea') {
                // 1. 上宽下窄的经典奶茶杯身
                const cupPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.34, -0.52),
                    new THREE.Vector2(0.46, 0.18),
                    new THREE.Vector2(0.01, 0.18)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat));

                // 2. 醒目的撞色杯口封边圈（清晰分隔杯身与拱形杯盖）
                const cupRim = new THREE.Mesh(new THREE.TorusGeometry(0.47 * featS, 0.068 * featS, 16, 40), accentMat);
                cupRim.rotation.x = Math.PI / 2;
                cupRim.position.set(0, 0.20, 0);
                group.add(cupRim);

                // 3. 上方饱满半圆拱顶盖
                const domeLid = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                domeLid.position.set(0, 0.20, 0);
                domeLid.scale.set(0.44, 0.28, 0.44);
                group.add(domeLid);

                // 4. 顶部斜插的大口径粗波霸吸管（带管口圆环）
                const straw = new THREE.Mesh(createCapsuleGeometry(0.105 * featS, 0.46 * featS, 20), accentMat);
                straw.position.set(0.18, 0.50, 0);
                straw.rotation.z = -0.28;
                group.add(straw);

                // 5. 杯底正面呈微笑弧线排布的5颗大号3D黑糖波霸珍珠
                [
                    [-0.26, -0.32, 0.34],
                    [-0.13, -0.40, 0.37],
                    [0, -0.34, 0.38],
                    [0.13, -0.40, 0.37],
                    [0.26, -0.32, 0.34]
                ].forEach(([bx, by, bz]) => {
                    const boba = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    boba.position.set(bx, by, bz);
                    boba.scale.setScalar(0.095 * featS);
                    group.add(boba);
                });

            // #85 焦糖布丁 (Caramel Pudding)
            } else if (sp === 'foodCaramelPudding') {
                const pudPts = [
                    new THREE.Vector2(0.01, -0.44),
                    new THREE.Vector2(0.54, -0.42),
                    new THREE.Vector2(0.42, 0.26),
                    new THREE.Vector2(0.01, 0.28)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(pudPts, 32), mainMat));

                // 顶部波浪焦糖淋面帽与红樱桃
                const caramelCap = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                caramelCap.position.set(0, 0.26, 0);
                caramelCap.scale.set(0.44 * featS, 0.16 * featS, 0.44 * featS);
                group.add(caramelCap);

                const cherry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                cherry.position.set(0, 0.48, 0);
                cherry.scale.setScalar(0.14 * featS);
                group.add(cherry);

                // 底部白色甜品圆碟边
                const saucer = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                saucer.position.set(0, -0.46, 0);
                saucer.scale.set(0.68 * featS, 0.10 * featS, 0.64 * featS);
                group.add(saucer);

            // #86 法式马卡龙 (Macaron)
            } else if (sp === 'foodMacaron') {
                // 上下两片圆润杏仁蛋白饼盖
                const topShell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                topShell.position.set(0, 0.18, 0);
                topShell.scale.set(0.60, 0.28, 0.56);
                group.add(topShell);

                const botShell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                botShell.position.set(0, -0.22, 0);
                botShell.scale.set(0.60, 0.24, 0.56);
                group.add(botShell);

                // 中间夹心撞色甘纳许奶油圈与蕾丝裙边珠
                const cream = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                cream.position.set(0, -0.02, 0);
                cream.scale.set(0.64 * featS, 0.16 * featS, 0.60 * featS);
                group.add(cream);

            // #87 芝士披萨切片 (Pizza Slice)
            } else if (sp === 'foodPizzaSlice') {
                const pzShape = new THREE.Shape();
                pzShape.moveTo(0, -0.58);
                pzShape.lineTo(0.56, 0.36);
                pzShape.quadraticCurveTo(0, 0.52, -0.56, 0.36);
                pzShape.closePath();

                const pzGeo = new THREE.ExtrudeGeometry(pzShape, {
                    depth: 0.20, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.09
                });
                pzGeo.center();
                group.add(new THREE.Mesh(pzGeo, mainMat));

                // 顶端饱满圆弧烤饼边
                const crust = new THREE.Mesh(new THREE.TorusGeometry(0.60 * featS, 0.13 * featS, 16, 36, Math.PI * 0.64), accentMat);
                crust.position.set(0, -0.14, 0.04);
                crust.rotation.z = Math.PI * 0.18;
                group.add(crust);

                // 披萨表面香肠圆片
                [[-0.24, 0.18], [0.24, 0.16]].forEach(([px, py]) => {
                    const pep = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    pep.position.set(px, py, 0.18);
                    pep.scale.set(0.13 * featS, 0.13 * featS, 0.06 * featS);
                    group.add(pep);
                });

            // #88 夹心热狗堡 (Hotdog Bun)
            } else if (sp === 'foodHotdog') {
                // 下方松软长圆热狗面包底座（承载双竖瞳）
                const bun = new THREE.Mesh(createCapsuleGeometry(0.38, 0.56, 28), mainMat);
                bun.rotation.z = Math.PI / 2;
                bun.position.set(0, -0.12, 0);
                group.add(bun);

                // 上方探出两端的微弯烤肠与波浪芥末酱
                const sausage = new THREE.Mesh(createCapsuleGeometry(0.22 * featS, 0.88 * featS, 24), accentMat);
                sausage.rotation.z = Math.PI / 2;
                sausage.position.set(0, 0.18, 0);
                group.add(sausage);

                const mustardPts = [];
                for (let i = 0; i <= 20; i++) {
                    const t = (i / 20) * 2 - 1;
                    mustardPts.push(new THREE.Vector3(t * 0.42, 0.40 + Math.sin(t * Math.PI * 2.5) * 0.06, 0.08));
                }
                const mustard = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mustardPts), 28, 0.042 * featS, 12, false), mainMat);
                group.add(mustard);

            // #89 幸运签语饼 (Fortune Cookie)
            } else if (sp === 'foodFortuneCookie') {
                // 折弯元宝状签语饼轮廓
                const fcShape = new THREE.Shape();
                fcShape.moveTo(0, 0.54);
                fcShape.bezierCurveTo(0.68, 0.54, 0.72, -0.44, 0.28, -0.48);
                fcShape.quadraticCurveTo(0, -0.12, -0.28, -0.48);
                fcShape.bezierCurveTo(-0.72, -0.44, -0.68, 0.54, 0, 0.54);

                const fcGeo = new THREE.ExtrudeGeometry(fcShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.11, bevelThickness: 0.12
                });
                fcGeo.center();
                group.add(new THREE.Mesh(fcGeo, mainMat));

                // 右上角探出的黄金幸运签语纸条
                const slip = new THREE.Mesh(createRoundedRectExtrude(0.38 * featS, 0.18 * featS, 0.04, 0.06, 0.02), accentMat);
                slip.position.set(0.46, 0.36, 0.08);
                slip.rotation.z = 0.42;
                group.add(slip);

            // =========================================================================
            // 第五批钦点保留的 9 款精灵构建器 (#90 ~ #98)
            // =========================================================================

            // #90 机械萌犬 (Rover · 原#96)
            } else if (sp === 'botCyberDog') {
                const head = new THREE.Mesh(createRoundedRectExtrude(0.88, 0.78, 0.26, 0.40, 0.14), mainMat);
                head.position.set(0, -0.04, 0);
                group.add(head);

                [-1, 1].forEach((dir) => {
                    const ear = new THREE.Mesh(createCapsuleGeometry(0.15 * featS, 0.38 * featS, 18), accentMat);
                    ear.position.set(dir * 0.56, 0.04, 0);
                    ear.rotation.z = dir * 0.28;
                    group.add(ear);
                });

                const stem = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.20 * featS, 12), accentMat);
                stem.position.set(0, 0.48, 0);
                group.add(stem);
                const boneBar = new THREE.Mesh(createCapsuleGeometry(0.06 * featS, 0.28 * featS, 12), accentMat);
                boneBar.rotation.z = Math.PI / 2;
                boneBar.position.set(0, 0.60, 0);
                group.add(boneBar);

            // #91 波浪小幽灵 (Boo · 原#100)
                        } else if (sp === 'botArcadeGhost') {
                const gShape = new THREE.Shape();
                gShape.moveTo(-0.52, -0.48);
                gShape.quadraticCurveTo(-0.35, -0.26, -0.18, -0.48);
                gShape.quadraticCurveTo(0, -0.26, 0.18, -0.48);
                gShape.quadraticCurveTo(0.35, -0.26, 0.52, -0.48);
                gShape.lineTo(0.52, 0.08);
                gShape.absarc(0, 0.08, 0.52, 0, Math.PI, false);
                gShape.closePath();

                const gGeo = new THREE.ExtrudeGeometry(gShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                gGeo.center();
                group.add(new THREE.Mesh(gGeo, mainMat));

                const halo = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.052 * featS, 14, 32), accentMat);
                halo.rotation.x = Math.PI / 2 - 0.18;
                halo.position.set(0, 0.66, 0);
                group.add(halo);
} else if (sp === 'botAnvilForge') {
                // 铁砧经典剪影：宽底座 + 细腰 + 上方宽台面（右侧有horn尖角）
                // 底部宽底座
                const anvilBase = new THREE.Mesh(createRoundedRectExtrude(0.90, 0.22, 0.08, 0.30, 0.06), mainMat);
                anvilBase.position.set(0, -0.46, 0);
                group.add(anvilBase);

                // 细腰连接柱
                const anvilWaist = new THREE.Mesh(createRoundedRectExtrude(0.44, 0.22, 0.06, 0.28, 0.05), mainMat);
                anvilWaist.position.set(-0.04, -0.22, 0);
                group.add(anvilWaist);

                // 上方宽台面（带右侧horn尖角）
                const anvilTopShape = new THREE.Shape();
                anvilTopShape.moveTo(-0.58, 0.14);
                anvilTopShape.lineTo(0.38, 0.14);
                anvilTopShape.lineTo(0.72, 0.03);
                anvilTopShape.lineTo(0.72, -0.03);
                anvilTopShape.lineTo(0.38, -0.14);
                anvilTopShape.lineTo(-0.58, -0.14);
                anvilTopShape.closePath();

                const anvilTopGeo = new THREE.ExtrudeGeometry(anvilTopShape, {
                    depth: 0.32, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.09
                });
                anvilTopGeo.center();
                const anvilTop = new THREE.Mesh(anvilTopGeo, mainMat);
                anvilTop.position.y = 0.06;
                group.add(anvilTop);

                // 顶部放置的斜锤头（撞色）
                const anvilHammer = new THREE.Mesh(createRoundedRectExtrude(0.44 * featS, 0.22 * featS, 0.06, 0.34, 0.06), accentMat);
                anvilHammer.rotation.z = -0.38;
                anvilHammer.position.set(-0.14, 0.38, 0.12);
                group.add(anvilHammer);
                // 锤柄
                const anvilHandle = new THREE.Mesh(createCapsuleGeometry(0.056 * featS, 0.42 * featS, 14), accentMat);
                anvilHandle.rotation.z = -0.38;
                anvilHandle.position.set(0.18, 0.44, 0.12);
                group.add(anvilHandle);

            // #93 星航头盔 (Astro · 原#104)
            } else if (sp === 'botAstroHelmet') {
                const helmet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                helmet.scale.set(0.58, 0.56, 0.54);
                group.add(helmet);

                const visorRim = new THREE.Mesh(new THREE.TorusGeometry(0.38 * featS, 0.068 * featS, 16, 40), accentMat);
                visorRim.scale.set(1.18, 0.88, 1.0);
                visorRim.position.set(0.06, 0.02, 0.40);
                group.add(visorRim);

                const antRod = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.34 * featS, 12), accentMat);
                antRod.position.set(-0.56, 0.28, 0);
                group.add(antRod);
                const antTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                antTip.position.set(-0.56, 0.52, 0);
                antTip.scale.setScalar(0.10 * featS);
                group.add(antTip);

            // #94 秘法巫师帽 (Merlin · 原#106)
            } else if (sp === 'botWizardHat') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0, -0.22, 0);
                body.scale.set(0.48, 0.42, 0.46);
                group.add(body);

                const brim = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                brim.position.set(0, 0.08, 0);
                brim.scale.set(0.76 * featS, 0.12 * featS, 0.68 * featS);
                group.add(brim);

                const coneCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 0.12, 0),
                    new THREE.Vector3(-0.08, 0.44, 0),
                    new THREE.Vector3(0.24, 0.68, 0.04)
                ]);
                const hatCone = new THREE.Mesh(new THREE.TubeGeometry(coneCurve, 24, 0.22, 20, false), mainMat);
                group.add(hatCone);

                const starPin = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                starPin.position.set(-0.22, 0.32, 0.24);
                starPin.scale.setScalar(0.75 * featS);
                group.add(starPin);

            // #95 经纬地球仪 (Atlas · 原#113)
            } else if (sp === 'botGlobeStand') {
                const globe = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                globe.position.set(0, 0.06, 0);
                globe.scale.setScalar(0.48);
                group.add(globe);

                const arc = new THREE.Mesh(new THREE.TorusGeometry(0.58 * featS, 0.065 * featS, 16, 36, Math.PI * 1.15), accentMat);
                arc.position.set(0, 0.06, 0);
                arc.rotation.z = Math.PI * 0.42;
                group.add(arc);

                const base = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                base.position.set(0, -0.56, 0);
                base.scale.set(0.38 * featS, 0.10 * featS, 0.34 * featS);
                group.add(base);

            // #96 元气胶囊 (Capsule · 原#114)
            } else if (sp === 'botPillCapsule') {
                const pillGroup = new THREE.Group();
                pillGroup.rotation.z = -0.32;

                const topHalf = new THREE.Mesh(createCapsuleGeometry(0.36, 0.36, 28), mainMat);
                topHalf.position.set(0, 0.14, 0);
                pillGroup.add(topHalf);

                const botHalf = new THREE.Mesh(createCapsuleGeometry(0.35 * featS, 0.32 * featS, 28), accentMat);
                botHalf.position.set(0, -0.22, 0);
                pillGroup.add(botHalf);

                group.add(pillGroup);

                const crossStar = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                crossStar.position.set(-0.48, 0.42, 0.20);
                crossStar.scale.setScalar(0.82 * featS);
                group.add(crossStar);

            // #97 分光三棱镜 (Prism · 原#119)
            } else if (sp === 'botLightPrism') {
                const pShape = new THREE.Shape();
                pShape.moveTo(0, 0.56);
                pShape.lineTo(0.54, -0.44);
                pShape.lineTo(-0.54, -0.44);
                pShape.closePath();

                const pGeo = new THREE.ExtrudeGeometry(pShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                pGeo.center();
                group.add(new THREE.Mesh(pGeo, mainMat));

                [-0.22, 0.04, 0.30].forEach((ry, idx) => {
                    const ray = new THREE.Mesh(createCapsuleGeometry(0.052 * featS, 0.36 * featS, 12), accentMat);
                    ray.position.set(0.52, ry, 0);
                    ray.rotation.z = -1.25 + (idx - 1) * 0.28;
                    group.add(ray);
                });

            // #98 领航灯塔 (Beacon · 原#120)
            } else if (sp === 'botLighthouse') {
                const towerPts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.46, -0.54),
                    new THREE.Vector2(0.32, 0.22),
                    new THREE.Vector2(0.01, 0.22)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(towerPts, 32), mainMat));

                const gallery = new THREE.Mesh(new THREE.TorusGeometry(0.34 * featS, 0.068 * featS, 16, 36), accentMat);
                gallery.rotation.x = Math.PI / 2;
                gallery.position.set(0, 0.22, 0);
                group.add(gallery);

                const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                dome.position.set(0, 0.38, 0);
                dome.scale.set(0.28, 0.26, 0.28);
                group.add(dome);

                [-1, 1].forEach((dir) => {
                    const beam = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.38 * featS, 12), accentMat);
                    beam.position.set(dir * 0.46, 0.38, 0);
                    beam.rotation.z = dir * Math.PI / 2;
                    group.add(beam);
                });

            // =========================================================================
            // 全新设计 32 款：【轮廓鲜明 · 一眼即识】的萌宠生物、自然奇观与经典器物构建器 (#99 ~ #130)
            // =========================================================================

            // #99 喷水小鲸 (Whaley - 圆润鲸身 + 翘起分叉尾鳍 + 头顶双股喷水柱)
            } else if (sp === 'iconWhale') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0.08, -0.10, 0);
                body.scale.set(0.54, 0.46, 0.48);
                group.add(body);

                // 左侧动感上扬的鲸尾与Y型分叉尾鳍
                const tailCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.30, -0.18, 0),
                    new THREE.Vector3(-0.56, -0.06, 0),
                    new THREE.Vector3(-0.66, 0.20, 0)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 20, 0.14, 16, false), mainMat));

                [-1, 1].forEach((dir) => {
                    const fluke = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    fluke.position.set(-0.66 + dir * 0.12, 0.32, dir * 0.06);
                    fluke.rotation.z = dir * 0.65;
                    fluke.scale.set(0.20, 0.09, 0.10);
                    group.add(fluke);
                });

                // 头顶喷涌的双股黄金水花喷泉
                [-1, 1].forEach((dir) => {
                    const spout = new THREE.CatmullRomCurve3([
                        new THREE.Vector3(0.08, 0.34, 0),
                        new THREE.Vector3(0.08 + dir * 0.12, 0.56, 0),
                        new THREE.Vector3(0.08 + dir * 0.28, 0.48, 0.04)
                    ]);
                    group.add(new THREE.Mesh(new THREE.TubeGeometry(spout, 16, 0.052 * featS, 12, false), accentMat));
                });

            // #100 长耳萌兔 (Bunny - 糯米团子脸 + 两只修长立耳 + 额角小胡萝卜)
            } else if (sp === 'iconBunny') {
                const pinkMat = createCloudToonMaterial('#FDA4AF', '#F43F5E', 0.18);

                // 1. 软萌圆胖的糯米糍兔兔头
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.16, 0);
                head.scale.set(0.58, 0.48, 0.50);
                group.add(head);

                // 左右两颊饱满软鼓鼓的腮帮子
                [-0.34, 0.34].forEach((cx) => {
                    const cheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    cheek.position.set(cx, -0.22, 0.24);
                    cheek.scale.set(0.24, 0.20, 0.18);
                    group.add(cheek);
                });

                // 三瓣小兔嘴与粉色微凸小鼻珠
                const nose = new THREE.Mesh(SHARED_GEOS.sphere, pinkMat);
                nose.position.set(0, -0.18, 0.50);
                nose.scale.set(0.055, 0.045, 0.05);
                group.add(nose);

                // 2. 超有灵魂的兔子耳朵：左耳挺拔竖起，右耳萌萌微垂内折！
                // 左耳（直挺挺高高竖起）
                const leftEarGroup = new THREE.Group();
                leftEarGroup.position.set(-0.24, 0.42, 0);
                leftEarGroup.rotation.z = 0.16;
                const lOuter = new THREE.Mesh(createCapsuleGeometry(0.13 * featS, 0.52 * featS, 20), mainMat);
                leftEarGroup.add(lOuter);
                const lInner = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.36 * featS, 16), pinkMat);
                lInner.position.set(0, -0.02, 0.09);
                leftEarGroup.add(lInner);
                group.add(leftEarGroup);

                // 右耳（俏皮微垂内折）
                const rightEarGroup = new THREE.Group();
                rightEarGroup.position.set(0.26, 0.40, 0);
                rightEarGroup.rotation.z = -0.42;
                rightEarGroup.rotation.x = 0.28; // 微向前垂
                const rOuter = new THREE.Mesh(createCapsuleGeometry(0.13 * featS, 0.48 * featS, 20), mainMat);
                rightEarGroup.add(rOuter);
                const rInner = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.34 * featS, 16), pinkMat);
                rInner.position.set(0, -0.02, 0.09);
                rightEarGroup.add(rInner);
                group.add(rightEarGroup);

                // 3. 背后圆滚滚毛茸茸的小白球尾巴
                const tail = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                tail.position.set(0, -0.32, -0.48);
                tail.scale.setScalar(0.16);
                group.add(tail);} else if (sp === 'iconDuck') {
                // 圆润鸭头（承载双竖瞳）
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0.06, 0.14, 0.04);
                head.scale.set(0.44, 0.42, 0.42);
                group.add(head);

                // 下方浮水鸭身与左侧翘起的鸭尾尖
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(-0.08, -0.28, 0);
                body.scale.set(0.58, 0.34, 0.46);
                group.add(body);

                const tail = new THREE.Mesh(new THREE.ConeGeometry(0.20, 0.36, 12), mainMat);
                tail.position.set(-0.58, -0.14, 0);
                tail.rotation.z = 0.85;
                group.add(tail);

                // 右前方俏皮探出的扁圆黄金鸭嘴与头顶呆毛
                const bill = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                bill.position.set(0.42, 0.08, 0.26);
                bill.rotation.y = -0.35;
                bill.scale.set(0.24 * featS, 0.10 * featS, 0.18 * featS);
                group.add(bill);

                const tuft = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tuft.position.set(0.02, 0.56, 0);
                tuft.rotation.z = 0.35;
                tuft.scale.set(0.09 * featS, 0.16 * featS, 0.09 * featS);
                group.add(tuft);

            // #102 气鼓河豚 (Puffy - 浑圆球体 + 放射状黄金棘刺冠 + 双侧小胸鳍)
            } else if (sp === 'iconPuffer') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.scale.set(0.54, 0.52, 0.50);
                group.add(body);

                // 沿外轮廓一圈放射状排布的10颗黄金圆锥小刺
                for (let i = 0; i < 10; i++) {
                    const ang = (i / 10) * Math.PI * 2;
                    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.095 * featS, 0.22 * featS, 12), accentMat);
                    spike.position.set(Math.cos(ang) * 0.56, Math.sin(ang) * 0.54, 0);
                    spike.rotation.z = ang - Math.PI / 2;
                    group.add(spike);
                }

                // 左右小胸鳍
                [-1, 1].forEach((dir) => {
                    const fin = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    fin.position.set(dir * 0.58, -0.08, 0.16);
                    fin.rotation.z = dir * 0.45;
                    fin.scale.set(0.18 * featS, 0.11 * featS, 0.08 * featS);
                    group.add(fin);
                });

            // #103 森系小鹿 (Bambi - 圆润鹿头 + 对称分叉黄金鹿角 + 侧张小鹿耳)
            } else if (sp === 'iconDeer') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.14, 0);
                head.scale.set(0.52, 0.48, 0.48);
                group.add(head);

                [-1, 1].forEach((dir) => {
                    // 向两侧平伸的叶片状小鹿耳
                    const ear = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    ear.position.set(dir * 0.54, 0.12, 0);
                    ear.rotation.z = -dir * 0.35;
                    ear.scale.set(0.22, 0.11, 0.10);
                    group.add(ear);

                    // 顶部高耸分叉的黄金鹿角
                    const mainBranch = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.44 * featS, 14), accentMat);
                    mainBranch.position.set(dir * 0.24, 0.46, 0);
                    mainBranch.rotation.z = -dir * 0.32;
                    group.add(mainBranch);

                    const tine = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.22 * featS, 12), accentMat);
                    tine.position.set(dir * 0.16, 0.48, 0.04);
                    tine.rotation.z = dir * 0.55;
                    group.add(tine);
                });

            // #104 呆萌企鹅 (Pingu - 梨形企鹅身 + 拍打双翼 + 黄金小尖嘴与脚蹼)
            } else if (sp === 'iconPenguin') {
                const pPts = [
                    new THREE.Vector2(0.01, -0.52),
                    new THREE.Vector2(0.48, -0.48),
                    new THREE.Vector2(0.52, -0.14),
                    new THREE.Vector2(0.40, 0.28),
                    new THREE.Vector2(0.32, 0.50),
                    new THREE.Vector2(0.01, 0.54)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(pPts, 32), mainMat));

                // 两侧张开的企鹅小翅膀与底部黄金脚蹼
                [-1, 1].forEach((dir) => {
                    const flipper = new THREE.Mesh(createCapsuleGeometry(0.11, 0.36, 16), mainMat);
                    flipper.position.set(dir * 0.54, -0.08, 0);
                    flipper.rotation.z = dir * 0.42;
                    group.add(flipper);

                    const foot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    foot.position.set(dir * 0.24, -0.54, 0.22);
                    foot.scale.set(0.16 * featS, 0.08 * featS, 0.20 * featS);
                    group.add(foot);
                });

                const beak = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.20 * featS, 12), accentMat);
                beak.rotation.x = Math.PI / 2;
                beak.position.set(0.08, 0.02, 0.48);
                group.add(beak);

            // #105 礼帽雪人 (Frosty - 经典上下双雪球葫芦身 + 斜戴黄金高礼帽)
            } else if (sp === 'iconSnowman') {
                const botBall = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                botBall.position.set(0, -0.26, 0);
                botBall.scale.set(0.54, 0.42, 0.50);
                group.add(botBall);

                const topBall = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                topBall.position.set(0, 0.20, 0);
                topBall.scale.set(0.40, 0.36, 0.40);
                group.add(topBall);

                // 头顶斜戴的黄金绅士礼帽与胸前两颗金纽扣
                const hatGroup = new THREE.Group();
                hatGroup.position.set(-0.06, 0.54, 0);
                hatGroup.rotation.z = 0.18;
                hatGroup.scale.setScalar(featS);

                const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 24), accentMat);
                hatGroup.add(brim);
                const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.20, 0.26, 24), accentMat);
                crown.position.y = 0.14;
                hatGroup.add(crown);
                group.add(hatGroup);

                [-0.18, -0.38].forEach((by) => {
                    const btn = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    btn.position.set(0.06, by, 0.46);
                    btn.scale.setScalar(0.068 * featS);
                    group.add(btn);
                });

            // #106 弯角小恶魔 (Diablo - 圆润身躯 + 霸气弯牛角 + 小恶魔飞翼)
                        } else if (sp === 'iconDevil') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0, -0.08, 0);
                body.scale.set(0.54, 0.50, 0.50);
                group.add(body);

                [-1, 1].forEach((dir) => {
                    // 弯弯上翘的黄金牛角
                    const hornCurve = new THREE.CatmullRomCurve3([
                        new THREE.Vector3(dir * 0.28, 0.30, 0),
                        new THREE.Vector3(dir * 0.52, 0.44, 0),
                        new THREE.Vector3(dir * 0.44, 0.68, 0.04)
                    ]);
                    const horn = new THREE.Mesh(new THREE.TubeGeometry(hornCurve, 20, 0.105 * featS, 14, false), accentMat);
                    group.add(horn);

                    // 两侧小恶魔尖翼
                    const wing = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.36 * featS, 4), accentMat);
                    wing.position.set(dir * 0.58, -0.08, -0.08);
                    wing.rotation.z = dir * 1.15;
                    group.add(wing);
                });
} else if (sp === 'iconUnicorn') {
                const horseGroup = new THREE.Group();

                // 1. 优雅立体的倒 L 型马颈与头部基底
                const neck = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                neck.position.set(-0.06, -0.16, 0);
                neck.scale.set(0.44, 0.52, 0.42);
                horseGroup.add(neck);

                // 2. 往前下方微探的饱满马吻部 (Muzzle)
                const snout = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                snout.position.set(0.24, -0.06, 0.12);
                snout.scale.set(0.38, 0.32, 0.36);
                horseGroup.add(snout);

                // 鼻尖圆润分色垫与鼻孔
                const snoutTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                snoutTip.position.set(0.48, -0.12, 0.16);
                snoutTip.scale.set(0.16, 0.18, 0.22);
                horseGroup.add(snoutTip);

                // 3. 额前高高耸立的经典螺旋金色独角
                const horn = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.58 * featS, 16), accentMat);
                horn.position.set(0.12, 0.56, 0.18);
                horn.rotation.z = -0.25;
                horn.rotation.x = 0.18;
                horseGroup.add(horn);

                // 4. 一对立挺灵动的小马耳
                [-0.14, 0.14].forEach((ez) => {
                    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.28, 12), mainMat);
                    ear.position.set(-0.10, 0.44, ez);
                    ear.rotation.z = 0.22;
                    ear.rotation.x = -ez * 0.4;
                    horseGroup.add(ear);
                });

                // 5. 顺流而下的 4 团雕塑感立体波浪背鬃毛 (Mane)
                [
                    [-0.24, 0.32, -0.02, 0.20],
                    [-0.34, 0.12, -0.04, 0.22],
                    [-0.38, -0.10, -0.05, 0.20],
                    [-0.32, -0.30, -0.04, 0.16]
                ].forEach(([mx, my, mz, ms]) => {
                    const manePuff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    manePuff.position.set(mx, my, mz);
                    manePuff.scale.setScalar(ms * featS);
                    horseGroup.add(manePuff);
                });

                horseGroup.position.set(-0.06, 0, 0);
                group.add(horseGroup);} else if (sp === 'iconElephant') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.04, 0.06);
                head.scale.set(0.48, 0.46, 0.46);
                group.add(head);

                // 左右两侧极具辨识度的大号扇形招风耳
                [-1, 1].forEach((dir) => {
                    const ear = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    ear.position.set(dir * 0.52, -0.02, -0.06);
                    ear.rotation.z = dir * 0.18;
                    ear.scale.set(0.32 * featS, 0.44 * featS, 0.14 * featS);
                    group.add(ear);

                    const innerEar = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    innerEar.position.set(dir * 0.52, -0.04, 0.04);
                    innerEar.rotation.z = dir * 0.18;
                    innerEar.scale.set(0.20 * featS, 0.30 * featS, 0.08 * featS);
                    group.add(innerEar);
                });

                const hat = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.28 * featS, 16), accentMat);
                hat.position.set(0, 0.52, 0.06);
                group.add(hat);

            // #109 背棘小恐龙 (Rexy - 饱满恐龙身 + 翘尾巴 + 一排黄金三角形背棘)
            } else if (sp === 'iconDino') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0.06, -0.06, 0);
                body.scale.set(0.50, 0.52, 0.46);
                group.add(body);

                // 左侧翘起的恐龙小粗尾
                const tail = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.46, 16), mainMat);
                tail.position.set(-0.48, -0.22, 0);
                tail.rotation.z = 1.05;
                group.add(tail);

                // 从头顶到后背依次排列的4枚黄金三角剑龙背板
                [
                    [0.12, 0.52, -0.10],
                    [-0.18, 0.44, 0.35],
                    [-0.42, 0.22, 0.85],
                    [-0.56, -0.04, 1.25]
                ].forEach(([sx, sy, rot]) => {
                    const plate = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.24 * featS, 4), accentMat);
                    plate.position.set(sx, sy, 0);
                    plate.rotation.z = rot;
                    group.add(plate);
                });

            // #110 八爪章鱼宝 (Octopus - 大圆头 + 底部一圈8颗卷曲章鱼足球 + 头顶金环)
            } else if (sp === 'iconOctopus') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, 0.08, 0);
                head.scale.set(0.52, 0.50, 0.50);
                group.add(head);

                // 底部一圈8颗圆鼓鼓向外翘起的章鱼触手足
                for (let i = 0; i < 8; i++) {
                    const ang = (i / 8) * Math.PI * 2;
                    const leg = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    leg.position.set(Math.cos(ang) * 0.44, -0.38, Math.sin(ang) * 0.42);
                    leg.scale.set(0.20, 0.16, 0.20);
                    group.add(leg);
                }

                // 头顶斜戴的水手黄金鉢卷头箍
                const headband = new THREE.Mesh(new THREE.TorusGeometry(0.36 * featS, 0.058 * featS, 14, 36), accentMat);
                headband.rotation.x = Math.PI / 2 - 0.25;
                headband.position.set(0, 0.46, 0.04);
                group.add(headband);

            // #111 慢邮小蜗牛 (Snail - 圆润身体 + 侧背大号黄金螺旋壳 + 头顶双球触角)
            } else if (sp === 'iconSnail') {
                // 右前方探出的蜗牛脑袋与身体（承载双竖瞳）
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0.12, -0.08, 0.08);
                body.scale.set(0.46, 0.46, 0.44);
                group.add(body);

                // 左后方背着的大号黄金螺旋蜗牛壳
                const shell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                shell.position.set(-0.32, 0.04, -0.10);
                shell.scale.set(0.46 * featS, 0.46 * featS, 0.34 * featS);
                group.add(shell);

                const spiralRing = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.055 * featS, 14, 32), mainMat);
                spiralRing.position.set(-0.34, 0.04, 0.12);
                group.add(spiralRing);

                // 头顶两根可爱的V字黄金球形触角
                [-1, 1].forEach((dir) => {
                    const stalk = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.26 * featS, 12), accentMat);
                    stalk.position.set(0.12 + dir * 0.18, 0.44, 0.08);
                    stalk.rotation.z = -dir * 0.32;
                    group.add(stalk);

                    const knob = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    knob.position.set(0.12 + dir * 0.24, 0.58, 0.08);
                    knob.scale.setScalar(0.085 * featS);
                    group.add(knob);
                });

            // #112 展翅彩蝶 (Papillon - 上大下小四瓣圆润蝶翼 + 顶部卷曲蝶须)
            } else if (sp === 'iconButterfly') {
                [-1, 1].forEach((dir) => {
                    // 上方大蝶翼
                    const upperWing = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    upperWing.position.set(dir * 0.36, 0.18, 0);
                    upperWing.rotation.z = -dir * 0.42;
                    upperWing.scale.set(0.38, 0.30, 0.22);
                    group.add(upperWing);

                    // 下方小蝶翼
                    const lowerWing = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    lowerWing.position.set(dir * 0.28, -0.24, 0);
                    lowerWing.rotation.z = dir * 0.38;
                    lowerWing.scale.set(0.28, 0.24, 0.20);
                    group.add(lowerWing);

                    // 蝶翼上的黄金圆斑与顶部触须
                    const spot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    spot.position.set(dir * 0.42, 0.24, 0.16);
                    spot.scale.set(0.11 * featS, 0.11 * featS, 0.06 * featS);
                    group.add(spot);

                    const ant = new THREE.Mesh(createCapsuleGeometry(0.038 * featS, 0.26 * featS, 12), accentMat);
                    ant.position.set(dir * 0.14, 0.52, 0);
                    ant.rotation.z = -dir * 0.38;
                    group.add(ant);
                });

                const thorax = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                thorax.scale.set(0.34, 0.42, 0.28);
                group.add(thorax);

            // #113 郁金香花苞 (Tulip - 三峰郁金香花冠 + 底部对称双黄金护叶)
            } else if (sp === 'iconTulip') {
                const tShape = new THREE.Shape();
                tShape.moveTo(0, -0.44);
                tShape.bezierCurveTo(0.56, -0.44, 0.62, 0.16, 0.42, 0.54);
                tShape.quadraticCurveTo(0.20, 0.28, 0, 0.58);
                tShape.quadraticCurveTo(-0.20, 0.28, -0.42, 0.54);
                tShape.bezierCurveTo(-0.62, 0.16, -0.56, -0.44, 0, -0.44);

                const tGeo = new THREE.ExtrudeGeometry(tShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                tGeo.center();
                const flower = new THREE.Mesh(tGeo, mainMat);
                flower.position.y = 0.06;
                group.add(flower);

                // 底部花茎与左右两片弯弯托叶
                [-1, 1].forEach((dir) => {
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    leaf.position.set(dir * 0.38, -0.44, 0);
                    leaf.rotation.z = -dir * 0.65;
                    leaf.scale.set(0.14 * featS, 0.32 * featS, 0.12 * featS);
                    group.add(leaf);
                });

            // #114 盛放向日葵 (Sunflower - 饱满圆花盘 + 12瓣360°盛放黄金花瓣圈)
            } else if (sp === 'iconSunflower') {
                const centerDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerDisc.scale.set(0.48, 0.48, 0.34);
                group.add(centerDisc);

                for (let i = 0; i < 12; i++) {
                    const ang = (i / 12) * Math.PI * 2;
                    const petal = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    petal.position.set(Math.cos(ang) * 0.54, Math.sin(ang) * 0.54, -0.04);
                    petal.rotation.z = ang;
                    petal.scale.set(0.22 * featS, 0.12 * featS, 0.10 * featS);
                    group.add(petal);
                }

            // #115 森林松果 (Pinecone - 三层交错鳞瓣塔形轮廓 + 顶部松针吊环)
            } else if (sp === 'iconPinecone') {
                // 三层塔状叠落松果盘，鲜明呈现松果层叠剪影
                [
                    [-0.28, 0.54, 0.24],
                    [0.02, 0.46, 0.24],
                    [0.28, 0.34, 0.22]
                ].forEach(([py, rx, ry]) => {
                    const tier = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    tier.position.set(0, py, 0);
                    tier.scale.set(rx, ry, rx * 0.92);
                    group.add(tier);
                });

                const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 14, 28), accentMat);
                topRing.position.set(0, 0.58, 0);
                group.add(topRing);

                [-1, 1].forEach((dir) => {
                    const needle = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.26 * featS, 12), accentMat);
                    needle.position.set(dir * 0.22, 0.48, 0);
                    needle.rotation.z = dir * 0.65;
                    group.add(needle);
                });

            // #116 星坠弯月 (Crescent Moon - 饱满C型弯月 + 上尖角垂挂四角金星)
            } else if (sp === 'iconCrescent') {
                const mShape = new THREE.Shape();
                mShape.absarc(0.06, 0, 0.62, Math.PI * 0.28, Math.PI * 1.72, false);
                mShape.bezierCurveTo(-0.18, -0.32, -0.18, 0.32, 0.46, 0.48);

                const mGeo = new THREE.ExtrudeGeometry(mShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                mGeo.center();
                group.add(new THREE.Mesh(mGeo, mainMat));

                // 弯月怀中悬垂的黄金四角星芒
                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(0.38, 0.14, 0.14);
                star.rotation.z = 0.22;
                star.scale.setScalar(0.95 * featS);
                group.add(star);

            // #117 璀璨切面钻 (Diamond - 经典平顶宽腰尖底钻石轮廓 + 星芒高光)
            } else if (sp === 'iconDiamond') {
                const diamondGroup = new THREE.Group();

                // 1. 上半部冠部台面 (Crown) - 八边形正锥台
                const crownGeo = new THREE.CylinderGeometry(0.48, 0.72, 0.34, 8);
                const crown = new THREE.Mesh(crownGeo, mainMat);
                crown.position.set(0, 0.18, 0);
                diamondGroup.add(crown);

                // 2. 中间平滑圆润的腰棱 (Girdle)
                const girdleGeo = new THREE.CylinderGeometry(0.73, 0.73, 0.08, 8);
                const girdle = new THREE.Mesh(girdleGeo, accentMat);
                girdle.position.set(0, -0.01, 0);
                diamondGroup.add(girdle);

                // 3. 下半部向下聚拢汇聚于底尖的八棱亭部 (Pavilion)
                const pavGeo = new THREE.ConeGeometry(0.72, 0.62, 8);
                pavGeo.rotateX(Math.PI);
                const pavilion = new THREE.Mesh(pavGeo, mainMat);
                pavilion.position.set(0, -0.34, 0);
                diamondGroup.add(pavilion);

                // 4. 正上方闪烁的两枚大小十字切面金星芒
                const glint1 = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                glint1.position.set(-0.46, 0.44, 0.38);
                glint1.rotation.z = 0.25;
                glint1.scale.setScalar(0.95 * featS);
                diamondGroup.add(glint1);

                const glint2 = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                glint2.position.set(0.42, 0.22, 0.36);
                glint2.rotation.z = -0.35;
                glint2.scale.setScalar(0.55 * featS);
                diamondGroup.add(glint2);

                diamondGroup.rotation.y = Math.PI / 8; // 微转让正面对准正面切面
                group.add(diamondGroup);} else if (sp === 'iconBolt') {
                const bShape = new THREE.Shape();
                bShape.moveTo(0.18, 0.64);
                bShape.lineTo(-0.52, -0.02);
                bShape.lineTo(-0.04, -0.02);
                bShape.lineTo(-0.24, -0.64);
                bShape.lineTo(0.52, 0.08);
                bShape.lineTo(0.06, 0.08);
                bShape.closePath();

                const bGeo = new THREE.ExtrudeGeometry(bShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.11
                });
                bGeo.center();
                group.add(new THREE.Mesh(bGeo, mainMat));

                // 中央饱满软垫保证双竖瞳端正清晰
                const pad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                pad.position.set(0, 0.06, 0.08);
                pad.scale.set(0.36, 0.30, 0.24);
                group.add(pad);

                const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                spark.position.set(-0.48, 0.42, 0.20);
                spark.scale.setScalar(0.78 * featS);
                group.add(spark);

            // #119 天使炽心 (Cupid Heart - 饱满立体爱心轮廓 + 双侧黄金天使羽翼)
            } else if (sp === 'iconHeartWing') {
                const hShape = new THREE.Shape();
                hShape.moveTo(0, -0.54);
                hShape.bezierCurveTo(0.62, -0.14, 0.68, 0.48, 0.28, 0.52);
                hShape.bezierCurveTo(0.10, 0.54, 0, 0.36, 0, 0.28);
                hShape.bezierCurveTo(0, 0.36, -0.10, 0.54, -0.28, 0.52);
                hShape.bezierCurveTo(-0.68, 0.48, -0.62, -0.14, 0, -0.54);

                const hGeo = new THREE.ExtrudeGeometry(hShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.11, bevelThickness: 0.13
                });
                hGeo.center();
                group.add(new THREE.Mesh(hGeo, mainMat));

                [-1, 1].forEach((dir) => {
                    const wing1 = new THREE.Mesh(createCapsuleGeometry(0.085 * featS, 0.34 * featS, 14), accentMat);
                    wing1.position.set(dir * 0.62, 0.18, -0.04);
                    wing1.rotation.z = dir * 1.15;
                    group.add(wing1);

                    const wing2 = new THREE.Mesh(createCapsuleGeometry(0.072 * featS, 0.24 * featS, 14), accentMat);
                    wing2.position.set(dir * 0.58, -0.02, -0.04);
                    wing2.rotation.z = dir * 1.32;
                    group.add(wing2);
                });

            // #120 皇冠水滴 (Water Droplet - 经典上尖下圆水滴 + 底部飞溅水花圈)
            } else if (sp === 'iconDroplet') {
                // 1. 流线型饱满晶莹泪滴主体 (上尖下圆润)
                const dropPts = [];
                for (let i = 0; i <= 24; i++) {
                    const t = i / 24;
                    const r = Math.sin(t * Math.PI) * (0.64 - t * 0.20);
                    const y = -0.52 + t * 1.16;
                    dropPts.push(new THREE.Vector2(Math.max(0.01, r), y));
                }
                const dropGeo = new THREE.LatheGeometry(dropPts, 32);
                const dropMesh = new THREE.Mesh(dropGeo, mainMat);
                group.add(dropMesh);

                // 2. 真正的头顶精致五齿黄金王冠！(名副其实的皇冠水滴)
                const crownGroup = new THREE.Group();
                crownGroup.position.set(0.06, 0.58, 0.04);
                crownGroup.rotation.z = 0.22; // 俏皮微斜戴着

                // 王冠底座圈
                const cBase = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.17, 0.08, 16), accentMat);
                crownGroup.add(cBase);

                // 5 个向上耸立的王冠齿尖与宝石珠
                for (let i = 0; i < 5; i++) {
                    const ang = (i / 5) * Math.PI * 2;
                    const px = Math.cos(ang) * 0.17;
                    const pz = Math.sin(ang) * 0.17;

                    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 10), accentMat);
                    tooth.position.set(px, 0.08, pz);
                    tooth.rotation.x = (pz / 0.17) * 0.18;
                    tooth.rotation.z = -(px / 0.17) * 0.18;
                    crownGroup.add(tooth);

                    const pearl = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    pearl.position.set(px * 1.08, 0.16, pz * 1.08);
                    pearl.scale.setScalar(0.038);
                    crownGroup.add(pearl);
                }
                crownGroup.scale.setScalar(featS);
                group.add(crownGroup);

                // 3. 底部激起的皇室水花飞溅光环与飞珠
                const ripple = new THREE.Mesh(new THREE.TorusGeometry(0.58 * featS, 0.055 * featS, 14, 36), accentMat);
                ripple.rotation.x = Math.PI / 2;
                ripple.position.set(0, -0.48, 0);
                group.add(ripple);

                [-0.62, 0.62].forEach((sx) => {
                    const splash = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    splash.position.set(sx * featS, -0.32, 0.14);
                    splash.scale.setScalar(0.095 * featS);
                    group.add(splash);
                });} else if (sp === 'iconBell') {
                const bPts = [
                    new THREE.Vector2(0.01, -0.34),
                    new THREE.Vector2(0.58, -0.36),
                    new THREE.Vector2(0.44, -0.12),
                    new THREE.Vector2(0.40, 0.26),
                    new THREE.Vector2(0.24, 0.44),
                    new THREE.Vector2(0.01, 0.46)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(bPts, 32), mainMat));

                // 底部探出的圆润黄金铃舌球
                const clapper = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                clapper.position.set(0, -0.48, 0);
                clapper.scale.setScalar(0.16 * featS);
                group.add(clapper);

                // 顶部蝴蝶结丝带双翼
                [-1, 1].forEach((dir) => {
                    const bow = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    bow.position.set(dir * 0.22, 0.54, 0.04);
                    bow.rotation.z = -dir * 0.35;
                    bow.scale.set(0.22 * featS, 0.13 * featS, 0.12 * featS);
                    group.add(bow);
                });

            // #122 双铃复古钟 (Alarm Clock - 圆表身 + 头顶双黄金铃碗 + 底部八字小脚)
            } else if (sp === 'iconAlarmClock') {
                const clockBody = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                clockBody.position.set(0, -0.04, 0);
                clockBody.scale.set(0.56, 0.56, 0.38);
                group.add(clockBody);

                // 头顶左右对称的两只黄金撞铃碗 + 中央小击槌
                [-1, 1].forEach((dir) => {
                    const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    bell.position.set(dir * 0.42, 0.48, 0);
                    bell.rotation.z = -dir * 0.58;
                    bell.scale.set(0.24 * featS, 0.16 * featS, 0.22 * featS);
                    group.add(bell);

                    // 底部八字小圆脚
                    const foot = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.16 * featS, 14), accentMat);
                    foot.position.set(dir * 0.32, -0.54, 0);
                    foot.rotation.z = dir * 0.45;
                    group.add(foot);
                });

                const hammer = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
                hammer.position.set(0, 0.58, 0);
                group.add(hammer);

            // #123 怀旧掌机 (GameBoy - 竖版圆角机身 + 底部立体黄金十字键与AB双圆键)
            } else if (sp === 'iconGameboy') {
                const body = new THREE.Mesh(createRoundedRectExtrude(0.86, 1.12, 0.18, 0.32, 0.10), mainMat);
                group.add(body);

                // 左下立体黄金十字方向键
                const dpadH = new THREE.Mesh(createRoundedRectExtrude(0.26 * featS, 0.09 * featS, 0.02, 0.08, 0.02), accentMat);
                dpadH.position.set(-0.20, -0.24, 0.24);
                group.add(dpadH);

                const dpadV = new THREE.Mesh(createRoundedRectExtrude(0.09 * featS, 0.26 * featS, 0.02, 0.08, 0.02), accentMat);
                dpadV.position.set(-0.20, -0.24, 0.24);
                group.add(dpadV);

                // 右下斜向排布的A/B黄金圆按键
                [[0.16, -0.28], [0.28, -0.18]].forEach(([bx, by]) => {
                    const btn = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    btn.position.set(bx, by, 0.24);
                    btn.scale.set(0.075 * featS, 0.075 * featS, 0.05 * featS);
                    group.add(btn);
                });

            // #124 街机摇杆 (Arcade Joystick - 敦实底座 + 倾斜金属杆 + 大号黄金波板球头)
            } else if (sp === 'iconJoystick') {
                const base = new THREE.Mesh(createRoundedRectExtrude(1.04, 0.52, 0.16, 0.44, 0.10), mainMat);
                base.position.set(0, -0.24, 0);
                group.add(base);

                // 顶部摇杆防尘圆盘、斜杆与大号黄金球头
                const washer = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                washer.position.set(0, 0.06, 0);
                washer.scale.set(0.32, 0.12, 0.32);
                group.add(washer);

                const shaft = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.42 * featS, 16), accentMat);
                shaft.position.set(0.08, 0.30, 0.04);
                shaft.rotation.z = -0.24;
                group.add(shaft);

                const ballTop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                ballTop.position.set(0.14, 0.56, 0.06);
                ballTop.scale.setScalar(0.22 * featS);
                group.add(ballTop);

            // #125 石中圣剑 (Excalibur - 梯形封印晶石基座 + 顶部插着的黄金十字剑柄)
            } else if (sp === 'iconSwordStone') {
                // 下方饱满切角封印巨石（承载双竖瞳）
                const stoneShape = new THREE.Shape();
                stoneShape.moveTo(-0.54, -0.54);
                stoneShape.lineTo(0.54, -0.54);
                stoneShape.lineTo(0.42, 0.06);
                stoneShape.lineTo(0, 0.18);
                stoneShape.lineTo(-0.42, 0.06);
                stoneShape.closePath();

                const stoneGeo = new THREE.ExtrudeGeometry(stoneShape, {
                    depth: 0.32, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                stoneGeo.center();
                const stone = new THREE.Mesh(stoneGeo, mainMat);
                stone.position.y = -0.18;
                group.add(stone);

                // 顶部笔直刺入石中的圣剑剑身、十字护手、剑柄与圆配重球
                const blade = new THREE.Mesh(createRoundedRectExtrude(0.22 * featS, 0.34 * featS, 0.04, 0.10, 0.03), accentMat);
                blade.position.set(0, 0.22, 0);
                group.add(blade);

                const crossguard = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.64 * featS, 16), accentMat);
                crossguard.rotation.z = Math.PI / 2;
                crossguard.position.set(0, 0.38, 0.02);
                group.add(crossguard);

                const grip = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.24 * featS, 14), accentMat);
                grip.position.set(0, 0.54, 0.02);
                group.add(grip);

                const pommel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                pommel.position.set(0, 0.68, 0.02);
                pommel.scale.setScalar(0.11 * featS);
                group.add(pommel);

            // #126 航海船舵 (Ship Wheel - 饱满圆舵盘 + 外围放射状8根黄金握柄)
            } else if (sp === 'iconShipWheel') {
                const wheelRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.14, 20, 44), mainMat);
                group.add(wheelRing);

                const centerHub = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerHub.scale.set(0.38, 0.38, 0.28);
                group.add(centerHub);

                // 外圈均匀放射出的8根黄金船舵握把
                for (let i = 0; i < 8; i++) {
                    const ang = (i / 8) * Math.PI * 2;
                    const spoke = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.26 * featS, 14), accentMat);
                    spoke.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
                    spoke.rotation.z = ang - Math.PI / 2;
                    group.add(spoke);
                }

            // #127 乘风小帆船 (Sailboat - 元宝翘头船身 + 一大一小黄金双三角帆)
            } else if (sp === 'iconSailboat') {
                // 下方元宝形船体（承载双竖瞳）
                const hullShape = new THREE.Shape();
                hullShape.moveTo(-0.46, -0.52);
                hullShape.lineTo(0.46, -0.52);
                hullShape.lineTo(0.64, -0.06);
                hullShape.quadraticCurveTo(0, -0.14, -0.64, -0.06);
                hullShape.closePath();

                const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                hullGeo.center();
                const hull = new THREE.Mesh(hullGeo, mainMat);
                hull.position.y = -0.26;
                group.add(hull);

                // 上方鼓满海风的主帆与前帆
                const mainSailShape = new THREE.Shape();
                mainSailShape.moveTo(-0.04, -0.02);
                mainSailShape.quadraticCurveTo(0.48, 0.02, 0.44, 0.10);
                mainSailShape.quadraticCurveTo(0.20, 0.44, -0.04, 0.64);
                mainSailShape.closePath();

                const sailGeo = new THREE.ExtrudeGeometry(mainSailShape, {
                    depth: 0.14, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.06, bevelThickness: 0.06
                });
                const mainSail = new THREE.Mesh(sailGeo, accentMat);
                mainSail.position.set(0, -0.02, -0.07);
                mainSail.scale.setScalar(featS);
                group.add(mainSail);

                const jibShape = new THREE.Shape();
                jibShape.moveTo(-0.14, 0.0);
                jibShape.lineTo(-0.14, 0.52);
                jibShape.quadraticCurveTo(-0.44, 0.22, -0.52, 0.02);
                jibShape.closePath();

                const jibGeo = new THREE.ExtrudeGeometry(jibShape, {
                    depth: 0.12, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.05, bevelThickness: 0.05
                });
                const jibSail = new THREE.Mesh(jibGeo, mainMat);
                jibSail.position.set(0, -0.02, -0.06);
                jibSail.scale.setScalar(featS);
                group.add(jibSail);

            // #128 探险热气球 (Hot Air Balloon - 上宽下收大球体 + 底部悬吊黄金藤篮)
            } else if (sp === 'iconHotAir') {
                const bPts = [
                    new THREE.Vector2(0.01, -0.22),
                    new THREE.Vector2(0.24, -0.18),
                    new THREE.Vector2(0.52, 0.12),
                    new THREE.Vector2(0.54, 0.36),
                    new THREE.Vector2(0.36, 0.58),
                    new THREE.Vector2(0.01, 0.64)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(bPts, 32), mainMat));

                // 底部悬吊的黄金藤编吊篮与缆绳
                const basket = new THREE.Mesh(createRoundedRectExtrude(0.32 * featS, 0.24 * featS, 0.06, 0.26, 0.05), accentMat);
                basket.position.set(0, -0.48, 0);
                group.add(basket);

                [-0.14, 0.14].forEach((rx) => {
                    const rope = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.22 * featS, 10), accentMat);
                    rope.position.set(rx * featS, -0.30, 0);
                    group.add(rope);
                });

            // #129 下午茶壶 (Teapot - 浑圆壶身 + 左侧S弯壶嘴 + 右侧C型壶把 + 金壶盖钮)
            } else if (sp === 'iconTeapot') {
                const pot = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                pot.position.set(0, -0.08, 0);
                pot.scale.set(0.54, 0.46, 0.50);
                group.add(pot);

                // 左侧优雅翘起的S型弯弯茶壶嘴
                const spoutCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.38, -0.14, 0),
                    new THREE.Vector3(-0.62, 0.02, 0),
                    new THREE.Vector3(-0.68, 0.26, 0)
                ]);
                const spout = new THREE.Mesh(new THREE.TubeGeometry(spoutCurve, 20, 0.115 * featS, 16, false), accentMat);
                group.add(spout);

                // 右侧C型圆弧壶把
                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.075 * featS, 16, 32, Math.PI * 1.15), accentMat);
                handle.position.set(0.44, -0.06, 0);
                handle.rotation.z = -Math.PI * 0.55;
                group.add(handle);

                // 顶部壶盖与黄金圆珠钮
                const lid = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                lid.position.set(0, 0.34, 0);
                lid.scale.set(0.32 * featS, 0.10 * featS, 0.32 * featS);
                group.add(lid);

                const knob = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                knob.position.set(0, 0.48, 0);
                knob.scale.setScalar(0.11 * featS);
                group.add(knob);

            // #130 祈愿御守 (Omamori - 五边形切角护身符锦囊 + 顶部黄金祈福双环结)
            } else if (sp === 'iconOmamori') {
                const oShape = new THREE.Shape();
                oShape.moveTo(-0.44, -0.54);
                oShape.lineTo(0.44, -0.54);
                oShape.lineTo(0.44, 0.16);
                oShape.lineTo(0.20, 0.44);
                oShape.lineTo(-0.20, 0.44);
                oShape.lineTo(-0.44, 0.16);
                oShape.closePath();

                const oGeo = new THREE.ExtrudeGeometry(oShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                oGeo.center();
                const pouch = new THREE.Mesh(oGeo, mainMat);
                pouch.position.y = -0.06;
                group.add(pouch);

                // 顶部穿孔黄金蝴蝶绳结与双流苏
                [-1, 1].forEach((dir) => {
                    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 12, 24), accentMat);
                    loop.position.set(dir * 0.16, 0.42, 0.12);
                    loop.rotation.z = -dir * 0.35;
                    group.add(loop);

                    const tassel = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.22 * featS, 12), accentMat);
                    tassel.position.set(dir * 0.14, 0.20, 0.18);
                    tassel.rotation.z = dir * 0.28;
                    group.add(tassel);
                });

            // =========================================================================
            // 全新补充 37 款：【强剪影轮廓 · 一眼即识】的特色 3D 精灵构建器 (#124 ~ #160)
            // =========================================================================

            // #124 招财喵灵 (Maneki Neko - 尖耳猫咪轮廓 + 举起的招财肉爪 + 胸前金判与金铃)
            } else if (sp === 'iconLuckyCat') {
                const cShape = new THREE.Shape();
                cShape.moveTo(-0.46, -0.52);
                cShape.lineTo(0.46, -0.52);
                cShape.quadraticCurveTo(0.56, 0.0, 0.48, 0.56);
                cShape.lineTo(0.20, 0.32);
                cShape.quadraticCurveTo(0, 0.38, -0.20, 0.32);
                cShape.lineTo(-0.48, 0.56);
                cShape.quadraticCurveTo(-0.56, 0.0, -0.46, -0.52);

                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                cGeo.center();
                group.add(new THREE.Mesh(cGeo, mainMat));

                // 左侧高高举起的招财猫小圆爪
                const paw = new THREE.Mesh(createCapsuleGeometry(0.14 * featS, 0.28 * featS, 18), mainMat);
                paw.position.set(-0.56, 0.08, 0.10);
                paw.rotation.z = 0.25;
                group.add(paw);

                // 右侧招财黄金椭圆小判金枚与脖间金铃铛
                const koban = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.36 * featS, 0.10, 0.08, 0.03), accentMat);
                koban.position.set(0.52, -0.10, 0.16);
                koban.rotation.z = -0.22;
                group.add(koban);

                const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                bell.position.set(0, -0.42, 0.24);
                bell.scale.setScalar(0.12 * featS);
                group.add(bell);

            // #125 萌爪肉垫 (PawPrint - 饱满心形主掌垫 + 扇弧排列的四颗圆润趾豆)
            } else if (sp === 'iconPawPrint') {
                // 下方饱满宽厚的主肉垫（承载双竖瞳）
                const padShape = new THREE.Shape();
                padShape.moveTo(0, 0.18);
                padShape.bezierCurveTo(0.46, 0.18, 0.58, -0.46, 0.24, -0.52);
                padShape.quadraticCurveTo(0, -0.42, -0.24, -0.52);
                padShape.bezierCurveTo(-0.58, -0.46, -0.46, 0.18, 0, 0.18);

                const padGeo = new THREE.ExtrudeGeometry(padShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                padGeo.center();
                const mainPad = new THREE.Mesh(padGeo, mainMat);
                mainPad.position.y = -0.16;
                group.add(mainPad);

                // 上方呈扇形弧线排列的四颗饱满脚趾豆（其中右上趾豆采用黄金撞色点缀）
                [
                    [-0.48, 0.18, 0.38, false],
                    [-0.18, 0.42, 0.12, false],
                    [0.18, 0.42, -0.12, true],
                    [0.48, 0.18, -0.38, false]
                ].forEach(([tx, ty, rot, isAccent]) => {
                    const toe = new THREE.Mesh(SHARED_GEOS.sphere, isAccent ? accentMat : mainMat);
                    toe.position.set(tx * featS, ty * featS, 0);
                    toe.rotation.z = rot;
                    toe.scale.set(0.17 * featS, 0.22 * featS, 0.18 * featS);
                    group.add(toe);
                });

            // #126 灵狐面具 (Kitsune - 尖下巴宽颊狐狸脸 + 高耸双尖狐耳 + 额间火印)
            } else if (sp === 'iconFox') {
                const whiteFurMat = createCloudToonMaterial('#FFFFFF', '#E2E8F0', 0.15);

                // 1. 狐狸饱满倒三角头部与微凸吻部
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.02, 0);
                head.scale.set(0.56, 0.46, 0.46);
                group.add(head);

                // 吻部小三角坡度 + 小黑鼻头
                const muzzle = new THREE.Mesh(SHARED_GEOS.sphere, whiteFurMat);
                muzzle.position.set(0, -0.16, 0.34);
                muzzle.scale.set(0.24, 0.16, 0.22);
                group.add(muzzle);

                const nose = new THREE.Mesh(SHARED_GEOS.sphere, new THREE.MeshBasicMaterial({ color: 0x0F172A }));
                nose.position.set(0, -0.12, 0.48);
                nose.scale.setScalar(0.045);
                group.add(nose);

                // 2. 左右两侧舒展翘起的丰满白色毛茸颊毛
                [-1, 1].forEach((dir) => {
                    const cheekFur = new THREE.Mesh(SHARED_GEOS.sphere, whiteFurMat);
                    cheekFur.position.set(dir * 0.46, -0.12, 0.12);
                    cheekFur.rotation.z = -dir * 0.35;
                    cheekFur.scale.set(0.22, 0.14, 0.12);
                    group.add(cheekFur);
                });

                // 3. 头顶竖立的大三角形灵狐耳朵 (带有粉白立体内耳)
                [-1, 1].forEach((dir) => {
                    const earGroup = new THREE.Group();
                    earGroup.position.set(dir * 0.34, 0.38, 0);
                    earGroup.rotation.z = -dir * 0.30;
                    earGroup.rotation.y = dir * 0.15;

                    const outerEar = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.46, 16), mainMat);
                    earGroup.add(outerEar);

                    const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.36, 14), whiteFurMat);
                    innerEar.position.set(0, -0.02, 0.07);
                    earGroup.add(innerEar);

                    earGroup.scale.setScalar(featS);
                    group.add(earGroup);
                });

                // 4. 背后翘起的大号蓬松卷尾巴 (带白色尾尖)
                const tailGroup = new THREE.Group();
                tailGroup.position.set(0.38, -0.12, -0.22);
                tailGroup.rotation.z = 0.45;
                tailGroup.rotation.y = -0.35;

                const tailBase = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                tailBase.scale.set(0.22, 0.36, 0.22);
                tailGroup.add(tailBase);

                const tailTip = new THREE.Mesh(SHARED_GEOS.sphere, whiteFurMat);
                tailTip.position.set(0, 0.28, 0);
                tailTip.scale.set(0.16, 0.22, 0.16);
                tailGroup.add(tailTip);

                group.add(tailGroup);} else if (sp === 'iconPanda') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.06, 0);
                head.scale.set(0.56, 0.50, 0.50);
                group.add(head);

                // 左右两只标志性的撞色大圆熊猫耳
                [-1, 1].forEach((dir) => {
                    const ear = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    ear.position.set(dir * 0.44, 0.38, -0.04);
                    ear.scale.set(0.22 * featS, 0.22 * featS, 0.16 * featS);
                    group.add(ear);
                });

                // 头顶萌发的双叶黄金竹枝
                const shoot = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.24 * featS, 12), accentMat);
                shoot.position.set(0.04, 0.52, 0);
                shoot.rotation.z = -0.25;
                group.add(shoot);

                const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                leaf.position.set(0.18, 0.58, 0);
                leaf.rotation.z = -0.65;
                leaf.scale.set(0.18 * featS, 0.07 * featS, 0.06 * featS);
                group.add(leaf);

            // #128 卷角绵羊 (Aries Sheep - 蓬松云朵刘海 + 两侧大回环螺旋黄金羊角)
            } else if (sp === 'iconSheep') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.06, 0);
                head.scale.set(0.50, 0.48, 0.48);
                group.add(head);

                // 头顶三团蓬松羊毛卷
                [[-0.22, 0.38], [0, 0.44], [0.22, 0.38]].forEach(([wx, wy]) => {
                    const wool = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    wool.position.set(wx, wy, 0.06);
                    wool.scale.setScalar(0.22);
                    group.add(wool);
                });

                // 左右两侧高辨识度的C型盘旋黄金绵羊大卷角
                [-1, 1].forEach((dir) => {
                    const horn = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.095 * featS, 16, 32, Math.PI * 1.45), accentMat);
                    horn.position.set(dir * 0.48, 0.08, 0);
                    horn.rotation.z = dir === 1 ? -0.4 : Math.PI + 0.4;
                    group.add(horn);
                });

            // #129 考拉树袋 (Koala - 圆脑袋 + 两侧横向张开的超大毛茸茸圆耳)
            } else if (sp === 'iconKoala') {
                const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                head.position.set(0, -0.08, 0.04);
                head.scale.set(0.50, 0.46, 0.46);
                group.add(head);

                [-1, 1].forEach((dir) => {
                    const bigEar = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    bigEar.position.set(dir * 0.52, 0.20, -0.04);
                    bigEar.scale.set(0.28 * featS, 0.28 * featS, 0.16 * featS);
                    group.add(bigEar);

                    const fluff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    fluff.position.set(dir * 0.52, 0.20, 0.08);
                    fluff.scale.set(0.16 * featS, 0.16 * featS, 0.08 * featS);
                    group.add(fluff);
                });

                const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                leaf.position.set(0, 0.46, 0.08);
                leaf.rotation.z = 0.35;
                leaf.scale.set(0.18 * featS, 0.09 * featS, 0.08 * featS);
                group.add(leaf);

            // #130 大钳螃蟹 (Crabby - 宽扁椭圆蟹壳 + 头顶高举的一对月牙黄金大钳)
            } else if (sp === 'iconCrab') {
                // 1. 横向圆润饱满的马卡龙大蟹壳主体
                const shell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                shell.position.set(0, -0.06, 0);
                shell.scale.set(0.68, 0.46, 0.48);
                group.add(shell);

                // 2. 头顶竖起的两根萌感小眼柄
                [-0.20, 0.20].forEach((ox) => {
                    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.22, 16), mainMat);
                    stalk.position.set(ox, 0.32, 0.14);
                    stalk.rotation.z = (ox > 0 ? -0.15 : 0.15);
                    group.add(stalk);

                    const eyeGlobe = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    eyeGlobe.position.set(ox * 1.15, 0.44, 0.15);
                    eyeGlobe.scale.setScalar(0.11);
                    group.add(eyeGlobe);
                });

                // 3. 左右高高举起的招财威武大钳子 (大鳌)
                [-1, 1].forEach((dir) => {
                    const clawGroup = new THREE.Group();
                    clawGroup.position.set(dir * 0.54, 0.16, 0.04);
                    clawGroup.rotation.z = dir * 0.28;

                    // 粗壮的手臂关节
                    const armCurve = new THREE.CatmullRomCurve3([
                        new THREE.Vector3(0, -0.16, 0),
                        new THREE.Vector3(dir * 0.18, 0.02, 0),
                        new THREE.Vector3(dir * 0.16, 0.22, 0)
                    ]);
                    const arm = new THREE.Mesh(new THREE.TubeGeometry(armCurve, 16, 0.08, 14, false), mainMat);
                    clawGroup.add(arm);

                    // 蟹钳主月牙半壳
                    const mainClaw = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.09, 14, 28, Math.PI * 0.8), accentMat);
                    mainClaw.position.set(dir * 0.18, 0.28, 0);
                    mainClaw.rotation.z = dir > 0 ? Math.PI * 0.6 : -Math.PI * 0.4;
                    clawGroup.add(mainClaw);

                    // 咬合小内钳
                    const subClaw = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.24, 12), accentMat);
                    subClaw.position.set(dir * 0.10, 0.38, 0);
                    subClaw.rotation.z = dir * 0.7;
                    clawGroup.add(subClaw);

                    clawGroup.scale.setScalar(featS);
                    group.add(clawGroup);
                });

                // 4. 两侧各两对可爱微弯小爬足
                [-1, 1].forEach((dir) => {
                    [-0.14, -0.26].forEach((legY, lIdx) => {
                        const leg = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.038, 12, 20, Math.PI * 0.5), mainMat);
                        leg.position.set(dir * 0.62, legY, -0.04 * lIdx);
                        leg.rotation.z = dir > 0 ? -Math.PI * 0.45 : Math.PI * 0.95;
                        group.add(leg);
                    });
                });} else if (sp === 'iconStarfish') {
                const sShape = new THREE.Shape();
                const pts = 5;
                for (let i = 0; i < pts * 2; i++) {
                    const r = i % 2 === 0 ? 0.64 : 0.32;
                    const a = (i / (pts * 2)) * Math.PI * 2 + Math.PI / 2;
                    const x = Math.cos(a) * r;
                    const y = Math.sin(a) * r;
                    if (i === 0) sShape.moveTo(x, y);
                    else sShape.quadraticCurveTo(x * 0.95, y * 0.95, x, y);
                }
                sShape.closePath();

                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.11, bevelThickness: 0.13
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                pearl.position.set(-0.28, 0.32, 0.22);
                pearl.scale.setScalar(0.11 * featS);
                group.add(pearl);

            // #132 珍珠扇贝 (Scallop Shell - 经典五瓣波浪扇贝壳轮廓 + 底部贝壳耳与珍珠)
            } else if (sp === 'iconSeashell') {
                const shShape = new THREE.Shape();
                shShape.moveTo(-0.28, -0.52);
                shShape.lineTo(0.28, -0.52);
                shShape.lineTo(0.62, 0.08);
                shShape.quadraticCurveTo(0.42, 0.56, 0, 0.58);
                shShape.quadraticCurveTo(-0.42, 0.56, -0.62, 0.08);
                shShape.closePath();

                const shGeo = new THREE.ExtrudeGeometry(shShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                shGeo.center();
                group.add(new THREE.Mesh(shGeo, mainMat));

                // 顶部扇贝波浪珠冠与左上璀璨金珍珠
                [-0.38, 0, 0.38].forEach((rx, idx) => {
                    const ridge = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    ridge.position.set(rx, idx === 1 ? 0.52 : 0.44, 0);
                    ridge.scale.set(0.20, 0.14, 0.20);
                    group.add(ridge);
                });

                const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                pearl.position.set(-0.36, 0.36, 0.22);
                pearl.scale.setScalar(0.13 * featS);
                group.add(pearl);

            // #133 博学夜枭 (Owl - 猫头鹰羽冠耳簇剪影 + 眉心黄金菱形鸟喙)
                        } else if (sp === 'iconOwl') {
                const oShape = new THREE.Shape();
                oShape.moveTo(-0.36, -0.52);
                oShape.quadraticCurveTo(0, -0.60, 0.36, -0.52);
                oShape.quadraticCurveTo(0.62, -0.10, 0.54, 0.56);
                oShape.lineTo(0.24, 0.38);
                oShape.quadraticCurveTo(0, 0.44, -0.24, 0.38);
                oShape.lineTo(-0.54, 0.56);
                oShape.quadraticCurveTo(-0.62, -0.10, -0.36, -0.52);

                const oGeo = new THREE.ExtrudeGeometry(oShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                oGeo.center();
                group.add(new THREE.Mesh(oGeo, mainMat));

                // 眉心下方立体黄金小鸟喙与双脚爪
                const beak = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.20 * featS, 4), accentMat);
                beak.rotation.z = Math.PI;
                beak.position.set(0.08, -0.16, 0.26);
                group.add(beak);

                [-0.22, 0.22].forEach((fx) => {
                    const claw = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    claw.position.set(fx, -0.56, 0.12);
                    claw.scale.set(0.12 * featS, 0.08 * featS, 0.12 * featS);
                    group.add(claw);
                });
} else if (sp === 'iconBat') {
                const bShape = new THREE.Shape();
                bShape.moveTo(0, -0.38);
                bShape.quadraticCurveTo(0.26, -0.16, 0.68, -0.26);
                bShape.quadraticCurveTo(0.76, 0.16, 0.38, 0.26);
                bShape.lineTo(0.24, 0.56);
                bShape.lineTo(0.08, 0.34);
                bShape.lineTo(-0.08, 0.34);
                bShape.lineTo(-0.24, 0.56);
                bShape.lineTo(-0.38, 0.26);
                bShape.quadraticCurveTo(-0.76, 0.16, -0.68, -0.26);
                bShape.quadraticCurveTo(-0.26, -0.16, 0, -0.38);

                const bGeo = new THREE.ExtrudeGeometry(bShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                bGeo.center();
                group.add(new THREE.Mesh(bGeo, mainMat));

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(0, 0.48, 0.18);
                star.scale.setScalar(0.72 * featS);
                group.add(star);

            // #135 皇冠天鹅 (Swan - 优雅S型天鹅颈与微扬羽翼一体轮廓 + 黄金小王冠)
            } else if (sp === 'iconSwan') {
                // 下方饱满的天鹅身躯与微翘尾羽（承载双竖瞳）
                const bodyShape = new THREE.Shape();
                bodyShape.moveTo(-0.48, -0.48);
                bodyShape.lineTo(0.42, -0.48);
                bodyShape.quadraticCurveTo(0.62, -0.12, 0.36, 0.16);
                bodyShape.quadraticCurveTo(0, 0.06, -0.58, 0.18);
                bodyShape.quadraticCurveTo(-0.66, -0.22, -0.48, -0.48);

                const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                bodyGeo.center();
                const swanBody = new THREE.Mesh(bodyGeo, mainMat);
                swanBody.position.y = -0.20;
                group.add(swanBody);

                // 右上方优雅S型天鹅长颈、黄金小尖嘴与皇冠
                const neckCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0.24, -0.06, 0),
                    new THREE.Vector3(0.42, 0.28, 0),
                    new THREE.Vector3(0.22, 0.56, 0),
                    new THREE.Vector3(0.08, 0.48, 0)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(neckCurve, 24, 0.13, 16, false), mainMat));

                const crown = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.18 * featS, 5), accentMat);
                crown.position.set(0.24, 0.68, 0);
                group.add(crown);

            // #136 五瓣梅花 (Plum Blossom - 饱满五圆瓣围合剪影 + 中心三颗黄金花蕊)
            } else if (sp === 'iconBlossom') {
                for (let i = 0; i < 5; i++) {
                    const ang = (i / 5) * Math.PI * 2 + Math.PI / 2;
                    const petal = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    petal.position.set(Math.cos(ang) * 0.34, Math.sin(ang) * 0.34, 0);
                    petal.scale.set(0.34, 0.34, 0.24);
                    group.add(petal);
                }
                const core = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                core.scale.set(0.42, 0.42, 0.26);
                group.add(core);

                [[-0.14, 0.28], [0, 0.34], [0.14, 0.28]].forEach(([sx, sy]) => {
                    const stamen = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    stamen.position.set(sx, sy, 0.22);
                    stamen.scale.setScalar(0.075 * featS);
                    group.add(stamen);
                });

            // #137 秋色枫叶 (Maple Leaf - 五裂尖角枫叶剪影 + 底部黄金叶柄)
            } else if (sp === 'iconMaple') {
                const mShape = new THREE.Shape();
                mShape.moveTo(0, 0.64);
                mShape.lineTo(0.22, 0.28);
                mShape.lineTo(0.62, 0.36);
                mShape.lineTo(0.38, -0.04);
                mShape.lineTo(0.56, -0.28);
                mShape.lineTo(0, -0.36);
                mShape.lineTo(-0.56, -0.28);
                mShape.lineTo(-0.38, -0.04);
                mShape.lineTo(-0.62, 0.36);
                mShape.lineTo(-0.22, 0.28);
                mShape.closePath();

                const mGeo = new THREE.ExtrudeGeometry(mShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                mGeo.center();
                const leaf = new THREE.Mesh(mGeo, mainMat);
                leaf.position.y = 0.06;
                group.add(leaf);

                const stem = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.28 * featS, 14), accentMat);
                stem.position.set(0.06, -0.50, 0);
                stem.rotation.z = 0.22;
                group.add(stem);

            // #138 银杏扇叶 (Ginkgo Leaf - 顶端带分叉V缺口的经典扇叶轮廓 + 黄金叶茎)
            } else if (sp === 'iconGinkgo') {
                const gShape = new THREE.Shape();
                gShape.moveTo(0, -0.44);
                gShape.quadraticCurveTo(0.58, -0.14, 0.64, 0.32);
                gShape.quadraticCurveTo(0.36, 0.58, 0.08, 0.34);
                gShape.lineTo(0, 0.22);
                gShape.lineTo(-0.08, 0.34);
                gShape.quadraticCurveTo(-0.36, 0.58, -0.64, 0.32);
                gShape.quadraticCurveTo(-0.58, -0.14, 0, -0.44);

                const gGeo = new THREE.ExtrudeGeometry(gShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                gGeo.center();
                const leaf = new THREE.Mesh(gGeo, mainMat);
                leaf.position.y = 0.08;
                group.add(leaf);

                const petiole = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.32 * featS, 14), accentMat);
                petiole.position.set(0.08, -0.48, 0);
                petiole.rotation.z = 0.28;
                group.add(petiole);

            // #139 节节翠竹 (Bamboo Stalk - 上下立体竹节凸环 + 侧边双片黄金竹叶)
            } else if (sp === 'iconBamboo') {
                const stalk = new THREE.Mesh(createCapsuleGeometry(0.34, 0.72, 28), mainMat);
                group.add(stalk);

                // 上下两道标志性的竹节凸环
                [-0.28, 0.28].forEach((jy) => {
                    const joint = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.058, 16, 36), mainMat);
                    joint.rotation.x = Math.PI / 2;
                    joint.position.set(0, jy, 0);
                    group.add(joint);
                });

                // 右上侧斜逸而出的两片修长黄金竹叶
                [[0.46, 0.36, -0.65], [0.52, 0.16, -1.05]].forEach(([lx, ly, rot]) => {
                    const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    leaf.position.set(lx, ly, 0);
                    leaf.rotation.z = rot;
                    leaf.scale.set(0.10 * featS, 0.26 * featS, 0.07 * featS);
                    group.add(leaf);
                });

            // #140 浮世海浪 (Ocean Wave - 卷起C型浪峰的经典大浪剪影 + 黄金浪花珠)
            } else if (sp === 'iconWave') {
                const wShape = new THREE.Shape();
                wShape.moveTo(-0.62, -0.48);
                wShape.lineTo(0.58, -0.48);
                wShape.quadraticCurveTo(0.68, -0.06, 0.24, 0.02);
                wShape.bezierCurveTo(-0.14, 0.08, -0.12, 0.42, 0.26, 0.38);
                wShape.quadraticCurveTo(0.08, 0.64, -0.34, 0.52);
                wShape.bezierCurveTo(-0.68, 0.38, -0.72, -0.14, -0.62, -0.48);

                const wGeo = new THREE.ExtrudeGeometry(wShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                wGeo.center();
                group.add(new THREE.Mesh(wGeo, mainMat));

                // 浪尖飞溅的黄金水沫圆珠
                [[0.38, 0.46, 0.11], [0.54, 0.30, 0.08], [0.22, 0.60, 0.07]].forEach(([fx, fy, r]) => {
                    const foam = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    foam.position.set(fx, fy, 0.12);
                    foam.scale.setScalar(r * featS);
                    group.add(foam);
                });

            // #141 日照雪山 (Mountain Peak - 双峰山峦剪影 + 右后方黄金初升朝阳)
            } else if (sp === 'iconMountain') {
                const mtShape = new THREE.Shape();
                mtShape.moveTo(-0.66, -0.48);
                mtShape.lineTo(0.66, -0.48);
                mtShape.lineTo(0.32, 0.22);
                mtShape.lineTo(0.12, -0.02);
                mtShape.lineTo(-0.18, 0.56);
                mtShape.closePath();

                const mtGeo = new THREE.ExtrudeGeometry(mtShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                mtGeo.center();
                group.add(new THREE.Mesh(mtGeo, mainMat));

                // 右上山谷间升起的黄金太阳圆盘
                const sun = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                sun.position.set(0.36, 0.38, -0.08);
                sun.scale.set(0.26 * featS, 0.26 * featS, 0.16 * featS);
                group.add(sun);

            // #142 耀眼骄阳 (Helios Sun - 饱满太阳圆盘 + 8枚放射状立体三角日冕)
            } else if (sp === 'iconSun') {
                const core = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                core.scale.set(0.48, 0.48, 0.38);
                group.add(core);

                for (let i = 0; i < 8; i++) {
                    const ang = (i / 8) * Math.PI * 2;
                    const ray = new THREE.Mesh(new THREE.ConeGeometry(0.13 * featS, 0.26 * featS, 4), accentMat);
                    ray.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
                    ray.rotation.z = ang - Math.PI / 2;
                    group.add(ray);
                }

            // #143 六角雪晶 (Snowflake - 六轴冰晶雪花剪影 + 6颗黄金星尖珠)
            } else if (sp === 'iconSnowflake') {
                for (let i = 0; i < 3; i++) {
                    const bar = new THREE.Mesh(createCapsuleGeometry(0.14, 0.92, 20), mainMat);
                    bar.rotation.z = (i * Math.PI) / 3;
                    group.add(bar);
                }
                const center = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                center.scale.set(0.42, 0.42, 0.32);
                group.add(center);

                for (let i = 0; i < 6; i++) {
                    const ang = (i / 6) * Math.PI * 2 + Math.PI / 6;
                    const tip = new THREE.Mesh( new THREE.OctahedronGeometry(0.11 * featS, 0), accentMat);
                    tip.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
                    group.add(tip);
                }

            // #144 露营篝火 (Bonfire - 三峰跃动火苗轮廓 + 底部交叉双黄金木柴)
            } else if (sp === 'iconCampfire') {
                const fShape = new THREE.Shape();
                fShape.moveTo(0, -0.36);
                fShape.bezierCurveTo(0.56, -0.36, 0.62, 0.14, 0.36, 0.38);
                fShape.quadraticCurveTo(0.18, 0.18, 0, 0.64);
                fShape.quadraticCurveTo(-0.18, 0.18, -0.36, 0.38);
                fShape.bezierCurveTo(-0.62, 0.14, -0.56, -0.36, 0, -0.36);

                const fGeo = new THREE.ExtrudeGeometry(fShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                fGeo.center();
                const flame = new THREE.Mesh(fGeo, mainMat);
                flame.position.y = 0.08;
                group.add(flame);

                // 底部交叉架起的两根黄金圆木柴
                [-1, 1].forEach((dir) => {
                    const log = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.72 * featS, 16), accentMat);
                    log.position.set(0, -0.44, dir * 0.04);
                    log.rotation.z = Math.PI / 2 + dir * 0.28;
                    group.add(log);
                });

            // #145 尤克里里 (Ukulele - 经典8字吉他琴箱 + 黄金琴颈与音孔环)
            } else if (sp === 'iconUkulele') {
                const uShape = new THREE.Shape();
                uShape.moveTo(0, -0.58);
                uShape.bezierCurveTo(0.58, -0.58, 0.58, -0.08, 0.30, 0.04);
                uShape.bezierCurveTo(0.48, 0.16, 0.44, 0.48, 0, 0.48);
                uShape.bezierCurveTo(-0.44, 0.48, -0.48, 0.16, -0.30, 0.04);
                uShape.bezierCurveTo(-0.58, -0.08, -0.58, -0.58, 0, -0.58);

                const uGeo = new THREE.ExtrudeGeometry(uShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                uGeo.center();
                const body = new THREE.Mesh(uGeo, mainMat);
                body.position.y = -0.10;
                group.add(body);

                const neck = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.44 * featS, 16), accentMat);
                neck.position.set(0, 0.48, 0);
                group.add(neck);

                const holeRing = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.042 * featS, 14, 28), accentMat);
                holeRing.position.set(0, 0.12, 0.20);
                group.add(holeRing);

            // #146 爵士小号 (Trumpet - 喇叭口号身 + 顶部三枚黄金活塞按键)
            } else if (sp === 'iconTrumpet') {
                // 跑道形厚实号管主体
                const body = new THREE.Mesh(createRoundedRectExtrude(0.82, 0.52, 0.22, 0.28, 0.10), mainMat);
                body.position.set(-0.08, -0.06, 0);
                group.add(body);

                // 右侧宽阔绽放的喇叭号口
                const bell = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.48, 24), mainMat);
                bell.rotation.z = Math.PI / 2;
                bell.position.set(0.42, -0.06, 0);
                group.add(bell);

                // 顶部并排三枚标志性的小号黄金活塞按键
                [-0.28, -0.08, 0.12].forEach((vx) => {
                    const valve = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.24 * featS, 14), accentMat);
                    valve.position.set(vx, 0.32, 0);
                    group.add(valve);
                });

            // #147 歌剧假面 (Masquerade Mask - 飞扬双翼假面轮廓 + 左上黄金翎羽)
            } else if (sp === 'iconMask') {
                const mShape = new THREE.Shape();
                mShape.moveTo(0, -0.34);
                mShape.quadraticCurveTo(0.32, -0.14, 0.64, -0.22);
                mShape.quadraticCurveTo(0.72, 0.26, 0.48, 0.48);
                mShape.quadraticCurveTo(0.18, 0.34, 0, 0.22);
                mShape.quadraticCurveTo(-0.18, 0.34, -0.48, 0.48);
                mShape.quadraticCurveTo(-0.72, 0.26, -0.64, -0.22);
                mShape.quadraticCurveTo(-0.32, -0.14, 0, -0.34);

                const mGeo = new THREE.ExtrudeGeometry(mShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                mGeo.center();
                group.add(new THREE.Mesh(mGeo, mainMat));

                // 左上角斜插的两片黄金羽毛冠
                const plume1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                plume1.position.set(-0.44, 0.48, 0.06);
                plume1.rotation.z = 0.55;
                plume1.scale.set(0.12 * featS, 0.28 * featS, 0.08 * featS);
                group.add(plume1);

            // #148 飞翼权杖 (Winged Scepter - 宝珠核心 + 两侧黄金天使翼 + 底部权杖柄)
            } else if (sp === 'iconScepter') {
                const orb = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                orb.position.set(0, 0.10, 0);
                orb.scale.setScalar(0.46);
                group.add(orb);

                const staff = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.46 * featS, 18), accentMat);
                staff.position.set(0, -0.38, 0);
                group.add(staff);

                [-1, 1].forEach((dir) => {
                    const wing = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    wing.position.set(dir * 0.54, 0.22, 0);
                    wing.rotation.z = -dir * 0.45;
                    wing.scale.set(0.26 * featS, 0.14 * featS, 0.10 * featS);
                    group.add(wing);
                });

                const topStar = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                topStar.position.set(0, 0.64, 0);
                topStar.scale.setScalar(0.75 * featS);
                group.add(topStar);

            // #149 占星魔球 (Crystal Ball - 浑圆水晶球 + 黄金雕花底座 + 顶星芒)
            } else if (sp === 'iconCrystalBall') {
                const ball = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                ball.position.set(0, 0.08, 0);
                ball.scale.setScalar(0.50);
                group.add(ball);

                const basePts = [
                    new THREE.Vector2(0.01, -0.58),
                    new THREE.Vector2(0.46, -0.56),
                    new THREE.Vector2(0.32, -0.32),
                    new THREE.Vector2(0.38, -0.24),
                    new THREE.Vector2(0.01, -0.24)
                ];
                const pedestal = new THREE.Mesh(new THREE.LatheGeometry(basePts, 28), accentMat);
                pedestal.scale.setScalar(featS);
                group.add(pedestal);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.36, 0.46, 0.24);
                star.scale.setScalar(0.82 * featS);
                group.add(star);

                        } else if (sp === 'iconChest') {
                const box = new THREE.Mesh(createRoundedRectExtrude(1.04, 0.78, 0.22, 0.38, 0.12), mainMat);
                group.add(box);

                [-0.34, 0.34].forEach((bx) => {
                    const strap = new THREE.Mesh(createRoundedRectExtrude(0.14 * featS, 0.84 * featS, 0.04, 0.44, 0.05), accentMat);
                    strap.position.set(bx, 0.02, 0);
                    group.add(strap);
                });

                const lockPlate = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.28 * featS, 0.06, 0.12, 0.04), accentMat);
                lockPlate.position.set(0, 0.14, 0.24);
                group.add(lockPlate);
} else if (sp === 'iconAxe') {
                const aShape = new THREE.Shape();
                aShape.moveTo(-0.56, 0.46);
                aShape.quadraticCurveTo(0, 0.14, 0.56, 0.46);
                aShape.quadraticCurveTo(0.72, 0, 0.56, -0.46);
                aShape.quadraticCurveTo(0, -0.14, -0.56, -0.46);
                aShape.quadraticCurveTo(-0.72, 0, -0.56, 0.46);

                const aGeo = new THREE.ExtrudeGeometry(aShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                aGeo.center();
                const blade = new THREE.Mesh(aGeo, mainMat);
                blade.position.y = 0.06;
                group.add(blade);

                const haft = new THREE.Mesh(createCapsuleGeometry(0.10 * featS, 1.12 * featS, 18), accentMat);
                haft.position.set(0, -0.04, -0.02);
                group.add(haft);

            // #152 火花炸弹 (Cartoon Bomb - 浑圆炸弹球 + 顶部引信帽 + 导火索与火花星)
            } else if (sp === 'iconBomb') {
                const sphere = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                sphere.position.set(0, -0.08, 0);
                sphere.scale.setScalar(0.52);
                group.add(sphere);

                const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.22, 0.16, 24), mainMat);
                cap.position.set(0, 0.40, 0);
                group.add(cap);

                const fuseCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 0.46, 0),
                    new THREE.Vector3(0.16, 0.62, 0),
                    new THREE.Vector3(0.34, 0.56, 0.06)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(fuseCurve, 18, 0.048 * featS, 12, false), accentMat));

                const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                spark.position.set(0.42, 0.56, 0.10);
                spark.scale.setScalar(0.88 * featS);
                group.add(spark);

            // #153 折纸千鹤 (Origami Crane - 展翅昂首的经典几何千纸鹤剪影)
            } else if (sp === 'iconCrane') {
                const cShape = new THREE.Shape();
                cShape.moveTo(0, -0.46);
                cShape.lineTo(0.66, 0.26);
                cShape.lineTo(0.18, 0.16);
                cShape.lineTo(0, 0.58);
                cShape.lineTo(-0.18, 0.16);
                cShape.lineTo(-0.66, 0.26);
                cShape.closePath();

                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                cGeo.center();
                group.add(new THREE.Mesh(cGeo, mainMat));

                const beak = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.28 * featS, 4), accentMat);
                beak.position.set(0.16, 0.52, 0.06);
                beak.rotation.z = -1.15;
                group.add(beak);

            // #154 王牌黑桃 (Ace of Spades - 经典扑克黑桃♠轮廓 + 顶部黄金小王冠)
            } else if (sp === 'iconSpade') {
                const sShape = new THREE.Shape();
                sShape.moveTo(0, 0.56);
                sShape.bezierCurveTo(0.62, 0.06, 0.64, -0.44, 0.16, -0.34);
                sShape.lineTo(0.26, -0.58);
                sShape.lineTo(-0.26, -0.58);
                sShape.lineTo(-0.16, -0.34);
                sShape.bezierCurveTo(-0.64, -0.44, -0.62, 0.06, 0, 0.56);

                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.11
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                const crown = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                crown.position.set(-0.38, 0.42, 0.20);
                crown.scale.setScalar(0.82 * featS);
                group.add(crown);

            // #155 无限星环 (Infinity Loop - 横向饱满无穷大符号 ∞ + 闪耀金星)
            } else if (sp === 'iconInfinity') {
                [-0.30, 0.30].forEach((lx) => {
                    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.16, 20, 36), mainMat);
                    loop.position.set(lx, 0, 0);
                    group.add(loop);
                });
                const bridge = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                bridge.scale.set(0.38, 0.32, 0.26);
                group.add(bridge);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(0.46, 0.38, 0.20);
                star.scale.setScalar(0.85 * featS);
                group.add(star);

            // #156 宫廷灯笼 (Palace Lantern - 红灯笼球身 + 上下黄金灯座与流苏)
            } else if (sp === 'iconLantern') {
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0, 0.04, 0);
                body.scale.set(0.56, 0.46, 0.52);
                group.add(body);

                [-0.38, 0.46].forEach((cy) => {
                    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.26 * featS, 0.26 * featS, 0.12 * featS, 24), accentMat);
                    cap.position.set(0, cy, 0);
                    group.add(cap);
                });

                const tassel = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.24 * featS, 14), accentMat);
                tassel.position.set(0, -0.54, 0);
                group.add(tassel);

            // #157 必胜达摩 (Daruma - 圆润不倒翁身躯 + 额头黄金八字浓眉 + 腹间金纹)
            } else if (sp === 'iconDaruma') {
                const dPts = [
                    new THREE.Vector2(0.01, -0.54),
                    new THREE.Vector2(0.48, -0.50),
                    new THREE.Vector2(0.56, -0.14),
                    new THREE.Vector2(0.48, 0.34),
                    new THREE.Vector2(0.28, 0.54),
                    new THREE.Vector2(0.01, 0.58)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(dPts, 32), mainMat));

                // 额头霸气上扬的两道黄金浓眉与腹部金饰
                [-1, 1].forEach((dir) => {
                    const brow = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 0.22 * featS, 12), accentMat);
                    brow.position.set(0.06 + dir * 0.18, 0.28, 0.44);
                    brow.rotation.z = dir * 1.18;
                    group.add(brow);
                });

                const stripe = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.36 * featS, 14), accentMat);
                stripe.rotation.z = Math.PI / 2;
                stripe.position.set(0.06, -0.32, 0.48);
                group.add(stripe);

            // #158 乘风鲤鱼 (Koinobori - 鲤鱼旗流线鱼身 + 左侧黄金鱼口环 + 右侧分叉燕尾)
            } else if (sp === 'iconKoi') {
                const kShape = new THREE.Shape();
                kShape.moveTo(-0.56, 0.34);
                kShape.quadraticCurveTo(0.12, 0.44, 0.64, 0.32);
                kShape.lineTo(0.42, 0);
                kShape.lineTo(0.64, -0.32);
                kShape.quadraticCurveTo(0.12, -0.44, -0.56, -0.34);
                kShape.closePath();

                const kGeo = new THREE.ExtrudeGeometry(kShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                kGeo.center();
                group.add(new THREE.Mesh(kGeo, mainMat));

                // 左侧迎风口黄金圆环与顶部鱼鳍
                const mouthRing = new THREE.Mesh(new THREE.TorusGeometry(0.32 * featS, 0.068 * featS, 16, 32), accentMat);
                mouthRing.rotation.y = Math.PI / 2;
                mouthRing.position.set(-0.58, 0, 0);
                group.add(mouthRing);

            // #159 锯齿邮票 (Postage Stamp - 四周带邮票齿孔的方框剪影 + 右上黄金星戳)
            } else if (sp === 'iconStamp') {
                const stamp = new THREE.Mesh(createRoundedRectExtrude(0.96, 1.06, 0.12, 0.24, 0.08), mainMat);
                group.add(stamp);

                // 四边凸起的邮票波浪齿边珠
                [-0.32, 0, 0.32].forEach((pos) => {
                    const topTooth = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    topTooth.position.set(pos, 0.56, 0);
                    topTooth.scale.setScalar(0.10);
                    group.add(topTooth);

                    const sideTooth = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    sideTooth.position.set(0.52, pos, 0);
                    sideTooth.scale.setScalar(0.10);
                    group.add(sideTooth);
                });

                const postmark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                postmark.position.set(-0.28, 0.32, 0.20);
                postmark.scale.setScalar(0.82 * featS);
                group.add(postmark);

            // #160 荣耀勋章 (Medallion - 厚实圆奖章 + 顶部V型折叠黄金领奖绶带)
            } else if (sp === 'iconMedal') {
                const disc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                disc.position.set(0, -0.18, 0);
                disc.scale.set(0.50, 0.50, 0.34);
                group.add(disc);

                [-1, 1].forEach((dir) => {
                    const ribbon = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.52 * featS, 0.06, 0.14, 0.04), accentMat);
                    ribbon.position.set(dir * 0.18, 0.38, -0.06);
                    ribbon.rotation.z = -dir * 0.38;
                    group.add(ribbon);
                });

                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12 * featS, 0.042 * featS, 12, 24), accentMat);
                ring.position.set(0, 0.28, 0.06);
                group.add(ring);

            // =========================================================================
            // 全新补充 31 款：【强剪影轮廓 · 一眼即识】的特色 3D 精灵构建器 (#150 ~ #180)
            // =========================================================================

            // #150 侦探放大镜 (Magnifier - 厚圆框镜片 + 右下45°黄金手柄 + 左上星芒)
            } else if (sp === 'iconMagnifier') {
                const lens = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                lens.position.set(-0.08, 0.08, 0);
                lens.scale.set(0.48, 0.48, 0.30);
                group.add(lens);

                const rim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.10, 18, 40), mainMat);
                rim.position.set(-0.08, 0.08, 0.06);
                group.add(rim);

                const handle = new THREE.Mesh(createCapsuleGeometry(0.115 * featS, 0.42 * featS, 18), accentMat);
                handle.position.set(0.38, -0.38, 0);
                handle.rotation.z = Math.PI / 4;
                group.add(handle);

                const glint = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                glint.position.set(-0.42, 0.44, 0.22);
                glint.scale.setScalar(0.78 * featS);
                group.add(glint);

            // #151 秘境皇室钥 (Royal Skeleton Key - 饱满雕花钥首 + 钥匙杆 + 右侧双黄金锁齿)
            } else if (sp === 'iconRoyalKey') {
                // 上方饱满心形皇冠钥首（承载双竖瞳）
                const bow = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.64, 0.26, 0.26, 0.10), mainMat);
                bow.position.set(0, 0.18, 0);
                group.add(bow);

                // 下方粗壮钥匙杆与右侧两枚醒目的黄金钥匙齿
                const shaft = new THREE.Mesh(createCapsuleGeometry(0.13, 0.56, 18), mainMat);
                shaft.position.set(-0.06, -0.30, 0);
                group.add(shaft);

                [-0.32, -0.50].forEach((ty, idx) => {
                    const tooth = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, (idx === 0 ? 0.24 : 0.32) * featS, 14), accentMat);
                    tooth.rotation.z = Math.PI / 2;
                    tooth.position.set(0.14, ty, 0);
                    group.add(tooth);
                });

                const topCrown = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                topCrown.position.set(0, 0.58, 0.14);
                topCrown.scale.setScalar(0.78 * featS);
                group.add(topCrown);

            // #152 飞天魔法帚 (Magic Broom - 下方蓬松开叉扫帚穗 + 金束腰 + 上方倾斜木柄)
            } else if (sp === 'iconMagicBroom') {
                const bShape = new THREE.Shape();
                bShape.moveTo(-0.54, -0.52);
                bShape.quadraticCurveTo(-0.20, -0.38, 0, -0.54);
                bShape.quadraticCurveTo(0.20, -0.38, 0.54, -0.52);
                bShape.quadraticCurveTo(0.58, -0.06, 0.24, 0.14);
                bShape.lineTo(-0.24, 0.14);
                bShape.quadraticCurveTo(-0.58, -0.06, -0.54, -0.52);

                const bGeo = new THREE.ExtrudeGeometry(bShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                bGeo.center();
                const brush = new THREE.Mesh(bGeo, mainMat);
                brush.position.y = -0.20;
                group.add(brush);

                // 束紧扫帚穗的黄金金属箍环与上方扫帚长柄
                const collar = new THREE.Mesh(new THREE.TorusGeometry(0.26 * featS, 0.068 * featS, 16, 32), accentMat);
                collar.rotation.x = Math.PI / 2;
                collar.position.set(0, 0.10, 0);
                group.add(collar);

                const stick = new THREE.Mesh(createCapsuleGeometry(0.088 * featS, 0.54 * featS, 16), accentMat);
                stick.position.set(0.06, 0.42, 0);
                stick.rotation.z = -0.16;
                group.add(stick);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.36, 0.38, 0.18);
                star.scale.setScalar(0.82 * featS);
                group.add(star);

            // #153 祈愿风铃 (Wind Chime - 圆拱玻璃风铃罩 + 顶部挂环 + 底部飘扬黄金短册签)
            } else if (sp === 'iconWindChime') {
                const domePts = [
                    new THREE.Vector2(0.01, -0.08),
                    new THREE.Vector2(0.52, -0.10),
                    new THREE.Vector2(0.50, 0.24),
                    new THREE.Vector2(0.32, 0.48),
                    new THREE.Vector2(0.01, 0.52)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(domePts, 32), mainMat));

                const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.12 * featS, 0.045 * featS, 12, 24), accentMat);
                topRing.position.set(0, 0.60, 0);
                group.add(topRing);

                const cord = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.24 * featS, 10), accentMat);
                cord.position.set(0, -0.20, 0);
                group.add(cord);

                const strip = new THREE.Mesh(createRoundedRectExtrude(0.28 * featS, 0.44 * featS, 0.05, 0.06, 0.03), accentMat);
                strip.position.set(0.06, -0.44, 0.04);
                strip.rotation.z = 0.22;
                group.add(strip);

            // #154 乘风纸风筝 (Diamond Kite - 经典菱形风筝轮廓 + 两侧金穗 + 底部弯曲长尾)
            } else if (sp === 'iconDiamondKite') {
                const kShape = new THREE.Shape();
                kShape.moveTo(0, 0.62);
                kShape.lineTo(0.56, 0.12);
                kShape.lineTo(0, -0.44);
                kShape.lineTo(-0.56, 0.12);
                kShape.closePath();

                const kGeo = new THREE.ExtrudeGeometry(kShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                kGeo.center();
                const kite = new THREE.Mesh(kGeo, mainMat);
                kite.position.y = 0.08;
                group.add(kite);

                // 左右两角黄金护穗与底部S弯风筝尾
                [-0.58, 0.58].forEach((kx) => {
                    const tassel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    tassel.position.set(kx * featS, 0.16, 0);
                    tassel.scale.setScalar(0.11 * featS);
                    group.add(tassel);
                });

                const tailCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, -0.34, 0),
                    new THREE.Vector3(0.18, -0.50, 0),
                    new THREE.Vector3(-0.08, -0.66, 0.04)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 20, 0.055 * featS, 12, false), accentMat));

            // #155 爱心魔药瓶 (Heart Potion - 饱满爱心瓶身 + 顶部收腰瓶口与黄金软木塞)
            } else if (sp === 'iconHeartPotion') {
                const hShape = new THREE.Shape();
                hShape.moveTo(0, -0.58);
                hShape.bezierCurveTo(0.62, -0.18, 0.68, 0.36, 0.28, 0.42);
                hShape.bezierCurveTo(0.12, 0.44, 0, 0.28, 0, 0.20);
                hShape.bezierCurveTo(0, 0.28, -0.12, 0.44, -0.28, 0.42);
                hShape.bezierCurveTo(-0.68, 0.36, -0.62, -0.18, 0, -0.58);

                const hGeo = new THREE.ExtrudeGeometry(hShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                hGeo.center();
                const body = new THREE.Mesh(hGeo, mainMat);
                body.position.y = -0.08;
                group.add(body);

                const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.22, 20), mainMat);
                neck.position.set(0, 0.40, 0);
                group.add(neck);

                const lip = new THREE.Mesh(new THREE.TorusGeometry(0.19 * featS, 0.052 * featS, 14, 28), accentMat);
                lip.rotation.x = Math.PI / 2;
                lip.position.set(0, 0.50, 0);
                group.add(lip);

                const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * featS, 0.12 * featS, 0.18 * featS, 18), accentMat);
                cork.position.set(0, 0.60, 0);
                group.add(cork);

            // #156 黄金入场券 (Golden Ticket - 左右带半圆检票缺口的经典入场券剪影 + 金星徽)
            } else if (sp === 'iconGoldenTicket') {
                const tShape = new THREE.Shape();
                tShape.moveTo(-0.62, -0.40);
                tShape.lineTo(0.62, -0.40);
                tShape.lineTo(0.62, -0.16);
                tShape.absarc(0.62, 0, 0.16, -Math.PI / 2, Math.PI / 2, true);
                tShape.lineTo(0.62, 0.40);
                tShape.lineTo(-0.62, 0.40);
                tShape.lineTo(-0.62, 0.16);
                tShape.absarc(-0.62, 0, 0.16, Math.PI / 2, -Math.PI / 2, true);
                tShape.closePath();

                const tGeo = new THREE.ExtrudeGeometry(tShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                tGeo.center();
                const ticket = new THREE.Mesh(tGeo, mainMat);
                ticket.rotation.z = 0.12;
                group.add(ticket);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.34, 0.22, 0.20);
                star.scale.setScalar(0.78 * featS);
                group.add(star);

            // #157 警长六芒星 (Sheriff Badge - 六角星徽章轮廓 + 六个尖角均镶嵌黄金圆珠)
            } else if (sp === 'iconSheriffStar') {
                const sShape = new THREE.Shape();
                const pts = 6;
                for (let i = 0; i < pts * 2; i++) {
                    const r = i % 2 === 0 ? 0.58 : 0.32;
                    const a = (i / (pts * 2)) * Math.PI * 2 + Math.PI / 2;
                    const x = Math.cos(a) * r;
                    const y = Math.sin(a) * r;
                    if (i === 0) sShape.moveTo(x, y);
                    else sShape.lineTo(x, y);
                }
                sShape.closePath();

                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.11
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                for (let i = 0; i < 6; i++) {
                    const a = (i / 6) * Math.PI * 2 + Math.PI / 2;
                    const ball = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    ball.position.set(Math.cos(a) * 0.62, Math.sin(a) * 0.62, 0);
                    ball.scale.setScalar(0.10 * featS);
                    group.add(ball);
                }

            // #158 维京牛角盔 (Viking Horned Helmet - 圆拱战盔 + 黄金眉箍 + 左右霸气弯月牛角)
            } else if (sp === 'iconVikingHelm') {
                const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                dome.position.set(0, -0.10, 0);
                dome.scale.set(0.54, 0.50, 0.50);
                group.add(dome);

                const rim = new THREE.Mesh(new THREE.TorusGeometry(0.48 * featS, 0.068 * featS, 16, 36, Math.PI), accentMat);
                rim.rotation.x = Math.PI / 2 - 0.15;
                rim.position.set(0, 0.06, 0.08);
                group.add(rim);

                [-1, 1].forEach((dir) => {
                    const hornCurve = new THREE.CatmullRomCurve3([
                        new THREE.Vector3(dir * 0.44, 0.04, 0),
                        new THREE.Vector3(dir * 0.72, 0.22, 0),
                        new THREE.Vector3(dir * 0.58, 0.58, 0.04)
                    ]);
                    const horn = new THREE.Mesh(new THREE.TubeGeometry(hornCurve, 20, 0.115 * featS, 16, false), accentMat);
                    group.add(horn);
                });

            // #159 精灵神射手 (Bow & Arrow - 饱满D型猎弓轮廓 + 斜向射出的黄金羽箭)
            } else if (sp === 'iconBowArrow') {
                const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.50, 0.14, 18, 36, Math.PI * 1.15), mainMat);
                bowArc.rotation.z = -Math.PI * 0.35;
                bowArc.position.set(-0.08, 0.04, 0);
                group.add(bowArc);

                const centerGrip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                centerGrip.position.set(0, -0.04, 0.06);
                centerGrip.scale.set(0.38, 0.34, 0.28);
                group.add(centerGrip);

                const shaft = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.96 * featS, 14), accentMat);
                shaft.rotation.z = -Math.PI / 4;
                shaft.position.set(0.06, 0.06, 0.18);
                group.add(shaft);

                const tip = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.26 * featS, 4), accentMat);
                tip.position.set(0.46, 0.46, 0.18);
                tip.rotation.z = -Math.PI / 4;
                group.add(tip);

            // #160 海神三叉戟 (Poseidon Trident - 威武三叉戟头剪影 + 底部黄金戟座)
            } else if (sp === 'iconTrident') {
                const tShape = new THREE.Shape();
                tShape.moveTo(-0.36, -0.44);
                tShape.lineTo(0.36, -0.44);
                tShape.quadraticCurveTo(0.58, -0.22, 0.56, 0.42);
                tShape.lineTo(0.42, 0.56);
                tShape.lineTo(0.30, 0.12);
                tShape.lineTo(0.14, 0.12);
                tShape.lineTo(0.14, 0.48);
                tShape.lineTo(0, 0.66);
                tShape.lineTo(-0.14, 0.48);
                tShape.lineTo(-0.14, 0.12);
                tShape.lineTo(-0.30, 0.12);
                tShape.lineTo(-0.42, 0.56);
                tShape.lineTo(-0.56, 0.42);
                tShape.quadraticCurveTo(-0.58, -0.22, -0.36, -0.44);

                const tGeo = new THREE.ExtrudeGeometry(tShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                tGeo.center();
                group.add(new THREE.Mesh(tGeo, mainMat));

                const collar = new THREE.Mesh(createRoundedRectExtrude(0.48 * featS, 0.16 * featS, 0.06, 0.28, 0.05), accentMat);
                collar.position.set(0, -0.52, 0);
                group.add(collar);

            // #161 疾风手里剑 (Ninja Shuriken - 四角弧刃飞镖轮廓 + 中心黄金圆环)
            } else if (sp === 'iconShuriken') {
                const shShape = new THREE.Shape();
                const pts = 4;
                for (let i = 0; i < pts * 2; i++) {
                    const r = i % 2 === 0 ? 0.66 : 0.26;
                    const a = (i / (pts * 2)) * Math.PI * 2 + (i % 2 === 0 ? 0.15 : 0);
                    const x = Math.cos(a) * r;
                    const y = Math.sin(a) * r;
                    if (i === 0) shShape.moveTo(x, y);
                    else shShape.lineTo(x, y);
                }
                shShape.closePath();

                const shGeo = new THREE.ExtrudeGeometry(shShape, {
                    depth: 0.22, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                shGeo.center();
                group.add(new THREE.Mesh(shGeo, mainMat));

                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.052 * featS, 14, 32), accentMat);
                ring.position.set(0, 0, 0.16);
                group.add(ring);

            // #162 王牌三叶梅 (Club Trefoil - 扑克梅花♣三圆瓣+三角柄轮廓 + 顶冠)
            } else if (sp === 'iconClubSuit') {
                [[0, 0.30], [-0.32, -0.06], [0.32, -0.06]].forEach(([cx, cy]) => {
                    const lobe = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    lobe.position.set(cx, cy, 0);
                    lobe.scale.set(0.34, 0.34, 0.28);
                    group.add(lobe);
                });

                const core = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                core.position.set(0, -0.04, 0.04);
                core.scale.set(0.38, 0.34, 0.28);
                group.add(core);

                const baseStem = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.36, 4), mainMat);
                baseStem.position.set(0, -0.42, 0);
                baseStem.rotation.y = Math.PI / 4;
                group.add(baseStem);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.38, 0.44, 0.20);
                star.scale.setScalar(0.78 * featS);
                group.add(star);

            // #163 方块T拼图 (Tetris T-Block - 经典俄罗斯方块T字造型 + 顶部高光金砖)
            } else if (sp === 'iconTetrisT') {
                const blockGeo = createRoundedRectExtrude(0.44, 0.44, 0.10, 0.28, 0.08);
                [[-0.38, -0.18], [0, -0.18], [0.38, -0.18]].forEach(([bx, by]) => {
                    const b = new THREE.Mesh(blockGeo, mainMat);
                    b.position.set(bx, by, 0);
                    group.add(b);
                });

                const topBlock = new THREE.Mesh(blockGeo, accentMat);
                topBlock.position.set(0, 0.26, 0);
                topBlock.scale.setScalar(featS);
                group.add(topBlock);

            // #164 街头滑板 (Skateboard - 倾斜翘头滑板板面 + 底部两对黄金滑板轮)
            } else if (sp === 'iconSkateboard') {
                const skGroup = new THREE.Group();
                skGroup.rotation.z = 0.28;

                const deck = new THREE.Mesh(createRoundedRectExtrude(1.24, 0.56, 0.26, 0.22, 0.09), mainMat);
                deck.position.set(0, 0.06, 0);
                skGroup.add(deck);

                [-0.36, 0.36].forEach((wx) => {
                    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * featS, 0.16 * featS, 0.34 * featS, 20), accentMat);
                    wheel.rotation.x = Math.PI / 2;
                    wheel.position.set(wx, -0.28, 0);
                    skGroup.add(wheel);
                });

                group.add(skGroup);

            // #165 复古旱冰鞋 (Roller Skate - 经典高帮溜冰鞋轮廓 + 底部四枚黄金滚轮)
            } else if (sp === 'iconRollerSkate') {
                const bShape = new THREE.Shape();
                bShape.moveTo(-0.48, -0.26);
                bShape.lineTo(0.52, -0.26);
                bShape.quadraticCurveTo(0.62, -0.02, 0.34, 0.08);
                bShape.lineTo(0.08, 0.16);
                bShape.lineTo(0.04, 0.54);
                bShape.lineTo(-0.44, 0.54);
                bShape.closePath();

                const bGeo = new THREE.ExtrudeGeometry(bShape, {
                    depth: 0.28, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                bGeo.center();
                const boot = new THREE.Mesh(bGeo, mainMat);
                boot.position.y = 0.08;
                group.add(boot);

                // 鞋底并排的黄金旱冰轮
                [-0.36, -0.10, 0.18, 0.44].forEach((wx) => {
                    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * featS, 0.13 * featS, 0.28 * featS, 18), accentMat);
                    wheel.rotation.x = Math.PI / 2;
                    wheel.position.set(wx, -0.44, 0);
                    group.add(wheel);
                });

            // #166 翘尖精灵靴 (Elf Boot - 卷曲翘尖短靴轮廓 + 靴口黄金绒毛边 + 靴尖金铃铛)
            } else if (sp === 'iconElfBoot') {
                const eShape = new THREE.Shape();
                eShape.moveTo(-0.48, -0.48);
                eShape.lineTo(0.36, -0.48);
                eShape.quadraticCurveTo(0.68, -0.42, 0.62, 0.06);
                eShape.quadraticCurveTo(0.46, 0.14, 0.38, -0.12);
                eShape.lineTo(0.06, -0.08);
                eShape.lineTo(0.02, 0.38);
                eShape.lineTo(-0.46, 0.38);
                eShape.closePath();

                const eGeo = new THREE.ExtrudeGeometry(eShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                eGeo.center();
                group.add(new THREE.Mesh(eGeo, mainMat));

                // 靴口厚实的黄金翻毛边与翘尖上的金铃铛
                const cuff = new THREE.Mesh(createRoundedRectExtrude(0.62 * featS, 0.22 * featS, 0.08, 0.32, 0.06), accentMat);
                cuff.position.set(-0.22, 0.44, 0);
                group.add(cuff);

                const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                bell.position.set(0.56, 0.14, 0);
                bell.scale.setScalar(0.13 * featS);
                group.add(bell);

            // #167 暖冬连指套 (Cozy Mitten - 圆润手掌 + 左侧外伸大拇指 + 底部黄金罗纹腕口)
            } else if (sp === 'iconMitten') {
                const palm = new THREE.Mesh(createCapsuleGeometry(0.42, 0.42, 28), mainMat);
                palm.position.set(0.06, 0.08, 0);
                group.add(palm);

                // 左侧俏皮翘出的连指手套大拇指
                const thumb = new THREE.Mesh(createCapsuleGeometry(0.17, 0.30, 18), mainMat);
                thumb.position.set(-0.42, 0.02, 0);
                thumb.rotation.z = 0.68;
                group.add(thumb);

                // 底部厚实的黄金针织护腕边
                const cuff = new THREE.Mesh(createRoundedRectExtrude(0.76 * featS, 0.24 * featS, 0.08, 0.38, 0.08), accentMat);
                cuff.position.set(0.06, -0.44, 0);
                group.add(cuff);

            // #168 魔术高礼帽 (Magician Top Hat - 高耸礼帽身 + 宽帽檐 + 帽顶探出的兔耳朵)
            } else if (sp === 'iconTopHat') {
                const hatPts = [
                    new THREE.Vector2(0.01, -0.38),
                    new THREE.Vector2(0.38, -0.38),
                    new THREE.Vector2(0.46, 0.36),
                    new THREE.Vector2(0.01, 0.38)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(hatPts, 32), mainMat));

                const brim = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                brim.position.set(0, -0.38, 0);
                brim.scale.set(0.72, 0.12, 0.64);
                group.add(brim);

                const ribbon = new THREE.Mesh(new THREE.TorusGeometry(0.39 * featS, 0.058 * featS, 14, 36), accentMat);
                ribbon.rotation.x = Math.PI / 2;
                ribbon.position.set(0, -0.26, 0);
                group.add(ribbon);

                // 帽顶惊喜探出的两只黄金魔术兔耳
                [-1, 1].forEach((dir) => {
                    const ear = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.28 * featS, 16), accentMat);
                    ear.position.set(dir * 0.18, 0.54, 0);
                    ear.rotation.z = -dir * 0.24;
                    group.add(ear);
                });

            // #169 璀璨钻戒 (Diamond Ring - 上方饱满切面大钻石 + 下方粗壮黄金指环圈)
            } else if (sp === 'iconDiamondRing') {
                const dShape = new THREE.Shape();
                dShape.moveTo(0, -0.10);
                dShape.lineTo(0.48, 0.30);
                dShape.lineTo(0.28, 0.56);
                dShape.lineTo(-0.28, 0.56);
                dShape.lineTo(-0.48, 0.30);
                dShape.closePath();

                const dGeo = new THREE.ExtrudeGeometry(dShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                dGeo.center();
                const gem = new THREE.Mesh(dGeo, mainMat);
                gem.position.y = 0.24;
                group.add(gem);

                const band = new THREE.Mesh(new THREE.TorusGeometry(0.34 * featS, 0.105 * featS, 18, 36), accentMat);
                band.position.set(0, -0.26, 0);
                group.add(band);

            // #170 荷兰大风车 (Dutch Windmill - 梯形风车塔楼 + 上方X型黄金四叶风车翼)
            } else if (sp === 'iconDutchWindmill') {
                const towerPts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.46, -0.54),
                    new THREE.Vector2(0.32, 0.20),
                    new THREE.Vector2(0.01, 0.26)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(towerPts, 28), mainMat));

                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
                    const blade = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.48 * featS, 0.04, 0.08, 0.03), accentMat);
                    blade.position.set(Math.cos(ang) * 0.32, 0.22 + Math.sin(ang) * 0.32, 0.26);
                    blade.rotation.z = ang - Math.PI / 2;
                    group.add(blade);
                }

            // #171 深海小潜艇 (Submarine - 胖胶囊艇身 + 顶部指挥塔潜望镜 + 尾部黄金螺旋桨)
            } else if (sp === 'iconSubmarine') {
                const hull = new THREE.Mesh(createCapsuleGeometry(0.38, 0.52, 28), mainMat);
                hull.rotation.z = Math.PI / 2;
                hull.position.set(0.04, -0.10, 0);
                group.add(hull);

                const tower = new THREE.Mesh(createCapsuleGeometry(0.18, 0.24, 20), mainMat);
                tower.position.set(0.08, 0.28, 0);
                group.add(tower);

                // 顶部潜望镜与左侧船尾黄金螺旋桨叶
                const scope = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.22 * featS, 12), accentMat);
                scope.position.set(0.12, 0.52, 0);
                group.add(scope);

                [-1, 1].forEach((dir) => {
                    const prop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    prop.position.set(-0.62, -0.10 + dir * 0.16, 0);
                    prop.scale.set(0.08 * featS, 0.16 * featS, 0.08 * featS);
                    group.add(prop);
                });

            // #172 蒸汽火车头 (Steam Locomotive - 机车车头 + 顶部大喇叭烟囱与蒸汽球 + 底部金车轮)
            } else if (sp === 'iconTrainEngine') {
                const body = new THREE.Mesh(createRoundedRectExtrude(0.96, 0.68, 0.20, 0.36, 0.10), mainMat);
                body.position.set(0, -0.08, 0);
                group.add(body);

                const stack = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.36, 20), mainMat);
                stack.rotation.z = Math.PI;
                stack.position.set(0.18, 0.38, 0);
                group.add(stack);

                // 烟囱冒出的黄金蒸汽云团与底部四枚火车轮
                const puff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                puff.position.set(-0.08, 0.58, 0);
                puff.scale.set(0.20 * featS, 0.15 * featS, 0.16 * featS);
                group.add(puff);

                [-0.28, 0.28].forEach((wx) => {
                    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * featS, 0.18 * featS, 0.42 * featS, 20), accentMat);
                    wheel.rotation.x = Math.PI / 2;
                    wheel.position.set(wx, -0.44, 0);
                    group.add(wheel);
                });

            // #173 复古甲壳虫车 (Beetle Car - 经典拱顶小汽车剪影 + 底部两只大黄金车轮 + 车顶行李灯)
                        } else if (sp === 'iconBeetleCar') {
                const cShape = new THREE.Shape();
                cShape.moveTo(-0.64, -0.34);
                cShape.lineTo(0.64, -0.34);
                cShape.quadraticCurveTo(0.70, 0.02, 0.44, 0.06);
                cShape.bezierCurveTo(0.32, 0.48, -0.32, 0.48, -0.44, 0.06);
                cShape.quadraticCurveTo(-0.70, 0.02, -0.64, -0.34);

                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.32, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.10, bevelThickness: 0.12
                });
                cGeo.center();
                const car = new THREE.Mesh(cGeo, mainMat);
                car.position.y = 0.02;
                group.add(car);

                [-0.36, 0.36].forEach((wx) => {
                    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.20 * featS, 0.20 * featS, 0.40 * featS, 22), accentMat);
                    wheel.rotation.x = Math.PI / 2;
                    wheel.position.set(wx, -0.38, 0);
                    group.add(wheel);
                });

                const roofLight = new THREE.Mesh(createCapsuleGeometry(0.08 * featS, 0.24 * featS, 14), accentMat);
                roofLight.rotation.z = Math.PI / 2;
                roofLight.position.set(0, 0.44, 0);
                group.add(roofLight);
} else if (sp === 'iconHelicopter') {
                const cabin = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                cabin.position.set(0.10, -0.06, 0);
                cabin.scale.set(0.52, 0.44, 0.46);
                group.add(cabin);

                const tailBoom = new THREE.Mesh(createCapsuleGeometry(0.12, 0.46, 16), mainMat);
                tailBoom.position.set(-0.42, 0.02, 0);
                tailBoom.rotation.z = 1.25;
                group.add(tailBoom);

                const tailFin = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tailFin.position.set(-0.64, 0.14, 0);
                tailFin.scale.set(0.10 * featS, 0.20 * featS, 0.08 * featS);
                group.add(tailFin);

                // 顶部大螺旋桨与底部起落滑撬
                const rotor = new THREE.Mesh(createRoundedRectExtrude(1.08 * featS, 0.16 * featS, 0.06, 0.06, 0.03), accentMat);
                rotor.rotation.x = Math.PI / 2;
                rotor.rotation.z = 0.28;
                rotor.position.set(0.10, 0.48, 0);
                group.add(rotor);

                const skid = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.72 * featS, 14), accentMat);
                skid.rotation.z = Math.PI / 2;
                skid.position.set(0.10, -0.52, 0.16);
                group.add(skid);

            // #175 青蛙小王子 (Frog Prince - 宽扁青蛙脸 + 头顶左右鼓起两只大圆眼包 + 中央黄金小王冠)
            } else if (sp === 'iconFrogPrince') {
                const face = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                face.position.set(0, -0.14, 0);
                face.scale.set(0.62, 0.42, 0.48);
                group.add(face);

                [-0.30, 0.30].forEach((ex) => {
                    const eyeBump = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    eyeBump.position.set(ex, 0.24, 0.06);
                    eyeBump.scale.set(0.26, 0.26, 0.24);
                    group.add(eyeBump);
                });

                const crown = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.24 * featS, 5), accentMat);
                crown.position.set(0, 0.46, 0.06);
                group.add(crown);

            // #176 珊瑚小海马 (Seahorse - S型海马剪影 + 右侧管状吻部 + 卷尾 + 后背黄金棘鳍)
            } else if (sp === 'iconSeahorse') {
                const sShape = new THREE.Shape();
                sShape.moveTo(0.08, -0.58);
                sShape.bezierCurveTo(-0.36, -0.58, -0.42, -0.14, -0.22, 0.20);
                sShape.bezierCurveTo(-0.18, 0.56, 0.26, 0.64, 0.34, 0.36);
                sShape.lineTo(0.58, 0.30);
                sShape.lineTo(0.56, 0.18);
                sShape.lineTo(0.28, 0.18);
                sShape.bezierCurveTo(0.46, -0.06, 0.38, -0.36, 0.12, -0.38);
                sShape.quadraticCurveTo(0.26, -0.48, 0.08, -0.58);

                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                // 后背三枚黄金扇形背鳍棘
                [0.24, 0.0, -0.24].forEach((fy, idx) => {
                    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.24 * featS, 4), accentMat);
                    fin.position.set(-0.44, fy, 0);
                    fin.rotation.z = Math.PI / 2 + (idx - 1) * 0.2;
                    group.add(fin);
                });

            // #177 松果大尾鼠 (Squirrel - 尖耳松鼠身 + 左侧高高卷起的巨型黄金蓬松松鼠尾)
            } else if (sp === 'iconSquirrel') {
                // 右前方尖耳松鼠身体（承载双竖瞳）
                const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                body.position.set(0.16, -0.12, 0.06);
                body.scale.set(0.44, 0.48, 0.42);
                group.add(body);

                [-0.02, 0.34].forEach((ex) => {
                    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.24, 12), mainMat);
                    ear.position.set(ex, 0.34, 0.06);
                    group.add(ear);
                });

                // 左后方极具辨识度的S型高耸大号黄金松鼠尾巴
                const tailCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.08, -0.34, -0.06),
                    new THREE.Vector3(-0.48, -0.10, -0.06),
                    new THREE.Vector3(-0.46, 0.36, -0.02),
                    new THREE.Vector3(-0.22, 0.52, 0.02)
                ]);
                const bigTail = new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 24, 0.21 * featS, 18, false), accentMat);
                group.add(bigTail);

                const tailTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tailTip.position.set(-0.22, 0.52, 0.02);
                tailTip.scale.setScalar(0.21 * featS);
                group.add(tailTip);

            // #178 天籁小竖琴 (Angel Harp - 优雅弧翼竖琴外框 + 内部三根黄金琴弦)
            } else if (sp === 'iconHarp') {
                const hShape = new THREE.Shape();
                hShape.moveTo(-0.44, -0.54);
                hShape.lineTo(0.38, -0.54);
                hShape.quadraticCurveTo(0.62, 0.06, 0.48, 0.56);
                hShape.quadraticCurveTo(0.12, 0.36, -0.22, 0.48);
                hShape.lineTo(-0.44, 0.48);
                hShape.closePath();

                const hGeo = new THREE.ExtrudeGeometry(hShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.10
                });
                hGeo.center();
                group.add(new THREE.Mesh(hGeo, mainMat));

                // 竖琴正面上方整齐排列的黄金琴弦与星徽
                [-0.18, 0.0, 0.18].forEach((sx) => {
                    const str = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.42 * featS, 10), accentMat);
                    str.position.set(sx, 0.18, 0.18);
                    group.add(str);
                });

            // #179 怀旧磁带 (Retro Cassette - 带梯形底座的经典磁带机身 + 双黄金走带轮圈)
            } else if (sp === 'iconCassette') {
                const body = new THREE.Mesh(createRoundedRectExtrude(1.12, 0.76, 0.16, 0.28, 0.09), mainMat);
                body.position.set(0, 0.02, 0);
                group.add(body);

                const lip = new THREE.Mesh(createRoundedRectExtrude(0.68, 0.22, 0.06, 0.32, 0.06), mainMat);
                lip.position.set(0, -0.34, 0.02);
                group.add(lip);

                [-0.28, 0.28].forEach((rx) => {
                    const reel = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 14, 28), accentMat);
                    reel.position.set(rx, 0.16, 0.20);
                    group.add(reel);
                });

            // #180 奇趣扭蛋机 (Gachapon Machine - 上方圆球舱 + 下方梯形底座 + 黄金扭蛋旋钮)
            } else if (sp === 'iconGachapon') {
                const globe = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                globe.position.set(0, 0.18, 0);
                globe.scale.setScalar(0.46);
                group.add(globe);

                const basePts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.48, -0.54),
                    new THREE.Vector2(0.38, -0.12),
                    new THREE.Vector2(0.01, -0.12)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(basePts, 28), mainMat));

                const topCap = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                topCap.position.set(0, 0.62, 0);
                topCap.scale.set(0.24 * featS, 0.10 * featS, 0.24 * featS);
                group.add(topCap);

                // 正面标志性的黄金十字扭蛋旋钮
                const dial = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                dial.position.set(0.06, -0.34, 0.42);
                dial.scale.set(0.16 * featS, 0.16 * featS, 0.08 * featS);
                group.add(dial);

            // =========================================================================
            // 第九批筛选保留的 4 款精灵构建器 (#167 ~ #170：冰糖葫芦、爆米花、红富士果、招财袋)
            // =========================================================================

            // #167 冰糖葫芦 (Tanghulu)
            } else if (sp === 'iconTanghulu') {
                [
                    [0.36, 0.26],
                    [0.0, 0.36],
                    [-0.36, 0.26]
                ].forEach(([hy, r]) => {
                    const berry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    berry.position.set(0, hy, 0);
                    berry.scale.set(r, r * 0.88, r);
                    group.add(berry);
                });

                const stick = new THREE.Mesh(createCapsuleGeometry(0.052 * featS, 1.32 * featS, 14), accentMat);
                stick.position.set(0, -0.04, -0.02);
                group.add(stick);

                const flag = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.24 * featS, 4), accentMat);
                flag.position.set(0.14, 0.62, 0);
                flag.rotation.z = -Math.PI / 2;
                group.add(flag);

            // #168 影院爆米花 (Popcorn Bucket)
            } else if (sp === 'iconPopcorn') {
                const bucketPts = [
                    new THREE.Vector2(0.01, -0.56),
                    new THREE.Vector2(0.36, -0.54),
                    new THREE.Vector2(0.48, 0.14),
                    new THREE.Vector2(0.01, 0.14)
                ];
                group.add(new THREE.Mesh(new THREE.LatheGeometry(bucketPts, 28), mainMat));

                [
                    [0, 0.42, 0, 0.26],
                    [-0.30, 0.26, 0.08, 0.22],
                    [0.30, 0.26, 0.08, 0.22],
                    [-0.18, 0.34, -0.10, 0.20],
                    [0.18, 0.34, -0.10, 0.20]
                ].forEach(([px, py, pz, r]) => {
                    const kernel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    kernel.position.set(px, py, pz);
                    kernel.scale.setScalar(r * featS);
                    group.add(kernel);
                });

            // #169 红富士果 (Apple)
            } else if (sp === 'iconApple') {
                const aShape = new THREE.Shape();
                aShape.moveTo(0, -0.44);
                aShape.bezierCurveTo(0.24, -0.56, 0.62, -0.28, 0.58, 0.18);
                aShape.bezierCurveTo(0.54, 0.54, 0.16, 0.52, 0, 0.34);
                aShape.bezierCurveTo(-0.16, 0.52, -0.54, 0.54, -0.58, 0.18);
                aShape.bezierCurveTo(-0.62, -0.28, -0.24, -0.56, 0, -0.44);

                const aGeo = new THREE.ExtrudeGeometry(aShape, {
                    depth: 0.30, bevelEnabled: true, bevelSegments: 12, steps: 1, bevelSize: 0.12, bevelThickness: 0.14
                });
                aGeo.center();
                const appleBody = new THREE.Mesh(aGeo, mainMat);
                appleBody.position.y = -0.06;
                group.add(appleBody);

                const stem = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.24 * featS, 14), accentMat);
                stem.position.set(-0.04, 0.48, 0);
                stem.rotation.z = 0.22;
                group.add(stem);

                const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                leaf.position.set(0.22, 0.52, 0);
                leaf.rotation.z = -0.55;
                leaf.scale.set(0.24 * featS, 0.11 * featS, 0.09 * featS);
                group.add(leaf);

            // #170 祈福招财袋 (Lucky Pouch)
            } else if (sp === 'iconLuckyBag') {
                const bag = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                bag.position.set(0, -0.16, 0);
                bag.scale.set(0.58, 0.48, 0.52);
                group.add(bag);

                [-0.24, 0, 0.24].forEach((fx, idx) => {
                    const ruffle = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    ruffle.position.set(fx, 0.44 + (idx === 1 ? 0.06 : 0), 0);
                    ruffle.rotation.z = -fx * 1.1;
                    ruffle.scale.set(0.20, 0.24, 0.18);
                    group.add(ruffle);
                });

                const cord = new THREE.Mesh(new THREE.TorusGeometry(0.30 * featS, 0.065 * featS, 16, 36), accentMat);
                cord.rotation.x = Math.PI / 2;
                cord.position.set(0, 0.24, 0);
                group.add(cord);

                [-1, 1].forEach((dir) => {
                    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 12, 24), accentMat);
                    loop.position.set(dir * 0.34, 0.24, 0.14);
                    group.add(loop);
                });

            // =========================================================================
            // 全新精雕 20 款：【零基础圆球 · 强镂空负空间与异形几何剪影】3D 构建器 (#171 ~ #190)
            // =========================================================================

            // #171 镂空胶卷 (Cinema Film Reel - 上半轮带3个真实镂空圆孔 + 右侧飘逸展开的黄金电影胶片带)
            } else if (sp === 'iconFilmReel') {
                const reelShape = new THREE.Shape();
                reelShape.absarc(0, 0, 0.56, 0, Math.PI * 2, false);

                // 上半轮打3个真实的圆形镂空孔（保留下半轮实心区给双竖瞳）
                [Math.PI * 0.22, Math.PI * 0.50, Math.PI * 0.78].forEach((ang) => {
                    const hole = new THREE.Path();
                    hole.absarc(Math.cos(ang) * 0.31, Math.sin(ang) * 0.31, 0.12, 0, Math.PI * 2, true);
                    reelShape.holes.push(hole);
                });

                const reelGeo = new THREE.ExtrudeGeometry(reelShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                reelGeo.center();
                group.add(new THREE.Mesh(reelGeo, mainMat));

                // 中心黄金轴心环与右侧S型飘出的黄金胶片条
                const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * featS, 0.11 * featS, 0.34, 20), accentMat);
                hub.rotation.x = Math.PI / 2;
                hub.position.set(0, 0.02, 0);
                group.add(hub);

                const stripCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0.42, -0.32, 0),
                    new THREE.Vector3(0.68, -0.10, 0.06),
                    new THREE.Vector3(0.56, 0.28, 0.12),
                    new THREE.Vector3(0.74, 0.48, 0.16)
                ]);
                const strip = new THREE.Mesh(new THREE.TubeGeometry(stripCurve, 24, 0.085 * featS, 14, false), accentMat);
                group.add(strip);

            // #172 凹凸拼图 (Jigsaw Puzzle Piece - 左侧真实内凹缺口 + 顶部与右侧外凸圆扣 + 悬浮金星)
            } else if (sp === 'iconPuzzlePiece') {
                const pShape = new THREE.Shape();
                // 底部边
                pShape.moveTo(-0.44, -0.46);
                pShape.lineTo(0.44, -0.46);
                // 右侧边 + 向外凸出的圆卡扣
                pShape.lineTo(0.44, -0.14);
                pShape.absarc(0.58, 0.0, 0.18, -Math.PI * 0.72, Math.PI * 0.72, false);
                pShape.lineTo(0.44, 0.44);
                // 顶部边 + 向外凸出的圆卡扣
                pShape.lineTo(0.14, 0.44);
                pShape.absarc(0.0, 0.58, 0.18, -Math.PI * 0.22, Math.PI * 1.22, false);
                pShape.lineTo(-0.44, 0.44);
                // 左侧边 + 向内凹陷的拼图圆槽（形成鲜明凹凸对比剪影）
                pShape.lineTo(-0.44, 0.15);
                pShape.absarc(-0.30, 0.0, 0.17, Math.PI * 0.72, -Math.PI * 0.72, true);
                pShape.closePath();

                const pGeo = new THREE.ExtrudeGeometry(pShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                pGeo.center();
                group.add(new THREE.Mesh(pGeo, mainMat));

                const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                spark.position.set(-0.46, 0.48, 0.20);
                spark.scale.setScalar(0.85 * featS);
                group.add(spark);

            // #173 双环锁链 (Interlocking Chain Links - 中空跑道环 + 顶部斜向咬合的黄金副锁环)
            } else if (sp === 'iconChainLink') {
                const linkShape = new THREE.Shape();
                linkShape.moveTo(-0.38, -0.56);
                linkShape.lineTo(0.38, -0.56);
                linkShape.absarc(0.38, -0.06, 0.50, -Math.PI / 2, Math.PI / 2, false);
                linkShape.lineTo(-0.38, 0.44);
                linkShape.absarc(-0.38, -0.06, 0.50, Math.PI / 2, -Math.PI / 2, false);

                // 上半部跑道形真实镂空孔
                const hole = new THREE.Path();
                hole.absarc(0, 0.08, 0.20, 0, Math.PI * 2, true);
                linkShape.holes.push(hole);

                const linkGeo = new THREE.ExtrudeGeometry(linkShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                linkGeo.center();
                group.add(new THREE.Mesh(linkGeo, mainMat));

                // 穿过镂空孔、向上斜伸咬合的黄金副锁链环
                const topLink = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.095 * featS, 18, 36), accentMat);
                topLink.position.set(0.16, 0.44, 0.04);
                topLink.rotation.y = Math.PI * 0.35;
                topLink.rotation.x = 0.32;
                group.add(topLink);

            // #174 复古听筒 (Vintage Telephone Handset - 经典拱桥悬空听筒剪影 + 底部黄金螺旋电话线)
            } else if (sp === 'iconRetroPhone') {
                const hShape = new THREE.Shape();
                // 左下听筒碗 -> 底部悬空内拱 -> 右下话筒碗 -> 顶部宽拱背
                hShape.moveTo(-0.62, -0.36);
                hShape.lineTo(-0.24, -0.36);
                hShape.lineTo(-0.20, -0.02);
                hShape.quadraticCurveTo(0, 0.12, 0.20, -0.02);
                hShape.lineTo(0.24, -0.36);
                hShape.lineTo(0.62, -0.36);
                hShape.quadraticCurveTo(0.72, 0.12, 0.46, 0.38);
                hShape.quadraticCurveTo(0, 0.56, -0.46, 0.38);
                hShape.quadraticCurveTo(-0.72, 0.12, -0.62, -0.36);

                const hGeo = new THREE.ExtrudeGeometry(hShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.11
                });
                hGeo.center();
                const handset = new THREE.Mesh(hGeo, mainMat);
                handset.position.y = 0.08;
                group.add(handset);

                // 底部悬垂的三环黄金螺旋电话线
                [-0.14, 0.0, 0.14].forEach((cx, idx) => {
                    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.11 * featS, 0.042 * featS, 12, 24), accentMat);
                    coil.position.set(cx, -0.44 - (idx === 1 ? 0.06 : 0), 0);
                    coil.rotation.y = 0.5;
                    group.add(coil);
                });

            // #175 彭罗斯三角 (Impossible Triangle Frame - 中心带三角形真实镂空孔 + 悬浮黄金八面体核)
            } else if (sp === 'iconPenroseTri') {
                const triShape = new THREE.Shape();
                triShape.moveTo(0, 0.66);
                triShape.lineTo(0.64, -0.48);
                triShape.lineTo(-0.64, -0.48);
                triShape.closePath();

                // 中上部挖出真实的三角形通透镂空孔（底边留宽承载双竖瞳）
                const innerHole = new THREE.Path();
                innerHole.moveTo(0, 0.28);
                innerHole.lineTo(-0.24, -0.14);
                innerHole.lineTo(0.24, -0.14);
                innerHole.closePath();
                triShape.holes.push(innerHole);

                const triGeo = new THREE.ExtrudeGeometry(triShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                triGeo.center();
                group.add(new THREE.Mesh(triGeo, mainMat));

                // 悬浮在三角形镂空孔正中央的黄金八面体晶核
                const coreGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.14 * featS, 0), accentMat);
                coreGem.position.set(0, 0.08, 0.04);
                group.add(coreGem);

            // #176 巧手剪刀 (Craft Scissors - 底部双圆环真实镂空手柄 + 上方V型张开的黄金双刀刃)
            } else if (sp === 'iconScissors') {
                // 上方张开的V字黄金双刀刃（位于后层与顶层，形成鲜明剪刀剪影）
                [-1, 1].forEach((dir) => {
                    const bladeShape = new THREE.Shape();
                    bladeShape.moveTo(0, -0.05);
                    bladeShape.lineTo(dir * 0.42, 0.62);
                    bladeShape.lineTo(dir * 0.14, 0.58);
                    bladeShape.lineTo(0, 0.12);
                    bladeShape.closePath();

                    const bGeo = new THREE.ExtrudeGeometry(bladeShape, {
                        depth: 0.16, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.06, bevelThickness: 0.07
                    });
                    const blade = new THREE.Mesh(bGeo, accentMat);
                    blade.position.set(0, 0.02, -0.08);
                    blade.scale.setScalar(featS);
                    group.add(blade);
                });

                // 下方带左右两个真实镂空手指圆孔的剪刀握柄主体
                const handleShape = new THREE.Shape();
                handleShape.moveTo(0, 0.24);
                handleShape.quadraticCurveTo(0.68, 0.18, 0.64, -0.34);
                handleShape.quadraticCurveTo(0.58, -0.60, 0.22, -0.52);
                handleShape.quadraticCurveTo(0, -0.44, -0.22, -0.52);
                handleShape.quadraticCurveTo(-0.58, -0.60, -0.64, -0.34);
                handleShape.quadraticCurveTo(-0.68, 0.18, 0, 0.24);

                [-0.38, 0.38].forEach((hx) => {
                    const fingerHole = new THREE.Path();
                    fingerHole.absarc(hx, -0.26, 0.14, 0, Math.PI * 2, true);
                    handleShape.holes.push(fingerHole);
                });

                const hGeo = new THREE.ExtrudeGeometry(handleShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                hGeo.center();
                const handleMesh = new THREE.Mesh(hGeo, mainMat);
                handleMesh.position.y = -0.14;
                group.add(handleMesh);

            // #177 开口扳手 (Open-Jaw Spanner Wrench - 顶部大C型开口钳嘴 + 咬合黄金六角螺母)
            } else if (sp === 'iconWrench') {
                const wShape = new THREE.Shape();
                // 下方宽握柄（承载双竖瞳）+ 上方U型开口大扳手钳头
                wShape.moveTo(-0.36, -0.56);
                wShape.lineTo(0.36, -0.56);
                wShape.lineTo(0.32, -0.06);
                wShape.quadraticCurveTo(0.62, 0.10, 0.48, 0.56);
                wShape.lineTo(0.24, 0.52);
                wShape.lineTo(0.24, 0.18);
                wShape.lineTo(-0.24, 0.18);
                wShape.lineTo(-0.24, 0.52);
                wShape.lineTo(-0.48, 0.56);
                wShape.quadraticCurveTo(-0.62, 0.10, -0.32, -0.06);
                wShape.closePath();

                const wGeo = new THREE.ExtrudeGeometry(wShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                wGeo.center();
                group.add(new THREE.Mesh(wGeo, mainMat));

                // 扳手钳口正中夹持的黄金六角螺母
                const hexNut = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * featS, 0.22 * featS, 0.28, 6), accentMat);
                hexNut.rotation.x = Math.PI / 2;
                hexNut.position.set(0, 0.38, 0);
                group.add(hexNut);

            // #178 瑞士军刀 (Swiss Army Knife - 斜置圆角军刀柄 + 顶端扇形弹出的三把黄金工具刃)
            } else if (sp === 'iconPocketKnife') {
                // 上方扇形展开的三件黄金工具刀刃（左锯齿、中主刀、右开瓶钩）
                [-0.55, 0, 0.55].forEach((ang, idx) => {
                    const toolGeo = idx === 1
                        ? new THREE.ConeGeometry(0.18 * featS, 0.58 * featS, 4)
                        : createRoundedRectExtrude(0.18 * featS, 0.48 * featS, 0.06, 0.12, 0.04);
                    const tool = new THREE.Mesh(toolGeo, accentMat);
                    tool.position.set(Math.sin(ang) * 0.38, 0.34 + (idx === 1 ? 0.10 : 0), -0.06);
                    tool.rotation.z = -ang;
                    group.add(tool);
                });

                // 下方微倾的跑道形瑞士军刀外壳与左下挂环
                const caseMesh = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.56, 0.24, 0.28, 0.10), mainMat);
                caseMesh.position.set(0, -0.14, 0);
                caseMesh.rotation.z = 0.12;
                group.add(caseMesh);

                const keyRing = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.045 * featS, 12, 24), accentMat);
                keyRing.position.set(-0.58, -0.22, 0);
                group.add(keyRing);

            // #179 祈福鸟居 (Torii Gate - 飞翘反宇横梁 + 下方真实长方形门洞镂空 + 黄金牌匾)
            } else if (sp === 'iconToriiGate') {
                const tShape = new THREE.Shape();
                // 底部两根立柱与地基连梁 + 顶部飞翘大笠木横梁
                tShape.moveTo(-0.48, -0.56);
                tShape.lineTo(0.48, -0.56);
                tShape.lineTo(0.48, 0.10);
                tShape.lineTo(0.68, 0.22);
                tShape.quadraticCurveTo(0.74, 0.48, 0.62, 0.56);
                tShape.quadraticCurveTo(0, 0.42, -0.62, 0.56);
                tShape.quadraticCurveTo(-0.74, 0.48, -0.68, 0.22);
                tShape.lineTo(-0.48, 0.10);
                tShape.closePath();

                // 下方真实的门洞镂空（保留上方宽横梁承载双竖瞳）
                const gateHole = new THREE.Path();
                gateHole.moveTo(-0.22, -0.44);
                gateHole.lineTo(-0.22, -0.04);
                gateHole.lineTo(0.22, -0.04);
                gateHole.lineTo(0.22, -0.44);
                gateHole.closePath();
                tShape.holes.push(gateHole);

                const tGeo = new THREE.ExtrudeGeometry(tShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                tGeo.center();
                group.add(new THREE.Mesh(tGeo, mainMat));

                // 顶部正中黄金神额牌匾与柱脚金箍
                const plaque = new THREE.Mesh(createRoundedRectExtrude(0.26 * featS, 0.18 * featS, 0.04, 0.12, 0.03), accentMat);
                plaque.position.set(0, 0.48, 0.16);
                group.add(plaque);

            // #180 幻境拱门 (Monument Valley Arch - 阶梯尖塔外轮廓 + 下方拱门镂空 + 门内悬浮金星)
            } else if (sp === 'iconMonumentArch') {
                const aShape = new THREE.Shape();
                aShape.moveTo(-0.54, -0.56);
                aShape.lineTo(0.54, -0.56);
                aShape.lineTo(0.54, 0.18);
                aShape.lineTo(0.36, 0.18);
                aShape.lineTo(0.36, 0.42);
                aShape.lineTo(0, 0.64);
                aShape.lineTo(-0.36, 0.42);
                aShape.lineTo(-0.36, 0.18);
                aShape.lineTo(-0.54, 0.18);
                aShape.closePath();

                // 下方真实的圆拱形门洞镂空
                const archHole = new THREE.Path();
                archHole.moveTo(-0.20, -0.46);
                archHole.lineTo(-0.20, -0.18);
                archHole.absarc(0, -0.18, 0.20, Math.PI, 0, true);
                archHole.lineTo(0.20, -0.46);
                archHole.closePath();
                aShape.holes.push(archHole);

                const aGeo = new THREE.ExtrudeGeometry(aShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                aGeo.center();
                group.add(new THREE.Mesh(aGeo, mainMat));

                // 拱门镂空内部悬浮的黄金四角星徽
                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(0, -0.26, 0.06);
                star.scale.setScalar(0.82 * featS);
                group.add(star);

            // #181 基因双旋 (DNA Double Helix - 8字交织三维螺旋双链 + 上下黄金碱基横桥)
            } else if (sp === 'iconHelixDNA') {
                [-1, 1].forEach((dir) => {
                    const pts = [];
                    for (let i = 0; i <= 32; i++) {
                        const t = (i / 32) * 2 - 1;
                        const y = t * 0.58;
                        const x = dir * Math.sin(t * Math.PI * 1.15) * 0.42;
                        const z = dir * Math.cos(t * Math.PI * 1.15) * 0.14;
                        pts.push(new THREE.Vector3(x, y, z));
                    }
                    const strand = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 36, 0.14, 16, false), mainMat);
                    group.add(strand);
                });

                // 中央交叉节点实心核（稳固承载双竖瞳）
                const centerNode = new THREE.Mesh(createRoundedRectExtrude(0.56, 0.36, 0.16, 0.26, 0.08), mainMat);
                group.add(centerNode);

                // 上下镂空环内横跨的黄金碱基配对横杆与端球
                [-0.42, 0.42].forEach((ry) => {
                    const rung = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.64 * featS, 14), accentMat);
                    rung.rotation.z = Math.PI / 2;
                    rung.position.set(0, ry, 0);
                    group.add(rung);
                });

            // #182 摇滚电琴 (Electric Guitar - 不对称双尖角摇滚琴身 + 斜伸黄金琴颈与琴头)
            } else if (sp === 'iconElectricGuitar') {
                const gShape = new THREE.Shape();
                // 经典摇滚电吉他不对称双尖角（V角+Strat护角）琴箱轮廓
                gShape.moveTo(0, -0.56);
                gShape.bezierCurveTo(0.56, -0.56, 0.64, -0.12, 0.36, 0.08);
                gShape.lineTo(0.54, 0.42);
                gShape.lineTo(0.18, 0.22);
                gShape.lineTo(-0.18, 0.26);
                gShape.lineTo(-0.56, 0.52);
                gShape.lineTo(-0.38, 0.06);
                gShape.bezierCurveTo(-0.64, -0.14, -0.56, -0.56, 0, -0.56);

                const gGeo = new THREE.ExtrudeGeometry(gShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                gGeo.center();
                const body = new THREE.Mesh(gGeo, mainMat);
                body.position.y = -0.06;
                group.add(body);

                // 顶部斜伸的黄金吉他琴颈与闪电型琴头
                const neck = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.56 * featS, 0.04, 0.16, 0.04), accentMat);
                neck.position.set(0.06, 0.42, -0.02);
                neck.rotation.z = -0.15;
                group.add(neck);

                const headstock = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.32 * featS, 4), accentMat);
                headstock.position.set(0.14, 0.68, 0);
                headstock.rotation.z = -0.65;
                group.add(headstock);

            // #183 折面冰山 (Faceted Iceberg - 棱角分明的多边形三峰冰川轮廓 + 黄金极光星晶)
            } else if (sp === 'iconIceberg') {
                const iShape = new THREE.Shape();
                iShape.moveTo(-0.54, -0.48);
                iShape.lineTo(0.08, -0.58);
                iShape.lineTo(0.58, -0.42);
                iShape.lineTo(0.64, 0.08);
                iShape.lineTo(0.38, 0.44);
                iShape.lineTo(0.16, 0.22);
                iShape.lineTo(-0.08, 0.64);
                iShape.lineTo(-0.34, 0.26);
                iShape.lineTo(-0.52, 0.38);
                iShape.lineTo(-0.64, -0.06);
                iShape.closePath();

                const iGeo = new THREE.ExtrudeGeometry(iShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 6, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                iGeo.center();
                group.add(new THREE.Mesh(iGeo, mainMat));

                // 右上与左上镶嵌的黄金极光棱晶与星徽
                const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.15 * featS, 0), accentMat);
                crystal.position.set(0.42, 0.46, 0.14);
                group.add(crystal);

                const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                star.position.set(-0.46, 0.48, 0.18);
                star.scale.setScalar(0.78 * featS);
                group.add(star);

            // #184 远航帆船 (Galleon Ship - 高艉楼翘首船体 + 鼓风宽大横帆 + 顶部黄金三角旗)
            } else if (sp === 'iconPirateShip') {
                // 下方两端高翘的复古帆船船体（承载双竖瞳）
                const hullShape = new THREE.Shape();
                hullShape.moveTo(-0.44, -0.56);
                hullShape.lineTo(0.44, -0.56);
                hullShape.lineTo(0.66, -0.04);
                hullShape.lineTo(0.42, 0.02);
                hullShape.quadraticCurveTo(0, -0.14, -0.42, 0.06);
                hullShape.lineTo(-0.66, 0.02);
                hullShape.closePath();

                const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                hullGeo.center();
                const hull = new THREE.Mesh(hullGeo, mainMat);
                hull.position.y = -0.28;
                group.add(hull);

                // 上方鼓满海风的宽幅弧面主横帆与黄金桅杆顶旗
                const sailShape = new THREE.Shape();
                sailShape.moveTo(-0.46, -0.02);
                sailShape.quadraticCurveTo(0, -0.08, 0.46, -0.02);
                sailShape.quadraticCurveTo(0.56, 0.24, 0.38, 0.46);
                sailShape.quadraticCurveTo(0, 0.42, -0.38, 0.46);
                sailShape.quadraticCurveTo(-0.56, 0.24, -0.46, -0.02);

                const sailGeo = new THREE.ExtrudeGeometry(sailShape, {
                    depth: 0.18, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.06, bevelThickness: 0.07
                });
                const sail = new THREE.Mesh(sailGeo, mainMat);
                sail.position.set(0, 0.02, -0.08);
                group.add(sail);

                const mast = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.86 * featS, 14), accentMat);
                mast.position.set(0, 0.18, -0.02);
                group.add(mast);

                const pennant = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.32 * featS, 4), accentMat);
                pennant.position.set(0.18, 0.62, 0);
                pennant.rotation.z = -Math.PI / 2;
                group.add(pennant);

            // #185 旋转木马亭 (Carousel Canopy - 波浪檐口马戏团顶棚 + 双镂空窗与黄金螺旋中柱)
            } else if (sp === 'iconCarousel') {
                const cShape = new THREE.Shape();
                // 底部圆台 + 两侧立柱 + 上方宽阔的马戏团尖顶帐篷（中间挖出两个真实的观景镂空窗）
                cShape.moveTo(-0.54, -0.54);
                cShape.lineTo(0.54, -0.54);
                cShape.lineTo(0.54, -0.32);
                cShape.lineTo(0.42, -0.32);
                cShape.lineTo(0.42, 0.02);
                cShape.lineTo(0.64, 0.06);
                cShape.lineTo(0, 0.56);
                cShape.lineTo(-0.64, 0.06);
                cShape.lineTo(-0.42, 0.02);
                cShape.lineTo(-0.42, -0.32);
                cShape.lineTo(-0.54, -0.32);
                cShape.closePath();

                [-0.20, 0.20].forEach((wx) => {
                    const win = new THREE.Path();
                    win.moveTo(wx - 0.11, -0.30);
                    win.lineTo(wx - 0.11, -0.04);
                    win.lineTo(wx + 0.11, -0.04);
                    win.lineTo(wx + 0.11, -0.30);
                    win.closePath();
                    cShape.holes.push(win);
                });

                const cGeo = new THREE.ExtrudeGeometry(cShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                cGeo.center();
                group.add(new THREE.Mesh(cGeo, mainMat));

                // 中央黄金旋转中柱与塔顶小金旗
                const centerPole = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.92 * featS, 14), accentMat);
                centerPole.position.set(0, 0.12, 0.04);
                group.add(centerPole);

                const topStar = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                topStar.position.set(0, 0.64, 0.06);
                topStar.scale.setScalar(0.78 * featS);
                group.add(topStar);

            // #186 炼金天平 (Balance Scale - T型展翼天平立柱 + 左右两端悬空垂挂黄金月牙秤盘)
            } else if (sp === 'iconBalanceScale') {
                const sShape = new THREE.Shape();
                // 宽底座与中枢盾（承载双竖瞳）+ 顶部向两侧平伸的展翼天平横梁
                sShape.moveTo(-0.44, -0.54);
                sShape.lineTo(0.44, -0.54);
                sShape.lineTo(0.32, -0.04);
                sShape.lineTo(0.64, 0.24);
                sShape.lineTo(0.64, 0.42);
                sShape.lineTo(0.18, 0.36);
                sShape.lineTo(0, 0.60);
                sShape.lineTo(-0.18, 0.36);
                sShape.lineTo(-0.64, 0.42);
                sShape.lineTo(-0.64, 0.24);
                sShape.lineTo(-0.32, -0.04);
                sShape.closePath();

                const sGeo = new THREE.ExtrudeGeometry(sShape, {
                    depth: 0.24, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.08, bevelThickness: 0.10
                });
                sGeo.center();
                group.add(new THREE.Mesh(sGeo, mainMat));

                // 左右横梁末端悬空垂下的黄金吊链与月牙秤盘
                [-0.56, 0.56].forEach((px) => {
                    const chain = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.32 * featS, 10), accentMat);
                    chain.position.set(px * featS, 0.06, 0);
                    group.add(chain);

                    const pan = new THREE.Mesh(new THREE.TorusGeometry(0.16 * featS, 0.055 * featS, 14, 24, Math.PI), accentMat);
                    pan.rotation.z = Math.PI;
                    pan.position.set(px * featS, -0.10, 0);
                    group.add(pan);
                });

            // #187 错位方块Z (Z-Tetromino - 经典俄罗斯方块Z型阶梯折角剪影 + 黄金高光方块)
            } else if (sp === 'archPisaTower') {
                // 世界著名倾斜奇迹：多层大理石回廊圆柱体，天然优雅向右侧倾斜 10°
                const towerGroup = new THREE.Group();
                towerGroup.rotation.z = -0.17; // 倾斜 10 度

                // 1. 底层厚重基座柱廊
                const baseTier = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.50, 0.24, 32), mainMat);
                baseTier.position.y = -0.46;
                towerGroup.add(baseTier);

                // 底座下沿圆环装饰带
                const baseRim = new THREE.Mesh(new THREE.TorusGeometry(0.50, 0.045, 12, 36), accentMat);
                baseRim.position.y = -0.56;
                baseRim.rotation.x = Math.PI / 2;
                towerGroup.add(baseRim);

                // 2. 中间 4 层经典大理石回廊与拱券环
                const tierHeights = [-0.22, 0.02, 0.26, 0.50];
                tierHeights.forEach((ty, idx) => {
                    // 圆柱塔芯
                    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.40, 0.22, 28), mainMat);
                    core.position.y = ty;
                    towerGroup.add(core);

                    // 每一层的外挑悬空回廊平盘 (accentMat 黄金/大理石饰带)
                    const floorRim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.038, 12, 36), accentMat);
                    floorRim.position.y = ty - 0.10;
                    floorRim.rotation.x = Math.PI / 2;
                    towerGroup.add(floorRim);

                    // 环绕回廊的圆柱立柱（每层 8 根）
                    for (let c = 0; c < 8; c++) {
                        const ang = (c / 8) * Math.PI * 2;
                        const col = new THREE.Mesh(createCapsuleGeometry(0.018 * featS, 0.18 * featS, 6), accentMat);
                        col.position.set(Math.cos(ang) * 0.42, ty, Math.sin(ang) * 0.42);
                        towerGroup.add(col);
                    }
                });

                // 3. 顶端小钟楼 (Bell Chamber)
                const bellTier = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.18, 24), mainMat);
                bellTier.position.y = 0.70;
                towerGroup.add(bellTier);

                // 钟楼顶端黄金拱顶与风向标
                const dome = new THREE.Mesh(new THREE.ConeGeometry(0.24 * featS, 0.18 * featS, 16), accentMat);
                dome.position.y = 0.84;
                towerGroup.add(dome);

                group.add(towerGroup);

            } else if (sp === 'iconGenieLamp') {
                const lShape = new THREE.Shape();
                // 底部喇叭高脚座 -> 右侧饱满壶腹 -> 顶部穹盖 -> 左侧修长上翘的神灯壶嘴
                lShape.moveTo(-0.28, -0.54);
                lShape.lineTo(0.32, -0.54);
                lShape.lineTo(0.20, -0.34);
                lShape.quadraticCurveTo(0.58, -0.22, 0.52, 0.18);
                lShape.quadraticCurveTo(0.24, 0.42, -0.06, 0.36);
                lShape.quadraticCurveTo(-0.42, 0.16, -0.68, 0.38);
                lShape.lineTo(-0.62, 0.14);
                lShape.quadraticCurveTo(-0.38, -0.18, -0.14, -0.34);
                lShape.closePath();

                const lGeo = new THREE.ExtrudeGeometry(lShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 10, steps: 1, bevelSize: 0.09, bevelThickness: 0.11
                });
                lGeo.center();
                group.add(new THREE.Mesh(lGeo, mainMat));

                // 右侧镂空C型灯把与左侧壶嘴升腾的S型黄金神灯烟雾
                const handle = new THREE.Mesh(new THREE.TorusGeometry(0.18 * featS, 0.058 * featS, 14, 28), accentMat);
                handle.position.set(0.52, 0.04, 0);
                group.add(handle);

                const smokeCurve = new THREE.CatmullRomCurve3([
                    new THREE.Vector3(-0.62, 0.38, 0),
                    new THREE.Vector3(-0.48, 0.56, 0.04),
                    new THREE.Vector3(-0.24, 0.64, 0.08)
                ]);
                group.add(new THREE.Mesh(new THREE.TubeGeometry(smokeCurve, 20, 0.068 * featS, 14, false), accentMat));

            // #189 像素侵略者 (Space Invader - 阶梯像素外星飞船剪影 + 两侧下垂像素机械钳 + 黄金触角)
            } else if (sp === 'iconPixelInvader') {
                const pShape = new THREE.Shape();
                // 经典街机像素太空侵略者阶梯外轮廓（带腋下镂空负空间）
                pShape.moveTo(-0.64, -0.42);
                pShape.lineTo(-0.46, -0.42);
                pShape.lineTo(-0.46, -0.12);
                pShape.lineTo(-0.32, -0.12);
                pShape.lineTo(-0.32, -0.46);
                pShape.lineTo(0.32, -0.46);
                pShape.lineTo(0.32, -0.12);
                pShape.lineTo(0.46, -0.12);
                pShape.lineTo(0.46, -0.42);
                pShape.lineTo(0.64, -0.42);
                pShape.lineTo(0.64, 0.16);
                pShape.lineTo(0.44, 0.16);
                pShape.lineTo(0.44, 0.42);
                pShape.lineTo(-0.44, 0.42);
                pShape.lineTo(-0.44, 0.16);
                pShape.lineTo(-0.64, 0.16);
                pShape.closePath();

                const pGeo = new THREE.ExtrudeGeometry(pShape, {
                    depth: 0.26, bevelEnabled: true, bevelSegments: 8, steps: 1, bevelSize: 0.07, bevelThickness: 0.09
                });
                pGeo.center();
                group.add(new THREE.Mesh(pGeo, mainMat));

                // 顶部左右两枚阶梯像素黄金触角块
                [-0.32, 0.32].forEach((ax) => {
                    const ant = new THREE.Mesh(createRoundedRectExtrude(0.20 * featS, 0.20 * featS, 0.04, 0.26, 0.05), accentMat);
                    ant.position.set(ax, 0.54, 0);
                    group.add(ant);
                });

            // #190 回形别针 (Paperclip Loop - 连续弯折回环金属管 + 怀中夹着的黄金折角便签)
            } else if (sp === 'iconPaperclip') {
                // 中央被回形针夹住的饱满便签卡主体（承载双竖瞳）
                const card = new THREE.Mesh(createRoundedRectExtrude(0.72, 0.88, 0.16, 0.24, 0.08), mainMat);
                card.position.set(0, -0.06, 0);
                group.add(card);

                // 环绕卡片外围、顶端探出双圆弧的粗壮3D回形针弯曲管道
                const clipPts = [
                    new THREE.Vector3(-0.22, -0.18, 0.18),
                    new THREE.Vector3(-0.22, 0.56, 0.14),
                    new THREE.Vector3(0.08, 0.64, 0.10),
                    new THREE.Vector3(0.38, 0.54, 0.04),
                    new THREE.Vector3(0.46, -0.44, 0.0),
                    new THREE.Vector3(0.0, -0.58, 0.0),
                    new THREE.Vector3(-0.46, -0.44, 0.0),
                    new THREE.Vector3(-0.46, 0.28, 0.06)
                ];
                const clipTube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(clipPts), 48, 0.085 * featS, 16, false), accentMat);
                group.add(clipTube);

            // =========================================================================
            // 精选地标 · 2款保留世界地标 + 20款新创意图鉴
            // =========================================================================

            // #175 罗马斗兽场 (Colosseum)
            } else if (sp === 'archColosseum') {
                // 经典椭圆多层石柱环形斗兽场遗迹
                const ringOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.68, 0.52, 32, 1, true), mainMat);
                ringOuter.scale.set(1.15, 1.0, 0.90);
                ringOuter.position.y = -0.06;
                group.add(ringOuter);

                // 内部竞技台基座
                const arena = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.50, 0.24, 28), accentMat);
                arena.scale.set(1.15, 1.0, 0.90);
                arena.position.y = -0.22;
                group.add(arena);

                // 三层拱券柱廊饰带（三道金色圆环）
                [-0.20, 0.0, 0.16].forEach((hy) => {
                    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.67, 0.024 * featS, 8, 36), accentMat);
                    rim.scale.set(1.15, 0.90, 1.0);
                    rim.rotation.x = Math.PI / 2;
                    rim.position.y = hy;
                    group.add(rim);
                });

                // 标志性历史斜破口阶梯残垣剪影（右上倾斜立柱）
                const wallCrest = new THREE.Mesh(createRoundedRectExtrude(0.38 * featS, 0.18 * featS, 0.06, 0.10, 0.03), accentMat);
                wallCrest.position.set(-0.38, 0.26, 0);
                group.add(wallCrest);

            // #184 富士神社鸟居 (Torii Gate)
            } else if (sp === 'archToriiGate') {
                // 两根粗壮圆润的朱红主立柱
                [-0.40, 0.40].forEach((colX) => {
                    const pillar = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.98 * featS, 14), mainMat);
                    pillar.position.set(colX, -0.06, 0);
                    group.add(pillar);

                    // 柱脚黑色防腐石臼座
                    const shoe = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * featS, 0.12 * featS, 0.14 * featS, 18), accentMat);
                    shoe.position.set(colX, -0.52, 0);
                    group.add(shoe);
                });

                // 上层反翘大笠木与木梁（经典两端优雅向上起翘）
                const kasagi = new THREE.Mesh(createRoundedRectExtrude(1.18 * featS, 0.14 * featS, 0.08, 0.14, 0.04), mainMat);
                kasagi.position.set(0, 0.48, 0);
                group.add(kasagi);

                // 下层贯梁（水平贯通双柱）
                const nuki = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 1.02 * featS, 10), accentMat);
                nuki.rotation.z = Math.PI / 2;
                nuki.position.set(0, 0.28, 0);
                group.add(nuki);

                // 中央悬挂的神额金色牌匾
                const plaque = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.22 * featS, 0.04, 0.08, 0.02), accentMat);
                plaque.position.set(0, 0.38, 0.08);
                group.add(plaque);

            // =========================================================================
            // 新创意图鉴 · 20款多元主题精灵 (#175 ~ #194)
            // =========================================================================

            // #175 拉面碗 Ramen Bowl
            } else if (sp === 'foodRamenBowlEx') {
                // 厚壁陶碗碗身
                const bowlOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.38, 0.44, 32), mainMat);
                bowlOuter.position.y = -0.26;
                group.add(bowlOuter);
                // 碗内金色汤汁液面
                const soupSurf = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.04, 32), accentMat);
                soupSurf.position.y = -0.04;
                group.add(soupSurf);
                // 漂浮的螺旋卷面
                const noodlePts = [];
                for (let i = 0; i < 48; i++) {
                    const t = i / 47;
                    const ang = t * Math.PI * 4;
                    const r = 0.22 + t * 0.08;
                    noodlePts.push(new THREE.Vector3(Math.cos(ang) * r, 0.04 + t * 0.08, Math.sin(ang) * r));
                }
                const noodleMesh = new THREE.Mesh(
                    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(noodlePts), 48, 0.038 * featS, 8, false),
                    accentMat);
                group.add(noodleMesh);
                // 半切溏心蛋
                const eggWhite = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                eggWhite.position.set(0.24, 0.10, 0.10);
                eggWhite.scale.set(0.18 * featS, 0.14 * featS, 0.14 * featS);
                group.add(eggWhite);
                const yolk = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                yolk.position.set(0.24, 0.14, 0.14);
                yolk.scale.setScalar(0.09 * featS);
                group.add(yolk);

            // #176 土星 Saturn
            } else if (sp === 'spaceSaturn') {
                // 金色气态球体
                const planet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                planet.scale.setScalar(0.42 * featS);
                group.add(planet);
                // 多道冰晶光环（椭圆圆环，倾斜）
                [[0.58, 0.040], [0.72, 0.034], [0.86, 0.026]].forEach(([r, t]) => {
                    const ring = new THREE.Mesh(new THREE.TorusGeometry(r * featS, t * featS, 6, 64), accentMat);
                    ring.rotation.x = Math.PI / 2 - 0.26;
                    ring.rotation.z = 0.18;
                    group.add(ring);
                });

            // #177 棋后 Chess Queen
            } else if (sp === 'gameChessQueen') {
                // 宽底座
                const qBase = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.44, 0.10, 24), mainMat);
                qBase.position.y = -0.52;
                group.add(qBase);
                // 下段腰座
                const qWaist = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 0.26, 20), mainMat);
                qWaist.position.y = -0.37;
                group.add(qWaist);
                // 细束腰
                const qNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.18, 18), mainMat);
                qNeck.position.y = -0.17;
                group.add(qNeck);
                // 中部球形鼓身
                const qBelly = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                qBelly.scale.set(0.26 * featS, 0.22 * featS, 0.26 * featS);
                qBelly.position.y = 0.02;
                group.add(qBelly);
                // 上颈
                const qNeckTop = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 16), mainMat);
                qNeckTop.position.y = 0.22;
                group.add(qNeckTop);
                // 顶部小球
                const qHead = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                qHead.scale.setScalar(0.18 * featS);
                qHead.position.y = 0.38;
                group.add(qHead);
                // 五芒星冠冕
                const qCrown = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                qCrown.position.y = 0.52;
                qCrown.scale.setScalar(0.42 * featS);
                group.add(qCrown);
                // 饱满气囊球体
                const balloon = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                balloon.scale.set(0.54 * featS, 0.68 * featS, 0.54 * featS);
                balloon.position.y = 0.14;
                group.add(balloon);
                // 六色竖条纹
                for (let i = 0; i < 6; i++) {
                    const ang = (i / 6) * Math.PI * 2;
                    const stripe = new THREE.Mesh(createRoundedRectExtrude(0.06 * featS, 0.82 * featS, 0.04, 0.03, 0.01), accentMat);
                    stripe.position.set(Math.cos(ang) * 0.50, 0.14, Math.sin(ang) * 0.50);
                    stripe.rotation.y = ang;
                    group.add(stripe);
                }
                // 连接绳
                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2 + Math.PI / 4;
                    const rope = new THREE.Mesh(createCapsuleGeometry(0.014 * featS, 0.36 * featS, 6), accentMat);
                    rope.position.set(Math.cos(ang) * 0.18, -0.30, Math.sin(ang) * 0.18);
                    rope.rotation.z = Math.cos(ang) * 0.30;
                    rope.rotation.x = Math.sin(ang) * 0.30;
                    group.add(rope);
                }
                // 藤编吊篮
                const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.18, 10), accentMat);
                basket.position.y = -0.50;
                group.add(basket);
                // 双侧凹腰共鸣箱
                const vBodyShape = new THREE.Shape();
                vBodyShape.moveTo(0, -0.54);
                vBodyShape.bezierCurveTo(0.38, -0.54, 0.44, -0.28, 0.42, -0.08);
                vBodyShape.bezierCurveTo(0.28, 0.0, 0.0, 0.0, 0.0, -0.02);
                vBodyShape.bezierCurveTo(0.0, 0.0, -0.28, 0.0, -0.42, -0.08);
                vBodyShape.bezierCurveTo(-0.44, -0.28, -0.38, -0.54, 0, -0.54);
                vBodyShape.moveTo(0, -0.02);
                vBodyShape.bezierCurveTo(-0.14, 0.0, -0.30, 0.10, -0.44, 0.08);
                vBodyShape.bezierCurveTo(-0.46, -0.22, -0.38, -0.52, 0, -0.54);
                vBodyShape.bezierCurveTo(0.38, -0.52, 0.46, -0.22, 0.44, 0.08);
                vBodyShape.bezierCurveTo(0.30, 0.10, 0.14, 0.10, 0.0, 0.08);
                vBodyShape.closePath();
                const vBodyGeo = new THREE.ExtrudeGeometry(vBodyShape, {
                    depth: 0.14, bevelEnabled: true, bevelSegments: 6, steps: 1, bevelSize: 0.04, bevelThickness: 0.04
                });
                vBodyGeo.center();
                group.add(new THREE.Mesh(vBodyGeo, mainMat));
                // 琴颈
                const vNeck = new THREE.Mesh(createRoundedRectExtrude(0.09 * featS, 0.42 * featS, 0.06, 0.08, 0.02), mainMat);
                vNeck.position.set(0, 0.46, 0);
                group.add(vNeck);
                // 卷轴头
                const vScroll = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                vScroll.scale.set(0.10 * featS, 0.10 * featS, 0.06 * featS);
                vScroll.position.set(0, 0.72, 0);
                group.add(vScroll);
                // f形音孔
                [-0.16, 0.16].forEach((fx) => {
                    const fhole = new THREE.Mesh(createCapsuleGeometry(0.024 * featS, 0.16 * featS, 6), accentMat);
                    fhole.position.set(fx, -0.04, 0.09);
                    group.add(fhole);
                });
                // 大圆杯身
                const btCup = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.30, 0.78, 28), mainMat);
                btCup.position.y = -0.14;
                group.add(btCup);
                // 底部沉淀的黑色珍珠
                for (let i = 0; i < 7; i++) {
                    const ang = (i / 7) * Math.PI * 2;
                    const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    pearl.position.set(Math.cos(ang) * 0.18, -0.44, Math.sin(ang) * 0.18);
                    pearl.scale.setScalar(0.08 * featS);
                    group.add(pearl);
                }
                // 封口薄膜
                const btLid = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.40, 0.04, 28), accentMat);
                btLid.position.y = 0.26;
                group.add(btLid);
                // 粗壮吸管
                const btStraw = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.72 * featS, 10), accentMat);
                btStraw.position.set(0.18, 0.62, 0);
                btStraw.rotation.z = -0.14;
                group.add(btStraw);
                // 圆润荷叶底座
                const ltLeaf = new THREE.Mesh(new THREE.CylinderGeometry(0.60, 0.56, 0.06, 32), mainMat);
                ltLeaf.position.y = -0.52;
                group.add(ltLeaf);
                // 外层大花瓣
                for (let i = 0; i < 6; i++) {
                    const ang = (i / 6) * Math.PI * 2;
                    const petal = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    petal.position.set(Math.cos(ang) * 0.30, -0.14, Math.sin(ang) * 0.30);
                    petal.scale.set(0.14 * featS, 0.26 * featS, 0.12 * featS);
                    petal.rotation.y = ang;
                    petal.rotation.z = Math.cos(ang) * 0.40 + 0.20;
                    petal.rotation.x = Math.sin(ang) * 0.40;
                    group.add(petal);
                }
                // 内层小花瓣
                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2 + Math.PI / 8;
                    const inner = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    inner.position.set(Math.cos(ang) * 0.14, 0.14, Math.sin(ang) * 0.14);
                    inner.scale.set(0.10 * featS, 0.22 * featS, 0.09 * featS);
                    inner.rotation.y = ang;
                    inner.rotation.z = Math.cos(ang) * 0.20 + 0.10;
                    group.add(inner);
                }
                // 金黄莲蓬中心
                const ltPod = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                ltPod.scale.set(0.16 * featS, 0.14 * featS, 0.16 * featS);
                ltPod.position.y = 0.26;
                group.add(ltPod);
                // 饱满圆角正方体骰子
                const diceGeo = createRoundedRectExtrude(0.76, 0.76, 0.76, 0.76, 0.14);
                diceGeo.center();
                group.add(new THREE.Mesh(diceGeo, mainMat));
                // 点数
                [
                    [-0.18, 0.18, 0.40], [0.0, 0.0, 0.40], [0.18, -0.18, 0.40],
                    [0.0, 0.40, 0.0],
                    [0.40, 0.14, -0.14], [0.40, -0.14, 0.14]
                ].forEach(([dx, dy, dz]) => {
                    const dot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    dot.position.set(dx, dy, dz);
                    dot.scale.setScalar(0.07 * featS);
                    group.add(dot);
                });

            // #183 圣代冰淇淋 Ice Cream Sundae
            } else if (sp === 'foodIceCreamSundae') {
                // 高脚杯底座
                const icBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.08, 20), accentMat);
                icBase.position.y = -0.56;
                group.add(icBase);
                const icStem = new THREE.Mesh(createCapsuleGeometry(0.05 * featS, 0.26 * featS, 10), accentMat);
                icStem.position.y = -0.42;
                group.add(icStem);
                const icCup = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.18, 0.44, 24), accentMat);
                icCup.position.y = -0.16;
                group.add(icCup);
                // 双球冰淇淋
                [[-0.08, 0.14], [0.10, 0.36]].forEach(([ex, ey]) => {
                    const scoop = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                    scoop.position.set(ex, ey, 0);
                    scoop.scale.set(0.26 * featS, 0.24 * featS, 0.26 * featS);
                    group.add(scoop);
                });
                // 顶部鲜红樱桃
                const icCherry = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                icCherry.position.set(0.08, 0.60, 0);
                icCherry.scale.setScalar(0.09 * featS);
                group.add(icCherry);
                // 樱桃柄
                const icStalk = new THREE.Mesh(createCapsuleGeometry(0.014 * featS, 0.14 * featS, 6), accentMat);
                icStalk.position.set(0.08, 0.72, 0);
                group.add(icStalk);
                // 夹心饼干棒
                const icWafer = new THREE.Mesh(createRoundedRectExtrude(0.06 * featS, 0.42 * featS, 0.03, 0.04, 0.01), accentMat);
                icWafer.position.set(-0.14, 0.44, 0.10);
                icWafer.rotation.z = 0.26;
                group.add(icWafer);
                // 椭圆形岩石冰晶核心
                const cCore = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
                cCore.scale.set(0.26 * featS, 0.20 * featS, 0.22 * featS);
                cCore.position.set(0.14, 0.14, 0);
                group.add(cCore);
                // 蓝白发光彗尾
                const tailPts = [
                    new THREE.Vector3(0.14, 0.14, 0),
                    new THREE.Vector3(-0.04, -0.04, 0),
                    new THREE.Vector3(-0.26, -0.28, 0),
                    new THREE.Vector3(-0.52, -0.56, 0)
                ];
                [0.09, 0.06, 0.04].forEach((r, i) => {
                    const tailSeg = new THREE.Mesh(
                        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tailPts.slice(i, i + 2)), 8, r * featS, 10, false),
                        accentMat);
                    group.add(tailSeg);
                });
                // 主光晕
                const cGlow = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                cGlow.scale.setScalar(0.34 * featS);
                cGlow.position.set(0.14, 0.14, 0);
                group.add(cGlow);

            // #185 椒盐卷饼 Pretzel
            } else if (sp === 'foodPretzel') {
                // 两侧圆形大环
                [-0.26, 0.26].forEach((rx) => {
                    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.085 * featS, 10, 24), mainMat);
                    ring.position.set(rx, 0.06, 0);
                    group.add(ring);
                });
                // 中间交叉扭结
                const pzCross1 = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.52 * featS, 10), mainMat);
                pzCross1.position.set(0, 0.06, 0);
                pzCross1.rotation.z = 0.90;
                group.add(pzCross1);
                const pzCross2 = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.52 * featS, 10), mainMat);
                pzCross2.position.set(0, 0.06, 0);
                pzCross2.rotation.z = -0.90;
                group.add(pzCross2);
                // 下两条粗尾
                [-0.18, 0.18].forEach((tx) => {
                    const tail = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.26 * featS, 8), mainMat);
                    tail.position.set(tx, -0.30, 0);
                    tail.rotation.z = tx > 0 ? 0.26 : -0.26;
                    group.add(tail);
                });
                // 表面粗盐粒
                for (let i = 0; i < 8; i++) {
                    const ang = (i / 8) * Math.PI * 2;
                    const salt = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    salt.position.set(Math.cos(ang) * 0.20, Math.sin(ang) * 0.10 + 0.06, 0.09);
                    salt.scale.setScalar(0.03 * featS);
                    group.add(salt);
                }
                // 菱形折叠翅身（主体）
                const ocBodyShape = new THREE.Shape();
                ocBodyShape.moveTo(0, 0.28);
                ocBodyShape.lineTo(0.44, -0.08);
                ocBodyShape.lineTo(0.0, -0.26);
                ocBodyShape.lineTo(-0.44, -0.08);
                ocBodyShape.closePath();
                const ocBodyGeo = new THREE.ExtrudeGeometry(ocBodyShape, {
                    depth: 0.14, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: 0.04, bevelThickness: 0.04
                });
                ocBodyGeo.center();
                group.add(new THREE.Mesh(ocBodyGeo, mainMat));
                // 展开的两侧翅翼
                [-1, 1].forEach((side) => {
                    const wingShape = new THREE.Shape();
                    wingShape.moveTo(0, 0);
                    wingShape.lineTo(side * 0.52, 0.18);
                    wingShape.lineTo(side * 0.60, 0.0);
                    wingShape.lineTo(side * 0.44, -0.22);
                    wingShape.closePath();
                    const wingGeo = new THREE.ExtrudeGeometry(wingShape, {
                        depth: 0.04, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.02, bevelThickness: 0.02
                    });
                    wingGeo.center();
                    const wing = new THREE.Mesh(wingGeo, mainMat);
                    wing.position.set(side * 0.26, 0.04, 0);
                    group.add(wing);
                });
                // 细长颈部
                const ocNeck = new THREE.Mesh(createCapsuleGeometry(0.04 * featS, 0.36 * featS, 8), accentMat);
                ocNeck.position.set(0.08, 0.32, 0);
                ocNeck.rotation.z = -0.52;
                group.add(ocNeck);
                // 小头部
                const ocHead = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                ocHead.position.set(0.22, 0.52, 0);
                ocHead.scale.setScalar(0.09 * featS);
                group.add(ocHead);
                // 尾羽单尖
                const ocTail = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.26 * featS, 6), accentMat);
                ocTail.position.set(-0.08, -0.26, 0);
                ocTail.rotation.z = 0.44;
                group.add(ocTail);
                // 铸铁马蹄形底座
                const msBase = new THREE.Mesh(createRoundedRectExtrude(0.68, 0.18, 0.44, 0.22, 0.08), mainMat);
                msBase.position.y = -0.54;
                group.add(msBase);
                // 金属弓形镜臂
                const msArmPts = [
                    new THREE.Vector3(0, -0.42, 0.10),
                    new THREE.Vector3(0, -0.10, 0.08),
                    new THREE.Vector3(-0.08, 0.14, 0.04),
                    new THREE.Vector3(0, 0.44, 0)
                ];
                const msArm = new THREE.Mesh(
                    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(msArmPts), 16, 0.07 * featS, 12, false),
                    mainMat);
                group.add(msArm);
                // 载物台
                const msStage = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 20), accentMat);
                msStage.position.set(0, -0.14, 0.08);
                group.add(msStage);
                // 下节粗目镜镜筒
                const msTube1 = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.26, 16), accentMat);
                msTube1.position.set(0, 0.60, 0);
                group.add(msTube1);
                // 上节细目镜镜筒
                const msTube2 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.22, 14), mainMat);
                msTube2.position.set(0, 0.80, 0);
                group.add(msTube2);
                // 目镜镜头
                const msEye = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.07, 14), accentMat);
                msEye.position.set(0, 0.94, 0);
                group.add(msEye);
                // 白色菌柄
                const shStem = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.48, 20), mainMat);
                shStem.position.y = -0.36;
                group.add(shStem);
                // 裙状菌褶
                const shSkirt = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.12, 20, 1, true), accentMat);
                shSkirt.position.y = -0.14;
                group.add(shSkirt);
                // 宽大圆润的红色伞形菌盖
                const capPts = [
                    new THREE.Vector2(0.01, 0.0),
                    new THREE.Vector2(0.44, 0.08),
                    new THREE.Vector2(0.54, 0.26),
                    new THREE.Vector2(0.42, 0.42),
                    new THREE.Vector2(0.14, 0.52),
                    new THREE.Vector2(0.01, 0.56)
                ];
                const shCap = new THREE.Mesh(new THREE.LatheGeometry(capPts, 32), mainMat);
                shCap.position.y = -0.04;
                group.add(shCap);
                // 白色圆点斑纹
                [[0.0, 0.52, 0.18], [0.26, 0.42, 0.26], [-0.26, 0.42, 0.26],
                 [0.40, 0.28, 0.14], [-0.40, 0.28, 0.14], [0.0, 0.26, 0.56]].forEach(([dx, dy, dz]) => {
                    const spot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    spot.position.set(dx, dy, dz);
                    spot.scale.setScalar(0.08 * featS);
                    group.add(spot);
                });
                // 圆润锥形箭身
                const rkBody = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.76, 24), mainMat);
                rkBody.position.y = -0.04;
                group.add(rkBody);
                // 圆头鼻锥
                const rkNose = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.42, 24), accentMat);
                rkNose.position.y = 0.57;
                group.add(rkNose);
                // 三片尾翼
                for (let i = 0; i < 3; i++) {
                    const ang = (i / 3) * Math.PI * 2;
                    const finShape = new THREE.Shape();
                    finShape.moveTo(0, 0);
                    finShape.lineTo(0.28, -0.26);
                    finShape.lineTo(0.08, -0.42);
                    finShape.lineTo(0, -0.38);
                    finShape.closePath();
                    const finGeo = new THREE.ExtrudeGeometry(finShape, {
                        depth: 0.04, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.02, bevelThickness: 0.02
                    });
                    finGeo.center();
                    const fin = new THREE.Mesh(finGeo, accentMat);
                    fin.position.set(Math.cos(ang) * 0.24, -0.38, Math.sin(ang) * 0.24);
                    fin.rotation.y = ang;
                    group.add(fin);
                }
                // 尾喷火焰
                const rkFlame = new THREE.Mesh(new THREE.ConeGeometry(0.20, 0.36, 18), accentMat);
                rkFlame.position.y = -0.60;
                rkFlame.rotation.z = Math.PI;
                group.add(rkFlame);
                // 箭身星形徽章
                const rkBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
                rkBadge.position.set(0, 0.02, 0.28);
                rkBadge.scale.setScalar(0.28 * featS);
                group.add(rkBadge);
                // 椭圆鼓形灯身
                const jlPts = [
                    new THREE.Vector2(0.01, 0.0),
                    new THREE.Vector2(0.30, 0.04),
                    new THREE.Vector2(0.38, 0.22),
                    new THREE.Vector2(0.36, 0.42),
                    new THREE.Vector2(0.24, 0.56),
                    new THREE.Vector2(0.01, 0.62)
                ];
                const jlBody = new THREE.Mesh(new THREE.LatheGeometry(jlPts, 32), mainMat);
                jlBody.position.y = -0.26;
                group.add(jlBody);
                // 竹骨横环
                [-0.10, 0.08, 0.26, 0.42].forEach((hy) => {
                    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.016 * featS, 6, 24), accentMat);
                    rib.rotation.x = Math.PI / 2;
                    rib.position.y = hy - 0.26;
                    group.add(rib);
                });
                // 顶部吊环底座
                const jlTop = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.10, 0.06, 14), accentMat);
                jlTop.position.y = 0.44;
                group.add(jlTop);
                // 吊钩
                const jlHook = new THREE.Mesh(new THREE.TorusGeometry(0.09 * featS, 0.022 * featS, 8, 16, Math.PI), accentMat);
                jlHook.position.set(0, 0.56, 0);
                group.add(jlHook);
                // 底部流苏穗子
                for (let i = 0; i < 3; i++) {
                    const ang = (i / 3) * Math.PI * 2;
                    const tassel = new THREE.Mesh(createCapsuleGeometry(0.022 * featS, 0.22 * featS, 6), accentMat);
                    tassel.position.set(Math.cos(ang) * 0.08, -0.60, Math.sin(ang) * 0.08);
                    group.add(tassel);
                }
                // 寿司卷整体（圆柱横截面展示）
                const mkBody = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.60, 32), mainMat);
                mkBody.rotation.x = Math.PI / 2;
                mkBody.rotation.y = 0.26;
                group.add(mkBody);
                // 外圈海苔
                const mkNori = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.06 * featS, 8, 32), accentMat);
                mkNori.rotation.x = Math.PI / 2;
                mkNori.rotation.y = 0.26;
                group.add(mkNori);
                // 白色醋饭层
                const mkRice = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.62, 28), mainMat);
                mkRice.rotation.x = Math.PI / 2;
                mkRice.rotation.y = 0.26;
                group.add(mkRice);
                // 中心三文鱼
                const mkSalmon = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                mkSalmon.scale.set(0.14 * featS, 0.14 * featS, 0.32 * featS);
                mkSalmon.rotation.y = 0.26;
                group.add(mkSalmon);
                // 黄瓜条
                const mkCucumber = new THREE.Mesh(createCapsuleGeometry(0.06 * featS, 0.26 * featS, 8), accentMat);
                mkCucumber.position.set(0.14, 0.14, 0);
                mkCucumber.rotation.x = Math.PI / 2;
                group.add(mkCucumber);
                // 三脚架
                for (let i = 0; i < 3; i++) {
                    const ang = (i / 3) * Math.PI * 2 + Math.PI / 6;
                    const leg = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.56 * featS, 8), accentMat);
                    leg.position.set(Math.cos(ang) * 0.24, -0.52, Math.sin(ang) * 0.24);
                    leg.rotation.x = Math.sin(ang) * 0.42;
                    leg.rotation.z = -Math.cos(ang) * 0.42;
                    group.add(leg);
                }
                // 赤道仪云台
                const tsMount = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                tsMount.scale.setScalar(0.14 * featS);
                tsMount.position.y = -0.26;
                group.add(tsMount);
                // 粗长圆筒镜身（倾斜朝天）
                const tsTube = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.76, 20), mainMat);
                tsTube.position.set(-0.08, 0.10, 0);
                tsTube.rotation.z = -0.46;
                group.add(tsTube);
                // 大物镜端
                const tsObj = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 20), accentMat);
                tsObj.position.set(-0.42, -0.16, 0);
                tsObj.rotation.z = -0.46;
                group.add(tsObj);
                // 细目镜端
                const tsEye = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.14, 0.14, 16), accentMat);
                tsEye.position.set(0.26, 0.38, 0);
                tsEye.rotation.z = -0.46;
                group.add(tsEye);
                // 车身主体
                const vsBodyShape = new THREE.Shape();
                vsBodyShape.moveTo(-0.42, -0.22);
                vsBodyShape.bezierCurveTo(-0.44, 0.10, -0.28, 0.42, 0.0, 0.46);
                vsBodyShape.bezierCurveTo(0.28, 0.42, 0.42, 0.14, 0.40, -0.10);
                vsBodyShape.bezierCurveTo(0.28, -0.26, 0.10, -0.28, -0.10, -0.26);
                vsBodyShape.lineTo(-0.42, -0.22);
                vsBodyShape.closePath();
                const vsBodyGeo = new THREE.ExtrudeGeometry(vsBodyShape, {
                    depth: 0.30, bevelEnabled: true, bevelSegments: 6, steps: 1, bevelSize: 0.08, bevelThickness: 0.08
                });
                vsBodyGeo.center();
                group.add(new THREE.Mesh(vsBodyGeo, mainMat));
                // 前轮
                const vsFW = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.07 * featS, 10, 24), accentMat);
                vsFW.position.set(-0.34, -0.42, 0);
                group.add(vsFW);
                // 后轮
                const vsRW = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.07 * featS, 10, 24), accentMat);
                vsRW.position.set(0.34, -0.44, 0);
                group.add(vsRW);
                // 圆润大灯
                const vsLight = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                vsLight.scale.set(0.14 * featS, 0.12 * featS, 0.10 * featS);
                vsLight.position.set(-0.42, 0.14, 0.14);
                group.add(vsLight);
                // 车把
                const vsBar = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.42 * featS, 8), accentMat);
                vsBar.position.set(-0.14, 0.44, 0);
                vsBar.rotation.z = Math.PI / 2;
                group.add(vsBar);
                // 粗壮主干
                const crTrunk = new THREE.Mesh(createCapsuleGeometry(0.072 * featS, 0.46 * featS, 12), mainMat);
                crTrunk.position.y = -0.26;
                group.add(crTrunk);
                // 底部基盘
                const crBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.10, 20), mainMat);
                crBase.position.y = -0.52;
                group.add(crBase);
                // 二级分叉枝
                [[-0.28, 0.12, 0.08, -0.42], [0.26, 0.10, 0.10, 0.44],
                 [-0.14, 0.14, -0.16, -0.26], [0.12, 0.16, -0.14, 0.26]].forEach(([bx, by, bz, brot]) => {
                    const branch = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 0.38 * featS, 10), mainMat);
                    branch.position.set(bx, by, bz);
                    branch.rotation.z = brot * 0.5;
                    branch.rotation.x = bz * 0.5;
                    group.add(branch);
                    // 末梢圆润指尖
                    const tip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
                    tip.position.set(bx + Math.sin(brot) * 0.14, by + 0.22, bz + Math.cos(brot) * 0.08);
                    tip.scale.setScalar(0.07 * featS);
                    group.add(tip);
                });
                // 三级小枝
                for (let i = 0; i < 6; i++) {
                    const ang = (i / 6) * Math.PI * 2;
                    const twig = new THREE.Mesh(createCapsuleGeometry(0.030 * featS, 0.24 * featS, 8), accentMat);
                    twig.position.set(Math.cos(ang) * 0.36, 0.22, Math.sin(ang) * 0.20);
                    twig.rotation.z = Math.cos(ang) * 0.60;
                    twig.rotation.x = Math.sin(ang) * 0.60;
                    group.add(twig);
                }

            }

            return group;
        }

