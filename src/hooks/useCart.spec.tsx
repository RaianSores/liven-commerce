import userEvent from '@testing-library/user-event';

describe('useCart', () => {
    it('should return null if the item is undefined', () => {
      expect(localStorage.getItem('item')).toBeNull();
    });

    it('should return null if the item', () => {
        localStorage.setItem('item', '');
        expect(localStorage.getItem('item')).toBe('');
    })
})