// 轻提示 Toast 组件
let toastTimer = null;
export function showToast(text) {
    const toast = document.getElementById('toast-msg');
    if (!toast) return;
    toast.textContent = text;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.style.opacity = '0';
    }, 2400);
}
