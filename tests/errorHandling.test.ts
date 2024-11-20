
import { validateField } from '../utils/validateField';

describe('Error Handling', () => {
  it('should return error for missing required field', () => {
    const field = { id: 'name', required: true, value: '' };
    const result = validateField(field);
    expect(result).toBe('This field is required');
  });

  it('should return error for invalid email', () => {
    const field = { id: 'email', required: true, value: 'invalid-email' };
    const result = validateField(field);
    expect(result).toBe('Please enter a valid email address');
  });
});
