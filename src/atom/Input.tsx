import React from 'react';

type Props = {
  label: string;
  placeholder: string;
  [x: string]: any;
};
const InputComponent: React.FC<Props> = ({ label, placeholder, ...rest }) => {
  return (
    <label>
      <span className="pr-[10px]">{label}:</span>
      <input
        placeholder={placeholder}
        className="px-[8px] py-[6px] border rounded-4"
        {...rest}
      />
    </label>
  );
};

export default InputComponent;
