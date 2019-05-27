import request from 'request-promise';
import getMadridMarkers from './madridMarkersProvider';

jest.mock ('request-promise');

describe ('madridMarkersProvider', () => {
  test ('Invalid non-JSON response', async () => {
    request.mockImplementation (() => 'Error');
    await expect (getMadridMarkers ()).rejects.toThrow (SyntaxError);
  });
});
