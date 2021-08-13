import { createServer } from 'http';

import {parse} from './lib/parser.js';
import crypto from 'crypto';

let counter = 0;

const sessions = {};

function createHash(counter){
    const hash = crypto.createHash('sha256');
  return hash.update(counter.toString()).digest("hex")
}


const server = createServer((req, res) => {

  const userHash = parse(req.headers.cookie).user;
  const hash = createHash(counter);


  if(!userHash){
    counter+=1;
    res.setHeader('Set-Cookie', `user=${hash}`);
    sessions[hash] = counter;
    return res.end(`user user${counter} created`);
  }

  res.end(`hello ${sessions[userHash]}`);
});

server.listen(8000);
