import React from 'react'

function OperatorCard({operator_name, image_name}) {
  return (
    <div className='grid grid-cols-[auto_1fr] border border-stone-500 py-2 px-4 rounded'>
        <img src={`./src/assets/Logo/${image_name}`} className='aspect-square w-10' alt="" />
        <h4 className='my-auto mx-2 text-xl font-bold text-(--dark-color)'>{operator_name}</h4>
    </div>
  )
}

export default OperatorCard