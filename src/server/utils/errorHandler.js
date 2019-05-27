import {HTTPClientError, HTTP404Error} from './httpErrors';

export const notFoundError = () => {
  throw new HTTP404Error ('Method not found.');
};

export const clientError = (error, res, next) => {
  if (error instanceof HTTPClientError) {
    res.status (error.statusCode).send (error.message);
  } else {
    next (error);
  }
};

export const serverError = (err, res) => {
  console.error (err);
  if (process.env.NODE_ENV === 'production') {
    res.status (500).send ('Internal Server Error');
  } else {
    res.status (500).send (err.stack);
  }
};
