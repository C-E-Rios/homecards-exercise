export class HTTPClientError extends Error {
  constructor (message) {
    if (message instanceof Object) {
      super (JSON.stringify (message));
    } else {
      super (message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace (this, this.constructor);
  }
}

export class HTTP400Error extends HTTPClientError {
  constructor (message = 'Bad Request') {
    super (message);
    this.statusCode = 400;
  }
}

export class HTTP404Error extends HTTPClientError {
  constructor (message = 'Not found') {
    super (message);
    this.statusCode = 404;
  }
}
