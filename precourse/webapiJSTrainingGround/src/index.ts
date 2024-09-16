import http from 'http';
import fs from 'fs';

const server = http.createServer((_req, res) => {
  const content = fs.readFileSync('./static/index.html', 'utf-8');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
