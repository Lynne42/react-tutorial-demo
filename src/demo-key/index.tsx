import React, { useState } from 'react';

import KeyComponentDemo from './KeyInputTwoAndNull';
import KeyInputTwoComponent from './KeyInputTwo';

const Form = () => {
  return (
    <div className="py-[20px]">
      <KeyInputTwoComponent />
      <KeyComponentDemo />
    </div>
  );
};

export default Form;
