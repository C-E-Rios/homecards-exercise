import {HTTP400Error} from '../utils/httpErrors';

export const checkMinimumPriceParam = (req, res, next) => {
  const {minimumPrice} = req.query;
  if (!minimumPrice) {
    throw new HTTP400Error ('Missing {minimumPrice} query parameter');
  }
  if (!Number (minimumPrice) || Number (minimumPrice) < 0) {
    throw new HTTP400Error (`{minimumPrice: ${minimumPrice}} is invalid`);
  }
  next ();
};
