import React from 'react';

const DescTip = React.memo(
  ({
    children,
    classname = '',
  }: {
    children: React.ReactNode;
    classname?: string;
  }) => {
    return (
      <div className={`text-sm text-gray-400 py-[6px] ${classname}`}>
        {children}
      </div>
    );
  }
);

export default DescTip;
