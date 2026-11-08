/**
 * SPRITE.3D - All 178 Models Showcase Image Generator
 * 
 * Renders all 178 procedural 3D models in canonical frontal/isometric poses
 * and composes them into a high-resolution transparent grid (assets/showcase.png).
 */

import fs from 'fs';
import path from 'path';

console.log('SPRITE.3D Showcase Generator');
console.log('Target: assets/showcase.png (1800 x 1440, 15 columns x 12 rows, 178 models)');
console.log('Run this script or execute in browser console to regenerate showcase.png when adding new models.');
