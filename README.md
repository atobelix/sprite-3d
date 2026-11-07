# SPRITE.3D · 179 款原创高辨识度 3D 精灵图鉴与 App 图标工坊

[![Three.js](https://img.shields.io/badge/Three.js-r128-black?logo=three.js)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-orange?logo=webgl)](https://get.webgl.org/)
[![Sprites](https://img.shields.io/badge/Original%20Sprites-179%E6%AC%BE-emerald)](#)

> **SPRITE.3D** 是一套基于 **Three.js** 与现代前端技术构建的原创 3D 精灵图鉴与 App 潮玩图标工坊。项目包含 **179 款程序化 3D 几何精灵**，集成自定义 **2-Tone Cel-Shading 双色平滑阶跃卡通着色器**、二阶物理阻尼动画、目光注视跟随、自由捏模工坊以及 **1024px 高清透明 PNG 与圆角 App 图标实时导出**。

---

## 🌟 核心亮点与特色

- 🎨 **179 款纯程序化 3D 建模**：涵盖日常器物、美味食光、自然生灵、潮玩艺术、奇幻冒险、数智科技、职业职能等 8 大精选分类。
- 🧪 **2-Tone Cel-Shading 双色卡通材质**：纯 GLSL 实现的平滑阶跃材质与轮廓微光（Rim Light），杜绝传统 3D 高光的脏灰过渡，完美呈现潮玩公仔和扁平 3D App 图标质感。
- ⚡ **单 WebGLRenderer 全局驱动**：利用 WebGL Scissor Test 视口动态剪裁，以单 Canvas 驱动数百个独立 3D 视口，内存占用极低，杜绝浏览器 Context 崩溃。
- 🎯 **二阶物理果冻回弹与目光注视**：集成二阶弹性阻尼算法（Spring & Damping），形体受击时呈现体积守恒果冻变形；正交相机投射让精灵瞳孔灵动注视光标，并自主规律眨眼。
- 🛠️ **3D 捏模器工坊**：支持 360° 自由旋转视角、4 维形体比例微调（宽/高/厚/细节）、3 维五官眼神定位、12 款潮玩调色板切换与 8 款外挂头饰自由装配。
- 🚀 **1024px 高清离屏导出**：一键生成透明底高清大图与标准 macOS / iOS Squircle 软件应用图标。

---

## 📂 目录结构与架构分层

```text
sprite-3d/
├── index.html                   # 洁净的 HTML 入口骨架与 DOM 结构
├── serve.mjs                    # 零依赖本地轻量开发服务 (Node.js 原生 HTTP)
├── build.mjs                    # 轻量打包脚本 (生成离线 bundle.js)
├── package.json                 # 项目元数据与脚本定义
├── LICENSE                      # MIT 开源协议
├── README.md                    # 项目设计与使用说明文档
├── css/
│   └── style.css                # 整合样式 (玻璃拟态、主题切换、自定义滑块等)
├── dist/
│   └── bundle.js                # 单文件自适应打包文件 (支持本地直接双击预览)
└── src/
    ├── main.js                  # 应用主入口 (网格卡片装配、Scissor 视口调度与主渲染循环)
    ├── config/                  # 数据字典与分类配置层
    │   ├── palettes.js          # 12 款潮玩高饱和度双色调色板
    │   ├── addons.js            # 8 款外挂头饰配置
    │   └── sprites-data.js      # 179 款原创精灵初始数据与 8 维分类分类法 (Taxonomy)
    ├── core/                    # 3D 核心渲染引擎
    │   ├── materials.js         # 自定义 2-Tone Cel-Shading 双色阶跃卡通着色器
    │   ├── geometries.js        # 通用基础几何体缓存池与生成器
    │   ├── sprite-scene.js      # 单个精灵 3D 场景与物理状态机
    │   └── exporter.js          # 1024px 离屏高清透明 PNG 与圆角 AppIcon 导出器
    ├── models/                  # 程序化 3D 几何建模层
    │   ├── index.js             # 建模系统统一对外导出中心
    │   ├── flagship-cloud.js    # #01 旗舰云宝 Nimbus 黄金分割多层云峰生成器
    │   ├── eyes-builder.js      # 眼睛与神态生成器
    │   ├── addons-builder.js    # 外挂头饰几何体生成器
    │   └── species-mesh.js      # 179 款原创物种形体的程序化几何体组装器
    └── ui/                      # 视图交互与事件控制层
        ├── toast.js             # 浮动轻提示 Toast
        ├── toolbar.js           # 顶部工具栏与视角控制
        ├── pill-slider.js       # 现代滑动调节控件
        └── sculptor-modal.js    # 3D 捏模器工坊 (形变、材质、贴图、导出)
```

---

## 🚀 快速上手与本地启动

工程具备**智能环境自适应能力**，提供两种最便捷的使用方式：

### 方式 1：本地零依赖服务启动（推荐）
```bash
# 启动本地轻量静态服务 (Node.js 原生支持，无需安装第三方依赖)
node serve.mjs
# 或使用 npm
npm start
```
启动后在浏览器打开 `http://127.0.0.1:3456` 即可畅爽体验。在此模式下直接加载 `src/` 下原生 ES Module 源码，修改任意代码保存即可刷新生效。

### 方式 2：直接双击打开（零命令、离线可用）
直接在操作系统文件管理器中双击打开 `index.html`。页面内置智能协议自适应机制，会自动载入 `dist/bundle.js`，避免本地 `file:///` 协议带来的跨域拦截。

---

## 🛠️ 构建与二次开发

若修改了 `src/` 源码并希望更新供离线单文件分发的打包产物：
```bash
node build.mjs
# 或
npm run build
```

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源，欢迎自由学习、分享与商业化使用。
