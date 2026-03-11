/**
 * @jest-environment jsdom
 */

import { setupCounter } from '../src/counter.js';

describe('counter', () => {
  let button;

  beforeEach(() => {
    button = document.createElement('button');
    button.id = 'counter';
    document.body.appendChild(button);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('initializes with count 0', () => {
    setupCounter(button);
    expect(button.innerHTML).toBe('count is 0');
  });

  test('increments on click', () => {
    setupCounter(button);
    button.click();
    expect(button.innerHTML).toBe('count is 1');
    button.click();
    expect(button.innerHTML).toBe('count is 2');
  });
});
