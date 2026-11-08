import fs from 'fs';

// Read all 22 high-res rendered sprites
const sprites = JSON.parse(fs.readFileSync('all-orbit-sprites.json', 'utf8'));

// Center of Cloud Mascot & Concentric Orbits
const cx = 880;
const cy = 270;

// Central Hero Cloud (Nimbus)
const cloudSize = 240;
const cloudFigure = {
    name: 'Nimbus',
    x: cx - cloudSize / 2,
    y: cy - cloudSize / 2,
    size: cloudSize,
    zIndex: 10
};

// 1. Inner Orbit (Ring 1): 6 sprites, r_x = 195, r_y = 145, 60 deg steps
const ring1Defs = [
    { name: 'Mushroom', angle: -90,  size: 140 }, // Top
    { name: 'Gamepad',  angle: -30,  size: 140 }, // Top-Right
    { name: 'Queen',    angle: 30,   size: 145 }, // Bottom-Right
    { name: 'Torii',    angle: 90,   size: 145 }, // Bottom
    { name: 'Kiwi',     angle: 150,  size: 140 }, // Bottom-Left
    { name: 'Avocado',  angle: -150, size: 140 }  // Top-Left
];

const ring1Figures = ring1Defs.map(d => {
    const rad = d.angle * Math.PI / 180;
    const x = Math.round(cx + 195 * Math.cos(rad) - d.size / 2);
    const y = Math.round(cy + 145 * Math.sin(rad) - d.size / 2);
    return { name: d.name, x, y, size: d.size, zIndex: 6 };
});

// 2. Mid Orbit (Ring 2): 8 sprites, r_x = 340, r_y = 240, 45 deg steps, interleaved
const ring2Defs = [
    { name: 'Saturn', angle: -22.5,  size: 175 }, // Top-Right
    { name: 'Sundae', angle: 22.5,   size: 135 }, // Right
    { name: 'Donut',  angle: 67.5,   size: 130 }, // Bottom-Right
    { name: 'Boba',   angle: 112.5,  size: 135 }, // Bottom-Center
    { name: 'Suika',  angle: 157.5,  size: 125 }, // Bottom-Left
    { name: 'Cacti',  angle: -157.5, size: 125 }, // Top-Left
    { name: 'Rocket', angle: -112.5, size: 135 }, // Top-Center
    { name: 'Bambi',  angle: -67.5,  size: 135 }  // Top-Right
];

const ring2Figures = ring2Defs.map(d => {
    const rad = d.angle * Math.PI / 180;
    const x = Math.round(cx + 340 * Math.cos(rad) - d.size / 2);
    const y = Math.round(cy + 240 * Math.sin(rad) - d.size / 2);
    return { name: d.name, x, y, size: d.size, zIndex: 5 };
});

// 3. Outer Orbit (Ring 3): r_x = 485, r_y = 330
const ring3Defs = [
    { name: 'Maneki',   angle: 150,  size: 140 }, // Lower-Left void (under veil)
    { name: 'Diamond',  angle: 180,  size: 125 }, // Mid-Left edge (under veil)
    { name: 'Whaley',   angle: 210,  size: 130 }, // Upper-Left edge
    { name: 'Ghost',    angle: -80,  size: 120 }, // Far top
    { name: 'Gachapon', angle: 10,   size: 155 }, // Far right edge
    { name: 'Pingu',    angle: 75,   size: 125 }  // Far bottom
];

const ring3Figures = ring3Defs.map(d => {
    const rad = d.angle * Math.PI / 180;
    const x = Math.round(cx + 485 * Math.cos(rad) - d.size / 2);
    const y = Math.round(cy + 330 * Math.sin(rad) - d.size / 2);
    return { name: d.name, x, y, size: d.size, zIndex: 4 };
});

// 4. Extended Orbit (Ring 4): sweeps through the lower-left void
const ring4Defs = [
    { name: 'Cherry', angle: 160, size: 135 } // Lower-left void under veil
];

const ring4Figures = ring4Defs.map(d => {
    const rad = d.angle * Math.PI / 180;
    const x = Math.round(cx + 640 * Math.cos(rad) - d.size / 2);
    const y = Math.round(cy + 410 * Math.sin(rad) - d.size / 2);
    return { name: d.name, x, y, size: d.size, zIndex: 3 };
});

const allFigures = [cloudFigure, ...ring1Figures, ...ring2Figures, ...ring3Figures, ...ring4Figures];
allFigures.sort((a, b) => a.zIndex - b.zIndex);

