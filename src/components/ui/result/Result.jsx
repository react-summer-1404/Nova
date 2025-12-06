import React from 'react'

const Result = ({currentItems ,totalCount}) => {
  
  return (
  
      <div className="lg:flex gap-2 hidden whitespace-nowrap">
      <span style={{ color: "var(--color-dark-purple)" }}>{totalCount}</span>
      <span className="text-black">از</span>
      <span style={{ color: "var(--color-dark-purple)" }}>
        {currentItems?.length}
      </span>
      <span className="text-black">نمایش نتیجه</span>
    </div>
  );
};

export default Result;
