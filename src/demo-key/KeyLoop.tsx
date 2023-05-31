import React from 'react';
import InputComponent from '../atom/Input';
import DefaultSection from '../atom/DefaultSection';

const data = ['1', '2'];

const KeyLoopComponent = () => {
  return (
    <DefaultSection title="循环创建的组件">
      {data.map((i) => (
        <InputComponent key={i} id={i} />
      ))}
      {/**
       * will this input re-mount if I add a new item in the array above?
       */}
      <InputComponent id="3" />
    </DefaultSection>
  );
};

export default KeyLoopComponent;
