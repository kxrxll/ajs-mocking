import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should fetch', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
