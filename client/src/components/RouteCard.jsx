import React from 'react'
import { Link } from 'react-router-dom'

function RouteCard({obj}) {
    console.log(obj)
  return (
    <Link to={`/stations/${obj.start_point}/${obj.id}`} className='w-full bg-stone-100 p-2 cursor-pointer
                    hover:-translate-x-1 hover:-translate-y-0.5 hover:shadow-md/20
                    active:bg-stone-200 transition-all duration-200'>
        <div className='flex items-center gap-2'>
            <div>
                <img src="../src/assets/pin2pin.png" className='w-18' alt="" />
            </div>
            <div className='grid grid-cols-2 w-full'>
                <div>
                    <h5 className="font-medium text-md">{`${obj.start_point} - ${obj.end_point}`}</h5>
                </div>
                <div className='flex flex-col ms-auto'>
                    <p className='text-sm'>{obj.schedule}</p>
                    <p className='text-sm'>{`${obj.departure_time[0]} - ${obj.departure_time[obj.departure_time.length - 1]}`}</p>
                </div>
            </div>
        </div>
        <div>

        </div>
    </Link>
  )
}

export default RouteCard