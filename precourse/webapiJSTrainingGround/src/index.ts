import http from 'http';
import fs from 'fs';

const getPathFrom = (url: string | undefined) => {
  if (!url || url.substring(1) === '') return 'index.html';
  return url.substring(1);
};

const getFileContentOr404 = (path: string) => {
  let name = path;
  if (!fs.existsSync(`./static/${name}`)) name = '404.html';

  return fs.readFileSync(`./static/${name}`, 'utf-8');
};

const server = http.createServer((req, res) => {
  const path = getPathFrom(req.url);
  if (path === 'favicon.ico') {
    res.statusCode = 404;
    res.end('');
    return;
  }

  const content = getFileContentOr404(path);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
