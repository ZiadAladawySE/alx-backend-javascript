const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('b is negative', () => {
    assert.strictEqual(calculateNumber(1, -1), 0);
  });

  it('a and b negative', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('whole number float', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding down a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding up a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding down long decimal a and b', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('only one integar', () => {
    assert.strictEqual(calculateNumber(2), 2);
  });

  it('only one float to round up', () => {
    assert.strictEqual(calculateNumber(2.7), 3);
  });

  it('bool value', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
  });

  it('string number', () => {
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
  });

  it('non number argument', () => {
    assert.throws(() => calculateNumber(5.2, 'me'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
  });
});
