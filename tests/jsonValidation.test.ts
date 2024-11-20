
import { isValidJSON } from '../utils/validateJSON'; 

describe('JSON Validation', () => {
  it('should be a valid JSON schema', () => {
    const validSchema = {
      formTitle: "Project Requirements Survey",
      formDescription: "Please fill out this survey about your project needs",
      fields: [
        { id: "name", type: "text", label: "Full Name", required: true },
        { id: "email", type: "email", label: "Email Address", required: true }
      ]
    };
    
    const result = isValidJSON(validSchema);
    expect(result).toBe(true);
  });

  it('should throw error for invalid JSON', () => {
    const invalidSchema = {
      formTitle: "Missing Fields",
      fields: [
        { id: "name", type: "text", label: "Full Name", required: true }
      ]
    };
    
    expect(() => isValidJSON(invalidSchema)).toThrow("Invalid JSON schema");
  });
});
