import { createServer } from 'http';

const server = createServer((req, res) => {
  res.setHeader('Set-Cookie', 'test=test');
  res.setHeader('Set-Cookie', 'securedhttp=true; Expires=Wed, 21 Oct 2022 07:28:00 GMT; Secure; HttpOnly');
  console.dir(req.headers.cookie);
  res.end('hello world');
});

server.listen(8000);


