import homecardsController from './homecardsController';
import {checkMinimumPriceParam} from '../../middleware/validation';

export default [
  {
    path: '/api/v1/homecards',
    method: 'get',
    handler: [
      checkMinimumPriceParam,
      async (req, res) => {
        const {minimumPrice, limit = 30} = req.query;
        const result = await homecardsController.getHomecardList (
          minimumPrice,
          limit
        );
        res.status (200).send (result);
      },
    ],
  },
];
