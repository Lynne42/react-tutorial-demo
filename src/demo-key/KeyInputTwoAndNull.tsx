import React, { useState } from 'react';
import InputComponent from '../atom/Input';
import DefaultSection from '../atom/DefaultSection';
import DescTip from '../atom/DescTip';

const KeyInputTwoAndNull = () => {
  const [isReverse, setIsReverse] = useState(false);

  return (
    <DefaultSection title="根据某个state的不同，渲染组件或者是null">
      <DescTip>
        <span className="text-gray-900">问题现状：</span>
        当布尔值的state是true，渲染form-input组件或者是空,当布尔值的state是false时，渲染form-input组件或者是空，两个form-input组件的key根据state是相反的
      </DescTip>

      <DescTip>
        <span className="text-gray-900">问题原因：</span>
        React的虚拟DOM渲染原理，比较同一层级的元素，InputComponent组件的type相同，因为组件添加有key,此时检查key,当state值由true变成false时，InputComponent组件1的key由‘some-key’变成null,
        而InputComponent组件2的key由null变成'some-key',
        此时react新的虚拟DOM结构与原来的虚拟DOM结构相比较，组件类型和组件key均没有发生变化，因此两个组件是更改了位置，React对其进行位置的移动并复用组件实例
      </DescTip>

      <InputComponent
        key={isReverse ? 'some-key' : null}
        label="reverse"
        placeholder="reverse"
      />
      <br />
      <InputComponent
        key={!isReverse ? 'some-key' : null}
        label="isReverse"
        placeholder="isReverse"
      />

      <button
        className="mx-[10px] px-[16px] py-[6px] border rounded-4 bg-blue-500 text-white"
        onClick={() => setIsReverse(!isReverse)}
      >
        switch-reverse
      </button>
    </DefaultSection>
  );
};

export default KeyInputTwoAndNull;
