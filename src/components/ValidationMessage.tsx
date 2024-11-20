import React from 'react';

const ValidationMessage: React.FC<{ message: string }> = ({ message }) => {
  return <p className="text-red-500">{message}</p>;
};

export default ValidationMessage;
export {};