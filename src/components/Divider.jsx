import React from 'react'

const Divider = ({title}) => {
  return (
    <div className=" relative my-10">
    <div className=" absolute inset-0 flex items-center">
      <div className="w-9/12 border mx-auto border-slate-500 "></div>
    </div>
    <div className="relative font-cinzel text-4xl font-medium text-slate-500 flex justify-center">
      <span className="bg-white px-4">{title}</span>
    </div>
  </div>
  )
}

export default Divider