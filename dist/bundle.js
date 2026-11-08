var SpriteUniverse = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // reference/sprite-3d/src/main.js
  var main_exports = {};
  __export(main_exports, {
    bootSpriteUniverse: () => bootSpriteUniverse
  });

  // reference/sprite-3d/src/config/sprites-data.js
  function getSpriteTaxonomy(item) {
    if (!item) return "\u65E5\u5E38\u5668\u7269";
    const c = item.category || "";
    if (c.includes("\u8C03\u7814") || c.includes("\u5B66\u9662") || c.includes("\u5546\u52A1") || c.includes("\u5B88\u62A4") || c.includes("\u793E\u4EA4") || c.includes("\u804C\u80FD")) return "\u804C\u4E1A\u804C\u80FD";
    if (c.includes("\u6599\u7406") || c.includes("\u852C\u679C") || c.includes("\u7F8E\u98DF") || c.includes("\u751C\u54C1") || c.includes("\u96F6\u98DF") || c.includes("\u70D8\u7119") || c.includes("\u8336\u996E") || c.includes("\u8F7B\u98DF") || c.includes("\u9C9C\u679C") || c.includes("\u65E5\u5F0F")) return "\u7F8E\u5473\u98DF\u5149";
    if (c.includes("\u81EA\u7136") || c.includes("\u6D77\u6D0B") || c.includes("\u68EE\u6797") || c.includes("\u6781\u5730") || c.includes("\u51B0\u96EA") || c.includes("\u8349\u539F") || c.includes("\u82B1\u5349") || c.includes("\u5929\u8C61") || c.includes("\u8349\u6728") || c.includes("\u53F6\u7247") || c.includes("\u5C71\u5DDD") || c.includes("\u840C\u5BA0") || c.includes("\u4E91\u6735") || c.includes("\u6676\u77F3")) return "\u81EA\u7136\u751F\u7075";
    if (c.includes("\u5947\u5E7B") || c.includes("\u9B54\u672F") || c.includes("\u70BC\u91D1") || c.includes("\u745E\u517D") || c.includes("\u7965\u745E") || c.includes("\u7AE5\u8BDD") || c.includes("\u6697\u591C") || c.includes("\u7948\u798F") || c.includes("\u5192\u9669") || c.includes("\u79D8\u5B9D") || c.includes("\u5947\u65C5") || c.includes("\u63A2\u7D22")) return "\u5947\u5E7B\u5192\u9669";
    if (c.includes("\u79D1\u6280") || c.includes("\u6570\u667A") || c.includes("\u79D1\u5E7B") || c.includes("\u661F\u9645") || c.includes("\u592A\u7A7A") || c.includes("\u5B87\u5B99") || c.includes("\u62D3\u6251") || c.includes("\u51E0\u4F55") || c.includes("\u79E9\u5E8F") || c.includes("\u80FD\u91CF") || c.includes("\u58F0\u5B66") || c.includes("\u5149\u5B66") || c.includes("\u94C1\u9053") || c.includes("\u822A\u6D77") || c.includes("\u516C\u8DEF") || c.includes("\u822A\u7A7A")) return "\u6570\u667A\u79D1\u6280";
    if (c.includes("\u6F6E\u73A9") || c.includes("\u827A\u672F") || c.includes("\u65F6\u5C1A") || c.includes("\u5730\u6807") || c.includes("\u5EFA\u7B51") || c.includes("\u97F3\u4E50") || c.includes("\u5E86\u5178") || c.includes("\u8282\u5E86") || c.includes("\u6587\u5316") || c.includes("\u6E38\u620F") || c.includes("\u8FD0\u52A8") || c.includes("\u5A31\u4E50") || c.includes("\u5F71\u89C6") || c.includes("\u8363\u8000")) return "\u6F6E\u73A9\u827A\u672F";
    return "\u65E5\u5E38\u5668\u7269";
  }
  var INITIAL_SPRITES = [
    // ================= 旗舰 #01：纯粹经典版「云宝 Nimbus」 =================
    {
      id: 1,
      groupTag: "kept49",
      species: "iconicCloud",
      name: "\u4E91\u5B9D Nimbus",
      category: "\u65D7\u8230\u4E91\u6735\u56FE\u6807",
      desc: "\u9EC4\u91D1\u5206\u5272\u96D5\u5851\u611F\u53E0\u5C42\u4E91\u5CF0 + \u87BA\u65CB\u5377\u4E91\u51A0 + \u5DE6\u4E0A\u6674\u7A7A\u56DB\u89D2\u661F\u8292\u91D1\u5FBD\uFF0C\u4E13\u4E3A\u8F6F\u4EF6\u56FE\u6807\u6253\u9020",
      paletteIdx: 0,
      eyeY: -0.05,
      eyeZ: 0.58,
      eyeGap: 0.21,
      eyeScale: 1.05,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // ================= 第一批 ~ 第三批保留精选 (#02 ~ #35，共34款) =================
    {
      id: 2,
      groupTag: "kept49",
      species: "origamiGlider",
      name: "\u6298\u7FFC Aero",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u62E5\u6709\u5706\u6DA6\u6298\u7EB8\u68F1\u89D2\u4E0E\u7FD8\u8D77\u5C3E\u7FFC\u7684\u7834\u98CE\u7EB8\u98DE\u673A\u7CBE\u7075\uFF0C\u968F\u65F6\u51C6\u5907\u6295\u9012\u5947\u601D\u5999\u60F3",
      paletteIdx: 2,
      eyeY: 0.02,
      eyeZ: 0.45,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 3,
      groupTag: "kept49",
      species: "mobiusLoop",
      name: "\u83AB\u6BD4 Mobius",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u62D3\u6251",
      desc: "\u6CBF\u7740\u4E09\u7EF4\u65E0\u7A77\u5927\u8F68\u8FF9\u626D\u7ED3\u800C\u6210\u7684\u83AB\u6BD4\u4E4C\u65AF\u73AF\u7CBE\u7075\uFF0C\u8C61\u5F81\u6C38\u4E0D\u505C\u6B47\u7684\u521B\u9020\u529B",
      paletteIdx: 7,
      eyeY: 0.22,
      eyeZ: 0.36,
      eyeGap: 0.16,
      eyeScale: 0.92,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 4,
      groupTag: "kept49",
      species: "periscopeSub",
      name: "\u6F5C\u671B Peris",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u63A2\u51FA\u6D77\u9762\u7684\u5706\u6DA6\u6F5C\u671B\u955C\u7CBE\u7075\uFF0C\u5F2F\u66F2\u7684\u7BA1\u8EAB\u9876\u7AEF\u9576\u5D4C\u7740\u597D\u5947\u5F20\u671B\u7684\u91D1\u8272\u955C\u5934\u5708",
      paletteIdx: 3,
      eyeY: 0.25,
      eyeZ: 0.36,
      eyeGap: 0.17,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 5,
      groupTag: "kept49",
      species: "cactusBuddy",
      name: "\u4ED9\u4EBA\u7403 Cacti",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u81EA\u7136",
      desc: "\u6D51\u8EAB\u5706\u6DA6\u7EB5\u68F1\u7684\u6C99\u6F20\u591A\u8089\u4ED9\u4EBA\u638C\u7CBE\u7075\uFF0C\u9AD8\u4E3E\u53CC\u624B\u6253\u62DB\u547C\uFF0C\u5934\u9876\u76DB\u5F00\u7740\u5C0F\u82B1\u51A0",
      paletteIdx: 10,
      eyeY: 0.04,
      eyeZ: 0.52,
      eyeGap: 0.2,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 6,
      groupTag: "kept49",
      species: "hourglassTwin",
      name: "\u65F6\u7802 Chrono",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u4E0A\u4E0B\u5BF9\u79F0\u6536\u8170\u7684\u6D41\u7EBF\u578B\u6C99\u6F0F\u7CBE\u7075\uFF0C\u8170\u95F4\u60AC\u6D6E\u7740\u7F13\u7F13\u516C\u8F6C\u7684\u91D1\u8272\u65F6\u95F4\u6C99\u7C92\u73AF",
      paletteIdx: 5,
      eyeY: 0.3,
      eyeZ: 0.44,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 7,
      groupTag: "kept49",
      species: "stepCube",
      name: "\u9636\u68AF\u9B54\u65B9 Cubix",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u51E0\u4F55",
      desc: "\u4E0A\u534A\u8EAB\u544835\xB0\u9519\u4F4D\u65CB\u8F6C\u7684\u5EFA\u7B51\u611F\u53CC\u5C42\u9B54\u65B9\u7CBE\u7075\uFF0C\u5728\u79E9\u5E8F\u4E0E\u7075\u52A8\u4E4B\u95F4\u81EA\u7531\u5207\u6362",
      paletteIdx: 6,
      eyeY: -0.2,
      eyeZ: 0.52,
      eyeGap: 0.21,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 8,
      groupTag: "kept49",
      species: "foldedFolio",
      name: "\u6298\u9875\u7075\u7B7E Folio",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u53F3\u4E0A\u89D2\u4FCF\u76AE\u6298\u8D77\u7ACB\u4F53\u4E09\u89D2\u8033\u7684\u5706\u89D2\u7B14\u8BB0\u7CBE\u7075\uFF0C\u8C61\u5F81\u968F\u65F6\u8BB0\u5F55\u7684\u95EA\u5149\u7075\u611F",
      paletteIdx: 3,
      eyeY: -0.06,
      eyeZ: 0.3,
      eyeGap: 0.22,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 9,
      groupTag: "kept49",
      species: "keyholeClock",
      name: "\u79D8\u5883\u9501\u5B54 Keyo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u7ECF\u5178\u94A5\u5319\u5B54\u51E0\u4F55\u8F6E\u5ED3\u5316\u8EAB\u7684\u5B88\u95E8\u5C0F\u7CBE\u7075\uFF0C\u5934\u9876\u63D2\u7740\u4E00\u679A\u9EC4\u91D1\u53D1\u6761\u65CB\u94AE\u67C4",
      paletteIdx: 4,
      eyeY: 0.24,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 10,
      groupTag: "kept49",
      species: "boomerangWing",
      name: "\u75BE\u98CE\u98DE\u53BB\u6765 Boomer",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u51E0\u4F55",
      desc: "V\u578B\u6D41\u7EBF\u6298\u89D2\u56DE\u65CB\u9556\u7CBE\u7075\uFF0C\u517C\u5177\u52A8\u611F\u7834\u98CE\u59FF\u6001\u4E0E\u8FC7\u76EE\u4E0D\u5FD8\u7684\u6781\u7B80\u51E0\u4F55\u8BC6\u522B\u5EA6",
      paletteIdx: 2,
      eyeY: 0.12,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 11,
      groupTag: "kept49",
      species: "kettlebellBot",
      name: "\u5143\u6C14\u63D0\u624B Ketti",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u81EA\u5E26\u4E00\u4F53\u5F0F\u5706\u5F27\u63D0\u624B\u7684\u5C0F\u5DE7\u80FD\u91CF\u58F6\u7CBE\u7075\uFF0C\u5706\u6DA6\u6566\u5B9E\u3001\u529B\u91CF\u611F\u5341\u8DB3",
      paletteIdx: 8,
      eyeY: -0.14,
      eyeZ: 0.54,
      eyeGap: 0.21,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 12,
      groupTag: "kept49",
      species: "magnetU",
      name: "\u78C1\u529B\u8E44\u94C1 Magneto",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u9971\u6EE1U\u578B\u9A6C\u8E44\u94C1\u78C1\u94C1\u7CBE\u7075\uFF0C\u53CC\u7AEF\u5E26\u6709\u649E\u8272\u78C1\u6781\u5E3D\u4E0E\u60AC\u6D6E\u8DF3\u8DC3\u7684\u78C1\u611F\u7535\u706B\u82B1",
      paletteIdx: 1,
      eyeY: -0.24,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 13,
      groupTag: "kept49",
      species: "lightBulb",
      name: "\u7075\u611F\u706F\u6CE1 Edison",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u5706\u6DA6\u9971\u6EE1\u7684\u7403\u6CE1\u8EAB\u8EAF\u642D\u914D\u5E95\u90E8\u91D1\u5C5E\u87BA\u7EB9\u5E95\u5EA7\uFF0C\u5934\u9876\u95EA\u8000\u7740\u7075\u611F\u661F\u8292",
      paletteIdx: 3,
      eyeY: 0.12,
      eyeZ: 0.54,
      eyeGap: 0.2,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 14,
      groupTag: "kept49",
      species: "retroTV",
      name: "\u590D\u53E4\u7535\u89C6 RetroTV",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u81EA\u5E26\u5706\u89D2\u5C4F\u5E55\u6846\u7684\u590D\u53E4\u663E\u50CF\u7BA1\u7535\u89C6\u7CBE\u7075\uFF0C\u5934\u9876\u7AD6\u7740\u53EF\u7231\u7684V\u578B\u53CC\u7403\u5929\u7EBF",
      paletteIdx: 5,
      eyeY: -0.06,
      eyeZ: 0.44,
      eyeGap: 0.22,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 15,
      groupTag: "kept49",
      species: "trefoilKnot",
      name: "\u626D\u7ED3\u751C\u5708 Pretzel",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u62D3\u6251",
      desc: "\u7531\u8FDE\u7EED\u5706\u7BA1\u5728\u4E09\u7EF4\u7A7A\u95F4\u4F18\u96C5\u76D8\u7ED5\u800C\u6210\u7684\u4E09\u53F6\u626D\u7ED3\u7CBE\u7075\uFF0C\u517C\u5177\u6570\u5B66\u79E9\u5E8F\u4E0E\u8F6F\u840C\u611F",
      paletteIdx: 7,
      eyeY: -0.08,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 16,
      groupTag: "kept49",
      species: "umbrellaDome",
      name: "\u6674\u96E8\u5F2F\u4F1E Brolly",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u9971\u6EE1\u5706\u62F1\u4F1E\u76D6\u4E0B\u63A2\u51FAJ\u578B\u7CBE\u81F4\u5F2F\u94A9\u4F1E\u67C4\u7684\u5C0F\u96E8\u4F1E\u7CBE\u7075\uFF0C\u4F1E\u5C16\u7F00\u7740\u6676\u83B9\u5706\u73E0",
      paletteIdx: 9,
      eyeY: 0.1,
      eyeZ: 0.54,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 17,
      groupTag: "kept49",
      species: "toastSlice",
      name: "\u9EC4\u6CB9\u5410\u53F8 Toasty",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u751F\u6D3B",
      desc: "\u53CC\u80A9\u5FAE\u9F13\u7684\u539A\u5207\u9EC4\u91D1\u70E4\u5410\u53F8\u7CBE\u7075\uFF0C\u989D\u5934\u6B63\u4E2D\u8D34\u7740\u4E00\u5757\u4FCF\u76AE\u878D\u5316\u7684\u65B9\u5F62\u9EC4\u6CB9\u7247",
      paletteIdx: 3,
      eyeY: -0.1,
      eyeZ: 0.34,
      eyeGap: 0.22,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 18,
      groupTag: "kept49",
      species: "cameraSnap",
      name: "\u5494\u5693\u5FEB\u95E8 Snappy",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u914D\u5907\u5927\u53E3\u5F84\u91D1\u8272\u955C\u5934\u73AF\u4E0E\u9876\u90E8\u5FEB\u95E8\u952E\u7684\u5706\u89D2\u76F8\u673A\u7CBE\u7075\uFF0C\u53CC\u77B3\u6B63\u4ECE\u955C\u5934\u4E2D\u592E\u51DD\u89C6\u4E16\u754C",
      paletteIdx: 8,
      eyeY: -0.04,
      eyeZ: 0.48,
      eyeGap: 0.18,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 19,
      groupTag: "kept49",
      species: "lollipopSwirl",
      name: "\u65CB\u6DA1\u751C\u5FC3 Swirly",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u751F\u6D3B",
      desc: "\u7531\u7ACB\u4F53\u963F\u57FA\u7C73\u5FB7\u87BA\u65CB\u7EBF\u76D8\u7ED5\u800C\u6210\u7684\u6CE2\u666E\u68D2\u68D2\u7CD6\u7CBE\u7075\uFF0C\u659C\u63D2\u7740\u5706\u6DA6\u7CD6\u68CD",
      paletteIdx: 9,
      eyeY: 0.06,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 20,
      groupTag: "kept49",
      species: "seaAnchor",
      name: "\u8FDC\u822A\u8239\u951A Anchor",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u62E5\u6709\u5FAE\u7B11\u4E0A\u626C\u6708\u7259\u951A\u81C2\u4E0E\u9876\u90E8\u91D1\u73AF\u7684\u5706\u6DA6\u8239\u951A\u7CBE\u7075\uFF0C\u7A33\u91CD\u53EF\u9760\u53C8\u4E0D\u5931\u4FCF\u76AE",
      paletteIdx: 5,
      eyeY: -0.22,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 21,
      groupTag: "kept49",
      species: "fourLeafClover",
      name: "\u56DB\u53F6\u5E78\u8FD0 Clover",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u81EA\u7136",
      desc: "\u56DB\u7247\u9971\u6EE1\u7ACB\u4F53\u5FC3\u5F62\u53F6\u7247\u7EC4\u6210\u7684\u56DB\u53F6\u8349\u7CBE\u7075\uFF0C\u53F6\u95F4\u70B9\u7F00\u7740\u4E00\u9897\u91D1\u8272\u5E78\u8FD0\u6668\u9732",
      paletteIdx: 10,
      eyeY: 0.02,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 22,
      groupTag: "kept49",
      species: "crownJewel",
      name: "\u4E09\u5C16\u7687\u51A0 Rex",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5FBD\u7AE0",
      desc: "\u62E5\u6709\u4E09\u5EA7\u633A\u62D4\u51A0\u5CF0\u4E0E\u5706\u6DA6\u9876\u73E0\u7684\u7687\u5BB6\u91D1\u51A0\u7CBE\u7075\uFF0C\u8F6E\u5ED3\u5E84\u91CD\u53C8\u5446\u840C",
      paletteIdx: 3,
      eyeY: -0.14,
      eyeZ: 0.36,
      eyeGap: 0.21,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 23,
      groupTag: "kept49",
      species: "musicNote",
      name: "\u516B\u5206\u97F3\u7B26 Melody",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u827A\u672F",
      desc: "\u9971\u6EE1\u5FAE\u503E\u7684\u97F3\u7B26\u8C46\u8111\u888B\u8FDE\u7740\u633A\u62D4\u7B26\u5E72\u4E0E\u98D8\u9038\u7B26\u5C3E\uFF0C\u81EA\u5E26\u6B22\u5FEB\u5F8B\u52A8\u526A\u5F71",
      paletteIdx: 8,
      eyeY: -0.24,
      eyeZ: 0.38,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 24,
      groupTag: "kept49",
      species: "pinwheelSpin",
      name: "\u56DB\u53F6\u98CE\u8F66 Breezy",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u51E0\u4F55",
      desc: "\u56DB\u7247\u5F27\u5F62\u6298\u53F6\u56F4\u7ED5\u91D1\u8272\u8F74\u5FC3\u65CB\u8F6C\u7684\u7AE5\u5E74\u7EB8\u98CE\u8F66\u7CBE\u7075\uFF0C\u8FCE\u98CE\u5373\u8F6C",
      paletteIdx: 0,
      eyeY: -0.02,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 25,
      groupTag: "kept49",
      species: "potionFlask",
      name: "\u70BC\u91D1\u9B54\u836F Elixir",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u7ECF\u5178\u5927\u809A\u9525\u5F62\u70E7\u74F6\u8EAB\u8EAF\u642D\u914D\u7EC6\u957F\u74F6\u9888\u4E0E\u8F6F\u6728\u585E\u9876\u5E3D\uFF0C\u6447\u6643\u7740\u5947\u5E7B\u7075\u611F\u836F\u6C34",
      paletteIdx: 7,
      eyeY: -0.22,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 26,
      groupTag: "kept49",
      species: "bowtieRibbon",
      name: "\u7EC5\u58EB\u9886\u7ED3 Ribbon",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u65F6\u5C1A",
      desc: "\u5DE6\u53F3\u5BF9\u79F0\u8212\u5C55\u7684\u9971\u6EE1\u8774\u8776\u7ED3\u53CC\u7FFC\u642D\u914D\u4E0B\u65B9\u5782\u5760\u98D8\u5E26\uFF0C\u4F18\u96C5\u53C8\u4FCF\u76AE",
      paletteIdx: 1,
      eyeY: 0.04,
      eyeZ: 0.38,
      eyeGap: 0.17,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 27,
      groupTag: "kept49",
      species: "propellerCap",
      name: "\u7AF9\u873B\u8713\u5E3D Copter",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u8DA3",
      desc: "\u5706\u6DA6\u98DE\u884C\u5458\u534A\u76D4\u9876\u7AEF\u67B6\u7740\u4E00\u5BF9\u5BBD\u5927\u53CC\u53F6\u87BA\u65CB\u6868\uFF0C\u968F\u65F6\u51C6\u5907\u5347\u7A7A\u7FF1\u7FD4",
      paletteIdx: 0,
      eyeY: -0.12,
      eyeZ: 0.54,
      eyeGap: 0.2,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 28,
      groupTag: "kept49",
      species: "foldingFan",
      name: "\u6E05\u98CE\u6298\u6247 Sensu",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u96C5\u7269",
      desc: "120\xB0\u5BBD\u9614\u5C55\u5F00\u7684\u6247\u5F62\u8F6E\u5ED3\u642D\u914D\u5E95\u90E8\u6247\u9489\u6D41\u82CF\uFF0C\u4E1C\u65B9\u97F5\u5473\u5341\u8DB3",
      paletteIdx: 9,
      eyeY: 0.08,
      eyeZ: 0.32,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 29,
      groupTag: "kept49",
      species: "artPalette",
      name: "\u7ED8\u68A6\u8C03\u8272\u76D8 Muse",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u827A\u672F",
      desc: "\u6D41\u7EBF\u4E91\u80BE\u5F62\u753B\u677F\u8F6E\u5ED3\uFF0C\u53F3\u4E0B\u5E26\u62C7\u6307\u7A7F\u5B54\uFF0C\u8FB9\u7F18\u70B9\u7F00\u4E09\u9897\u7ACB\u4F53\u989C\u6599\u8C46",
      paletteIdx: 7,
      eyeY: -0.08,
      eyeZ: 0.32,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 30,
      groupTag: "kept49",
      species: "knightShield",
      name: "\u5723\u76FE\u5FBD\u7AE0 Aegis",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5FBD\u7AE0",
      desc: "\u9971\u6EE1\u9E22\u5C3E\u76FE\u724C\u8F6E\u5ED3\u642D\u914D\u5DE6\u4E0A\u661F\u8292\u91D1\u5FBD\uFF0C\u5B89\u5168\u611F\u4E0E\u5B88\u62A4\u529B\u62C9\u6EE1",
      paletteIdx: 6,
      eyeY: 0.04,
      eyeZ: 0.34,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 31,
      groupTag: "kept49",
      species: "gramophoneHorn",
      name: "\u7559\u58F0\u5587\u53ED Phono",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u590D\u53E4",
      desc: "\u7275\u725B\u82B1\u822C\u5927\u53E3\u5F84\u7EFD\u653E\u7684\u590D\u53E4\u7559\u58F0\u673A\u53F7\u89D2\u7CBE\u7075\uFF0C\u4F20\u9012\u9EC4\u91D1\u5E74\u4EE3\u7684\u58F0\u6D6A",
      paletteIdx: 2,
      eyeY: -0.28,
      eyeZ: 0.42,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 32,
      groupTag: "kept49",
      species: "ufoSaucer",
      name: "\u661F\u9645\u98DE\u789F Roswell",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u79D1\u5E7B",
      desc: "\u5BBD\u8FB9\u5706\u76D8\u789F\u8EAB\u9876\u7740\u9971\u6EE1\u89C2\u5BDF\u8231\u7F69\u4E0E\u5E95\u90E8\u4E09\u9897\u8D77\u843D\u67B6\u73E0\uFF0C\u5916\u661F\u840C\u5BA2\u964D\u4E34",
      paletteIdx: 4,
      eyeY: 0.16,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 33,
      groupTag: "kept49",
      species: "cupcakeCherry",
      name: "\u6A31\u6843\u7EB8\u676F Muffin",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u751C\u54C1",
      desc: "\u68AF\u5F62\u70D8\u7119\u7EB8\u6258\u4E0A\u53E0\u7740\u7EF5\u5BC6\u5976\u6CB9\u4E91\u9876\u4E0E\u4E00\u9897\u9C9C\u4EAE\u7EA2\u6A31\u6843\uFF0C\u751C\u5EA6\u7206\u8868",
      paletteIdx: 9,
      eyeY: -0.22,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 34,
      groupTag: "kept49",
      species: "trafficCone",
      name: "\u8DEF\u969C\u536B\u58EB Pylon",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u79E9\u5E8F",
      desc: "\u6566\u5B9E\u65B9\u5E95\u5EA7\u4E0A\u7ACB\u7740\u5706\u6DA6\u9525\u7B52\u4E0E\u649E\u8272\u53CD\u5149\u8170\u5E26\uFF0C\u65F6\u523B\u575A\u5B88\u79E9\u5E8F\u5C97\u4F4D",
      paletteIdx: 2,
      eyeY: -0.06,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 35,
      groupTag: "kept49",
      species: "croissantRoll",
      name: "\u725B\u89D2\u53EF\u9882 Brioche",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u70D8\u7119",
      desc: "\u5C42\u53E0\u9971\u6EE1\u3001\u4E24\u7AEF\u5F2F\u5F2F\u6536\u5C16\u7684\u6CD5\u5F0F\u725B\u89D2\u5305\u7CBE\u7075\uFF0C\u6563\u53D1\u51FA\u521A\u51FA\u7089\u7684\u6696\u610F",
      paletteIdx: 2,
      eyeY: 0.1,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // ================= 第四批保留精选 (14款：原 38,40,42,43,45,49,50,51,52,53,54,58,59,60) =================
    {
      id: 36,
      groupTag: "kept49",
      species: "roleGradCap",
      name: "\u5B66\u58EB\u65B9\u5E3D Scholar",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5B66\u9662",
      desc: "\u5706\u6DA6\u9971\u6EE1\u7684\u5B66\u8005\u8111\u888B\u9876\u7740\u503E\u659C\u7684\u7ACB\u4F53\u65B9\u5F62\u5B66\u58EB\u5E3D\uFF0C\u5E3D\u6A90\u5782\u6302\u9EC4\u91D1\u6D41\u82CF\u7A57",
      paletteIdx: 0,
      eyeY: -0.14,
      eyeZ: 0.52,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 37,
      groupTag: "kept49",
      species: "roleBarChart",
      name: "\u8DC3\u5347\u6570\u56FE Metric",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6570\u667A",
      desc: "\u7531\u4E09\u6839\u9636\u68AF\u5F0F\u9012\u589E\u7684\u5706\u6DA6\u67F1\u72B6\u56FE\u6709\u673A\u878D\u5408\u800C\u6210\uFF0C\u4E0A\u65B9\u6A2A\u8DE8\u7834\u7A7A\u4E0A\u626C\u7684\u9EC4\u91D1\u6298\u7EBF\u7BAD\u5934",
      paletteIdx: 4,
      eyeY: -0.14,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 38,
      groupTag: "kept49",
      species: "roleStudioMic",
      name: "\u7535\u5BB9\u9EA6\u514B Caster",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u58F0\u5B66",
      desc: "\u9971\u6EE1\u80F6\u56CA\u5F62\u4E13\u4E1A\u5F55\u97F3\u5BA4\u9EA6\u514B\u98CE\u4E3B\u4F53\uFF0C\u6258\u4E3E\u5728\u9EC4\u91D1U\u578B\u91D1\u5C5E\u652F\u67B6\u4E0E\u5706\u76D8\u5E95\u5EA7\u4E4B\u4E0A",
      paletteIdx: 1,
      eyeY: 0.14,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 39,
      groupTag: "kept49",
      species: "roleClapperboard",
      name: "\u573A\u8BB0\u62CD\u677F Director",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5F71\u89C6",
      desc: "\u5706\u89D2\u7535\u5F71\u573A\u8BB0\u677F\u673A\u8EAB\uFF0C\u9876\u90E8\u9EC4\u91D1\u659C\u7EB9\u62CD\u677F\u6761\u544828\xB0\u4FCF\u76AE\u5F20\u5F00\u59FF\u6001",
      paletteIdx: 2,
      eyeY: -0.14,
      eyeZ: 0.34,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 40,
      groupTag: "kept49",
      species: "roleMedCross",
      name: "\u4EC1\u5FC3\u5341\u5B57 Medic",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5B88\u62A4",
      desc: "\u5927\u5706\u89D2\u6DF1\u5012\u89D2\u7684\u5BF9\u79F0\u7ACB\u4F53\u5341\u5B57\u67B6\u7CBE\u7075\uFF0C\u5DE6\u4E0A\u9576\u5D4C\u5B88\u62A4\u751F\u547D\u5F8B\u52A8\u7684\u9EC4\u91D1\u661F\u8292",
      paletteIdx: 4,
      eyeY: -0.02,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 41,
      groupTag: "kept49",
      species: "roleShopBag",
      name: "\u6F6E\u73A9\u63D0\u888B Merchant",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u751F\u6D3B",
      desc: "\u4E0A\u7A84\u4E0B\u5BBD\u7684\u5706\u6DA6\u7CBE\u54C1\u624B\u63D0\u888B\u8F6E\u5ED3\uFF0C\u9876\u7AEF\u633D\u7740\u9EC4\u91D1\u62F1\u5F62\u63D0\u624B\u4E0E\u659C\u6302\u540A\u724C",
      paletteIdx: 9,
      eyeY: -0.12,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 42,
      groupTag: "kept49",
      species: "roleBriefcase",
      name: "\u9886\u822A\u516C\u6587 Founder",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5546\u52A1",
      desc: "\u7A33\u91CD\u5927\u6C14\u7684\u5706\u89D2\u516C\u6587\u5305\u7CBE\u7075\uFF0C\u914D\u5907\u9876\u90E8\u62F1\u5F62\u63E1\u628A\u4E0E\u6B63\u9762\u4E24\u679A\u9EC4\u91D1\u9501\u6263",
      paletteIdx: 6,
      eyeY: -0.1,
      eyeZ: 0.36,
      eyeGap: 0.22,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 43,
      groupTag: "kept49",
      species: "roleChatBubble",
      name: "\u5171\u9E23\u6C14\u6CE1 Connector",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u793E\u4EA4",
      desc: "\u5DE6\u4E0B\u5E26\u4FCF\u76AE\u5C16\u89D2\u5C3E\u7684\u5706\u6DA6\u5BF9\u8BDD\u6C14\u6CE1\u4E3B\u4F53\uFF0C\u53F3\u4E0A\u53E0\u7740\u4E00\u679A\u9EC4\u91D1\u56DE\u5E94\u5C0F\u6C14\u6CE1",
      paletteIdx: 10,
      eyeY: 0.02,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 44,
      groupTag: "kept49",
      species: "roleGamepad",
      name: "\u6B21\u5143\u624B\u67C4 Player",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5A31\u4E50",
      desc: "\u7ECF\u5178\u53CC\u63E1\u628A\u4EBA\u4F53\u5DE5\u5B66\u6E38\u620F\u624B\u67C4\u526A\u5F71\uFF0C\u53CC\u80A9\u70B9\u7F00\u9EC4\u91D1\u5341\u5B57\u952E\u4E0E\u6309\u952E\u8C46",
      paletteIdx: 7,
      eyeY: 0.08,
      eyeZ: 0.34,
      eyeGap: 0.21,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 45,
      groupTag: "kept49",
      species: "roleChefHat",
      name: "\u4E91\u6735\u53A8\u5E3D Culinary",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6599\u7406",
      desc: "\u56DB\u74E3\u84EC\u677E\u9971\u6EE1\u7684\u4E91\u6735\u72B6\u9AD8\u9876\u4E3B\u53A8\u5E3D\uFF0C\u4E0B\u65B9\u675F\u7740\u8D34\u5408\u7684\u9EC4\u91D1\u5E3D\u7B8D\u5E26",
      paletteIdx: 2,
      eyeY: -0.22,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 46,
      groupTag: "kept49",
      species: "roleAIChip",
      name: "\u7B97\u529B\u82AF\u7247 Neural",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u79D1\u6280",
      desc: "\u5706\u89D2\u65B9\u5F62\u7845\u57FA\u82AF\u7247\u4E3B\u4F53\uFF0C\u56DB\u8FB9\u6574\u9F50\u63A2\u51FA12\u679A\u9EC4\u91D1\u7B97\u529B\u5F15\u811A\u4E0E\u9876\u90E8\u667A\u80FD\u661F\u8292",
      paletteIdx: 0,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 47,
      groupTag: "kept49",
      species: "roleTrophyCup",
      name: "\u8363\u8000\u5956\u676F Champion",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8363\u8000",
      desc: "\u9971\u6EE1\u5723\u676F\u5F0F\u5956\u676F\u4E3B\u4F53\uFF0C\u4E24\u4FA7\u633D\u7740\u5BF9\u79F0\u9EC4\u91D1C\u578B\u53CC\u8033\u628A\uFF0C\u4E0B\u627F\u5706\u6DA6\u5E95\u5EA7",
      paletteIdx: 3,
      eyeY: 0.08,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 48,
      groupTag: "kept49",
      species: "roleCoatHanger",
      name: "\u7075\u611F\u8863\u67B6 Stylist",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u65F6\u5C1A",
      desc: "\u5BBD\u80A9\u5706\u6DA6\u4E09\u89D2\u8863\u67B6\u8F6E\u5ED3\uFF0C\u9876\u7AEF\u7ACB\u7740\u4E00\u679A\u4F18\u96C5\u5F2F\u66F2\u7684\u5929\u9E45\u9888\u9EC4\u91D1\u95EE\u53F7\u94A9",
      paletteIdx: 8,
      eyeY: -0.14,
      eyeZ: 0.34,
      eyeGap: 0.21,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 49,
      groupTag: "kept49",
      species: "roleRingedPlanet",
      name: "\u659C\u6760\u884C\u661F Explorer",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u661F\u9645",
      desc: "\u9971\u6EE1\u661F\u7403\u8EAB\u8EAF\u5916\u73AF\u7ED5\u7740360\xB0\u503E\u659C\u9EC4\u91D1\u661F\u73AF\u4E0E\u4F34\u751F\u5C0F\u536B\u661F",
      paletteIdx: 7,
      eyeY: 0.04,
      eyeZ: 0.5,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 全新重新设计 10 款：专为【首屏 5×2 职业与身份调研弹窗】打造的 10 大行业代表精灵 (#50 ~ #59)
    // =========================================================================
    {
      id: 50,
      surveyOrder: 1,
      groupTag: "survey10",
      species: "surveyStudentBook",
      name: "\u5C55\u7FFC\u4E66\u5377 Bookie",
      roleTitle: "1. \u5B66\u751F",
      roleSub: "\u9AD8\u6821\u5B66\u5B50 \xB7 \u5728\u8BFB\u6DF1\u9020 \xB7 \u6821\u56ED\u793E\u56E2",
      category: "\u9996\u5C4F\u8C03\u7814 01 \xB7 \u5B66\u751F",
      desc: "\u4EE3\u8868\u30101. \u5B66\u751F\u3011\uFF1A\u5982\u53CC\u7FFC\u822C\u5C55\u5F00\u7684\u7ACB\u4F53\u7CBE\u88C5\u4E66\u5377\u7CBE\u7075\uFF0C\u5E95\u90E8\u5782\u4E0B\u9EC4\u91D1\u4E66\u7B7E\u4E1D\u5E26\uFF0C\u5DE6\u4E0A\u60AC\u6D6E\u6C42\u77E5\u661F\u8292",
      paletteIdx: 0,
      eyeY: -0.04,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none",
      defaultChecked: true
    },
    {
      id: 51,
      surveyOrder: 2,
      groupTag: "survey10",
      species: "surveyITBrowser",
      name: "\u6781\u5BA2\u7B14\u7535 GeekBook",
      roleTitle: "2. IT / \u4E92\u8054\u7F51",
      roleSub: "\u8F6F\u4EF6\u7814\u53D1 \xB7 \u6280\u672F\u67B6\u6784 \xB7 \u4EBA\u5DE5\u667A\u80FD",
      category: "\u9996\u5C4F\u8C03\u7814 02 \xB7 IT/\u4E92\u8054\u7F51",
      desc: "\u4EE3\u8868\u30102. IT / \u4E92\u8054\u7F51\u3011\uFF1A\u5C55\u5F00\u5F0F\u7ACB\u4F53\u7B14\u8BB0\u672C\u7535\u8111\uFF08\u663E\u793A\u5C4F+\u524D\u4F38\u952E\u76D8\u6258\uFF09\uFF0C\u5DE6\u4E0A\u60AC\u6D6E\u9192\u76EE\u7684 </> \u9EC4\u91D1\u4EE3\u7801\u5C16\u62EC\u53F7\u5FBD\u7AE0",
      paletteIdx: 6,
      eyeY: 0.08,
      eyeZ: 0.24,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none",
      defaultChecked: true
    },
    {
      id: 52,
      surveyOrder: 3,
      groupTag: "survey10",
      species: "surveyProdDesign",
      name: "\u7075\u611F\u94A2\u7B14 PenNib",
      roleTitle: "3. \u4EA7\u54C1 / \u8BBE\u8BA1 / \u8FD0\u8425",
      roleSub: "\u4EA7\u54C1\u7ECF\u7406 \xB7 UI/UX\u89C6\u89C9 \xB7 \u7528\u6237\u8FD0\u8425",
      category: "\u9996\u5C4F\u8C03\u7814 03 \xB7 \u4EA7\u54C1/\u8BBE\u8BA1/\u8FD0\u8425",
      desc: "\u4EE3\u8868\u30103. \u4EA7\u54C1 / \u8BBE\u8BA1 / \u8FD0\u8425\u3011\uFF1A\u7ECF\u5178\u77E2\u91CF\u94A2\u7B14\u5C16\u8F6E\u5ED3\uFF08\u5E26\u7B14\u5C16\u5706\u6C14\u5B54\u4E0E\u91D1\u5C5E\u7B14\u7B8D\uFF09\uFF0C\u9876\u90E8\u6A2A\u8DE8\u9EC4\u91D1\u8D1D\u585E\u5C14\u66F2\u7EBF\u63A7\u5236\u67C4\u4E0E\u951A\u70B9",
      paletteIdx: 7,
      eyeY: -0.08,
      eyeZ: 0.34,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 53,
      surveyOrder: 4,
      groupTag: "survey10",
      species: "surveyMarketingHorn",
      name: "\u58F0\u6D6A\u6269\u97F3 Megaphone",
      roleTitle: "4. \u5E02\u573A / \u9500\u552E / \u5546\u52A1",
      roleSub: "\u54C1\u724C\u516C\u5173 \xB7 \u9500\u552E\u62D3\u5C55 \xB7 \u6E20\u9053\u589E\u957F",
      category: "\u9996\u5C4F\u8C03\u7814 04 \xB7 \u5E02\u573A/\u9500\u552E/\u5546\u52A1",
      desc: "\u4EE3\u8868\u30104. \u5E02\u573A / \u9500\u552E / \u5546\u52A1\u3011\uFF1A\u6602\u626C\u4E0A\u7FD8\u7684\u5927\u53E3\u5F84\u6269\u97F3\u53F7\u89D2\u7CBE\u7075\uFF0C\u524D\u65B9\u6FC0\u8361\u51FA\u591A\u5C42\u9EC4\u91D1\u589E\u957F\u58F0\u6D6A\u5F27",
      paletteIdx: 1,
      eyeY: 0.04,
      eyeZ: 0.42,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 54,
      surveyOrder: 5,
      groupTag: "survey10",
      species: "surveyEduScope",
      name: "\u91CF\u5B50\u70E7\u74F6 ScienceFlask",
      roleTitle: "5. \u6559\u80B2 / \u79D1\u7814",
      roleSub: "\u6559\u5E08\u8BB2\u5E08 \xB7 \u5B66\u672F\u7814\u7A76 \xB7 \u5B9E\u9A8C\u5BA4\u63A2\u7D22",
      category: "\u9996\u5C4F\u8C03\u7814 05 \xB7 \u6559\u80B2/\u79D1\u7814",
      desc: "\u4EE3\u8868\u30105. \u6559\u80B2 / \u79D1\u7814\u3011\uFF1A\u5BBD\u5E95\u6536\u9888\u7684\u7ECF\u5178\u5B9E\u9A8C\u9525\u5F62\u70E7\u74F6\uFF0C\u8170\u95F4\u73AF\u7ED5\u53CC\u8F68\u4EA4\u53C9\u76843D\u9EC4\u91D1\u539F\u5B50\u7535\u5B50\u661F\u73AF\u4E0E\u5347\u817E\u5206\u5B50\u7403",
      paletteIdx: 5,
      eyeY: -0.18,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 55,
      surveyOrder: 6,
      groupTag: "survey10",
      species: "surveyMediaCreative",
      name: "\u6D41\u5149\u64AD\u5BA2 PlayMuse",
      roleTitle: "6. \u5A92\u4F53 / \u5185\u5BB9 / \u521B\u610F",
      roleSub: "\u81EA\u5A92\u4F53\u535A\u4E3B \xB7 \u5F71\u89C6\u526A\u8F91 \xB7 \u5E7F\u544A\u6587\u6848",
      category: "\u9996\u5C4F\u8C03\u7814 06 \xB7 \u5A92\u4F53/\u5185\u5BB9/\u521B\u610F",
      desc: "\u4EE3\u8868\u30106. \u5A92\u4F53 / \u5185\u5BB9 / \u521B\u610F\u3011\uFF1A\u5927\u5706\u89D2\u7ACB\u4F53\u64AD\u653E\u952E\u4E09\u89D2\u68F1\u955C\uFF08\u25B6\uFF09\uFF0C\u5934\u6234\u9EC4\u91D1\u827A\u672F\u8D1D\u96F7\u51A0\u4E0E\u95EA\u70C1\u661F\u5FBD",
      paletteIdx: 8,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 56,
      surveyOrder: 7,
      groupTag: "survey10",
      species: "surveyFinLegal",
      name: "\u5929\u5E73\u91D1\u5E01 CoinScale",
      roleTitle: "7. \u91D1\u878D / \u8D22\u52A1 / \u6CD5\u52A1",
      roleSub: "\u6295\u878D\u8D44 \xB7 \u8D22\u7A0E\u5BA1\u8BA1 \xB7 \u5F8B\u5E08\u5408\u89C4",
      category: "\u9996\u5C4F\u8C03\u7814 07 \xB7 \u91D1\u878D/\u8D22\u52A1/\u6CD5\u52A1",
      desc: "\u4EE3\u8868\u30107. \u91D1\u878D / \u8D22\u52A1 / \u6CD5\u52A1\u3011\uFF1A\u9576\u5D4C\u7ACB\u4F53 \xA5 \u8D27\u5E01\u91D1\u5FBD\u7684\u6D6E\u96D5\u5BBD\u8FB9\u91D1\u5E01\uFF0C\u9876\u7AEF\u9AD8\u8038\u5BF9\u79F0\u9EC4\u91D1\u516C\u6B63\u5929\u5E73\u4E0E\u53CC\u60AC\u7A7A\u79E4\u76D8",
      paletteIdx: 3,
      eyeY: -0.18,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 57,
      surveyOrder: 8,
      groupTag: "survey10",
      species: "surveyCorpManage",
      name: "\u9AD8\u7BA1\u9886\u5E26\u5305 ExecCase",
      roleTitle: "8. \u4F01\u4E1A\u804C\u80FD / \u7BA1\u7406",
      roleSub: "\u9AD8\u7BA1\u56E2\u961F \xB7 HR\u4EBA\u529B \xB7 \u884C\u653F\u4E0EPMO",
      category: "\u9996\u5C4F\u8C03\u7814 08 \xB7 \u4F01\u4E1A\u804C\u80FD/\u7BA1\u7406",
      desc: "\u4EE3\u8868\u30108. \u4F01\u4E1A\u804C\u80FD / \u7BA1\u7406\u3011\uFF1A\u5E26\u62F1\u5F62\u63D0\u624B\u4E0E\u53CC\u91D1\u9501\u6263\u7684\u5706\u89D2\u9AD8\u7BA1\u516C\u6587\u5305\uFF0C\u80F8\u524D\u7CFB\u7740\u7ACB\u4F53\u5229\u843D\u7684\u9EC4\u91D1\u5546\u52A1\u9886\u5E26",
      paletteIdx: 4,
      eyeY: 0.06,
      eyeZ: 0.36,
      eyeGap: 0.21,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 58,
      surveyOrder: 9,
      groupTag: "survey10",
      species: "surveyStartupRocket",
      name: "\u7834\u7A7A\u706B\u7BAD LaunchPad",
      roleTitle: "9. \u81EA\u7531\u804C\u4E1A / \u521B\u4E1A\u8005",
      roleSub: "\u72EC\u7ACB\u5F00\u53D1\u8005 \xB7 \u521B\u59CB\u4EBA \xB7 \u6570\u5B57\u6E38\u6C11",
      category: "\u9996\u5C4F\u8C03\u7814 09 \xB7 \u81EA\u7531\u804C\u4E1A/\u521B\u4E1A\u8005",
      desc: "\u4EE3\u8868\u30109. \u81EA\u7531\u804C\u4E1A / \u521B\u4E1A\u8005\u3011\uFF1A\u84C4\u52BF\u5347\u7A7A\u7684\u6D41\u7EBF\u578B\u80D6\u809A\u5C0F\u706B\u7BAD\uFF0C\u914D\u5907\u9EC4\u91D1\u9F3B\u9525\u5C16\u9876\u3001\u53CC\u4FA7\u7834\u98CE\u5C3E\u7FFC\u4E0E\u63A8\u8FDB\u706B\u82D7",
      paletteIdx: 2,
      eyeY: 0.04,
      eyeZ: 0.44,
      eyeGap: 0.18,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 59,
      surveyOrder: 10,
      groupTag: "survey10",
      species: "surveyOtherOmni",
      name: "\u4E07\u8C61\u56DB\u5BAB\u683C BentoMore",
      roleTitle: "10. \u5176\u4ED6\u884C\u4E1A\u4E0E\u8EAB\u4EFD",
      roleSub: "\u533B\u7597 \xB7 \u653F\u5E9C \xB7 \u670D\u52A1 \xB7 \u5236\u9020 \xB7 \u63A2\u7D22\u4E2D",
      category: "\u9996\u5C4F\u8C03\u7814 10 \xB7 \u5176\u4ED6\u591A\u5143\u884C\u4E1A",
      desc: "\u4EE3\u8868\u301010. \u5176\u4ED6\uFF08\u533B\u7597\u3001\u653F\u5E9C\u3001\u670D\u52A1\u4E1A\u3001\u5236\u9020\u3001\u5F85\u4E1A\u7B49\uFF09\u3011\uFF1A\u7ECF\u5178\u201C\u66F4\u591A\u5206\u7C7B\u201D \u229E \u56DB\u5BAB\u683C\u9020\u578B\uFF0C\u53F3\u4E0A\u89D2\u8DC3\u51FA45\xB0\u65CB\u8F6C\u9EC4\u91D1\u65B9\u5757\u4E0E \u2022\u2022\u2022 \u66F4\u591A\u5706\u70B9",
      paletteIdx: 10,
      eyeY: -0.16,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 精修 30 款：【天然蔬果 (15款) & 匠心料理 (15款)】高辨识度美食精灵 (#60 ~ #89)
    // =========================================================================
    {
      id: 60,
      groupTag: "food30",
      species: "foodStrawberry",
      name: "\u751C\u5FC3\u8349\u8393 Berry",
      category: "\u5929\u7136\u852C\u679C \xB7 \u6D46\u679C",
      desc: "\u4E0A\u5BBD\u4E0B\u5C16\u7684\u9971\u6EE1\u5FC3\u5F62\u8349\u8393\u679C\u8EAB\uFF0C\u5934\u6234\u4E94\u89D2\u661F\u53F6\u843C\u51A0\u4E0E\u5FAE\u5F2F\u679C\u8482\uFF0C\u53CC\u988A\u70B9\u7F00\u7ACB\u4F53\u8349\u8393\u7C7D",
      paletteIdx: 1,
      eyeY: -0.06,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 61,
      groupTag: "food30",
      species: "foodPineapple",
      name: "\u9EC4\u91D1\u51E4\u68A8 Ananas",
      category: "\u5929\u7136\u852C\u679C \xB7 \u70ED\u5E26",
      desc: "\u5706\u6DA6\u9971\u6EE1\u7684\u83F1\u683C\u7EB9\u83E0\u841D\u679C\u8EAB\uFF0C\u5934\u9876\u8212\u5C55\u7740\u53CC\u5C42\u9AD8\u8038\u7684\u70ED\u5E26\u51E4\u68A8\u5251\u53F6\u51A0",
      paletteIdx: 3,
      eyeY: -0.16,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 62,
      groupTag: "food30",
      species: "foodTwinCherry",
      name: "\u53CC\u751F\u6A31\u6843 Sakura",
      category: "\u5929\u7136\u852C\u679C \xB7 \u6D46\u679C",
      desc: "\u4E00\u524D\u4E00\u540E\u4EB2\u5BC6\u4F9D\u504E\u7684\u53CC\u751F\u7EA2\u6A31\u6843\uFF0C\u5934\u9876\u9AD8\u9AD8\u633D\u8D77\u4EA4\u6C47\u7684\u9EC4\u91D1\u679C\u67C4\u4E0E\u65B0\u53F6",
      paletteIdx: 9,
      eyeY: -0.22,
      eyeZ: 0.5,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 63,
      groupTag: "food30",
      species: "foodAcorn",
      name: "\u68EE\u6797\u6A61\u679C Acorn",
      category: "\u5929\u7136\u852C\u679C \xB7 \u575A\u679C",
      desc: "\u5E95\u90E8\u5FAE\u5C16\u7684\u5706\u6DA6\u6A61\u679C\u8EAB\u8EAF\uFF0C\u5934\u6234\u5BBD\u6A90\u8D1D\u96F7\u5E3D\u72B6\u58F3\u6597\u4E0E\u5C0F\u5DE7\u679D\u8482",
      paletteIdx: 2,
      eyeY: -0.18,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 64,
      groupTag: "food30",
      species: "foodBanana",
      name: "\u5265\u76AE\u82AD\u5A1C Banana",
      category: "\u5929\u7136\u852C\u679C \xB7 \u70ED\u5E26",
      desc: "\u5F2F\u6708\u5F27\u5F62\u9999\u8549\u679C\u8089\u4ECE\u5E95\u5EA7\u63A2\u51FA\uFF0C\u8170\u95F4\u5411\u4E09\u9762\u4F18\u96C5\u7FFB\u5377\u5782\u4E0B\u5BBD\u539A\u7684\u9EC4\u91D1\u9999\u8549\u76AE\u74E3",
      paletteIdx: 3,
      eyeY: 0.14,
      eyeZ: 0.36,
      eyeGap: 0.17,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 65,
      groupTag: "food30",
      species: "foodWatermelon",
      name: "\u8106\u751C\u897F\u74DC Suika",
      category: "\u5929\u7136\u852C\u679C \xB7 \u74DC\u679C",
      desc: "\u7ECF\u5178\u6247\u5F62\u5927\u897F\u74DC\u5207\u7247\uFF0C\u5E95\u8FB9\u4E25\u4E1D\u5408\u7F1D\u5305\u88F9\u7740\u539A\u5B9E\u5706\u5F27\u74DC\u76AE\u6258\uFF0C\u8868\u9762\u70B9\u7F005\u9897\u6C34\u6EF4\u9ED1\u7C7D\u4E0E\u54AC\u53E3",
      paletteIdx: 1,
      eyeY: -0.04,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 66,
      groupTag: "food30",
      species: "foodAvocado",
      name: "\u9C9C\u5207\u725B\u6CB9\u679C Avo",
      category: "\u5929\u7136\u852C\u679C \xB7 \u8F7B\u98DF",
      desc: "\u5BF9\u534A\u5207\u5F00\u7684\u7CBE\u96D5\u725B\u6CB9\u679C\uFF1A\u5916\u5C42\u6DF1\u58A8\u7EFF\u7CD9\u9762\u539A\u679C\u76AE\uFF0C\u5185\u5D4C\u7EC6\u817B\u5976\u5AE9\u679C\u8089\u4E0E\u4E2D\u592E\u6D51\u5706\u9AD8\u8038\u7684\u7126\u7CD6\u5149\u611F\u5927\u679C\u6838",
      paletteIdx: 10,
      eyeY: 0.22,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 67,
      groupTag: "food30",
      species: "foodMushroom",
      name: "\u6CE2\u70B9\u4F1E\u83C7 Kinoko",
      category: "\u5929\u7136\u852C\u679C \xB7 \u83CC\u83C7",
      desc: "\u5BBD\u5927\u60AC\u6311\u7684\u7EA2\u4F1E\u83CC\u76D6\uFF08\u8868\u9762\u9576\u5D4C\u9971\u6EE1\u51F8\u8D77\u7684\u5927\u6CE2\u70B9\u7403\uFF09\u642D\u914D\u4E0B\u65B9\u5185\u6536\u5706\u6DA6\u7684\u649E\u8272\u7C97\u83CC\u67C4",
      paletteIdx: 1,
      eyeY: 0.08,
      eyeZ: 0.56,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 68,
      groupTag: "food30",
      species: "foodKiwi",
      name: "\u6E05\u751C\u5947\u5F02\u679C Kiwi",
      category: "\u5929\u7136\u852C\u679C \xB7 \u9C9C\u679C",
      desc: "\u5BF9\u534A\u5207\u5F00\u7684\u9971\u6EE1\u7315\u7334\u6843\uFF1A\u5916\u5C42\u68D5\u8910\u5FAE\u6BDB\u679C\u76AE\u58F3\u6258\uFF0C\u5185\u90E8\u5AE9\u7EFF\u591A\u6C41\u679C\u8089\uFF0C\u4E2D\u592E\u4E00\u5708\u73AF\u7ED5\u767D\u82AF\u7684\u7EC6\u5C0F\u829D\u9EBB\u7C7D",
      paletteIdx: 0,
      eyeY: 0.18,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 69,
      groupTag: "food30",
      species: "foodEggplant",
      name: "\u7D2B\u6C14\u8304\u5B9D Nasu",
      category: "\u5929\u7136\u852C\u679C \xB7 \u852C\u98DF",
      desc: "\u4E0A\u6536\u4E0B\u4E30\u3001\u5FAE\u5F2F\u4FCF\u76AE\u7684\u7D2B\u8304\u5B50\u7CBE\u7075\uFF0C\u5934\u9876\u6234\u7740\u4E94\u722A\u661F\u5F62\u8304\u843C\u5E3D\u4E0E\u5F2F\u94A9\u67C4",
      paletteIdx: 7,
      eyeY: -0.14,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 70,
      groupTag: "food30",
      species: "foodCarrot",
      name: "\u62D4\u5730\u841D\u535C Ninjin",
      category: "\u5929\u7136\u852C\u679C \xB7 \u6839\u830E",
      desc: "\u5706\u6DA6\u5012\u9525\u5F62\u80E1\u841D\u535C\u8EAB\u8EAF\uFF0C\u5934\u9876\u65FA\u76DB\u7C07\u62E5\u7740\u4E09\u74E3\u7FE0\u7EFF\u84EC\u677E\u7684\u841D\u535C\u7F28\u53F6",
      paletteIdx: 2,
      eyeY: 0.04,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 71,
      groupTag: "food30",
      species: "foodLemon",
      name: "\u5143\u6C14\u67E0\u6AAC Citron",
      category: "\u5929\u7136\u852C\u679C \xB7 \u67D1\u6A58",
      desc: "\u4E24\u7AEF\u5E26\u6709\u6807\u5FD7\u6027\u51F8\u8D77\u5C0F\u5C16\u5634\u7684\u5FAE\u503E\u9C9C\u67E0\u6AAC\uFF0C\u9876\u7AEF\u840C\u53D1\u4E24\u7247\u6E05\u9999\u7EFF\u53F6",
      paletteIdx: 3,
      eyeY: -0.04,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 72,
      groupTag: "food30",
      species: "foodPistachio",
      name: "\u5F00\u5FC3\u679C\u679C Nutty",
      category: "\u5929\u7136\u852C\u679C \xB7 \u575A\u679C",
      desc: "\u7FE0\u7EFF\u9971\u6EE1\u7684\u5F00\u5FC3\u679C\u4EC1\u4ECE\u5DE6\u53F3\u4E24\u4FA7\u5FAE\u5F20\u5F00\u7684\u575A\u679C\u786C\u58F3\u4E2D\u63A2\u51FA\u8111\u888B\uFF0C\u81EA\u5E26\u5FAE\u7B11\u6C14\u573A",
      paletteIdx: 10,
      eyeY: 0.06,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 73,
      groupTag: "food30",
      species: "foodPeaPod",
      name: "\u4E09\u7C92\u8C4C\u8C46 Edamame",
      category: "\u5929\u7136\u852C\u679C \xB7 \u8C46\u7C7B",
      desc: "\u5F2F\u5982\u65B0\u6708\u5C0F\u8239\u7684\u9971\u6EE1\u9752\u8C46\u835A\uFF0C\u8231\u5185\u6574\u6574\u9F50\u9F50\u5E76\u6392\u5750\u7740\u4E09\u9897\u5706\u6DA6\u5C0F\u8C46\u73E0",
      paletteIdx: 4,
      eyeY: -0.14,
      eyeZ: 0.38,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 74,
      groupTag: "food30",
      species: "foodChili",
      name: "\u706B\u7130\u8FA3\u6912 Jalapeno",
      category: "\u5929\u7136\u852C\u679C \xB7 \u8F9B\u9999",
      desc: "\u5C3E\u7AEF\u52A8\u611F\u4E0A\u7FD8\u7684J\u578B\u7EA2\u8FA3\u6912\u526A\u5F71\uFF0C\u5934\u6234\u9EC4\u91D1\u8482\u5E3D\u5E76\u8FF8\u53D1\u51FA\u70ED\u8FA3\u661F\u706B",
      paletteIdx: 1,
      eyeY: 0.06,
      eyeZ: 0.38,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 75,
      groupTag: "food30",
      species: "foodOnigiri",
      name: "\u6D77\u82D4\u996D\u56E2 Onigiri",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u65E5\u5F0F",
      desc: "\u5706\u6DA6\u9971\u6EE1\u7684\u7ECF\u5178\u4E09\u89D2\u996D\u56E2\uFF0C\u5E95\u90E8\u6B63\u4E2D\u88F9\u7740\u633A\u62EC\u7684\u6D77\u82D4\u7247\uFF0C\u5934\u9876\u7F00\u7740\u7EA2\u6885\u5E72",
      paletteIdx: 0,
      eyeY: 0.08,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 76,
      groupTag: "food30",
      species: "foodPopsicle",
      name: "\u54AC\u53E3\u51B0\u68CD IceBar",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u51B0\u54C1",
      desc: "\u53F3\u4E0A\u89D2\u88AB\u4FCF\u76AE\u54AC\u51FA\u4E00\u53E3\u5706\u5F27\u7F3A\u53E3\u7684\u590F\u65E5\u51B0\u68CD\uFF0C\u5E95\u90E8\u63D2\u7740\u5706\u6DA6\u6728\u96EA\u7CD5\u68D2",
      paletteIdx: 5,
      eyeY: -0.02,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 77,
      groupTag: "food30",
      species: "foodDonut",
      name: "\u7CD6\u971C\u751C\u5708 Donut",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u70D8\u7119",
      desc: "\u9971\u6EE1\u5706\u73AF\u751C\u751C\u5708\uFF0C\u4E0A\u534A\u5708\u8986\u76D6\u539A\u5B9E\u7CD6\u971C\u6DCB\u9762\u4E0E\u5F69\u8272\u7CD6\u9488\u8C46",
      paletteIdx: 8,
      eyeY: -0.24,
      eyeZ: 0.38,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 78,
      groupTag: "food30",
      species: "foodSwissCheese",
      name: "\u745E\u58EB\u5976\u916A Emmental",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u4E73\u916A",
      desc: "\u7ECF\u5178\u4E09\u89D2\u6954\u5F62\u5927\u5B54\u5976\u916A\u5757\uFF0C\u8868\u9762\u70B9\u7F00\u7740\u9519\u843D\u6709\u81F4\u7684\u7ACB\u4F53\u547C\u5438\u6C14\u5B54\u7403",
      paletteIdx: 3,
      eyeY: -0.1,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 79,
      groupTag: "food30",
      species: "foodSunnyEgg",
      name: "\u592A\u9633\u714E\u86CB Tamago",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u671D\u98DF",
      desc: "\u4E0D\u89C4\u5219\u4E91\u6735\u6CE2\u6D6A\u8FB9\u86CB\u767D\u5E95\u5EA7\uFF0C\u5DE6\u4E0A\u65B9\u9AD8\u9AD8\u9F13\u8D77\u4E00\u9897\u5706\u6DA6\u9971\u6EE1\u7684\u9EC4\u91D1\u6E8F\u5FC3\u86CB\u9EC4",
      paletteIdx: 2,
      eyeY: -0.14,
      eyeZ: 0.32,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 80,
      groupTag: "food30",
      species: "foodIceCreamCone",
      name: "\u65CB\u98CE\u751C\u7B52 Gelato",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u51B0\u54C1",
      desc: "\u9999\u8106\u9525\u5F62\u86CB\u7B52\u5E95\u5EA7\u6258\u4E3E\u7740\u4E09\u5C42\u76D8\u65CB\u800C\u4E0A\u7684\u7EF5\u5BC6\u51B0\u6DC7\u6DCB\u96EA\u9876\u4E0E\u7FD8\u66F2\u5C16\u89D2",
      paletteIdx: 9,
      eyeY: 0.08,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 81,
      groupTag: "food30",
      species: "foodNigiriSushi",
      name: "\u624B\u63E1\u5BFF\u53F8 Nigiri",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u548C\u98DF",
      desc: "\u9971\u6EE1\u692D\u7403\u918B\u996D\u56E2\u4E0A\u8986\u7740\u4E00\u7247\u5FAE\u5F2F\u9C9C\u867E\u4EC1\uFF0C\u53F3\u4FA7\u4FCF\u76AE\u7FD8\u8D77\u5206\u53C9\u867E\u5C3E\u4E0E\u6D77\u82D4\u8170\u5E26",
      paletteIdx: 1,
      eyeY: -0.18,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 82,
      groupTag: "food30",
      species: "foodSteamedBao",
      name: "\u704C\u6C64\u5C0F\u7B3C\u5305 Baozi",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u4E2D\u70B9",
      desc: "\u767D\u80D6\u6D51\u5706\u7684\u704C\u6C64\u5305\u8EAB\u8EAF\uFF0C\u5934\u9876\u6C47\u805A8\u9053\u7ACB\u4F53\u624B\u5DE5\u634F\u8936\u4E0E\u9EC4\u91D1\u6536\u53E3\u9876\u73E0",
      paletteIdx: 0,
      eyeY: -0.08,
      eyeZ: 0.52,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 83,
      groupTag: "food30",
      species: "foodRamenBowl",
      name: "\u4E00\u4E50\u62C9\u9762 Ramen",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u9762\u98DF",
      desc: "\u9971\u6EE1\u5927\u7897\u516C\u76DB\u7740\u9AD8\u9AD8\u9686\u8D77\u7684\u9762\u6761\u5C71\uFF0C\u7897\u53E3\u659C\u67B6\u7740\u9EC4\u91D1\u53CC\u7B77\u4E0E\u9E23\u4EBA\u5377\u9C7C\u677F",
      paletteIdx: 1,
      eyeY: -0.14,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 84,
      groupTag: "food30",
      species: "foodBobaTea",
      name: "\u6CE2\u9738\u5976\u8336 Boba",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u8336\u996E",
      desc: "\u914D\u6709\u5BBD\u8FB9\u649E\u8272\u5C01\u53E3\u5708\u4E0E\u5976\u76D6\u5706\u9876\u7684\u5976\u8336\u676F\uFF0C\u659C\u63D2\u5927\u53E3\u5F84\u7C97\u5438\u7BA1\uFF0C\u676F\u5E95\u6392\u5E035\u9897\u5927\u53F7\u9ED1\u7CD6\u6CE2\u9738\u73CD\u73E0",
      paletteIdx: 7,
      eyeY: -0.04,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 85,
      groupTag: "food30",
      species: "foodCaramelPudding",
      name: "\u7126\u7CD6\u5E03\u4E01 Purin",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u751C\u54C1",
      desc: "Q\u5F39\u5012\u68AF\u5F62\u9E21\u86CB\u5E03\u4E01\u8EAB\u8EAF\uFF0C\u5934\u9876\u8986\u76D6\u7740\u6CE2\u6D6A\u6D41\u6DCC\u7684\u7126\u7CD6\u6DCB\u9762\u4E0E\u9C9C\u7EA2\u6A31\u6843",
      paletteIdx: 3,
      eyeY: -0.12,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 86,
      groupTag: "food30",
      species: "foodMacaron",
      name: "\u6CD5\u5F0F\u9A6C\u5361\u9F99 Macaron",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u6CD5\u751C",
      desc: "\u4E0A\u4E0B\u4E24\u7247\u9971\u6EE1\u5706\u62F1\u674F\u4EC1\u997C\u76D6\uFF0C\u4E2D\u95F4\u5939\u7740\u4E00\u5708\u539A\u5B9E\u649E\u8272\u7684\u5C11\u5973\u5FC3\u5976\u6CB9\u857E\u4E1D\u5C42",
      paletteIdx: 8,
      eyeY: 0.2,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 87,
      groupTag: "food30",
      species: "foodPizzaSlice",
      name: "\u829D\u58EB\u62AB\u8428 Pizza",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u897F\u5F0F",
      desc: "\u7ECF\u5178\u4E09\u89D2\u62AB\u8428\u5207\u7247\uFF0C\u9876\u7AEF\u633D\u7740\u9F13\u9F13\u7684\u9EC4\u91D1\u70E4\u997C\u8FB9\uFF0C\u8868\u9762\u8D34\u7740\u4E09\u7247\u9999\u80A0\u5706\u7247",
      paletteIdx: 2,
      eyeY: -0.12,
      eyeZ: 0.34,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 88,
      groupTag: "food30",
      species: "foodHotdog",
      name: "\u5939\u5FC3\u70ED\u72D7 Hotdog",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u7F8E\u5F0F",
      desc: "\u677E\u8F6F\u957F\u5706\u9762\u5305\u6258\u62B1\u7740\u4E24\u7AEF\u63A2\u51FA\u5934\u7684\u5F2F\u5F2F\u70E4\u80A0\uFF0C\u8868\u9762\u6324\u7740\u6CE2\u6D6A\u9EC4\u91D1\u82A5\u672B\u9171",
      paletteIdx: 1,
      eyeY: -0.16,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 89,
      groupTag: "food30",
      species: "foodFortuneCookie",
      name: "\u5E78\u8FD0\u7B7E\u8BED\u997C Fortune",
      category: "\u5320\u5FC3\u6599\u7406 \xB7 \u5947\u8DA3",
      desc: "\u7ECF\u5178\u6298\u5F2F\u5143\u5B9D\u72B6\u8106\u997C\u9020\u578B\uFF0C\u53F3\u4E0A\u89D2\u4FCF\u76AE\u63A2\u51FA\u4E00\u5F20\u5370\u7740\u597D\u8FD0\u7684\u9EC4\u91D1\u7B7E\u8BED\u7EB8\u6761",
      paletteIdx: 3,
      eyeY: 0.08,
      eyeZ: 0.42,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第五批钦点保留的 9 款精灵（原 96, 100, 102, 104, 106, 113, 114, 119, 120 -> 现编号 #90 ~ #98）
    // =========================================================================
    {
      id: 90,
      groupTag: "kept49",
      species: "botCyberDog",
      name: "\u673A\u68B0\u840C\u72AC Rover",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u840C\u5BA0",
      desc: "\u5782\u7740\u4E24\u53EA\u5706\u6DA6\u6298\u8033\u3001\u5934\u9876\u9EC4\u91D1\u9AA8\u5934\u5929\u7EBF\u7684\u5FE0\u5B9E\u5C0F\u72D7\u7CBE\u7075\uFF08\u539F#96\u4FDD\u7559\uFF09",
      paletteIdx: 2,
      eyeY: -0.04,
      eyeZ: 0.48,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 91,
      groupTag: "kept49",
      species: "botArcadeGhost",
      name: "\u6CE2\u6D6A\u5C0F\u5E7D\u7075 Boo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u4E0B\u6446\u5E26\u6709\u56DB\u74E3\u6CE2\u6D6A\u88D9\u88FE\u7684\u7ECF\u5178\u5C0F\u5E7D\u7075\u526A\u5F71\uFF0C\u5934\u9876\u60AC\u6D6E\u9EC4\u91D1\u5149\u73AF\uFF08\u539F#100\u4FDD\u7559\uFF09",
      paletteIdx: 7,
      eyeY: 0.08,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 92,
      groupTag: "kept49",
      species: "botAnvilForge",
      name: "\u953B\u9020\u94C1\u7827 Forge",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u786C\u6717\u7684\u72EC\u89D2\u94C1\u5320\u94C1\u7827\u8EAB\u8EAF\uFF0C\u4E0A\u65B9\u60AC\u505C\u4E00\u67C4\u84C4\u52BF\u953B\u9020\u7684\u9EC4\u91D1\u94C1\u9524\uFF08\u539F#102\u4FDD\u7559\uFF09",
      paletteIdx: 0,
      eyeY: -0.14,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 93,
      groupTag: "kept49",
      species: "botAstroHelmet",
      name: "\u661F\u822A\u5934\u76D4 Astro",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u592A\u7A7A",
      desc: "\u914D\u6709\u5BBD\u5E45\u9EC4\u91D1\u5168\u666F\u9762\u7F69\u6846\u4E0E\u4FA7\u7FFC\u901A\u8BAF\u5929\u7EBF\u7684\u5B87\u822A\u5458\u5934\u76D4\u7CBE\u7075\uFF08\u539F#104\u4FDD\u7559\uFF09",
      paletteIdx: 0,
      eyeY: 0.02,
      eyeZ: 0.52,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 94,
      groupTag: "kept49",
      species: "botWizardHat",
      name: "\u79D8\u6CD5\u5DEB\u5E08\u5E3D Merlin",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u5934\u6234\u5BBD\u6A90\u6B6A\u5C16\u89D2\u9B54\u6CD5\u5DEB\u5E08\u5E3D\u4E0E\u661F\u8292\u5E3D\u6263\u7684\u79D8\u6CD5\u7CBE\u7075\uFF08\u539F#106\u4FDD\u7559\uFF09",
      paletteIdx: 7,
      eyeY: -0.22,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 95,
      groupTag: "kept49",
      species: "botGlobeStand",
      name: "\u7ECF\u7EAC\u5730\u7403\u4EEA Atlas",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5668\u7269",
      desc: "\u503E\u659C\u65CB\u8F6C\u7684\u851A\u84DD\u5730\u7403\u4EEA\uFF0C\u5916\u67B6C\u578B\u9EC4\u91D1\u5B50\u5348\u7EBF\u523B\u5EA6\u73AF\u4E0E\u5E95\u5EA7\uFF08\u539F#113\u4FDD\u7559\uFF09",
      paletteIdx: 0,
      eyeY: 0.06,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 96,
      groupTag: "kept49",
      species: "botPillCapsule",
      name: "\u5143\u6C14\u80F6\u56CA Capsule",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u751F\u6D3B",
      desc: "\u5FAE\u503E\u649E\u8272\u62FC\u63A5\u7684\u5706\u6DA6\u80F6\u56CA\u7CBE\u7075\uFF0C\u5DE6\u4E0A\u4F34\u751F\u6CBB\u6108\u56DB\u89D2\u661F\u8292\uFF08\u539F#114\u4FDD\u7559\uFF09",
      paletteIdx: 10,
      eyeY: 0.08,
      eyeZ: 0.38,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 97,
      groupTag: "kept49",
      species: "botLightPrism",
      name: "\u5206\u5149\u4E09\u68F1\u955C Prism",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5149\u5B66",
      desc: "\u633A\u62D4\u7B49\u8FB9\u4E09\u89D2\u5206\u5149\u68F1\u955C\uFF0C\u53F3\u4FA7\u6298\u5C04\u51FA\u4E09\u9053\u6563\u5C04\u9EC4\u91D1\u5149\u675F\uFF08\u539F#119\u4FDD\u7559\uFF09",
      paletteIdx: 5,
      eyeY: -0.08,
      eyeZ: 0.38,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 98,
      groupTag: "kept49",
      species: "botLighthouse",
      name: "\u9886\u822A\u706F\u5854 Beacon",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5EFA\u7B51",
      desc: "\u4E0A\u6536\u4E0B\u5BBD\u7684\u822A\u6D77\u706F\u5854\u8EAB\u8EAF\uFF0C\u9876\u7AEF\u51A0\u4EE5\u9EC4\u91D1\u89C2\u666F\u53F0\u4E0E\u53CC\u4FA7\u63A2\u7167\u5149\u675F\uFF08\u539F#120\u4FDD\u7559\uFF09",
      paletteIdx: 1,
      eyeY: -0.18,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第六批筛选保留的 25 款精灵（剔除原 101, 102, 109, 111, 115, 124, 129 后保留 -> 现编号 #99 ~ #123）
    // =========================================================================
    {
      id: 99,
      groupTag: "kept49",
      species: "iconWhale",
      name: "\u55B7\u6C34\u5C0F\u9CB8 Whaley",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6D77\u6D0B",
      desc: "\u5706\u6EDA\u6EDA\u7684\u84DD\u9CB8\u8EAB\u8EAF\u642D\u914D\u5DE6\u4FA7\u9AD8\u9AD8\u7FD8\u8D77\u7684\u5206\u53C9\u9CB8\u5C3E\uFF0C\u5934\u9876\u55B7\u6D8C\u51FA\u9EC4\u91D1\u6C34\u82B1\u55B7\u6CC9",
      paletteIdx: 0,
      eyeY: -0.06,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 100,
      groupTag: "kept49",
      species: "iconBunny",
      name: "\u957F\u8033\u840C\u5154 Bunny",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u68EE\u6797",
      desc: "\u767D\u80D6\u7CEF\u7C73\u56E2\u5B50\u822C\u7684\u5154\u5154\u8111\u888B\uFF0C\u5934\u9876\u7AD6\u7740\u4E24\u53EA\u4FEE\u957F\u9971\u6EE1\u7684\u5154\u8033\u6735",
      paletteIdx: 8,
      eyeY: -0.16,
      eyeZ: 0.48,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 101,
      groupTag: "kept49",
      species: "iconDeer",
      name: "\u68EE\u7CFB\u5C0F\u9E7F Bambi",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u68EE\u6797",
      desc: "\u6E29\u987A\u5706\u6DA6\u7684\u5C0F\u9E7F\u8111\u888B\uFF0C\u5934\u9876\u8212\u5C55\u7740\u4E00\u5BF9\u5206\u53C9\u7684\u9EC4\u91D1\u9E7F\u89D2\u4E0E\u5411\u4E24\u4FA7\u5F20\u5F00\u7684\u9E7F\u8033",
      paletteIdx: 2,
      eyeY: -0.14,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 102,
      groupTag: "kept49",
      species: "iconPenguin",
      name: "\u5446\u840C\u4F01\u9E45 Pingu",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6781\u5730",
      desc: "\u61A8\u6001\u53EF\u63AC\u7684\u68A8\u5F62\u5C0F\u4F01\u9E45\u8EAB\u8EAF\uFF0C\u4E24\u4FA7\u62CD\u6253\u7740\u5C0F\u7FC5\u8180\uFF0C\u642D\u914D\u9EC4\u91D1\u6241\u5634\u4E0E\u811A\u8E7C",
      paletteIdx: 6,
      eyeY: 0.14,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 103,
      groupTag: "kept49",
      species: "iconSnowman",
      name: "\u793C\u5E3D\u96EA\u4EBA Frosty",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u51B0\u96EA",
      desc: "\u4E00\u5927\u4E00\u5C0F\u53CC\u7403\u53E0\u8D77\u7684\u7ECF\u5178\u51AC\u65E5\u96EA\u4EBA\uFF0C\u659C\u6234\u7740\u9EC4\u91D1\u9AD8\u9876\u793C\u5E3D",
      paletteIdx: 0,
      eyeY: 0.22,
      eyeZ: 0.44,
      eyeGap: 0.18,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 104,
      groupTag: "kept49",
      species: "iconDevil",
      name: "\u5F2F\u89D2\u5C0F\u6076\u9B54 Diablo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u5706\u6DA6\u9971\u6EE1\u7684\u5C0F\u6076\u9B54\u8111\u888B\uFF0C\u5934\u9876\u957F\u7740\u4E00\u5BF9\u9738\u6C14\u4E0A\u626C\u7684\u9EC4\u91D1\u725B\u89D2\u4E0E\u80CC\u540E\u7684\u8759\u8760\u5C0F\u7FFC",
      paletteIdx: 6,
      eyeY: -0.08,
      eyeZ: 0.5,
      eyeGap: 0.21,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 105,
      groupTag: "kept49",
      species: "iconUnicorn",
      name: "\u72EC\u89D2\u5929\u9A6C Uni",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u989D\u524D\u9AD8\u9AD8\u8038\u7ACB\u7740\u87BA\u65CB\u9EC4\u91D1\u72EC\u89D2\u4E0E\u98D8\u9038\u4FA7\u9B03\u6BDB\u7684\u68A6\u5E7B\u72EC\u89D2\u517D\u7CBE\u7075",
      paletteIdx: 7,
      eyeY: -0.12,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 106,
      groupTag: "kept49",
      species: "iconElephant",
      name: "\u62DB\u98CE\u8033\u5C0F\u8C61 Dumbo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8349\u539F",
      desc: "\u5DE6\u53F3\u4E24\u4FA7\u6251\u6247\u7740\u4E24\u53EA\u5BBD\u5927\u5706\u6DA6\u62DB\u98CE\u8033\u7684\u5C0F\u8C61\u7CBE\u7075\uFF0C\u5934\u9876\u6234\u7740\u9A6C\u620F\u56E2\u9EC4\u91D1\u5C0F\u5E3D",
      paletteIdx: 5,
      eyeY: -0.04,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 107,
      groupTag: "kept49",
      species: "iconOctopus",
      name: "\u516B\u722A\u7AE0\u9C7C\u5B9D Takoyaki",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6D77\u6D0B",
      desc: "\u5706\u9F13\u9F13\u7684\u5927\u8111\u888B\u4E0B\u65B9\u73AF\u7ED5\u7740\u4E00\u5708\u5377\u66F2\u7684\u516B\u722A\u89E6\u624B\u88D9\u8FB9\uFF0C\u5934\u9876\u7CFB\u7740\u9EC4\u91D1\u6C34\u624B\u5708",
      paletteIdx: 1,
      eyeY: 0.06,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 108,
      groupTag: "kept49",
      species: "iconButterfly",
      name: "\u5C55\u7FC5\u5F69\u8776 Papillon",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u81EA\u7136",
      desc: "\u4E0A\u5927\u4E0B\u5C0F\u56DB\u7247\u5BF9\u79F0\u5706\u6DA6\u8776\u7FFC\u4F18\u96C5\u8212\u5C55\uFF0C\u9876\u7AEF\u63A2\u51FA\u4E24\u6839\u5377\u66F2\u7684\u9EC4\u91D1\u8776\u987B",
      paletteIdx: 8,
      eyeY: 0.02,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 109,
      groupTag: "kept49",
      species: "iconTulip",
      name: "\u90C1\u91D1\u9999\u82B1\u82DE Tulip",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u82B1\u5349",
      desc: "\u4E09\u74E3\u9971\u6EE1\u4F18\u96C5\u5408\u62E2\u7684\u90C1\u91D1\u9999\u82B1\u51A0\u8F6E\u5ED3\uFF0C\u5E95\u90E8\u6258\u7740\u5BF9\u79F0\u8212\u5C55\u7684\u9EC4\u91D1\u62A4\u53F6",
      paletteIdx: 9,
      eyeY: 0.06,
      eyeZ: 0.38,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 110,
      groupTag: "kept49",
      species: "iconSunflower",
      name: "\u76DB\u653E\u5411\u65E5\u8475 Sunny",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u82B1\u5349",
      desc: "\u6D51\u5706\u9971\u6EE1\u7684\u5411\u65E5\u8475\u82B1\u76D8\u8138\u5E9E\uFF0C\u5916\u56F4360\xB0\u76DB\u5F00\u774012\u7247\u707F\u70C2\u7684\u9EC4\u91D1\u592A\u9633\u82B1\u74E3",
      paletteIdx: 2,
      eyeY: 0,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 111,
      groupTag: "kept49",
      species: "iconCrescent",
      name: "\u661F\u5760\u5F2F\u6708 Luna",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5929\u8C61",
      desc: "\u5F27\u7EBF\u9971\u6EE1\u5706\u6DA6\u7684C\u578B\u65B0\u6708\u8F6E\u5ED3\uFF0C\u4E0A\u5F2F\u89D2\u5C16\u7AEF\u60AC\u5782\u7740\u4E00\u9897\u95EA\u70C1\u7684\u56DB\u89D2\u661F\u8292",
      paletteIdx: 6,
      eyeY: -0.06,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 112,
      groupTag: "kept49",
      species: "iconDiamond",
      name: "\u7480\u74A8\u5207\u9762\u94BB Gemmy",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6676\u77F3",
      desc: "\u5E73\u9876\u5BBD\u8170\u5C16\u5E95\u7684\u7ECF\u5178\u7687\u5BB6\u94BB\u77F3\u526A\u5F71\uFF0C\u5DE6\u4E0A\u95EA\u8000\u5341\u5B57\u661F\u8292",
      paletteIdx: 4,
      eyeY: 0.08,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 113,
      groupTag: "kept49",
      species: "iconBolt",
      name: "\u9739\u96F3\u95EA\u7535 Sparky",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5929\u8C61",
      desc: "\u6781\u5177\u89C6\u89C9\u51B2\u51FB\u529B\u7684Z\u5B57\u6298\u89D2\u7ACB\u4F53\u95EA\u7535\u7CBE\u7075\uFF0C\u5468\u8EAB\u8DC3\u52A8\u7740\u9AD8\u80FD\u7535\u5F27\u661F\u70B9",
      paletteIdx: 3,
      eyeY: 0.12,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 114,
      groupTag: "kept49",
      species: "iconHeartWing",
      name: "\u5929\u4F7F\u70BD\u5FC3 Cupid",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7B26\u53F7",
      desc: "\u9971\u6EE1\u6D51\u5706\u7684\u7ACB\u4F53\u7EA2\u5FC3\u8F6E\u5ED3\uFF0C\u4E24\u4FA7\u8212\u5C55\u7740\u6D01\u767D\u91D1\u8F89\u7684\u4E18\u6BD4\u7279\u5929\u4F7F\u5C0F\u7FBD\u7FFC",
      paletteIdx: 9,
      eyeY: 0.04,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 115,
      groupTag: "kept49",
      species: "iconDroplet",
      name: "\u7687\u51A0\u6C34\u6EF4 Aqua",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5143\u7D20",
      desc: "\u4E0A\u5C16\u4E0B\u5706\u7684\u7EAF\u51C0\u6C34\u6EF4\u7CBE\u7075\uFF0C\u5E95\u90E8\u6FC0\u8D77\u4E00\u5708\u6676\u83B9\u98DE\u6E85\u7684\u9EC4\u91D1\u6C34\u82B1\u6D9F\u6F2A",
      paletteIdx: 5,
      eyeY: -0.14,
      eyeZ: 0.48,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 116,
      groupTag: "kept49",
      species: "iconBell",
      name: "\u8774\u8776\u7ED3\u6447\u94C3 Jingle",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5E86\u5178",
      desc: "\u4E0B\u6446\u5916\u7FFB\u7684\u7ECF\u5178\u9EC4\u91D1\u6447\u94C3\u8F6E\u5ED3\uFF0C\u5E95\u90E8\u63A2\u51FA\u5706\u6DA6\u94C3\u820C\uFF0C\u9876\u90E8\u7CFB\u7740\u7ACB\u4F53\u8774\u8776\u7ED3",
      paletteIdx: 3,
      eyeY: -0.06,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 117,
      groupTag: "kept49",
      species: "iconAlarmClock",
      name: "\u53CC\u94C3\u590D\u53E4\u949F Ticker",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u65F6\u5149",
      desc: "\u5706\u6DA6\u95F9\u949F\u8EAB\u8EAF\u642D\u914D\u5934\u9876\u5DE6\u53F3\u5BF9\u79F0\u7684\u4E24\u53EA\u9EC4\u91D1\u649E\u94C3\u7897\u4E0E\u5E95\u90E8\u516B\u5B57\u5C0F\u77ED\u817F",
      paletteIdx: 1,
      eyeY: -0.04,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 118,
      groupTag: "kept49",
      species: "iconGameboy",
      name: "\u6000\u65E7\u638C\u673A PixelBoy",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6F6E\u73A9",
      desc: "\u7ECF\u5178\u7AD6\u7248\u590D\u53E4\u638C\u673A\u673A\u8EAB\uFF0C\u5C0F\u8179\u5904\u9576\u5D4C\u7740\u7ACB\u4F53\u9EC4\u91D1\u5341\u5B57\u65B9\u5411\u952E\u4E0EAB\u53CC\u6309\u952E",
      paletteIdx: 5,
      eyeY: 0.18,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 119,
      groupTag: "kept49",
      species: "iconSwordStone",
      name: "\u77F3\u4E2D\u5723\u5251 Excalibur",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u68F1\u89D2\u5206\u660E\u7684\u5C01\u5370\u5B9D\u77F3\u57FA\u5EA7\uFF0C\u9876\u7AEF\u7B14\u76F4\u63D2\u7740\u9EC4\u91D1\u5341\u5B57\u62A4\u624B\u4E0E\u5251\u67C4\u5706\u5934",
      paletteIdx: 7,
      eyeY: -0.22,
      eyeZ: 0.4,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 120,
      groupTag: "kept49",
      species: "iconShipWheel",
      name: "\u822A\u6D77\u8239\u8235 Captain",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8FDC\u822A",
      desc: "\u539A\u5B9E\u5706\u6DA6\u7684\u8239\u957F\u65B9\u5411\u8235\u8F6E\uFF0C\u5916\u5708\u5747\u5300\u653E\u5C04\u51FA8\u6839\u7ACB\u4F53\u9EC4\u91D1\u63E1\u67C4\u67F1",
      paletteIdx: 0,
      eyeY: 0,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 121,
      groupTag: "kept49",
      species: "iconSailboat",
      name: "\u4E58\u98CE\u5C0F\u5E06\u8239 Clipper",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8FDC\u822A",
      desc: "\u5143\u5B9D\u5F62\u7FD8\u5934\u5C0F\u8239\u8239\u4F53\uFF0C\u4E0A\u65B9\u9AD8\u9AD8\u626C\u8D77\u4E00\u5927\u4E00\u5C0F\u4E24\u9762\u9971\u6EE1\u7684\u9EC4\u91D1\u4E09\u89D2\u98CE\u5E06",
      paletteIdx: 0,
      eyeY: -0.28,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 122,
      groupTag: "kept49",
      species: "iconHotAir",
      name: "\u63A2\u9669\u70ED\u6C14\u7403 Montgolfier",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u65C5",
      desc: "\u4E0A\u5BBD\u4E0B\u6536\u7684\u9971\u6EE1\u70ED\u6C14\u7403\u7403\u4F53\uFF0C\u5E95\u90E8\u60AC\u540A\u7740\u7CBE\u81F4\u7684\u9EC4\u91D1\u85E4\u7F16\u540A\u7BEE",
      paletteIdx: 1,
      eyeY: 0.14,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 123,
      groupTag: "kept49",
      species: "iconOmamori",
      name: "\u7948\u613F\u5FA1\u5B88 Omamori",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7948\u798F",
      desc: "\u7ECF\u5178\u4E94\u8FB9\u5F62\u5207\u89D2\u9526\u56CA\u5FA1\u5B88\u8F6E\u5ED3\uFF0C\u9876\u7AEF\u7A7F\u7CFB\u7740\u9EC4\u91D1\u7948\u798F\u7EF3\u7ED3\u4E0E\u53CC\u6D41\u82CF",
      paletteIdx: 9,
      eyeY: -0.1,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第七批筛选保留的 26 款精灵（剔除原 127, 128, 132, 135, 140, 142, 143, 146, 147, 157, 158 后保留 -> 现编号 #124 ~ #149）
    // =========================================================================
    {
      id: 124,
      groupTag: "kept49",
      species: "iconLuckyCat",
      name: "\u62DB\u8D22\u55B5\u7075 Maneki",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u745E\u517D",
      desc: "\u53CC\u5C16\u8033\u9971\u6EE1\u732B\u54AA\u526A\u5F71\uFF0C\u5DE6\u4FA7\u9AD8\u4E3E\u62DB\u8D22\u732B\u5C0F\u8089\u722A\uFF0C\u80F8\u524D\u4F69\u6234\u9EC4\u91D1\u94C3\u94DB\u4E0E\u5343\u4E07\u4E24\u91D1\u5224",
      paletteIdx: 1,
      eyeY: -0.06,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 125,
      groupTag: "kept49",
      species: "iconPawPrint",
      name: "\u840C\u722A\u8089\u57AB Pawpad",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u840C\u5370",
      desc: "\u5BBD\u539A\u5706\u6DA6\u7684\u5FC3\u5F62\u4E3B\u638C\u57AB\u4E0A\u65B9\u5448\u6247\u5F27\u6392\u5217\u56DB\u9897\u9971\u6EE1\u8DBE\u8C46\uFF0C\u6781\u81F4\u7684\u840C\u5BA0\u526A\u5F71\u7B26\u53F7",
      paletteIdx: 8,
      eyeY: -0.18,
      eyeZ: 0.34,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 126,
      groupTag: "kept49",
      species: "iconFox",
      name: "\u7075\u72D0\u9762\u5177 Kitsune",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u5C16\u4E0B\u5DF4\u5BBD\u53CC\u988A\u7684\u7ECF\u5178\u7075\u72D0\u8138\u5E9E\u8F6E\u5ED3\uFF0C\u5934\u9876\u7AD6\u8D77\u4E24\u53EA\u5927\u5C16\u72D0\u8033\u4E0E\u989D\u95F4\u9EC4\u91D1\u706B\u5370",
      paletteIdx: 2,
      eyeY: -0.08,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 127,
      groupTag: "kept49",
      species: "iconKoala",
      name: "\u8003\u62C9\u6811\u888B Koala",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u68EE\u6797",
      desc: "\u5706\u8138\u4E24\u4FA7\u6A2A\u5411\u5F20\u5F00\u4E24\u53EA\u6BDB\u8338\u8338\u7684\u8D85\u5927\u5706\u8033\uFF0C\u989D\u5934\u70B9\u7F00\u5C24\u52A0\u5229\u91D1\u53F6",
      paletteIdx: 5,
      eyeY: -0.06,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 128,
      groupTag: "kept49",
      species: "iconCrab",
      name: "\u5927\u94B3\u8783\u87F9 Crabby",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6D77\u6D0B",
      desc: "\u6A2A\u5BBD\u9971\u6EE1\u7684\u692D\u5706\u87F9\u58F3\u4E3B\u4F53\uFF0C\u5934\u9876\u9AD8\u9AD8\u4E3E\u8D77\u4E00\u5BF9\u5A01\u6B66\u5F20\u5F00\u7684\u6708\u7259\u9EC4\u91D1\u5927\u87F9\u94B3",
      paletteIdx: 1,
      eyeY: -0.14,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 129,
      groupTag: "kept49",
      species: "iconStarfish",
      name: "\u4E94\u89D2\u6D77\u661F Patrick",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6D77\u6D0B",
      desc: "\u4E94\u53EA\u5706\u6DA6\u80A5\u539A\u7684\u89E6\u8155\u5448\u9EC4\u91D1\u4E94\u89D2\u661F\u8212\u5C55\uFF0C\u989D\u89D2\u9576\u5D4C\u7740\u7480\u74A8\u6D77\u6EE8\u73CD\u73E0",
      paletteIdx: 2,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 130,
      groupTag: "kept49",
      species: "iconOwl",
      name: "\u535A\u5B66\u591C\u67AD Hoot",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u68EE\u6797",
      desc: "\u5934\u9876\u5411\u4E24\u4FA7\u7FD8\u8D77\u732B\u5934\u9E70\u7FBD\u51A0\u8033\u7C07\uFF0C\u53CC\u80C1\u6536\u62E2\u7FBD\u7FFC\uFF0C\u7709\u5FC3\u70B9\u7F00\u9EC4\u91D1\u83F1\u5F62\u5599\u5FBD",
      paletteIdx: 7,
      eyeY: 0.02,
      eyeZ: 0.36,
      eyeGap: 0.22,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 131,
      groupTag: "kept49",
      species: "iconBat",
      name: "\u591C\u7FFC\u8759\u8760 Batty",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6697\u591C",
      desc: "\u5C16\u8033\u5C0F\u8759\u8760\u8EAB\u8EAF\u5411\u5DE6\u53F3\u4E24\u4FA7\u9738\u6C14\u5F20\u5F00\u6CE2\u6D6A\u6298\u89D2\u8760\u7FFC\uFF0C\u6697\u591C\u526A\u5F71\u6781\u5177\u51B2\u51FB\u529B",
      paletteIdx: 7,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 132,
      groupTag: "kept49",
      species: "iconBlossom",
      name: "\u4E94\u74E3\u6885\u82B1 Sakura",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u82B1\u5349",
      desc: "\u4E94\u7247\u9971\u6EE1\u6D51\u5706\u7684\u82B1\u74E3\u56F4\u5408\u6210\u7ECF\u5178\u6885\u82B1\u526A\u5F71\uFF0C\u82B1\u5FC3\u7C07\u62E5\u7740\u4E09\u9897\u9EC4\u91D1\u82B1\u854A\u73E0",
      paletteIdx: 9,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 133,
      groupTag: "kept49",
      species: "iconMaple",
      name: "\u79CB\u8272\u67AB\u53F6 Maple",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u53F6\u7247",
      desc: "\u4E94\u88C2\u5C16\u89D2\u8212\u5C55\u7684\u52A0\u62FF\u5927\u7EA2\u67AB\u53F6\u7ECF\u5178\u8F6E\u5ED3\uFF0C\u5E95\u90E8\u63A2\u51FA\u5FAE\u5F2F\u7684\u9EC4\u91D1\u53F6\u67C4",
      paletteIdx: 1,
      eyeY: -0.06,
      eyeZ: 0.34,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 134,
      groupTag: "kept49",
      species: "iconGinkgo",
      name: "\u94F6\u674F\u6247\u53F6 Ginkgo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u53F6\u7247",
      desc: "\u9876\u7AEF\u5E26\u6709\u6807\u5FD7\u6027\u5206\u53C9\u6D45\u7F3A\u53E3\u7684\u6247\u5F62\u94F6\u674F\u53F6\u8F6E\u5ED3\uFF0C\u914D\u4EE5\u4FEE\u957F\u5F2F\u66F2\u7684\u9EC4\u91D1\u53F6\u830E",
      paletteIdx: 3,
      eyeY: 0.06,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 135,
      groupTag: "kept49",
      species: "iconBamboo",
      name: "\u8282\u8282\u7FE0\u7AF9 Bamboo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8349\u6728",
      desc: "\u5E26\u6709\u4E0A\u4E0B\u7ACB\u4F53\u7AF9\u8282\u51F8\u73AF\u7684\u5706\u6DA6\u9752\u7AF9\u7AFF\uFF0C\u53F3\u4E0A\u4FA7\u659C\u9038\u51FA\u4E24\u7247\u9EC4\u91D1\u7AF9\u53F6",
      paletteIdx: 10,
      eyeY: -0.02,
      eyeZ: 0.42,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 136,
      groupTag: "kept49",
      species: "iconMountain",
      name: "\u65E5\u7167\u96EA\u5C71 Fuji",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5C71\u5DDD",
      desc: "\u4E00\u5927\u4E00\u5C0F\u53CC\u5CF0\u5E76\u5CD9\u7684\u58EE\u4E3D\u5C71\u5CE6\u8F6E\u5ED3\uFF0C\u4E3B\u5CF0\u8986\u7740\u96EA\u51A0\uFF0C\u53F3\u540E\u65B9\u5347\u8D77\u4E00\u8F6E\u9EC4\u91D1\u671D\u9633",
      paletteIdx: 5,
      eyeY: -0.18,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 137,
      groupTag: "kept49",
      species: "iconCampfire",
      name: "\u9732\u8425\u7BDD\u706B Bonfire",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u80FD\u91CF",
      desc: "\u4E09\u82D7\u8DC3\u52A8\u5347\u817E\u7684\u7ACB\u4F53\u7BDD\u706B\u706B\u82D7\u8F6E\u5ED3\uFF0C\u5E95\u90E8\u4EA4\u53C9\u67B6\u7740\u4E24\u6839\u5706\u6DA6\u7684\u9EC4\u91D1\u6728\u67F4",
      paletteIdx: 1,
      eyeY: -0.02,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 138,
      groupTag: "kept49",
      species: "iconUkulele",
      name: "\u5C24\u514B\u91CC\u91CC Ukulele",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u97F3\u4E50",
      desc: "\u7ECF\u51788\u5B57\u6536\u8170\u6728\u5409\u4ED6\u7434\u7BB1\u8F6E\u5ED3\uFF0C\u9876\u90E8\u63A2\u51FA\u9EC4\u91D1\u7434\u9888\u3001\u7434\u5934\u4E0E\u97F3\u5B54\u5706\u73AF",
      paletteIdx: 2,
      eyeY: -0.22,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 139,
      groupTag: "kept49",
      species: "iconScepter",
      name: "\u98DE\u7FFC\u6743\u6756 RoyalWand",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u9971\u6EE1\u5B9D\u73E0\u6838\u5FC3\u4E24\u4FA7\u8212\u5C55\u9EC4\u91D1\u53CC\u7FFC\uFF0C\u4E0B\u65B9\u627F\u6258\u7740\u7CBE\u81F4\u7684\u6743\u6756\u91D1\u7B8D\u63E1\u67C4",
      paletteIdx: 8,
      eyeY: 0.1,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 140,
      groupTag: "kept49",
      species: "iconCrystalBall",
      name: "\u5360\u661F\u9B54\u7403 Oracle",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5947\u5E7B",
      desc: "\u6D51\u5706\u901A\u900F\u7684\u5360\u535C\u6C34\u6676\u7403\u7AEF\u5750\u5728\u9EC4\u91D1\u4E09\u8DB3\u96D5\u82B1\u5E95\u5EA7\u4E0A\uFF0C\u7403\u9876\u95EA\u70C1\u795E\u79D8\u661F\u8292",
      paletteIdx: 7,
      eyeY: 0.08,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 141,
      groupTag: "kept49",
      species: "iconChest",
      name: "\u79D8\u5883\u5B9D\u7BB1 Mimic",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5192\u9669",
      desc: "\u5706\u62F1\u9876\u76D6\u7684\u6D77\u76D7\u85CF\u5B9D\u7BB1\u8F6E\u5ED3\uFF0C\u4E24\u4FA7\u7B8D\u7740\u539A\u5B9E\u7684\u9EC4\u91D1\u5305\u8FB9\u5E26\u4E0E\u4E2D\u592E\u91D1\u9501\u6263",
      paletteIdx: 2,
      eyeY: -0.14,
      eyeZ: 0.4,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 142,
      groupTag: "kept49",
      species: "iconAxe",
      name: "\u7EF4\u4EAC\u6218\u65A7 Viking",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5192\u9669",
      desc: "\u5DE6\u53F3\u5BF9\u79F0\u5F20\u5F00\u7684\u5BBD\u5927\u6708\u7259\u53CC\u5203\u6218\u65A7\u8F6E\u5ED3\uFF0C\u4E2D\u592E\u8D2F\u7A7F\u9EC4\u91D1\u6218\u65A7\u67C4\u4E0E\u77DB\u5C16\u9876",
      paletteIdx: 6,
      eyeY: 0.06,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 143,
      groupTag: "kept49",
      species: "iconBomb",
      name: "\u706B\u82B1\u70B8\u5F39 Kaboom",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6F6E\u73A9",
      desc: "\u6D51\u5706\u9971\u6EE1\u7684\u5361\u901A\u5C0F\u70B8\u5F39\uFF0C\u5934\u9876\u7ACB\u7740\u91D1\u5C5E\u5F15\u4FE1\u5EA7\u3001\u5F2F\u66F2\u5BFC\u706B\u7D22\u4E0E\u567C\u556A\u95EA\u70C1\u7684\u9EC4\u91D1\u706B\u82B1",
      paletteIdx: 6,
      eyeY: -0.08,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 144,
      groupTag: "kept49",
      species: "iconCrane",
      name: "\u6298\u7EB8\u5343\u9E64 Origami",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u96C5\u7269",
      desc: "\u53CC\u7FFC\u9AD8\u626C\u3001\u957F\u9888\u6298\u9996\u3001\u5C3E\u5C16\u7FD8\u8D77\u7684\u7ECF\u5178\u6298\u7EB8\u5343\u7EB8\u9E64\u51E0\u4F55\u526A\u5F71",
      paletteIdx: 0,
      eyeY: -0.14,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 145,
      groupTag: "kept49",
      species: "iconSpade",
      name: "\u738B\u724C\u9ED1\u6843 AceSpade",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7B26\u53F7",
      desc: "\u4E0A\u5C16\u4E0B\u9F13\u5E26\u4E09\u89D2\u5E95\u5EA7\u67C4\u7684\u7ECF\u5178\u6251\u514B\u9ED1\u6843A\u526A\u5F71\uFF0C\u5934\u9876\u60AC\u6D6E\u8FF7\u4F60\u9EC4\u91D1\u738B\u51A0",
      paletteIdx: 6,
      eyeY: -0.02,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 146,
      groupTag: "kept49",
      species: "iconInfinity",
      name: "\u65E0\u9650\u661F\u73AF Infinity",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7B26\u53F7",
      desc: "\u6A2A\u5411\u5BF9\u79F0\u8212\u5C55\u7684\u9971\u6EE1\u65E0\u7A77\u5927\u7B26\u53F7\uFF08\u221E\uFF09\u7ACB\u4F53\u8F6E\u5ED3\uFF0C\u53F3\u4E0A\u9576\u5D4C\u95EA\u8000\u91D1\u661F",
      paletteIdx: 7,
      eyeY: 0,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 147,
      groupTag: "kept49",
      species: "iconLantern",
      name: "\u5BAB\u5EF7\u706F\u7B3C Lantern",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8282\u5E86",
      desc: "\u9971\u6EE1\u6D51\u5706\u7684\u559C\u5E86\u7EA2\u706F\u7B3C\uFF0C\u4E0A\u4E0B\u9576\u5D4C\u9EC4\u91D1\u706F\u76D6\u5E95\u5EA7\u4E0E\u5782\u5760\u6D41\u82CF\u7A57",
      paletteIdx: 1,
      eyeY: 0.04,
      eyeZ: 0.5,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 148,
      groupTag: "kept49",
      species: "iconStamp",
      name: "\u952F\u9F7F\u90AE\u7968 Philately",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6587\u5316",
      desc: "\u56DB\u8FB9\u5E26\u6709\u6574\u9F50\u534A\u5706\u9F7F\u5B54\u7684\u590D\u53E4\u7EAA\u5FF5\u90AE\u7968\u8F6E\u5ED3\uFF0C\u53F3\u4E0A\u89D2\u76D6\u7740\u9EC4\u91D1\u661F\u8292\u90AE\u6233",
      paletteIdx: 4,
      eyeY: -0.06,
      eyeZ: 0.32,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 149,
      groupTag: "kept49",
      species: "iconMedal",
      name: "\u8363\u8000\u52CB\u7AE0 Medallion",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8363\u8000",
      desc: "\u5706\u6EE1\u539A\u5B9E\u7684\u51A0\u519B\u5956\u7AE0\u5706\u76D8\uFF0C\u4E0A\u65B9\u8FDE\u63A5\u7740V\u578B\u5BF9\u79F0\u6298\u53E0\u7684\u9EC4\u91D1\u9886\u5956\u7EF6\u5E26",
      paletteIdx: 3,
      eyeY: -0.18,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第八批筛选保留的 17 款精灵（剔除原 152,154,157,158,159,160,165,166,167,169,176,177,178,179 后保留 -> 现编号 #150 ~ #166）
    // =========================================================================
    {
      id: 150,
      groupTag: "kept49",
      species: "iconMagnifier",
      name: "\u4FA6\u63A2\u653E\u5927\u955C Sherlock",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u63A2\u7D22",
      desc: "\u539A\u5B9E\u5706\u6846\u653E\u5927\u955C\u7247\u642D\u914D\u53F3\u4E0B45\xB0\u659C\u4F38\u7684\u9EC4\u91D1\u63E1\u67C4\u4E0E\u5DE6\u4E0A\u9AD8\u5149\u661F\u8292\uFF0C\u660E\u5BDF\u79CB\u6BEB",
      paletteIdx: 5,
      eyeY: 0.06,
      eyeZ: 0.38,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 151,
      groupTag: "kept49",
      species: "iconRoyalKey",
      name: "\u79D8\u5883\u7687\u5BA4\u94A5 Keyblade",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u79D8\u5B9D",
      desc: "\u4E0A\u65B9\u9971\u6EE1\u5FC3\u53F6\u96D5\u82B1\u94A5\u67C4\u4E0E\u4E0B\u65B9\u63A2\u51FA\u53CC\u9F7F\u7684\u9EC4\u91D1\u94A5\u5319\u6746\u878D\u4E3A\u4E00\u4F53\uFF0C\u5F00\u542F\u5947\u5E7B\u5927\u95E8",
      paletteIdx: 3,
      eyeY: 0.18,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 152,
      groupTag: "kept49",
      species: "iconWindChime",
      name: "\u7948\u613F\u98CE\u94C3 Furin",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u96C5\u7269",
      desc: "\u5706\u6DA6\u901A\u900F\u7684\u590F\u65E5\u98CE\u94C3\u7F69\u8EAB\u8EAF\uFF0C\u4E0B\u65B9\u60AC\u5782\u7740\u968F\u98CE\u8F7B\u6446\u7684\u9EC4\u91D1\u7948\u613F\u77ED\u518C\u7B7E\u6761",
      paletteIdx: 5,
      eyeY: 0.14,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 153,
      groupTag: "kept49",
      species: "iconHeartPotion",
      name: "\u7231\u5FC3\u9B54\u836F\u74F6 LoveElixir",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u70BC\u91D1",
      desc: "\u9971\u6EE1\u7EA2\u5FC3\u5F62\u73BB\u7483\u9B54\u836F\u74F6\u8EAB\uFF0C\u9876\u7AEF\u63A2\u51FA\u6536\u8170\u74F6\u9888\u4E0E\u9EC4\u91D1\u8F6F\u6728\u585E\u5C01\u53E3",
      paletteIdx: 9,
      eyeY: -0.06,
      eyeZ: 0.38,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 154,
      groupTag: "kept49",
      species: "iconGoldenTicket",
      name: "\u9EC4\u91D1\u5165\u573A\u5238 VIPPass",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5E86\u5178",
      desc: "\u4E24\u7AEF\u5E26\u6709\u6807\u5FD7\u6027\u534A\u5706\u68C0\u7968\u7F3A\u53E3\u7684\u9EC4\u91D1\u5267\u573A\u95E8\u7968\u526A\u5F71\uFF0C\u5DE6\u4E0A\u9576\u5D4C\u8363\u8000\u661F\u5FBD",
      paletteIdx: 3,
      eyeY: -0.04,
      eyeZ: 0.34,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 155,
      groupTag: "kept49",
      species: "iconShuriken",
      name: "\u75BE\u98CE\u624B\u91CC\u5251 Shinobi",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u75BE\u98CE",
      desc: "\u56DB\u7247\u51CC\u5389\u65CB\u5203\u5BF9\u79F0\u5F20\u5F00\u7684\u5FCD\u8005\u624B\u91CC\u5251\u98DE\u9556\u8F6E\u5ED3\uFF0C\u4E2D\u592E\u9576\u5D4C\u9EC4\u91D1\u8F74\u627F\u73AF",
      paletteIdx: 6,
      eyeY: 0,
      eyeZ: 0.36,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 156,
      groupTag: "kept49",
      species: "iconClubSuit",
      name: "\u738B\u724C\u4E09\u53F6\u6885 AceClub",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7B26\u53F7",
      desc: "\u4E0A\u3001\u5DE6\u3001\u53F3\u4E09\u56E2\u9971\u6EE1\u5706\u53F6\u4E0E\u4E09\u89D2\u5E95\u5EA7\u7EC4\u6210\u7684\u7ECF\u5178\u6251\u514B\u6885\u82B1\uFF08\u2663\uFF09\u526A\u5F71\uFF0C\u9876\u6234\u91D1\u51A0",
      paletteIdx: 4,
      eyeY: -0.06,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 157,
      groupTag: "kept49",
      species: "iconTetrisT",
      name: "\u65B9\u5757T\u62FC\u56FE Tetro",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6E38\u620F",
      desc: "\u7531\u56DB\u679A\u5927\u5012\u89D2\u5706\u6DA6\u65B9\u5757\u7EC4\u6210\u7684\u7ECF\u5178\u4FC4\u7F57\u65AF\u65B9\u5757T\u578B\u8F6E\u5ED3\uFF0C\u9876\u7AEF\u5D4C\u7740\u9EC4\u91D1\u9AD8\u5149\u5757",
      paletteIdx: 7,
      eyeY: -0.18,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 158,
      groupTag: "kept49",
      species: "iconSkateboard",
      name: "\u8857\u5934\u6ED1\u677F Skater",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u8FD0\u52A8",
      desc: "\u5FAE\u503E\u7FD8\u5934\u7684\u5BBD\u7248\u8857\u5934\u6ED1\u677F\u677F\u8EAB\uFF0C\u5E95\u90E8\u63A2\u51FA\u4E24\u5BF9\u9192\u76EE\u7684\u9EC4\u91D1\u6ED1\u677F\u6EDA\u8F6E",
      paletteIdx: 2,
      eyeY: 0.04,
      eyeZ: 0.36,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 159,
      groupTag: "kept49",
      species: "iconTopHat",
      name: "\u9B54\u672F\u9AD8\u793C\u5E3D Presto",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u9B54\u672F",
      desc: "\u4E0A\u5BBD\u4E0B\u6536\u7684\u7EC5\u58EB\u9B54\u672F\u9AD8\u9876\u793C\u5E3D\uFF0C\u5E3D\u6A90\u7CFB\u7740\u9EC4\u91D1\u4E1D\u5E26\uFF0C\u5E3D\u9876\u6084\u6084\u63A2\u51FA\u4E24\u53EA\u5C0F\u767D\u5154\u8033",
      paletteIdx: 7,
      eyeY: -0.06,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 160,
      groupTag: "kept49",
      species: "iconDutchWindmill",
      name: "\u8377\u5170\u5927\u98CE\u8F66 Windmill",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u5EFA\u7B51",
      desc: "\u5706\u6DA6\u68AF\u5F62\u98CE\u8F66\u5854\u5C4B\u8EAB\u8EAF\uFF0C\u4E0A\u65B9\u5F20\u5F00\u56DB\u7247\u9192\u76EE\u7684X\u578B\u9EC4\u91D1\u5927\u98CE\u8F66\u7FFC\u6247",
      paletteIdx: 1,
      eyeY: -0.24,
      eyeZ: 0.42,
      eyeGap: 0.19,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 161,
      groupTag: "kept49",
      species: "iconSubmarine",
      name: "\u6DF1\u6D77\u5C0F\u6F5C\u8247 Nautilus",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u822A\u6D77",
      desc: "\u80D6\u4E4E\u4E4E\u7684\u80F6\u56CA\u6F5C\u8247\u8247\u8EAB\uFF0C\u9876\u90E8\u7ACB\u7740\u6307\u6325\u5854\u4E0E\u5F2F\u5934\u6F5C\u671B\u955C\uFF0C\u5C3E\u90E8\u65CB\u8F6C\u7740\u9EC4\u91D1\u87BA\u65CB\u6868",
      paletteIdx: 3,
      eyeY: -0.1,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 162,
      groupTag: "kept49",
      species: "iconTrainEngine",
      name: "\u84B8\u6C7D\u706B\u8F66\u5934 ChooChoo",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u94C1\u9053",
      desc: "\u6566\u5B9E\u7684\u84B8\u6C7D\u673A\u8F66\u8F66\u5934\uFF0C\u5934\u9876\u7ACB\u7740\u5927\u5587\u53ED\u70DF\u56F1\u4E0E\u9EC4\u91D1\u84B8\u6C7D\u4E91\u56E2\uFF0C\u5E95\u90E8\u914D\u9F50\u91D1\u8272\u8F66\u8F6E",
      paletteIdx: 0,
      eyeY: -0.08,
      eyeZ: 0.42,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 163,
      groupTag: "kept49",
      species: "iconBeetleCar",
      name: "\u590D\u53E4\u7532\u58F3\u866B Buggy",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u516C\u8DEF",
      desc: "\u5706\u62F1\u6D41\u7EBF\u578B\u7ECF\u5178\u7532\u58F3\u866B\u5C0F\u6C7D\u8F66\u526A\u5F71\uFF0C\u5E95\u76D8\u5D4C\u7740\u4E24\u53EA\u5927\u53F7\u9EC4\u91D1\u8F66\u8F6E\uFF0C\u8F66\u9876\u4EAE\u8D77\u65C5\u884C\u706F",
      paletteIdx: 1,
      eyeY: -0.04,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 164,
      groupTag: "kept49",
      species: "iconHelicopter",
      name: "\u65CB\u7FFC\u76F4\u5347\u673A Chopper",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u822A\u7A7A",
      desc: "\u5706\u6DA6\u76F4\u5347\u673A\u5EA7\u8231\u5DE6\u4FA7\u5EF6\u4F38\u51FA\u7FD8\u8D77\u5C3E\u6881\uFF0C\u5934\u9876\u67B6\u7740\u5BBD\u5927\u9EC4\u91D1\u87BA\u65CB\u6868\uFF0C\u5E95\u90E8\u914D\u6709\u6ED1\u64AC\u67B6",
      paletteIdx: 0,
      eyeY: -0.06,
      eyeZ: 0.46,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 165,
      groupTag: "kept49",
      species: "iconFrogPrince",
      name: "\u9752\u86D9\u5C0F\u738B\u5B50 Ribbit",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7AE5\u8BDD",
      desc: "\u5BBD\u6241\u9971\u6EE1\u7684\u9752\u86D9\u8138\u5E9E\u4E0A\u65B9\u9AD8\u9AD8\u9F13\u8D77\u4E24\u53EA\u6807\u5FD7\u6027\u5706\u773C\u5305\uFF0C\u5934\u9876\u6B63\u4E2D\u6234\u7740\u9EC4\u91D1\u5C0F\u738B\u51A0",
      paletteIdx: 10,
      eyeY: 0.16,
      eyeZ: 0.44,
      eyeGap: 0.3,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 166,
      groupTag: "kept49",
      species: "iconGachapon",
      name: "\u5947\u8DA3\u626D\u86CB\u673A Gacha",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u6F6E\u73A9",
      desc: "\u4E0A\u65B9\u6D51\u5706\u901A\u900F\u7684\u626D\u86CB\u7403\u8231\u642D\u914D\u4E0B\u65B9\u68AF\u5F62\u673A\u8EAB\u5E95\u5EA7\uFF0C\u6B63\u9762\u5D4C\u7740\u9EC4\u91D1\u65CB\u8F6C\u626D\u86CB\u628A\u624B",
      paletteIdx: 1,
      eyeY: 0.18,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第九批筛选保留的 4 款精灵（原 177, 182, 186, 192 -> 现编号 #167 ~ #170）
    // =========================================================================
    {
      id: 167,
      groupTag: "kept49",
      species: "iconTanghulu",
      name: "\u51B0\u7CD6\u846B\u82A6 CandiedHaw",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u4F20\u7EDF",
      desc: "\u4E09\u9897\u6676\u83B9\u5706\u6DA6\u7684\u7EA2\u5C71\u6942\u7403\u5782\u76F4\u4E32\u5728\u9EC4\u91D1\u7AF9\u7B7E\u4E0A\uFF0C\u9876\u7AEF\u63D2\u7740\u4E00\u9762\u4FCF\u76AE\u7684\u5C0F\u7CD6\u65D7",
      paletteIdx: 1,
      eyeY: 0,
      eyeZ: 0.38,
      eyeGap: 0.18,
      eyeScale: 0.94,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 168,
      groupTag: "kept49",
      species: "iconPopcorn",
      name: "\u5F71\u9662\u7206\u7C73\u82B1 Popcorn",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u4F11\u95F2",
      desc: "\u4E0A\u5BBD\u4E0B\u7A84\u7684\u7535\u5F71\u9662\u7206\u7C73\u82B1\u6876\uFF0C\u6876\u53E3\u5806\u6EE15\u56E2\u84EC\u677E\u9971\u6EE1\u3001\u8DC3\u51FA\u6876\u5916\u7684\u9EC4\u91D1\u7206\u7C73\u82B1\u4E91\u7403",
      paletteIdx: 1,
      eyeY: -0.18,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 169,
      groupTag: "kept49",
      species: "iconApple",
      name: "\u7EA2\u5BCC\u58EB\u679C Apple",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u9C9C\u679C",
      desc: "\u9876\u90E8\u4E0E\u5E95\u90E8\u5E26\u6709\u81EA\u7136\u51F9\u7A9D\u7684\u9971\u6EE1\u7EA2\u82F9\u679C\u526A\u5F71\uFF0C\u9876\u7AEF\u63A2\u51FA\u679C\u6897\u4E0E\u4E00\u7247\u8212\u5C55\u7684\u9EC4\u91D1\u679C\u53F6",
      paletteIdx: 1,
      eyeY: -0.06,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 170,
      groupTag: "kept49",
      species: "iconLuckyBag",
      name: "\u7948\u798F\u62DB\u8D22\u888B Kinchaku",
      category: "\u4FDD\u7559\u7CBE\u9009 \xB7 \u7965\u745E",
      desc: "\u809A\u5927\u53E3\u6536\u7684\u9971\u6EE1\u798F\u888B\u526A\u5F71\uFF0C\u888B\u53E3\u7EFD\u653E\u4E09\u74E3\u8377\u53F6\u8936\u8FB9\uFF0C\u675F\u53E3\u5904\u7CFB\u7740\u9EC4\u91D1\u53CC\u7FFC\u8774\u8776\u7EF3\u7ED3",
      paletteIdx: 1,
      eyeY: -0.16,
      eyeZ: 0.48,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 第十批筛选保留的 2 款精灵（原 #172 凹凸拼图 与 原 #187 错位方块Z -> 现编号 #171 ~ #172）
    // =========================================================================
    {
      id: 171,
      groupTag: "fresh2",
      species: "iconPuzzlePiece",
      name: "\u51F9\u51F8\u62FC\u56FE Jigsaw",
      category: "\u6700\u65B0\u4FDD\u7559 \xB7 \u539F#172",
      desc: "\u5DE6\u4FA7\u5E26\u6709\u771F\u5B9E\u5185\u51F9\u5706\u5B54\u7F3A\u53E3\u3001\u9876\u90E8\u4E0E\u53F3\u4FA7\u63A2\u51FA\u9971\u6EE1\u62FC\u56FE\u5361\u6263\u7684\u7ECF\u5178\u62FC\u56FE\u5757\uFF0C\u5DE6\u4E0A\u60AC\u6D6E\u91D1\u661F\uFF08\u539F#172\u4FDD\u7559\uFF09",
      paletteIdx: 0,
      eyeY: -0.08,
      eyeZ: 0.34,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 172,
      groupTag: "fresh2",
      species: "archPisaTower",
      name: "\u6BD4\u8428\u659C\u5854 Pisa",
      category: "\u4E16\u754C\u5730\u6807 \xB7 \u5947\u8FF9",
      desc: "\u4E16\u754C\u8457\u540D\u503E\u659C\u5EFA\u7B51\u5947\u8FF9\uFF1A\u591A\u5C42\u5927\u7406\u77F3\u5706\u73AF\u56DE\u5ECA\u4F18\u96C5\u503E\u659C10\xB0\uFF0C\u62F1\u5238\u67F1\u5ECA\u5C42\u53E0\u800C\u4E0A\uFF0C\u9876\u90E8\u949F\u697C\u7AEF\u6B63\u8FDC\u773A",
      paletteIdx: 2,
      eyeY: 0.08,
      eyeZ: 0.38,
      eyeGap: 0.18,
      eyeScale: 0.95,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 精选地标 · 2款保留世界地标精灵 (#173 ~ #174)
    // =========================================================================
    {
      id: 173,
      groupTag: "landmark22",
      species: "archColosseum",
      name: "\u7F57\u9A6C\u6597\u517D\u573A Colosseum",
      category: "\u4E16\u754C\u5730\u6807 \xB7 \u610F\u5927\u5229\u7F57\u9A6C",
      desc: "\u53E4\u7F57\u9A6C\u6C38\u6052\u5947\u8FF9\uFF1A\u4E09\u5C42\u7ECF\u5178\u62F1\u5238\u67F1\u5ECA\u56F4\u5408\u800C\u6210\u7684\u692D\u5706\u5F62\u5DE8\u578B\u56DE\u5ECA\uFF0C\u5E26\u6709\u6807\u5FD7\u6027\u5386\u53F2\u8F6E\u5ED3",
      paletteIdx: 1,
      eyeY: 0.02,
      eyeZ: 0.44,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 174,
      groupTag: "landmark22",
      species: "archToriiGate",
      name: "\u5BCC\u58EB\u795E\u793E\u9E1F\u5C45 Torii",
      category: "\u4E16\u754C\u5730\u6807 \xB7 \u65E5\u672C",
      desc: "\u5178\u96C5\u6731\u7EA2\u795E\u57DF\u5927\u95E8\uFF1A\u53CC\u6839\u5706\u6DA6\u6731\u7EA2\u7ACB\u67F1\u6A2A\u8DE8\u4E0A\u7FFB\u7FD8\u89D2\u7684\u7B20\u6728\u6A2A\u6881\uFF0C\u4E2D\u592E\u60AC\u6302\u91D1\u8272\u795E\u989D\u533E\u724C",
      paletteIdx: 1,
      eyeY: 0.02,
      eyeZ: 0.36,
      eyeGap: 0.2,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    // =========================================================================
    // 新创意图鉴 · 多元主题精灵 (#175 ~ #194)
    // =========================================================================
    {
      id: 175,
      groupTag: "creative20",
      species: "foodRamenBowlEx",
      name: "\u62C9\u9762\u7897 Ramen",
      category: "\u7F8E\u98DF \xB7 \u65E5\u5F0F",
      desc: "\u70ED\u6C14\u817E\u817E\u7684\u65E5\u5F0F\u62C9\u9762\uFF1A\u5BBD\u53E3\u539A\u58C1\u9676\u7897\u76DB\u6EE1\u91D1\u8272\u6C64\u6C41\uFF0C\u6F02\u6D6E\u7740\u87BA\u65CB\u5377\u9762\u4E0E\u534A\u5207\u6E8F\u5FC3\u86CB\uFF0C\u914D\u53C9\u70E7\u8089\u7247",
      paletteIdx: 1,
      eyeY: 0.1,
      eyeZ: 0.42,
      eyeGap: 0.2,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 176,
      groupTag: "creative20",
      species: "spaceSaturn",
      name: "\u571F\u661F Saturn",
      category: "\u5B87\u5B99 \xB7 \u884C\u661F",
      desc: "\u592A\u9633\u7CFB\u7B2C\u4E8C\u5927\u884C\u661F\uFF1A\u91D1\u8272\u6C14\u6001\u7403\u4F53\u5916\u56F4\u73AF\u7ED5\u591A\u9053\u51B0\u6676\u5149\u73AF\uFF0C\u503E\u659C15\xB0\u5C55\u73B0\u4F18\u96C5\u58EE\u89C2\u7684\u884C\u661F\u73AF\u4FA7\u9762",
      paletteIdx: 5,
      eyeY: 0.06,
      eyeZ: 0.52,
      eyeGap: 0.2,
      eyeScale: 0.98,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 177,
      groupTag: "creative20",
      species: "gameChessQueen",
      name: "\u68CB\u540E Queen",
      category: "\u6E38\u620F \xB7 \u56FD\u9645\u8C61\u68CB",
      desc: "\u81F3\u9AD8\u65E0\u4E0A\u7684\u68CB\u76D8\u5973\u738B\uFF1A\u7531\u5706\u6DA6\u7403\u53F0\u3001\u675F\u8170\u7EC6\u9888\u3001\u9F13\u5F62\u8170\u5EA7\u3001\u5BBD\u5C55\u5E95\u76D8\u6784\u6210\u4F18\u96C5\u8F66\u65CB\u5F62\u68CB\u5B50\uFF0C\u9876\u51A0\u4E94\u8292\u661F\u51A0\u5195",
      paletteIdx: 0,
      eyeY: 0.14,
      eyeZ: 0.44,
      eyeGap: 0.19,
      eyeScale: 0.96,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    },
    {
      id: 178,
      groupTag: "creative20",
      species: "foodIceCreamSundae",
      name: "\u5723\u4EE3\u51B0\u6DC7\u6DCB Sundae",
      category: "\u751C\u54C1 \xB7 \u7ECF\u5178",
      desc: "\u9AD8\u811A\u676F\u51B0\u6DC7\u6DCB\u5723\u4EE3\uFF1A\u90C1\u91D1\u9999\u5F62\u900F\u660E\u9AD8\u811A\u676F\u4E2D\u53E0\u653E\u4E24\u7403\u5976\u6CB9\u51B0\u6DC7\u6DCB\uFF0C\u9876\u63D2\u5939\u5FC3\u997C\u5E72\u68D2\uFF0C\u70B9\u7F00\u9C9C\u7EA2\u6A31\u6843",
      paletteIdx: 0,
      eyeY: 0.14,
      eyeZ: 0.46,
      eyeGap: 0.2,
      eyeScale: 1,
      eyeType: "pill",
      sx: 1,
      sy: 1,
      sz: 1,
      featScale: 1,
      addon: "none"
    }
  ];

  // reference/sprite-3d/src/config/palettes.js
  var PALETTES = [
    { id: "skyIcon", name: "\u6674\u7A7A\u56FE\u6807\u84DD", main: "#18A0FB", shade: "#0B63CE", accent: "#FFD166", bgTop: "#0F172A", bgBot: "#1E3A8A" },
    { id: "coral", name: "\u8D64\u7130\u73CA\u745A\u7EA2", main: "#FF4B55", shade: "#D12332", accent: "#FFE066", bgTop: "#450A0A", bgBot: "#991B1B" },
    { id: "orange", name: "\u843D\u65E5\u6D3B\u529B\u6A59", main: "#FF7828", shade: "#D94E06", accent: "#FFF3B0", bgTop: "#431407", bgBot: "#9A3412" },
    { id: "amber", name: "\u6696\u9633\u7425\u73C0\u9EC4", main: "#FFAE19", shade: "#D97E00", accent: "#3B82F6", bgTop: "#422006", bgBot: "#854D0E" },
    { id: "emerald", name: "\u68EE\u6D77\u8584\u8377\u7EFF", main: "#10B981", shade: "#047857", accent: "#FDE047", bgTop: "#064E3B", bgBot: "#065F46" },
    { id: "cyan", name: "\u6781\u5149\u51B0\u5DDD\u9752", main: "#06B6D4", shade: "#027A96", accent: "#FDE047", bgTop: "#083344", bgBot: "#155E75" },
    { id: "cobalt", name: "\u6DF1\u6D77\u7535\u5149\u84DD", main: "#2563EB", shade: "#173BB5", accent: "#38BDF8", bgTop: "#172554", bgBot: "#1E40AF" },
    { id: "purple", name: "\u661F\u4E91\u5E7B\u5883\u7D2B", main: "#8B5CF6", shade: "#5E2DC4", accent: "#F472B6", bgTop: "#2E1065", bgBot: "#5B21B6" },
    { id: "pink", name: "\u9713\u8679\u7CD6\u679C\u7C89", main: "#EC4899", shade: "#B81466", accent: "#FDE047", bgTop: "#500724", bgBot: "#9D174D" },
    { id: "rose", name: "\u7EEF\u7EA2\u871C\u6843\u8272", main: "#F43F5E", shade: "#C0193B", accent: "#FFE066", bgTop: "#4C0519", bgBot: "#9F1239" },
    { id: "lime", name: "\u6625\u82BD\u9752\u67E0\u7EFF", main: "#22C55E", shade: "#15803D", accent: "#FEF08A", bgTop: "#052E16", bgBot: "#166534" },
    { id: "whiteCloud", name: "\u7EAF\u51C0\u5976\u6CB9\u767D", main: "#F8FAFC", shade: "#CBD5E1", accent: "#FFAE19", bgTop: "#0284C7", bgBot: "#2563EB" }
  ];

  // reference/sprite-3d/src/core/materials.js
  function createCloudToonMaterial(mainHex, shadeHex, rimStrength = 0.2) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uMainColor: { value: new THREE.Color(mainHex) },
        uShadeColor: { value: new THREE.Color(shadeHex) },
        uLightDir: { value: new THREE.Vector3(0.55, 0.85, 0.7).normalize() },
        uRimStrength: { value: rimStrength },
        uDim: { value: 1 }
      },
      vertexShader: (
        /* glsl */
        `
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                vViewPosition = -mvPosition.xyz;
                gl_Position = projectionMatrix * mvPosition;
            }
        `
      ),
      fragmentShader: (
        /* glsl */
        `
            uniform vec3 uMainColor;
            uniform vec3 uShadeColor;
            uniform vec3 uLightDir;
            uniform float uRimStrength;
            uniform float uDim;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vec3 normal = normalize(vNormal);
                vec3 viewDir = normalize(vViewPosition);
                float NdotL = dot(normal, uLightDir);
                float stepVal = smoothstep(0.04, 0.12, NdotL);
                vec3 baseColor = mix(uShadeColor, uMainColor, stepVal);

                float rim = 1.0 - max(dot(viewDir, normal), 0.0);
                rim = smoothstep(0.65, 0.98, rim);
                vec3 rimColor = vec3(1.0) * rim * uRimStrength;

                gl_FragColor = vec4((baseColor + rimColor) * uDim, 1.0);
            }
        `
      )
    });
  }
  var EYE_WHITE_MAT = new THREE.MeshBasicMaterial({ color: 16777215 });
  var DARK_VISOR_MAT = new THREE.MeshBasicMaterial({ color: 988970 });

  // reference/sprite-3d/src/core/geometries.js
  function createCapsuleGeometry(radius = 0.066, height = 0.21, segments = 24) {
    const points = [];
    const halfH = height * 0.5;
    const capSteps = 10;
    for (let i = 0; i <= capSteps; i++) {
      const angle = -Math.PI / 2 + Math.PI / 2 * (i / capSteps);
      points.push(new THREE.Vector2(Math.cos(angle) * radius, -halfH + Math.sin(angle) * radius));
    }
    for (let i = 0; i <= capSteps; i++) {
      const angle = Math.PI / 2 * (i / capSteps);
      points.push(new THREE.Vector2(Math.cos(angle) * radius, halfH + Math.sin(angle) * radius));
    }
    return new THREE.LatheGeometry(points, segments);
  }
  function createSquircleGeometry(size = 1.65, radius = 0.42, depth = 0.16) {
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
      depth,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06
    });
    geo.center();
    return geo;
  }
  function createFourPointStarGeometry(outerR = 0.22, innerR = 0.085, depth = 0.06) {
    const shape = new THREE.Shape();
    const pts = 4;
    for (let i = 0; i < pts * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const a = i / (pts * 2) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.03
    });
    geo.center();
    return geo;
  }
  function createRoundedRectExtrude(w = 0.8, h = 0.8, r = 0.22, depth = 0.24, bevel = 0.1) {
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
      depth,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 1,
      bevelSize: bevel,
      bevelThickness: bevel
    });
    geo.center();
    return geo;
  }
  var SHARED_GEOS = {
    sphere: new THREE.SphereGeometry(1, 32, 24),
    capsuleEye: createCapsuleGeometry(0.066, 0.21, 24),
    squircle: createSquircleGeometry(1.72, 0.44, 0.14),
    starBadge: createFourPointStarGeometry(0.19, 0.075, 0.05)
  };

  // reference/sprite-3d/src/models/flagship-cloud.js
  function buildIconicCloudMascot(def, mainMat, accentMat, featScale) {
    const root = new THREE.Group();
    const cloudShape = new THREE.Shape();
    cloudShape.moveTo(-0.5, -0.35);
    cloudShape.lineTo(0.5, -0.35);
    cloudShape.bezierCurveTo(0.86, -0.35, 0.9, 0.2, 0.52, 0.24);
    cloudShape.bezierCurveTo(0.5, 0.7, -0.06, 0.72, -0.15, 0.34);
    cloudShape.bezierCurveTo(-0.48, 0.44, -0.72, 0.18, -0.58, -0.02);
    cloudShape.bezierCurveTo(-0.84, -0.06, -0.82, -0.35, -0.5, -0.35);
    const bodyGeo = new THREE.ExtrudeGeometry(cloudShape, {
      depth: 0.36,
      bevelEnabled: true,
      bevelSegments: 18,
      steps: 1,
      bevelSize: 0.24,
      bevelThickness: 0.26
    });
    bodyGeo.center();
    root.add(new THREE.Mesh(bodyGeo, mainMat));
    const frontCushion = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
    frontCushion.position.set(0.04, -0.07, 0.18);
    frontCushion.scale.set(0.62, 0.4, 0.3);
    root.add(frontCushion);
    const leftCheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
    leftCheek.position.set(-0.36, -0.12, 0.12);
    leftCheek.scale.set(0.34, 0.28, 0.28);
    root.add(leftCheek);
    const rightCheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
    rightCheek.position.set(0.42, -0.1, 0.12);
    rightCheek.scale.set(0.36, 0.3, 0.28);
    root.add(rightCheek);
    const crownPuff = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
    crownPuff.position.set(0.15, 0.22, 0.08);
    crownPuff.scale.set(0.45, 0.4, 0.36);
    root.add(crownPuff);
    const swirlPts = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const ang = t * Math.PI * 1.18;
      const r = 0.23 * (1 - t * 0.42);
      swirlPts.push(new THREE.Vector3(
        0.1 + Math.cos(ang) * r,
        0.48 + Math.sin(ang) * r * 1.12,
        0.06 + t * 0.08
      ));
    }
    const swirlGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(swirlPts), 24, 0.105, 16, false);
    root.add(new THREE.Mesh(swirlGeo, mainMat));
    const swirlTip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
    swirlTip.position.copy(swirlPts[swirlPts.length - 1]);
    swirlTip.scale.setScalar(0.105);
    root.add(swirlTip);
    const featGroup = new THREE.Group();
    featGroup.scale.setScalar(featScale);
    const starBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
    starBadge.position.set(-0.56, 0.42, 0.28);
    starBadge.rotation.z = 0.22;
    featGroup.add(starBadge);
    const miniSpark = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
    miniSpark.position.set(-0.34, 0.62, 0.22);
    miniSpark.scale.setScalar(0.068);
    featGroup.add(miniSpark);
    root.add(featGroup);
    return root;
  }

  // reference/sprite-3d/src/models/addons-builder.js
  function buildExtraAddonMesh(addonId, mainMat, accentMat, headY = 0.65) {
    const g = new THREE.Group();
    if (!addonId || addonId === "none") return g;
    if (addonId === "halo") {
      const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.052, 16, 40), accentMat);
      haloRing.rotation.x = Math.PI / 2 - 0.22;
      haloRing.position.set(0, headY + 0.18, -0.04);
      g.add(haloRing);
      const spark = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      spark.position.set(0.32, headY + 0.22, 0.12);
      spark.scale.setScalar(0.045);
      g.add(spark);
    } else if (addonId === "starPin") {
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(-0.46, headY - 0.22, 0.36);
      star.rotation.z = 0.28;
      star.scale.setScalar(1.2);
      g.add(star);
      const gem = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      gem.position.set(-0.46, headY - 0.22, 0.4);
      gem.scale.setScalar(0.055);
      g.add(gem);
    } else if (addonId === "crown") {
      const crownGroup = new THREE.Group();
      crownGroup.position.set(0, headY + 0.06, 0);
      const baseRing = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.08, 24), accentMat);
      crownGroup.add(baseRing);
      const pts = 5;
      for (let i = 0; i < pts; i++) {
        const ang = i / pts * Math.PI * 2;
        const px = Math.cos(ang) * 0.21;
        const pz = Math.sin(ang) * 0.21;
        const prong = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.16, 12), accentMat);
        prong.position.set(px, 0.1, pz);
        prong.rotation.x = pz / 0.21 * 0.18;
        prong.rotation.z = -(px / 0.21) * 0.18;
        crownGroup.add(prong);
        const pearl = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        pearl.position.set(px * 1.08, 0.18, pz * 1.08);
        pearl.scale.setScalar(0.042);
        crownGroup.add(pearl);
      }
      const centerGem = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      centerGem.position.set(0, 0.06, 0.23);
      centerGem.scale.setScalar(0.05);
      crownGroup.add(centerGem);
      crownGroup.rotation.z = 0.08;
      g.add(crownGroup);
    } else if (addonId === "sprout") {
      const stemCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, headY - 0.02, 0),
        new THREE.Vector3(0.02, headY + 0.08, 0),
        new THREE.Vector3(-0.02, headY + 0.18, 0.02)
      ]);
      const stem = new THREE.Mesh(new THREE.TubeGeometry(stemCurve, 16, 0.028, 12, false), accentMat);
      g.add(stem);
      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        leaf.position.set(dir * 0.12, headY + 0.2, 0.02);
        leaf.rotation.z = -dir * 0.55;
        leaf.rotation.y = dir * 0.2;
        leaf.scale.set(0.12, 0.06, 0.05);
        g.add(leaf);
      });
    } else if (addonId === "bolt") {
      const boltShape = new THREE.Shape();
      boltShape.moveTo(0, 0);
      boltShape.lineTo(0.08, 0.14);
      boltShape.lineTo(0.02, 0.14);
      boltShape.lineTo(0.12, 0.32);
      boltShape.lineTo(-0.02, 0.16);
      boltShape.lineTo(0.04, 0.16);
      boltShape.closePath();
      const boltGeo = new THREE.ExtrudeGeometry(boltShape, {
        depth: 0.05,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02
      });
      boltGeo.center();
      const boltMesh = new THREE.Mesh(boltGeo, accentMat);
      boltMesh.position.set(0, headY + 0.16, 0);
      boltMesh.scale.setScalar(0.95);
      g.add(boltMesh);
    } else if (addonId === "wings") {
      [-1, 1].forEach((dir) => {
        const wingGroup = new THREE.Group();
        wingGroup.position.set(dir * 0.65, headY - 0.38, -0.06);
        wingGroup.rotation.y = -dir * 0.35;
        wingGroup.rotation.z = -dir * 0.25;
        const feather1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        feather1.scale.set(0.32, 0.12, 0.07);
        wingGroup.add(feather1);
        const feather2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        feather2.position.set(-dir * 0.04, -0.08, 0.02);
        feather2.scale.set(0.25, 0.09, 0.06);
        wingGroup.add(feather2);
        const feather3 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        feather3.position.set(-dir * 0.08, -0.15, 0.03);
        feather3.scale.set(0.18, 0.07, 0.05);
        wingGroup.add(feather3);
        g.add(wingGroup);
      });
    } else if (addonId === "key") {
      const keyGroup = new THREE.Group();
      keyGroup.position.set(0, headY + 0.08, 0);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.16, 16), accentMat);
      shaft.position.set(0, -0.02, 0);
      keyGroup.add(shaft);
      const loopLeft = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.038, 14, 28), accentMat);
      loopLeft.position.set(-0.09, 0.1, 0);
      keyGroup.add(loopLeft);
      const loopRight = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.038, 14, 28), accentMat);
      loopRight.position.set(0.09, 0.1, 0);
      keyGroup.add(loopRight);
      const centerBar = new THREE.Mesh(createCapsuleGeometry(0.038, 0.24, 16), accentMat);
      centerBar.rotation.z = Math.PI / 2;
      centerBar.position.set(0, 0.1, 0);
      keyGroup.add(centerBar);
      g.add(keyGroup);
    }
    return g;
  }

  // reference/sprite-3d/src/models/eyes-builder.js
  function buildEyesGroup(def) {
    const eyesGroup = new THREE.Group();
    eyesGroup.position.set(0.08, def.eyeY !== void 0 ? def.eyeY : 0, def.eyeZ !== void 0 ? def.eyeZ : 0.4);
    const s = def.eyeScale || 1;
    eyesGroup.scale.set(s, s, s);
    const halfGap = (def.eyeGap !== void 0 ? def.eyeGap : 0.2) * 0.5;
    const rawType = (def.eyeType || "normal").trim();
    const eyeType = rawType === "pill" || rawType === "visor" ? "normal" : rawType;
    const createSingleEye = (isRight) => {
      const eyeNode = new THREE.Group();
      eyeNode.name = isRight ? "rightEyeNode" : "leftEyeNode";
      if (eyeType === "normal" || eyeType === "smile") {
        const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        eyeNode.add(pill);
      } else if (eyeType === "happy") {
        const happyArc = new THREE.Mesh(
          new THREE.TorusGeometry(0.082, 0.028, 12, 24, Math.PI),
          EYE_WHITE_MAT
        );
        happyArc.name = "anim_happyArc";
        happyArc.rotation.z = Math.PI;
        eyeNode.add(happyArc);
      } else if (eyeType === "squint") {
        const squintGroup = new THREE.Group();
        squintGroup.name = "anim_squint";
        const arm1 = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        arm1.scale.set(0.72, 0.72, 0.72);
        arm1.rotation.z = isRight ? 0.65 : -0.65;
        arm1.position.set(isRight ? -0.015 : 0.015, 0.035, 0);
        squintGroup.add(arm1);
        const arm2 = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        arm2.scale.set(0.72, 0.72, 0.72);
        arm2.rotation.z = isRight ? -0.65 : 0.65;
        arm2.position.set(isRight ? -0.015 : 0.015, -0.035, 0);
        squintGroup.add(arm2);
        eyeNode.add(squintGroup);
      } else if (eyeType === "wink") {
        if (!isRight) {
          const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
          eyeNode.add(pill);
        } else {
          const winkArc = new THREE.Mesh(
            new THREE.TorusGeometry(0.078, 0.026, 12, 24, Math.PI),
            EYE_WHITE_MAT
          );
          winkArc.rotation.z = Math.PI * 0.55;
          eyeNode.add(winkArc);
        }
      } else if (eyeType === "dots" || eyeType === "surprised") {
        const dot = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        dot.name = "anim_dot";
        dot.scale.set(0.072, 0.072, 0.045);
        eyeNode.add(dot);
      } else if (eyeType === "cat") {
        const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        pill.scale.set(0.92, 0.92, 0.92);
        eyeNode.add(pill);
      } else if (eyeType === "shy") {
        const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        pill.rotation.z = isRight ? -0.25 : 0.25;
        pill.scale.set(0.85, 0.95, 0.85);
        eyeNode.add(pill);
        const blush = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        blush.position.set(isRight ? 0.04 : -0.04, -0.075, 0.01);
        blush.scale.set(0.038, 0.022, 0.018);
        eyeNode.add(blush);
      } else if (eyeType === "flat") {
        const bar = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        bar.rotation.z = Math.PI / 2;
        bar.scale.set(0.65, 0.82, 0.65);
        eyeNode.add(bar);
      } else if (eyeType === "love") {
        const heartGroup = new THREE.Group();
        heartGroup.name = "anim_heart";
        const lobe1 = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        lobe1.position.set(-0.028, 0.026, 0);
        lobe1.scale.set(0.042, 0.042, 0.024);
        heartGroup.add(lobe1);
        const lobe2 = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        lobe2.position.set(0.028, 0.026, 0);
        lobe2.scale.set(0.042, 0.042, 0.024);
        heartGroup.add(lobe2);
        const tip = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        tip.position.set(0, -0.028, 0);
        tip.scale.set(0.042, 0.048, 0.024);
        tip.rotation.z = Math.PI / 4;
        heartGroup.add(tip);
        eyeNode.add(heartGroup);
      } else if (eyeType === "dizzy") {
        const ringGroup = new THREE.Group();
        ringGroup.name = "anim_dizzyRing";
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.076, 0.02, 12, 28),
          EYE_WHITE_MAT
        );
        ringGroup.add(ring);
        const dot = new THREE.Mesh(SHARED_GEOS.sphere, EYE_WHITE_MAT);
        dot.scale.setScalar(0.028);
        ringGroup.add(dot);
        eyeNode.add(ringGroup);
      } else {
        const pill = new THREE.Mesh(SHARED_GEOS.capsuleEye, EYE_WHITE_MAT);
        eyeNode.add(pill);
      }
      return eyeNode;
    };
    const leftEye = createSingleEye(false);
    leftEye.position.set(-halfGap, 0, 0);
    eyesGroup.add(leftEye);
    const rightEye = createSingleEye(true);
    rightEye.position.set(halfGap, 0, 0);
    eyesGroup.add(rightEye);
    if (eyeType === "smile" || eyeType === "squint" || eyeType === "happy") {
      const mouthArc = new THREE.Mesh(
        new THREE.TorusGeometry(0.038, 0.014, 8, 16, Math.PI),
        EYE_WHITE_MAT
      );
      mouthArc.rotation.z = Math.PI;
      mouthArc.position.set(0, -0.072, 0.02);
      eyesGroup.add(mouthArc);
    } else if (eyeType === "wink") {
      const winkMouth = new THREE.Mesh(
        new THREE.TorusGeometry(0.032, 0.012, 8, 14, Math.PI * 0.8),
        EYE_WHITE_MAT
      );
      winkMouth.rotation.z = Math.PI * 0.92;
      winkMouth.position.set(0.02, -0.07, 0.02);
      eyesGroup.add(winkMouth);
    } else if (eyeType === "cat") {
      const mLeft = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.012, 8, 14, Math.PI), EYE_WHITE_MAT);
      mLeft.rotation.z = Math.PI;
      mLeft.position.set(-0.018, -0.068, 0.02);
      eyesGroup.add(mLeft);
      const mRight = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.012, 8, 14, Math.PI), EYE_WHITE_MAT);
      mRight.rotation.z = Math.PI;
      mRight.position.set(0.018, -0.068, 0.02);
      eyesGroup.add(mRight);
    } else if (eyeType === "surprised") {
      const mO = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.012, 8, 16), EYE_WHITE_MAT);
      mO.scale.set(0.8, 1.2, 1);
      mO.position.set(0, -0.075, 0.02);
      eyesGroup.add(mO);
    }
    return eyesGroup;
  }

  // reference/sprite-3d/src/models/species-mesh.js
  function buildOriginalSpriteMesh(def, mainMat, accentMat) {
    const sp = def.species;
    const featS = def.featScale !== void 0 ? def.featScale : 1;
    if (sp === "iconicCloud") {
      return buildIconicCloudMascot(def, mainMat, accentMat, featS);
    }
    const group = new THREE.Group();
    if (sp === "origamiGlider") {
      const hullShape = new THREE.Shape();
      hullShape.moveTo(0, 0.62);
      hullShape.lineTo(0.68, -0.45);
      hullShape.lineTo(0, -0.22);
      hullShape.lineTo(-0.68, -0.45);
      hullShape.closePath();
      const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.14,
        bevelThickness: 0.16
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
    } else if (sp === "mobiusLoop") {
      const curvePts = [];
      for (let i = 0; i <= 64; i++) {
        const t = i / 64 * Math.PI * 2;
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
    } else if (sp === "periscopeSub") {
      const pipeCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.52, -0.06),
        new THREE.Vector3(0, 0.14, -0.06),
        new THREE.Vector3(0, 0.25, 0.08),
        new THREE.Vector3(0, 0.25, 0.34)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(pipeCurve, 32, 0.36, 24, false), mainMat));
      const bottomCap = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      bottomCap.position.set(0, -0.48, -0.06);
      bottomCap.scale.set(0.46, 0.28, 0.46);
      group.add(bottomCap);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.065, 16, 36), accentMat);
      rim.position.set(0, 0.25, 0.34);
      rim.scale.setScalar(featS);
      group.add(rim);
      const lensBacking = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.04, 28), mainMat);
      lensBacking.position.set(0, 0.25, 0.32);
      lensBacking.rotation.x = Math.PI / 2;
      group.add(lensBacking);
    } else if (sp === "cactusBuddy") {
      const trunk = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      trunk.scale.set(0.5, 0.68, 0.48);
      group.add(trunk);
      const leftArm = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      leftArm.position.set(-0.52, 0.12, 0);
      leftArm.rotation.z = 0.45;
      leftArm.scale.set(0.2 * featS, 0.36 * featS, 0.2 * featS);
      group.add(leftArm);
      const rightArm = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      rightArm.position.set(0.52, -0.05, 0);
      rightArm.rotation.z = -0.55;
      rightArm.scale.set(0.18 * featS, 0.32 * featS, 0.18 * featS);
      group.add(rightArm);
      for (let i = 0; i < 5; i++) {
        const ang = i / 5 * Math.PI * 2;
        const petal = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        petal.position.set(Math.cos(ang) * 0.14, 0.68, Math.sin(ang) * 0.14);
        petal.scale.set(0.1 * featS, 0.07 * featS, 0.1 * featS);
        group.add(petal);
      }
    } else if (sp === "hourglassTwin") {
      const pts = [
        new THREE.Vector2(0.01, -0.62),
        new THREE.Vector2(0.52, -0.56),
        new THREE.Vector2(0.46, -0.25),
        new THREE.Vector2(0.18, 0),
        new THREE.Vector2(0.46, 0.25),
        new THREE.Vector2(0.52, 0.56),
        new THREE.Vector2(0.01, 0.62)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mainMat));
      const waistBelt = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 14, 36), accentMat);
      waistBelt.rotation.x = Math.PI / 2 + 0.2;
      waistBelt.scale.setScalar(featS);
      group.add(waistBelt);
    } else if (sp === "stepCube") {
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
    } else if (sp === "foldedFolio") {
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
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.08
      });
      noteGeo.center();
      group.add(new THREE.Mesh(noteGeo, mainMat));
      const earShape = new THREE.Shape();
      earShape.moveTo(0, 0);
      earShape.lineTo(cut * 1.15, 0);
      earShape.lineTo(0, cut * 1.15);
      earShape.closePath();
      const earGeo = new THREE.ExtrudeGeometry(earShape, {
        depth: 0.06,
        bevelEnabled: true,
        bevelSegments: 4,
        bevelSize: 0.03,
        bevelThickness: 0.03
      });
      const earMesh = new THREE.Mesh(earGeo, accentMat);
      earMesh.position.set(s - cut - 0.04, s - cut - 0.04, 0.16);
      earMesh.scale.setScalar(featS);
      group.add(earMesh);
    } else if (sp === "keyholeClock") {
      const khShape = new THREE.Shape();
      khShape.moveTo(-0.38, -0.58);
      khShape.lineTo(0.38, -0.58);
      khShape.lineTo(0.24, -0.02);
      khShape.absarc(0, 0.24, 0.36, -0.65, Math.PI + 0.65, false);
      khShape.lineTo(-0.38, -0.58);
      const khGeo = new THREE.ExtrudeGeometry(khShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.12,
        bevelThickness: 0.14
      });
      khGeo.center();
      group.add(new THREE.Mesh(khGeo, mainMat));
      const keyBow = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.055, 14, 28), accentMat);
      keyBow.position.set(0, 0.72, 0);
      keyBow.scale.setScalar(featS);
      group.add(keyBow);
    } else if (sp === "boomerangWing") {
      const bmShape = new THREE.Shape();
      bmShape.moveTo(0, 0.48);
      bmShape.quadraticCurveTo(0.25, 0.48, 0.7, -0.28);
      bmShape.quadraticCurveTo(0.75, -0.48, 0.52, -0.45);
      bmShape.quadraticCurveTo(0.15, -0.05, 0, -0.05);
      bmShape.quadraticCurveTo(-0.15, -0.05, -0.52, -0.45);
      bmShape.quadraticCurveTo(-0.75, -0.48, -0.7, -0.28);
      bmShape.quadraticCurveTo(-0.25, 0.48, 0, 0.48);
      const bmGeo = new THREE.ExtrudeGeometry(bmShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.12,
        bevelThickness: 0.14
      });
      bmGeo.center();
      const bmMesh = new THREE.Mesh(bmGeo, mainMat);
      bmMesh.rotation.z = -0.18;
      group.add(bmMesh);
    } else if (sp === "kettlebellBot") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0, -0.18, 0);
      body.scale.set(0.58, 0.52, 0.54);
      group.add(body);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.11, 18, 36, Math.PI), mainMat);
      handle.position.set(0, 0.22, 0);
      handle.scale.setScalar(featS);
      group.add(handle);
    } else if (sp === "magnetU") {
      const uShape = new THREE.Shape();
      uShape.moveTo(-0.56, 0.52);
      uShape.lineTo(-0.56, -0.1);
      uShape.absarc(0, -0.1, 0.56, Math.PI, 0, false);
      uShape.lineTo(0.56, 0.52);
      uShape.lineTo(0.24, 0.52);
      uShape.lineTo(0.24, -0.1);
      uShape.absarc(0, -0.1, 0.24, 0, Math.PI, true);
      uShape.lineTo(-0.24, 0.52);
      uShape.closePath();
      const uGeo = new THREE.ExtrudeGeometry(uShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      uGeo.center();
      group.add(new THREE.Mesh(uGeo, mainMat));
      [-0.4, 0.4].forEach((xPos) => {
        const cap = new THREE.Mesh(createRoundedRectExtrude(0.34, 0.18, 0.06, 0.3, 0.06), accentMat);
        cap.position.set(xPos, 0.52, 0);
        cap.scale.setScalar(featS);
        group.add(cap);
      });
      const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      spark.position.set(0, 0.52, 0.1);
      spark.scale.setScalar(0.65 * featS);
      group.add(spark);
    } else if (sp === "coffeeMug") {
      const cupPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.44, -0.52),
        new THREE.Vector2(0.52, -0.35),
        new THREE.Vector2(0.52, 0.34),
        new THREE.Vector2(0.45, 0.42),
        new THREE.Vector2(0.01, 0.4)
      ];
      const cup = new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat);
      cup.position.x = -0.06;
      group.add(cup);
      const ear = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.085, 16, 32, Math.PI * 1.15), mainMat);
      ear.position.set(0.42, -0.04, 0);
      ear.rotation.z = -Math.PI * 0.55;
      group.add(ear);
      const foam = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      foam.position.set(-0.06, 0.46, 0);
      foam.scale.set(0.42 * featS, 0.22 * featS, 0.42 * featS);
      group.add(foam);
      const steamPuff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      steamPuff.position.set(-0.02, 0.68, 0.05);
      steamPuff.scale.setScalar(0.13 * featS);
      group.add(steamPuff);
    } else if (sp === "lightBulb") {
      const bulbPts = [];
      for (let i = 0; i <= 18; i++) {
        const a = i / 18 * Math.PI * 0.58;
        bulbPts.push(new THREE.Vector2(Math.sin(a) * 0.56, 0.12 + Math.cos(a) * 0.56));
      }
      bulbPts.push(new THREE.Vector2(0.38, -0.16));
      bulbPts.push(new THREE.Vector2(0.28, -0.32));
      bulbPts.push(new THREE.Vector2(0.26, -0.42));
      bulbPts.push(new THREE.Vector2(0.01, -0.43));
      const bulbGeo = new THREE.LatheGeometry(bulbPts, 36);
      const bulbMesh = new THREE.Mesh(bulbGeo, mainMat);
      group.add(bulbMesh);
      const screwGroup = new THREE.Group();
      screwGroup.position.set(0, -0.48, 0);
      [-0.06, 0, 0.06].forEach((yOffset) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.045, 14, 32), accentMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = yOffset;
        screwGroup.add(ring);
      });
      const contact = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      contact.position.set(0, -0.12, 0);
      contact.scale.set(0.16, 0.08, 0.16);
      screwGroup.add(contact);
      group.add(screwGroup);
      const filament = new THREE.Mesh(
        new THREE.TorusGeometry(0.18, 0.038, 14, 28),
        accentMat
      );
      filament.position.set(0, 0.22, 0);
      filament.rotation.x = 0.35;
      group.add(filament);
      const ray = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      ray.position.set(-0.48, 0.58, 0.22);
      ray.scale.setScalar(0.95 * featS);
      group.add(ray);
    } else if (sp === "retroTV") {
      const tvBody = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.84, 0.24, 0.42, 0.12), mainMat);
      tvBody.position.set(0, -0.1, 0);
      group.add(tvBody);
      const baseDome = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      baseDome.position.set(0, 0.4, 0);
      baseDome.scale.set(0.24, 0.12, 0.2);
      group.add(baseDome);
      [-1, 1].forEach((dir) => {
        const rod = new THREE.Mesh(createCapsuleGeometry(0.038, 0.36, 14), accentMat);
        rod.position.set(dir * 0.18, 0.56, 0);
        rod.rotation.z = -dir * 0.48;
        rod.scale.setScalar(featS);
        group.add(rod);
        const ball = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        ball.position.set(dir * 0.3, 0.72, 0);
        ball.scale.setScalar(0.085 * featS);
        group.add(ball);
      });
    } else if (sp === "trefoilKnot") {
      const pts = [];
      for (let i = 0; i <= 96; i++) {
        const t = i / 96 * Math.PI * 2;
        const x = (Math.sin(t) + 2 * Math.sin(2 * t)) * 0.2;
        const y = (Math.cos(t) - 2 * Math.cos(2 * t)) * 0.2;
        const z = -Math.sin(3 * t) * 0.16;
        pts.push(new THREE.Vector3(x, y, z));
      }
      const knotGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 96, 0.19, 20, true);
      group.add(new THREE.Mesh(knotGeo, mainMat));
      const corePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      corePad.position.set(0, -0.06, 0.14);
      corePad.scale.set(0.36, 0.3, 0.24);
      group.add(corePad);
      const sprinkle = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      sprinkle.position.set(-0.46, 0.44, 0.22);
      sprinkle.scale.setScalar(0.75 * featS);
      group.add(sprinkle);
    } else if (sp === "puzzlePiece") {
      const tile = new THREE.Mesh(createRoundedRectExtrude(0.86, 0.86, 0.2, 0.24, 0.1), mainMat);
      tile.position.set(-0.06, -0.06, 0);
      group.add(tile);
      const topTab = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      topTab.position.set(-0.06, 0.52, 0);
      topTab.scale.set(0.24 * featS, 0.24 * featS, 0.21);
      group.add(topTab);
      const rightTab = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      rightTab.position.set(0.52, -0.06, 0);
      rightTab.scale.set(0.24 * featS, 0.24 * featS, 0.21);
      group.add(rightTab);
    } else if (sp === "umbrellaDome") {
      const domePts = [];
      for (let i = 0; i <= 24; i++) {
        const a = i / 24 * (Math.PI * 0.52);
        domePts.push(new THREE.Vector2(Math.sin(a) * 0.68, 0.62 - (1 - Math.cos(a)) * 0.65));
      }
      domePts.push(new THREE.Vector2(0.6, -0.06));
      domePts.push(new THREE.Vector2(0.01, -0.04));
      const domeGeo = new THREE.LatheGeometry(domePts, 36);
      const domeMesh = new THREE.Mesh(domeGeo, mainMat);
      group.add(domeMesh);
      const rimRing = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.042, 14, 36), accentMat);
      rimRing.position.set(0, -0.04, 0);
      rimRing.rotation.x = Math.PI / 2;
      group.add(rimRing);
      const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.07, 0.2, 16), accentMat);
      ferrule.position.set(0, 0.7, 0);
      group.add(ferrule);
      const tipSphere = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      tipSphere.position.set(0, 0.81, 0);
      tipSphere.scale.setScalar(0.065);
      group.add(tipSphere);
      const handleCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.12, 0),
        new THREE.Vector3(0, -0.42, 0),
        new THREE.Vector3(0, -0.58, 0),
        new THREE.Vector3(0.08, -0.66, 0),
        new THREE.Vector3(0.2, -0.62, 0),
        new THREE.Vector3(0.22, -0.5, 0)
      ]);
      const handle = new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 32, 0.052 * featS, 16, false), accentMat);
      group.add(handle);
    } else if (sp === "batteryCell") {
      const cell = new THREE.Mesh(createCapsuleGeometry(0.45, 0.52, 32), mainMat);
      cell.position.set(0, -0.06, 0);
      group.add(cell);
      const cap = new THREE.Mesh(createCapsuleGeometry(0.22, 0.14, 24), accentMat);
      cap.position.set(0, 0.54, 0);
      cap.scale.setScalar(featS);
      group.add(cap);
      const boltBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      boltBadge.position.set(-0.54, 0.36, 0.24);
      boltBadge.scale.setScalar(0.85 * featS);
      group.add(boltBadge);
    } else if (sp === "toastSlice") {
      const tShape = new THREE.Shape();
      tShape.moveTo(-0.46, -0.54);
      tShape.lineTo(0.46, -0.54);
      tShape.quadraticCurveTo(0.54, -0.54, 0.52, -0.36);
      tShape.lineTo(0.48, 0.14);
      tShape.bezierCurveTo(0.64, 0.26, 0.56, 0.58, 0.2, 0.54);
      tShape.quadraticCurveTo(0, 0.58, -0.2, 0.54);
      tShape.bezierCurveTo(-0.56, 0.58, -0.64, 0.26, -0.48, 0.14);
      tShape.lineTo(-0.52, -0.36);
      tShape.quadraticCurveTo(-0.54, -0.54, -0.46, -0.54);
      const toastGeo = new THREE.ExtrudeGeometry(tShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      toastGeo.center();
      group.add(new THREE.Mesh(toastGeo, mainMat));
      const butter = new THREE.Mesh(createRoundedRectExtrude(0.32, 0.32, 0.06, 0.08, 0.04), accentMat);
      butter.position.set(-0.14, 0.26, 0.22);
      butter.rotation.z = 0.28;
      butter.scale.setScalar(featS);
      group.add(butter);
    } else if (sp === "chainLink") {
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.19, 20, 40), mainMat);
      ring1.position.set(0, -0.1, 0);
      ring1.scale.set(1, 1.15, 1);
      group.add(ring1);
      const eyePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      eyePad.position.set(0, -0.2, 0.14);
      eyePad.scale.set(0.38, 0.26, 0.22);
      group.add(eyePad);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.12, 18, 36), accentMat);
      ring2.position.set(0, 0.42, 0);
      ring2.rotation.y = Math.PI / 2;
      ring2.rotation.z = 0.25;
      ring2.scale.setScalar(featS);
      group.add(ring2);
    } else if (sp === "cameraSnap") {
      const camBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.78, 0.22, 0.34, 0.1), mainMat);
      camBody.position.set(0, -0.06, 0);
      group.add(camBody);
      const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.075, 18, 40), accentMat);
      lensRing.position.set(0.08, -0.04, 0.28);
      lensRing.scale.setScalar(featS);
      group.add(lensRing);
      const shutter = new THREE.Mesh(createCapsuleGeometry(0.11, 0.1, 16), accentMat);
      shutter.position.set(-0.32, 0.44, 0);
      shutter.scale.setScalar(featS);
      group.add(shutter);
    } else if (sp === "lollipopSwirl") {
      const candyDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      candyDisc.position.set(0, 0.08, 0);
      candyDisc.scale.set(0.58, 0.58, 0.34);
      group.add(candyDisc);
      const swirlPts = [];
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const a = t * Math.PI * 3.2;
        const r = 0.12 + t * 0.34;
        swirlPts.push(new THREE.Vector3(Math.cos(a) * r, 0.08 + Math.sin(a) * r, 0.24 - t * 0.06));
      }
      const swirlTube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(swirlPts), 48, 0.048 * featS, 12, false), accentMat);
      group.add(swirlTube);
      const stick = new THREE.Mesh(createCapsuleGeometry(0.068, 0.42, 16), accentMat);
      stick.position.set(0.2, -0.52, -0.05);
      stick.rotation.z = 0.32;
      group.add(stick);
    } else if (sp === "headphoneBeat") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.08, 0);
      head.scale.set(0.5, 0.48, 0.48);
      group.add(head);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.075, 16, 40, Math.PI), accentMat);
      band.position.set(0, -0.06, 0);
      band.scale.setScalar(featS);
      group.add(band);
      [-1, 1].forEach((dir) => {
        const cup = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        cup.position.set(dir * 0.56, -0.08, 0);
        cup.scale.set(0.16 * featS, 0.28 * featS, 0.26 * featS);
        group.add(cup);
      });
    } else if (sp === "xyzJack") {
      const barGeo = createCapsuleGeometry(0.24, 0.82, 24);
      const barY = new THREE.Mesh(barGeo, mainMat);
      group.add(barY);
      const barX = new THREE.Mesh(barGeo, mainMat);
      barX.rotation.z = Math.PI / 2;
      group.add(barX);
      const barZ = new THREE.Mesh(barGeo, mainMat);
      barZ.rotation.x = Math.PI / 2;
      group.add(barZ);
      const capTop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      capTop.position.set(0, 0.58, 0);
      capTop.scale.setScalar(0.16 * featS);
      group.add(capTop);
    } else if (sp === "seaAnchor") {
      const fluke = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.16, 18, 36, Math.PI), mainMat);
      fluke.rotation.z = Math.PI;
      fluke.position.set(0, -0.02, 0);
      group.add(fluke);
      [-0.46, 0.46].forEach((xPos) => {
        const tip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        tip.position.set(xPos, -0.02, 0);
        tip.scale.setScalar(0.17);
        group.add(tip);
      });
      const stem = new THREE.Mesh(createCapsuleGeometry(0.16, 0.72, 20), mainMat);
      stem.position.set(0, -0.06, 0);
      group.add(stem);
      const crossBar = new THREE.Mesh(createCapsuleGeometry(0.08, 0.48, 16), accentMat);
      crossBar.rotation.z = Math.PI / 2;
      crossBar.position.set(0, 0.26, 0);
      crossBar.scale.setScalar(featS);
      group.add(crossBar);
      const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.055, 14, 28), accentMat);
      topRing.position.set(0, 0.54, 0);
      topRing.scale.setScalar(featS);
      group.add(topRing);
    } else if (sp === "fourLeafClover") {
      for (let i = 0; i < 4; i++) {
        const ang = i / 4 * Math.PI * 2 + Math.PI / 4;
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        leaf.position.set(Math.cos(ang) * 0.28, 0.04 + Math.sin(ang) * 0.28, 0);
        leaf.rotation.z = ang;
        leaf.scale.set(0.32, 0.26, 0.22);
        group.add(leaf);
      }
      const centerPad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      centerPad.position.set(0, 0.04, 0.04);
      centerPad.scale.set(0.36, 0.36, 0.24);
      group.add(centerPad);
      const dew = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      dew.position.set(-0.36, 0.42, 0.2);
      dew.scale.setScalar(0.11 * featS);
      group.add(dew);
      const stem = new THREE.Mesh(createCapsuleGeometry(0.065, 0.3, 14), accentMat);
      stem.position.set(0.12, -0.5, -0.05);
      stem.rotation.z = 0.25;
      group.add(stem);
    } else if (sp === "crownJewel") {
      const cShape = new THREE.Shape();
      cShape.moveTo(-0.52, -0.45);
      cShape.lineTo(0.52, -0.45);
      cShape.lineTo(0.64, 0.36);
      cShape.quadraticCurveTo(0.32, -0.02, 0, 0.48);
      cShape.quadraticCurveTo(-0.32, -0.02, -0.64, 0.36);
      cShape.closePath();
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.11,
        bevelThickness: 0.12
      });
      cGeo.center();
      group.add(new THREE.Mesh(cGeo, mainMat));
      [[-0.6, 0.5], [0, 0.62], [0.6, 0.5]].forEach(([px, py]) => {
        const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        pearl.position.set(px, py, 0);
        pearl.scale.setScalar(0.12 * featS);
        group.add(pearl);
      });
    } else if (sp === "musicNote") {
      const noteHead = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      noteHead.position.set(-0.12, -0.26, 0);
      noteHead.rotation.z = 0.32;
      noteHead.scale.set(0.48, 0.36, 0.38);
      group.add(noteHead);
      const stem = new THREE.Mesh(createCapsuleGeometry(0.12, 0.85, 20), mainMat);
      stem.position.set(0.2, 0.16, 0);
      group.add(stem);
      const flagCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.2, 0.58, 0),
        new THREE.Vector3(0.54, 0.42, 0.06),
        new THREE.Vector3(0.62, 0.1, 0.1)
      ]);
      const flag = new THREE.Mesh(new THREE.TubeGeometry(flagCurve, 24, 0.11 * featS, 16, false), accentMat);
      group.add(flag);
    } else if (sp === "pinwheelSpin") {
      for (let i = 0; i < 4; i++) {
        const bladeShape = new THREE.Shape();
        bladeShape.moveTo(0, 0);
        bladeShape.quadraticCurveTo(0.45, 0.08, 0.56, 0.46);
        bladeShape.quadraticCurveTo(0.16, 0.52, 0, 0.18);
        bladeShape.closePath();
        const bGeo = new THREE.ExtrudeGeometry(bladeShape, {
          depth: 0.16,
          bevelEnabled: true,
          bevelSegments: 8,
          steps: 1,
          bevelSize: 0.08,
          bevelThickness: 0.08
        });
        const blade = new THREE.Mesh(bGeo, mainMat);
        blade.rotation.z = i * Math.PI / 2;
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
    } else if (sp === "potionFlask") {
      const pts = [
        new THREE.Vector2(0.01, -0.56),
        new THREE.Vector2(0.56, -0.54),
        new THREE.Vector2(0.62, -0.36),
        new THREE.Vector2(0.22, 0.24),
        new THREE.Vector2(0.22, 0.44),
        new THREE.Vector2(0.3, 0.5),
        new THREE.Vector2(0.01, 0.5)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), mainMat));
      const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * featS, 0.14 * featS, 0.22 * featS, 20), accentMat);
      cork.position.set(0, 0.6, 0);
      group.add(cork);
    } else if (sp === "bowtieRibbon") {
      [-1, 1].forEach((dir) => {
        const wShape = new THREE.Shape();
        wShape.moveTo(0, -0.12);
        wShape.bezierCurveTo(dir * 0.36, -0.46, dir * 0.68, -0.38, dir * 0.66, 0.06);
        wShape.bezierCurveTo(dir * 0.68, 0.48, dir * 0.36, 0.54, 0, 0.16);
        wShape.closePath();
        const wGeo = new THREE.ExtrudeGeometry(wShape, {
          depth: 0.22,
          bevelEnabled: true,
          bevelSegments: 8,
          steps: 1,
          bevelSize: 0.09,
          bevelThickness: 0.1
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
      knot.scale.set(0.32, 0.36, 0.3);
      group.add(knot);
    } else if (sp === "propellerCap") {
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
    } else if (sp === "foldingFan") {
      const fShape = new THREE.Shape();
      fShape.absarc(0, -0.38, 0.82, Math.PI * 0.18, Math.PI * 0.82, false);
      fShape.absarc(0, -0.38, 0.22, Math.PI * 0.82, Math.PI * 0.18, true);
      fShape.closePath();
      const fGeo = new THREE.ExtrudeGeometry(fShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      fGeo.center();
      group.add(new THREE.Mesh(fGeo, mainMat));
      const pivotBead = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      pivotBead.position.set(0, -0.46, 0.06);
      pivotBead.scale.setScalar(0.16 * featS);
      group.add(pivotBead);
    } else if (sp === "artPalette") {
      const pShape = new THREE.Shape();
      pShape.moveTo(-0.58, -0.1);
      pShape.bezierCurveTo(-0.68, 0.46, 0.12, 0.68, 0.56, 0.32);
      pShape.bezierCurveTo(0.76, 0.08, 0.62, -0.48, 0.18, -0.46);
      pShape.bezierCurveTo(-0.04, -0.44, -0.06, -0.18, -0.24, -0.22);
      pShape.bezierCurveTo(-0.42, -0.26, -0.52, -0.38, -0.58, -0.1);
      const pGeo = new THREE.ExtrudeGeometry(pShape, {
        depth: 0.2,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      pGeo.center();
      group.add(new THREE.Mesh(pGeo, mainMat));
      [[-0.36, 0.3], [0.02, 0.42], [0.36, 0.24]].forEach(([px, py]) => {
        const dot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        dot.position.set(px, py, 0.18);
        dot.scale.set(0.13 * featS, 0.13 * featS, 0.08 * featS);
        group.add(dot);
      });
    } else if (sp === "knightShield") {
      const sShape = new THREE.Shape();
      sShape.moveTo(0, -0.62);
      sShape.quadraticCurveTo(0.56, -0.32, 0.54, 0.44);
      sShape.quadraticCurveTo(0, 0.56, -0.54, 0.44);
      sShape.quadraticCurveTo(-0.56, -0.32, 0, -0.62);
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      const crest = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      crest.position.set(-0.34, 0.34, 0.22);
      crest.scale.setScalar(0.9 * featS);
      group.add(crest);
    } else if (sp === "gramophoneHorn") {
      const baseBox = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.38, 0.14, 0.38, 0.08), mainMat);
      baseBox.position.set(0, -0.3, 0);
      group.add(baseBox);
      const hornPts = [
        new THREE.Vector2(0.08, -0.1),
        new THREE.Vector2(0.16, 0.12),
        new THREE.Vector2(0.34, 0.32),
        new THREE.Vector2(0.58, 0.52),
        new THREE.Vector2(0.5, 0.56)
      ];
      const horn = new THREE.Mesh(new THREE.LatheGeometry(hornPts, 24), accentMat);
      horn.position.set(0, 0.02, 0);
      horn.rotation.x = 0.38;
      horn.scale.setScalar(featS);
      group.add(horn);
    } else if (sp === "ufoSaucer") {
      const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      dome.position.set(0, 0.12, 0);
      dome.scale.set(0.48, 0.44, 0.46);
      group.add(dome);
      const rim = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      rim.position.set(0, -0.1, 0);
      rim.scale.set(0.84 * featS, 0.18 * featS, 0.76 * featS);
      group.add(rim);
      [-0.38, 0, 0.38].forEach((xPos) => {
        const pod = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        pod.position.set(xPos, -0.28, 0.18);
        pod.scale.setScalar(0.1 * featS);
        group.add(pod);
      });
    } else if (sp === "cupcakeCherry") {
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.34, 0.48, 24), mainMat);
      cup.position.set(0, -0.24, 0);
      group.add(cup);
      const cream1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      cream1.position.set(0, 0.12, 0);
      cream1.scale.set(0.52 * featS, 0.26 * featS, 0.5 * featS);
      group.add(cream1);
      const cream2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      cream2.position.set(0, 0.34, 0);
      cream2.scale.set(0.36 * featS, 0.22 * featS, 0.36 * featS);
      group.add(cream2);
      const cherry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      cherry.position.set(0, 0.56, 0);
      cherry.scale.setScalar(0.15 * featS);
      group.add(cherry);
    } else if (sp === "trafficCone") {
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
    } else if (sp === "croissantRoll") {
      const midRoll = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      midRoll.position.set(0, 0.12, 0);
      midRoll.scale.set(0.46, 0.36, 0.38);
      group.add(midRoll);
      [-1, 1].forEach((dir) => {
        const seg1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        seg1.position.set(dir * 0.38, -0.02, 0);
        seg1.rotation.z = -dir * 0.45;
        seg1.scale.set(0.32 * featS, 0.26 * featS, 0.3 * featS);
        group.add(seg1);
        const seg2 = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        seg2.position.set(dir * 0.56, -0.28, 0);
        seg2.rotation.z = -dir * 0.95;
        seg2.scale.set(0.24 * featS, 0.18 * featS, 0.22 * featS);
        group.add(seg2);
      });
    } else if (sp === "roleDevTerminal") {
      const keyBase = new THREE.Mesh(createRoundedRectExtrude(1.02, 0.88, 0.24, 0.36, 0.12), mainMat);
      keyBase.position.set(0, -0.08, 0);
      group.add(keyBase);
      const slash = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 0.32 * featS, 14), accentMat);
      slash.position.set(0, 0.54, 0.08);
      slash.rotation.z = -0.35;
      group.add(slash);
      [-1, 1].forEach((dir) => {
        const brk1 = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
        brk1.position.set(dir * 0.26, 0.6, 0.08);
        brk1.rotation.z = dir * 0.65;
        group.add(brk1);
        const brk2 = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
        brk2.position.set(dir * 0.26, 0.48, 0.08);
        brk2.rotation.z = -dir * 0.65;
        group.add(brk2);
      });
    } else if (sp === "roleBezierPen") {
      const nibShape = new THREE.Shape();
      nibShape.moveTo(-0.32, -0.56);
      nibShape.lineTo(0.32, -0.56);
      nibShape.lineTo(0.54, -0.04);
      nibShape.lineTo(0, 0.54);
      nibShape.lineTo(-0.54, -0.04);
      nibShape.closePath();
      const nibGeo = new THREE.ExtrudeGeometry(nibShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      nibGeo.center();
      group.add(new THREE.Mesh(nibGeo, mainMat));
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
    } else if (sp === "roleGradCap") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.14, 0);
      head.scale.set(0.54, 0.5, 0.5);
      group.add(head);
      const board = new THREE.Mesh(createRoundedRectExtrude(0.96 * featS, 0.96 * featS, 0.14, 0.08, 0.04), accentMat);
      board.rotation.x = Math.PI / 2 + 0.18;
      board.rotation.y = 0.65;
      board.position.set(0, 0.38, 0);
      group.add(board);
      const tasselCord = new THREE.Mesh(createCapsuleGeometry(0.04 * featS, 0.34 * featS, 12), accentMat);
      tasselCord.position.set(-0.52, 0.18, 0.18);
      tasselCord.rotation.z = 0.25;
      group.add(tasselCord);
      const tasselDrop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      tasselDrop.position.set(-0.56, -0.02, 0.2);
      tasselDrop.scale.set(0.09 * featS, 0.14 * featS, 0.09 * featS);
      group.add(tasselDrop);
    } else if (sp === "roleCompass") {
      const caseDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      caseDisc.position.set(0, -0.06, 0);
      caseDisc.scale.set(0.6, 0.6, 0.36);
      group.add(caseDisc);
      const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.16 * featS, 0.055 * featS, 14, 28), accentMat);
      topRing.position.set(0, 0.6, 0);
      group.add(topRing);
      const needle = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.52 * featS, 4), accentMat);
      needle.position.set(-0.26, 0.28, 0.24);
      needle.rotation.z = 0.68;
      group.add(needle);
    } else if (sp === "roleBarChart") {
      const barConfigs = [
        { x: -0.36, y: -0.22, h: 0.36 },
        { x: 0, y: -0.1, h: 0.6 },
        { x: 0.36, y: 0.04, h: 0.86 }
      ];
      barConfigs.forEach((b) => {
        const bar = new THREE.Mesh(createCapsuleGeometry(0.2, b.h, 24), mainMat);
        bar.position.set(b.x, b.y, 0);
        group.add(bar);
      });
      const basePad = new THREE.Mesh(createRoundedRectExtrude(1.02, 0.44, 0.18, 0.28, 0.08), mainMat);
      basePad.position.set(0, -0.22, 0.04);
      group.add(basePad);
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
    } else if (sp === "roleFeatherQuill") {
      const qShape = new THREE.Shape();
      qShape.moveTo(-0.18, -0.48);
      qShape.bezierCurveTo(-0.56, -0.1, -0.48, 0.48, 0.28, 0.64);
      qShape.bezierCurveTo(0.62, 0.42, 0.48, -0.18, 0.14, -0.48);
      qShape.closePath();
      const qGeo = new THREE.ExtrudeGeometry(qShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.11
      });
      qGeo.center();
      group.add(new THREE.Mesh(qGeo, mainMat));
      const nibTip = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.36 * featS, 16), accentMat);
      nibTip.rotation.z = Math.PI - 0.22;
      nibTip.position.set(-0.12, -0.56, 0);
      group.add(nibTip);
    } else if (sp === "roleStudioMic") {
      const micHead = new THREE.Mesh(createCapsuleGeometry(0.36, 0.42, 28), mainMat);
      micHead.position.set(0, 0.12, 0);
      group.add(micHead);
      const uMount = new THREE.Mesh(new THREE.TorusGeometry(0.46 * featS, 0.065 * featS, 16, 36, Math.PI), accentMat);
      uMount.rotation.z = Math.PI;
      uMount.position.set(0, 0.12, 0);
      group.add(uMount);
      const standPost = new THREE.Mesh(createCapsuleGeometry(0.07 * featS, 0.26 * featS, 14), accentMat);
      standPost.position.set(0, -0.44, 0);
      group.add(standPost);
      const standBase = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      standBase.position.set(0, -0.58, 0);
      standBase.scale.set(0.38 * featS, 0.1 * featS, 0.34 * featS);
      group.add(standBase);
    } else if (sp === "roleClapperboard") {
      const slate = new THREE.Mesh(createRoundedRectExtrude(1.04, 0.72, 0.18, 0.26, 0.09), mainMat);
      slate.position.set(0, -0.14, 0);
      group.add(slate);
      const clapBar = new THREE.Mesh(createRoundedRectExtrude(1.04 * featS, 0.2 * featS, 0.08, 0.24, 0.06), accentMat);
      clapBar.position.set(-0.06, 0.44, 0);
      clapBar.rotation.z = 0.36;
      group.add(clapBar);
      const hinge = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      hinge.position.set(-0.46, 0.24, 0.18);
      hinge.scale.setScalar(0.11 * featS);
      group.add(hinge);
    } else if (sp === "roleAtomCore") {
      const nucleus = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      nucleus.scale.setScalar(0.46);
      group.add(nucleus);
      [-1, 1].forEach((dir) => {
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.66 * featS, 0.052 * featS, 16, 48), accentMat);
        orbit.rotation.x = Math.PI * 0.32;
        orbit.rotation.y = dir * Math.PI * 0.26;
        orbit.scale.set(1, 0.65, 1);
        group.add(orbit);
        const electron = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        electron.position.set(dir * 0.56 * featS, dir * 0.34 * featS, 0.16);
        electron.scale.setScalar(0.11 * featS);
        group.add(electron);
      });
    } else if (sp === "roleMedCross") {
      const armV = new THREE.Mesh(createRoundedRectExtrude(0.52, 1.18, 0.16, 0.28, 0.1), mainMat);
      group.add(armV);
      const armH = new THREE.Mesh(createRoundedRectExtrude(1.18, 0.52, 0.16, 0.28, 0.1), mainMat);
      group.add(armH);
      const pulseBadge = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      pulseBadge.position.set(-0.44, 0.44, 0.22);
      pulseBadge.scale.setScalar(0.85 * featS);
      group.add(pulseBadge);
    } else if (sp === "roleHardHat") {
      const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      dome.position.set(0, -0.06, 0);
      dome.scale.set(0.58, 0.52, 0.56);
      group.add(dome);
      const brim = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      brim.position.set(0, -0.34, 0.08);
      brim.scale.set(0.72 * featS, 0.14 * featS, 0.68 * featS);
      group.add(brim);
      const ridge = new THREE.Mesh(new THREE.TorusGeometry(0.46 * featS, 0.095 * featS, 16, 32, Math.PI * 0.85), accentMat);
      ridge.rotation.y = Math.PI / 2;
      ridge.rotation.x = 0.2;
      ridge.position.set(0, 0.06, 0);
      group.add(ridge);
    } else if (sp === "roleJusticeGavel") {
      const mallet = new THREE.Mesh(createCapsuleGeometry(0.32, 0.64, 28), mainMat);
      mallet.rotation.z = Math.PI / 2 - 0.28;
      mallet.position.set(0, 0.1, 0);
      group.add(mallet);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.33 * featS, 0.065 * featS, 16, 36), accentMat);
      band.rotation.y = Math.PI / 2;
      band.rotation.x = -0.28;
      band.position.set(0, 0.1, 0);
      group.add(band);
      const handle = new THREE.Mesh(createCapsuleGeometry(0.12 * featS, 0.48 * featS, 18), accentMat);
      handle.position.set(0.14, -0.36, -0.04);
      handle.rotation.z = -0.28;
      group.add(handle);
    } else if (sp === "roleBullseye") {
      const disc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      disc.position.set(-0.06, -0.06, 0);
      disc.scale.set(0.6, 0.6, 0.34);
      group.add(disc);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.08, 16, 40), mainMat);
      ring.position.set(-0.06, -0.06, 0.12);
      group.add(ring);
      const shaft = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.56 * featS, 14), accentMat);
      shaft.position.set(0.34, 0.34, 0.22);
      shaft.rotation.z = -Math.PI / 4;
      group.add(shaft);
      const fletch = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.24 * featS, 4), accentMat);
      fletch.position.set(0.52, 0.52, 0.22);
      fletch.rotation.z = Math.PI * 0.75;
      group.add(fletch);
    } else if (sp === "roleShopBag") {
      const bagShape = new THREE.Shape();
      bagShape.moveTo(-0.52, -0.54);
      bagShape.lineTo(0.52, -0.54);
      bagShape.lineTo(0.44, 0.28);
      bagShape.lineTo(-0.44, 0.28);
      bagShape.closePath();
      const bagGeo = new THREE.ExtrudeGeometry(bagShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.11
      });
      bagGeo.center();
      const bagMesh = new THREE.Mesh(bagGeo, mainMat);
      bagMesh.position.y = -0.1;
      group.add(bagMesh);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.068 * featS, 16, 32, Math.PI), accentMat);
      handle.position.set(0, 0.3, 0);
      group.add(handle);
      const tag = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.32 * featS, 0.06, 0.06, 0.03), accentMat);
      tag.position.set(-0.44, 0.22, 0.22);
      tag.rotation.z = 0.42;
      group.add(tag);
    } else if (sp === "roleBriefcase") {
      const caseBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.78, 0.2, 0.3, 0.1), mainMat);
      caseBody.position.set(0, -0.08, 0);
      group.add(caseBody);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.065 * featS, 16, 32, Math.PI), accentMat);
      handle.position.set(0, 0.36, 0);
      group.add(handle);
      [-0.32, 0.32].forEach((xPos) => {
        const clasp = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.16 * featS, 14), accentMat);
        clasp.position.set(xPos, 0.18, 0.22);
        group.add(clasp);
      });
    } else if (sp === "roleChatBubble") {
      const bShape = new THREE.Shape();
      bShape.moveTo(-0.52, -0.48);
      bShape.lineTo(-0.18, -0.34);
      bShape.quadraticCurveTo(0.56, -0.38, 0.56, 0.08);
      bShape.quadraticCurveTo(0.56, 0.52, 0, 0.52);
      bShape.quadraticCurveTo(-0.56, 0.52, -0.56, 0.08);
      bShape.quadraticCurveTo(-0.56, -0.18, -0.42, -0.28);
      bShape.closePath();
      const bGeo = new THREE.ExtrudeGeometry(bShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      bGeo.center();
      group.add(new THREE.Mesh(bGeo, mainMat));
      const subBubble = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      subBubble.position.set(0.46, 0.44, -0.08);
      subBubble.scale.set(0.28 * featS, 0.22 * featS, 0.18 * featS);
      group.add(subBubble);
    } else if (sp === "roleGamepad") {
      const padShape = new THREE.Shape();
      padShape.moveTo(-0.34, 0.38);
      padShape.lineTo(0.34, 0.38);
      padShape.quadraticCurveTo(0.68, 0.38, 0.64, -0.36);
      padShape.quadraticCurveTo(0.6, -0.58, 0.38, -0.46);
      padShape.quadraticCurveTo(0.22, -0.16, 0, -0.16);
      padShape.quadraticCurveTo(-0.22, -0.16, -0.38, -0.46);
      padShape.quadraticCurveTo(-0.6, -0.58, -0.64, -0.36);
      padShape.quadraticCurveTo(-0.68, 0.38, -0.34, 0.38);
      const padGeo = new THREE.ExtrudeGeometry(padShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      padGeo.center();
      group.add(new THREE.Mesh(padGeo, mainMat));
      [-0.36, 0.36].forEach((xPos) => {
        const bumper = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        bumper.position.set(xPos, 0.46, 0);
        bumper.scale.set(0.18 * featS, 0.08 * featS, 0.14 * featS);
        group.add(bumper);
      });
    } else if (sp === "roleChefHat") {
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.42, 0.42, 28), mainMat);
      band.position.set(0, -0.22, 0);
      group.add(band);
      [[-0.28, 0.18, 0], [0.28, 0.18, 0], [0, 0.32, 0.12], [0, 0.26, -0.12]].forEach(([x, y, z]) => {
        const puff = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        puff.position.set(x, y, z);
        puff.scale.setScalar(0.32 * featS);
        group.add(puff);
      });
      const goldTrim = new THREE.Mesh(new THREE.TorusGeometry(0.45 * featS, 0.052 * featS, 14, 36), accentMat);
      goldTrim.rotation.x = Math.PI / 2;
      goldTrim.position.set(0, -0.02, 0);
      group.add(goldTrim);
    } else if (sp === "roleAIChip") {
      const chipCore = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.84, 0.18, 0.24, 0.08), mainMat);
      group.add(chipCore);
      [-0.24, 0, 0.24].forEach((offset) => {
        const pinV = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.16 * featS, 12), accentMat);
        pinV.position.set(offset, 0, -0.04);
        group.add(pinV);
        const pinH = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.16 * featS, 12), accentMat);
        pinH.rotation.z = Math.PI / 2;
        pinH.position.set(0, offset, -0.04);
        group.add(pinH);
      });
      const aiSpark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      aiSpark.position.set(-0.36, 0.36, 0.22);
      aiSpark.scale.setScalar(0.75 * featS);
      group.add(aiSpark);
    } else if (sp === "roleCyberLock") {
      const lockBody = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.78, 0.22, 0.3, 0.1), mainMat);
      lockBody.position.set(0, -0.18, 0);
      group.add(lockBody);
      const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.095 * featS, 18, 36, Math.PI), accentMat);
      shackle.position.set(0, 0.28, 0);
      group.add(shackle);
      [-0.28, 0.28].forEach((xPos) => {
        const leg = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.22 * featS, 16), accentMat);
        leg.position.set(xPos * featS, 0.2, 0);
        group.add(leg);
      });
    } else if (sp === "roleCoinSprout") {
      const coin = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      coin.position.set(0, -0.08, 0);
      coin.scale.set(0.6, 0.6, 0.34);
      group.add(coin);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.08, 16, 42), mainMat);
      rim.position.set(0, -0.08, 0.08);
      group.add(rim);
      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        leaf.position.set(dir * 0.16, 0.6, 0);
        leaf.rotation.z = -dir * 0.65;
        leaf.scale.set(0.11 * featS, 0.24 * featS, 0.08 * featS);
        group.add(leaf);
      });
    } else if (sp === "rolePilotWings") {
      const centerShield = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      centerShield.scale.set(0.46, 0.48, 0.38);
      group.add(centerShield);
      [-1, 1].forEach((dir) => {
        [0, 1, 2].forEach((layer) => {
          const feather = new THREE.Mesh(createCapsuleGeometry((0.085 - layer * 0.012) * featS, (0.48 - layer * 0.1) * featS, 16), accentMat);
          feather.position.set(dir * (0.46 + layer * 0.04), 0.14 - layer * 0.14, -0.04);
          feather.rotation.z = dir * (1.18 + layer * 0.12);
          group.add(feather);
        });
      });
    } else if (sp === "roleTrophyCup") {
      const cupPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.36, -0.54),
        new THREE.Vector2(0.14, -0.32),
        new THREE.Vector2(0.14, -0.14),
        new THREE.Vector2(0.46, 0.12),
        new THREE.Vector2(0.5, 0.5),
        new THREE.Vector2(0.01, 0.48)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat));
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.065 * featS, 16, 32, Math.PI * 1.1), accentMat);
        ear.position.set(dir * 0.44, 0.24, 0);
        ear.rotation.z = dir === 1 ? -Math.PI / 2 : Math.PI / 2;
        group.add(ear);
      });
    } else if (sp === "roleCoatHanger") {
      const hShape = new THREE.Shape();
      hShape.moveTo(-0.66, -0.38);
      hShape.lineTo(0.66, -0.38);
      hShape.quadraticCurveTo(0.76, -0.38, 0.64, -0.18);
      hShape.lineTo(0.12, 0.24);
      hShape.quadraticCurveTo(0, 0.32, -0.12, 0.24);
      hShape.lineTo(-0.64, -0.18);
      hShape.quadraticCurveTo(-0.76, -0.38, -0.66, -0.38);
      const hGeo = new THREE.ExtrudeGeometry(hShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      hGeo.center();
      const hangerBody = new THREE.Mesh(hGeo, mainMat);
      hangerBody.position.y = -0.1;
      group.add(hangerBody);
      const hookCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(0, 0.36, 0),
        new THREE.Vector3(-0.14, 0.48, 0),
        new THREE.Vector3(0.04, 0.62, 0),
        new THREE.Vector3(0.18, 0.48, 0)
      ]);
      const hook = new THREE.Mesh(new THREE.TubeGeometry(hookCurve, 24, 0.068 * featS, 14, false), accentMat);
      group.add(hook);
    } else if (sp === "roleRingedPlanet") {
      const planet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      planet.scale.setScalar(0.5);
      group.add(planet);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.68 * featS, 0.085 * featS, 16, 48), accentMat);
      ring.rotation.x = Math.PI * 0.38;
      ring.rotation.y = -0.32;
      ring.scale.set(1, 1, 0.45);
      group.add(ring);
      const moon = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      moon.position.set(-0.54, 0.48, 0.18);
      moon.scale.setScalar(0.11 * featS);
      group.add(moon);
    } else if (sp === "surveyStudentBook") {
      const bookShape = new THREE.Shape();
      bookShape.moveTo(0, -0.32);
      bookShape.quadraticCurveTo(0.32, -0.18, 0.64, -0.28);
      bookShape.lineTo(0.58, 0.44);
      bookShape.quadraticCurveTo(0.28, 0.52, 0, 0.3);
      bookShape.quadraticCurveTo(-0.28, 0.52, -0.58, 0.44);
      bookShape.lineTo(-0.64, -0.28);
      bookShape.quadraticCurveTo(-0.32, -0.18, 0, -0.32);
      const bookGeo = new THREE.ExtrudeGeometry(bookShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      bookGeo.center();
      group.add(new THREE.Mesh(bookGeo, mainMat));
      const spinePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      spinePad.position.set(0, -0.02, 0.12);
      spinePad.scale.set(0.42, 0.36, 0.26);
      group.add(spinePad);
      const ribbon = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.28 * featS, 14), accentMat);
      ribbon.position.set(0.08, -0.52, 0.08);
      ribbon.rotation.z = 0.22;
      group.add(ribbon);
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(-0.48, 0.52, 0.22);
      star.rotation.z = 0.2;
      star.scale.setScalar(0.92 * featS);
      group.add(star);
    } else if (sp === "surveyITBrowser") {
      const screenBody = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.72, 0.16, 0.2, 0.08), mainMat);
      screenBody.position.set(0, 0.08, -0.04);
      screenBody.rotation.x = -0.1;
      group.add(screenBody);
      const kbBase = new THREE.Mesh(createRoundedRectExtrude(1.16, 0.58, 0.14, 0.1, 0.05), mainMat);
      kbBase.rotation.x = Math.PI / 2;
      kbBase.position.set(0, -0.34, 0.22);
      group.add(kbBase);
      const kbPad = new THREE.Mesh(createRoundedRectExtrude(0.84 * featS, 0.24 * featS, 0.06, 0.05, 0.02), accentMat);
      kbPad.rotation.x = Math.PI / 2;
      kbPad.position.set(0, -0.27, 0.22);
      group.add(kbPad);
      const codeGroup = new THREE.Group();
      codeGroup.position.set(0, 0.58, 0.04);
      codeGroup.scale.setScalar(featS);
      const slash = new THREE.Mesh(createCapsuleGeometry(0.045, 0.28, 12), accentMat);
      slash.rotation.z = -0.32;
      codeGroup.add(slash);
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
    } else if (sp === "surveyProdDesign") {
      const nibShape = new THREE.Shape();
      nibShape.moveTo(-0.34, -0.42);
      nibShape.lineTo(0.34, -0.42);
      nibShape.lineTo(0.54, 0.02);
      nibShape.quadraticCurveTo(0.28, 0.36, 0, 0.6);
      nibShape.quadraticCurveTo(-0.28, 0.36, -0.54, 0.02);
      nibShape.closePath();
      const nibGeo = new THREE.ExtrudeGeometry(nibShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      nibGeo.center();
      group.add(new THREE.Mesh(nibGeo, mainMat));
      const breatherHole = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      breatherHole.position.set(0, 0.2, 0.2);
      breatherHole.scale.set(0.095 * featS, 0.095 * featS, 0.05 * featS);
      group.add(breatherHole);
      const slitLine = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.28 * featS, 10), accentMat);
      slitLine.position.set(0, 0.4, 0.2);
      group.add(slitLine);
      const ferrule = new THREE.Mesh(createRoundedRectExtrude(0.74 * featS, 0.18 * featS, 0.08, 0.26, 0.06), accentMat);
      ferrule.position.set(0, -0.52, 0);
      group.add(ferrule);
      const handleBar = new THREE.Mesh(createCapsuleGeometry(0.038 * featS, 1.08 * featS, 14), accentMat);
      handleBar.rotation.z = Math.PI / 2;
      handleBar.position.set(0, 0.56, -0.02);
      group.add(handleBar);
      [-0.56, 0.56].forEach((xPos) => {
        const anchorNode = new THREE.Mesh(createRoundedRectExtrude(0.16 * featS, 0.16 * featS, 0.04, 0.1, 0.03), accentMat);
        anchorNode.position.set(xPos * featS, 0.56, 0.02);
        group.add(anchorNode);
      });
    } else if (sp === "surveyMarketingHorn") {
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
      const lipRing = new THREE.Mesh(new THREE.TorusGeometry(0.48 * featS, 0.075 * featS, 16, 36), accentMat);
      lipRing.rotation.y = Math.PI / 2;
      lipRing.position.set(0.38, 0, 0);
      hornGroup.add(lipRing);
      const grip = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.3 * featS, 16), accentMat);
      grip.position.set(-0.16, -0.42, 0);
      grip.rotation.z = 0.35;
      hornGroup.add(grip);
      group.add(hornGroup);
      [0.64, 0.82].forEach((r) => {
        const wave = new THREE.Mesh(new THREE.TorusGeometry(r * featS, 0.048 * featS, 12, 24, Math.PI * 0.42), accentMat);
        wave.position.set(0.05, 0.05, 0.1);
        wave.rotation.z = -0.18;
        group.add(wave);
      });
    } else if (sp === "surveyEduScope") {
      const flaskPts = [
        new THREE.Vector2(0.01, -0.48),
        new THREE.Vector2(0.48, -0.48),
        new THREE.Vector2(0.54, -0.32),
        new THREE.Vector2(0.2, 0.16),
        new THREE.Vector2(0.2, 0.44),
        new THREE.Vector2(0.01, 0.44)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(flaskPts, 32), mainMat));
      const flaskRim = new THREE.Mesh(new THREE.TorusGeometry(0.22 * featS, 0.062 * featS, 16, 32), accentMat);
      flaskRim.rotation.x = Math.PI / 2;
      flaskRim.position.set(0, 0.46, 0);
      group.add(flaskRim);
      [-1, 1].forEach((dir) => {
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.68 * featS, 0.048 * featS, 16, 48), accentMat);
        orbit.position.set(0, -0.06, 0);
        orbit.rotation.x = Math.PI * 0.36;
        orbit.rotation.y = dir * Math.PI * 0.26;
        orbit.scale.set(1, 0.62, 1);
        group.add(orbit);
        const electron = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        electron.position.set(dir * 0.58 * featS, dir * 0.24 * featS - 0.06, 0.18);
        electron.scale.setScalar(0.1 * featS);
        group.add(electron);
      });
      const bubble1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      bubble1.position.set(-0.06, 0.64, 0.06);
      bubble1.scale.setScalar(0.1 * featS);
      group.add(bubble1);
      const bubble2 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      bubble2.position.set(0.12, 0.78, 0.08);
      bubble2.scale.setScalar(0.068 * featS);
      group.add(bubble2);
    } else if (sp === "surveyMediaCreative") {
      const playShape = new THREE.Shape();
      playShape.moveTo(-0.42, 0.52);
      playShape.quadraticCurveTo(-0.52, 0.56, -0.52, 0.42);
      playShape.lineTo(-0.52, -0.42);
      playShape.quadraticCurveTo(-0.52, -0.56, -0.42, -0.52);
      playShape.lineTo(0.54, -0.06);
      playShape.quadraticCurveTo(0.64, 0, 0.54, 0.06);
      playShape.closePath();
      const playGeo = new THREE.ExtrudeGeometry(playShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.11,
        bevelThickness: 0.13
      });
      playGeo.center();
      group.add(new THREE.Mesh(playGeo, mainMat));
      const beret = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      beret.position.set(-0.22, 0.52, 0.04);
      beret.rotation.z = 0.32;
      beret.scale.set(0.34 * featS, 0.15 * featS, 0.3 * featS);
      group.add(beret);
      const stem = new THREE.Mesh(createCapsuleGeometry(0.04 * featS, 0.12 * featS, 10), accentMat);
      stem.position.set(-0.26, 0.66, 0.04);
      stem.rotation.z = 0.32;
      group.add(stem);
      const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      spark.position.set(0.46, 0.42, 0.2);
      spark.scale.setScalar(0.78 * featS);
      group.add(spark);
    } else if (sp === "surveyFinLegal") {
      const coinDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      coinDisc.position.set(0, -0.16, 0);
      coinDisc.scale.set(0.52, 0.52, 0.32);
      group.add(coinDisc);
      const coinRim = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.082, 18, 40), mainMat);
      coinRim.position.set(0, -0.16, 0.1);
      group.add(coinRim);
      const yenGroup = new THREE.Group();
      yenGroup.position.set(-0.24, 0.08, 0.26);
      yenGroup.scale.setScalar(0.72 * featS);
      const yenStem = new THREE.Mesh(createCapsuleGeometry(0.045, 0.2, 10), accentMat);
      yenStem.position.set(0, -0.06, 0);
      yenGroup.add(yenStem);
      [-1, 1].forEach((dir) => {
        const vArm = new THREE.Mesh(createCapsuleGeometry(0.042, 0.18, 10), accentMat);
        vArm.position.set(dir * 0.08, 0.1, 0);
        vArm.rotation.z = -dir * 0.55;
        yenGroup.add(vArm);
      });
      const crossBar = new THREE.Mesh(createCapsuleGeometry(0.038, 0.22, 10), accentMat);
      crossBar.rotation.z = Math.PI / 2;
      crossBar.position.set(0, -0.02, 0);
      yenGroup.add(crossBar);
      group.add(yenGroup);
      const pillar = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.34 * featS, 14), accentMat);
      pillar.position.set(0, 0.42, 0);
      group.add(pillar);
      const finial = new THREE.Mesh(new THREE.OctahedronGeometry(0.14 * featS, 0), accentMat);
      finial.position.set(0, 0.64, 0);
      group.add(finial);
      const beam = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 1.18 * featS, 18), accentMat);
      beam.rotation.z = Math.PI / 2;
      beam.position.set(0, 0.5, 0);
      group.add(beam);
      [-0.58, 0.58].forEach((xPos) => {
        const cord = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.3 * featS, 10), accentMat);
        cord.position.set(xPos * featS, 0.32, 0);
        group.add(cord);
        const pan = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        pan.position.set(xPos * featS, 0.14, 0);
        pan.scale.set(0.22 * featS, 0.085 * featS, 0.22 * featS);
        group.add(pan);
      });
    } else if (sp === "surveyCorpManage") {
      const caseBody = new THREE.Mesh(createRoundedRectExtrude(1.08, 0.76, 0.18, 0.3, 0.1), mainMat);
      caseBody.position.set(0, -0.1, 0);
      group.add(caseBody);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.072 * featS, 16, 32, Math.PI), accentMat);
      handle.position.set(0, 0.34, 0);
      group.add(handle);
      [-0.36, 0.36].forEach((xPos) => {
        const latch = new THREE.Mesh(createCapsuleGeometry(0.058 * featS, 0.15 * featS, 12), accentMat);
        latch.position.set(xPos, 0.2, 0.22);
        group.add(latch);
      });
      const tieShape = new THREE.Shape();
      tieShape.moveTo(-0.07, 0.12);
      tieShape.lineTo(0.07, 0.12);
      tieShape.lineTo(0.12, -0.16);
      tieShape.lineTo(0, -0.3);
      tieShape.lineTo(-0.12, -0.16);
      tieShape.closePath();
      const tieGeo = new THREE.ExtrudeGeometry(tieShape, {
        depth: 0.06,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.025,
        bevelThickness: 0.025
      });
      tieGeo.center();
      const tieMesh = new THREE.Mesh(tieGeo, accentMat);
      tieMesh.position.set(0.08, -0.3, 0.24);
      tieMesh.scale.setScalar(featS);
      group.add(tieMesh);
    } else if (sp === "surveyStartupRocket") {
      const rPts = [
        new THREE.Vector2(0.01, -0.44),
        new THREE.Vector2(0.32, -0.42),
        new THREE.Vector2(0.46, -0.08),
        new THREE.Vector2(0.42, 0.26),
        new THREE.Vector2(0.22, 0.56),
        new THREE.Vector2(0.01, 0.68)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(rPts, 32), mainMat));
      const nosePts = [
        new THREE.Vector2(0.31, 0.36),
        new THREE.Vector2(0.18, 0.58),
        new THREE.Vector2(0.01, 0.7)
      ];
      const nose = new THREE.Mesh(new THREE.LatheGeometry(nosePts, 28), accentMat);
      nose.scale.setScalar(featS);
      group.add(nose);
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
    } else if (sp === "surveyOtherOmni") {
      const tileGeo = createRoundedRectExtrude(0.46, 0.46, 0.14, 0.26, 0.08);
      [[-0.26, -0.26], [0.26, -0.26], [-0.26, 0.26]].forEach(([tx, ty]) => {
        const tile = new THREE.Mesh(tileGeo, mainMat);
        tile.position.set(tx, ty, 0);
        group.add(tile);
      });
      const bridgePad = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.44, 0.16, 0.26, 0.08), mainMat);
      bridgePad.position.set(0, -0.22, 0.02);
      group.add(bridgePad);
      const diamondTile = new THREE.Mesh(createRoundedRectExtrude(0.42 * featS, 0.42 * featS, 0.12, 0.26, 0.08), accentMat);
      diamondTile.position.set(0.3, 0.3, 0.04);
      diamondTile.rotation.z = Math.PI / 4;
      group.add(diamondTile);
      [-0.36, -0.26, -0.16].forEach((dx) => {
        const dot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        dot.position.set(dx, 0.26, 0.22);
        dot.scale.set(0.042 * featS, 0.042 * featS, 0.03 * featS);
        group.add(dot);
      });
    } else if (sp === "foodStrawberry") {
      const sbPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.24, -0.46),
        new THREE.Vector2(0.46, -0.12),
        new THREE.Vector2(0.54, 0.22),
        new THREE.Vector2(0.38, 0.42),
        new THREE.Vector2(0.01, 0.44)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(sbPts, 32), mainMat));
      for (let i = 0; i < 5; i++) {
        const ang = i / 5 * Math.PI * 2;
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
      [[-0.32, 0.14, 0.36], [0.34, 0.14, 0.36], [-0.26, -0.22, 0.32], [0.28, -0.22, 0.32]].forEach(([x, y, z]) => {
        const seed = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        seed.position.set(x, y, z);
        seed.scale.set(0.038 * featS, 0.055 * featS, 0.03 * featS);
        group.add(seed);
      });
    } else if (sp === "foodPineapple") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0, -0.16, 0);
      body.scale.set(0.5, 0.52, 0.46);
      group.add(body);
      [-1, 1].forEach((dir) => {
        [-0.32, -0.14, 0.04].forEach((yPos) => {
          const bump = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
          bump.position.set(dir * 0.46, yPos, 0.08);
          bump.scale.setScalar(0.11);
          group.add(bump);
        });
      });
      [-0.55, -0.26, 0, 0.26, 0.55].forEach((tilt, idx) => {
        const blade = new THREE.Mesh(new THREE.ConeGeometry(0.13 * featS, 0.48 * featS, 6), accentMat);
        blade.position.set(tilt * 0.38, 0.48 + idx % 2 * 0.08, idx % 2 === 0 ? 0.04 : -0.04);
        blade.rotation.z = -tilt * 0.85;
        group.add(blade);
      });
    } else if (sp === "foodTwinCherry") {
      const mainBerry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      mainBerry.position.set(0.08, -0.22, 0.08);
      mainBerry.scale.set(0.46, 0.44, 0.44);
      group.add(mainBerry);
      const subBerry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      subBerry.position.set(-0.42, -0.12, -0.12);
      subBerry.scale.setScalar(0.32);
      group.add(subBerry);
      const stem1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.08, 0.16, 0.08),
        new THREE.Vector3(0.14, 0.42, 0.04),
        new THREE.Vector3(0.02, 0.64, 0)
      ]);
      const stem2 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.4, 0.14, -0.1),
        new THREE.Vector3(-0.22, 0.44, -0.04),
        new THREE.Vector3(0.02, 0.64, 0)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(stem1, 20, 0.048 * featS, 12, false), accentMat));
      group.add(new THREE.Mesh(new THREE.TubeGeometry(stem2, 20, 0.045 * featS, 12, false), accentMat));
      const topLeaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      topLeaf.position.set(0.22, 0.62, 0.04);
      topLeaf.rotation.z = -0.45;
      topLeaf.scale.set(0.22 * featS, 0.1 * featS, 0.08 * featS);
      group.add(topLeaf);
    } else if (sp === "foodAcorn") {
      const nutPts = [
        new THREE.Vector2(0.01, -0.58),
        new THREE.Vector2(0.18, -0.48),
        new THREE.Vector2(0.48, -0.16),
        new THREE.Vector2(0.48, 0.18),
        new THREE.Vector2(0.01, 0.22)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(nutPts, 32), mainMat));
      const capDome = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      capDome.position.set(0, 0.24, 0);
      capDome.scale.set(0.58 * featS, 0.28 * featS, 0.56 * featS);
      group.add(capDome);
      const twig = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.22 * featS, 14), accentMat);
      twig.position.set(0.04, 0.54, 0);
      twig.rotation.z = -0.25;
      group.add(twig);
    } else if (sp === "foodBanana") {
      const bananaCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.04, -0.34, 0),
        new THREE.Vector3(-0.04, 0.08, 0.04),
        new THREE.Vector3(0.1, 0.48, 0.02)
      ]);
      const fleshTube = new THREE.Mesh(new THREE.TubeGeometry(bananaCurve, 28, 0.29, 24, false), mainMat);
      group.add(fleshTube);
      const topCap = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      topCap.position.set(0.1, 0.48, 0.02);
      topCap.scale.set(0.28, 0.24, 0.28);
      group.add(topCap);
      const tipStem = new THREE.Mesh(createCapsuleGeometry(0.058 * featS, 0.14 * featS, 14), accentMat);
      tipStem.position.set(0.16, 0.68, 0.02);
      tipStem.rotation.z = -0.35;
      group.add(tipStem);
      [-1, 1].forEach((dir) => {
        const pShape = new THREE.Shape();
        pShape.moveTo(0, 0.1);
        pShape.quadraticCurveTo(dir * 0.48, 0.12, dir * 0.68, -0.32);
        pShape.quadraticCurveTo(dir * 0.42, -0.52, 0, -0.28);
        pShape.closePath();
        const pGeo = new THREE.ExtrudeGeometry(pShape, {
          depth: 0.16,
          bevelEnabled: true,
          bevelSegments: 8,
          steps: 1,
          bevelSize: 0.07,
          bevelThickness: 0.08
        });
        const peel = new THREE.Mesh(pGeo, accentMat);
        peel.position.set(0, -0.08, -0.06);
        peel.scale.setScalar(featS);
        group.add(peel);
      });
      const frontPeel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      frontPeel.position.set(0, -0.36, 0.18);
      frontPeel.rotation.x = 0.55;
      frontPeel.scale.set(0.38 * featS, 0.18 * featS, 0.26 * featS);
      group.add(frontPeel);
    } else if (sp === "foodWatermelon") {
      const fleshMat = createCloudToonMaterial("#FF3848", "#C9182B", 0.22);
      const rindGreenMat = createCloudToonMaterial("#16A34A", "#15803D", 0.2);
      const rindWhiteMat = createCloudToonMaterial("#E2F8EE", "#CBD5E1", 0.15);
      const seedDarkMat = new THREE.MeshBasicMaterial({ color: 988970 });
      const apexY = 0.5;
      const radius = 0.98;
      const startAng = -Math.PI * 0.74;
      const endAng = -Math.PI * 0.26;
      const wShape = new THREE.Shape();
      wShape.moveTo(0, apexY);
      wShape.lineTo(Math.cos(startAng) * (radius - 0.08), apexY + Math.sin(startAng) * (radius - 0.08));
      wShape.absarc(0, apexY, radius - 0.08, startAng, endAng, false);
      wShape.quadraticCurveTo(0.22, 0.2, 0, apexY);
      const wGeo = new THREE.ExtrudeGeometry(wShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.09
      });
      wGeo.center();
      const fleshMesh = new THREE.Mesh(wGeo, fleshMat);
      group.add(fleshMesh);
      const whiteArc = new THREE.Mesh(
        new THREE.TorusGeometry(radius - 0.03, 0.055, 16, 44, endAng - startAng),
        rindWhiteMat
      );
      whiteArc.position.set(0, apexY - 0.14, 0);
      whiteArc.rotation.z = startAng;
      group.add(whiteArc);
      const rindArc = new THREE.Mesh(
        new THREE.TorusGeometry(radius + 0.05, 0.095, 18, 48, endAng - startAng),
        rindGreenMat
      );
      rindArc.position.set(0, apexY - 0.14, 0);
      rindArc.rotation.z = startAng;
      group.add(rindArc);
      [startAng, endAng].forEach((ang) => {
        const cap = new THREE.Mesh(SHARED_GEOS.sphere, rindGreenMat);
        cap.position.set(Math.cos(ang) * (radius + 0.05), apexY - 0.14 + Math.sin(ang) * (radius + 0.05), 0);
        cap.scale.setScalar(0.095);
        group.add(cap);
      });
      [[-0.26, -0.06, 0.22], [0.26, -0.06, -0.22], [-0.38, -0.22, 0.35], [0, -0.22, 0], [0.38, -0.22, -0.35], [-0.02, 0.08, 0.08]].forEach(([sx, sy, rot]) => {
        const seed = new THREE.Mesh(SHARED_GEOS.sphere, seedDarkMat);
        seed.position.set(sx, sy, 0.2);
        seed.rotation.z = rot;
        seed.scale.set(0.045, 0.082, 0.035);
        group.add(seed);
      });
    } else if (sp === "foodAvocado") {
      const avoShape = new THREE.Shape();
      avoShape.moveTo(0, 0.6);
      avoShape.bezierCurveTo(0.34, 0.6, 0.58, 0.06, 0.52, -0.34);
      avoShape.bezierCurveTo(0.46, -0.62, -0.46, -0.62, -0.52, -0.34);
      avoShape.bezierCurveTo(-0.58, 0.06, -0.34, 0.6, 0, 0.6);
      const avoGeo = new THREE.ExtrudeGeometry(avoShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.11
      });
      avoGeo.center();
      group.add(new THREE.Mesh(avoGeo, mainMat));
      const pit = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      pit.position.set(0.04, -0.2, 0.18);
      pit.scale.set(0.28 * featS, 0.28 * featS, 0.22 * featS);
      group.add(pit);
      const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      leaf.position.set(0.16, 0.66, 0);
      leaf.rotation.z = -0.5;
      leaf.scale.set(0.18 * featS, 0.09 * featS, 0.08 * featS);
      group.add(leaf);
    } else if (sp === "foodMushroom") {
      const capMat = createCloudToonMaterial("#DC2626", "#991B1B", 0.22);
      const stalkMat = createCloudToonMaterial("#FAFAFA", "#E5E7EB", 0.18);
      const dotMat = createCloudToonMaterial("#FFFFFF", "#F3F4F6", 0.15);
      const stalkPts = [
        new THREE.Vector2(0.01, -0.62),
        new THREE.Vector2(0.3, -0.6),
        new THREE.Vector2(0.36, -0.46),
        new THREE.Vector2(0.3, -0.22),
        new THREE.Vector2(0.24, -0.06),
        new THREE.Vector2(0.01, -0.04)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(stalkPts, 32), stalkMat));
      const skirt = new THREE.Mesh(new THREE.TorusGeometry(0.26 * featS, 0.06 * featS, 12, 28), stalkMat);
      skirt.position.y = -0.26;
      group.add(skirt);
      const capPts = [
        new THREE.Vector2(0.01, -0.08),
        new THREE.Vector2(0.6, -0.1),
        new THREE.Vector2(0.74, 0.02),
        new THREE.Vector2(0.68, 0.3),
        new THREE.Vector2(0.44, 0.56),
        new THREE.Vector2(0.01, 0.68)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(capPts, 40), capMat));
      [
        [-0.44, 0.38, 0.38, 0.17],
        [0.44, 0.38, 0.38, 0.17],
        [0, 0.6, 0.16, 0.14],
        [-0.6, 0.08, 0.28, 0.13],
        [0.6, 0.08, 0.28, 0.13],
        [-0.22, 0.14, 0.44, 0.1],
        [0.22, 0.14, 0.44, 0.1]
      ].forEach(([x, y, z, r]) => {
        const dot = new THREE.Mesh(SHARED_GEOS.sphere, dotMat);
        dot.position.set(x, y, z);
        dot.scale.setScalar(r * featS);
        group.add(dot);
      });
    } else if (sp === "foodKiwi") {
      const kiwiShape = new THREE.Shape();
      kiwiShape.absellipse(0, 0, 0.52, 0.56, 0, Math.PI * 2, false, 0);
      const kiwiGeo = new THREE.ExtrudeGeometry(kiwiShape, {
        depth: 0.2,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.09
      });
      kiwiGeo.center();
      group.add(new THREE.Mesh(kiwiGeo, mainMat));
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.55 * featS, 0.055 * featS, 12, 36), accentMat);
      rim.position.z = 0.06;
      group.add(rim);
      const core = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      core.position.set(0, -0.1, 0.14);
      core.scale.set(0.16 * featS, 0.22 * featS, 0.08 * featS);
      group.add(core);
      for (let i = 0; i < 8; i++) {
        const ang = -0.3 * Math.PI + i / 7 * 1.6 * Math.PI;
        const rx = Math.cos(ang) * 0.27;
        const ry = -0.1 + Math.sin(ang) * 0.29;
        const seed = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        seed.position.set(rx, ry, 0.16);
        seed.scale.set(0.024 * featS, 0.038 * featS, 0.02 * featS);
        seed.rotation.z = ang + Math.PI / 2;
        group.add(seed);
      }
      const stem = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      stem.position.set(0, 0.64, 0);
      stem.scale.set(0.11 * featS, 0.06 * featS, 0.06 * featS);
      group.add(stem);
    } else if (sp === "foodEggplant") {
      const egPts = [
        new THREE.Vector2(0.01, -0.56),
        new THREE.Vector2(0.38, -0.5),
        new THREE.Vector2(0.5, -0.18),
        new THREE.Vector2(0.34, 0.26),
        new THREE.Vector2(0.24, 0.46),
        new THREE.Vector2(0.01, 0.48)
      ];
      const body = new THREE.Mesh(new THREE.LatheGeometry(egPts, 32), mainMat);
      body.rotation.z = -0.12;
      group.add(body);
      const calyx = new THREE.Mesh(new THREE.ConeGeometry(0.32 * featS, 0.22 * featS, 5), accentMat);
      calyx.rotation.z = Math.PI - 0.12;
      calyx.position.set(0.04, 0.42, 0);
      group.add(calyx);
      const hook = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.055 * featS, 14, 24, Math.PI * 0.9), accentMat);
      hook.position.set(0.14, 0.56, 0);
      hook.rotation.z = 0.4;
      group.add(hook);
    } else if (sp === "foodCarrot") {
      const cPts = [
        new THREE.Vector2(0.01, -0.58),
        new THREE.Vector2(0.16, -0.44),
        new THREE.Vector2(0.36, -0.06),
        new THREE.Vector2(0.46, 0.3),
        new THREE.Vector2(0.32, 0.44),
        new THREE.Vector2(0.01, 0.46)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(cPts, 32), mainMat));
      [-0.38, 0, 0.38].forEach((ang, i) => {
        const plume = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        plume.position.set(ang * 0.45, 0.62 + (i === 1 ? 0.06 : 0), 0);
        plume.rotation.z = -ang * 0.9;
        plume.scale.set(0.14 * featS, 0.28 * featS, 0.12 * featS);
        group.add(plume);
      });
    } else if (sp === "foodLemon") {
      const lemPts = [
        new THREE.Vector2(0.01, -0.62),
        new THREE.Vector2(0.14, -0.52),
        new THREE.Vector2(0.46, -0.22),
        new THREE.Vector2(0.5, 0),
        new THREE.Vector2(0.46, 0.22),
        new THREE.Vector2(0.14, 0.52),
        new THREE.Vector2(0.01, 0.62)
      ];
      const lemonMesh = new THREE.Mesh(new THREE.LatheGeometry(lemPts, 32), mainMat);
      lemonMesh.rotation.z = -0.62;
      group.add(lemonMesh);
      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        leaf.position.set(0.38 + dir * 0.12, 0.48, 0);
        leaf.rotation.z = dir * 0.55;
        leaf.scale.set(0.18 * featS, 0.09 * featS, 0.08 * featS);
        group.add(leaf);
      });
    } else if (sp === "foodPistachio") {
      const kernel = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      kernel.position.set(0, 0.04, 0.06);
      kernel.scale.set(0.42, 0.52, 0.4);
      group.add(kernel);
      [-1, 1].forEach((dir) => {
        const shell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        shell.position.set(dir * 0.34, -0.06, -0.04);
        shell.rotation.z = -dir * 0.38;
        shell.scale.set(0.24 * featS, 0.52 * featS, 0.42 * featS);
        group.add(shell);
      });
    } else if (sp === "foodPeaPod") {
      const podShape = new THREE.Shape();
      podShape.moveTo(-0.68, 0.22);
      podShape.quadraticCurveTo(0, -0.62, 0.68, 0.22);
      podShape.quadraticCurveTo(0, -0.08, -0.68, 0.22);
      const podGeo = new THREE.ExtrudeGeometry(podShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      podGeo.center();
      const podMesh = new THREE.Mesh(podGeo, mainMat);
      podMesh.position.y = -0.1;
      group.add(podMesh);
      [-0.34, 0, 0.34].forEach((px, idx) => {
        const pea = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        pea.position.set(px * featS, 0.18 + (idx === 1 ? -0.04 : 0.04), 0.04);
        pea.scale.setScalar(0.18 * featS);
        group.add(pea);
      });
    } else if (sp === "foodChili") {
      const calyxMat = createCloudToonMaterial("#22C55E", "#15803D", 0.22);
      const chiliPts = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24;
        const x = Math.sin(t * Math.PI * 0.95) * 0.38 - t * 0.24;
        const y = 0.36 - t * 0.88 + Math.sin(t * Math.PI) * 0.12;
        const z = Math.sin(t * Math.PI * 0.8) * 0.14;
        chiliPts.push(new THREE.Vector3(x, y, z));
      }
      const chiliCurve = new THREE.CatmullRomCurve3(chiliPts);
      const chiliGeo = new THREE.TubeGeometry(chiliCurve, 40, 0.28, 20, false);
      const posAttr = chiliGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const segIdx = Math.floor(i / 21);
        const t = segIdx / 40;
        const factor = t < 0.2 ? 0.7 + t * 1.5 : Math.max(0.2, 1 - t * 0.85);
        posAttr.setX(i, posAttr.getX(i) * factor);
        posAttr.setZ(i, posAttr.getZ(i) * factor);
      }
      chiliGeo.computeVertexNormals();
      const chiliMesh = new THREE.Mesh(chiliGeo, mainMat);
      group.add(chiliMesh);
      const tip = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      tip.position.copy(chiliPts[chiliPts.length - 1]);
      tip.scale.setScalar(0.08);
      group.add(tip);
      const calyxGroup = new THREE.Group();
      calyxGroup.position.copy(chiliPts[0]);
      calyxGroup.position.y += 0.04;
      const baseCap = new THREE.Mesh(SHARED_GEOS.sphere, calyxMat);
      baseCap.scale.set(0.28, 0.12, 0.28);
      calyxGroup.add(baseCap);
      for (let i = 0; i < 5; i++) {
        const ang = i / 5 * Math.PI * 2;
        const petal = new THREE.Mesh(SHARED_GEOS.sphere, calyxMat);
        petal.position.set(Math.cos(ang) * 0.22, -0.06, Math.sin(ang) * 0.22);
        petal.scale.set(0.08, 0.16, 0.06);
        petal.rotation.z = -Math.cos(ang) * 0.4;
        petal.rotation.x = Math.sin(ang) * 0.4;
        calyxGroup.add(petal);
      }
      const stemPts = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.04, 0.12, 0.02),
        new THREE.Vector3(0.14, 0.22, -0.04)
      ];
      const stem = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(stemPts), 14, 0.042, 10, false), calyxMat);
      calyxGroup.add(stem);
      group.add(calyxGroup);
      const flame = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      flame.position.set(0.38, 0.12, 0.18);
      flame.rotation.z = -0.35;
      flame.scale.setScalar(0.85 * featS);
      group.add(flame);
    } else if (sp === "foodOnigiri") {
      const noriMat = createCloudToonMaterial("#1A3A1A", "#0F2410", 0.2);
      const umeMat = createCloudToonMaterial("#C0392B", "#8B1A1A", 0.18);
      const rShape = new THREE.Shape();
      rShape.moveTo(0, 0.58);
      rShape.quadraticCurveTo(0.52, 0.28, 0.52, -0.08);
      rShape.quadraticCurveTo(0.52, -0.46, 0.22, -0.46);
      rShape.lineTo(-0.22, -0.46);
      rShape.quadraticCurveTo(-0.52, -0.46, -0.52, -0.08);
      rShape.quadraticCurveTo(-0.52, 0.28, 0, 0.58);
      const rGeo = new THREE.ExtrudeGeometry(rShape, {
        depth: 0.32,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.12,
        bevelThickness: 0.14
      });
      rGeo.center();
      group.add(new THREE.Mesh(rGeo, mainMat));
      const nori = new THREE.Mesh(createRoundedRectExtrude(0.86 * featS, 0.4 * featS, 0.06, 0.38, 0.06), noriMat);
      nori.position.set(0, -0.28, 0.02);
      group.add(nori);
      const plum = new THREE.Mesh(SHARED_GEOS.sphere, umeMat);
      plum.position.set(0, 0.54, 0.14);
      plum.scale.setScalar(0.14 * featS);
      group.add(plum);
      for (let i = 0; i < 4; i++) {
        const ang = i / 4 * Math.PI * 2 + Math.PI / 4;
        const ray = new THREE.Mesh(SHARED_GEOS.sphere, umeMat);
        ray.position.set(
          Math.cos(ang) * 0.22 * featS,
          0.52 + Math.sin(ang) * 0.08 * featS,
          0.12
        );
        ray.scale.set(0.06 * featS, 0.06 * featS, 0.04 * featS);
        group.add(ray);
      }
    } else if (sp === "foodPopsicle") {
      const popShape = new THREE.Shape();
      popShape.moveTo(-0.42, -0.38);
      popShape.lineTo(0.42, -0.38);
      popShape.lineTo(0.42, 0.14);
      popShape.absarc(0.38, 0.42, 0.24, -Math.PI * 0.45, Math.PI * 0.92, true);
      popShape.quadraticCurveTo(-0.42, 0.58, -0.42, 0.24);
      popShape.closePath();
      const popGeo = new THREE.ExtrudeGeometry(popShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      popGeo.center();
      const popBody = new THREE.Mesh(popGeo, mainMat);
      popBody.position.y = 0.08;
      group.add(popBody);
      const stick = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.34 * featS, 16), accentMat);
      stick.position.set(0, -0.52, 0);
      group.add(stick);
    } else if (sp === "foodDonut") {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.22, 24, 48), mainMat);
      group.add(ring);
      const eyePad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      eyePad.position.set(0, -0.22, 0.12);
      eyePad.scale.set(0.36, 0.26, 0.22);
      group.add(eyePad);
      const icing = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.235 * featS, 20, 40, Math.PI * 1.1), accentMat);
      icing.rotation.z = -0.05 * Math.PI;
      icing.position.z = 0.02;
      group.add(icing);
      [[-0.36, 0.32], [0, 0.46], [0.36, 0.3]].forEach(([sx, sy]) => {
        const spk = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        spk.position.set(sx, sy, 0.26);
        spk.scale.set(0.08 * featS, 0.05 * featS, 0.05 * featS);
        group.add(spk);
      });
    } else if (sp === "foodSwissCheese") {
      const cShape = new THREE.Shape();
      cShape.moveTo(-0.56, -0.44);
      cShape.lineTo(0.56, -0.44);
      cShape.lineTo(0.56, 0.44);
      cShape.lineTo(-0.56, 0.14);
      cShape.closePath();
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      cGeo.center();
      group.add(new THREE.Mesh(cGeo, mainMat));
      [[-0.34, 0.18, 0.22, 0.14], [0.34, 0.32, 0.22, 0.16], [0.48, -0.18, 0.22, 0.11]].forEach(([x, y, z, r]) => {
        const hole = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        hole.position.set(x, y, z);
        hole.scale.set(r * featS, r * featS, 0.08 * featS);
        group.add(hole);
      });
    } else if (sp === "foodSunnyEgg") {
      const eShape = new THREE.Shape();
      eShape.moveTo(-0.58, -0.16);
      eShape.bezierCurveTo(-0.68, 0.36, -0.18, 0.64, 0.28, 0.5);
      eShape.bezierCurveTo(0.68, 0.38, 0.66, -0.22, 0.36, -0.48);
      eShape.bezierCurveTo(0.04, -0.64, -0.48, -0.54, -0.58, -0.16);
      const eGeo = new THREE.ExtrudeGeometry(eShape, {
        depth: 0.18,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      eGeo.center();
      group.add(new THREE.Mesh(eGeo, mainMat));
      const yolk = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      yolk.position.set(-0.18, 0.22, 0.18);
      yolk.scale.set(0.32 * featS, 0.32 * featS, 0.22 * featS);
      group.add(yolk);
    } else if (sp === "foodIceCreamCone") {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.38 * featS, 0.56 * featS, 24), accentMat);
      cone.rotation.z = Math.PI;
      cone.position.set(0, -0.34, 0);
      group.add(cone);
      const scoop1 = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      scoop1.position.set(0, 0.06, 0);
      scoop1.scale.set(0.5, 0.34, 0.46);
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
    } else if (sp === "foodNigiriSushi") {
      const shari = new THREE.Mesh(createRoundedRectExtrude(0.92, 0.5, 0.22, 0.38, 0.12), mainMat);
      shari.position.set(0, -0.18, 0);
      group.add(shari);
      const topping = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      topping.position.set(-0.04, 0.22, 0);
      topping.scale.set(0.64 * featS, 0.22 * featS, 0.38 * featS);
      group.add(topping);
      const tailFin = new THREE.Mesh(new THREE.ConeGeometry(0.2 * featS, 0.32 * featS, 4), accentMat);
      tailFin.position.set(0.54, 0.32, 0);
      tailFin.rotation.z = 0.85;
      group.add(tailFin);
    } else if (sp === "foodSteamedBao") {
      const bun = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      bun.position.set(0, -0.06, 0);
      bun.scale.set(0.6, 0.48, 0.56);
      group.add(bun);
      for (let i = 0; i < 8; i++) {
        const ang = i / 8 * Math.PI * 2;
        const pleat = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        pleat.position.set(Math.cos(ang) * 0.22, 0.34, Math.sin(ang) * 0.22);
        pleat.rotation.y = -ang;
        pleat.scale.set(0.18, 0.1, 0.09);
        group.add(pleat);
      }
      const topTwist = new THREE.Mesh(new THREE.TorusGeometry(0.1 * featS, 0.048 * featS, 12, 24), accentMat);
      topTwist.rotation.x = Math.PI / 2;
      topTwist.position.set(0, 0.44, 0);
      group.add(topTwist);
      const steamer = new THREE.Mesh(new THREE.CylinderGeometry(0.54 * featS, 0.5 * featS, 0.14 * featS, 28), accentMat);
      steamer.position.set(0, -0.48, 0);
      group.add(steamer);
    } else if (sp === "foodRamenBowl") {
      const bowlPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.32, -0.54),
        new THREE.Vector2(0.28, -0.4),
        new THREE.Vector2(0.56, -0.14),
        new THREE.Vector2(0.62, 0.2),
        new THREE.Vector2(0.01, 0.18)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(bowlPts, 32), mainMat));
      const noodles = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      noodles.position.set(0, 0.22, 0);
      noodles.scale.set(0.48 * featS, 0.22 * featS, 0.44 * featS);
      group.add(noodles);
      [-0.08, 0.06].forEach((offsetY) => {
        const chopstick = new THREE.Mesh(createCapsuleGeometry(0.038 * featS, 1.16 * featS, 12), accentMat);
        chopstick.position.set(0.08, 0.42 + offsetY, 0.06);
        chopstick.rotation.z = 1.38;
        group.add(chopstick);
      });
    } else if (sp === "foodBobaTea") {
      const cupPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.34, -0.52),
        new THREE.Vector2(0.46, 0.18),
        new THREE.Vector2(0.01, 0.18)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(cupPts, 32), mainMat));
      const cupRim = new THREE.Mesh(new THREE.TorusGeometry(0.47 * featS, 0.068 * featS, 16, 40), accentMat);
      cupRim.rotation.x = Math.PI / 2;
      cupRim.position.set(0, 0.2, 0);
      group.add(cupRim);
      const domeLid = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      domeLid.position.set(0, 0.2, 0);
      domeLid.scale.set(0.44, 0.28, 0.44);
      group.add(domeLid);
      const straw = new THREE.Mesh(createCapsuleGeometry(0.105 * featS, 0.46 * featS, 20), accentMat);
      straw.position.set(0.18, 0.5, 0);
      straw.rotation.z = -0.28;
      group.add(straw);
      [
        [-0.26, -0.32, 0.34],
        [-0.13, -0.4, 0.37],
        [0, -0.34, 0.38],
        [0.13, -0.4, 0.37],
        [0.26, -0.32, 0.34]
      ].forEach(([bx, by, bz]) => {
        const boba = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        boba.position.set(bx, by, bz);
        boba.scale.setScalar(0.095 * featS);
        group.add(boba);
      });
    } else if (sp === "foodCaramelPudding") {
      const pudPts = [
        new THREE.Vector2(0.01, -0.44),
        new THREE.Vector2(0.54, -0.42),
        new THREE.Vector2(0.42, 0.26),
        new THREE.Vector2(0.01, 0.28)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(pudPts, 32), mainMat));
      const caramelCap = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      caramelCap.position.set(0, 0.26, 0);
      caramelCap.scale.set(0.44 * featS, 0.16 * featS, 0.44 * featS);
      group.add(caramelCap);
      const cherry = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      cherry.position.set(0, 0.48, 0);
      cherry.scale.setScalar(0.14 * featS);
      group.add(cherry);
      const saucer = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      saucer.position.set(0, -0.46, 0);
      saucer.scale.set(0.68 * featS, 0.1 * featS, 0.64 * featS);
      group.add(saucer);
    } else if (sp === "foodMacaron") {
      const topShell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      topShell.position.set(0, 0.18, 0);
      topShell.scale.set(0.6, 0.28, 0.56);
      group.add(topShell);
      const botShell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      botShell.position.set(0, -0.22, 0);
      botShell.scale.set(0.6, 0.24, 0.56);
      group.add(botShell);
      const cream = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      cream.position.set(0, -0.02, 0);
      cream.scale.set(0.64 * featS, 0.16 * featS, 0.6 * featS);
      group.add(cream);
    } else if (sp === "foodPizzaSlice") {
      const pzShape = new THREE.Shape();
      pzShape.moveTo(0, -0.58);
      pzShape.lineTo(0.56, 0.36);
      pzShape.quadraticCurveTo(0, 0.52, -0.56, 0.36);
      pzShape.closePath();
      const pzGeo = new THREE.ExtrudeGeometry(pzShape, {
        depth: 0.2,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.09
      });
      pzGeo.center();
      group.add(new THREE.Mesh(pzGeo, mainMat));
      const crust = new THREE.Mesh(new THREE.TorusGeometry(0.6 * featS, 0.13 * featS, 16, 36, Math.PI * 0.64), accentMat);
      crust.position.set(0, -0.14, 0.04);
      crust.rotation.z = Math.PI * 0.18;
      group.add(crust);
      [[-0.24, 0.18], [0.24, 0.16]].forEach(([px, py]) => {
        const pep = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        pep.position.set(px, py, 0.18);
        pep.scale.set(0.13 * featS, 0.13 * featS, 0.06 * featS);
        group.add(pep);
      });
    } else if (sp === "foodHotdog") {
      const bun = new THREE.Mesh(createCapsuleGeometry(0.38, 0.56, 28), mainMat);
      bun.rotation.z = Math.PI / 2;
      bun.position.set(0, -0.12, 0);
      group.add(bun);
      const sausage = new THREE.Mesh(createCapsuleGeometry(0.22 * featS, 0.88 * featS, 24), accentMat);
      sausage.rotation.z = Math.PI / 2;
      sausage.position.set(0, 0.18, 0);
      group.add(sausage);
      const mustardPts = [];
      for (let i = 0; i <= 20; i++) {
        const t = i / 20 * 2 - 1;
        mustardPts.push(new THREE.Vector3(t * 0.42, 0.4 + Math.sin(t * Math.PI * 2.5) * 0.06, 0.08));
      }
      const mustard = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mustardPts), 28, 0.042 * featS, 12, false), mainMat);
      group.add(mustard);
    } else if (sp === "foodFortuneCookie") {
      const fcShape = new THREE.Shape();
      fcShape.moveTo(0, 0.54);
      fcShape.bezierCurveTo(0.68, 0.54, 0.72, -0.44, 0.28, -0.48);
      fcShape.quadraticCurveTo(0, -0.12, -0.28, -0.48);
      fcShape.bezierCurveTo(-0.72, -0.44, -0.68, 0.54, 0, 0.54);
      const fcGeo = new THREE.ExtrudeGeometry(fcShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.11,
        bevelThickness: 0.12
      });
      fcGeo.center();
      group.add(new THREE.Mesh(fcGeo, mainMat));
      const slip = new THREE.Mesh(createRoundedRectExtrude(0.38 * featS, 0.18 * featS, 0.04, 0.06, 0.02), accentMat);
      slip.position.set(0.46, 0.36, 0.08);
      slip.rotation.z = 0.42;
      group.add(slip);
    } else if (sp === "botCyberDog") {
      const head = new THREE.Mesh(createRoundedRectExtrude(0.88, 0.78, 0.26, 0.4, 0.14), mainMat);
      head.position.set(0, -0.04, 0);
      group.add(head);
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(createCapsuleGeometry(0.15 * featS, 0.38 * featS, 18), accentMat);
        ear.position.set(dir * 0.56, 0.04, 0);
        ear.rotation.z = dir * 0.28;
        group.add(ear);
      });
      const stem = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.2 * featS, 12), accentMat);
      stem.position.set(0, 0.48, 0);
      group.add(stem);
      const boneBar = new THREE.Mesh(createCapsuleGeometry(0.06 * featS, 0.28 * featS, 12), accentMat);
      boneBar.rotation.z = Math.PI / 2;
      boneBar.position.set(0, 0.6, 0);
      group.add(boneBar);
    } else if (sp === "botArcadeGhost") {
      const gShape = new THREE.Shape();
      gShape.moveTo(-0.52, -0.48);
      gShape.quadraticCurveTo(-0.35, -0.26, -0.18, -0.48);
      gShape.quadraticCurveTo(0, -0.26, 0.18, -0.48);
      gShape.quadraticCurveTo(0.35, -0.26, 0.52, -0.48);
      gShape.lineTo(0.52, 0.08);
      gShape.absarc(0, 0.08, 0.52, 0, Math.PI, false);
      gShape.closePath();
      const gGeo = new THREE.ExtrudeGeometry(gShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      gGeo.center();
      group.add(new THREE.Mesh(gGeo, mainMat));
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.052 * featS, 14, 32), accentMat);
      halo.rotation.x = Math.PI / 2 - 0.18;
      halo.position.set(0, 0.66, 0);
      group.add(halo);
    } else if (sp === "botAnvilForge") {
      const anvilBase = new THREE.Mesh(createRoundedRectExtrude(0.9, 0.22, 0.08, 0.3, 0.06), mainMat);
      anvilBase.position.set(0, -0.46, 0);
      group.add(anvilBase);
      const anvilWaist = new THREE.Mesh(createRoundedRectExtrude(0.44, 0.22, 0.06, 0.28, 0.05), mainMat);
      anvilWaist.position.set(-0.04, -0.22, 0);
      group.add(anvilWaist);
      const anvilTopShape = new THREE.Shape();
      anvilTopShape.moveTo(-0.58, 0.14);
      anvilTopShape.lineTo(0.38, 0.14);
      anvilTopShape.lineTo(0.72, 0.03);
      anvilTopShape.lineTo(0.72, -0.03);
      anvilTopShape.lineTo(0.38, -0.14);
      anvilTopShape.lineTo(-0.58, -0.14);
      anvilTopShape.closePath();
      const anvilTopGeo = new THREE.ExtrudeGeometry(anvilTopShape, {
        depth: 0.32,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.09
      });
      anvilTopGeo.center();
      const anvilTop = new THREE.Mesh(anvilTopGeo, mainMat);
      anvilTop.position.y = 0.06;
      group.add(anvilTop);
      const anvilHammer = new THREE.Mesh(createRoundedRectExtrude(0.44 * featS, 0.22 * featS, 0.06, 0.34, 0.06), accentMat);
      anvilHammer.rotation.z = -0.38;
      anvilHammer.position.set(-0.14, 0.38, 0.12);
      group.add(anvilHammer);
      const anvilHandle = new THREE.Mesh(createCapsuleGeometry(0.056 * featS, 0.42 * featS, 14), accentMat);
      anvilHandle.rotation.z = -0.38;
      anvilHandle.position.set(0.18, 0.44, 0.12);
      group.add(anvilHandle);
    } else if (sp === "botAstroHelmet") {
      const helmet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      helmet.scale.set(0.58, 0.56, 0.54);
      group.add(helmet);
      const visorRim = new THREE.Mesh(new THREE.TorusGeometry(0.38 * featS, 0.068 * featS, 16, 40), accentMat);
      visorRim.scale.set(1.18, 0.88, 1);
      visorRim.position.set(0.06, 0.02, 0.4);
      group.add(visorRim);
      const antRod = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.34 * featS, 12), accentMat);
      antRod.position.set(-0.56, 0.28, 0);
      group.add(antRod);
      const antTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      antTip.position.set(-0.56, 0.52, 0);
      antTip.scale.setScalar(0.1 * featS);
      group.add(antTip);
    } else if (sp === "botWizardHat") {
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
    } else if (sp === "botGlobeStand") {
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
      base.scale.set(0.38 * featS, 0.1 * featS, 0.34 * featS);
      group.add(base);
    } else if (sp === "botPillCapsule") {
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
      crossStar.position.set(-0.48, 0.42, 0.2);
      crossStar.scale.setScalar(0.82 * featS);
      group.add(crossStar);
    } else if (sp === "botLightPrism") {
      const pShape = new THREE.Shape();
      pShape.moveTo(0, 0.56);
      pShape.lineTo(0.54, -0.44);
      pShape.lineTo(-0.54, -0.44);
      pShape.closePath();
      const pGeo = new THREE.ExtrudeGeometry(pShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      pGeo.center();
      group.add(new THREE.Mesh(pGeo, mainMat));
      [-0.22, 0.04, 0.3].forEach((ry, idx) => {
        const ray = new THREE.Mesh(createCapsuleGeometry(0.052 * featS, 0.36 * featS, 12), accentMat);
        ray.position.set(0.52, ry, 0);
        ray.rotation.z = -1.25 + (idx - 1) * 0.28;
        group.add(ray);
      });
    } else if (sp === "botLighthouse") {
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
    } else if (sp === "iconWhale") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0.08, -0.1, 0);
      body.scale.set(0.54, 0.46, 0.48);
      group.add(body);
      const tailCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.3, -0.18, 0),
        new THREE.Vector3(-0.56, -0.06, 0),
        new THREE.Vector3(-0.66, 0.2, 0)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 20, 0.14, 16, false), mainMat));
      [-1, 1].forEach((dir) => {
        const fluke = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        fluke.position.set(-0.66 + dir * 0.12, 0.32, dir * 0.06);
        fluke.rotation.z = dir * 0.65;
        fluke.scale.set(0.2, 0.09, 0.1);
        group.add(fluke);
      });
      [-1, 1].forEach((dir) => {
        const spout = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0.08, 0.34, 0),
          new THREE.Vector3(0.08 + dir * 0.12, 0.56, 0),
          new THREE.Vector3(0.08 + dir * 0.28, 0.48, 0.04)
        ]);
        group.add(new THREE.Mesh(new THREE.TubeGeometry(spout, 16, 0.052 * featS, 12, false), accentMat));
      });
    } else if (sp === "iconBunny") {
      const pinkMat = createCloudToonMaterial("#FDA4AF", "#F43F5E", 0.18);
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.16, 0);
      head.scale.set(0.58, 0.48, 0.5);
      group.add(head);
      [-0.34, 0.34].forEach((cx) => {
        const cheek = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        cheek.position.set(cx, -0.22, 0.24);
        cheek.scale.set(0.24, 0.2, 0.18);
        group.add(cheek);
      });
      const nose = new THREE.Mesh(SHARED_GEOS.sphere, pinkMat);
      nose.position.set(0, -0.18, 0.5);
      nose.scale.set(0.055, 0.045, 0.05);
      group.add(nose);
      const leftEarGroup = new THREE.Group();
      leftEarGroup.position.set(-0.24, 0.42, 0);
      leftEarGroup.rotation.z = 0.16;
      const lOuter = new THREE.Mesh(createCapsuleGeometry(0.13 * featS, 0.52 * featS, 20), mainMat);
      leftEarGroup.add(lOuter);
      const lInner = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.36 * featS, 16), pinkMat);
      lInner.position.set(0, -0.02, 0.09);
      leftEarGroup.add(lInner);
      group.add(leftEarGroup);
      const rightEarGroup = new THREE.Group();
      rightEarGroup.position.set(0.26, 0.4, 0);
      rightEarGroup.rotation.z = -0.42;
      rightEarGroup.rotation.x = 0.28;
      const rOuter = new THREE.Mesh(createCapsuleGeometry(0.13 * featS, 0.48 * featS, 20), mainMat);
      rightEarGroup.add(rOuter);
      const rInner = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.34 * featS, 16), pinkMat);
      rInner.position.set(0, -0.02, 0.09);
      rightEarGroup.add(rInner);
      group.add(rightEarGroup);
      const tail = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      tail.position.set(0, -0.32, -0.48);
      tail.scale.setScalar(0.16);
      group.add(tail);
    } else if (sp === "iconDuck") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0.06, 0.14, 0.04);
      head.scale.set(0.44, 0.42, 0.42);
      group.add(head);
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(-0.08, -0.28, 0);
      body.scale.set(0.58, 0.34, 0.46);
      group.add(body);
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.36, 12), mainMat);
      tail.position.set(-0.58, -0.14, 0);
      tail.rotation.z = 0.85;
      group.add(tail);
      const bill = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      bill.position.set(0.42, 0.08, 0.26);
      bill.rotation.y = -0.35;
      bill.scale.set(0.24 * featS, 0.1 * featS, 0.18 * featS);
      group.add(bill);
      const tuft = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      tuft.position.set(0.02, 0.56, 0);
      tuft.rotation.z = 0.35;
      tuft.scale.set(0.09 * featS, 0.16 * featS, 0.09 * featS);
      group.add(tuft);
    } else if (sp === "iconPuffer") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.scale.set(0.54, 0.52, 0.5);
      group.add(body);
      for (let i = 0; i < 10; i++) {
        const ang = i / 10 * Math.PI * 2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.095 * featS, 0.22 * featS, 12), accentMat);
        spike.position.set(Math.cos(ang) * 0.56, Math.sin(ang) * 0.54, 0);
        spike.rotation.z = ang - Math.PI / 2;
        group.add(spike);
      }
      [-1, 1].forEach((dir) => {
        const fin = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        fin.position.set(dir * 0.58, -0.08, 0.16);
        fin.rotation.z = dir * 0.45;
        fin.scale.set(0.18 * featS, 0.11 * featS, 0.08 * featS);
        group.add(fin);
      });
    } else if (sp === "iconDeer") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.14, 0);
      head.scale.set(0.52, 0.48, 0.48);
      group.add(head);
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        ear.position.set(dir * 0.54, 0.12, 0);
        ear.rotation.z = -dir * 0.35;
        ear.scale.set(0.22, 0.11, 0.1);
        group.add(ear);
        const mainBranch = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.44 * featS, 14), accentMat);
        mainBranch.position.set(dir * 0.24, 0.46, 0);
        mainBranch.rotation.z = -dir * 0.32;
        group.add(mainBranch);
        const tine = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.22 * featS, 12), accentMat);
        tine.position.set(dir * 0.16, 0.48, 0.04);
        tine.rotation.z = dir * 0.55;
        group.add(tine);
      });
    } else if (sp === "iconPenguin") {
      const pPts = [
        new THREE.Vector2(0.01, -0.52),
        new THREE.Vector2(0.48, -0.48),
        new THREE.Vector2(0.52, -0.14),
        new THREE.Vector2(0.4, 0.28),
        new THREE.Vector2(0.32, 0.5),
        new THREE.Vector2(0.01, 0.54)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(pPts, 32), mainMat));
      [-1, 1].forEach((dir) => {
        const flipper = new THREE.Mesh(createCapsuleGeometry(0.11, 0.36, 16), mainMat);
        flipper.position.set(dir * 0.54, -0.08, 0);
        flipper.rotation.z = dir * 0.42;
        group.add(flipper);
        const foot = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        foot.position.set(dir * 0.24, -0.54, 0.22);
        foot.scale.set(0.16 * featS, 0.08 * featS, 0.2 * featS);
        group.add(foot);
      });
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.2 * featS, 12), accentMat);
      beak.rotation.x = Math.PI / 2;
      beak.position.set(0.08, 0.02, 0.48);
      group.add(beak);
    } else if (sp === "iconSnowman") {
      const botBall = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      botBall.position.set(0, -0.26, 0);
      botBall.scale.set(0.54, 0.42, 0.5);
      group.add(botBall);
      const topBall = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      topBall.position.set(0, 0.2, 0);
      topBall.scale.set(0.4, 0.36, 0.4);
      group.add(topBall);
      const hatGroup = new THREE.Group();
      hatGroup.position.set(-0.06, 0.54, 0);
      hatGroup.rotation.z = 0.18;
      hatGroup.scale.setScalar(featS);
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 24), accentMat);
      hatGroup.add(brim);
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.2, 0.26, 24), accentMat);
      crown.position.y = 0.14;
      hatGroup.add(crown);
      group.add(hatGroup);
      [-0.18, -0.38].forEach((by) => {
        const btn = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        btn.position.set(0.06, by, 0.46);
        btn.scale.setScalar(0.068 * featS);
        group.add(btn);
      });
    } else if (sp === "iconDevil") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0, -0.08, 0);
      body.scale.set(0.54, 0.5, 0.5);
      group.add(body);
      [-1, 1].forEach((dir) => {
        const hornCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(dir * 0.28, 0.3, 0),
          new THREE.Vector3(dir * 0.52, 0.44, 0),
          new THREE.Vector3(dir * 0.44, 0.68, 0.04)
        ]);
        const horn = new THREE.Mesh(new THREE.TubeGeometry(hornCurve, 20, 0.105 * featS, 14, false), accentMat);
        group.add(horn);
        const wing = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.36 * featS, 4), accentMat);
        wing.position.set(dir * 0.58, -0.08, -0.08);
        wing.rotation.z = dir * 1.15;
        group.add(wing);
      });
    } else if (sp === "iconUnicorn") {
      const horseGroup = new THREE.Group();
      const neck = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      neck.position.set(-0.06, -0.16, 0);
      neck.scale.set(0.44, 0.52, 0.42);
      horseGroup.add(neck);
      const snout = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      snout.position.set(0.24, -0.06, 0.12);
      snout.scale.set(0.38, 0.32, 0.36);
      horseGroup.add(snout);
      const snoutTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      snoutTip.position.set(0.48, -0.12, 0.16);
      snoutTip.scale.set(0.16, 0.18, 0.22);
      horseGroup.add(snoutTip);
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.58 * featS, 16), accentMat);
      horn.position.set(0.12, 0.56, 0.18);
      horn.rotation.z = -0.25;
      horn.rotation.x = 0.18;
      horseGroup.add(horn);
      [-0.14, 0.14].forEach((ez) => {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.28, 12), mainMat);
        ear.position.set(-0.1, 0.44, ez);
        ear.rotation.z = 0.22;
        ear.rotation.x = -ez * 0.4;
        horseGroup.add(ear);
      });
      [
        [-0.24, 0.32, -0.02, 0.2],
        [-0.34, 0.12, -0.04, 0.22],
        [-0.38, -0.1, -0.05, 0.2],
        [-0.32, -0.3, -0.04, 0.16]
      ].forEach(([mx, my, mz, ms]) => {
        const manePuff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        manePuff.position.set(mx, my, mz);
        manePuff.scale.setScalar(ms * featS);
        horseGroup.add(manePuff);
      });
      horseGroup.position.set(-0.06, 0, 0);
      group.add(horseGroup);
    } else if (sp === "iconElephant") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.04, 0.06);
      head.scale.set(0.48, 0.46, 0.46);
      group.add(head);
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        ear.position.set(dir * 0.52, -0.02, -0.06);
        ear.rotation.z = dir * 0.18;
        ear.scale.set(0.32 * featS, 0.44 * featS, 0.14 * featS);
        group.add(ear);
        const innerEar = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        innerEar.position.set(dir * 0.52, -0.04, 0.04);
        innerEar.rotation.z = dir * 0.18;
        innerEar.scale.set(0.2 * featS, 0.3 * featS, 0.08 * featS);
        group.add(innerEar);
      });
      const hat = new THREE.Mesh(new THREE.ConeGeometry(0.18 * featS, 0.28 * featS, 16), accentMat);
      hat.position.set(0, 0.52, 0.06);
      group.add(hat);
    } else if (sp === "iconDino") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0.06, -0.06, 0);
      body.scale.set(0.5, 0.52, 0.46);
      group.add(body);
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.46, 16), mainMat);
      tail.position.set(-0.48, -0.22, 0);
      tail.rotation.z = 1.05;
      group.add(tail);
      [
        [0.12, 0.52, -0.1],
        [-0.18, 0.44, 0.35],
        [-0.42, 0.22, 0.85],
        [-0.56, -0.04, 1.25]
      ].forEach(([sx, sy, rot]) => {
        const plate = new THREE.Mesh(new THREE.ConeGeometry(0.14 * featS, 0.24 * featS, 4), accentMat);
        plate.position.set(sx, sy, 0);
        plate.rotation.z = rot;
        group.add(plate);
      });
    } else if (sp === "iconOctopus") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, 0.08, 0);
      head.scale.set(0.52, 0.5, 0.5);
      group.add(head);
      for (let i = 0; i < 8; i++) {
        const ang = i / 8 * Math.PI * 2;
        const leg = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        leg.position.set(Math.cos(ang) * 0.44, -0.38, Math.sin(ang) * 0.42);
        leg.scale.set(0.2, 0.16, 0.2);
        group.add(leg);
      }
      const headband = new THREE.Mesh(new THREE.TorusGeometry(0.36 * featS, 0.058 * featS, 14, 36), accentMat);
      headband.rotation.x = Math.PI / 2 - 0.25;
      headband.position.set(0, 0.46, 0.04);
      group.add(headband);
    } else if (sp === "iconSnail") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0.12, -0.08, 0.08);
      body.scale.set(0.46, 0.46, 0.44);
      group.add(body);
      const shell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      shell.position.set(-0.32, 0.04, -0.1);
      shell.scale.set(0.46 * featS, 0.46 * featS, 0.34 * featS);
      group.add(shell);
      const spiralRing = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.055 * featS, 14, 32), mainMat);
      spiralRing.position.set(-0.34, 0.04, 0.12);
      group.add(spiralRing);
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
    } else if (sp === "iconButterfly") {
      [-1, 1].forEach((dir) => {
        const upperWing = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        upperWing.position.set(dir * 0.36, 0.18, 0);
        upperWing.rotation.z = -dir * 0.42;
        upperWing.scale.set(0.38, 0.3, 0.22);
        group.add(upperWing);
        const lowerWing = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        lowerWing.position.set(dir * 0.28, -0.24, 0);
        lowerWing.rotation.z = dir * 0.38;
        lowerWing.scale.set(0.28, 0.24, 0.2);
        group.add(lowerWing);
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
    } else if (sp === "iconTulip") {
      const tShape = new THREE.Shape();
      tShape.moveTo(0, -0.44);
      tShape.bezierCurveTo(0.56, -0.44, 0.62, 0.16, 0.42, 0.54);
      tShape.quadraticCurveTo(0.2, 0.28, 0, 0.58);
      tShape.quadraticCurveTo(-0.2, 0.28, -0.42, 0.54);
      tShape.bezierCurveTo(-0.62, 0.16, -0.56, -0.44, 0, -0.44);
      const tGeo = new THREE.ExtrudeGeometry(tShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      tGeo.center();
      const flower = new THREE.Mesh(tGeo, mainMat);
      flower.position.y = 0.06;
      group.add(flower);
      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        leaf.position.set(dir * 0.38, -0.44, 0);
        leaf.rotation.z = -dir * 0.65;
        leaf.scale.set(0.14 * featS, 0.32 * featS, 0.12 * featS);
        group.add(leaf);
      });
    } else if (sp === "iconSunflower") {
      const centerDisc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      centerDisc.scale.set(0.48, 0.48, 0.34);
      group.add(centerDisc);
      for (let i = 0; i < 12; i++) {
        const ang = i / 12 * Math.PI * 2;
        const petal = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        petal.position.set(Math.cos(ang) * 0.54, Math.sin(ang) * 0.54, -0.04);
        petal.rotation.z = ang;
        petal.scale.set(0.22 * featS, 0.12 * featS, 0.1 * featS);
        group.add(petal);
      }
    } else if (sp === "iconPinecone") {
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
    } else if (sp === "iconCrescent") {
      const mShape = new THREE.Shape();
      mShape.absarc(0.06, 0, 0.62, Math.PI * 0.28, Math.PI * 1.72, false);
      mShape.bezierCurveTo(-0.18, -0.32, -0.18, 0.32, 0.46, 0.48);
      const mGeo = new THREE.ExtrudeGeometry(mShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      mGeo.center();
      group.add(new THREE.Mesh(mGeo, mainMat));
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(0.38, 0.14, 0.14);
      star.rotation.z = 0.22;
      star.scale.setScalar(0.95 * featS);
      group.add(star);
    } else if (sp === "iconDiamond") {
      const diamondGroup = new THREE.Group();
      const crownGeo = new THREE.CylinderGeometry(0.48, 0.72, 0.34, 8);
      const crown = new THREE.Mesh(crownGeo, mainMat);
      crown.position.set(0, 0.18, 0);
      diamondGroup.add(crown);
      const girdleGeo = new THREE.CylinderGeometry(0.73, 0.73, 0.08, 8);
      const girdle = new THREE.Mesh(girdleGeo, accentMat);
      girdle.position.set(0, -0.01, 0);
      diamondGroup.add(girdle);
      const pavGeo = new THREE.ConeGeometry(0.72, 0.62, 8);
      pavGeo.rotateX(Math.PI);
      const pavilion = new THREE.Mesh(pavGeo, mainMat);
      pavilion.position.set(0, -0.34, 0);
      diamondGroup.add(pavilion);
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
      diamondGroup.rotation.y = Math.PI / 8;
      group.add(diamondGroup);
    } else if (sp === "iconBolt") {
      const bShape = new THREE.Shape();
      bShape.moveTo(0.18, 0.64);
      bShape.lineTo(-0.52, -0.02);
      bShape.lineTo(-0.04, -0.02);
      bShape.lineTo(-0.24, -0.64);
      bShape.lineTo(0.52, 0.08);
      bShape.lineTo(0.06, 0.08);
      bShape.closePath();
      const bGeo = new THREE.ExtrudeGeometry(bShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.11
      });
      bGeo.center();
      group.add(new THREE.Mesh(bGeo, mainMat));
      const pad = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      pad.position.set(0, 0.06, 0.08);
      pad.scale.set(0.36, 0.3, 0.24);
      group.add(pad);
      const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      spark.position.set(-0.48, 0.42, 0.2);
      spark.scale.setScalar(0.78 * featS);
      group.add(spark);
    } else if (sp === "iconHeartWing") {
      const hShape = new THREE.Shape();
      hShape.moveTo(0, -0.54);
      hShape.bezierCurveTo(0.62, -0.14, 0.68, 0.48, 0.28, 0.52);
      hShape.bezierCurveTo(0.1, 0.54, 0, 0.36, 0, 0.28);
      hShape.bezierCurveTo(0, 0.36, -0.1, 0.54, -0.28, 0.52);
      hShape.bezierCurveTo(-0.68, 0.48, -0.62, -0.14, 0, -0.54);
      const hGeo = new THREE.ExtrudeGeometry(hShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.11,
        bevelThickness: 0.13
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
    } else if (sp === "iconDroplet") {
      const dropPts = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24;
        const r = Math.sin(t * Math.PI) * (0.64 - t * 0.2);
        const y = -0.52 + t * 1.16;
        dropPts.push(new THREE.Vector2(Math.max(0.01, r), y));
      }
      const dropGeo = new THREE.LatheGeometry(dropPts, 32);
      const dropMesh = new THREE.Mesh(dropGeo, mainMat);
      group.add(dropMesh);
      const crownGroup = new THREE.Group();
      crownGroup.position.set(0.06, 0.58, 0.04);
      crownGroup.rotation.z = 0.22;
      const cBase = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.17, 0.08, 16), accentMat);
      crownGroup.add(cBase);
      for (let i = 0; i < 5; i++) {
        const ang = i / 5 * Math.PI * 2;
        const px = Math.cos(ang) * 0.17;
        const pz = Math.sin(ang) * 0.17;
        const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 10), accentMat);
        tooth.position.set(px, 0.08, pz);
        tooth.rotation.x = pz / 0.17 * 0.18;
        tooth.rotation.z = -(px / 0.17) * 0.18;
        crownGroup.add(tooth);
        const pearl = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        pearl.position.set(px * 1.08, 0.16, pz * 1.08);
        pearl.scale.setScalar(0.038);
        crownGroup.add(pearl);
      }
      crownGroup.scale.setScalar(featS);
      group.add(crownGroup);
      const ripple = new THREE.Mesh(new THREE.TorusGeometry(0.58 * featS, 0.055 * featS, 14, 36), accentMat);
      ripple.rotation.x = Math.PI / 2;
      ripple.position.set(0, -0.48, 0);
      group.add(ripple);
      [-0.62, 0.62].forEach((sx) => {
        const splash = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        splash.position.set(sx * featS, -0.32, 0.14);
        splash.scale.setScalar(0.095 * featS);
        group.add(splash);
      });
    } else if (sp === "iconBell") {
      const bPts = [
        new THREE.Vector2(0.01, -0.34),
        new THREE.Vector2(0.58, -0.36),
        new THREE.Vector2(0.44, -0.12),
        new THREE.Vector2(0.4, 0.26),
        new THREE.Vector2(0.24, 0.44),
        new THREE.Vector2(0.01, 0.46)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(bPts, 32), mainMat));
      const clapper = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      clapper.position.set(0, -0.48, 0);
      clapper.scale.setScalar(0.16 * featS);
      group.add(clapper);
      [-1, 1].forEach((dir) => {
        const bow = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        bow.position.set(dir * 0.22, 0.54, 0.04);
        bow.rotation.z = -dir * 0.35;
        bow.scale.set(0.22 * featS, 0.13 * featS, 0.12 * featS);
        group.add(bow);
      });
    } else if (sp === "iconAlarmClock") {
      const clockBody = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      clockBody.position.set(0, -0.04, 0);
      clockBody.scale.set(0.56, 0.56, 0.38);
      group.add(clockBody);
      [-1, 1].forEach((dir) => {
        const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        bell.position.set(dir * 0.42, 0.48, 0);
        bell.rotation.z = -dir * 0.58;
        bell.scale.set(0.24 * featS, 0.16 * featS, 0.22 * featS);
        group.add(bell);
        const foot = new THREE.Mesh(createCapsuleGeometry(0.075 * featS, 0.16 * featS, 14), accentMat);
        foot.position.set(dir * 0.32, -0.54, 0);
        foot.rotation.z = dir * 0.45;
        group.add(foot);
      });
      const hammer = new THREE.Mesh(createCapsuleGeometry(0.045 * featS, 0.18 * featS, 12), accentMat);
      hammer.position.set(0, 0.58, 0);
      group.add(hammer);
    } else if (sp === "iconGameboy") {
      const body = new THREE.Mesh(createRoundedRectExtrude(0.86, 1.12, 0.18, 0.32, 0.1), mainMat);
      group.add(body);
      const dpadH = new THREE.Mesh(createRoundedRectExtrude(0.26 * featS, 0.09 * featS, 0.02, 0.08, 0.02), accentMat);
      dpadH.position.set(-0.2, -0.24, 0.24);
      group.add(dpadH);
      const dpadV = new THREE.Mesh(createRoundedRectExtrude(0.09 * featS, 0.26 * featS, 0.02, 0.08, 0.02), accentMat);
      dpadV.position.set(-0.2, -0.24, 0.24);
      group.add(dpadV);
      [[0.16, -0.28], [0.28, -0.18]].forEach(([bx, by]) => {
        const btn = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        btn.position.set(bx, by, 0.24);
        btn.scale.set(0.075 * featS, 0.075 * featS, 0.05 * featS);
        group.add(btn);
      });
    } else if (sp === "iconJoystick") {
      const base = new THREE.Mesh(createRoundedRectExtrude(1.04, 0.52, 0.16, 0.44, 0.1), mainMat);
      base.position.set(0, -0.24, 0);
      group.add(base);
      const washer = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      washer.position.set(0, 0.06, 0);
      washer.scale.set(0.32, 0.12, 0.32);
      group.add(washer);
      const shaft = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.42 * featS, 16), accentMat);
      shaft.position.set(0.08, 0.3, 0.04);
      shaft.rotation.z = -0.24;
      group.add(shaft);
      const ballTop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      ballTop.position.set(0.14, 0.56, 0.06);
      ballTop.scale.setScalar(0.22 * featS);
      group.add(ballTop);
    } else if (sp === "iconSwordStone") {
      const stoneShape = new THREE.Shape();
      stoneShape.moveTo(-0.54, -0.54);
      stoneShape.lineTo(0.54, -0.54);
      stoneShape.lineTo(0.42, 0.06);
      stoneShape.lineTo(0, 0.18);
      stoneShape.lineTo(-0.42, 0.06);
      stoneShape.closePath();
      const stoneGeo = new THREE.ExtrudeGeometry(stoneShape, {
        depth: 0.32,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      stoneGeo.center();
      const stone = new THREE.Mesh(stoneGeo, mainMat);
      stone.position.y = -0.18;
      group.add(stone);
      const blade = new THREE.Mesh(createRoundedRectExtrude(0.22 * featS, 0.34 * featS, 0.04, 0.1, 0.03), accentMat);
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
    } else if (sp === "iconShipWheel") {
      const wheelRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.14, 20, 44), mainMat);
      group.add(wheelRing);
      const centerHub = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      centerHub.scale.set(0.38, 0.38, 0.28);
      group.add(centerHub);
      for (let i = 0; i < 8; i++) {
        const ang = i / 8 * Math.PI * 2;
        const spoke = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.26 * featS, 14), accentMat);
        spoke.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
        spoke.rotation.z = ang - Math.PI / 2;
        group.add(spoke);
      }
    } else if (sp === "iconSailboat") {
      const hullShape = new THREE.Shape();
      hullShape.moveTo(-0.46, -0.52);
      hullShape.lineTo(0.46, -0.52);
      hullShape.lineTo(0.64, -0.06);
      hullShape.quadraticCurveTo(0, -0.14, -0.64, -0.06);
      hullShape.closePath();
      const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      hullGeo.center();
      const hull = new THREE.Mesh(hullGeo, mainMat);
      hull.position.y = -0.26;
      group.add(hull);
      const mainSailShape = new THREE.Shape();
      mainSailShape.moveTo(-0.04, -0.02);
      mainSailShape.quadraticCurveTo(0.48, 0.02, 0.44, 0.1);
      mainSailShape.quadraticCurveTo(0.2, 0.44, -0.04, 0.64);
      mainSailShape.closePath();
      const sailGeo = new THREE.ExtrudeGeometry(mainSailShape, {
        depth: 0.14,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.06,
        bevelThickness: 0.06
      });
      const mainSail = new THREE.Mesh(sailGeo, accentMat);
      mainSail.position.set(0, -0.02, -0.07);
      mainSail.scale.setScalar(featS);
      group.add(mainSail);
      const jibShape = new THREE.Shape();
      jibShape.moveTo(-0.14, 0);
      jibShape.lineTo(-0.14, 0.52);
      jibShape.quadraticCurveTo(-0.44, 0.22, -0.52, 0.02);
      jibShape.closePath();
      const jibGeo = new THREE.ExtrudeGeometry(jibShape, {
        depth: 0.12,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.05,
        bevelThickness: 0.05
      });
      const jibSail = new THREE.Mesh(jibGeo, mainMat);
      jibSail.position.set(0, -0.02, -0.06);
      jibSail.scale.setScalar(featS);
      group.add(jibSail);
    } else if (sp === "iconHotAir") {
      const bPts = [
        new THREE.Vector2(0.01, -0.22),
        new THREE.Vector2(0.24, -0.18),
        new THREE.Vector2(0.52, 0.12),
        new THREE.Vector2(0.54, 0.36),
        new THREE.Vector2(0.36, 0.58),
        new THREE.Vector2(0.01, 0.64)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(bPts, 32), mainMat));
      const basket = new THREE.Mesh(createRoundedRectExtrude(0.32 * featS, 0.24 * featS, 0.06, 0.26, 0.05), accentMat);
      basket.position.set(0, -0.48, 0);
      group.add(basket);
      [-0.14, 0.14].forEach((rx) => {
        const rope = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.22 * featS, 10), accentMat);
        rope.position.set(rx * featS, -0.3, 0);
        group.add(rope);
      });
    } else if (sp === "iconTeapot") {
      const pot = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      pot.position.set(0, -0.08, 0);
      pot.scale.set(0.54, 0.46, 0.5);
      group.add(pot);
      const spoutCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.38, -0.14, 0),
        new THREE.Vector3(-0.62, 0.02, 0),
        new THREE.Vector3(-0.68, 0.26, 0)
      ]);
      const spout = new THREE.Mesh(new THREE.TubeGeometry(spoutCurve, 20, 0.115 * featS, 16, false), accentMat);
      group.add(spout);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.075 * featS, 16, 32, Math.PI * 1.15), accentMat);
      handle.position.set(0.44, -0.06, 0);
      handle.rotation.z = -Math.PI * 0.55;
      group.add(handle);
      const lid = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      lid.position.set(0, 0.34, 0);
      lid.scale.set(0.32 * featS, 0.1 * featS, 0.32 * featS);
      group.add(lid);
      const knob = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      knob.position.set(0, 0.48, 0);
      knob.scale.setScalar(0.11 * featS);
      group.add(knob);
    } else if (sp === "iconOmamori") {
      const oShape = new THREE.Shape();
      oShape.moveTo(-0.44, -0.54);
      oShape.lineTo(0.44, -0.54);
      oShape.lineTo(0.44, 0.16);
      oShape.lineTo(0.2, 0.44);
      oShape.lineTo(-0.2, 0.44);
      oShape.lineTo(-0.44, 0.16);
      oShape.closePath();
      const oGeo = new THREE.ExtrudeGeometry(oShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      oGeo.center();
      const pouch = new THREE.Mesh(oGeo, mainMat);
      pouch.position.y = -0.06;
      group.add(pouch);
      [-1, 1].forEach((dir) => {
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 12, 24), accentMat);
        loop.position.set(dir * 0.16, 0.42, 0.12);
        loop.rotation.z = -dir * 0.35;
        group.add(loop);
        const tassel = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.22 * featS, 12), accentMat);
        tassel.position.set(dir * 0.14, 0.2, 0.18);
        tassel.rotation.z = dir * 0.28;
        group.add(tassel);
      });
    } else if (sp === "iconLuckyCat") {
      const cShape = new THREE.Shape();
      cShape.moveTo(-0.46, -0.52);
      cShape.lineTo(0.46, -0.52);
      cShape.quadraticCurveTo(0.56, 0, 0.48, 0.56);
      cShape.lineTo(0.2, 0.32);
      cShape.quadraticCurveTo(0, 0.38, -0.2, 0.32);
      cShape.lineTo(-0.48, 0.56);
      cShape.quadraticCurveTo(-0.56, 0, -0.46, -0.52);
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      cGeo.center();
      group.add(new THREE.Mesh(cGeo, mainMat));
      const paw = new THREE.Mesh(createCapsuleGeometry(0.14 * featS, 0.28 * featS, 18), mainMat);
      paw.position.set(-0.56, 0.08, 0.1);
      paw.rotation.z = 0.25;
      group.add(paw);
      const koban = new THREE.Mesh(createRoundedRectExtrude(0.24 * featS, 0.36 * featS, 0.1, 0.08, 0.03), accentMat);
      koban.position.set(0.52, -0.1, 0.16);
      koban.rotation.z = -0.22;
      group.add(koban);
      const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      bell.position.set(0, -0.42, 0.24);
      bell.scale.setScalar(0.12 * featS);
      group.add(bell);
    } else if (sp === "iconPawPrint") {
      const padShape = new THREE.Shape();
      padShape.moveTo(0, 0.18);
      padShape.bezierCurveTo(0.46, 0.18, 0.58, -0.46, 0.24, -0.52);
      padShape.quadraticCurveTo(0, -0.42, -0.24, -0.52);
      padShape.bezierCurveTo(-0.58, -0.46, -0.46, 0.18, 0, 0.18);
      const padGeo = new THREE.ExtrudeGeometry(padShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      padGeo.center();
      const mainPad = new THREE.Mesh(padGeo, mainMat);
      mainPad.position.y = -0.16;
      group.add(mainPad);
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
    } else if (sp === "iconFox") {
      const whiteFurMat = createCloudToonMaterial("#FFFFFF", "#E2E8F0", 0.15);
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.02, 0);
      head.scale.set(0.56, 0.46, 0.46);
      group.add(head);
      const muzzle = new THREE.Mesh(SHARED_GEOS.sphere, whiteFurMat);
      muzzle.position.set(0, -0.16, 0.34);
      muzzle.scale.set(0.24, 0.16, 0.22);
      group.add(muzzle);
      const nose = new THREE.Mesh(SHARED_GEOS.sphere, new THREE.MeshBasicMaterial({ color: 988970 }));
      nose.position.set(0, -0.12, 0.48);
      nose.scale.setScalar(0.045);
      group.add(nose);
      [-1, 1].forEach((dir) => {
        const cheekFur = new THREE.Mesh(SHARED_GEOS.sphere, whiteFurMat);
        cheekFur.position.set(dir * 0.46, -0.12, 0.12);
        cheekFur.rotation.z = -dir * 0.35;
        cheekFur.scale.set(0.22, 0.14, 0.12);
        group.add(cheekFur);
      });
      [-1, 1].forEach((dir) => {
        const earGroup = new THREE.Group();
        earGroup.position.set(dir * 0.34, 0.38, 0);
        earGroup.rotation.z = -dir * 0.3;
        earGroup.rotation.y = dir * 0.15;
        const outerEar = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.46, 16), mainMat);
        earGroup.add(outerEar);
        const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.36, 14), whiteFurMat);
        innerEar.position.set(0, -0.02, 0.07);
        earGroup.add(innerEar);
        earGroup.scale.setScalar(featS);
        group.add(earGroup);
      });
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
      group.add(tailGroup);
    } else if (sp === "iconPanda") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.06, 0);
      head.scale.set(0.56, 0.5, 0.5);
      group.add(head);
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        ear.position.set(dir * 0.44, 0.38, -0.04);
        ear.scale.set(0.22 * featS, 0.22 * featS, 0.16 * featS);
        group.add(ear);
      });
      const shoot = new THREE.Mesh(createCapsuleGeometry(0.042 * featS, 0.24 * featS, 12), accentMat);
      shoot.position.set(0.04, 0.52, 0);
      shoot.rotation.z = -0.25;
      group.add(shoot);
      const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      leaf.position.set(0.18, 0.58, 0);
      leaf.rotation.z = -0.65;
      leaf.scale.set(0.18 * featS, 0.07 * featS, 0.06 * featS);
      group.add(leaf);
    } else if (sp === "iconSheep") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.06, 0);
      head.scale.set(0.5, 0.48, 0.48);
      group.add(head);
      [[-0.22, 0.38], [0, 0.44], [0.22, 0.38]].forEach(([wx, wy]) => {
        const wool = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        wool.position.set(wx, wy, 0.06);
        wool.scale.setScalar(0.22);
        group.add(wool);
      });
      [-1, 1].forEach((dir) => {
        const horn = new THREE.Mesh(new THREE.TorusGeometry(0.24 * featS, 0.095 * featS, 16, 32, Math.PI * 1.45), accentMat);
        horn.position.set(dir * 0.48, 0.08, 0);
        horn.rotation.z = dir === 1 ? -0.4 : Math.PI + 0.4;
        group.add(horn);
      });
    } else if (sp === "iconKoala") {
      const head = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      head.position.set(0, -0.08, 0.04);
      head.scale.set(0.5, 0.46, 0.46);
      group.add(head);
      [-1, 1].forEach((dir) => {
        const bigEar = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        bigEar.position.set(dir * 0.52, 0.2, -0.04);
        bigEar.scale.set(0.28 * featS, 0.28 * featS, 0.16 * featS);
        group.add(bigEar);
        const fluff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        fluff.position.set(dir * 0.52, 0.2, 0.08);
        fluff.scale.set(0.16 * featS, 0.16 * featS, 0.08 * featS);
        group.add(fluff);
      });
      const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      leaf.position.set(0, 0.46, 0.08);
      leaf.rotation.z = 0.35;
      leaf.scale.set(0.18 * featS, 0.09 * featS, 0.08 * featS);
      group.add(leaf);
    } else if (sp === "iconCrab") {
      const shell = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      shell.position.set(0, -0.06, 0);
      shell.scale.set(0.68, 0.46, 0.48);
      group.add(shell);
      [-0.2, 0.2].forEach((ox) => {
        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.22, 16), mainMat);
        stalk.position.set(ox, 0.32, 0.14);
        stalk.rotation.z = ox > 0 ? -0.15 : 0.15;
        group.add(stalk);
        const eyeGlobe = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        eyeGlobe.position.set(ox * 1.15, 0.44, 0.15);
        eyeGlobe.scale.setScalar(0.11);
        group.add(eyeGlobe);
      });
      [-1, 1].forEach((dir) => {
        const clawGroup = new THREE.Group();
        clawGroup.position.set(dir * 0.54, 0.16, 0.04);
        clawGroup.rotation.z = dir * 0.28;
        const armCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, -0.16, 0),
          new THREE.Vector3(dir * 0.18, 0.02, 0),
          new THREE.Vector3(dir * 0.16, 0.22, 0)
        ]);
        const arm = new THREE.Mesh(new THREE.TubeGeometry(armCurve, 16, 0.08, 14, false), mainMat);
        clawGroup.add(arm);
        const mainClaw = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.09, 14, 28, Math.PI * 0.8), accentMat);
        mainClaw.position.set(dir * 0.18, 0.28, 0);
        mainClaw.rotation.z = dir > 0 ? Math.PI * 0.6 : -Math.PI * 0.4;
        clawGroup.add(mainClaw);
        const subClaw = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.24, 12), accentMat);
        subClaw.position.set(dir * 0.1, 0.38, 0);
        subClaw.rotation.z = dir * 0.7;
        clawGroup.add(subClaw);
        clawGroup.scale.setScalar(featS);
        group.add(clawGroup);
      });
      [-1, 1].forEach((dir) => {
        [-0.14, -0.26].forEach((legY, lIdx) => {
          const leg = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.038, 12, 20, Math.PI * 0.5), mainMat);
          leg.position.set(dir * 0.62, legY, -0.04 * lIdx);
          leg.rotation.z = dir > 0 ? -Math.PI * 0.45 : Math.PI * 0.95;
          group.add(leg);
        });
      });
    } else if (sp === "iconStarfish") {
      const sShape = new THREE.Shape();
      const pts = 5;
      for (let i = 0; i < pts * 2; i++) {
        const r = i % 2 === 0 ? 0.64 : 0.32;
        const a = i / (pts * 2) * Math.PI * 2 + Math.PI / 2;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) sShape.moveTo(x, y);
        else sShape.quadraticCurveTo(x * 0.95, y * 0.95, x, y);
      }
      sShape.closePath();
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.11,
        bevelThickness: 0.13
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      pearl.position.set(-0.28, 0.32, 0.22);
      pearl.scale.setScalar(0.11 * featS);
      group.add(pearl);
    } else if (sp === "iconSeashell") {
      const shShape = new THREE.Shape();
      shShape.moveTo(-0.28, -0.52);
      shShape.lineTo(0.28, -0.52);
      shShape.lineTo(0.62, 0.08);
      shShape.quadraticCurveTo(0.42, 0.56, 0, 0.58);
      shShape.quadraticCurveTo(-0.42, 0.56, -0.62, 0.08);
      shShape.closePath();
      const shGeo = new THREE.ExtrudeGeometry(shShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      shGeo.center();
      group.add(new THREE.Mesh(shGeo, mainMat));
      [-0.38, 0, 0.38].forEach((rx, idx) => {
        const ridge = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        ridge.position.set(rx, idx === 1 ? 0.52 : 0.44, 0);
        ridge.scale.set(0.2, 0.14, 0.2);
        group.add(ridge);
      });
      const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      pearl.position.set(-0.36, 0.36, 0.22);
      pearl.scale.setScalar(0.13 * featS);
      group.add(pearl);
    } else if (sp === "iconOwl") {
      const oShape = new THREE.Shape();
      oShape.moveTo(-0.36, -0.52);
      oShape.quadraticCurveTo(0, -0.6, 0.36, -0.52);
      oShape.quadraticCurveTo(0.62, -0.1, 0.54, 0.56);
      oShape.lineTo(0.24, 0.38);
      oShape.quadraticCurveTo(0, 0.44, -0.24, 0.38);
      oShape.lineTo(-0.54, 0.56);
      oShape.quadraticCurveTo(-0.62, -0.1, -0.36, -0.52);
      const oGeo = new THREE.ExtrudeGeometry(oShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      oGeo.center();
      group.add(new THREE.Mesh(oGeo, mainMat));
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.11 * featS, 0.2 * featS, 4), accentMat);
      beak.rotation.z = Math.PI;
      beak.position.set(0.08, -0.16, 0.26);
      group.add(beak);
      [-0.22, 0.22].forEach((fx) => {
        const claw = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        claw.position.set(fx, -0.56, 0.12);
        claw.scale.set(0.12 * featS, 0.08 * featS, 0.12 * featS);
        group.add(claw);
      });
    } else if (sp === "iconBat") {
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
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      bGeo.center();
      group.add(new THREE.Mesh(bGeo, mainMat));
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(0, 0.48, 0.18);
      star.scale.setScalar(0.72 * featS);
      group.add(star);
    } else if (sp === "iconSwan") {
      const bodyShape = new THREE.Shape();
      bodyShape.moveTo(-0.48, -0.48);
      bodyShape.lineTo(0.42, -0.48);
      bodyShape.quadraticCurveTo(0.62, -0.12, 0.36, 0.16);
      bodyShape.quadraticCurveTo(0, 0.06, -0.58, 0.18);
      bodyShape.quadraticCurveTo(-0.66, -0.22, -0.48, -0.48);
      const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      bodyGeo.center();
      const swanBody = new THREE.Mesh(bodyGeo, mainMat);
      swanBody.position.y = -0.2;
      group.add(swanBody);
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
    } else if (sp === "iconBlossom") {
      for (let i = 0; i < 5; i++) {
        const ang = i / 5 * Math.PI * 2 + Math.PI / 2;
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
    } else if (sp === "iconMaple") {
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
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      mGeo.center();
      const leaf = new THREE.Mesh(mGeo, mainMat);
      leaf.position.y = 0.06;
      group.add(leaf);
      const stem = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.28 * featS, 14), accentMat);
      stem.position.set(0.06, -0.5, 0);
      stem.rotation.z = 0.22;
      group.add(stem);
    } else if (sp === "iconGinkgo") {
      const gShape = new THREE.Shape();
      gShape.moveTo(0, -0.44);
      gShape.quadraticCurveTo(0.58, -0.14, 0.64, 0.32);
      gShape.quadraticCurveTo(0.36, 0.58, 0.08, 0.34);
      gShape.lineTo(0, 0.22);
      gShape.lineTo(-0.08, 0.34);
      gShape.quadraticCurveTo(-0.36, 0.58, -0.64, 0.32);
      gShape.quadraticCurveTo(-0.58, -0.14, 0, -0.44);
      const gGeo = new THREE.ExtrudeGeometry(gShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      gGeo.center();
      const leaf = new THREE.Mesh(gGeo, mainMat);
      leaf.position.y = 0.08;
      group.add(leaf);
      const petiole = new THREE.Mesh(createCapsuleGeometry(0.062 * featS, 0.32 * featS, 14), accentMat);
      petiole.position.set(0.08, -0.48, 0);
      petiole.rotation.z = 0.28;
      group.add(petiole);
    } else if (sp === "iconBamboo") {
      const stalk = new THREE.Mesh(createCapsuleGeometry(0.34, 0.72, 28), mainMat);
      group.add(stalk);
      [-0.28, 0.28].forEach((jy) => {
        const joint = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.058, 16, 36), mainMat);
        joint.rotation.x = Math.PI / 2;
        joint.position.set(0, jy, 0);
        group.add(joint);
      });
      [[0.46, 0.36, -0.65], [0.52, 0.16, -1.05]].forEach(([lx, ly, rot]) => {
        const leaf = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        leaf.position.set(lx, ly, 0);
        leaf.rotation.z = rot;
        leaf.scale.set(0.1 * featS, 0.26 * featS, 0.07 * featS);
        group.add(leaf);
      });
    } else if (sp === "iconWave") {
      const wShape = new THREE.Shape();
      wShape.moveTo(-0.62, -0.48);
      wShape.lineTo(0.58, -0.48);
      wShape.quadraticCurveTo(0.68, -0.06, 0.24, 0.02);
      wShape.bezierCurveTo(-0.14, 0.08, -0.12, 0.42, 0.26, 0.38);
      wShape.quadraticCurveTo(0.08, 0.64, -0.34, 0.52);
      wShape.bezierCurveTo(-0.68, 0.38, -0.72, -0.14, -0.62, -0.48);
      const wGeo = new THREE.ExtrudeGeometry(wShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      wGeo.center();
      group.add(new THREE.Mesh(wGeo, mainMat));
      [[0.38, 0.46, 0.11], [0.54, 0.3, 0.08], [0.22, 0.6, 0.07]].forEach(([fx, fy, r]) => {
        const foam = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        foam.position.set(fx, fy, 0.12);
        foam.scale.setScalar(r * featS);
        group.add(foam);
      });
    } else if (sp === "iconMountain") {
      const mtShape = new THREE.Shape();
      mtShape.moveTo(-0.66, -0.48);
      mtShape.lineTo(0.66, -0.48);
      mtShape.lineTo(0.32, 0.22);
      mtShape.lineTo(0.12, -0.02);
      mtShape.lineTo(-0.18, 0.56);
      mtShape.closePath();
      const mtGeo = new THREE.ExtrudeGeometry(mtShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      mtGeo.center();
      group.add(new THREE.Mesh(mtGeo, mainMat));
      const sun = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      sun.position.set(0.36, 0.38, -0.08);
      sun.scale.set(0.26 * featS, 0.26 * featS, 0.16 * featS);
      group.add(sun);
    } else if (sp === "iconSun") {
      const core = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      core.scale.set(0.48, 0.48, 0.38);
      group.add(core);
      for (let i = 0; i < 8; i++) {
        const ang = i / 8 * Math.PI * 2;
        const ray = new THREE.Mesh(new THREE.ConeGeometry(0.13 * featS, 0.26 * featS, 4), accentMat);
        ray.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
        ray.rotation.z = ang - Math.PI / 2;
        group.add(ray);
      }
    } else if (sp === "iconSnowflake") {
      for (let i = 0; i < 3; i++) {
        const bar = new THREE.Mesh(createCapsuleGeometry(0.14, 0.92, 20), mainMat);
        bar.rotation.z = i * Math.PI / 3;
        group.add(bar);
      }
      const center = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      center.scale.set(0.42, 0.42, 0.32);
      group.add(center);
      for (let i = 0; i < 6; i++) {
        const ang = i / 6 * Math.PI * 2 + Math.PI / 6;
        const tip = new THREE.Mesh(new THREE.OctahedronGeometry(0.11 * featS, 0), accentMat);
        tip.position.set(Math.cos(ang) * 0.58, Math.sin(ang) * 0.58, 0);
        group.add(tip);
      }
    } else if (sp === "iconCampfire") {
      const fShape = new THREE.Shape();
      fShape.moveTo(0, -0.36);
      fShape.bezierCurveTo(0.56, -0.36, 0.62, 0.14, 0.36, 0.38);
      fShape.quadraticCurveTo(0.18, 0.18, 0, 0.64);
      fShape.quadraticCurveTo(-0.18, 0.18, -0.36, 0.38);
      fShape.bezierCurveTo(-0.62, 0.14, -0.56, -0.36, 0, -0.36);
      const fGeo = new THREE.ExtrudeGeometry(fShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      fGeo.center();
      const flame = new THREE.Mesh(fGeo, mainMat);
      flame.position.y = 0.08;
      group.add(flame);
      [-1, 1].forEach((dir) => {
        const log = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.72 * featS, 16), accentMat);
        log.position.set(0, -0.44, dir * 0.04);
        log.rotation.z = Math.PI / 2 + dir * 0.28;
        group.add(log);
      });
    } else if (sp === "iconUkulele") {
      const uShape = new THREE.Shape();
      uShape.moveTo(0, -0.58);
      uShape.bezierCurveTo(0.58, -0.58, 0.58, -0.08, 0.3, 0.04);
      uShape.bezierCurveTo(0.48, 0.16, 0.44, 0.48, 0, 0.48);
      uShape.bezierCurveTo(-0.44, 0.48, -0.48, 0.16, -0.3, 0.04);
      uShape.bezierCurveTo(-0.58, -0.08, -0.58, -0.58, 0, -0.58);
      const uGeo = new THREE.ExtrudeGeometry(uShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      uGeo.center();
      const body = new THREE.Mesh(uGeo, mainMat);
      body.position.y = -0.1;
      group.add(body);
      const neck = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.44 * featS, 16), accentMat);
      neck.position.set(0, 0.48, 0);
      group.add(neck);
      const holeRing = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.042 * featS, 14, 28), accentMat);
      holeRing.position.set(0, 0.12, 0.2);
      group.add(holeRing);
    } else if (sp === "iconTrumpet") {
      const body = new THREE.Mesh(createRoundedRectExtrude(0.82, 0.52, 0.22, 0.28, 0.1), mainMat);
      body.position.set(-0.08, -0.06, 0);
      group.add(body);
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.48, 24), mainMat);
      bell.rotation.z = Math.PI / 2;
      bell.position.set(0.42, -0.06, 0);
      group.add(bell);
      [-0.28, -0.08, 0.12].forEach((vx) => {
        const valve = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, 0.24 * featS, 14), accentMat);
        valve.position.set(vx, 0.32, 0);
        group.add(valve);
      });
    } else if (sp === "iconMask") {
      const mShape = new THREE.Shape();
      mShape.moveTo(0, -0.34);
      mShape.quadraticCurveTo(0.32, -0.14, 0.64, -0.22);
      mShape.quadraticCurveTo(0.72, 0.26, 0.48, 0.48);
      mShape.quadraticCurveTo(0.18, 0.34, 0, 0.22);
      mShape.quadraticCurveTo(-0.18, 0.34, -0.48, 0.48);
      mShape.quadraticCurveTo(-0.72, 0.26, -0.64, -0.22);
      mShape.quadraticCurveTo(-0.32, -0.14, 0, -0.34);
      const mGeo = new THREE.ExtrudeGeometry(mShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      mGeo.center();
      group.add(new THREE.Mesh(mGeo, mainMat));
      const plume1 = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      plume1.position.set(-0.44, 0.48, 0.06);
      plume1.rotation.z = 0.55;
      plume1.scale.set(0.12 * featS, 0.28 * featS, 0.08 * featS);
      group.add(plume1);
    } else if (sp === "iconScepter") {
      const orb = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      orb.position.set(0, 0.1, 0);
      orb.scale.setScalar(0.46);
      group.add(orb);
      const staff = new THREE.Mesh(createCapsuleGeometry(0.11 * featS, 0.46 * featS, 18), accentMat);
      staff.position.set(0, -0.38, 0);
      group.add(staff);
      [-1, 1].forEach((dir) => {
        const wing = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        wing.position.set(dir * 0.54, 0.22, 0);
        wing.rotation.z = -dir * 0.45;
        wing.scale.set(0.26 * featS, 0.14 * featS, 0.1 * featS);
        group.add(wing);
      });
      const topStar = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      topStar.position.set(0, 0.64, 0);
      topStar.scale.setScalar(0.75 * featS);
      group.add(topStar);
    } else if (sp === "iconCrystalBall") {
      const ball = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      ball.position.set(0, 0.08, 0);
      ball.scale.setScalar(0.5);
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
    } else if (sp === "iconChest") {
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
    } else if (sp === "iconAxe") {
      const aShape = new THREE.Shape();
      aShape.moveTo(-0.56, 0.46);
      aShape.quadraticCurveTo(0, 0.14, 0.56, 0.46);
      aShape.quadraticCurveTo(0.72, 0, 0.56, -0.46);
      aShape.quadraticCurveTo(0, -0.14, -0.56, -0.46);
      aShape.quadraticCurveTo(-0.72, 0, -0.56, 0.46);
      const aGeo = new THREE.ExtrudeGeometry(aShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      aGeo.center();
      const blade = new THREE.Mesh(aGeo, mainMat);
      blade.position.y = 0.06;
      group.add(blade);
      const haft = new THREE.Mesh(createCapsuleGeometry(0.1 * featS, 1.12 * featS, 18), accentMat);
      haft.position.set(0, -0.04, -0.02);
      group.add(haft);
    } else if (sp === "iconBomb") {
      const sphere = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      sphere.position.set(0, -0.08, 0);
      sphere.scale.setScalar(0.52);
      group.add(sphere);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.16, 24), mainMat);
      cap.position.set(0, 0.4, 0);
      group.add(cap);
      const fuseCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.46, 0),
        new THREE.Vector3(0.16, 0.62, 0),
        new THREE.Vector3(0.34, 0.56, 0.06)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(fuseCurve, 18, 0.048 * featS, 12, false), accentMat));
      const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      spark.position.set(0.42, 0.56, 0.1);
      spark.scale.setScalar(0.88 * featS);
      group.add(spark);
    } else if (sp === "iconCrane") {
      const cShape = new THREE.Shape();
      cShape.moveTo(0, -0.46);
      cShape.lineTo(0.66, 0.26);
      cShape.lineTo(0.18, 0.16);
      cShape.lineTo(0, 0.58);
      cShape.lineTo(-0.18, 0.16);
      cShape.lineTo(-0.66, 0.26);
      cShape.closePath();
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      cGeo.center();
      group.add(new THREE.Mesh(cGeo, mainMat));
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.28 * featS, 4), accentMat);
      beak.position.set(0.16, 0.52, 0.06);
      beak.rotation.z = -1.15;
      group.add(beak);
    } else if (sp === "iconSpade") {
      const sShape = new THREE.Shape();
      sShape.moveTo(0, 0.56);
      sShape.bezierCurveTo(0.62, 0.06, 0.64, -0.44, 0.16, -0.34);
      sShape.lineTo(0.26, -0.58);
      sShape.lineTo(-0.26, -0.58);
      sShape.lineTo(-0.16, -0.34);
      sShape.bezierCurveTo(-0.64, -0.44, -0.62, 0.06, 0, 0.56);
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.11
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      const crown = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      crown.position.set(-0.38, 0.42, 0.2);
      crown.scale.setScalar(0.82 * featS);
      group.add(crown);
    } else if (sp === "iconInfinity") {
      [-0.3, 0.3].forEach((lx) => {
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.16, 20, 36), mainMat);
        loop.position.set(lx, 0, 0);
        group.add(loop);
      });
      const bridge = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      bridge.scale.set(0.38, 0.32, 0.26);
      group.add(bridge);
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(0.46, 0.38, 0.2);
      star.scale.setScalar(0.85 * featS);
      group.add(star);
    } else if (sp === "iconLantern") {
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
    } else if (sp === "iconDaruma") {
      const dPts = [
        new THREE.Vector2(0.01, -0.54),
        new THREE.Vector2(0.48, -0.5),
        new THREE.Vector2(0.56, -0.14),
        new THREE.Vector2(0.48, 0.34),
        new THREE.Vector2(0.28, 0.54),
        new THREE.Vector2(0.01, 0.58)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(dPts, 32), mainMat));
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
    } else if (sp === "iconKoi") {
      const kShape = new THREE.Shape();
      kShape.moveTo(-0.56, 0.34);
      kShape.quadraticCurveTo(0.12, 0.44, 0.64, 0.32);
      kShape.lineTo(0.42, 0);
      kShape.lineTo(0.64, -0.32);
      kShape.quadraticCurveTo(0.12, -0.44, -0.56, -0.34);
      kShape.closePath();
      const kGeo = new THREE.ExtrudeGeometry(kShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      kGeo.center();
      group.add(new THREE.Mesh(kGeo, mainMat));
      const mouthRing = new THREE.Mesh(new THREE.TorusGeometry(0.32 * featS, 0.068 * featS, 16, 32), accentMat);
      mouthRing.rotation.y = Math.PI / 2;
      mouthRing.position.set(-0.58, 0, 0);
      group.add(mouthRing);
    } else if (sp === "iconStamp") {
      const stamp = new THREE.Mesh(createRoundedRectExtrude(0.96, 1.06, 0.12, 0.24, 0.08), mainMat);
      group.add(stamp);
      [-0.32, 0, 0.32].forEach((pos) => {
        const topTooth = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        topTooth.position.set(pos, 0.56, 0);
        topTooth.scale.setScalar(0.1);
        group.add(topTooth);
        const sideTooth = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        sideTooth.position.set(0.52, pos, 0);
        sideTooth.scale.setScalar(0.1);
        group.add(sideTooth);
      });
      const postmark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      postmark.position.set(-0.28, 0.32, 0.2);
      postmark.scale.setScalar(0.82 * featS);
      group.add(postmark);
    } else if (sp === "iconMedal") {
      const disc = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      disc.position.set(0, -0.18, 0);
      disc.scale.set(0.5, 0.5, 0.34);
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
    } else if (sp === "iconMagnifier") {
      const lens = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      lens.position.set(-0.08, 0.08, 0);
      lens.scale.set(0.48, 0.48, 0.3);
      group.add(lens);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.1, 18, 40), mainMat);
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
    } else if (sp === "iconRoyalKey") {
      const bow = new THREE.Mesh(createRoundedRectExtrude(0.84, 0.64, 0.26, 0.26, 0.1), mainMat);
      bow.position.set(0, 0.18, 0);
      group.add(bow);
      const shaft = new THREE.Mesh(createCapsuleGeometry(0.13, 0.56, 18), mainMat);
      shaft.position.set(-0.06, -0.3, 0);
      group.add(shaft);
      [-0.32, -0.5].forEach((ty, idx) => {
        const tooth = new THREE.Mesh(createCapsuleGeometry(0.068 * featS, (idx === 0 ? 0.24 : 0.32) * featS, 14), accentMat);
        tooth.rotation.z = Math.PI / 2;
        tooth.position.set(0.14, ty, 0);
        group.add(tooth);
      });
      const topCrown = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      topCrown.position.set(0, 0.58, 0.14);
      topCrown.scale.setScalar(0.78 * featS);
      group.add(topCrown);
    } else if (sp === "iconMagicBroom") {
      const bShape = new THREE.Shape();
      bShape.moveTo(-0.54, -0.52);
      bShape.quadraticCurveTo(-0.2, -0.38, 0, -0.54);
      bShape.quadraticCurveTo(0.2, -0.38, 0.54, -0.52);
      bShape.quadraticCurveTo(0.58, -0.06, 0.24, 0.14);
      bShape.lineTo(-0.24, 0.14);
      bShape.quadraticCurveTo(-0.58, -0.06, -0.54, -0.52);
      const bGeo = new THREE.ExtrudeGeometry(bShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      bGeo.center();
      const brush = new THREE.Mesh(bGeo, mainMat);
      brush.position.y = -0.2;
      group.add(brush);
      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.26 * featS, 0.068 * featS, 16, 32), accentMat);
      collar.rotation.x = Math.PI / 2;
      collar.position.set(0, 0.1, 0);
      group.add(collar);
      const stick = new THREE.Mesh(createCapsuleGeometry(0.088 * featS, 0.54 * featS, 16), accentMat);
      stick.position.set(0.06, 0.42, 0);
      stick.rotation.z = -0.16;
      group.add(stick);
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(-0.36, 0.38, 0.18);
      star.scale.setScalar(0.82 * featS);
      group.add(star);
    } else if (sp === "iconWindChime") {
      const domePts = [
        new THREE.Vector2(0.01, -0.08),
        new THREE.Vector2(0.52, -0.1),
        new THREE.Vector2(0.5, 0.24),
        new THREE.Vector2(0.32, 0.48),
        new THREE.Vector2(0.01, 0.52)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(domePts, 32), mainMat));
      const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.12 * featS, 0.045 * featS, 12, 24), accentMat);
      topRing.position.set(0, 0.6, 0);
      group.add(topRing);
      const cord = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.24 * featS, 10), accentMat);
      cord.position.set(0, -0.2, 0);
      group.add(cord);
      const strip = new THREE.Mesh(createRoundedRectExtrude(0.28 * featS, 0.44 * featS, 0.05, 0.06, 0.03), accentMat);
      strip.position.set(0.06, -0.44, 0.04);
      strip.rotation.z = 0.22;
      group.add(strip);
    } else if (sp === "iconDiamondKite") {
      const kShape = new THREE.Shape();
      kShape.moveTo(0, 0.62);
      kShape.lineTo(0.56, 0.12);
      kShape.lineTo(0, -0.44);
      kShape.lineTo(-0.56, 0.12);
      kShape.closePath();
      const kGeo = new THREE.ExtrudeGeometry(kShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      kGeo.center();
      const kite = new THREE.Mesh(kGeo, mainMat);
      kite.position.y = 0.08;
      group.add(kite);
      [-0.58, 0.58].forEach((kx) => {
        const tassel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        tassel.position.set(kx * featS, 0.16, 0);
        tassel.scale.setScalar(0.11 * featS);
        group.add(tassel);
      });
      const tailCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.34, 0),
        new THREE.Vector3(0.18, -0.5, 0),
        new THREE.Vector3(-0.08, -0.66, 0.04)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 20, 0.055 * featS, 12, false), accentMat));
    } else if (sp === "iconHeartPotion") {
      const hShape = new THREE.Shape();
      hShape.moveTo(0, -0.58);
      hShape.bezierCurveTo(0.62, -0.18, 0.68, 0.36, 0.28, 0.42);
      hShape.bezierCurveTo(0.12, 0.44, 0, 0.28, 0, 0.2);
      hShape.bezierCurveTo(0, 0.28, -0.12, 0.44, -0.28, 0.42);
      hShape.bezierCurveTo(-0.68, 0.36, -0.62, -0.18, 0, -0.58);
      const hGeo = new THREE.ExtrudeGeometry(hShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      hGeo.center();
      const body = new THREE.Mesh(hGeo, mainMat);
      body.position.y = -0.08;
      group.add(body);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.22, 20), mainMat);
      neck.position.set(0, 0.4, 0);
      group.add(neck);
      const lip = new THREE.Mesh(new THREE.TorusGeometry(0.19 * featS, 0.052 * featS, 14, 28), accentMat);
      lip.rotation.x = Math.PI / 2;
      lip.position.set(0, 0.5, 0);
      group.add(lip);
      const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * featS, 0.12 * featS, 0.18 * featS, 18), accentMat);
      cork.position.set(0, 0.6, 0);
      group.add(cork);
    } else if (sp === "iconGoldenTicket") {
      const tShape = new THREE.Shape();
      tShape.moveTo(-0.62, -0.4);
      tShape.lineTo(0.62, -0.4);
      tShape.lineTo(0.62, -0.16);
      tShape.absarc(0.62, 0, 0.16, -Math.PI / 2, Math.PI / 2, true);
      tShape.lineTo(0.62, 0.4);
      tShape.lineTo(-0.62, 0.4);
      tShape.lineTo(-0.62, 0.16);
      tShape.absarc(-0.62, 0, 0.16, Math.PI / 2, -Math.PI / 2, true);
      tShape.closePath();
      const tGeo = new THREE.ExtrudeGeometry(tShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      tGeo.center();
      const ticket = new THREE.Mesh(tGeo, mainMat);
      ticket.rotation.z = 0.12;
      group.add(ticket);
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(-0.34, 0.22, 0.2);
      star.scale.setScalar(0.78 * featS);
      group.add(star);
    } else if (sp === "iconSheriffStar") {
      const sShape = new THREE.Shape();
      const pts = 6;
      for (let i = 0; i < pts * 2; i++) {
        const r = i % 2 === 0 ? 0.58 : 0.32;
        const a = i / (pts * 2) * Math.PI * 2 + Math.PI / 2;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) sShape.moveTo(x, y);
        else sShape.lineTo(x, y);
      }
      sShape.closePath();
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.11
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      for (let i = 0; i < 6; i++) {
        const a = i / 6 * Math.PI * 2 + Math.PI / 2;
        const ball = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        ball.position.set(Math.cos(a) * 0.62, Math.sin(a) * 0.62, 0);
        ball.scale.setScalar(0.1 * featS);
        group.add(ball);
      }
    } else if (sp === "iconVikingHelm") {
      const dome = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      dome.position.set(0, -0.1, 0);
      dome.scale.set(0.54, 0.5, 0.5);
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
    } else if (sp === "iconBowArrow") {
      const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.14, 18, 36, Math.PI * 1.15), mainMat);
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
    } else if (sp === "iconTrident") {
      const tShape = new THREE.Shape();
      tShape.moveTo(-0.36, -0.44);
      tShape.lineTo(0.36, -0.44);
      tShape.quadraticCurveTo(0.58, -0.22, 0.56, 0.42);
      tShape.lineTo(0.42, 0.56);
      tShape.lineTo(0.3, 0.12);
      tShape.lineTo(0.14, 0.12);
      tShape.lineTo(0.14, 0.48);
      tShape.lineTo(0, 0.66);
      tShape.lineTo(-0.14, 0.48);
      tShape.lineTo(-0.14, 0.12);
      tShape.lineTo(-0.3, 0.12);
      tShape.lineTo(-0.42, 0.56);
      tShape.lineTo(-0.56, 0.42);
      tShape.quadraticCurveTo(-0.58, -0.22, -0.36, -0.44);
      const tGeo = new THREE.ExtrudeGeometry(tShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      tGeo.center();
      group.add(new THREE.Mesh(tGeo, mainMat));
      const collar = new THREE.Mesh(createRoundedRectExtrude(0.48 * featS, 0.16 * featS, 0.06, 0.28, 0.05), accentMat);
      collar.position.set(0, -0.52, 0);
      group.add(collar);
    } else if (sp === "iconShuriken") {
      const shShape = new THREE.Shape();
      const pts = 4;
      for (let i = 0; i < pts * 2; i++) {
        const r = i % 2 === 0 ? 0.66 : 0.26;
        const a = i / (pts * 2) * Math.PI * 2 + (i % 2 === 0 ? 0.15 : 0);
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) shShape.moveTo(x, y);
        else shShape.lineTo(x, y);
      }
      shShape.closePath();
      const shGeo = new THREE.ExtrudeGeometry(shShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      shGeo.center();
      group.add(new THREE.Mesh(shGeo, mainMat));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.052 * featS, 14, 32), accentMat);
      ring.position.set(0, 0, 0.16);
      group.add(ring);
    } else if (sp === "iconClubSuit") {
      [[0, 0.3], [-0.32, -0.06], [0.32, -0.06]].forEach(([cx, cy]) => {
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
      star.position.set(-0.38, 0.44, 0.2);
      star.scale.setScalar(0.78 * featS);
      group.add(star);
    } else if (sp === "iconTetrisT") {
      const blockGeo = createRoundedRectExtrude(0.44, 0.44, 0.1, 0.28, 0.08);
      [[-0.38, -0.18], [0, -0.18], [0.38, -0.18]].forEach(([bx, by]) => {
        const b = new THREE.Mesh(blockGeo, mainMat);
        b.position.set(bx, by, 0);
        group.add(b);
      });
      const topBlock = new THREE.Mesh(blockGeo, accentMat);
      topBlock.position.set(0, 0.26, 0);
      topBlock.scale.setScalar(featS);
      group.add(topBlock);
    } else if (sp === "iconSkateboard") {
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
    } else if (sp === "iconRollerSkate") {
      const bShape = new THREE.Shape();
      bShape.moveTo(-0.48, -0.26);
      bShape.lineTo(0.52, -0.26);
      bShape.quadraticCurveTo(0.62, -0.02, 0.34, 0.08);
      bShape.lineTo(0.08, 0.16);
      bShape.lineTo(0.04, 0.54);
      bShape.lineTo(-0.44, 0.54);
      bShape.closePath();
      const bGeo = new THREE.ExtrudeGeometry(bShape, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      bGeo.center();
      const boot = new THREE.Mesh(bGeo, mainMat);
      boot.position.y = 0.08;
      group.add(boot);
      [-0.36, -0.1, 0.18, 0.44].forEach((wx) => {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * featS, 0.13 * featS, 0.28 * featS, 18), accentMat);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(wx, -0.44, 0);
        group.add(wheel);
      });
    } else if (sp === "iconElfBoot") {
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
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      eGeo.center();
      group.add(new THREE.Mesh(eGeo, mainMat));
      const cuff = new THREE.Mesh(createRoundedRectExtrude(0.62 * featS, 0.22 * featS, 0.08, 0.32, 0.06), accentMat);
      cuff.position.set(-0.22, 0.44, 0);
      group.add(cuff);
      const bell = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      bell.position.set(0.56, 0.14, 0);
      bell.scale.setScalar(0.13 * featS);
      group.add(bell);
    } else if (sp === "iconMitten") {
      const palm = new THREE.Mesh(createCapsuleGeometry(0.42, 0.42, 28), mainMat);
      palm.position.set(0.06, 0.08, 0);
      group.add(palm);
      const thumb = new THREE.Mesh(createCapsuleGeometry(0.17, 0.3, 18), mainMat);
      thumb.position.set(-0.42, 0.02, 0);
      thumb.rotation.z = 0.68;
      group.add(thumb);
      const cuff = new THREE.Mesh(createRoundedRectExtrude(0.76 * featS, 0.24 * featS, 0.08, 0.38, 0.08), accentMat);
      cuff.position.set(0.06, -0.44, 0);
      group.add(cuff);
    } else if (sp === "iconTopHat") {
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
      [-1, 1].forEach((dir) => {
        const ear = new THREE.Mesh(createCapsuleGeometry(0.095 * featS, 0.28 * featS, 16), accentMat);
        ear.position.set(dir * 0.18, 0.54, 0);
        ear.rotation.z = -dir * 0.24;
        group.add(ear);
      });
    } else if (sp === "iconDiamondRing") {
      const dShape = new THREE.Shape();
      dShape.moveTo(0, -0.1);
      dShape.lineTo(0.48, 0.3);
      dShape.lineTo(0.28, 0.56);
      dShape.lineTo(-0.28, 0.56);
      dShape.lineTo(-0.48, 0.3);
      dShape.closePath();
      const dGeo = new THREE.ExtrudeGeometry(dShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      dGeo.center();
      const gem = new THREE.Mesh(dGeo, mainMat);
      gem.position.y = 0.24;
      group.add(gem);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.34 * featS, 0.105 * featS, 18, 36), accentMat);
      band.position.set(0, -0.26, 0);
      group.add(band);
    } else if (sp === "iconDutchWindmill") {
      const towerPts = [
        new THREE.Vector2(0.01, -0.56),
        new THREE.Vector2(0.46, -0.54),
        new THREE.Vector2(0.32, 0.2),
        new THREE.Vector2(0.01, 0.26)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(towerPts, 28), mainMat));
      for (let i = 0; i < 4; i++) {
        const ang = i / 4 * Math.PI * 2 + Math.PI / 4;
        const blade = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.48 * featS, 0.04, 0.08, 0.03), accentMat);
        blade.position.set(Math.cos(ang) * 0.32, 0.22 + Math.sin(ang) * 0.32, 0.26);
        blade.rotation.z = ang - Math.PI / 2;
        group.add(blade);
      }
    } else if (sp === "iconSubmarine") {
      const hull = new THREE.Mesh(createCapsuleGeometry(0.38, 0.52, 28), mainMat);
      hull.rotation.z = Math.PI / 2;
      hull.position.set(0.04, -0.1, 0);
      group.add(hull);
      const tower = new THREE.Mesh(createCapsuleGeometry(0.18, 0.24, 20), mainMat);
      tower.position.set(0.08, 0.28, 0);
      group.add(tower);
      const scope = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.22 * featS, 12), accentMat);
      scope.position.set(0.12, 0.52, 0);
      group.add(scope);
      [-1, 1].forEach((dir) => {
        const prop = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        prop.position.set(-0.62, -0.1 + dir * 0.16, 0);
        prop.scale.set(0.08 * featS, 0.16 * featS, 0.08 * featS);
        group.add(prop);
      });
    } else if (sp === "iconTrainEngine") {
      const body = new THREE.Mesh(createRoundedRectExtrude(0.96, 0.68, 0.2, 0.36, 0.1), mainMat);
      body.position.set(0, -0.08, 0);
      group.add(body);
      const stack = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.36, 20), mainMat);
      stack.rotation.z = Math.PI;
      stack.position.set(0.18, 0.38, 0);
      group.add(stack);
      const puff = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      puff.position.set(-0.08, 0.58, 0);
      puff.scale.set(0.2 * featS, 0.15 * featS, 0.16 * featS);
      group.add(puff);
      [-0.28, 0.28].forEach((wx) => {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * featS, 0.18 * featS, 0.42 * featS, 20), accentMat);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(wx, -0.44, 0);
        group.add(wheel);
      });
    } else if (sp === "iconBeetleCar") {
      const cShape = new THREE.Shape();
      cShape.moveTo(-0.64, -0.34);
      cShape.lineTo(0.64, -0.34);
      cShape.quadraticCurveTo(0.7, 0.02, 0.44, 0.06);
      cShape.bezierCurveTo(0.32, 0.48, -0.32, 0.48, -0.44, 0.06);
      cShape.quadraticCurveTo(-0.7, 0.02, -0.64, -0.34);
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.32,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.1,
        bevelThickness: 0.12
      });
      cGeo.center();
      const car = new THREE.Mesh(cGeo, mainMat);
      car.position.y = 0.02;
      group.add(car);
      [-0.36, 0.36].forEach((wx) => {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * featS, 0.2 * featS, 0.4 * featS, 22), accentMat);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(wx, -0.38, 0);
        group.add(wheel);
      });
      const roofLight = new THREE.Mesh(createCapsuleGeometry(0.08 * featS, 0.24 * featS, 14), accentMat);
      roofLight.rotation.z = Math.PI / 2;
      roofLight.position.set(0, 0.44, 0);
      group.add(roofLight);
    } else if (sp === "iconHelicopter") {
      const cabin = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      cabin.position.set(0.1, -0.06, 0);
      cabin.scale.set(0.52, 0.44, 0.46);
      group.add(cabin);
      const tailBoom = new THREE.Mesh(createCapsuleGeometry(0.12, 0.46, 16), mainMat);
      tailBoom.position.set(-0.42, 0.02, 0);
      tailBoom.rotation.z = 1.25;
      group.add(tailBoom);
      const tailFin = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      tailFin.position.set(-0.64, 0.14, 0);
      tailFin.scale.set(0.1 * featS, 0.2 * featS, 0.08 * featS);
      group.add(tailFin);
      const rotor = new THREE.Mesh(createRoundedRectExtrude(1.08 * featS, 0.16 * featS, 0.06, 0.06, 0.03), accentMat);
      rotor.rotation.x = Math.PI / 2;
      rotor.rotation.z = 0.28;
      rotor.position.set(0.1, 0.48, 0);
      group.add(rotor);
      const skid = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.72 * featS, 14), accentMat);
      skid.rotation.z = Math.PI / 2;
      skid.position.set(0.1, -0.52, 0.16);
      group.add(skid);
    } else if (sp === "iconFrogPrince") {
      const face = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      face.position.set(0, -0.14, 0);
      face.scale.set(0.62, 0.42, 0.48);
      group.add(face);
      [-0.3, 0.3].forEach((ex) => {
        const eyeBump = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        eyeBump.position.set(ex, 0.24, 0.06);
        eyeBump.scale.set(0.26, 0.26, 0.24);
        group.add(eyeBump);
      });
      const crown = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.24 * featS, 5), accentMat);
      crown.position.set(0, 0.46, 0.06);
      group.add(crown);
    } else if (sp === "iconSeahorse") {
      const sShape = new THREE.Shape();
      sShape.moveTo(0.08, -0.58);
      sShape.bezierCurveTo(-0.36, -0.58, -0.42, -0.14, -0.22, 0.2);
      sShape.bezierCurveTo(-0.18, 0.56, 0.26, 0.64, 0.34, 0.36);
      sShape.lineTo(0.58, 0.3);
      sShape.lineTo(0.56, 0.18);
      sShape.lineTo(0.28, 0.18);
      sShape.bezierCurveTo(0.46, -0.06, 0.38, -0.36, 0.12, -0.38);
      sShape.quadraticCurveTo(0.26, -0.48, 0.08, -0.58);
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      [0.24, 0, -0.24].forEach((fy, idx) => {
        const fin = new THREE.Mesh(new THREE.ConeGeometry(0.12 * featS, 0.24 * featS, 4), accentMat);
        fin.position.set(-0.44, fy, 0);
        fin.rotation.z = Math.PI / 2 + (idx - 1) * 0.2;
        group.add(fin);
      });
    } else if (sp === "iconSquirrel") {
      const body = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      body.position.set(0.16, -0.12, 0.06);
      body.scale.set(0.44, 0.48, 0.42);
      group.add(body);
      [-0.02, 0.34].forEach((ex) => {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.24, 12), mainMat);
        ear.position.set(ex, 0.34, 0.06);
        group.add(ear);
      });
      const tailCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.08, -0.34, -0.06),
        new THREE.Vector3(-0.48, -0.1, -0.06),
        new THREE.Vector3(-0.46, 0.36, -0.02),
        new THREE.Vector3(-0.22, 0.52, 0.02)
      ]);
      const bigTail = new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 24, 0.21 * featS, 18, false), accentMat);
      group.add(bigTail);
      const tailTip = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      tailTip.position.set(-0.22, 0.52, 0.02);
      tailTip.scale.setScalar(0.21 * featS);
      group.add(tailTip);
    } else if (sp === "iconHarp") {
      const hShape = new THREE.Shape();
      hShape.moveTo(-0.44, -0.54);
      hShape.lineTo(0.38, -0.54);
      hShape.quadraticCurveTo(0.62, 0.06, 0.48, 0.56);
      hShape.quadraticCurveTo(0.12, 0.36, -0.22, 0.48);
      hShape.lineTo(-0.44, 0.48);
      hShape.closePath();
      const hGeo = new THREE.ExtrudeGeometry(hShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.1
      });
      hGeo.center();
      group.add(new THREE.Mesh(hGeo, mainMat));
      [-0.18, 0, 0.18].forEach((sx) => {
        const str = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.42 * featS, 10), accentMat);
        str.position.set(sx, 0.18, 0.18);
        group.add(str);
      });
    } else if (sp === "iconCassette") {
      const body = new THREE.Mesh(createRoundedRectExtrude(1.12, 0.76, 0.16, 0.28, 0.09), mainMat);
      body.position.set(0, 0.02, 0);
      group.add(body);
      const lip = new THREE.Mesh(createRoundedRectExtrude(0.68, 0.22, 0.06, 0.32, 0.06), mainMat);
      lip.position.set(0, -0.34, 0.02);
      group.add(lip);
      [-0.28, 0.28].forEach((rx) => {
        const reel = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 14, 28), accentMat);
        reel.position.set(rx, 0.16, 0.2);
        group.add(reel);
      });
    } else if (sp === "iconGachapon") {
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
      topCap.scale.set(0.24 * featS, 0.1 * featS, 0.24 * featS);
      group.add(topCap);
      const dial = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      dial.position.set(0.06, -0.34, 0.42);
      dial.scale.set(0.16 * featS, 0.16 * featS, 0.08 * featS);
      group.add(dial);
    } else if (sp === "iconTanghulu") {
      [
        [0.36, 0.26],
        [0, 0.36],
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
    } else if (sp === "iconPopcorn") {
      const bucketPts = [
        new THREE.Vector2(0.01, -0.56),
        new THREE.Vector2(0.36, -0.54),
        new THREE.Vector2(0.48, 0.14),
        new THREE.Vector2(0.01, 0.14)
      ];
      group.add(new THREE.Mesh(new THREE.LatheGeometry(bucketPts, 28), mainMat));
      [
        [0, 0.42, 0, 0.26],
        [-0.3, 0.26, 0.08, 0.22],
        [0.3, 0.26, 0.08, 0.22],
        [-0.18, 0.34, -0.1, 0.2],
        [0.18, 0.34, -0.1, 0.2]
      ].forEach(([px, py, pz, r]) => {
        const kernel = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
        kernel.position.set(px, py, pz);
        kernel.scale.setScalar(r * featS);
        group.add(kernel);
      });
    } else if (sp === "iconApple") {
      const aShape = new THREE.Shape();
      aShape.moveTo(0, -0.44);
      aShape.bezierCurveTo(0.24, -0.56, 0.62, -0.28, 0.58, 0.18);
      aShape.bezierCurveTo(0.54, 0.54, 0.16, 0.52, 0, 0.34);
      aShape.bezierCurveTo(-0.16, 0.52, -0.54, 0.54, -0.58, 0.18);
      aShape.bezierCurveTo(-0.62, -0.28, -0.24, -0.56, 0, -0.44);
      const aGeo = new THREE.ExtrudeGeometry(aShape, {
        depth: 0.3,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 1,
        bevelSize: 0.12,
        bevelThickness: 0.14
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
    } else if (sp === "iconLuckyBag") {
      const bag = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      bag.position.set(0, -0.16, 0);
      bag.scale.set(0.58, 0.48, 0.52);
      group.add(bag);
      [-0.24, 0, 0.24].forEach((fx, idx) => {
        const ruffle = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        ruffle.position.set(fx, 0.44 + (idx === 1 ? 0.06 : 0), 0);
        ruffle.rotation.z = -fx * 1.1;
        ruffle.scale.set(0.2, 0.24, 0.18);
        group.add(ruffle);
      });
      const cord = new THREE.Mesh(new THREE.TorusGeometry(0.3 * featS, 0.065 * featS, 16, 36), accentMat);
      cord.rotation.x = Math.PI / 2;
      cord.position.set(0, 0.24, 0);
      group.add(cord);
      [-1, 1].forEach((dir) => {
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.048 * featS, 12, 24), accentMat);
        loop.position.set(dir * 0.34, 0.24, 0.14);
        group.add(loop);
      });
    } else if (sp === "iconFilmReel") {
      const reelShape = new THREE.Shape();
      reelShape.absarc(0, 0, 0.56, 0, Math.PI * 2, false);
      [Math.PI * 0.22, Math.PI * 0.5, Math.PI * 0.78].forEach((ang) => {
        const hole = new THREE.Path();
        hole.absarc(Math.cos(ang) * 0.31, Math.sin(ang) * 0.31, 0.12, 0, Math.PI * 2, true);
        reelShape.holes.push(hole);
      });
      const reelGeo = new THREE.ExtrudeGeometry(reelShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      reelGeo.center();
      group.add(new THREE.Mesh(reelGeo, mainMat));
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * featS, 0.11 * featS, 0.34, 20), accentMat);
      hub.rotation.x = Math.PI / 2;
      hub.position.set(0, 0.02, 0);
      group.add(hub);
      const stripCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.42, -0.32, 0),
        new THREE.Vector3(0.68, -0.1, 0.06),
        new THREE.Vector3(0.56, 0.28, 0.12),
        new THREE.Vector3(0.74, 0.48, 0.16)
      ]);
      const strip = new THREE.Mesh(new THREE.TubeGeometry(stripCurve, 24, 0.085 * featS, 14, false), accentMat);
      group.add(strip);
    } else if (sp === "iconPuzzlePiece") {
      const pShape = new THREE.Shape();
      pShape.moveTo(-0.44, -0.46);
      pShape.lineTo(0.44, -0.46);
      pShape.lineTo(0.44, -0.14);
      pShape.absarc(0.58, 0, 0.18, -Math.PI * 0.72, Math.PI * 0.72, false);
      pShape.lineTo(0.44, 0.44);
      pShape.lineTo(0.14, 0.44);
      pShape.absarc(0, 0.58, 0.18, -Math.PI * 0.22, Math.PI * 1.22, false);
      pShape.lineTo(-0.44, 0.44);
      pShape.lineTo(-0.44, 0.15);
      pShape.absarc(-0.3, 0, 0.17, Math.PI * 0.72, -Math.PI * 0.72, true);
      pShape.closePath();
      const pGeo = new THREE.ExtrudeGeometry(pShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      pGeo.center();
      group.add(new THREE.Mesh(pGeo, mainMat));
      const spark = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      spark.position.set(-0.46, 0.48, 0.2);
      spark.scale.setScalar(0.85 * featS);
      group.add(spark);
    } else if (sp === "iconChainLink") {
      const linkShape = new THREE.Shape();
      linkShape.moveTo(-0.38, -0.56);
      linkShape.lineTo(0.38, -0.56);
      linkShape.absarc(0.38, -0.06, 0.5, -Math.PI / 2, Math.PI / 2, false);
      linkShape.lineTo(-0.38, 0.44);
      linkShape.absarc(-0.38, -0.06, 0.5, Math.PI / 2, -Math.PI / 2, false);
      const hole = new THREE.Path();
      hole.absarc(0, 0.08, 0.2, 0, Math.PI * 2, true);
      linkShape.holes.push(hole);
      const linkGeo = new THREE.ExtrudeGeometry(linkShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      linkGeo.center();
      group.add(new THREE.Mesh(linkGeo, mainMat));
      const topLink = new THREE.Mesh(new THREE.TorusGeometry(0.28 * featS, 0.095 * featS, 18, 36), accentMat);
      topLink.position.set(0.16, 0.44, 0.04);
      topLink.rotation.y = Math.PI * 0.35;
      topLink.rotation.x = 0.32;
      group.add(topLink);
    } else if (sp === "iconRetroPhone") {
      const hShape = new THREE.Shape();
      hShape.moveTo(-0.62, -0.36);
      hShape.lineTo(-0.24, -0.36);
      hShape.lineTo(-0.2, -0.02);
      hShape.quadraticCurveTo(0, 0.12, 0.2, -0.02);
      hShape.lineTo(0.24, -0.36);
      hShape.lineTo(0.62, -0.36);
      hShape.quadraticCurveTo(0.72, 0.12, 0.46, 0.38);
      hShape.quadraticCurveTo(0, 0.56, -0.46, 0.38);
      hShape.quadraticCurveTo(-0.72, 0.12, -0.62, -0.36);
      const hGeo = new THREE.ExtrudeGeometry(hShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.11
      });
      hGeo.center();
      const handset = new THREE.Mesh(hGeo, mainMat);
      handset.position.y = 0.08;
      group.add(handset);
      [-0.14, 0, 0.14].forEach((cx, idx) => {
        const coil = new THREE.Mesh(new THREE.TorusGeometry(0.11 * featS, 0.042 * featS, 12, 24), accentMat);
        coil.position.set(cx, -0.44 - (idx === 1 ? 0.06 : 0), 0);
        coil.rotation.y = 0.5;
        group.add(coil);
      });
    } else if (sp === "iconPenroseTri") {
      const triShape = new THREE.Shape();
      triShape.moveTo(0, 0.66);
      triShape.lineTo(0.64, -0.48);
      triShape.lineTo(-0.64, -0.48);
      triShape.closePath();
      const innerHole = new THREE.Path();
      innerHole.moveTo(0, 0.28);
      innerHole.lineTo(-0.24, -0.14);
      innerHole.lineTo(0.24, -0.14);
      innerHole.closePath();
      triShape.holes.push(innerHole);
      const triGeo = new THREE.ExtrudeGeometry(triShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      triGeo.center();
      group.add(new THREE.Mesh(triGeo, mainMat));
      const coreGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.14 * featS, 0), accentMat);
      coreGem.position.set(0, 0.08, 0.04);
      group.add(coreGem);
    } else if (sp === "iconScissors") {
      [-1, 1].forEach((dir) => {
        const bladeShape = new THREE.Shape();
        bladeShape.moveTo(0, -0.05);
        bladeShape.lineTo(dir * 0.42, 0.62);
        bladeShape.lineTo(dir * 0.14, 0.58);
        bladeShape.lineTo(0, 0.12);
        bladeShape.closePath();
        const bGeo = new THREE.ExtrudeGeometry(bladeShape, {
          depth: 0.16,
          bevelEnabled: true,
          bevelSegments: 8,
          steps: 1,
          bevelSize: 0.06,
          bevelThickness: 0.07
        });
        const blade = new THREE.Mesh(bGeo, accentMat);
        blade.position.set(0, 0.02, -0.08);
        blade.scale.setScalar(featS);
        group.add(blade);
      });
      const handleShape = new THREE.Shape();
      handleShape.moveTo(0, 0.24);
      handleShape.quadraticCurveTo(0.68, 0.18, 0.64, -0.34);
      handleShape.quadraticCurveTo(0.58, -0.6, 0.22, -0.52);
      handleShape.quadraticCurveTo(0, -0.44, -0.22, -0.52);
      handleShape.quadraticCurveTo(-0.58, -0.6, -0.64, -0.34);
      handleShape.quadraticCurveTo(-0.68, 0.18, 0, 0.24);
      [-0.38, 0.38].forEach((hx) => {
        const fingerHole = new THREE.Path();
        fingerHole.absarc(hx, -0.26, 0.14, 0, Math.PI * 2, true);
        handleShape.holes.push(fingerHole);
      });
      const hGeo = new THREE.ExtrudeGeometry(handleShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      hGeo.center();
      const handleMesh = new THREE.Mesh(hGeo, mainMat);
      handleMesh.position.y = -0.14;
      group.add(handleMesh);
    } else if (sp === "iconWrench") {
      const wShape = new THREE.Shape();
      wShape.moveTo(-0.36, -0.56);
      wShape.lineTo(0.36, -0.56);
      wShape.lineTo(0.32, -0.06);
      wShape.quadraticCurveTo(0.62, 0.1, 0.48, 0.56);
      wShape.lineTo(0.24, 0.52);
      wShape.lineTo(0.24, 0.18);
      wShape.lineTo(-0.24, 0.18);
      wShape.lineTo(-0.24, 0.52);
      wShape.lineTo(-0.48, 0.56);
      wShape.quadraticCurveTo(-0.62, 0.1, -0.32, -0.06);
      wShape.closePath();
      const wGeo = new THREE.ExtrudeGeometry(wShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      wGeo.center();
      group.add(new THREE.Mesh(wGeo, mainMat));
      const hexNut = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * featS, 0.22 * featS, 0.28, 6), accentMat);
      hexNut.rotation.x = Math.PI / 2;
      hexNut.position.set(0, 0.38, 0);
      group.add(hexNut);
    } else if (sp === "iconPocketKnife") {
      [-0.55, 0, 0.55].forEach((ang, idx) => {
        const toolGeo = idx === 1 ? new THREE.ConeGeometry(0.18 * featS, 0.58 * featS, 4) : createRoundedRectExtrude(0.18 * featS, 0.48 * featS, 0.06, 0.12, 0.04);
        const tool = new THREE.Mesh(toolGeo, accentMat);
        tool.position.set(Math.sin(ang) * 0.38, 0.34 + (idx === 1 ? 0.1 : 0), -0.06);
        tool.rotation.z = -ang;
        group.add(tool);
      });
      const caseMesh = new THREE.Mesh(createRoundedRectExtrude(1.06, 0.56, 0.24, 0.28, 0.1), mainMat);
      caseMesh.position.set(0, -0.14, 0);
      caseMesh.rotation.z = 0.12;
      group.add(caseMesh);
      const keyRing = new THREE.Mesh(new THREE.TorusGeometry(0.14 * featS, 0.045 * featS, 12, 24), accentMat);
      keyRing.position.set(-0.58, -0.22, 0);
      group.add(keyRing);
    } else if (sp === "iconToriiGate") {
      const tShape = new THREE.Shape();
      tShape.moveTo(-0.48, -0.56);
      tShape.lineTo(0.48, -0.56);
      tShape.lineTo(0.48, 0.1);
      tShape.lineTo(0.68, 0.22);
      tShape.quadraticCurveTo(0.74, 0.48, 0.62, 0.56);
      tShape.quadraticCurveTo(0, 0.42, -0.62, 0.56);
      tShape.quadraticCurveTo(-0.74, 0.48, -0.68, 0.22);
      tShape.lineTo(-0.48, 0.1);
      tShape.closePath();
      const gateHole = new THREE.Path();
      gateHole.moveTo(-0.22, -0.44);
      gateHole.lineTo(-0.22, -0.04);
      gateHole.lineTo(0.22, -0.04);
      gateHole.lineTo(0.22, -0.44);
      gateHole.closePath();
      tShape.holes.push(gateHole);
      const tGeo = new THREE.ExtrudeGeometry(tShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      tGeo.center();
      group.add(new THREE.Mesh(tGeo, mainMat));
      const plaque = new THREE.Mesh(createRoundedRectExtrude(0.26 * featS, 0.18 * featS, 0.04, 0.12, 0.03), accentMat);
      plaque.position.set(0, 0.48, 0.16);
      group.add(plaque);
    } else if (sp === "iconMonumentArch") {
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
      const archHole = new THREE.Path();
      archHole.moveTo(-0.2, -0.46);
      archHole.lineTo(-0.2, -0.18);
      archHole.absarc(0, -0.18, 0.2, Math.PI, 0, true);
      archHole.lineTo(0.2, -0.46);
      archHole.closePath();
      aShape.holes.push(archHole);
      const aGeo = new THREE.ExtrudeGeometry(aShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      aGeo.center();
      group.add(new THREE.Mesh(aGeo, mainMat));
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(0, -0.26, 0.06);
      star.scale.setScalar(0.82 * featS);
      group.add(star);
    } else if (sp === "iconHelixDNA") {
      [-1, 1].forEach((dir) => {
        const pts = [];
        for (let i = 0; i <= 32; i++) {
          const t = i / 32 * 2 - 1;
          const y = t * 0.58;
          const x = dir * Math.sin(t * Math.PI * 1.15) * 0.42;
          const z = dir * Math.cos(t * Math.PI * 1.15) * 0.14;
          pts.push(new THREE.Vector3(x, y, z));
        }
        const strand = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 36, 0.14, 16, false), mainMat);
        group.add(strand);
      });
      const centerNode = new THREE.Mesh(createRoundedRectExtrude(0.56, 0.36, 0.16, 0.26, 0.08), mainMat);
      group.add(centerNode);
      [-0.42, 0.42].forEach((ry) => {
        const rung = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.64 * featS, 14), accentMat);
        rung.rotation.z = Math.PI / 2;
        rung.position.set(0, ry, 0);
        group.add(rung);
      });
    } else if (sp === "iconElectricGuitar") {
      const gShape = new THREE.Shape();
      gShape.moveTo(0, -0.56);
      gShape.bezierCurveTo(0.56, -0.56, 0.64, -0.12, 0.36, 0.08);
      gShape.lineTo(0.54, 0.42);
      gShape.lineTo(0.18, 0.22);
      gShape.lineTo(-0.18, 0.26);
      gShape.lineTo(-0.56, 0.52);
      gShape.lineTo(-0.38, 0.06);
      gShape.bezierCurveTo(-0.64, -0.14, -0.56, -0.56, 0, -0.56);
      const gGeo = new THREE.ExtrudeGeometry(gShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      gGeo.center();
      const body = new THREE.Mesh(gGeo, mainMat);
      body.position.y = -0.06;
      group.add(body);
      const neck = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.56 * featS, 0.04, 0.16, 0.04), accentMat);
      neck.position.set(0.06, 0.42, -0.02);
      neck.rotation.z = -0.15;
      group.add(neck);
      const headstock = new THREE.Mesh(new THREE.ConeGeometry(0.16 * featS, 0.32 * featS, 4), accentMat);
      headstock.position.set(0.14, 0.68, 0);
      headstock.rotation.z = -0.65;
      group.add(headstock);
    } else if (sp === "iconIceberg") {
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
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      iGeo.center();
      group.add(new THREE.Mesh(iGeo, mainMat));
      const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.15 * featS, 0), accentMat);
      crystal.position.set(0.42, 0.46, 0.14);
      group.add(crystal);
      const star = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      star.position.set(-0.46, 0.48, 0.18);
      star.scale.setScalar(0.78 * featS);
      group.add(star);
    } else if (sp === "iconPirateShip") {
      const hullShape = new THREE.Shape();
      hullShape.moveTo(-0.44, -0.56);
      hullShape.lineTo(0.44, -0.56);
      hullShape.lineTo(0.66, -0.04);
      hullShape.lineTo(0.42, 0.02);
      hullShape.quadraticCurveTo(0, -0.14, -0.42, 0.06);
      hullShape.lineTo(-0.66, 0.02);
      hullShape.closePath();
      const hullGeo = new THREE.ExtrudeGeometry(hullShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      hullGeo.center();
      const hull = new THREE.Mesh(hullGeo, mainMat);
      hull.position.y = -0.28;
      group.add(hull);
      const sailShape = new THREE.Shape();
      sailShape.moveTo(-0.46, -0.02);
      sailShape.quadraticCurveTo(0, -0.08, 0.46, -0.02);
      sailShape.quadraticCurveTo(0.56, 0.24, 0.38, 0.46);
      sailShape.quadraticCurveTo(0, 0.42, -0.38, 0.46);
      sailShape.quadraticCurveTo(-0.56, 0.24, -0.46, -0.02);
      const sailGeo = new THREE.ExtrudeGeometry(sailShape, {
        depth: 0.18,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.06,
        bevelThickness: 0.07
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
    } else if (sp === "iconCarousel") {
      const cShape = new THREE.Shape();
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
      [-0.2, 0.2].forEach((wx) => {
        const win = new THREE.Path();
        win.moveTo(wx - 0.11, -0.3);
        win.lineTo(wx - 0.11, -0.04);
        win.lineTo(wx + 0.11, -0.04);
        win.lineTo(wx + 0.11, -0.3);
        win.closePath();
        cShape.holes.push(win);
      });
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      cGeo.center();
      group.add(new THREE.Mesh(cGeo, mainMat));
      const centerPole = new THREE.Mesh(createCapsuleGeometry(0.055 * featS, 0.92 * featS, 14), accentMat);
      centerPole.position.set(0, 0.12, 0.04);
      group.add(centerPole);
      const topStar = new THREE.Mesh(SHARED_GEOS.starBadge, accentMat);
      topStar.position.set(0, 0.64, 0.06);
      topStar.scale.setScalar(0.78 * featS);
      group.add(topStar);
    } else if (sp === "iconBalanceScale") {
      const sShape = new THREE.Shape();
      sShape.moveTo(-0.44, -0.54);
      sShape.lineTo(0.44, -0.54);
      sShape.lineTo(0.32, -0.04);
      sShape.lineTo(0.64, 0.24);
      sShape.lineTo(0.64, 0.42);
      sShape.lineTo(0.18, 0.36);
      sShape.lineTo(0, 0.6);
      sShape.lineTo(-0.18, 0.36);
      sShape.lineTo(-0.64, 0.42);
      sShape.lineTo(-0.64, 0.24);
      sShape.lineTo(-0.32, -0.04);
      sShape.closePath();
      const sGeo = new THREE.ExtrudeGeometry(sShape, {
        depth: 0.24,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.1
      });
      sGeo.center();
      group.add(new THREE.Mesh(sGeo, mainMat));
      [-0.56, 0.56].forEach((px) => {
        const chain = new THREE.Mesh(createCapsuleGeometry(0.032 * featS, 0.32 * featS, 10), accentMat);
        chain.position.set(px * featS, 0.06, 0);
        group.add(chain);
        const pan = new THREE.Mesh(new THREE.TorusGeometry(0.16 * featS, 0.055 * featS, 14, 24, Math.PI), accentMat);
        pan.rotation.z = Math.PI;
        pan.position.set(px * featS, -0.1, 0);
        group.add(pan);
      });
    } else if (sp === "archPisaTower") {
      const towerGroup = new THREE.Group();
      towerGroup.rotation.z = -0.17;
      const baseTier = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.5, 0.24, 32), mainMat);
      baseTier.position.y = -0.46;
      towerGroup.add(baseTier);
      const baseRim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.045, 12, 36), accentMat);
      baseRim.position.y = -0.56;
      baseRim.rotation.x = Math.PI / 2;
      towerGroup.add(baseRim);
      const tierHeights = [-0.22, 0.02, 0.26, 0.5];
      tierHeights.forEach((ty, idx) => {
        const core = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.22, 28), mainMat);
        core.position.y = ty;
        towerGroup.add(core);
        const floorRim = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.038, 12, 36), accentMat);
        floorRim.position.y = ty - 0.1;
        floorRim.rotation.x = Math.PI / 2;
        towerGroup.add(floorRim);
        for (let c = 0; c < 8; c++) {
          const ang = c / 8 * Math.PI * 2;
          const col = new THREE.Mesh(createCapsuleGeometry(0.018 * featS, 0.18 * featS, 6), accentMat);
          col.position.set(Math.cos(ang) * 0.42, ty, Math.sin(ang) * 0.42);
          towerGroup.add(col);
        }
      });
      const bellTier = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.18, 24), mainMat);
      bellTier.position.y = 0.7;
      towerGroup.add(bellTier);
      const dome = new THREE.Mesh(new THREE.ConeGeometry(0.24 * featS, 0.18 * featS, 16), accentMat);
      dome.position.y = 0.84;
      towerGroup.add(dome);
      group.add(towerGroup);
    } else if (sp === "iconGenieLamp") {
      const lShape = new THREE.Shape();
      lShape.moveTo(-0.28, -0.54);
      lShape.lineTo(0.32, -0.54);
      lShape.lineTo(0.2, -0.34);
      lShape.quadraticCurveTo(0.58, -0.22, 0.52, 0.18);
      lShape.quadraticCurveTo(0.24, 0.42, -0.06, 0.36);
      lShape.quadraticCurveTo(-0.42, 0.16, -0.68, 0.38);
      lShape.lineTo(-0.62, 0.14);
      lShape.quadraticCurveTo(-0.38, -0.18, -0.14, -0.34);
      lShape.closePath();
      const lGeo = new THREE.ExtrudeGeometry(lShape, {
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 1,
        bevelSize: 0.09,
        bevelThickness: 0.11
      });
      lGeo.center();
      group.add(new THREE.Mesh(lGeo, mainMat));
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.18 * featS, 0.058 * featS, 14, 28), accentMat);
      handle.position.set(0.52, 0.04, 0);
      group.add(handle);
      const smokeCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.62, 0.38, 0),
        new THREE.Vector3(-0.48, 0.56, 0.04),
        new THREE.Vector3(-0.24, 0.64, 0.08)
      ]);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(smokeCurve, 20, 0.068 * featS, 14, false), accentMat));
    } else if (sp === "iconPixelInvader") {
      const pShape = new THREE.Shape();
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
        depth: 0.26,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 1,
        bevelSize: 0.07,
        bevelThickness: 0.09
      });
      pGeo.center();
      group.add(new THREE.Mesh(pGeo, mainMat));
      [-0.32, 0.32].forEach((ax) => {
        const ant = new THREE.Mesh(createRoundedRectExtrude(0.2 * featS, 0.2 * featS, 0.04, 0.26, 0.05), accentMat);
        ant.position.set(ax, 0.54, 0);
        group.add(ant);
      });
    } else if (sp === "iconPaperclip") {
      const card = new THREE.Mesh(createRoundedRectExtrude(0.72, 0.88, 0.16, 0.24, 0.08), mainMat);
      card.position.set(0, -0.06, 0);
      group.add(card);
      const clipPts = [
        new THREE.Vector3(-0.22, -0.18, 0.18),
        new THREE.Vector3(-0.22, 0.56, 0.14),
        new THREE.Vector3(0.08, 0.64, 0.1),
        new THREE.Vector3(0.38, 0.54, 0.04),
        new THREE.Vector3(0.46, -0.44, 0),
        new THREE.Vector3(0, -0.58, 0),
        new THREE.Vector3(-0.46, -0.44, 0),
        new THREE.Vector3(-0.46, 0.28, 0.06)
      ];
      const clipTube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(clipPts), 48, 0.085 * featS, 16, false), accentMat);
      group.add(clipTube);
    } else if (sp === "archColosseum") {
      const ringOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.68, 0.52, 32, 1, true), mainMat);
      ringOuter.scale.set(1.15, 1, 0.9);
      ringOuter.position.y = -0.06;
      group.add(ringOuter);
      const arena = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.5, 0.24, 28), accentMat);
      arena.scale.set(1.15, 1, 0.9);
      arena.position.y = -0.22;
      group.add(arena);
      [-0.2, 0, 0.16].forEach((hy) => {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.67, 0.024 * featS, 8, 36), accentMat);
        rim.scale.set(1.15, 0.9, 1);
        rim.rotation.x = Math.PI / 2;
        rim.position.y = hy;
        group.add(rim);
      });
      const wallCrest = new THREE.Mesh(createRoundedRectExtrude(0.38 * featS, 0.18 * featS, 0.06, 0.1, 0.03), accentMat);
      wallCrest.position.set(-0.38, 0.26, 0);
      group.add(wallCrest);
    } else if (sp === "archToriiGate") {
      [-0.4, 0.4].forEach((colX) => {
        const pillar = new THREE.Mesh(createCapsuleGeometry(0.065 * featS, 0.98 * featS, 14), mainMat);
        pillar.position.set(colX, -0.06, 0);
        group.add(pillar);
        const shoe = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * featS, 0.12 * featS, 0.14 * featS, 18), accentMat);
        shoe.position.set(colX, -0.52, 0);
        group.add(shoe);
      });
      const kasagi = new THREE.Mesh(createRoundedRectExtrude(1.18 * featS, 0.14 * featS, 0.08, 0.14, 0.04), mainMat);
      kasagi.position.set(0, 0.48, 0);
      group.add(kasagi);
      const nuki = new THREE.Mesh(createCapsuleGeometry(0.048 * featS, 1.02 * featS, 10), accentMat);
      nuki.rotation.z = Math.PI / 2;
      nuki.position.set(0, 0.28, 0);
      group.add(nuki);
      const plaque = new THREE.Mesh(createRoundedRectExtrude(0.18 * featS, 0.22 * featS, 0.04, 0.08, 0.02), accentMat);
      plaque.position.set(0, 0.38, 0.08);
      group.add(plaque);
    } else if (sp === "foodRamenBowlEx") {
      const bowlOuter = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.38, 0.44, 32), mainMat);
      bowlOuter.position.y = -0.26;
      group.add(bowlOuter);
      const soupSurf = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.04, 32), accentMat);
      soupSurf.position.y = -0.04;
      group.add(soupSurf);
      const noodlePts = [];
      for (let i = 0; i < 48; i++) {
        const t = i / 47;
        const ang = t * Math.PI * 4;
        const r = 0.22 + t * 0.08;
        noodlePts.push(new THREE.Vector3(Math.cos(ang) * r, 0.04 + t * 0.08, Math.sin(ang) * r));
      }
      const noodleMesh = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(noodlePts), 48, 0.038 * featS, 8, false),
        accentMat
      );
      group.add(noodleMesh);
      const eggWhite = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      eggWhite.position.set(0.24, 0.1, 0.1);
      eggWhite.scale.set(0.18 * featS, 0.14 * featS, 0.14 * featS);
      group.add(eggWhite);
      const yolk = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      yolk.position.set(0.24, 0.14, 0.14);
      yolk.scale.setScalar(0.09 * featS);
      group.add(yolk);
    } else if (sp === "spaceSaturn") {
      const planet = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      planet.scale.setScalar(0.42 * featS);
      group.add(planet);
      [[0.58, 0.04], [0.72, 0.034], [0.86, 0.026]].forEach(([r, t]) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(r * featS, t * featS, 6, 64), accentMat);
        ring.rotation.x = Math.PI / 2 - 0.26;
        ring.rotation.z = 0.18;
        group.add(ring);
      });
    } else if (sp === "gameChessQueen") {
      const baseBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.1, 32), mainMat);
      baseBottom.position.y = -0.52;
      group.add(baseBottom);
      const baseRing = new THREE.Mesh(new THREE.TorusGeometry(0.42 * featS, 0.045 * featS, 12, 32), accentMat);
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.y = -0.47;
      group.add(baseRing);
      const waistPts = [
        new THREE.Vector2(0.01, -0.45),
        new THREE.Vector2(0.34, -0.45),
        new THREE.Vector2(0.24, -0.32),
        new THREE.Vector2(0.16, -0.16),
        new THREE.Vector2(0.14, -0.04),
        new THREE.Vector2(0.18, 0.08),
        new THREE.Vector2(0.24, 0.16),
        new THREE.Vector2(0.01, 0.16)
      ];
      const waistGeo = new THREE.LatheGeometry(waistPts, 32);
      group.add(new THREE.Mesh(waistGeo, mainMat));
      const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.19 * featS, 0.04 * featS, 12, 32), accentMat);
      neckRing.rotation.x = Math.PI / 2;
      neckRing.position.y = 0.16;
      group.add(neckRing);
      const qHead = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
      qHead.scale.set(0.25 * featS, 0.23 * featS, 0.25 * featS);
      qHead.position.y = 0.32;
      group.add(qHead);
      const crownBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.06, 24), accentMat);
      crownBase.position.y = 0.46;
      group.add(crownBase);
      for (let i = 0; i < 6; i++) {
        const ang = i / 6 * Math.PI * 2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.042 * featS, 0.14 * featS, 8), accentMat);
        spike.position.set(Math.cos(ang) * 0.2, 0.54, Math.sin(ang) * 0.2);
        spike.rotation.z = -Math.cos(ang) * 0.35;
        spike.rotation.x = Math.sin(ang) * 0.35;
        group.add(spike);
      }
      const pearl = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      pearl.scale.setScalar(0.085 * featS);
      pearl.position.y = 0.54;
      group.add(pearl);
    } else if (sp === "foodIceCreamSundae") {
      const icBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.08, 24), accentMat);
      icBase.position.y = -0.54;
      group.add(icBase);
      const icStem = new THREE.Mesh(createCapsuleGeometry(0.05 * featS, 0.24 * featS, 10), accentMat);
      icStem.position.y = -0.4;
      group.add(icStem);
      const icCup = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.2, 0.46, 28), accentMat);
      icCup.position.y = -0.14;
      group.add(icCup);
      [[-0.08, 0.16, 0.04], [0.1, 0.36, -0.02]].forEach(([ex, ey, ez]) => {
        const scoop = new THREE.Mesh(SHARED_GEOS.sphere, mainMat);
        scoop.position.set(ex, ey, ez);
        scoop.scale.set(0.28 * featS, 0.25 * featS, 0.28 * featS);
        group.add(scoop);
      });
      const icCherry = new THREE.Mesh(SHARED_GEOS.sphere, accentMat);
      icCherry.position.set(0.08, 0.62, 0.06);
      icCherry.scale.setScalar(0.095 * featS);
      group.add(icCherry);
      const icStalk = new THREE.Mesh(createCapsuleGeometry(0.015 * featS, 0.14 * featS, 6), accentMat);
      icStalk.position.set(0.12, 0.74, 0.06);
      icStalk.rotation.z = -0.3;
      group.add(icStalk);
      const icWafer = new THREE.Mesh(createRoundedRectExtrude(0.055 * featS, 0.44 * featS, 0.03, 0.04, 0.01), accentMat);
      icWafer.position.set(-0.16, 0.42, 0.12);
      icWafer.rotation.z = 0.28;
      group.add(icWafer);
    }
    return group;
  }

  // reference/sprite-3d/src/core/sprite-scene.js
  function lerpAngle(from, to, t) {
    const diff = (to - from) % (Math.PI * 2);
    const shortestDiff = (diff + Math.PI * 3) % (Math.PI * 2) - Math.PI;
    return from + shortestDiff * t;
  }
  var PARTICLE_MATS = [
    new THREE.MeshBasicMaterial({ color: 16777215 }),
    new THREE.MeshBasicMaterial({ color: 16766720 }),
    new THREE.MeshBasicMaterial({ color: 16707722 }),
    new THREE.MeshBasicMaterial({ color: 3718648 })
  ];
  var OriginalSpriteScene = class {
    constructor(spriteDef, slotEl) {
      this.cloudDef = spriteDef;
      this.slotEl = slotEl;
      this.scene = new THREE.Scene();
      const frustum = 2.45;
      this.camera = new THREE.OrthographicCamera(-frustum / 2, frustum / 2, frustum / 2, -frustum / 2, 0.1, 20);
      this.camera.position.set(0, 0, 6);
      this.pivot = new THREE.Group();
      this.baseRotY = 0.42;
      this.baseRotX = 0.2;
      this.baseRotZ = -0.04;
      this.userRotY = 0;
      this.userRotX = 0;
      this.spinAngle = 0.42;
      this.pivot.rotation.set(this.baseRotX, this.baseRotY, this.baseRotZ);
      this.scene.add(this.pivot);
      this.hovered = false;
      this.hoverElev = 0;
      this.pokeTimer = 999;
      this.blinkTimer = 2.5 + Math.random() * 4;
      this.isBlinking = false;
      this.blinkProgress = 0;
      this.isMorphingEye = false;
      this.morphProgress = 0;
      this.morphTargetEyeType = null;
      this.morphSwapped = false;
      this.spinSurge = 0;
      this.spinSurgeDecay = 3.5;
      this.particles = [];
      this.particleGroup = null;
      this.rebuildModel();
      this._initParticleSystem();
    }
    _initParticleSystem() {
      this.particleGroup = new THREE.Group();
      this.particles = [];
      for (let i = 0; i < 7; i++) {
        const mat = PARTICLE_MATS[i % PARTICLE_MATS.length];
        const p = new THREE.Mesh(SHARED_GEOS.starBadge, mat);
        p.scale.setScalar(0);
        p.visible = false;
        this.particleGroup.add(p);
        this.particles.push({
          mesh: p,
          vx: 0,
          vy: 0,
          vz: 0,
          life: 0,
          maxLife: 0,
          baseScale: 0.35
        });
      }
      this.pivot.add(this.particleGroup);
    }
    triggerPokeBounce() {
      this.pokeTimer = 0;
      if (!this.isMorphingEye && !this.isBlinking) {
        this.isBlinking = true;
        this.blinkProgress = 0.25;
      }
    }
    // 触发表情变形动画 (从上一个表情平滑挤压过渡到下一个表情)
    morphToEyeExpression(newEyeType) {
      if (this.cloudDef.eyeType === newEyeType && !this.isMorphingEye) {
        this.triggerPokeBounce();
        return;
      }
      this.isMorphingEye = true;
      this.morphProgress = 0;
      this.morphTargetEyeType = newEyeType;
      this.morphSwapped = false;
    }
    _spawnParticles() {
      if (!this.particles || this.particles.length === 0) return;
      this.particles.forEach((p, i) => {
        const ang = i / this.particles.length * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = 0.7 + Math.random() * 0.8;
        p.vx = Math.cos(ang) * speed;
        p.vy = Math.sin(ang) * speed + 0.5;
        p.vz = (Math.random() - 0.5) * 0.4;
        p.life = 0;
        p.maxLife = 0.45 + Math.random() * 0.25;
        p.mesh.visible = true;
        p.mesh.position.set(
          (Math.random() - 0.5) * 0.18,
          (Math.random() - 0.5) * 0.18,
          0.22
        );
        p.baseScale = 0.28 + Math.random() * 0.2;
        p.mesh.scale.setScalar(p.baseScale);
        p.mesh.rotation.z = Math.random() * Math.PI * 2;
      });
    }
    rebuildModel() {
      while (this.pivot.children.length > 0) {
        this.pivot.remove(this.pivot.children[0]);
      }
      const palette = PALETTES[this.cloudDef.paletteIdx] || PALETTES[0];
      this.mainMat = createCloudToonMaterial(palette.main, palette.shade, 0.22);
      this.accentMat = createCloudToonMaterial(palette.accent, palette.main, 0.18);
      this.bodyContainer = new THREE.Group();
      this.bodyMeshGroup = buildOriginalSpriteMesh(this.cloudDef, this.mainMat, this.accentMat);
      this.bodyContainer.add(this.bodyMeshGroup);
      const headY = this.cloudDef.headY !== void 0 ? this.cloudDef.headY : 0.65;
      this.addonGroup = buildExtraAddonMesh(this.cloudDef.addon, this.mainMat, this.accentMat, headY);
      this.bodyContainer.add(this.addonGroup);
      this.bodyContainer.scale.set(
        this.cloudDef.sx || 1,
        this.cloudDef.sy || 1,
        this.cloudDef.sz || 1
      );
      this.pivot.add(this.bodyContainer);
      this.eyesGroup = buildEyesGroup(this.cloudDef);
      this.pivot.add(this.eyesGroup);
      if (this.particleGroup) {
        this.pivot.add(this.particleGroup);
      }
    }
    update(dt, elapsed, mouseNDC, viewAngleMode, isSculptingThis) {
      let pokeScaleY = 1;
      let pokeScaleXZ = 1;
      let pokeLiftY = 0;
      if (this.pokeTimer < 0.9) {
        this.pokeTimer += dt;
        const t = this.pokeTimer;
        const envelope = Math.exp(-t * 4.5);
        const wave = Math.sin(t * 9.2);
        const squash = -0.08 * envelope * wave;
        pokeScaleY = 1 + squash;
        pokeScaleXZ = 1 - squash * 0.48;
        pokeLiftY = Math.max(0, Math.sin(t * 7.5)) * 0.02 * envelope;
      }
      const targetHoverElev = this.hovered && !isSculptingThis ? 0.03 : 0;
      this.hoverElev = THREE.MathUtils.lerp(this.hoverElev, targetHoverElev, dt * 5);
      const breathFreq = 1.15;
      const breathAmp = 0.018;
      const breathY = Math.sin(elapsed * breathFreq + (this.cloudDef.id || 0) * 0.72) * breathAmp;
      let rollTilt = 0;
      if (this.hovered && !isSculptingThis) {
        rollTilt += Math.sin(elapsed * 1.5 + (this.cloudDef.id || 0)) * 0.015;
      }
      this.pivot.scale.set(
        pokeScaleXZ,
        pokeScaleY,
        pokeScaleXZ
      );
      this.pivot.position.y = breathY + this.hoverElev + pokeLiftY;
      if (this.spinSurge > 0) {
        this.spinSurge = Math.max(0, this.spinSurge - this.spinSurgeDecay * dt);
      }
      let targetRotY = this.baseRotY + this.userRotY;
      let targetRotX = this.baseRotX + this.userRotX;
      let targetRotZ = this.baseRotZ + rollTilt;
      let lookX = mouseNDC.x * 0.09;
      let lookY = -mouseNDC.y * 0.06;
      if (!isSculptingThis) {
        if (viewAngleMode === "front") {
          targetRotY = this.userRotY;
          targetRotX = this.userRotX;
          targetRotZ = 0;
          lookX = 0;
          lookY = 0;
        } else if (viewAngleMode === "side") {
          targetRotY = Math.PI * 0.48 + this.userRotY;
          targetRotX = this.userRotX;
          targetRotZ = 0;
          lookX = 0;
          lookY = 0;
        } else if (viewAngleMode === "spin") {
          this.spinAngle += dt * 1.15 + this.spinSurge * dt;
          targetRotY = this.spinAngle;
          targetRotX = 0.16 + this.userRotX;
          targetRotZ = 0;
          lookX = 0;
          lookY = 0;
        } else {
          if (this.spinSurge > 0) {
            this.spinAngle += this.spinSurge * dt;
            targetRotY = this.spinAngle;
          } else {
            this.spinAngle = this.pivot.rotation.y;
          }
        }
      } else {
        lookX *= 0.2;
        lookY *= 0.2;
      }
      const rotLerpSpeed = Math.min(1, dt * 9.5);
      this.pivot.rotation.y = lerpAngle(this.pivot.rotation.y, targetRotY + lookX, rotLerpSpeed);
      this.pivot.rotation.x = THREE.MathUtils.lerp(this.pivot.rotation.x, targetRotX + lookY, rotLerpSpeed);
      this.pivot.rotation.z = THREE.MathUtils.lerp(this.pivot.rotation.z, targetRotZ, rotLerpSpeed);
      if (this.eyesGroup) {
        const eyeLookFactor = viewAngleMode === "front" && !isSculptingThis ? 0.025 : 0.055;
        const baseEyeX = 0.08 + mouseNDC.x * eyeLookFactor;
        const baseEyeY = this.cloudDef.eyeY + mouseNDC.y * (eyeLookFactor * 0.85);
        this.eyesGroup.position.x = THREE.MathUtils.lerp(this.eyesGroup.position.x, baseEyeX, dt * 14);
        this.eyesGroup.position.y = THREE.MathUtils.lerp(this.eyesGroup.position.y, baseEyeY, dt * 14);
        this.eyesGroup.position.z = this.cloudDef.eyeZ * (this.cloudDef.sz || 1);
        const baseS = this.cloudDef.eyeScale || 1;
        if (this.isMorphingEye) {
          this.morphProgress += dt * 3.8;
          const p = Math.min(1, this.morphProgress);
          if (p < 0.45) {
            const t = p / 0.45;
            const sy = 1 - 0.95 * Math.sin(t * Math.PI * 0.5);
            const sx = 1 + 0.32 * Math.sin(t * Math.PI);
            this.eyesGroup.scale.set(baseS * sx, baseS * Math.max(0.04, sy), baseS);
          } else {
            if (!this.morphSwapped) {
              this.morphSwapped = true;
              this.cloudDef.eyeType = this.morphTargetEyeType;
              const curPos = this.eyesGroup.position.clone();
              this.pivot.remove(this.eyesGroup);
              this.eyesGroup = buildEyesGroup(this.cloudDef);
              this.eyesGroup.position.copy(curPos);
              this.pivot.add(this.eyesGroup);
            }
            const t = (p - 0.45) / 0.55;
            const bounce = 1 + 0.38 * Math.sin(t * Math.PI * 1.5) * Math.exp(-t * 3.5);
            const sy = 0.05 + 0.95 * bounce;
            const sx = 1 + 0.16 * Math.sin(t * Math.PI * 2) * (1 - t);
            this.eyesGroup.scale.set(baseS * sx, baseS * Math.max(0.04, sy), baseS);
            if (p >= 1) {
              this.isMorphingEye = false;
              this.eyesGroup.scale.setScalar(baseS);
            }
          }
        } else {
          const thinkDot = this.eyesGroup.getObjectByName("anim_thinkDot");
          if (thinkDot) {
            thinkDot.position.y = 0.15 + Math.sin(elapsed * 4.8) * 0.022;
            thinkDot.position.x = 0.1 + Math.cos(elapsed * 3.2) * 0.012;
            thinkDot.scale.setScalar(0.034 * (1 + Math.sin(elapsed * 4.8) * 0.2));
          }
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_heart") {
              const beatT = elapsed * 2.4 % (Math.PI * 2);
              const beat = Math.sin(beatT) > 0.65 ? Math.sin(beatT * 2) * 0.14 : 0;
              child.scale.setScalar(1 + beat);
            }
          });
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_happyArc") {
              child.scale.y = 1 + Math.sin(elapsed * 3.4) * 0.07;
            }
          });
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_squint") {
              child.position.y = Math.sin(elapsed * 18) * 0.015;
            }
          });
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_dizzyRing") {
              child.rotation.z = elapsed * 0.95;
            }
          });
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_dot") {
              const breath = 1 + Math.sin(elapsed * 2.8) * 0.08;
              child.scale.set(0.068 * breath, 0.068 * breath, 0.045);
            }
          });
          this.eyesGroup.traverse((child) => {
            if (child.name === "anim_glint") {
              child.scale.setScalar(0.028 * (1 + Math.sin(elapsed * 5.2) * 0.25));
            }
          });
          this.blinkTimer -= dt;
          if (this.blinkTimer <= 0 && !this.isBlinking) {
            this.isBlinking = true;
            this.blinkProgress = 0;
            this.blinkTimer = 2.5 + Math.random() * 4.5;
          }
          if (this.isBlinking) {
            this.blinkProgress += dt * 15;
            const blinkScaleY = Math.abs(Math.cos(Math.min(this.blinkProgress, Math.PI)));
            this.eyesGroup.scale.set(baseS, Math.max(0.08, blinkScaleY * baseS), baseS);
            if (this.blinkProgress >= Math.PI) {
              this.isBlinking = false;
              this.eyesGroup.scale.setScalar(baseS);
            }
          }
        }
      }
    }
  };

  // reference/sprite-3d/src/config/addons.js
  var EXTRA_ADDONS = [
    {
      id: "none",
      name: "\u539F\u751F\u9020\u578B",
      svg: `<svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="7.5" stroke-width="2" stroke-dasharray="2.5 2.5"/><line x1="8" y1="8" x2="16" y2="16" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: "halo",
      name: "\u9EC4\u91D1\u5149\u73AF",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="13.5" rx="8" ry="3.5" stroke="#f59e0b" stroke-width="2.4"/><path d="M12 3.5l1 2.2L15.2 6.8 13 7.8 12 10l-1-2.2L8.8 6.8 11 5.7z" fill="#fbbf24"/></svg>`
    },
    {
      id: "starPin",
      name: "\u661F\u8292\u80F8\u9488",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2.5c0 4.2 4.2 8.5 8.5 8.5c-4.3 0-8.5 4.3-8.5 8.5c0-4.2-4.2-8.5-8.5-8.5c4.3 0 8.5-4.3 8.5-8.5z" fill="#f59e0b"/><circle cx="12" cy="11" r="2.6" fill="#3b82f6"/></svg>`
    },
    {
      id: "crown",
      name: "\u8FF7\u4F60\u738B\u51A0",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M4 17h16l-2-8-3.5 4.5L12 6l-2.5 7.5L6 9z" fill="#f59e0b" stroke="#f59e0b" stroke-width="1.2" stroke-linejoin="round"/><circle cx="4" cy="8.5" r="1.4" fill="#fef08a"/><circle cx="12" cy="5.5" r="1.4" fill="#fef08a"/><circle cx="20" cy="8.5" r="1.4" fill="#fef08a"/><rect x="4" y="16.5" width="16" height="2" rx="1" fill="#d97706"/></svg>`
    },
    {
      id: "sprout",
      name: "\u7075\u611F\u8C46\u82BD",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 21v-7.5" stroke="#059669" stroke-width="2.6" stroke-linecap="round"/><path d="M12 13.5c-4 0-7-2-7-5.5c4 0 7 2 7 5.5z" fill="#34d399"/><path d="M12 13.5c4 0 7-2.5 7-6.5c-4 0-7 2.5-7 6.5z" fill="#10b981"/></svg>`
    },
    {
      id: "bolt",
      name: "\u95EA\u7535\u5929\u7EBF",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M13 2.5L4.5 13.5h5.5l-2 7.5l10.5-11h-5.5l2-7.5z" fill="#eab308" stroke="#ca8a04" stroke-width="0.8" stroke-linejoin="round"/></svg>`
    },
    {
      id: "wings",
      name: "\u6D6E\u7A7A\u7FBD\u7FFC",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M3 11c3-4 7.5-3 8.5 1.5c-2.5 1-5 2.5-7 4.5c-1-1.8-1.5-4-1.5-6z" fill="#93c5fd"/><path d="M21 11c-3-4-7.5-3-8.5 1.5c2.5 1 5 2.5 7 4.5c1-1.8 1.5-4 1.5-6z" fill="#60a5fa"/></svg>`
    },
    {
      id: "key",
      name: "\u53D1\u6761\u65CB\u94AE",
      svg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9.5" r="5.5" stroke="#f59e0b" stroke-width="2.4"/><line x1="12" y1="15" x2="12" y2="21.5" stroke="#f59e0b" stroke-width="2.4" stroke-linecap="round"/><circle cx="9" cy="9.5" r="1.4" fill="#f59e0b"/><circle cx="15" cy="9.5" r="1.4" fill="#f59e0b"/></svg>`
    }
  ];

  // reference/sprite-3d/src/ui/toast.js
  var toastTimer = null;
  function showToast(text) {
    const toast = document.getElementById("toast-msg");
    if (!toast) return;
    toast.textContent = text;
    toast.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2400);
  }

  // reference/sprite-3d/src/core/exporter.js
  function renderSpriteTo1024Canvas(inst, renderer, canvas) {
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
    const outCanvas = document.createElement("canvas");
    outCanvas.width = 1024;
    outCanvas.height = 1024;
    outCanvas.getContext("2d").drawImage(canvas, 0, 0, 1024, 1024);
    renderer.setPixelRatio(prevPixelRatio);
    renderer.setSize(prevWidth, prevHeight, false);
    return outCanvas;
  }
  function exportSpritePNG(inst, renderer, canvas) {
    const exportCanvas = renderSpriteTo1024Canvas(inst, renderer, canvas);
    const link = document.createElement("a");
    link.download = `sprite-3d-${inst.cloudDef.name}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
    showToast(`\u{1F4F8} \u5DF2\u5BFC\u51FA\u3010${inst.cloudDef.name}\u30111024px \u9AD8\u6E05\u900F\u660E PNG`);
  }

  // reference/sprite-3d/src/ui/pill-slider.js
  function setupPillSlider(container, options = {}) {
    const min = parseFloat(options.min !== void 0 ? options.min : container.dataset.min || 0);
    const max = parseFloat(options.max !== void 0 ? options.max : container.dataset.max || 1);
    const step = parseFloat(options.step !== void 0 ? options.step : container.dataset.step || 0.01);
    const label = options.label || container.dataset.label || "";
    const formatValue = options.formatValue || ((val) => {
      if (options.isPercent) return Math.round(val) + "%";
      return val.toFixed(2);
    });
    const onChange = options.onChange || (() => {
    });
    let currentValue = parseFloat(options.value !== void 0 ? options.value : container.dataset.value || min);
    container.className = "pill-slider";
    container.innerHTML = `
        <div class="pill-slider-fill">
            <div class="pill-slider-cursor"></div>
        </div>
        <span class="pill-slider-label">${label}</span>
        <span class="pill-slider-val">${formatValue(currentValue)}</span>
    `;
    const fillEl = container.querySelector(".pill-slider-fill");
    const valEl = container.querySelector(".pill-slider-val");
    function updateVisual(val, triggerCallback = false) {
      currentValue = Math.min(max, Math.max(min, val));
      if (step > 0) {
        const stepsCount = Math.round((currentValue - min) / step);
        currentValue = parseFloat((min + stepsCount * step).toFixed(4));
      }
      const pct = Math.min(100, Math.max(0, (currentValue - min) / (max - min) * 100));
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
    container.addEventListener("pointerdown", (e) => {
      isDragging = true;
      try {
        container.setPointerCapture(e.pointerId);
      } catch (err) {
      }
      container.classList.add("dragging");
      handlePointer(e);
    });
    container.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      handlePointer(e);
    });
    const stopDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove("dragging");
    };
    container.addEventListener("pointerup", stopDrag);
    container.addEventListener("pointercancel", stopDrag);
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? step : -step;
      updateVisual(currentValue + delta, true);
    }, { passive: false });
    return {
      getValue: () => currentValue,
      setValue: (v) => updateVisual(v, false)
    };
  }

  // reference/sprite-3d/src/ui/sculptor-modal.js
  function setupSculptorModal(state) {
    const {
      cloudScenes,
      renderer,
      canvas,
      getGlobalViewAngleMode
    } = state;
    const sculptorModal = document.getElementById("sculptor-modal");
    const sculptorModalCard = document.getElementById("sculptor-modal-card");
    const sculptViewportSlot = document.getElementById("sculpt-viewport-slot");
    const pillSliders = {};
    function initSculptorControls() {
      const morphConfigs = [
        { id: "pill-morph-sx", prop: "sx", label: "\u5BBD\u5EA6 X", min: 0.7, max: 1.35, step: 0.02 },
        { id: "pill-morph-sy", prop: "sy", label: "\u9AD8\u5EA6 Y", min: 0.7, max: 1.35, step: 0.02 },
        { id: "pill-morph-sz", prop: "sz", label: "\u539A\u5EA6 Z", min: 0.65, max: 1.4, step: 0.02 },
        { id: "pill-morph-feat", prop: "featScale", label: "\u7EC6\u8282\u6BD4\u4F8B", min: 0, max: 1.6, step: 0.05 }
      ];
      morphConfigs.forEach((cfg) => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        pillSliders[cfg.prop] = setupPillSlider(el, {
          label: cfg.label,
          min: cfg.min,
          max: cfg.max,
          step: cfg.step,
          value: 1,
          onChange: (val) => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (!inst) return;
            inst.cloudDef[cfg.prop] = val;
            inst.rebuildModel();
          }
        });
      });
      const eyeConfigs = [
        { id: "pill-eye-y", prop: "eyeY", label: "\u5782\u76F4\u9AD8\u4F4E", min: -0.55, max: 0.55, step: 0.02 },
        { id: "pill-eye-gap", prop: "eyeGap", label: "\u4E24\u773C\u95F4\u8DDD", min: 0.12, max: 0.38, step: 0.01 },
        { id: "pill-eye-scale", prop: "eyeScale", label: "\u773C\u775B\u7F29\u653E", min: 0.65, max: 1.45, step: 0.05 }
      ];
      eyeConfigs.forEach((cfg) => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        pillSliders[cfg.prop] = setupPillSlider(el, {
          label: cfg.label,
          min: cfg.min,
          max: cfg.max,
          step: cfg.step,
          value: cfg.prop === "eyeScale" ? 1 : 0.2,
          onChange: (val) => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            if (!inst) return;
            inst.cloudDef[cfg.prop] = val;
            inst.rebuildModel();
          }
        });
      });
      const addonGrid = document.getElementById("addon-grid");
      if (addonGrid) {
        addonGrid.innerHTML = "";
        EXTRA_ADDONS.forEach((add) => {
          const btn = document.createElement("button");
          btn.dataset.addon = add.id;
          btn.title = add.name;
          btn.className = "addon-btn w-9 h-9 rounded-2xl bg-[hsla(0,0%,96%,1)] text-[hsla(0,0%,35%,1)] transition flex items-center justify-center cursor-pointer hover:bg-[hsla(0,0%,91%,1)] p-1.5";
          btn.innerHTML = add.svg || `<span class="text-xs">${add.name.slice(0, 2)}</span>`;
          btn.addEventListener("click", () => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            inst.cloudDef.addon = add.id;
            inst.rebuildModel();
            inst.triggerPokeBounce(0.08);
            syncSculptorUI();
          });
          addonGrid.appendChild(btn);
        });
      }
      const palGrid = document.getElementById("palette-grid");
      if (palGrid) {
        palGrid.innerHTML = "";
        PALETTES.forEach((pal, pIdx) => {
          const btn = document.createElement("button");
          btn.dataset.pidx = pIdx;
          btn.title = pal.name;
          btn.className = "pal-btn";
          btn.style.background = `linear-gradient(135deg, ${pal.main} 55%, ${pal.shade} 55%)`;
          btn.addEventListener("click", () => {
            const inst = cloudScenes[state.activeSculptCloudIdx];
            inst.cloudDef.paletteIdx = pIdx;
            inst.rebuildModel();
            inst.triggerPokeBounce(0.18);
            syncSculptorUI();
          });
          palGrid.appendChild(btn);
        });
      }
      document.querySelectorAll(".eye-type-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const inst = cloudScenes[state.activeSculptCloudIdx];
          const newType = btn.dataset.eye.trim();
          inst.morphToEyeExpression(newType);
          syncSculptorUI(newType);
        });
      });
    }
    initSculptorControls();
    function openSculptorModal(cloudIdx) {
      state.activeSculptCloudIdx = cloudIdx;
      state.isSculptorOpen = true;
      const targetSlot = document.querySelectorAll(".cloud-slot")[cloudIdx];
      const vpEl = targetSlot ? targetSlot.querySelector(".sprite-viewport") || targetSlot : null;
      const fromRect = vpEl ? vpEl.getBoundingClientRect() : null;
      document.body.classList.add("sculptor-active");
      sculptorModal.classList.remove("hidden");
      sculptorModal.classList.add("flex");
      const inst = cloudScenes[state.activeSculptCloudIdx];
      const viewAngleMode = getGlobalViewAngleMode();
      if (viewAngleMode === "front") {
        inst.userRotX = -inst.baseRotX;
        inst.userRotY = -inst.baseRotY;
        highlightSculptViewBtn("front");
      } else if (viewAngleMode === "side") {
        inst.userRotX = -inst.baseRotX;
        inst.userRotY = Math.PI * 0.5 - inst.baseRotY;
        highlightSculptViewBtn("side");
      } else {
        inst.userRotX = 0;
        inst.userRotY = 0;
        highlightSculptViewBtn("iso");
      }
      document.querySelectorAll(".cloud-slot").forEach((el, idx) => {
        el.classList.toggle("selected-slot", idx === cloudIdx);
      });
      syncSculptorUI();
      const toRect = sculptViewportSlot ? sculptViewportSlot.getBoundingClientRect() : null;
      if (fromRect && toRect) {
        state.heroTransition.active = true;
        state.heroTransition.progress = 0;
        state.heroTransition.direction = 1;
        state.heroTransition.fromRect = fromRect;
        state.heroTransition.toRect = toRect;
        state.heroTransition.targetIdx = cloudIdx;
        sculptorModal.style.opacity = "0";
        sculptorModal.style.transition = "opacity 0.24s ease-out";
        sculptorModalCard.style.transform = "none";
        requestAnimationFrame(() => {
          sculptorModal.style.opacity = "1";
        });
      }
    }
    function closeSculptorModal() {
      const targetSlot = document.querySelectorAll(".cloud-slot")[state.activeSculptCloudIdx];
      const toSlotRect = targetSlot ? (targetSlot.querySelector(".sprite-viewport") || targetSlot).getBoundingClientRect() : null;
      const fromViewRect = sculptViewportSlot ? sculptViewportSlot.getBoundingClientRect() : null;
      if (toSlotRect && fromViewRect) {
        state.heroTransition.active = true;
        state.heroTransition.progress = 1;
        state.heroTransition.direction = -1;
        state.heroTransition.fromRect = toSlotRect;
        state.heroTransition.toRect = fromViewRect;
        state.heroTransition.targetIdx = state.activeSculptCloudIdx;
        sculptorModal.style.transition = "opacity 0.22s ease-in";
        sculptorModal.style.opacity = "0";
        sculptorModalCard.style.transform = "none";
      } else {
        state.isSculptorOpen = false;
        document.body.classList.remove("sculptor-active");
        sculptorModal.classList.add("hidden");
        sculptorModal.classList.remove("flex");
        document.querySelectorAll(".cloud-slot").forEach((el) => el.classList.remove("selected-slot"));
      }
    }
    function highlightSculptViewBtn(mode) {
      document.querySelectorAll(".sculpt-view-btn").forEach((btn) => {
        const active = btn.dataset.sview === mode;
        btn.className = active ? "sculpt-view-btn h-6 px-2.5 rounded-full bg-[hsla(0,0%,25%,1)] text-white font-medium transition cursor-pointer flex items-center justify-center text-xs" : "sculpt-view-btn h-6 px-2.5 rounded-full hover:bg-[hsla(0,0%,92%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center text-xs";
      });
    }
    document.querySelectorAll(".sculpt-view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const mode = btn.dataset.sview;
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (!inst) return;
        if (mode === "iso") {
          inst.userRotX = 0;
          inst.userRotY = 0;
        } else if (mode === "front") {
          inst.userRotX = -inst.baseRotX;
          inst.userRotY = -inst.baseRotY;
        } else if (mode === "side") {
          inst.userRotX = -inst.baseRotX;
          inst.userRotY = Math.PI * 0.5 - inst.baseRotY;
        } else if (mode === "back") {
          inst.userRotX = -inst.baseRotX;
          inst.userRotY = Math.PI - inst.baseRotY;
        }
        inst.triggerPokeBounce(0.18);
        highlightSculptViewBtn(mode);
      });
    });
    function syncSculptorUI(overrideEyeType = null) {
      const inst = cloudScenes[state.activeSculptCloudIdx];
      if (!inst) return;
      const def = inst.cloudDef;
      const badgeIdx = document.getElementById("sculpt-badge-index");
      if (badgeIdx) badgeIdx.textContent = `#${String(def.id).padStart(2, "0")}`;
      const cloudTitle = document.getElementById("sculpt-cloud-title");
      if (cloudTitle) cloudTitle.textContent = def.name;
      const cloudCat = document.getElementById("sculpt-cloud-category");
      if (cloudCat) cloudCat.textContent = getSpriteTaxonomy(def);
      if (pillSliders.sx) pillSliders.sx.setValue(def.sx || 1);
      if (pillSliders.sy) pillSliders.sy.setValue(def.sy || 1);
      if (pillSliders.sz) pillSliders.sz.setValue(def.sz || 1);
      if (pillSliders.featScale) pillSliders.featScale.setValue(def.featScale !== void 0 ? def.featScale : 1);
      if (pillSliders.eyeY) pillSliders.eyeY.setValue(def.eyeY !== void 0 ? def.eyeY : 0);
      if (pillSliders.eyeGap) pillSliders.eyeGap.setValue(def.eyeGap !== void 0 ? def.eyeGap : 0.2);
      if (pillSliders.eyeScale) pillSliders.eyeScale.setValue(def.eyeScale !== void 0 ? def.eyeScale : 1);
      document.querySelectorAll(".addon-btn").forEach((btn) => {
        const active = btn.dataset.addon === (def.addon || "none");
        btn.classList.toggle("bg-white", active);
        btn.classList.toggle("shadow-sm", active);
        btn.classList.toggle("scale-105", active);
        btn.classList.toggle("bg-[hsla(0,0%,96%,1)]", !active);
        btn.classList.toggle("opacity-100", active);
        btn.classList.toggle("opacity-60", !active);
      });
      document.querySelectorAll(".pal-btn").forEach((btn) => {
        const active = Number(btn.dataset.pidx) === def.paletteIdx;
        btn.style.boxShadow = active ? "0 0 0 2px #fff, 0 0 0 4px hsla(0,0%,35%,1)" : "0 1px 3px hsla(0, 0%, 0%, 0.10)";
      });
      const activeEye = overrideEyeType || (def.eyeType === "pill" ? "normal" : def.eyeType || "normal");
      document.querySelectorAll(".eye-type-btn").forEach((btn) => {
        const active = btn.dataset.eye.trim() === activeEye;
        btn.classList.toggle("scale-110", active);
        btn.classList.toggle("bg-black", active);
        btn.classList.toggle("bg-[#222226]", !active);
        btn.classList.toggle("opacity-100", active);
        btn.classList.toggle("opacity-50", !active);
        btn.classList.toggle("shadow-md", active);
      });
    }
    let isDraggingSculpt = false;
    let sculptDragMoved = false;
    let scStartX = 0, scStartY = 0;
    sculptViewportSlot.addEventListener("pointerdown", (e) => {
      isDraggingSculpt = true;
      sculptDragMoved = false;
      scStartX = e.clientX;
      scStartY = e.clientY;
      try {
        sculptViewportSlot.setPointerCapture(e.pointerId);
      } catch (err) {
      }
    });
    sculptViewportSlot.addEventListener("pointermove", (e) => {
      if (!isDraggingSculpt) return;
      const dx = e.clientX - scStartX;
      const dy = e.clientY - scStartY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) sculptDragMoved = true;
      const inst = cloudScenes[state.activeSculptCloudIdx];
      if (inst) {
        inst.userRotY += dx * 0.012;
        inst.userRotX = THREE.MathUtils.clamp(inst.userRotX + dy * 0.012, -0.8, 0.8);
      }
      scStartX = e.clientX;
      scStartY = e.clientY;
    });
    sculptViewportSlot.addEventListener("pointerup", () => {
      if (isDraggingSculpt && !sculptDragMoved) {
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (inst) inst.triggerPokeBounce();
      }
      isDraggingSculpt = false;
    });
    sculptViewportSlot.addEventListener("wheel", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const inst = cloudScenes[state.activeSculptCloudIdx];
      if (!inst) return;
      if (!inst.viewZoom) inst.viewZoom = 1;
      const factor = e.deltaY < 0 ? 1.09 : 0.91;
      inst.viewZoom = THREE.MathUtils.clamp(inst.viewZoom * factor, 0.55, 2.6);
      inst.triggerPokeBounce(0.02);
    }, { passive: false });
    const sculptPokeBtn = document.getElementById("btn-sculpt-poke");
    if (sculptPokeBtn) {
      sculptPokeBtn.addEventListener("click", () => {
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (inst) inst.triggerPokeBounce();
      });
    }
    const btnReset = document.getElementById("btn-sculpt-reset");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (!inst) return;
        const original = JSON.parse(JSON.stringify(INITIAL_SPRITES[state.activeSculptCloudIdx]));
        Object.assign(inst.cloudDef, original);
        inst.userRotX = 0;
        inst.userRotY = 0;
        inst.viewZoom = 1;
        inst.rebuildModel();
        inst.triggerPokeBounce(0.08);
        highlightSculptViewBtn("iso");
        syncSculptorUI();
        showToast("\u5DF2\u8FD8\u539F\u53C2\u6570");
      });
    }
    function getVisibleCloudIndices() {
      const indices = [];
      document.querySelectorAll(".cloud-slot").forEach((slot, idx) => {
        if (!slot.classList.contains("hidden")) indices.push(idx);
      });
      return indices.length > 0 ? indices : cloudScenes.map((_, i) => i);
    }
    const btnPrev = document.getElementById("btn-prev-cloud");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        const vis = getVisibleCloudIndices();
        const pos = vis.indexOf(state.activeSculptCloudIdx);
        const prevIdx = pos > 0 ? vis[pos - 1] : vis[vis.length - 1];
        openSculptorModal(prevIdx);
      });
    }
    const btnNext = document.getElementById("btn-next-cloud");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        const vis = getVisibleCloudIndices();
        const pos = vis.indexOf(state.activeSculptCloudIdx);
        const nextIdx = pos !== -1 && pos < vis.length - 1 ? vis[pos + 1] : vis[0];
        openSculptorModal(nextIdx);
      });
    }
    window.addEventListener("keydown", (e) => {
      if (!state.isSculptorOpen) return;
      if (e.key === "Escape") closeSculptorModal();
      else if (e.key === "ArrowLeft") {
        const p = document.getElementById("btn-prev-cloud");
        if (p) p.click();
      } else if (e.key === "ArrowRight") {
        const n = document.getElementById("btn-next-cloud");
        if (n) n.click();
      }
    });
    const btnClose = document.getElementById("btn-close-sculptor");
    if (btnClose) btnClose.addEventListener("click", closeSculptorModal);
    const btnDone = document.getElementById("btn-done-sculpt");
    if (btnDone) btnDone.addEventListener("click", closeSculptorModal);
    const btnOpenCloud = document.getElementById("btn-open-cloud-icon");
    if (btnOpenCloud) btnOpenCloud.addEventListener("click", () => openSculptorModal(0));
    const btnHeroCloud = document.getElementById("btn-hero-cloud");
    if (btnHeroCloud) btnHeroCloud.addEventListener("click", () => openSculptorModal(0));
    sculptorModal.addEventListener("click", (e) => {
      if (e.target === sculptorModal) {
        closeSculptorModal();
      }
    });
    sculptorModal.addEventListener("wheel", (e) => {
      if (e.target.closest(".custom-scroll")) {
        return;
      }
      e.preventDefault();
    }, { passive: false });
    const btnExport = document.getElementById("btn-export-png");
    if (btnExport) {
      btnExport.addEventListener("click", () => {
        const inst = cloudScenes[state.activeSculptCloudIdx];
        if (inst) exportSpritePNG(inst, renderer, canvas);
      });
    }
    return {
      openSculptorModal,
      closeSculptorModal,
      getVisibleCloudIndices
    };
  }

  // reference/sprite-3d/src/ui/toolbar.js
  function setupToolbar(state) {
    const {
      cloudScenes,
      cloudGridEl,
      setGlobalViewAngleMode,
      getVisibleCloudIndices
    } = state;
    const surveyBanner = document.getElementById("survey-header-banner");
    const btnToggleSurvey = document.getElementById("btn-toggle-survey");
    function updateSurveySelectedCount() {
      const checkedCount = document.querySelectorAll(".cloud-slot.survey-checked").length;
      const countEl = document.getElementById("survey-selected-count");
      if (countEl) {
        countEl.textContent = `\u5DF2\u9009 ${checkedCount} \u9879`;
      }
      document.querySelectorAll(".cloud-slot").forEach((slot) => {
        const tick = slot.querySelector(".survey-tick-icon");
        if (tick) {
          if (slot.classList.contains("survey-checked")) {
            tick.className = "survey-tick-icon w-4 h-4 rounded-full flex items-center justify-center transition bg-[hsla(0,0%,25%,1)] text-white text-xs";
          } else {
            tick.className = "survey-tick-icon w-4 h-4 rounded-full flex items-center justify-center transition bg-white text-transparent text-xs";
          }
        }
      });
    }
    updateSurveySelectedCount();
    function setFilterTab(filter) {
      document.querySelectorAll(".cloud-slot").forEach((slot) => {
        const tag = slot.dataset.grouptag;
        if (filter === "all" || tag === filter) {
          slot.classList.remove("hidden");
        } else {
          slot.classList.add("hidden");
        }
      });
      document.querySelectorAll(".filter-btn").forEach((b) => {
        const isActive = b.dataset.filter === filter;
        b.className = isActive ? "filter-btn h-7.5 px-3 rounded-full bg-[hsla(0,0%,25%,1)] text-white font-medium transition cursor-pointer flex items-center justify-center text-xs" : "filter-btn h-7.5 px-3 rounded-full hover:bg-[hsla(0,0%,94%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center text-xs";
      });
    }
    function setSurveyPreviewMode(enable) {
      if (enable) {
        setFilterTab("survey10");
        document.body.classList.add("survey-preview-mode");
        if (surveyBanner) {
          surveyBanner.classList.remove("hidden");
          surveyBanner.classList.add("flex");
        }
        if (btnToggleSurvey) {
          btnToggleSurvey.className = "h-7.5 px-3 rounded-full bg-[hsla(0,0%,25%,1)] text-white text-xs font-medium transition cursor-pointer flex items-center justify-center";
        }
        updateSurveySelectedCount();
        showToast("\u5DF2\u8FDB\u5165\u804C\u4E1A\u8C03\u7814\u6A21\u5F0F");
      } else {
        document.body.classList.remove("survey-preview-mode");
        if (surveyBanner) {
          surveyBanner.classList.add("hidden");
          surveyBanner.classList.remove("flex");
        }
        if (btnToggleSurvey) {
          btnToggleSurvey.className = "h-7.5 px-3 rounded-full text-xs text-[hsla(0,0%,35%,1)] hover:bg-[hsla(0,0%,94%,1)] transition cursor-pointer flex items-center justify-center";
        }
      }
    }
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (document.body.classList.contains("survey-preview-mode") && btn.dataset.filter !== "survey10") {
          setSurveyPreviewMode(false);
        }
        setFilterTab(btn.dataset.filter);
      });
    });
    if (btnToggleSurvey) {
      btnToggleSurvey.addEventListener("click", () => {
        const nextState = !document.body.classList.contains("survey-preview-mode");
        setSurveyPreviewMode(nextState);
      });
    }
    const btnExitSurvey = document.getElementById("btn-exit-survey");
    if (btnExitSurvey) {
      btnExitSurvey.addEventListener("click", () => {
        setSurveyPreviewMode(false);
        setFilterTab("all");
        showToast("\u5DF2\u8FD4\u56DE\u5168\u90E8\u7CBE\u7075\u56FE\u9274");
      });
    }
    const angleBtns = {
      iso: document.getElementById("btn-angle-iso"),
      front: document.getElementById("btn-angle-front"),
      side: document.getElementById("btn-angle-side"),
      spin: document.getElementById("btn-angle-spin")
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
        btn.classList.toggle("bg-white", isActive);
        btn.classList.toggle("text-[#18181b]", isActive);
        btn.classList.toggle("shadow-2xs", isActive);
        btn.classList.toggle("text-[#71717a]", !isActive);
        btn.classList.toggle("hover:bg-white/60", !isActive);
      });
      const modeNames = {
        iso: "\u659C\u89C6\u89D2\u5EA6 (Isometric)",
        front: "\u6B63\u89C6\u89D2\u5EA6 (Front View)",
        side: "\u4FA7\u89C6\u89D2\u5EA6 (Side Profile)",
        spin: "360\xB0 \u81EA\u52A8\u5DE1\u822A"
      };
      showToast(modeNames[mode] || "");
    }
    if (angleBtns.iso) angleBtns.iso.addEventListener("click", () => setAngleMode("iso"));
    if (angleBtns.front) angleBtns.front.addEventListener("click", () => setAngleMode("front"));
    if (angleBtns.side) angleBtns.side.addEventListener("click", () => setAngleMode("side"));
    if (angleBtns.spin) angleBtns.spin.addEventListener("click", () => setAngleMode("spin"));
    const THEME_CONFIG = {
      white: { bg: "hsla(0, 0%, 100%, 1)", bodyClass: "" },
      sky: { bg: "hsla(0, 0%, 97%, 1)", bodyClass: "theme-sky" },
      night: { bg: "hsla(0, 0%, 12%, 1)", bodyClass: "theme-night" }
    };
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const themeKey = btn.dataset.theme;
        const cfg = THEME_CONFIG[themeKey] || THEME_CONFIG.white;
        document.body.classList.remove("theme-sky", "theme-night");
        document.documentElement.style.setProperty("--bg-canvas", cfg.bg);
        if (cfg.bodyClass) document.body.classList.add(cfg.bodyClass);
        document.querySelectorAll(".theme-btn").forEach((b) => {
          const isActive = b === btn;
          b.className = isActive ? "theme-btn h-6.5 px-2.5 rounded-full bg-white text-[hsla(0,0%,20%,1)] shadow-xs font-medium transition cursor-pointer flex items-center justify-center" : "theme-btn h-6.5 px-2.5 rounded-full hover:bg-[hsla(0,0%,93%,1)] text-[hsla(0,0%,40%,1)] transition cursor-pointer flex items-center justify-center";
        });
      });
    });
    const btnWave = document.getElementById("btn-wave-dance");
    if (btnWave) {
      btnWave.addEventListener("click", () => {
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
    const starCountEl = document.getElementById("github-star-count");
    if (starCountEl) {
      fetch("https://api.github.com/repos/atobelix/sprite-3d").then((res) => res.ok ? res.json() : null).then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          starCountEl.textContent = data.stargazers_count;
        }
      }).catch(() => {
      });
    }
    return {
      updateSurveySelectedCount
    };
  }

  // reference/sprite-3d/src/main.js
  function bootSpriteUniverse() {
    const canvas = document.getElementById("webgl-canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const cloudGridEl = document.getElementById("cloud-grid");
    const cloudScenes = [];
    let sculptorApi = null;
    let toolbarApi = null;
    const state = {
      cloudScenes,
      renderer,
      canvas,
      cloudGridEl,
      viewAngleMode: "iso",
      isSculptorOpen: false,
      activeSculptCloudIdx: 0,
      // 视口连续物理坐标插值状态 (彻底消除展开视觉断层)
      heroTransition: {
        active: false,
        progress: 0,
        direction: 1,
        fromRect: null,
        toRect: null,
        targetIdx: -1
      },
      getGlobalViewAngleMode: () => state.viewAngleMode,
      setGlobalViewAngleMode: (mode) => {
        state.viewAngleMode = mode;
      },
      getVisibleCloudIndices: () => sculptorApi ? sculptorApi.getVisibleCloudIndices() : []
    };
    window.__SPRITE_STATE__ = state;
    const mouseNDC = new THREE.Vector2(0, 0);
    const SPRITES_DATA = JSON.parse(JSON.stringify(INITIAL_SPRITES));
    function getCategoryLabel(tag) {
      const map = {
        "survey10": "\u8C03\u7814\u89D2\u8272",
        "fresh2": "\u65B0\u6536\u5F55",
        "food30": "\u7F8E\u98DF",
        "kept49": "\u7ECF\u5178",
        "landmark22": "\u5730\u6807",
        "creative20": "\u521B\u610F"
      };
      return map[tag] || "\u7CBE\u9009";
    }
    SPRITES_DATA.forEach((spriteDef, idx) => {
      const slot = document.createElement("div");
      slot.className = "sprite-slot cloud-slot group";
      if (spriteDef.defaultChecked) {
        slot.classList.add("survey-checked");
      }
      slot.dataset.index = idx;
      slot.dataset.grouptag = spriteDef.groupTag;
      slot.dataset.taxonomy = getSpriteTaxonomy(spriteDef);
      slot.innerHTML = `
            <!-- 3D \u7CBE\u7075\u89C6\u53E3 (\u6B63\u65B9\u5C45\u4E2D\uFF0C\u56DB\u5468\u7559\u767D\u5145\u8DB3\uFF0C\u4ECE\u5BB9\u6D6E\u7A7A\u547C\u5438) -->
            <div class="sprite-viewport w-full aspect-square flex items-center justify-center relative"></div>

            <!-- Bencho \u98CE\u683C\u5E95\u90E8\u6781\u7B80\u836F\u4E38\u80F6\u56CA (\u7EDF\u4E00 11px Medium\uFF0C\u9AD8\u7EA7\u514B\u5236\uFF0C\u60AC\u505C\u6DF1\u8272\u9AD8\u4EAE\u5FAE\u6D6E) -->
            <div class="sprite-pill-badge mt-1.5 px-3 py-0.5 rounded-full bg-[hsla(0,0%,96%,1)] text-[hsla(0,0%,35%,1)] text-[11px] font-medium tracking-tight pointer-events-none whitespace-nowrap shadow-xs">
                ${spriteDef.name}
            </div>
        `;
      cloudGridEl.appendChild(slot);
      const instance = new OriginalSpriteScene(spriteDef, slot);
      cloudScenes.push(instance);
      let isDraggingSlot = false;
      let dragMoved = false;
      let startX = 0, startY = 0;
      slot.addEventListener("pointerenter", () => {
        instance.hovered = true;
      });
      slot.addEventListener("pointerleave", () => {
        instance.hovered = false;
        isDraggingSlot = false;
      });
      slot.addEventListener("pointerdown", (e) => {
        isDraggingSlot = true;
        dragMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        try {
          slot.setPointerCapture(e.pointerId);
        } catch (err) {
        }
      });
      slot.addEventListener("pointermove", (e) => {
        if (!isDraggingSlot) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragMoved = true;
        instance.userRotY += dx * 0.012;
        instance.userRotX = THREE.MathUtils.clamp(instance.userRotX + dy * 0.012, -0.65, 0.65);
        startX = e.clientX;
        startY = e.clientY;
      });
      slot.addEventListener("pointerup", (e) => {
        if (isDraggingSlot && !dragMoved) {
          if (e.target.closest(".sprite-card-like")) {
            isDraggingSlot = false;
            return;
          }
          instance.triggerPokeBounce();
          if (document.body.classList.contains("survey-preview-mode")) {
            slot.classList.toggle("survey-checked");
            toolbarApi.updateSurveySelectedCount();
          } else {
            sculptorApi.openSculptorModal(idx);
          }
        }
        isDraggingSlot = false;
      });
    });
    let currentCategory = "all";
    const searchInput = document.getElementById("sprite-search-input");
    function applyUnifiedFilter() {
      const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      let visibleCount = 0;
      SPRITES_DATA.forEach((sp, i) => {
        const cardEl = cloudGridEl.children[i];
        if (!cardEl) return;
        const idxStr = String(i + 1);
        const matchesCategory = currentCategory === "all" || cardEl.dataset.taxonomy === currentCategory;
        const matchesSearch = !query || sp.name.toLowerCase().includes(query) || idxStr.includes(query) || sp.category && sp.category.toLowerCase().includes(query) || sp.desc && sp.desc.toLowerCase().includes(query) || sp.groupTag.toLowerCase().includes(query);
        const isVisible = matchesCategory && matchesSearch;
        cardEl.classList.toggle("hidden", !isVisible);
        if (isVisible) visibleCount++;
      });
    }
    const categoryTabs = document.querySelectorAll(".category-tab");
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        currentCategory = tab.dataset.cat;
        categoryTabs.forEach((t) => {
          const isActive = t.dataset.cat === currentCategory;
          if (isActive) {
            t.className = "category-tab px-3.5 py-1.5 rounded-lg bg-white text-[#18181b] shadow-xs text-xs font-semibold transition-all cursor-pointer select-none";
          } else {
            t.className = "category-tab px-3.5 py-1.5 rounded-lg hover:bg-white/60 text-[#71717a] hover:text-[#18181b] text-xs font-medium transition-all cursor-pointer select-none";
          }
        });
        applyUnifiedFilter();
      });
    });
    if (searchInput) {
      searchInput.addEventListener("input", applyUnifiedFilter);
      window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
      });
    }
    window.addEventListener("pointermove", (e) => {
      mouseNDC.x = e.clientX / window.innerWidth * 2 - 1;
      mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    sculptorApi = setupSculptorModal(state);
    toolbarApi = setupToolbar(state);
    const sculptViewportSlot = document.getElementById("sculpt-viewport-slot");
    const clock = new THREE.Clock();
    function renderViewportRect(scene, camera, rect, isDetail = false, customFrustum = null) {
      if (!rect || rect.width <= 0 || rect.height <= 0) return;
      const width = rect.width;
      const height = rect.height;
      const left = rect.left;
      const bottom = window.innerHeight - rect.top - height;
      const aspect = width / height;
      const baseFrustum = isDetail ? 2.45 : 3.1;
      const activeInst = cloudScenes[state.activeSculptCloudIdx];
      const zoom = isDetail && activeInst && activeInst.viewZoom ? activeInst.viewZoom : 1;
      const frustum = customFrustum !== null ? customFrustum : baseFrustum / zoom;
      camera.left = -frustum * aspect / 2;
      camera.right = frustum * aspect / 2;
      camera.top = frustum / 2;
      camera.bottom = -frustum / 2;
      camera.updateProjectionMatrix();
      const dimValue = !isDetail && (state.isSculptorOpen || state.heroTransition.active) ? 0.68 : 1;
      scene.traverse((obj) => {
        if (obj.isMesh && obj.material && obj.material.uniforms && obj.material.uniforms.uDim) {
          obj.material.uniforms.uDim.value = dimValue;
        }
      });
      renderer.setViewport(left, bottom, width, height);
      renderer.setScissor(left, bottom, width, height);
      renderer.render(scene, camera);
    }
    function renderViewportForSlot(scene, camera, domElement, isDetail = false) {
      if (domElement.classList.contains("hidden") || domElement.offsetParent === null) {
        return;
      }
      const vpEl = domElement.querySelector(".sprite-viewport") || domElement;
      const rect = vpEl.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth || rect.width === 0 || rect.height === 0) {
        return;
      }
      renderViewportRect(scene, camera, { left: rect.left, top: rect.top, width: rect.width, height: rect.height }, isDetail);
    }
    function animate() {
      requestAnimationFrame(animate);
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== Math.floor(width * renderer.getPixelRatio()) || canvas.height !== Math.floor(height * renderer.getPixelRatio())) {
        renderer.setSize(width, height, false);
      }
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      renderer.setScissorTest(false);
      renderer.clear();
      renderer.setScissorTest(true);
      const trans = state.heroTransition;
      const modalCard = state.isSculptorOpen ? document.getElementById("sculptor-modal-card") : null;
      const modalCardRect = modalCard && !modalCard.closest(".hidden") ? modalCard.getBoundingClientRect() : null;
      cloudScenes.forEach((inst, idx) => {
        const isSculptingThis = (state.isSculptorOpen || trans.active) && idx === state.activeSculptCloudIdx;
        inst.update(dt, elapsed, mouseNDC, state.viewAngleMode, isSculptingThis);
        if (trans.active && idx === trans.targetIdx) {
          return;
        }
        if (state.isSculptorOpen && modalCardRect) {
          const vpEl = inst.slotEl.querySelector(".sprite-viewport") || inst.slotEl;
          const r = vpEl.getBoundingClientRect();
          if (r.right > modalCardRect.left && r.left < modalCardRect.right && r.bottom > modalCardRect.top && r.top < modalCardRect.bottom) {
            return;
          }
        }
        renderViewportForSlot(inst.scene, inst.camera, inst.slotEl);
      });
      if (trans.active) {
        const duration = trans.direction === 1 ? 0.3 : 0.4;
        trans.progress += dt / duration * trans.direction;
        const rawP = THREE.MathUtils.clamp(trans.progress, 0, 1);
        const easeP = trans.direction === 1 ? 1 - Math.pow(1 - rawP, 3) : rawP * rawP * (3 - 2 * rawP);
        const realToRect = trans.direction === 1 && sculptViewportSlot ? sculptViewportSlot.getBoundingClientRect() : trans.toRect;
        const fromRect = trans.fromRect;
        const toRect = realToRect || trans.toRect;
        if (fromRect && toRect) {
          const curRect = {
            left: THREE.MathUtils.lerp(fromRect.left, toRect.left, easeP),
            top: THREE.MathUtils.lerp(fromRect.top, toRect.top, easeP),
            width: THREE.MathUtils.lerp(fromRect.width, toRect.width, easeP),
            height: THREE.MathUtils.lerp(fromRect.height, toRect.height, easeP)
          };
          const targetInst = cloudScenes[trans.targetIdx];
          if (targetInst) {
            const zoom = targetInst && targetInst.viewZoom ? targetInst.viewZoom : 1;
            const startFrustum = 3.1;
            const endFrustum = 2.45 / zoom;
            const curFrustum = THREE.MathUtils.lerp(startFrustum, endFrustum, easeP);
            renderViewportRect(targetInst.scene, targetInst.camera, curRect, true, curFrustum);
          }
        }
        if (rawP >= 1 && trans.direction === 1) {
          trans.active = false;
        } else if (rawP <= 0 && trans.direction === -1) {
          trans.active = false;
          state.isSculptorOpen = false;
          document.body.classList.remove("sculptor-active");
          document.getElementById("sculptor-modal").classList.add("hidden");
          document.getElementById("sculptor-modal").classList.remove("flex");
          document.querySelectorAll(".cloud-slot").forEach((el) => el.classList.remove("selected-slot"));
        }
      } else if (state.isSculptorOpen) {
        const activeInst = cloudScenes[state.activeSculptCloudIdx];
        if (activeInst) {
          renderViewportForSlot(activeInst.scene, activeInst.camera, sculptViewportSlot, true);
        }
      }
    }
    animate();
  }
  if (typeof window.THREE !== "undefined") {
    bootSpriteUniverse();
  } else {
    window.addEventListener("load", () => {
      if (typeof window.THREE !== "undefined") bootSpriteUniverse();
    });
  }
  return __toCommonJS(main_exports);
})();
//# sourceMappingURL=bundle.js.map
