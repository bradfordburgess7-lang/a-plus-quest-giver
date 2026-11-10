import { cp, mkdir } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('public', 'dist/public', { recursive: true });
console.log('Built static A+ Quest Giver site into dist/');
