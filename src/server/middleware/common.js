import logger from 'morgan';
import parser from 'body-parser';
import compression from 'compression';

export const handleLogging = router => {
  router.use (logger ('dev'));
};

export const handleBodyRequestParsing = router => {
  router.use (parser.urlencoded ({extended: true}));
  router.use (parser.json ());
};

export const handleCompression = router => {
  router.use (compression ());
};
