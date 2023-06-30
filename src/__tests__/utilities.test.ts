import {heightPixel, widthPixel} from '../utilities';

jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({height: 800, width: 600}),
  },
}));
afterEach(() => {
  jest.clearAllMocks();
});
describe('responsive helper functions', () => {
  describe('heightPixel', () => {
    it('calculates the correct height in pixels', () => {
      const result = heightPixel(50);
      expect(result).toEqual(400); // 50% of 800 (mocked height)
    });
    it('returns 0 when percentage is 0', () => {
      const result = heightPixel(0);
      expect(result).toEqual(0);
    });
  });

  describe('widthPixel', () => {
    it('calculates the correct width in pixels', () => {
      const result = widthPixel(25);
      expect(result).toEqual(150); // 25% of 600 (mocked width)
    });
    it('returns 0 when percentage is 0', () => {
      const result = widthPixel(0);
      expect(result).toEqual(0);
    });
  });
});
