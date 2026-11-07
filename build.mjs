import esbuild from 'esbuild';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

console.log('正在构建 bundle.js...');
const t0 = Date.now();

await esbuild.build({
    entryPoints: [path.join(__dirname, 'src/main.js')],
    bundle: true,
    outfile: path.join(distDir, 'bundle.js'),
    format: 'iife',
    globalName: 'SpriteUniverse',
    minify: false,
    sourcemap: true,
    target: ['es2020']
});

console.log(`构建完成: dist/bundle.js (耗时 ${Date.now() - t0}ms)`);
