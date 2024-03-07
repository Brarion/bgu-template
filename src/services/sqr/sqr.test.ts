import { sqr } from "./sqr"

describe('sqr', () => {
  it('should return sql of positive number', () => {
    const result = sqr(2);

    expect(result).toBe(4);
  });

  it('should return sql of negative number', () => {
    const result = sqr(-2);

    expect(result).toBe(4);
  })

  it('should return sql of zero', () => {
    const result = sqr(0);

    expect(result).toBe(0);
  })

  it('should return sql of negative zero', () => {
    const result = sqr(-0);

    expect(result).toBe(0);
  })

  it('should return sql of NaN', () => {
    const result = sqr(Number.NaN);

    expect(result).toBe(Number.NaN);
  })

  it('should return sql of epsilon', () => {
    const result = sqr(Number.EPSILON);

    expect(result).toBe(4.930380657631324e-32);
  })

  it('should return sql of max safe integer', () => {
    const result = sqr(Number.MAX_SAFE_INTEGER);

    expect(result).toBe(8.112963841460666e+31);
  })

  it('should return sql of max value', () => {
    const result = sqr(Number.MAX_VALUE);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  })

  it('should return sql of min safe integer', () => {
    const result = sqr(Number.MAX_SAFE_INTEGER);

    expect(result).toBe(8.112963841460666e+31);
  })

  it('should return sql of min value', () => {
    const result = sqr(Number.MIN_VALUE);

    expect(result).toBe(0);
  })

  it('should return sql of positive infinity', () => {
    const result = sqr(Number.POSITIVE_INFINITY);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  })

  it('should return sql of negative infinity', () => {
    const result = sqr(Number.NEGATIVE_INFINITY);

    expect(result).toBe(Number.POSITIVE_INFINITY);
  })
})