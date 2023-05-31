import React from 'react';

import KeyComponentDemo from './KeyInputTwoAndNull';
import KeyInputTwoComponent from './KeyInputTwo';
import KeyLoopComponent from './KeyLoop';

const Form = () => {
  return (
    <div className="py-[20px]">
      <KeyInputTwoComponent />
      <KeyComponentDemo />
      <KeyLoopComponent />
    </div>
  );
};

export default Form;