let figuresSvg = '';
allFigures.forEach(item => {
    const s = sprites[item.name];
    if (!s) return;

    // Soft airy shadow
    const shadowCx = item.x + item.size * 0.5;
    const shadowCy = item.y + item.size * 0.94;
    const shadowRx = item.size * 0.35;
    const shadowRy = item.size * 0.085;

    figuresSvg += `
        <!-- 3D Figure: ${item.name} -->
        <g class="figure-group">
            <ellipse cx="${shadowCx}" cy="${shadowCy}" rx="${shadowRx}" ry="${shadowRy}"
                     fill="#111111" opacity="0.04" filter="url(#ground-shadow-weak)"/>
            <image href="${s.dataUrl}" x="${item.x}" y="${item.y}" width="${item.size}" height="${item.size}"
                   preserveAspectRatio="xMidYMid meet" filter="url(#figure-depth-weak)"/>
        </g>
    `;
});

// Soft ambient bokeh bubbles along the orbits
const bokehBubbles = [
    { cx: 750, cy: 90,  r: 9,  fill: '#BAE6FD', opacity: 0.35 },
    { cx: 1010, cy: 75, r: 8,  fill: '#DDD6FE', opacity: 0.30 },
    { cx: 1110, cy: 260, r: 12, fill: '#FEF08A', opacity: 0.25 },
    { cx: 660, cy: 290, r: 9,  fill: '#BBF7D0', opacity: 0.30 },
    { cx: 990, cy: 420, r: 11, fill: '#FECDD3', opacity: 0.30 },
    { cx: 510, cy: 260, r: 7,  fill: '#FED7AA', opacity: 0.40 },
    { cx: 320, cy: 380, r: 8,  fill: '#DDD6FE', opacity: 0.35 }
];

let bokehSvg = bokehBubbles.map(b => `
    <circle cx="${b.cx}" cy="${b.cy}" r="${b.r}" fill="${b.fill}" opacity="${b.opacity}" filter="url(#bokeh-blur)"/>
`).join('');

