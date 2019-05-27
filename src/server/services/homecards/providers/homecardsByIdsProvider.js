import request from 'request-promise';

export default async ids => {
  const requestPromiseDefaults = {
    uri: `https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids?${ids}`,
    headers: {
      'User-Agent': 'Request-Promise',
    },
  };
  const response = await request (requestPromiseDefaults);
  return JSON.parse (response);
};
