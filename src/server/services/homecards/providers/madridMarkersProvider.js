import request from 'request-promise';

export default async () => {
  const requestPromiseDefaults = {
    uri: 'https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid',
    headers: {
      'User-Agent': 'Request-Promise',
    },
  };
  const response = await request (requestPromiseDefaults);
  return JSON.parse (response);
};
