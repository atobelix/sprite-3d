import { showToast } from './toast.js';

export function setupToolbar(state) {
    const {
        cloudScenes,
        cloudGridEl,
        setGlobalViewAngleMode,
        getVisibleCloudIndices
    } = state;

    const surveyBanner = document.getElementById('survey-header-banner');
    const btnToggleSurvey = document.getElementById('btn-toggle-survey');

    function updateSurveySelectedCount() {
        const checkedCount = document.querySelectorAll('.cloud-slot.survey-checked').length;
        const countEl = document.getElementById('survey-selected-count');
        if (countEl) {
            countEl.textContent = `已选 ${checkedCount} 项`;
        }
        document.querySelectorAll('.cloud-slot').forEach((slot) => {
            const tick = slot.querySelector('.survey-tick-icon');
            if (tick) {
                if (slot.classList.contains('survey-checked')) {
                    tick.className = 'survey-tick-icon w-4 h-4 rounded-full flex items-center justify-center transition bg-[hsla(0,0%,25%,1)] text-white text-xs';
                } else {
                    tick.className = 'survey-tick-icon w-4 h-4 rounded-full flex items-center justify-center transition bg-white text-transparent text-xs';
                }
            }
        });
    }
    updateSurveySelectedCount();

    function setFilterTab(filter) {
        document.querySelectorAll('.cloud-slot').forEach((slot) => {
            const tag = slot.dataset.grouptag;
            if (filter === 'all' || tag === filter) {
                slot.classList.remove('hidden');
            } else {
                slot.classList.add('hidden');
            }
        });
        document.querySelectorAll('.filter-btn').forEach((b) => {
            const isActive = b.dataset.filter === filter;
            b.className = isActive
                ? 'filter-btn h-7.5 px-3 rounded-full bg-[hsla(0,0%,25%,1)] text-white font-medium transition cursor-pointer flex items-center justify-center text-xs'
                : 'filter-btn h-7.5 px-3 rounded-full hover:bg-[hsla(0,0%,94%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center text-xs';
        });
    }

    function setSurveyPreviewMode(enable) {
        if (enable) {
            setFilterTab('survey10');
            document.body.classList.add('survey-preview-mode');
            if (surveyBanner) {
                surveyBanner.classList.remove('hidden');
                surveyBanner.classList.add('flex');
            }
            if (btnToggleSurvey) {
                btnToggleSurvey.className = 'h-7.5 px-3 rounded-full bg-[hsla(0,0%,25%,1)] text-white text-xs font-medium transition cursor-pointer flex items-center justify-center';
            }
            updateSurveySelectedCount();
            showToast('已进入职业调研模式');
        } else {
            document.body.classList.remove('survey-preview-mode');
            if (surveyBanner) {
                surveyBanner.classList.add('hidden');
                surveyBanner.classList.remove('flex');
            }
            if (btnToggleSurvey) {
                btnToggleSurvey.className = 'h-7.5 px-3 rounded-full text-xs text-[hsla(0,0%,35%,1)] hover:bg-[hsla(0,0%,94%,1)] transition cursor-pointer flex items-center justify-center';
            }
        }
    }

    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (document.body.classList.contains('survey-preview-mode') && btn.dataset.filter !== 'survey10') {
                setSurveyPreviewMode(false);
            }
            setFilterTab(btn.dataset.filter);
        });
    });

    if (btnToggleSurvey) {
        btnToggleSurvey.addEventListener('click', () => {
            const nextState = !document.body.classList.contains('survey-preview-mode');
            setSurveyPreviewMode(nextState);
        });
    }

    const btnExitSurvey = document.getElementById('btn-exit-survey');
    if (btnExitSurvey) {
        btnExitSurvey.addEventListener('click', () => {
            setSurveyPreviewMode(false);
            setFilterTab('all');
            showToast('已返回全部精灵图鉴');
        });
    }

    const angleBtns = {
        iso: document.getElementById('btn-angle-iso'),
        front: document.getElementById('btn-angle-front'),
        side: document.getElementById('btn-angle-side'),
        spin: document.getElementById('btn-angle-spin')
    };

    function setAngleMode(mode) {
        setGlobalViewAngleMode(mode);
        cloudScenes.forEach((sc) => {
            sc.userRotX = 0;
            sc.userRotY = 0;
        });
        Object.keys(angleBtns).forEach((k) => {
            const btn = angleBtns[k];
            if (!btn) return;
            const isActive = k === mode;
            btn.classList.toggle('bg-white', isActive);
            btn.classList.toggle('text-[#18181b]', isActive);
            btn.classList.toggle('shadow-2xs', isActive);
            btn.classList.toggle('text-[#71717a]', !isActive);
            btn.classList.toggle('hover:bg-white/60', !isActive);
        });
        const modeNames = {
            iso: '斜视角度 (Isometric)',
            front: '正视角度 (Front View)',
            side: '侧视角度 (Side Profile)',
            spin: '360° 自动巡航'
        };
        showToast(modeNames[mode] || '');
    }

    if (angleBtns.iso) angleBtns.iso.addEventListener('click', () => setAngleMode('iso'));
    if (angleBtns.front) angleBtns.front.addEventListener('click', () => setAngleMode('front'));
    if (angleBtns.side) angleBtns.side.addEventListener('click', () => setAngleMode('side'));
    if (angleBtns.spin) angleBtns.spin.addEventListener('click', () => setAngleMode('spin'));

    const THEME_CONFIG = {
        white: { bg: 'hsla(0, 0%, 100%, 1)', bodyClass: '' },
        sky:   { bg: 'hsla(0, 0%, 97%, 1)',  bodyClass: 'theme-sky' },
        night: { bg: 'hsla(0, 0%, 12%, 1)',  bodyClass: 'theme-night' }
    };

    document.querySelectorAll('.theme-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const themeKey = btn.dataset.theme;
            const cfg = THEME_CONFIG[themeKey] || THEME_CONFIG.white;

            document.body.classList.remove('theme-sky', 'theme-night');
            document.documentElement.style.setProperty('--bg-canvas', cfg.bg);
            if (cfg.bodyClass) document.body.classList.add(cfg.bodyClass);

            document.querySelectorAll('.theme-btn').forEach((b) => {
                const isActive = b === btn;
                b.className = isActive
                    ? 'theme-btn h-6.5 px-2.5 rounded-full bg-white text-[hsla(0,0%,20%,1)] shadow-xs font-medium transition cursor-pointer flex items-center justify-center'
                    : 'theme-btn h-6.5 px-2.5 rounded-full hover:bg-[hsla(0,0%,93%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center';
            });
        });
    });

    const btnWave = document.getElementById('btn-wave-dance');
    if (btnWave) {
        btnWave.addEventListener('click', () => {
            const visIndices = getVisibleCloudIndices ? getVisibleCloudIndices() : [];
            visIndices.forEach((cIdx, order) => {
                setTimeout(() => {
                    const sc = cloudScenes[cIdx];
                    if (sc) {
                        sc.triggerPokeBounce();
                    }
                }, order * 25);
            });
        });
    }

    // 异步加载 GitHub 项目 Star 数量
    const starCountEl = document.getElementById('github-star-count');
    if (starCountEl) {
        fetch('https://api.github.com/repos/atobelix/sprite-3d')
            .then((res) => res.ok ? res.json() : null)
            .then((data) => {
                if (data && typeof data.stargazers_count === 'number') {
                    starCountEl.textContent = data.stargazers_count;
                }
            })
            .catch(() => {});
    }

    return {
        updateSurveySelectedCount
    };
}
