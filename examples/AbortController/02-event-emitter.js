import {EventEmitter, once} from 'events'

const ee = new EventEmitter();
const ac = new AbortController();

once(ee, 'hello', {signal: ac.signal})
  .then(() => console.log('success'))
  .catch(() => console.log('error'));

setTimeout(() => {
  console.log('send event');
  ee.emit('hello');
}, 1000);

setTimeout(() => {
  ac.abort();
}, 500);
