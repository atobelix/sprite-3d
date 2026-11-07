import { showToast } from '../ui/toast.js';

// 复用主 WebGLRenderer 渲染 1024×1024 离屏高清图像（避免跨 WebGLContext 导致导出空白）
export function renderSpriteTo1024Canvas(inst, renderer, canvas) {
    const prevWidth = window.innerWidth;
    const prevHeight = window.innerHeight;
    const prevPixelRatio = renderer.getPixelRatio();

    renderer.setScissorTest(false);
    renderer.setPixelRatio(1);
    renderer.setSize(1024, 1024, false);
    renderer.setViewport(0, 0, 1024, 1024);
    renderer.clear();

    const frustum = 2.45;
    inst.camera.left = -frustum / 2;
    inst.camera.right = frustum / 2;
    inst.camera.top = frustum / 2;
    inst.camera.bottom = -frustum / 2;
    inst.camera.updateProjectionMatrix();

    renderer.render(inst.scene, inst.camera);

    const outCanvas = document.createElement('canvas');
    outCanvas.width = 1024;
    outCanvas.height = 1024;
    outCanvas.getContext('2d').drawImage(canvas, 0, 0, 1024, 1024);

    // 恢复主渲染器尺寸与状态
    renderer.setPixelRatio(prevPixelRatio);
    renderer.setSize(prevWidth, prevHeight, false);
    return outCanvas;
}

// 1. 导出透明背景 3D 精灵 PNG (1024x1024 高清无底色)
export function exportSpritePNG(inst, renderer, canvas) {
    const exportCanvas = renderSpriteTo1024Canvas(inst, renderer, canvas);
    const link = document.createElement('a');
    link.download = `sprite-3d-${inst.cloudDef.name}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
    showToast(`📸 已导出【${inst.cloudDef.name}】1024px 高清透明 PNG`);
}
