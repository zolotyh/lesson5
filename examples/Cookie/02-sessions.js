import { createServer } from 'http';
import {parse} from './lib/parser.js';

let counter = 0;

const server = createServer((req, res) => {

  const user = parse(req.headers.cookie ?? '').user;

  if(!user){
    counter+=1;
    res.setHeader('Set-Cookie', `user=${counter}`);
    return res.end(`user user${counter} created`);
  }

  res.end(`hello ${user}`);
});

server.listen(8000);
