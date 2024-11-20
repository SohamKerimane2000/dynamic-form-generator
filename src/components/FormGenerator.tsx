import React from 'react';
import { FormSchema } from '../types/FormSchema';

interface FormGeneratorProps {
  schema: FormSchema;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>
      <form>
        {schema.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block font-medium">
              {field.label}
            </label>
            {}
            {field.type === 'text' && (
              <input
                id={field.id}
                type="text"
                className="border p-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === 'email' && (
              <input
                id={field.id}
                type="email"
                className="border p-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === 'password' && (
              <input
                id={field.id}
                type="password"
                className="border p-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === 'number' && (
              <input
                id={field.id}
                type="number"
                className="border p-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
            {field.type === 'select' && (
              <select
                id={field.id}
                className="border p-2 w-full"
                required={field.required}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {field.type === 'radio' && (
              <div>
                {field.options?.map((option) => (
                  <div key={option.value}>
                    <input
                      id={option.value}
                      type="radio"
                      name={field.id}
                      value={option.value}
                      className="mr-2"
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            )}
            {field.type === 'textarea' && (
              <textarea
                id={field.id}
                className="border p-2 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
