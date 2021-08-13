import { createServer } from 'http';

const server = createServer((req, res) => {
  res.statusCode = 500;
  res.end('hello');
});

server.listen(8000);
