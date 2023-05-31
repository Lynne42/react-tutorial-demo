import React, { useState, useEffect } from 'react';
import InputComponent from '../atom/Input';
import DefaultSection from '../atom/DefaultSection';

const initData = ['1', '2'];

const KeyLoopComponent = () => {
  const [data, setData] = useState<string[]>(initData);

  useEffect(() => {
    setTimeout(() => {
      setData([...data, '3']);
    }, 0);
  }, []);

  return (
    <DefaultSection title="循环创建的组件">
      {data.map((i) => (
        <InputComponent label={i} key={i} id={i} classname="block" />
      ))}
      {/**
       * will this input re-mount if I add a new item in the array above?
       */}
      <InputComponent label={3} id="3" classname="block" />
    </DefaultSection>
  );
};

export default KeyLoopComponent;
