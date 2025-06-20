import React from 'react'
import Header from '../components/Header.jsx';
import StationCard from '../components/StationCard.jsx';

function Stations() {
  return (
    <>
        <Header />
        
        <div className='flex items-center justify-between'>
          <h5 className='font-bold text-4xl'>Stations</h5>
          <div>

            <div className='flex items-center border rounded'>
              <img src="./src/assets/search.svg" alt="" className='h-5 w-5 mx-2 select-none' />
              <input type="text" name="station_search" id="" placeholder='Search' className='w-md px-2 py-2 focus:outline-0 focus:bg-stone-100 rounded text-md' />
            </div>

          </div>
        </div>
        

        <div className='mt-12 grid grid-cols-1 gap-2'>
            <StationCard obj={{
              name: "Terminal 1",
              operator: "BBL",
              address: "Calamba City, 4027 Laguna"
            }} />
        </div>
    </>
  )
}

export default Stations