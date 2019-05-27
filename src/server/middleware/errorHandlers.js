import * as ErrorHandler from '../utils/errorHandler';

const handle404Error = app => {
  app.use (() => {
    ErrorHandler.notFoundError ();
  });
};

const handleClientError = app => {
  app.use ((error, req, res, next) => {
    ErrorHandler.clientError (error, res, next);
  });
};

const handleServerError = app => {
  app.use ((error, req, res, next) => {
    ErrorHandler.serverError (error, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
