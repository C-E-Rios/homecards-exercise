import homecardsController from './homecardsController';

describe ('homecardsController', () => {
  test ('process homecard list and return required ids', async () => {
    const minimumPrice = 450;
    const limit = 2;
    const markers = [
      {id: 135210, relevance: 0.34781174792051595, minimumPrice: 250},
      {id: 130849, relevance: 0.27768312351793645, minimumPrice: 300},
      {id: 116096, relevance: 0.27636001069452309, minimumPrice: 604},
      {id: 130844, relevance: 0.27381320381198432, minimumPrice: 530},
      {id: 130847, relevance: 0.27381320381198432, minimumPrice: 575},
      {id: 157543, relevance: 0.51007436987319021, minimumPrice: 410},
      {id: 210460, relevance: 0.28044894700614981, minimumPrice: 450},
    ];

    const result = homecardsController.processHomecardListIds (
      markers,
      minimumPrice,
      limit
    );
    expect (result).toEqual ('ids[]=210460&ids[]=116096');
  });

  test ('filters markers by minimum price', async () => {
    const minimumPrice = 510;
    const markers = [
      {minimumPrice: 250},
      {minimumPrice: 500},
      {minimumPrice: 525},
    ];
    const result = homecardsController.filterMarkersByMinimumPrice (
      markers,
      minimumPrice
    );
    expect (result).toEqual ([{minimumPrice: 525}]);
  });

  test ('sorts markers by relevance', async () => {
    const markers = [
      {relevance: 0.23768312351793641},
      {relevance: 0.23768312351793645},
      {relevance: 0.23768312351793643},
    ];
    const expectedResult = [
      {relevance: 0.23768312351793645},
      {relevance: 0.23768312351793643},
      {relevance: 0.23768312351793641},
    ];

    const result = homecardsController.sortMarkersByRelevance (markers);
    expect (result).toEqual (expectedResult);
  });

  test ('limits markers by specified limit', async () => {
    const limit = 3;
    const markers = Array.from (Array (10).keys ());
    const result = homecardsController.getMarkersByLimit (markers, limit);
    expect (result.length).toEqual (limit);
  });

  test ("builds query string of markers' ids", async () => {
    const markers = [{id: 135210}, {id: 130849}, {id: 116096}];
    const result = homecardsController.buildHomecardListIdQueryString (markers);
    expect (result).toEqual ('ids[]=135210&ids[]=130849&ids[]=116096');
  });
});
