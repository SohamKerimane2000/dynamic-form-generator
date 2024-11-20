import React from 'react';
import ReactJson from 'react-json-view';

interface JSONEditorProps {
  json: object;
  onUpdate: (updatedJson: object) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, onUpdate }) => {
  return (
    <ReactJson
      src={json}
      onEdit={({ updated_src }) => onUpdate(updated_src)}
      theme="monokai"
      style={{ height: '100%', overflow: 'auto' }}
    />
  );
};

export default JSONEditor;
