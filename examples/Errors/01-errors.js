import { format } from 'util';

const phrases = {
  "Hello": "Привет",
  "world": "мир"
};


function getPhrase(name) {
  if (!phrases[name]) {
    throw new Error("Нет такой фразы: " + name);
  }
  return phrases[name];
}


function makePage(url) {

  if (url !== 'index.html') {
    throw new Error("Нет такой страницы");
  }

  return format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}


var page = makePage('index.html');
console.log(page);
