import React from 'react'
import {Link} from 'react-router-dom';

function StationCard({obj}) {
  return (
    <Link to={`/stations/${obj.name}`} className='p-2 shadow-sm bg-stone-100 flex justify-between cursor-pointer 
                    hover:-translate-x-1 hover:-translate-y-0.5 hover:shadow-md/20 
                    active:bg-stone-200 transition-all duration-200'>
        <div className='flex items-center'>
          <div className='relative'>
            <img src="../src/assets/p2pin.png" alt="" className='w-20 h-full' />
          </div>

          <div className='ms-4'>
            <h4 className='font-medium text-xl flex items-center gap-2'>
              <div className='select-none cursor-pointer hover:underline'>
                {obj.name} <span className='font-normal text-base'>{`• ${obj.operator}`}</span>
              </div>
            </h4>
            <div>{obj.address}</div>
          </div>
        </div>
    </Link>
  )
}

export default StationCard