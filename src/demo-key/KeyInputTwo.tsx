import React, { useState } from 'react';
import InputComponent from '../atom/Input';
import DescTip from '../atom/DescTip';
import DefaultSection from '../atom/DefaultSection';

const KeyInputTwoComponent = () => {
  const [isCompany, setIsCompany] = useState(false);
  return (
    <DefaultSection title="根据某个state的状态不同，渲染不同的Input组件">
      <DescTip>
        <span className="text-gray-900">问题现状：</span>
        当布尔值的state改变时，渲染两个不同的form-input,但是不添加key等情况下，input并没有被先删除后创建，而是复用并重新渲染，导致input的输入值value并没有改变
      </DescTip>
      <DescTip>
        <span className="text-gray-900">问题原因：</span>
        React的虚拟DOM渲染原理，比较同一层级的元素，如果元素的type不同，则先删除后创建，
        如果type类型相同，则重新渲染(只更改需要修改的属性)
      </DescTip>
      <DescTip>
        <span className="text-gray-900">问题解决：</span>
        可以给Input组件添加不同的key属性，强制卸载组件
      </DescTip>
      <DescTip>
        <span className="text-gray-900">code demo：</span>
      </DescTip>
      <div className="text-sm text-blue-300"></div>
      {isCompany ? (
        <InputComponent
          label="Company"
          placeholder="Enter you company Tax ID"
        />
      ) : (
        <InputComponent
          label="Personal"
          placeholder="Enter you personal Tax ID"
        />
      )}
      <button
        className="mx-[10px] px-[16px] py-[6px] border rounded-4 bg-blue-500 text-white"
        onClick={() => setIsCompany(!isCompany)}
      >
        switch-company
      </button>
    </DefaultSection>
  );
};

export default KeyInputTwoComponent;
