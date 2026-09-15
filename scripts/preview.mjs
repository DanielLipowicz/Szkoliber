import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const root = new URL('../docs/', import.meta.url);
const assets = new Map([
  ['/Szkoliber/', ['index.html', 'text/html; charset=utf-8']],
  ['/Szkoliber/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/Szkoliber/favicon.svg', ['favicon.svg', 'image/svg+xml']],
]);
createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/' || path === '/Szkoliber') {
    res.writeHead(302, { Location: '/Szkoliber/' }).end();
    return;
  }
  const asset = assets.get(path);
  if (!asset) return res.writeHead(404).end('Not found');
  try {
    const content = await readFile(new URL(asset[0], root));
    res.writeHead(200, { 'Content-Type': asset[1] }).end(content);
  } catch {
    res.writeHead(500).end('Unable to read preview asset');
  }
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://localhost:4173/Szkoliber/'));
