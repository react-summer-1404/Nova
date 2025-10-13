import AccentText from "./AccentText";
import React from 'react'

const Contex = ({beforeLabel,afterLabel ,text}) => {
  return (
  
<div className="text-right font-bold  text-4xl flex flex-col items-end">
<div className="flex">
  {<AccentText title={text} />}
  <h2>{beforeLabel}</h2>
</div>
<h2 className="max-w-md">
{afterLabel}   
</h2>
</div>
  )
}

export default Contex
