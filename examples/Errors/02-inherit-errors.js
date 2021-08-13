import { format } from 'util';

const phrases = {
  "Hello": "Привет",
  "world": "мир"
};

class PhraseError extends Error {
  constructor(message){
    super();
    this.message = message;
    this.name = 'PhraseError';
    Error.captureStackTrace(this, PhraseError);
  }
}

class HttpError extends Error {
  constructor(status, message){
    super();
    this.status = status;
    this.message = message;
    this.name = 'HttpError';
    Error.captureStackTrace(this, HttpError);
  }
}

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PhraseError("Нет такой фразы: " + name); // HTTP 500, уведомление!
  }
  return phrases[name];
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError(404, "Нет такой страницы"); // HTTP 404
  }
  return format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}

try {
  const page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
  }
}

