import React from 'react';

const InputComponent: React.FC = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <label>
      <span className="pr-[10px]">{label}:</span>
      <input
        placeholder={placeholder}
        className="px-[8px] py-[6px] border rounded-4"
      />
    </label>
  );
};


export default InputComponent;