const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 560" width="1200" height="560">
    <defs>
        <!-- Canvas Background Base: Luxury Porcelain Slate -->
        <linearGradient id="canvas-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="42%" stop-color="#FAFAFA"/>
            <stop offset="100%" stop-color="#F4F4F5"/>
        </linearGradient>

        <!-- Ambient Atmospheric Lighting (Neutral Warm/Cool, strictly non-blue text backdrop) -->
        <radialGradient id="ambient-left" cx="15%" cy="30%" r="55%">
            <stop offset="0%" stop-color="#F1F5F9" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#F1F5F9" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ambient-center" cx="72%" cy="48%" r="55%">
            <stop offset="0%" stop-color="#EDE9FE" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#EDE9FE" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ambient-warm" cx="95%" cy="80%" r="45%">
            <stop offset="0%" stop-color="#FEF3C7" stop-opacity="0.40"/>
            <stop offset="100%" stop-color="#FEF3C7" stop-opacity="0"/>
        </radialGradient>

        <!-- Tuned Left Softening Veil:
             Exact red curve boundary: from x=0 to 380 full softening;
             rapidly clears out between x=380 and 510;
             at x >= 510, opacity = 0 (100% solid, fully crisp sprites!) -->
        <linearGradient id="left-veil" x1="0" y1="0" x2="520" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
            <stop offset="65%" stop-color="#FFFFFF" stop-opacity="0.88"/>
            <stop offset="82%" stop-color="#FFFFFF" stop-opacity="0.50"/>
            <stop offset="95%" stop-color="#FFFFFF" stop-opacity="0.10"/>
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </linearGradient>

        <!-- Clip path for natural edge cutoff (截断多出图标) -->
        <clipPath id="poster-clip">
            <rect width="1200" height="560" rx="20"/>
        </clipPath>

        <!-- WEAKENED SOFT SHADOWS -->
        <filter id="ground-shadow-weak" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8"/>
        </filter>
        <filter id="figure-depth-weak" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#111111" flood-opacity="0.04"/>
        </filter>
        <filter id="bokeh-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3"/>
        </filter>
    </defs>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;850&amp;display=swap');
        
        .font-brand {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* 纯黑与中性碳灰字阶：绝对不偏蓝，零符号纯粹西文排版 */
        .brand-kicker {
            font-weight: 750;
            font-size: 13.5px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            fill: #18181B; /* Pure Neutral Carbon Black */
        }
        .title-display {
            font-weight: 850;
            font-size: 60px;
            letter-spacing: -0.035em;
            line-height: 1.06;
            fill: #111111; /* Pure Ink Black (Zero Blue) */
        }
        .desc-emotional {
            font-weight: 450;
            font-size: 19px;
            letter-spacing: -0.015em;
            line-height: 1.6;
            fill: #444444; /* True Neutral Charcoal Gray (Zero Blue) */
        }
        .footer-repo {
            font-weight: 550;
            font-size: 14.5px;
            letter-spacing: 0.01em;
            fill: #27272A; /* Deep Neutral Gray */
        }
        .footer-meta {
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 0.06em;
            fill: #71717A; /* Neutral Mid Gray */
        }
    </style>

    <!-- Canvas Frame & Backgrounds (Silky, Light, Clean) -->
    <rect width="1200" height="560" rx="20" fill="url(#canvas-base)"/>
    <rect width="1200" height="560" rx="20" fill="url(#ambient-left)"/>
    <rect width="1200" height="560" rx="20" fill="url(#ambient-center)"/>
    <rect width="1200" height="560" rx="20" fill="url(#ambient-warm)"/>
    <rect width="1200" height="560" rx="20" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1.5"/>

    <!-- Corner Registration Crosshairs (+) -->
    <g stroke="#71717A" stroke-width="1" opacity="0.25">
        <line x1="42" y1="48" x2="54" y2="48"/>
        <line x1="48" y1="42" x2="48" y2="54"/>
        <line x1="42" y1="512" x2="54" y2="512"/>
        <line x1="48" y1="506" x2="48" y2="518"/>
        <line x1="1146" y1="48" x2="1158" y2="48"/>
        <line x1="1152" y1="42" x2="1152" y2="54"/>
    </g>

    <!-- LAYER 1: Full-Canvas Orbiting Constellation (Surrounding Cloud + Extending into Left) -->
    <g clip-path="url(#poster-clip)">
        <!-- Concentric Orbital Ellipse Rings (Guiding mathematical paths across canvas) -->
        <g fill="none" stroke="rgba(113, 113, 122, 0.18)" stroke-width="1.2" stroke-dasharray="5 7">
            <!-- Inner Orbit (Radius 195 x 145) -->
            <ellipse cx="${cx}" cy="${cy}" rx="195" ry="145"/>
            <!-- Mid Orbit (Radius 340 x 240) -->
            <ellipse cx="${cx}" cy="${cy}" rx="340" ry="240" opacity="0.75"/>
            <!-- Outer Orbit (Radius 485 x 330) -->
            <ellipse cx="${cx}" cy="${cy}" rx="485" ry="330" opacity="0.55"/>
            <!-- Extended Left Orbit (Radius 640 x 410) -->
            <ellipse cx="${cx}" cy="${cy}" rx="640" ry="410" opacity="0.35"/>
        </g>

        <!-- Floating Ambient Bokeh Bubbles -->
        <g class="bokeh-layer">
            ${bokehSvg}
        </g>

        <!-- 3D Figures Constellation (Nimbus Center + 4 Concentric Orbital Rings) -->
        <g class="figures-layer">
            ${figuresSvg}
        </g>
    </g>

    <!-- LAYER 2: Tuned Left Softening Veil (精准契合用户红线弧度，右侧手办100%纯实无灰雾) -->
    <rect width="520" height="560" rx="20" fill="url(#left-veil)"/>

    <!-- LAYER 3: PURE CARBON BLACK EDITORIAL TYPOGRAPHY ON TOP -->
    <!-- 严格零符号、文字绝对不偏蓝、底部只留 MIT -->
    <g transform="translate(85, 105)" class="font-brand">
        <!-- 1. Brand Kicker (Pure text, zero symbols, pure neutral carbon) -->
        <text x="0" y="0" class="brand-kicker">SPRITE 3D</text>

        <!-- 2. Main Display Headline (Large 60px, bold, pure ink black) -->
        <g transform="translate(0, 68)">
            <text x="0" y="0" class="title-display">Shapes with Soul</text>
            <text x="0" y="74" class="title-display">Living in 3D</text>
        </g>

        <!-- 3. Emotional Subtitle (Large 19px, true neutral charcoal gray) -->
        <g transform="translate(0, 222)">
            <text x="0" y="0" class="desc-emotional">Infusing cold code with vibrant life</text>
            <text x="0" y="32" class="desc-emotional">personality and wonder</text>
        </g>

        <!-- 4. Grounding Footer (只留下 MIT 三个字，绝对不偏蓝) -->
        <g transform="translate(0, 360)">
            <text x="0" y="0" class="footer-repo">github.com/atobelix/sprite-3d</text>
            <text x="252" y="0" class="footer-meta">MIT</text>
        </g>
    </g>
</svg>`;

// Write to reference/sprite-3d/assets
fs.mkdirSync('reference/sprite-3d/assets', { recursive: true });
fs.writeFileSync('reference/sprite-3d/assets/banner.svg', bannerSvg, 'utf8');
fs.writeFileSync('reference/sprite-3d/assets/banner-final-approved.svg', bannerSvg, 'utf8');
console.log('Saved reference/sprite-3d/assets/banner.svg (Final Approved Spec)');

// Write to C:/Software/sprite-3d/assets
fs.mkdirSync('C:/Software/sprite-3d/assets', { recursive: true });
fs.writeFileSync('C:/Software/sprite-3d/assets/banner.svg', bannerSvg, 'utf8');
fs.writeFileSync('C:/Software/sprite-3d/assets/banner-final-approved.svg', bannerSvg, 'utf8');
console.log('Saved C:/Software/sprite-3d/assets/banner.svg (Final Approved Spec)');
