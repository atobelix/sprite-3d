// 通用基础几何体缓存与工具函数
export function createCapsuleGeometry(radius = 0.066, height = 0.21, segments = 24) {
    const points = [];
    const halfH = height * 0.5;
    const capSteps = 10;
    for (let i = 0; i <= capSteps; i++) {
        const angle = -Math.PI / 2 + (Math.PI / 2) * (i / capSteps);
        points.push(new THREE.Vector2(Math.cos(angle) * radius, -halfH + Math.sin(angle) * radius));
    }
    for (let i = 0; i <= capSteps; i++) {
        const angle = (Math.PI / 2) * (i / capSteps);
        points.push(new THREE.Vector2(Math.cos(angle) * radius, halfH + Math.sin(angle) * radius));
    }
    return new THREE.LatheGeometry(points, segments);
}

// 创建圆角矩形 (iOS/macOS App Icon Squircle 底座)
export function createSquircleGeometry(size = 1.65, radius = 0.42, depth = 0.16) {
    const s = size / 2;
    const r = radius;
    const shape = new THREE.Shape();
    shape.moveTo(-s + r, -s);
    shape.lineTo(s - r, -s);
    shape.quadraticCurveTo(s, -s, s, -s + r);
    shape.lineTo(s, s - r);
    shape.quadraticCurveTo(s, s, s - r, s);
    shape.lineTo(-s + r, s);
    shape.quadraticCurveTo(-s, s, -s, s - r);
    shape.lineTo(-s, -s + r);
    shape.quadraticCurveTo(-s, -s, -s + r, -s);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.06,
        bevelThickness: 0.06
    });
    geo.center();
    return geo;
}

// 创建四角星芒徽章几何体 (用于 #01 旗舰云朵图标的黄金角标)
export function createFourPointStarGeometry(outerR = 0.22, innerR = 0.085, depth = 0.06) {
    const shape = new THREE.Shape();
    const pts = 4;
    for (let i = 0; i < pts * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const a = (i / (pts * 2)) * Math.PI * 2;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.03,
        bevelThickness: 0.03
    });
    geo.center();
    return geo;
}

// 创建圆角跑道环 (Stadium / Chain Link) 几何体
export function createRoundedRectExtrude(w = 0.8, h = 0.8, r = 0.22, depth = 0.24, bevel = 0.10) {
    const hw = w / 2, hh = h / 2;
    const cr = Math.min(r, hw, hh);
    const s = new THREE.Shape();
    s.moveTo(-hw + cr, -hh);
    s.lineTo(hw - cr, -hh);
    s.quadraticCurveTo(hw, -hh, hw, -hh + cr);
    s.lineTo(hw, hh - cr);
    s.quadraticCurveTo(hw, hh, hw - cr, hh);
    s.lineTo(-hw + cr, hh);
    s.quadraticCurveTo(-hw, hh, -hw, hh - cr);
    s.lineTo(-hw, -hh + cr);
    s.quadraticCurveTo(-hw, -hh, -hw + cr, -hh);
    const geo = new THREE.ExtrudeGeometry(s, {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: bevel,
        bevelThickness: bevel
    });
    geo.center();
    return geo;
}

export const SHARED_GEOS = {
    sphere: new THREE.SphereGeometry(1, 32, 24),
    capsuleEye: createCapsuleGeometry(0.066, 0.21, 24),
    squircle: createSquircleGeometry(1.72, 0.44, 0.14),
    starBadge: createFourPointStarGeometry(0.19, 0.075, 0.05)
};
