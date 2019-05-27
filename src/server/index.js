import express from 'express';

import {applyMiddleware, applyRoutes} from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';

const app = express ();
applyMiddleware (middleware, app);
applyRoutes (routes, app);
applyMiddleware (errorHandlers, app);

process.on ('uncaughtException', error => {
  console.log (error);
  process.exit (1);
});

process.on ('unhandledRejection', error => {
  console.log (error);
  process.exit (1);
});

const {PORT = 8080} = process.env;

app.listen (PORT, () => console.log (`Listening on port ${PORT}!`));
