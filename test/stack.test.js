import { Stack } from '../src/stack.js';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  test('can push items to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
  });

  test('can pop items from the top', () => {
    stack.push('🥑');
    stack.push('🍕');
    const popped = stack.pop();
    expect(popped).toBe('🍕');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
  });
});
