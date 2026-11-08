// 178款原创高辨识度 3D 精灵多维分类体系
export const SPRITE_CATEGORIES = [
    { key: 'all', name: '全部' },
    { key: '日常器物', name: '日常器物' },
    { key: '美味食光', name: '美味食光' },
    { key: '自然生灵', name: '自然生灵' },
    { key: '潮玩艺术', name: '潮玩艺术' },
    { key: '奇幻冒险', name: '奇幻冒险' },
    { key: '数智科技', name: '数智科技' },
    { key: '职业职能', name: '职业职能' }
];

export function getSpriteTaxonomy(item) {
    if (!item) return '日常器物';
    const c = item.category || '';
    if (c.includes('调研') || c.includes('学院') || c.includes('商务') || c.includes('守护') || c.includes('社交') || c.includes('职能')) return '职业职能';
    if (c.includes('料理') || c.includes('蔬果') || c.includes('美食') || c.includes('甜品') || c.includes('零食') || c.includes('烘焙') || c.includes('茶饮') || c.includes('轻食') || c.includes('鲜果') || c.includes('日式')) return '美味食光';
    if (c.includes('自然') || c.includes('海洋') || c.includes('森林') || c.includes('极地') || c.includes('冰雪') || c.includes('草原') || c.includes('花卉') || c.includes('天象') || c.includes('草木') || c.includes('叶片') || c.includes('山川') || c.includes('萌宠') || c.includes('云朵') || c.includes('晶石')) return '自然生灵';
    if (c.includes('奇幻') || c.includes('魔术') || c.includes('炼金') || c.includes('瑞兽') || c.includes('祥瑞') || c.includes('童话') || c.includes('暗夜') || c.includes('祈福') || c.includes('冒险') || c.includes('秘宝') || c.includes('奇旅') || c.includes('探索')) return '奇幻冒险';
    if (c.includes('科技') || c.includes('数智') || c.includes('科幻') || c.includes('星际') || c.includes('太空') || c.includes('宇宙') || c.includes('拓扑') || c.includes('几何') || c.includes('秩序') || c.includes('能量') || c.includes('声学') || c.includes('光学') || c.includes('铁道') || c.includes('航海') || c.includes('公路') || c.includes('航空')) return '数智科技';
    if (c.includes('潮玩') || c.includes('艺术') || c.includes('时尚') || c.includes('地标') || c.includes('建筑') || c.includes('音乐') || c.includes('庆典') || c.includes('节庆') || c.includes('文化') || c.includes('游戏') || c.includes('运动') || c.includes('娱乐') || c.includes('影视') || c.includes('荣耀')) return '潮玩艺术';
    return '日常器物';
}

