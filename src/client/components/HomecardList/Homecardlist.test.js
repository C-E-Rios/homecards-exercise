import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';

import HomecardList from './HomecardList';

jest.mock ('axios');

afterEach (cleanup);

test ('HomecardList makes an API call and displays a list of homecards', async () => {
  const minimumPrice = 1500;
  const url = `/api/v1/homecards?minimumPrice=${minimumPrice}`;
  const mockData = [
    {
      id: 1,
      title: 'Test 1',
      description: null,
      currencySymbol: '$',
      imgSrc: 'http://somepic.com',
      pricePerMonth: 1500,
    },
  ];

  axios.get = jest.fn ().mockResolvedValueOnce ({
    data: {
      homecards: mockData
    },
  });

  const {getByTestId, getByLabelText} = render (<HomecardList />);
  const minimumPriceNode = getByLabelText (/Minimum price/i);

  fireEvent.change (minimumPriceNode, {
    target: {value: minimumPrice},
  });
  fireEvent.blur (minimumPriceNode);
  const homecards = await waitForElement (() => getByTestId ('homecards'));

  expect (axios.get).toHaveBeenCalledTimes (2); // Runs twice in dev mode?
  expect (axios.get).toHaveBeenCalledWith (url);
  expect (homecards.children.length).toEqual (mockData.length);
});
