import { getUserName } from '../src/userService.js';
import * as api from '../src/api.js';

// Tell Jest to use the manual mock from src/__mocks__/api.js
jest.mock('../src/api.js');

describe('userService', () => {
  test('getUserName returns the name from the mocked API', async () => {
    const name = await getUserName();
    expect(name).toBe('John Doe');
    expect(api.fetchData).toHaveBeenCalledTimes(1);
  });

  test('getUserName can handle a different mocked value', async () => {
    // We can also change the mock implementation per test
    api.fetchData.mockResolvedValueOnce({ name: 'Jane Doe' });
    
    const name = await getUserName();
    expect(name).toBe('Jane Doe');
    expect(api.fetchData).toHaveBeenCalledTimes(2);
  });
});
