import getLevel from '../app';

jest.mock('../src/js/http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should fetch', () => {
  const result = getLevel([1, 2, 3]);
  expect(result).toBe(6);
});
