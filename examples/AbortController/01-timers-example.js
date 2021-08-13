import {setTimeout} from 'timers/promises';

const abortController = new AbortController();

const {signal} = abortController;

const promise1 = setTimeout(3000).then(() => {
  console.log('after 3 seconds');
});

const promise2 = setTimeout(5000, null, {signal}).then(() => {
  console.log('after 5 seconds');
}).catch((e) => {
  console.dir(e);
});

Promise.race([promise1, promise2]).then(() => {
  abortController.abort();
  console.log('finished');
});

