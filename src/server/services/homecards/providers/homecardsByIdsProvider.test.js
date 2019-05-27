import request from 'request-promise';
import getHomecardsByIds from './homecardsByIdsProvider';

jest.mock ('request-promise');

describe ('madridMarkersProvider', () => {
  // test('it should call API with a minimumPrice value', async () => {

  // });

  test ('an empty minimumPrice query parameter', async () => {
    const response = {
      homecards: [],
    };
    request.mockImplementation (() => JSON.stringify (response));
    const result = await getHomecardsByIds ('');
    expect (result).toEqual ({homecards: []});
  });

  test ('Invalid non-JSON response', async () => {
    request.mockImplementation (() => 'Error');
    await expect (getHomecardsByIds ()).rejects.toThrow (SyntaxError);
  });
});
