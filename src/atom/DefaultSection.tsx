import React from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
};
const DefaultSection: React.FC<Props> = ({ children, title = '' }) => {
  return (
    <div className="my-[20px] p-[10px] border ">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default DefaultSection;