// 178款原创高辨识度 3D 精灵图鉴数据定义
export const INITIAL_SPRITES = [
            // ================= 旗舰 #01：纯粹经典版「云宝 Nimbus」 =================
            {
                id: 1,
                groupTag: 'kept49',
                species: 'iconicCloud',
                name: '云宝 Nimbus',
                category: '旗舰云朵图标',
                desc: '黄金分割雕塑感叠层云峰 + 螺旋卷云冠 + 左上晴空四角星芒金徽，专为软件图标打造',
                paletteIdx: 0,
                eyeY: -0.05, eyeZ: 0.58, eyeGap: 0.21, eyeScale: 1.05, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // ================= 第一批 ~ 第三批保留精选 (#02 ~ #35，共34款) =================
            {
                id: 2,
                groupTag: 'kept49',
                species: 'origamiGlider',
                name: '折翼 Aero',
                category: '保留精选 · 器物',
                desc: '拥有圆润折纸棱角与翘起尾翼的破风纸飞机精灵，随时准备投递奇思妙想',
                paletteIdx: 2,
                eyeY: 0.02, eyeZ: 0.45, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 3,
                groupTag: 'kept49',
                species: 'mobiusLoop',
                name: '莫比 Mobius',
                category: '保留精选 · 拓扑',
                desc: '沿着三维无穷大轨迹扭结而成的莫比乌斯环精灵，象征永不停歇的创造力',
                paletteIdx: 7,
                eyeY: 0.22, eyeZ: 0.36, eyeGap: 0.16, eyeScale: 0.92, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 4,
                groupTag: 'kept49',
                species: 'periscopeSub',
                name: '潜望 Peris',
                category: '保留精选 · 器物',
                desc: '探出海面的圆润潜望镜精灵，弯曲的管身顶端镶嵌着好奇张望的金色镜头圈',
                paletteIdx: 3,
                eyeY: 0.25, eyeZ: 0.36, eyeGap: 0.17, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 5,
                groupTag: 'kept49',
                species: 'cactusBuddy',
                name: '仙人球 Cacti',
                category: '保留精选 · 自然',
                desc: '浑身圆润纵棱的沙漠多肉仙人掌精灵，高举双手打招呼，头顶盛开着小花冠',
                paletteIdx: 10,
                eyeY: 0.04, eyeZ: 0.52, eyeGap: 0.20, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 6,
                groupTag: 'kept49',
                species: 'hourglassTwin',
                name: '时砂 Chrono',
                category: '保留精选 · 器物',
                desc: '上下对称收腰的流线型沙漏精灵，腰间悬浮着缓缓公转的金色时间沙粒环',
                paletteIdx: 5,
                eyeY: 0.30, eyeZ: 0.44, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 7,
                groupTag: 'kept49',
                species: 'stepCube',
                name: '阶梯魔方 Cubix',
                category: '保留精选 · 几何',
                desc: '上半身呈35°错位旋转的建筑感双层魔方精灵，在秩序与灵动之间自由切换',
                paletteIdx: 6,
                eyeY: -0.20, eyeZ: 0.52, eyeGap: 0.21, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 8,
                groupTag: 'kept49',
                species: 'foldedFolio',
                name: '折页灵签 Folio',
                category: '保留精选 · 器物',
                desc: '右上角俏皮折起立体三角耳的圆角笔记精灵，象征随时记录的闪光灵感',
                paletteIdx: 3,
                eyeY: -0.06, eyeZ: 0.30, eyeGap: 0.22, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 9,
                groupTag: 'kept49',
                species: 'keyholeClock',
                name: '秘境锁孔 Keyo',
                category: '保留精选 · 器物',
                desc: '经典钥匙孔几何轮廓化身的守门小精灵，头顶插着一枚黄金发条旋钮柄',
                paletteIdx: 4,
                eyeY: 0.24, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 10,
                groupTag: 'kept49',
                species: 'boomerangWing',
                name: '疾风飞去来 Boomer',
                category: '保留精选 · 几何',
                desc: 'V型流线折角回旋镖精灵，兼具动感破风姿态与过目不忘的极简几何识别度',
                paletteIdx: 2,
                eyeY: 0.12, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 11,
                groupTag: 'kept49',
                species: 'kettlebellBot',
                name: '元气提手 Ketti',
                category: '保留精选 · 器物',
                desc: '自带一体式圆弧提手的小巧能量壶精灵，圆润敦实、力量感十足',
                paletteIdx: 8,
                eyeY: -0.14, eyeZ: 0.54, eyeGap: 0.21, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 12,
                groupTag: 'kept49',
                species: 'magnetU',
                name: '磁力蹄铁 Magneto',
                category: '保留精选 · 器物',
                desc: '饱满U型马蹄铁磁铁精灵，双端带有撞色磁极帽与悬浮跳跃的磁感电火花',
                paletteIdx: 1,
                eyeY: -0.24, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 13,
                groupTag: 'kept49',
                species: 'lightBulb',
                name: '灵感灯泡 Edison',
                category: '保留精选 · 器物',
                desc: '圆润饱满的球泡身躯搭配底部金属螺纹底座，头顶闪耀着灵感星芒',
                paletteIdx: 3,
                eyeY: 0.12, eyeZ: 0.54, eyeGap: 0.20, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 14,
                groupTag: 'kept49',
                species: 'retroTV',
                name: '复古电视 RetroTV',
                category: '保留精选 · 器物',
                desc: '自带圆角屏幕框的复古显像管电视精灵，头顶竖着可爱的V型双球天线',
                paletteIdx: 5,
                eyeY: -0.06, eyeZ: 0.44, eyeGap: 0.22, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 15,
                groupTag: 'kept49',
                species: 'trefoilKnot',
                name: '扭结甜圈 Pretzel',
                category: '保留精选 · 拓扑',
                desc: '由连续圆管在三维空间优雅盘绕而成的三叶扭结精灵，兼具数学秩序与软萌感',
                paletteIdx: 7,
                eyeY: -0.08, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 16,
                groupTag: 'kept49',
                species: 'umbrellaDome',
                name: '晴雨弯伞 Brolly',
                category: '保留精选 · 器物',
                desc: '饱满圆拱伞盖下探出J型精致弯钩伞柄的小雨伞精灵，伞尖缀着晶莹圆珠',
                paletteIdx: 9,
                eyeY: 0.10, eyeZ: 0.54, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 17,
                groupTag: 'kept49',
                species: 'toastSlice',
                name: '黄油吐司 Toasty',
                category: '保留精选 · 生活',
                desc: '双肩微鼓的厚切黄金烤吐司精灵，额头正中贴着一块俏皮融化的方形黄油片',
                paletteIdx: 3,
                eyeY: -0.10, eyeZ: 0.34, eyeGap: 0.22, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 18,
                groupTag: 'kept49',
                species: 'cameraSnap',
                name: '咔嚓快门 Snappy',
                category: '保留精选 · 器物',
                desc: '配备大口径金色镜头环与顶部快门键的圆角相机精灵，双瞳正从镜头中央凝视世界',
                paletteIdx: 8,
                eyeY: -0.04, eyeZ: 0.48, eyeGap: 0.18, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 19,
                groupTag: 'kept49',
                species: 'lollipopSwirl',
                name: '旋涡甜心 Swirly',
                category: '保留精选 · 生活',
                desc: '由立体阿基米德螺旋线盘绕而成的波普棒棒糖精灵，斜插着圆润糖棍',
                paletteIdx: 9,
                eyeY: 0.06, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 20,
                groupTag: 'kept49',
                species: 'seaAnchor',
                name: '远航船锚 Anchor',
                category: '保留精选 · 器物',
                desc: '拥有微笑上扬月牙锚臂与顶部金环的圆润船锚精灵，稳重可靠又不失俏皮',
                paletteIdx: 5,
                eyeY: -0.22, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 21,
                groupTag: 'kept49',
                species: 'fourLeafClover',
                name: '四叶幸运 Clover',
                category: '保留精选 · 自然',
                desc: '四片饱满立体心形叶片组成的四叶草精灵，叶间点缀着一颗金色幸运晨露',
                paletteIdx: 10,
                eyeY: 0.02, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 22,
                groupTag: 'kept49',
                species: 'crownJewel',
                name: '三尖皇冠 Rex',
                category: '保留精选 · 徽章',
                desc: '拥有三座挺拔冠峰与圆润顶珠的皇家金冠精灵，轮廓庄重又呆萌',
                paletteIdx: 3,
                eyeY: -0.14, eyeZ: 0.36, eyeGap: 0.21, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 23,
                groupTag: 'kept49',
                species: 'musicNote',
                name: '八分音符 Melody',
                category: '保留精选 · 艺术',
                desc: '饱满微倾的音符豆脑袋连着挺拔符干与飘逸符尾，自带欢快律动剪影',
                paletteIdx: 8,
                eyeY: -0.24, eyeZ: 0.38, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 24,
                groupTag: 'kept49',
                species: 'pinwheelSpin',
                name: '四叶风车 Breezy',
                category: '保留精选 · 几何',
                desc: '四片弧形折叶围绕金色轴心旋转的童年纸风车精灵，迎风即转',
                paletteIdx: 0,
                eyeY: -0.02, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 25,
                groupTag: 'kept49',
                species: 'potionFlask',
                name: '炼金魔药 Elixir',
                category: '保留精选 · 奇幻',
                desc: '经典大肚锥形烧瓶身躯搭配细长瓶颈与软木塞顶帽，摇晃着奇幻灵感药水',
                paletteIdx: 7,
                eyeY: -0.22, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 26,
                groupTag: 'kept49',
                species: 'bowtieRibbon',
                name: '绅士领结 Ribbon',
                category: '保留精选 · 时尚',
                desc: '左右对称舒展的饱满蝴蝶结双翼搭配下方垂坠飘带，优雅又俏皮',
                paletteIdx: 1,
                eyeY: 0.04, eyeZ: 0.38, eyeGap: 0.17, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 27,
                groupTag: 'kept49',
                species: 'propellerCap',
                name: '竹蜻蜓帽 Copter',
                category: '保留精选 · 奇趣',
                desc: '圆润飞行员半盔顶端架着一对宽大双叶螺旋桨，随时准备升空翱翔',
                paletteIdx: 0,
                eyeY: -0.12, eyeZ: 0.54, eyeGap: 0.20, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 28,
                groupTag: 'kept49',
                species: 'foldingFan',
                name: '清风折扇 Sensu',
                category: '保留精选 · 雅物',
                desc: '120°宽阔展开的扇形轮廓搭配底部扇钉流苏，东方韵味十足',
                paletteIdx: 9,
                eyeY: 0.08, eyeZ: 0.32, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 29,
                groupTag: 'kept49',
                species: 'artPalette',
                name: '绘梦调色盘 Muse',
                category: '保留精选 · 艺术',
                desc: '流线云肾形画板轮廓，右下带拇指穿孔，边缘点缀三颗立体颜料豆',
                paletteIdx: 7,
                eyeY: -0.08, eyeZ: 0.32, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 30,
                groupTag: 'kept49',
                species: 'knightShield',
                name: '圣盾徽章 Aegis',
                category: '保留精选 · 徽章',
                desc: '饱满鸢尾盾牌轮廓搭配左上星芒金徽，安全感与守护力拉满',
                paletteIdx: 6,
                eyeY: 0.04, eyeZ: 0.34, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 31,
                groupTag: 'kept49',
                species: 'gramophoneHorn',
                name: '留声喇叭 Phono',
                category: '保留精选 · 复古',
                desc: '牵牛花般大口径绽放的复古留声机号角精灵，传递黄金年代的声浪',
                paletteIdx: 2,
                eyeY: -0.28, eyeZ: 0.42, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 32,
                groupTag: 'kept49',
                species: 'ufoSaucer',
                name: '星际飞碟 Roswell',
                category: '保留精选 · 科幻',
                desc: '宽边圆盘碟身顶着饱满观察舱罩与底部三颗起落架珠，外星萌客降临',
                paletteIdx: 4,
                eyeY: 0.16, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 33,
                groupTag: 'kept49',
                species: 'cupcakeCherry',
                name: '樱桃纸杯 Muffin',
                category: '保留精选 · 甜品',
                desc: '梯形烘焙纸托上叠着绵密奶油云顶与一颗鲜亮红樱桃，甜度爆表',
                paletteIdx: 9,
                eyeY: -0.22, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 34,
                groupTag: 'kept49',
                species: 'trafficCone',
                name: '路障卫士 Pylon',
                category: '保留精选 · 秩序',
                desc: '敦实方底座上立着圆润锥筒与撞色反光腰带，时刻坚守秩序岗位',
                paletteIdx: 2,
                eyeY: -0.06, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 35,
                groupTag: 'kept49',
                species: 'croissantRoll',
                name: '牛角可颂 Brioche',
                category: '保留精选 · 烘焙',
                desc: '层叠饱满、两端弯弯收尖的法式牛角包精灵，散发出刚出炉的暖意',
                paletteIdx: 2,
                eyeY: 0.10, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // ================= 第四批保留精选 (14款：原 38,40,42,43,45,49,50,51,52,53,54,58,59,60) =================
            {
                id: 36,
                groupTag: 'kept49',
                species: 'roleGradCap',
                name: '学士方帽 Scholar',
                category: '保留精选 · 学院',
                desc: '圆润饱满的学者脑袋顶着倾斜的立体方形学士帽，帽檐垂挂黄金流苏穗',
                paletteIdx: 0,
                eyeY: -0.14, eyeZ: 0.52, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 37,
                groupTag: 'kept49',
                species: 'roleBarChart',
                name: '跃升数图 Metric',
                category: '保留精选 · 数智',
                desc: '由三根阶梯式递增的圆润柱状图有机融合而成，上方横跨破空上扬的黄金折线箭头',
                paletteIdx: 4,
                eyeY: -0.14, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 38,
                groupTag: 'kept49',
                species: 'roleStudioMic',
                name: '电容麦克 Caster',
                category: '保留精选 · 声学',
                desc: '饱满胶囊形专业录音室麦克风主体，托举在黄金U型金属支架与圆盘底座之上',
                paletteIdx: 1,
                eyeY: 0.14, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 39,
                groupTag: 'kept49',
                species: 'roleClapperboard',
                name: '场记拍板 Director',
                category: '保留精选 · 影视',
                desc: '圆角电影场记板机身，顶部黄金斜纹拍板条呈28°俏皮张开姿态',
                paletteIdx: 2,
                eyeY: -0.14, eyeZ: 0.34, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 40,
                groupTag: 'kept49',
                species: 'roleMedCross',
                name: '仁心十字 Medic',
                category: '保留精选 · 守护',
                desc: '大圆角深倒角的对称立体十字架精灵，左上镶嵌守护生命律动的黄金星芒',
                paletteIdx: 4,
                eyeY: -0.02, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 41,
                groupTag: 'kept49',
                species: 'roleShopBag',
                name: '潮玩提袋 Merchant',
                category: '保留精选 · 生活',
                desc: '上窄下宽的圆润精品手提袋轮廓，顶端挽着黄金拱形提手与斜挂吊牌',
                paletteIdx: 9,
                eyeY: -0.12, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 42,
                groupTag: 'kept49',
                species: 'roleBriefcase',
                name: '领航公文 Founder',
                category: '保留精选 · 商务',
                desc: '稳重大气的圆角公文包精灵，配备顶部拱形握把与正面两枚黄金锁扣',
                paletteIdx: 6,
                eyeY: -0.10, eyeZ: 0.36, eyeGap: 0.22, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 43,
                groupTag: 'kept49',
                species: 'roleChatBubble',
                name: '共鸣气泡 Connector',
                category: '保留精选 · 社交',
                desc: '左下带俏皮尖角尾的圆润对话气泡主体，右上叠着一枚黄金回应小气泡',
                paletteIdx: 10,
                eyeY: 0.02, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 44,
                groupTag: 'kept49',
                species: 'roleGamepad',
                name: '次元手柄 Player',
                category: '保留精选 · 娱乐',
                desc: '经典双握把人体工学游戏手柄剪影，双肩点缀黄金十字键与按键豆',
                paletteIdx: 7,
                eyeY: 0.08, eyeZ: 0.34, eyeGap: 0.21, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 45,
                groupTag: 'kept49',
                species: 'roleChefHat',
                name: '云朵厨帽 Culinary',
                category: '保留精选 · 料理',
                desc: '四瓣蓬松饱满的云朵状高顶主厨帽，下方束着贴合的黄金帽箍带',
                paletteIdx: 2,
                eyeY: -0.22, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 46,
                groupTag: 'kept49',
                species: 'roleAIChip',
                name: '算力芯片 Neural',
                category: '保留精选 · 科技',
                desc: '圆角方形硅基芯片主体，四边整齐探出12枚黄金算力引脚与顶部智能星芒',
                paletteIdx: 0,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 47,
                groupTag: 'kept49',
                species: 'roleTrophyCup',
                name: '荣耀奖杯 Champion',
                category: '保留精选 · 荣耀',
                desc: '饱满圣杯式奖杯主体，两侧挽着对称黄金C型双耳把，下承圆润底座',
                paletteIdx: 3,
                eyeY: 0.08, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 48,
                groupTag: 'kept49',
                species: 'roleCoatHanger',
                name: '灵感衣架 Stylist',
                category: '保留精选 · 时尚',
                desc: '宽肩圆润三角衣架轮廓，顶端立着一枚优雅弯曲的天鹅颈黄金问号钩',
                paletteIdx: 8,
                eyeY: -0.14, eyeZ: 0.34, eyeGap: 0.21, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 49,
                groupTag: 'kept49',
                species: 'roleRingedPlanet',
                name: '斜杠行星 Explorer',
                category: '保留精选 · 星际',
                desc: '饱满星球身躯外环绕着360°倾斜黄金星环与伴生小卫星',
                paletteIdx: 7,
                eyeY: 0.04, eyeZ: 0.50, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 全新重新设计 10 款：专为【首屏 5×2 职业与身份调研弹窗】打造的 10 大行业代表精灵 (#50 ~ #59)
            // =========================================================================
            {
                id: 50,
                surveyOrder: 1,
                groupTag: 'survey10',
                species: 'surveyStudentBook',
                name: '展翼书卷 Bookie',
                roleTitle: '1. 学生',
                roleSub: '高校学子 · 在读深造 · 校园社团',
                category: '首屏调研 01 · 学生',
                desc: '代表【1. 学生】：如双翼般展开的立体精装书卷精灵，底部垂下黄金书签丝带，左上悬浮求知星芒',
                paletteIdx: 0,
                eyeY: -0.04, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none',
                defaultChecked: true
            },
            {
                id: 51,
                surveyOrder: 2,
                groupTag: 'survey10',
                species: 'surveyITBrowser',
                name: '极客笔电 GeekBook',
                roleTitle: '2. IT / 互联网',
                roleSub: '软件研发 · 技术架构 · 人工智能',
                category: '首屏调研 02 · IT/互联网',
                desc: '代表【2. IT / 互联网】：展开式立体笔记本电脑（显示屏+前伸键盘托），左上悬浮醒目的 </> 黄金代码尖括号徽章',
                paletteIdx: 6,
                eyeY: 0.08, eyeZ: 0.24, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none',
                defaultChecked: true
            },
            {
                id: 52,
                surveyOrder: 3,
                groupTag: 'survey10',
                species: 'surveyProdDesign',
                name: '灵感钢笔 PenNib',
                roleTitle: '3. 产品 / 设计 / 运营',
                roleSub: '产品经理 · UI/UX视觉 · 用户运营',
                category: '首屏调研 03 · 产品/设计/运营',
                desc: '代表【3. 产品 / 设计 / 运营】：经典矢量钢笔尖轮廓（带笔尖圆气孔与金属笔箍），顶部横跨黄金贝塞尔曲线控制柄与锚点',
                paletteIdx: 7,
                eyeY: -0.08, eyeZ: 0.34, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 53,
                surveyOrder: 4,
                groupTag: 'survey10',
                species: 'surveyMarketingHorn',
                name: '声浪扩音 Megaphone',
                roleTitle: '4. 市场 / 销售 / 商务',
                roleSub: '品牌公关 · 销售拓展 · 渠道增长',
                category: '首屏调研 04 · 市场/销售/商务',
                desc: '代表【4. 市场 / 销售 / 商务】：昂扬上翘的大口径扩音号角精灵，前方激荡出多层黄金增长声浪弧',
                paletteIdx: 1,
                eyeY: 0.04, eyeZ: 0.42, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 54,
                surveyOrder: 5,
                groupTag: 'survey10',
                species: 'surveyEduScope',
                name: '量子烧瓶 ScienceFlask',
                roleTitle: '5. 教育 / 科研',
                roleSub: '教师讲师 · 学术研究 · 实验室探索',
                category: '首屏调研 05 · 教育/科研',
                desc: '代表【5. 教育 / 科研】：宽底收颈的经典实验锥形烧瓶，腰间环绕双轨交叉的3D黄金原子电子星环与升腾分子球',
                paletteIdx: 5,
                eyeY: -0.18, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 55,
                surveyOrder: 6,
                groupTag: 'survey10',
                species: 'surveyMediaCreative',
                name: '流光播客 PlayMuse',
                roleTitle: '6. 媒体 / 内容 / 创意',
                roleSub: '自媒体博主 · 影视剪辑 · 广告文案',
                category: '首屏调研 06 · 媒体/内容/创意',
                desc: '代表【6. 媒体 / 内容 / 创意】：大圆角立体播放键三角棱镜（▶），头戴黄金艺术贝雷冠与闪烁星徽',
                paletteIdx: 8,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 56,
                surveyOrder: 7,
                groupTag: 'survey10',
                species: 'surveyFinLegal',
                name: '天平金币 CoinScale',
                roleTitle: '7. 金融 / 财务 / 法务',
                roleSub: '投融资 · 财税审计 · 律师合规',
                category: '首屏调研 07 · 金融/财务/法务',
                desc: '代表【7. 金融 / 财务 / 法务】：镶嵌立体 ¥ 货币金徽的浮雕宽边金币，顶端高耸对称黄金公正天平与双悬空秤盘',
                paletteIdx: 3,
                eyeY: -0.18, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 57,
                surveyOrder: 8,
                groupTag: 'survey10',
                species: 'surveyCorpManage',
                name: '高管领带包 ExecCase',
                roleTitle: '8. 企业职能 / 管理',
                roleSub: '高管团队 · HR人力 · 行政与PMO',
                category: '首屏调研 08 · 企业职能/管理',
                desc: '代表【8. 企业职能 / 管理】：带拱形提手与双金锁扣的圆角高管公文包，胸前系着立体利落的黄金商务领带',
                paletteIdx: 4,
                eyeY: 0.06, eyeZ: 0.36, eyeGap: 0.21, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 58,
                surveyOrder: 9,
                groupTag: 'survey10',
                species: 'surveyStartupRocket',
                name: '破空火箭 LaunchPad',
                roleTitle: '9. 自由职业 / 创业者',
                roleSub: '独立开发者 · 创始人 · 数字游民',
                category: '首屏调研 09 · 自由职业/创业者',
                desc: '代表【9. 自由职业 / 创业者】：蓄势升空的流线型胖肚小火箭，配备黄金鼻锥尖顶、双侧破风尾翼与推进火苗',
                paletteIdx: 2,
                eyeY: 0.04, eyeZ: 0.44, eyeGap: 0.18, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 59,
                surveyOrder: 10,
                groupTag: 'survey10',
                species: 'surveyOtherOmni',
                name: '万象四宫格 BentoMore',
                roleTitle: '10. 其他行业与身份',
                roleSub: '医疗 · 政府 · 服务 · 制造 · 探索中',
                category: '首屏调研 10 · 其他多元行业',
                desc: '代表【10. 其他（医疗、政府、服务业、制造、待业等）】：经典“更多分类” ⊞ 四宫格造型，右上角跃出45°旋转黄金方块与 ••• 更多圆点',
                paletteIdx: 10,
                eyeY: -0.16, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 精修 30 款：【天然蔬果 (15款) & 匠心料理 (15款)】高辨识度美食精灵 (#60 ~ #89)
            // =========================================================================
            {
                id: 60,
                groupTag: 'food30',
                species: 'foodStrawberry',
                name: '甜心草莓 Berry',
                category: '天然蔬果 · 浆果',
                desc: '上宽下尖的饱满心形草莓果身，头戴五角星叶萼冠与微弯果蒂，双颊点缀立体草莓籽',
                paletteIdx: 1,
                eyeY: -0.06, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 61,
                groupTag: 'food30',
                species: 'foodPineapple',
                name: '黄金凤梨 Ananas',
                category: '天然蔬果 · 热带',
                desc: '圆润饱满的菱格纹菠萝果身，头顶舒展着双层高耸的热带凤梨剑叶冠',
                paletteIdx: 3,
                eyeY: -0.16, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 62,
                groupTag: 'food30',
                species: 'foodTwinCherry',
                name: '双生樱桃 Sakura',
                category: '天然蔬果 · 浆果',
                desc: '一前一后亲密依偎的双生红樱桃，头顶高高挽起交汇的黄金果柄与新叶',
                paletteIdx: 9,
                eyeY: -0.22, eyeZ: 0.50, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 63,
                groupTag: 'food30',
                species: 'foodAcorn',
                name: '森林橡果 Acorn',
                category: '天然蔬果 · 坚果',
                desc: '底部微尖的圆润橡果身躯，头戴宽檐贝雷帽状壳斗与小巧枝蒂',
                paletteIdx: 2,
                eyeY: -0.18, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 64,
                groupTag: 'food30',
                species: 'foodBanana',
                name: '剥皮芭娜 Banana',
                category: '天然蔬果 · 热带',
                desc: '弯月弧形香蕉果肉从底座探出，腰间向三面优雅翻卷垂下宽厚的黄金香蕉皮瓣',
                paletteIdx: 3,
                eyeY: 0.14, eyeZ: 0.36, eyeGap: 0.17, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 65,
                groupTag: 'food30',
                species: 'foodWatermelon',
                name: '脆甜西瓜 Suika',
                category: '天然蔬果 · 瓜果',
                desc: '经典扇形大西瓜切片，底边严丝合缝包裹着厚实圆弧瓜皮托，表面点缀5颗水滴黑籽与咬口',
                paletteIdx: 1,
                eyeY: -0.04, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 66,
                groupTag: 'food30',
                species: 'foodAvocado',
                name: '鲜切牛油果 Avo',
                category: '天然蔬果 · 轻食',
                desc: '对半切开的精雕牛油果：外层深墨绿糙面厚果皮，内嵌细腻奶嫩果肉与中央浑圆高耸的焦糖光感大果核',
                paletteIdx: 10,
                eyeY: 0.22, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 67,
                groupTag: 'food30',
                species: 'foodMushroom',
                name: '波点伞菇 Kinoko',
                category: '天然蔬果 · 菌菇',
                desc: '宽大悬挑的红伞菌盖（表面镶嵌饱满凸起的大波点球）搭配下方内收圆润的撞色粗菌柄',
                paletteIdx: 1,
                eyeY: 0.08, eyeZ: 0.56, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 68,
                groupTag: 'food30',
                species: 'foodKiwi',
                name: '清甜奇异果 Kiwi',
                category: '天然蔬果 · 鲜果',
                desc: '对半切开的饱满猕猴桃：外层棕褐微毛果皮壳托，内部嫩绿多汁果肉，中央一圈环绕白芯的细小芝麻籽',
                paletteIdx: 0,
                eyeY: 0.18, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 69,
                groupTag: 'food30',
                species: 'foodEggplant',
                name: '紫气茄宝 Nasu',
                category: '天然蔬果 · 蔬食',
                desc: '上收下丰、微弯俏皮的紫茄子精灵，头顶戴着五爪星形茄萼帽与弯钩柄',
                paletteIdx: 7,
                eyeY: -0.14, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 70,
                groupTag: 'food30',
                species: 'foodCarrot',
                name: '拔地萝卜 Ninjin',
                category: '天然蔬果 · 根茎',
                desc: '圆润倒锥形胡萝卜身躯，头顶旺盛簇拥着三瓣翠绿蓬松的萝卜缨叶',
                paletteIdx: 2,
                eyeY: 0.04, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 71,
                groupTag: 'food30',
                species: 'foodLemon',
                name: '元气柠檬 Citron',
                category: '天然蔬果 · 柑橘',
                desc: '两端带有标志性凸起小尖嘴的微倾鲜柠檬，顶端萌发两片清香绿叶',
                paletteIdx: 3,
                eyeY: -0.04, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 72,
                groupTag: 'food30',
                species: 'foodPistachio',
                name: '开心果果 Nutty',
                category: '天然蔬果 · 坚果',
                desc: '翠绿饱满的开心果仁从左右两侧微张开的坚果硬壳中探出脑袋，自带微笑气场',
                paletteIdx: 10,
                eyeY: 0.06, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 73,
                groupTag: 'food30',
                species: 'foodPeaPod',
                name: '三粒豌豆 Edamame',
                category: '天然蔬果 · 豆类',
                desc: '弯如新月小船的饱满青豆荚，舱内整整齐齐并排坐着三颗圆润小豆珠',
                paletteIdx: 4,
                eyeY: -0.14, eyeZ: 0.38, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 74,
                groupTag: 'food30',
                species: 'foodChili',
                name: '火焰辣椒 Jalapeno',
                category: '天然蔬果 · 辛香',
                desc: '尾端动感上翘的J型红辣椒剪影，头戴黄金蒂帽并迸发出热辣星火',
                paletteIdx: 1,
                eyeY: 0.06, eyeZ: 0.38, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 75,
                groupTag: 'food30',
                species: 'foodOnigiri',
                name: '海苔饭团 Onigiri',
                category: '匠心料理 · 日式',
                desc: '圆润饱满的经典三角饭团，底部正中裹着挺括的海苔片，头顶缀着红梅干',
                paletteIdx: 0,
                eyeY: 0.08, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 76,
                groupTag: 'food30',
                species: 'foodPopsicle',
                name: '咬口冰棍 IceBar',
                category: '匠心料理 · 冰品',
                desc: '右上角被俏皮咬出一口圆弧缺口的夏日冰棍，底部插着圆润木雪糕棒',
                paletteIdx: 5,
                eyeY: -0.02, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 77,
                groupTag: 'food30',
                species: 'foodDonut',
                name: '糖霜甜圈 Donut',
                category: '匠心料理 · 烘焙',
                desc: '饱满圆环甜甜圈，上半圈覆盖厚实糖霜淋面与彩色糖针豆',
                paletteIdx: 8,
                eyeY: -0.24, eyeZ: 0.38, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 78,
                groupTag: 'food30',
                species: 'foodSwissCheese',
                name: '瑞士奶酪 Emmental',
                category: '匠心料理 · 乳酪',
                desc: '经典三角楔形大孔奶酪块，表面点缀着错落有致的立体呼吸气孔球',
                paletteIdx: 3,
                eyeY: -0.10, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 79,
                groupTag: 'food30',
                species: 'foodSunnyEgg',
                name: '太阳煎蛋 Tamago',
                category: '匠心料理 · 朝食',
                desc: '不规则云朵波浪边蛋白底座，左上方高高鼓起一颗圆润饱满的黄金溏心蛋黄',
                paletteIdx: 2,
                eyeY: -0.14, eyeZ: 0.32, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 80,
                groupTag: 'food30',
                species: 'foodIceCreamCone',
                name: '旋风甜筒 Gelato',
                category: '匠心料理 · 冰品',
                desc: '香脆锥形蛋筒底座托举着三层盘旋而上的绵密冰淇淋雪顶与翘曲尖角',
                paletteIdx: 9,
                eyeY: 0.08, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 81,
                groupTag: 'food30',
                species: 'foodNigiriSushi',
                name: '手握寿司 Nigiri',
                category: '匠心料理 · 和食',
                desc: '饱满椭球醋饭团上覆着一片微弯鲜虾仁，右侧俏皮翘起分叉虾尾与海苔腰带',
                paletteIdx: 1,
                eyeY: -0.18, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 82,
                groupTag: 'food30',
                species: 'foodSteamedBao',
                name: '灌汤小笼包 Baozi',
                category: '匠心料理 · 中点',
                desc: '白胖浑圆的灌汤包身躯，头顶汇聚8道立体手工捏褶与黄金收口顶珠',
                paletteIdx: 0,
                eyeY: -0.08, eyeZ: 0.52, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 83,
                groupTag: 'food30',
                species: 'foodRamenBowl',
                name: '一乐拉面 Ramen',
                category: '匠心料理 · 面食',
                desc: '饱满大碗公盛着高高隆起的面条山，碗口斜架着黄金双筷与鸣人卷鱼板',
                paletteIdx: 1,
                eyeY: -0.14, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 84,
                groupTag: 'food30',
                species: 'foodBobaTea',
                name: '波霸奶茶 Boba',
                category: '匠心料理 · 茶饮',
                desc: '配有宽边撞色封口圈与奶盖圆顶的奶茶杯，斜插大口径粗吸管，杯底排布5颗大号黑糖波霸珍珠',
                paletteIdx: 7,
                eyeY: -0.04, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 85,
                groupTag: 'food30',
                species: 'foodCaramelPudding',
                name: '焦糖布丁 Purin',
                category: '匠心料理 · 甜品',
                desc: 'Q弹倒梯形鸡蛋布丁身躯，头顶覆盖着波浪流淌的焦糖淋面与鲜红樱桃',
                paletteIdx: 3,
                eyeY: -0.12, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 86,
                groupTag: 'food30',
                species: 'foodMacaron',
                name: '法式马卡龙 Macaron',
                category: '匠心料理 · 法甜',
                desc: '上下两片饱满圆拱杏仁饼盖，中间夹着一圈厚实撞色的少女心奶油蕾丝层',
                paletteIdx: 8,
                eyeY: 0.20, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 87,
                groupTag: 'food30',
                species: 'foodPizzaSlice',
                name: '芝士披萨 Pizza',
                category: '匠心料理 · 西式',
                desc: '经典三角披萨切片，顶端挽着鼓鼓的黄金烤饼边，表面贴着三片香肠圆片',
                paletteIdx: 2,
                eyeY: -0.12, eyeZ: 0.34, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 88,
                groupTag: 'food30',
                species: 'foodHotdog',
                name: '夹心热狗 Hotdog',
                category: '匠心料理 · 美式',
                desc: '松软长圆面包托抱着两端探出头的弯弯烤肠，表面挤着波浪黄金芥末酱',
                paletteIdx: 1,
                eyeY: -0.16, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 89,
                groupTag: 'food30',
                species: 'foodFortuneCookie',
                name: '幸运签语饼 Fortune',
                category: '匠心料理 · 奇趣',
                desc: '经典折弯元宝状脆饼造型，右上角俏皮探出一张印着好运的黄金签语纸条',
                paletteIdx: 3,
                eyeY: 0.08, eyeZ: 0.42, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第五批钦点保留的 9 款精灵（原 96, 100, 102, 104, 106, 113, 114, 119, 120 -> 现编号 #90 ~ #98）
            // =========================================================================
            {
                id: 90,
                groupTag: 'kept49',
                species: 'botCyberDog',
                name: '机械萌犬 Rover',
                category: '保留精选 · 萌宠',
                desc: '垂着两只圆润折耳、头顶黄金骨头天线的忠实小狗精灵（原#96保留）',
                paletteIdx: 2,
                eyeY: -0.04, eyeZ: 0.48, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 91,
                groupTag: 'kept49',
                species: 'botArcadeGhost',
                name: '波浪小幽灵 Boo',
                category: '保留精选 · 奇幻',
                desc: '下摆带有四瓣波浪裙裾的经典小幽灵剪影，头顶悬浮黄金光环（原#100保留）',
                paletteIdx: 7,
                eyeY: 0.08, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 92,
                groupTag: 'kept49',
                species: 'botAnvilForge',
                name: '锻造铁砧 Forge',
                category: '保留精选 · 器物',
                desc: '硬朗的独角铁匠铁砧身躯，上方悬停一柄蓄势锻造的黄金铁锤（原#102保留）',
                paletteIdx: 0,
                eyeY: -0.14, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 93,
                groupTag: 'kept49',
                species: 'botAstroHelmet',
                name: '星航头盔 Astro',
                category: '保留精选 · 太空',
                desc: '配有宽幅黄金全景面罩框与侧翼通讯天线的宇航员头盔精灵（原#104保留）',
                paletteIdx: 0,
                eyeY: 0.02, eyeZ: 0.52, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 94,
                groupTag: 'kept49',
                species: 'botWizardHat',
                name: '秘法巫师帽 Merlin',
                category: '保留精选 · 奇幻',
                desc: '头戴宽檐歪尖角魔法巫师帽与星芒帽扣的秘法精灵（原#106保留）',
                paletteIdx: 7,
                eyeY: -0.22, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 95,
                groupTag: 'kept49',
                species: 'botGlobeStand',
                name: '经纬地球仪 Atlas',
                category: '保留精选 · 器物',
                desc: '倾斜旋转的蔚蓝地球仪，外架C型黄金子午线刻度环与底座（原#113保留）',
                paletteIdx: 0,
                eyeY: 0.06, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 96,
                groupTag: 'kept49',
                species: 'botPillCapsule',
                name: '元气胶囊 Capsule',
                category: '保留精选 · 生活',
                desc: '微倾撞色拼接的圆润胶囊精灵，左上伴生治愈四角星芒（原#114保留）',
                paletteIdx: 10,
                eyeY: 0.08, eyeZ: 0.38, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 97,
                groupTag: 'kept49',
                species: 'botLightPrism',
                name: '分光三棱镜 Prism',
                category: '保留精选 · 光学',
                desc: '挺拔等边三角分光棱镜，右侧折射出三道散射黄金光束（原#119保留）',
                paletteIdx: 5,
                eyeY: -0.08, eyeZ: 0.38, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 98,
                groupTag: 'kept49',
                species: 'botLighthouse',
                name: '领航灯塔 Beacon',
                category: '保留精选 · 建筑',
                desc: '上收下宽的航海灯塔身躯，顶端冠以黄金观景台与双侧探照光束（原#120保留）',
                paletteIdx: 1,
                eyeY: -0.18, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第六批筛选保留的 25 款精灵（剔除原 101, 102, 109, 111, 115, 124, 129 后保留 -> 现编号 #99 ~ #123）
            // =========================================================================
            {
                id: 99,
                groupTag: 'kept49',
                species: 'iconWhale',
                name: '喷水小鲸 Whaley',
                category: '保留精选 · 海洋',
                desc: '圆滚滚的蓝鲸身躯搭配左侧高高翘起的分叉鲸尾，头顶喷涌出黄金水花喷泉',
                paletteIdx: 0,
                eyeY: -0.06, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 100,
                groupTag: 'kept49',
                species: 'iconBunny',
                name: '长耳萌兔 Bunny',
                category: '保留精选 · 森林',
                desc: '白胖糯米团子般的兔兔脑袋，头顶竖着两只修长饱满的兔耳朵',
                paletteIdx: 8,
                eyeY: -0.16, eyeZ: 0.48, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 101,
                groupTag: 'kept49',
                species: 'iconDeer',
                name: '森系小鹿 Bambi',
                category: '保留精选 · 森林',
                desc: '温顺圆润的小鹿脑袋，头顶舒展着一对分叉的黄金鹿角与向两侧张开的鹿耳',
                paletteIdx: 2,
                eyeY: -0.14, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 102,
                groupTag: 'kept49',
                species: 'iconPenguin',
                name: '呆萌企鹅 Pingu',
                category: '保留精选 · 极地',
                desc: '憨态可掬的梨形小企鹅身躯，两侧拍打着小翅膀，搭配黄金扁嘴与脚蹼',
                paletteIdx: 6,
                eyeY: 0.14, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 103,
                groupTag: 'kept49',
                species: 'iconSnowman',
                name: '礼帽雪人 Frosty',
                category: '保留精选 · 冰雪',
                desc: '一大一小双球叠起的经典冬日雪人，斜戴着黄金高顶礼帽',
                paletteIdx: 0,
                eyeY: 0.22, eyeZ: 0.44, eyeGap: 0.18, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 104,
                groupTag: 'kept49',
                species: 'iconDevil',
                name: '弯角小恶魔 Diablo',
                category: '保留精选 · 奇幻',
                desc: '圆润饱满的小恶魔脑袋，头顶长着一对霸气上扬的黄金牛角与背后的蝙蝠小翼',
                paletteIdx: 6,
                eyeY: -0.08, eyeZ: 0.50, eyeGap: 0.21, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 105,
                groupTag: 'kept49',
                species: 'iconUnicorn',
                name: '独角天马 Uni',
                category: '保留精选 · 奇幻',
                desc: '额前高高耸立着螺旋黄金独角与飘逸侧鬃毛的梦幻独角兽精灵',
                paletteIdx: 7,
                eyeY: -0.12, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 106,
                groupTag: 'kept49',
                species: 'iconElephant',
                name: '招风耳小象 Dumbo',
                category: '保留精选 · 草原',
                desc: '左右两侧扑扇着两只宽大圆润招风耳的小象精灵，头顶戴着马戏团黄金小帽',
                paletteIdx: 5,
                eyeY: -0.04, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 107,
                groupTag: 'kept49',
                species: 'iconOctopus',
                name: '八爪章鱼宝 Takoyaki',
                category: '保留精选 · 海洋',
                desc: '圆鼓鼓的大脑袋下方环绕着一圈卷曲的八爪触手裙边，头顶系着黄金水手圈',
                paletteIdx: 1,
                eyeY: 0.06, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 108,
                groupTag: 'kept49',
                species: 'iconButterfly',
                name: '展翅彩蝶 Papillon',
                category: '保留精选 · 自然',
                desc: '上大下小四片对称圆润蝶翼优雅舒展，顶端探出两根卷曲的黄金蝶须',
                paletteIdx: 8,
                eyeY: 0.02, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 109,
                groupTag: 'kept49',
                species: 'iconTulip',
                name: '郁金香花苞 Tulip',
                category: '保留精选 · 花卉',
                desc: '三瓣饱满优雅合拢的郁金香花冠轮廓，底部托着对称舒展的黄金护叶',
                paletteIdx: 9,
                eyeY: 0.06, eyeZ: 0.38, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 110,
                groupTag: 'kept49',
                species: 'iconSunflower',
                name: '盛放向日葵 Sunny',
                category: '保留精选 · 花卉',
                desc: '浑圆饱满的向日葵花盘脸庞，外围360°盛开着12片灿烂的黄金太阳花瓣',
                paletteIdx: 2,
                eyeY: 0.0, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 111,
                groupTag: 'kept49',
                species: 'iconCrescent',
                name: '星坠弯月 Luna',
                category: '保留精选 · 天象',
                desc: '弧线饱满圆润的C型新月轮廓，上弯角尖端悬垂着一颗闪烁的四角星芒',
                paletteIdx: 6,
                eyeY: -0.06, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 112,
                groupTag: 'kept49',
                species: 'iconDiamond',
                name: '璀璨切面钻 Gemmy',
                category: '保留精选 · 晶石',
                desc: '平顶宽腰尖底的经典皇家钻石剪影，左上闪耀十字星芒',
                paletteIdx: 4,
                eyeY: 0.08, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 113,
                groupTag: 'kept49',
                species: 'iconBolt',
                name: '霹雳闪电 Sparky',
                category: '保留精选 · 天象',
                desc: '极具视觉冲击力的Z字折角立体闪电精灵，周身跃动着高能电弧星点',
                paletteIdx: 3,
                eyeY: 0.12, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 114,
                groupTag: 'kept49',
                species: 'iconHeartWing',
                name: '天使炽心 Cupid',
                category: '保留精选 · 符号',
                desc: '饱满浑圆的立体红心轮廓，两侧舒展着洁白金辉的丘比特天使小羽翼',
                paletteIdx: 9,
                eyeY: 0.04, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 115,
                groupTag: 'kept49',
                species: 'iconDroplet',
                name: '皇冠水滴 Aqua',
                category: '保留精选 · 元素',
                desc: '上尖下圆的纯净水滴精灵，底部激起一圈晶莹飞溅的黄金水花涟漪',
                paletteIdx: 5,
                eyeY: -0.14, eyeZ: 0.48, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 116,
                groupTag: 'kept49',
                species: 'iconBell',
                name: '蝴蝶结摇铃 Jingle',
                category: '保留精选 · 庆典',
                desc: '下摆外翻的经典黄金摇铃轮廓，底部探出圆润铃舌，顶部系着立体蝴蝶结',
                paletteIdx: 3,
                eyeY: -0.06, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 117,
                groupTag: 'kept49',
                species: 'iconAlarmClock',
                name: '双铃复古钟 Ticker',
                category: '保留精选 · 时光',
                desc: '圆润闹钟身躯搭配头顶左右对称的两只黄金撞铃碗与底部八字小短腿',
                paletteIdx: 1,
                eyeY: -0.04, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 118,
                groupTag: 'kept49',
                species: 'iconGameboy',
                name: '怀旧掌机 PixelBoy',
                category: '保留精选 · 潮玩',
                desc: '经典竖版复古掌机机身，小腹处镶嵌着立体黄金十字方向键与AB双按键',
                paletteIdx: 5,
                eyeY: 0.18, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 119,
                groupTag: 'kept49',
                species: 'iconSwordStone',
                name: '石中圣剑 Excalibur',
                category: '保留精选 · 奇幻',
                desc: '棱角分明的封印宝石基座，顶端笔直插着黄金十字护手与剑柄圆头',
                paletteIdx: 7,
                eyeY: -0.22, eyeZ: 0.40, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 120,
                groupTag: 'kept49',
                species: 'iconShipWheel',
                name: '航海船舵 Captain',
                category: '保留精选 · 远航',
                desc: '厚实圆润的船长方向舵轮，外圈均匀放射出8根立体黄金握柄柱',
                paletteIdx: 0,
                eyeY: 0.0, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 121,
                groupTag: 'kept49',
                species: 'iconSailboat',
                name: '乘风小帆船 Clipper',
                category: '保留精选 · 远航',
                desc: '元宝形翘头小船船体，上方高高扬起一大一小两面饱满的黄金三角风帆',
                paletteIdx: 0,
                eyeY: -0.28, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 122,
                groupTag: 'kept49',
                species: 'iconHotAir',
                name: '探险热气球 Montgolfier',
                category: '保留精选 · 奇旅',
                desc: '上宽下收的饱满热气球球体，底部悬吊着精致的黄金藤编吊篮',
                paletteIdx: 1,
                eyeY: 0.14, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 123,
                groupTag: 'kept49',
                species: 'iconOmamori',
                name: '祈愿御守 Omamori',
                category: '保留精选 · 祈福',
                desc: '经典五边形切角锦囊御守轮廓，顶端穿系着黄金祈福绳结与双流苏',
                paletteIdx: 9,
                eyeY: -0.10, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第七批筛选保留的 26 款精灵（剔除原 127, 128, 132, 135, 140, 142, 143, 146, 147, 157, 158 后保留 -> 现编号 #124 ~ #149）
            // =========================================================================
            {
                id: 124,
                groupTag: 'kept49',
                species: 'iconLuckyCat',
                name: '招财喵灵 Maneki',
                category: '保留精选 · 瑞兽',
                desc: '双尖耳饱满猫咪剪影，左侧高举招财猫小肉爪，胸前佩戴黄金铃铛与千万两金判',
                paletteIdx: 1,
                eyeY: -0.06, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 125,
                groupTag: 'kept49',
                species: 'iconPawPrint',
                name: '萌爪肉垫 Pawpad',
                category: '保留精选 · 萌印',
                desc: '宽厚圆润的心形主掌垫上方呈扇弧排列四颗饱满趾豆，极致的萌宠剪影符号',
                paletteIdx: 8,
                eyeY: -0.18, eyeZ: 0.34, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 126,
                groupTag: 'kept49',
                species: 'iconFox',
                name: '灵狐面具 Kitsune',
                category: '保留精选 · 奇幻',
                desc: '尖下巴宽双颊的经典灵狐脸庞轮廓，头顶竖起两只大尖狐耳与额间黄金火印',
                paletteIdx: 2,
                eyeY: -0.08, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 127,
                groupTag: 'kept49',
                species: 'iconKoala',
                name: '考拉树袋 Koala',
                category: '保留精选 · 森林',
                desc: '圆脸两侧横向张开两只毛茸茸的超大圆耳，额头点缀尤加利金叶',
                paletteIdx: 5,
                eyeY: -0.06, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 128,
                groupTag: 'kept49',
                species: 'iconCrab',
                name: '大钳螃蟹 Crabby',
                category: '保留精选 · 海洋',
                desc: '横宽饱满的椭圆蟹壳主体，头顶高高举起一对威武张开的月牙黄金大蟹钳',
                paletteIdx: 1,
                eyeY: -0.14, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 129,
                groupTag: 'kept49',
                species: 'iconStarfish',
                name: '五角海星 Patrick',
                category: '保留精选 · 海洋',
                desc: '五只圆润肥厚的触腕呈黄金五角星舒展，额角镶嵌着璀璨海滨珍珠',
                paletteIdx: 2,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 130,
                groupTag: 'kept49',
                species: 'iconOwl',
                name: '博学夜枭 Hoot',
                category: '保留精选 · 森林',
                desc: '头顶向两侧翘起猫头鹰羽冠耳簇，双胁收拢羽翼，眉心点缀黄金菱形喙徽',
                paletteIdx: 7,
                eyeY: 0.02, eyeZ: 0.36, eyeGap: 0.22, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 131,
                groupTag: 'kept49',
                species: 'iconBat',
                name: '夜翼蝙蝠 Batty',
                category: '保留精选 · 暗夜',
                desc: '尖耳小蝙蝠身躯向左右两侧霸气张开波浪折角蝠翼，暗夜剪影极具冲击力',
                paletteIdx: 7,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 132,
                groupTag: 'kept49',
                species: 'iconBlossom',
                name: '五瓣梅花 Sakura',
                category: '保留精选 · 花卉',
                desc: '五片饱满浑圆的花瓣围合成经典梅花剪影，花心簇拥着三颗黄金花蕊珠',
                paletteIdx: 9,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 133,
                groupTag: 'kept49',
                species: 'iconMaple',
                name: '秋色枫叶 Maple',
                category: '保留精选 · 叶片',
                desc: '五裂尖角舒展的加拿大红枫叶经典轮廓，底部探出微弯的黄金叶柄',
                paletteIdx: 1,
                eyeY: -0.06, eyeZ: 0.34, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 134,
                groupTag: 'kept49',
                species: 'iconGinkgo',
                name: '银杏扇叶 Ginkgo',
                category: '保留精选 · 叶片',
                desc: '顶端带有标志性分叉浅缺口的扇形银杏叶轮廓，配以修长弯曲的黄金叶茎',
                paletteIdx: 3,
                eyeY: 0.06, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 135,
                groupTag: 'kept49',
                species: 'iconBamboo',
                name: '节节翠竹 Bamboo',
                category: '保留精选 · 草木',
                desc: '带有上下立体竹节凸环的圆润青竹竿，右上侧斜逸出两片黄金竹叶',
                paletteIdx: 10,
                eyeY: -0.02, eyeZ: 0.42, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 136,
                groupTag: 'kept49',
                species: 'iconMountain',
                name: '日照雪山 Fuji',
                category: '保留精选 · 山川',
                desc: '一大一小双峰并峙的壮丽山峦轮廓，主峰覆着雪冠，右后方升起一轮黄金朝阳',
                paletteIdx: 5,
                eyeY: -0.18, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 137,
                groupTag: 'kept49',
                species: 'iconCampfire',
                name: '露营篝火 Bonfire',
                category: '保留精选 · 能量',
                desc: '三苗跃动升腾的立体篝火火苗轮廓，底部交叉架着两根圆润的黄金木柴',
                paletteIdx: 1,
                eyeY: -0.02, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 138,
                groupTag: 'kept49',
                species: 'iconUkulele',
                name: '尤克里里 Ukulele',
                category: '保留精选 · 音乐',
                desc: '经典8字收腰木吉他琴箱轮廓，顶部探出黄金琴颈、琴头与音孔圆环',
                paletteIdx: 2,
                eyeY: -0.22, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 139,
                groupTag: 'kept49',
                species: 'iconScepter',
                name: '飞翼权杖 RoyalWand',
                category: '保留精选 · 奇幻',
                desc: '饱满宝珠核心两侧舒展黄金双翼，下方承托着精致的权杖金箍握柄',
                paletteIdx: 8,
                eyeY: 0.10, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 140,
                groupTag: 'kept49',
                species: 'iconCrystalBall',
                name: '占星魔球 Oracle',
                category: '保留精选 · 奇幻',
                desc: '浑圆通透的占卜水晶球端坐在黄金三足雕花底座上，球顶闪烁神秘星芒',
                paletteIdx: 7,
                eyeY: 0.08, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 141,
                groupTag: 'kept49',
                species: 'iconChest',
                name: '秘境宝箱 Mimic',
                category: '保留精选 · 冒险',
                desc: '圆拱顶盖的海盗藏宝箱轮廓，两侧箍着厚实的黄金包边带与中央金锁扣',
                paletteIdx: 2,
                eyeY: -0.14, eyeZ: 0.40, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 142,
                groupTag: 'kept49',
                species: 'iconAxe',
                name: '维京战斧 Viking',
                category: '保留精选 · 冒险',
                desc: '左右对称张开的宽大月牙双刃战斧轮廓，中央贯穿黄金战斧柄与矛尖顶',
                paletteIdx: 6,
                eyeY: 0.06, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 143,
                groupTag: 'kept49',
                species: 'iconBomb',
                name: '火花炸弹 Kaboom',
                category: '保留精选 · 潮玩',
                desc: '浑圆饱满的卡通小炸弹，头顶立着金属引信座、弯曲导火索与噼啪闪烁的黄金火花',
                paletteIdx: 6,
                eyeY: -0.08, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 144,
                groupTag: 'kept49',
                species: 'iconCrane',
                name: '折纸千鹤 Origami',
                category: '保留精选 · 雅物',
                desc: '双翼高扬、长颈折首、尾尖翘起的经典折纸千纸鹤几何剪影',
                paletteIdx: 0,
                eyeY: -0.14, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 145,
                groupTag: 'kept49',
                species: 'iconSpade',
                name: '王牌黑桃 AceSpade',
                category: '保留精选 · 符号',
                desc: '上尖下鼓带三角底座柄的经典扑克黑桃A剪影，头顶悬浮迷你黄金王冠',
                paletteIdx: 6,
                eyeY: -0.02, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 146,
                groupTag: 'kept49',
                species: 'iconInfinity',
                name: '无限星环 Infinity',
                category: '保留精选 · 符号',
                desc: '横向对称舒展的饱满无穷大符号（∞）立体轮廓，右上镶嵌闪耀金星',
                paletteIdx: 7,
                eyeY: 0.0, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 147,
                groupTag: 'kept49',
                species: 'iconLantern',
                name: '宫廷灯笼 Lantern',
                category: '保留精选 · 节庆',
                desc: '饱满浑圆的喜庆红灯笼，上下镶嵌黄金灯盖底座与垂坠流苏穗',
                paletteIdx: 1,
                eyeY: 0.04, eyeZ: 0.50, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 148,
                groupTag: 'kept49',
                species: 'iconStamp',
                name: '锯齿邮票 Philately',
                category: '保留精选 · 文化',
                desc: '四边带有整齐半圆齿孔的复古纪念邮票轮廓，右上角盖着黄金星芒邮戳',
                paletteIdx: 4,
                eyeY: -0.06, eyeZ: 0.32, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 149,
                groupTag: 'kept49',
                species: 'iconMedal',
                name: '荣耀勋章 Medallion',
                category: '保留精选 · 荣耀',
                desc: '圆满厚实的冠军奖章圆盘，上方连接着V型对称折叠的黄金领奖绶带',
                paletteIdx: 3,
                eyeY: -0.18, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第八批筛选保留的 17 款精灵（剔除原 152,154,157,158,159,160,165,166,167,169,176,177,178,179 后保留 -> 现编号 #150 ~ #166）
            // =========================================================================
            {
                id: 150,
                groupTag: 'kept49',
                species: 'iconMagnifier',
                name: '侦探放大镜 Sherlock',
                category: '保留精选 · 探索',
                desc: '厚实圆框放大镜片搭配右下45°斜伸的黄金握柄与左上高光星芒，明察秋毫',
                paletteIdx: 5,
                eyeY: 0.06, eyeZ: 0.38, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 151,
                groupTag: 'kept49',
                species: 'iconRoyalKey',
                name: '秘境皇室钥 Keyblade',
                category: '保留精选 · 秘宝',
                desc: '上方饱满心叶雕花钥柄与下方探出双齿的黄金钥匙杆融为一体，开启奇幻大门',
                paletteIdx: 3,
                eyeY: 0.18, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 152,
                groupTag: 'kept49',
                species: 'iconWindChime',
                name: '祈愿风铃 Furin',
                category: '保留精选 · 雅物',
                desc: '圆润通透的夏日风铃罩身躯，下方悬垂着随风轻摆的黄金祈愿短册签条',
                paletteIdx: 5,
                eyeY: 0.14, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 153,
                groupTag: 'kept49',
                species: 'iconHeartPotion',
                name: '爱心魔药瓶 LoveElixir',
                category: '保留精选 · 炼金',
                desc: '饱满红心形玻璃魔药瓶身，顶端探出收腰瓶颈与黄金软木塞封口',
                paletteIdx: 9,
                eyeY: -0.06, eyeZ: 0.38, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 154,
                groupTag: 'kept49',
                species: 'iconGoldenTicket',
                name: '黄金入场券 VIPPass',
                category: '保留精选 · 庆典',
                desc: '两端带有标志性半圆检票缺口的黄金剧场门票剪影，左上镶嵌荣耀星徽',
                paletteIdx: 3,
                eyeY: -0.04, eyeZ: 0.34, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 155,
                groupTag: 'kept49',
                species: 'iconShuriken',
                name: '疾风手里剑 Shinobi',
                category: '保留精选 · 疾风',
                desc: '四片凌厉旋刃对称张开的忍者手里剑飞镖轮廓，中央镶嵌黄金轴承环',
                paletteIdx: 6,
                eyeY: 0.0, eyeZ: 0.36, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 156,
                groupTag: 'kept49',
                species: 'iconClubSuit',
                name: '王牌三叶梅 AceClub',
                category: '保留精选 · 符号',
                desc: '上、左、右三团饱满圆叶与三角底座组成的经典扑克梅花（♣）剪影，顶戴金冠',
                paletteIdx: 4,
                eyeY: -0.06, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 157,
                groupTag: 'kept49',
                species: 'iconTetrisT',
                name: '方块T拼图 Tetro',
                category: '保留精选 · 游戏',
                desc: '由四枚大倒角圆润方块组成的经典俄罗斯方块T型轮廓，顶端嵌着黄金高光块',
                paletteIdx: 7,
                eyeY: -0.18, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 158,
                groupTag: 'kept49',
                species: 'iconSkateboard',
                name: '街头滑板 Skater',
                category: '保留精选 · 运动',
                desc: '微倾翘头的宽版街头滑板板身，底部探出两对醒目的黄金滑板滚轮',
                paletteIdx: 2,
                eyeY: 0.04, eyeZ: 0.36, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 159,
                groupTag: 'kept49',
                species: 'iconTopHat',
                name: '魔术高礼帽 Presto',
                category: '保留精选 · 魔术',
                desc: '上宽下收的绅士魔术高顶礼帽，帽檐系着黄金丝带，帽顶悄悄探出两只小白兔耳',
                paletteIdx: 7,
                eyeY: -0.06, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 160,
                groupTag: 'kept49',
                species: 'iconDutchWindmill',
                name: '荷兰大风车 Windmill',
                category: '保留精选 · 建筑',
                desc: '圆润梯形风车塔屋身躯，上方张开四片醒目的X型黄金大风车翼扇',
                paletteIdx: 1,
                eyeY: -0.24, eyeZ: 0.42, eyeGap: 0.19, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 161,
                groupTag: 'kept49',
                species: 'iconSubmarine',
                name: '深海小潜艇 Nautilus',
                category: '保留精选 · 航海',
                desc: '胖乎乎的胶囊潜艇艇身，顶部立着指挥塔与弯头潜望镜，尾部旋转着黄金螺旋桨',
                paletteIdx: 3,
                eyeY: -0.10, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 162,
                groupTag: 'kept49',
                species: 'iconTrainEngine',
                name: '蒸汽火车头 ChooChoo',
                category: '保留精选 · 铁道',
                desc: '敦实的蒸汽机车车头，头顶立着大喇叭烟囱与黄金蒸汽云团，底部配齐金色车轮',
                paletteIdx: 0,
                eyeY: -0.08, eyeZ: 0.42, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 163,
                groupTag: 'kept49',
                species: 'iconBeetleCar',
                name: '复古甲壳虫 Buggy',
                category: '保留精选 · 公路',
                desc: '圆拱流线型经典甲壳虫小汽车剪影，底盘嵌着两只大号黄金车轮，车顶亮起旅行灯',
                paletteIdx: 1,
                eyeY: -0.04, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 164,
                groupTag: 'kept49',
                species: 'iconHelicopter',
                name: '旋翼直升机 Chopper',
                category: '保留精选 · 航空',
                desc: '圆润直升机座舱左侧延伸出翘起尾梁，头顶架着宽大黄金螺旋桨，底部配有滑撬架',
                paletteIdx: 0,
                eyeY: -0.06, eyeZ: 0.46, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 165,
                groupTag: 'kept49',
                species: 'iconFrogPrince',
                name: '青蛙小王子 Ribbit',
                category: '保留精选 · 童话',
                desc: '宽扁饱满的青蛙脸庞上方高高鼓起两只标志性圆眼包，头顶正中戴着黄金小王冠',
                paletteIdx: 10,
                eyeY: 0.16, eyeZ: 0.44, eyeGap: 0.30, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 166,
                groupTag: 'kept49',
                species: 'iconGachapon',
                name: '奇趣扭蛋机 Gacha',
                category: '保留精选 · 潮玩',
                desc: '上方浑圆通透的扭蛋球舱搭配下方梯形机身底座，正面嵌着黄金旋转扭蛋把手',
                paletteIdx: 1,
                eyeY: 0.18, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第九批筛选保留的 4 款精灵（原 177, 182, 186, 192 -> 现编号 #167 ~ #170）
            // =========================================================================
            {
                id: 167,
                groupTag: 'kept49',
                species: 'iconTanghulu',
                name: '冰糖葫芦 CandiedHaw',
                category: '保留精选 · 传统',
                desc: '三颗晶莹圆润的红山楂球垂直串在黄金竹签上，顶端插着一面俏皮的小糖旗',
                paletteIdx: 1,
                eyeY: 0.0, eyeZ: 0.38, eyeGap: 0.18, eyeScale: 0.94, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 168,
                groupTag: 'kept49',
                species: 'iconPopcorn',
                name: '影院爆米花 Popcorn',
                category: '保留精选 · 休闲',
                desc: '上宽下窄的电影院爆米花桶，桶口堆满5团蓬松饱满、跃出桶外的黄金爆米花云球',
                paletteIdx: 1,
                eyeY: -0.18, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 169,
                groupTag: 'kept49',
                species: 'iconApple',
                name: '红富士果 Apple',
                category: '保留精选 · 鲜果',
                desc: '顶部与底部带有自然凹窝的饱满红苹果剪影，顶端探出果梗与一片舒展的黄金果叶',
                paletteIdx: 1,
                eyeY: -0.06, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 170,
                groupTag: 'kept49',
                species: 'iconLuckyBag',
                name: '祈福招财袋 Kinchaku',
                category: '保留精选 · 祥瑞',
                desc: '肚大口收的饱满福袋剪影，袋口绽放三瓣荷叶褶边，束口处系着黄金双翼蝴蝶绳结',
                paletteIdx: 1,
                eyeY: -0.16, eyeZ: 0.48, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 第十批筛选保留的 2 款精灵（原 #172 凹凸拼图 与 原 #187 错位方块Z -> 现编号 #171 ~ #172）
            // =========================================================================
            {
                id: 171,
                groupTag: 'fresh2',
                species: 'iconPuzzlePiece',
                name: '凹凸拼图 Jigsaw',
                category: '最新保留 · 原#172',
                desc: '左侧带有真实内凹圆孔缺口、顶部与右侧探出饱满拼图卡扣的经典拼图块，左上悬浮金星（原#172保留）',
                paletteIdx: 0,
                eyeY: -0.08, eyeZ: 0.34, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 172,
                groupTag: 'fresh2',
                species: 'archPisaTower',
                name: '比萨斜塔 Pisa',
                category: '世界地标 · 奇迹',
                desc: '世界著名倾斜建筑奇迹：多层大理石圆环回廊优雅倾斜10°，拱券柱廊层叠而上，顶部钟楼端正远眺',
                paletteIdx: 2,
                eyeY: 0.08, eyeZ: 0.38, eyeGap: 0.18, eyeScale: 0.95, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            }
        ,
            // =========================================================================
            // 精选地标 · 2款保留世界地标精灵 (#173 ~ #174)
            // =========================================================================
            {
                id: 173,
                groupTag: 'landmark22',
                species: 'archColosseum',
                name: '罗马斗兽场 Colosseum',
                category: '世界地标 · 意大利罗马',
                desc: '古罗马永恒奇迹：三层经典拱券柱廊围合而成的椭圆形巨型回廊，带有标志性历史轮廓',
                paletteIdx: 1,
                eyeY: 0.02, eyeZ: 0.44, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 174,
                groupTag: 'landmark22',
                species: 'archToriiGate',
                name: '富士神社鸟居 Torii',
                category: '世界地标 · 日本',
                desc: '典雅朱红神域大门：双根圆润朱红立柱横跨上翻翘角的笠木横梁，中央悬挂金色神额匾牌',
                paletteIdx: 1,
                eyeY: 0.02, eyeZ: 0.36, eyeGap: 0.20, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },

            // =========================================================================
            // 新创意图鉴 · 多元主题精灵 (#175 ~ #194)
            // =========================================================================
            {
                id: 175,
                groupTag: 'creative20',
                species: 'foodRamenBowlEx',
                name: '拉面碗 Ramen',
                category: '美食 · 日式',
                desc: '热气腾腾的日式拉面：宽口厚壁陶碗盛满金色汤汁，漂浮着螺旋卷面与半切溏心蛋，配叉烧肉片',
                paletteIdx: 1,
                eyeY: 0.10, eyeZ: 0.42, eyeGap: 0.20, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 176,
                groupTag: 'creative20',
                species: 'spaceSaturn',
                name: '土星 Saturn',
                category: '宇宙 · 行星',
                desc: '太阳系第二大行星：金色气态球体外围环绕多道冰晶光环，倾斜15°展现优雅壮观的行星环侧面',
                paletteIdx: 5,
                eyeY: 0.06, eyeZ: 0.52, eyeGap: 0.20, eyeScale: 0.98, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 177,
                groupTag: 'creative20',
                species: 'gameChessQueen',
                name: '棋后 Queen',
                category: '游戏 · 国际象棋',
                desc: '至高无上的棋盘女王：由圆润球台、束腰细颈、鼓形腰座、宽展底盘构成优雅车旋形棋子，顶冠五芒星冠冕',
                paletteIdx: 0,
                eyeY: 0.14, eyeZ: 0.44, eyeGap: 0.19, eyeScale: 0.96, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
            {
                id: 178,
                groupTag: 'creative20',
                species: 'foodIceCreamSundae',
                name: '圣代冰淇淋 Sundae',
                category: '甜品 · 经典',
                desc: '高脚杯冰淇淋圣代：郁金香形透明高脚杯中叠放两球奶油冰淇淋，顶插夹心饼干棒，点缀鲜红樱桃',
                paletteIdx: 0,
                eyeY: 0.14, eyeZ: 0.46, eyeGap: 0.20, eyeScale: 1.0, eyeType: 'pill',
                sx: 1.0, sy: 1.0, sz: 1.0, featScale: 1.0, addon: 'none'
            },
        ];;
