import React from 'react'

function StationCard({obj}) {
  return (
    <div className='p-4 shadow-sm bg-stone-100 flex justify-between'>
        <div className='flex items-center'>

          <div className='relative'>
            <img src="./src/assets/Sample-img.jpeg" alt="" className='w-44 h-full' />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center font-medium bg-stone-100/40 select-none opacity-0 hover:opacity-100 transition-all cursor-pointer">
              View in Map
            </div>
          </div>

          <div className='ms-4'>
            <h4 className='font-medium text-2xl flex items-center gap-2'>{obj.name} <span className='font-normal text-base'>{`• ${obj.operator}`}</span></h4>
            <div>{obj.address}</div>
          </div>

        </div>

        <div className='flex items-center'>
          <button className='py-2 px-4 rounded bg-(--primary-color) font-medium text-stone-900 cursor-pointer shadow-sm transition-all
                             hover:opacity-90 active:bg-[#ecc85c]'>View Schedule</button>
        </div>

    </div>
  )
}

export default StationCard