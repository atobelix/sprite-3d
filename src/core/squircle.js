// G2 连续视觉曲率 (Squircle / 超圆角) 算法
// 基于 Apple / Figma Corner Smoothing (G2 曲率连续) 曲线生成精确 SVG clip-path

/**
 * 生成 G2 连续曲率平滑圆角的 SVG Path 字符串
 * @param {number} width 容器宽度
 * @param {number} height 容器高度
 * @param {number} cornerRadius 基础圆角半径 (px)
 * @param {number} smoothing 平滑因子 (0.0 为普通圆角，0.6 为 iOS 黄金平滑度，1.0 为全曲率过渡)
 * @returns {string} SVG Path d 属性值
 */
export function getSquircleSvgPath(width, height, cornerRadius = 24, smoothing = 0.6) {
    const w = width;
    const h = height;
    const maxR = Math.min(w, h) / 2;
    const r = Math.min(cornerRadius, maxR);
    if (r <= 0) return `M 0 0 L ${w} 0 L ${w} ${h} L 0 ${h} Z`;

    // Figma G2 平滑算法参数拟合
    // p: 直线过渡段长度比例，从直线平滑切入圆角段
    const p = Math.min(1, Math.max(0, smoothing));
    const smoothOffset = r * p;
    const l = r + smoothOffset; // 拐角受影响的总边长

    // 如果边长不足以容纳四个连续曲率角，自适应按比例缩小
    const scale = Math.min(1, w / (2 * l), h / (2 * l));
    const actualR = r * scale;
    const actualOffset = smoothOffset * scale;
    const actualL = actualR + actualOffset;

    // 贝塞尔控制点系数 (拟合 G2 连续曲率，切点曲率为 0)
    const c1 = actualL * (1 - 0.28 * p);
    const c2 = actualR * 0.55228475; // 标准圆弧切线控制距离

    return `
        M ${actualL} 0
        L ${w - actualL} 0
        C ${w - c1} 0, ${w - actualR + c2} ${actualOffset * 0.15}, ${w - actualR + c2} ${actualOffset * 0.45}
        C ${w - actualR + c2} ${actualOffset * 0.75}, ${w} ${actualL - c2}, ${w} ${actualL}
        L ${w} ${h - actualL}
        C ${w} ${h - actualL + c2}, ${w - actualOffset * 0.15} ${h - actualR + c2}, ${w - actualOffset * 0.45} ${h - actualR + c2}
        C ${w - actualOffset * 0.75} ${h - actualR + c2}, ${w - c1} ${h}, ${w - actualL} ${h}
        L ${actualL} ${h}
        C ${c1} ${h}, ${actualR - c2} ${h - actualOffset * 0.15}, ${actualR - c2} ${h - actualOffset * 0.45}
        C ${actualR - c2} ${h - actualOffset * 0.75}, 0 ${h - actualL + c2}, 0 ${h - actualL}
        L 0 ${actualL}
        C 0 ${c1}, ${actualOffset * 0.15} ${actualR - c2}, ${actualOffset * 0.45} ${actualR - c2}
        C ${actualOffset * 0.75} ${actualR - c2}, ${actualL - c2} 0, ${actualL} 0
        Z
    `.replace(/\s+/g, ' ').trim();
}

/**
 * 将 G2 超圆角动态应用到指定 DOM 元素上
 */
export function applySquircle(element, options = {}) {
    if (!element) return;
    const { radius = 24, smoothing = 0.6 } = options;

    let svgId = element.dataset.squircleId;
    if (!svgId) {
        svgId = 'squircle-clip-' + Math.random().toString(36).substr(2, 9);
        element.dataset.squircleId = svgId;
    }

    let clipDef = document.getElementById(svgId);
    if (!clipDef) {
        let globalSvg = document.getElementById('global-squircle-svg');
        if (!globalSvg) {
            globalSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            globalSvg.id = 'global-squircle-svg';
            globalSvg.setAttribute('style', 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;');
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            globalSvg.appendChild(defs);
            document.body.appendChild(globalSvg);
        }
        clipDef = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipDef.id = svgId;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        clipDef.appendChild(path);
        globalSvg.querySelector('defs').appendChild(clipDef);
    }

    const updatePath = () => {
        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const pathStr = getSquircleSvgPath(rect.width, rect.height, radius, smoothing);
        const pathEl = clipDef.querySelector('path');
        if (pathEl) pathEl.setAttribute('d', pathStr);
        element.style.clipPath = `url(#${svgId})`;
    };

    updatePath();

    const ro = new ResizeObserver(() => {
        updatePath();
    });
    ro.observe(element);

    return () => ro.disconnect();
}
