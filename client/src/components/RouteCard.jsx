import React from 'react'

function RouteCard() {
  return (
    <div className='w-full bg-stone-100 p-2 cursor-pointer
                    hover:-translate-x-1 hover:-translate-y-0.5 hover:shadow-md/20
                    active:bg-stone-200 transition-all duration-200'>
        <div className='flex items-center gap-2'>
            <div>
                <img src="../src/assets/route1.png" className='w-18' alt="" />
            </div>
            <div className='grid grid-cols-2 w-full'>
                <div>
                    <h5 className="font-medium text-md">{"{Terminal 1} - {Terminal 2}"}</h5>
                </div>
                <div className='flex flex-col ms-auto'>
                    <p className='text-sm'>{'Monday - Friday'}</p>
                    <p className='text-sm'>{'6:00 AM - 5:00 PM'}</p>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default RouteCard