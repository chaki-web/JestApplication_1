import { fetchData } from '../src/api.js';

describe('fetchData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('fetches successfully data from an API', async () => {
    const mockData = { id: 1, name: 'Leanne Graham' };
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const data = await fetchData();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(data).toEqual(mockData);
  });

  test('fetches erroneously data from an API', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
    });

    await expect(fetchData()).rejects.toThrow('Network response was not ok');
  });
});
