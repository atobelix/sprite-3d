// 胶囊参数滑块组件 (严格对齐用户截屏: 浅灰进度填充 + 竖线游标 | + 纯中性零杂色 HSLA + 纯白底)

export function setupPillSlider(container, options = {}) {
    const min = parseFloat(options.min !== undefined ? options.min : (container.dataset.min || 0));
    const max = parseFloat(options.max !== undefined ? options.max : (container.dataset.max || 1));
    const step = parseFloat(options.step !== undefined ? options.step : (container.dataset.step || 0.01));
    const label = options.label || container.dataset.label || '';
    const formatValue = options.formatValue || ((val) => {
        if (options.isPercent) return Math.round(val) + '%';
        return val.toFixed(2);
    });
    const onChange = options.onChange || (() => {});

    let currentValue = parseFloat(options.value !== undefined ? options.value : (container.dataset.value || min));

    // 结构对齐用户设计图
    container.className = 'pill-slider';
    container.innerHTML = `
        <div class="pill-slider-fill">
            <div class="pill-slider-cursor"></div>
        </div>
        <span class="pill-slider-label">${label}</span>
        <span class="pill-slider-val">${formatValue(currentValue)}</span>
    `;

    const fillEl = container.querySelector('.pill-slider-fill');
    const valEl = container.querySelector('.pill-slider-val');

    function updateVisual(val, triggerCallback = false) {
        currentValue = Math.min(max, Math.max(min, val));
        if (step > 0) {
            const stepsCount = Math.round((currentValue - min) / step);
            currentValue = parseFloat((min + stepsCount * step).toFixed(4));
        }
        const pct = Math.min(100, Math.max(0, ((currentValue - min) / (max - min)) * 100));
        fillEl.style.width = `${pct}%`;
        valEl.textContent = formatValue(currentValue);
        container.dataset.value = currentValue;

        if (triggerCallback) {
            onChange(currentValue);
        }
    }

    updateVisual(currentValue, false);

    let isDragging = false;

    function handlePointer(e) {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0) return;
        const x = e.clientX - rect.left;
        const ratio = Math.min(1, Math.max(0, x / rect.width));
        const rawVal = min + ratio * (max - min);
        updateVisual(rawVal, true);
    }

    container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        try { container.setPointerCapture(e.pointerId); } catch (err) {}
        container.classList.add('dragging');
        handlePointer(e);
    });

    container.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        handlePointer(e);
    });

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        container.classList.remove('dragging');
    };

    container.addEventListener('pointerup', stopDrag);
    container.addEventListener('pointercancel', stopDrag);

    // 滚轮无级微调
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? step : -step;
        updateVisual(currentValue + delta, true);
    }, { passive: false });

    return {
        getValue: () => currentValue,
        setValue: (v) => updateVisual(v, false)
    };
}
