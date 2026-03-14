import { jest } from '@jest/globals';

export const fetchData = jest.fn(() => 
  Promise.resolve({ name: 'John Doe' })
);
