import React, { useState } from 'react';

export default function Square({
  value,
}) {

  const handleClick = () => {}

  return (
    <button
      className="w-[40px] h-[40px] p-0 m-0 border-solid border border-black-900 font-bold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
