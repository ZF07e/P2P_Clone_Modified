import React from 'react'
import Header from '../components/Header.jsx';
import StationCard from '../components/StationCard.jsx';


function Stations() {
  return (
    <>
        <Header active_nav={"Stations"} />
        <section className='mx-4 sm:mx-8 md:mx-12 lg:mx-16'>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4'>
            <h5 className='font-bold text-4xl'>Stations</h5>

            <div>
              <div className='flex items-center border rounded'>
                <img src="./src/assets/search.svg" alt="" className='h-5 w-5 mx-2 select-none' />
                <input type="text" name="station_search" id="" placeholder='Search' className='md:w-lg lg:w-md px-2 py-2 focus:outline-0 focus:bg-stone-100 rounded text-md' />
              </div>
            </div>
          </div>
          

          <div className='mt-4 grid grid-cols-1 gap-3'>
              <StationCard obj={{
                name: "Terminal 1",
                operator: "BBL",
                address: "Calamba City, 4027 Laguna"
              }} />

              <StationCard obj={{
                name: "Terminal 2",
                operator: "RRCG",
                address: "Calamba City, 4027 Laguna"
              }} />

              <StationCard obj={{
                name: "Terminal 3",
                operator: "Calamba P2P",
                address: "Calamba City, 4027 Laguna"
              }} />
          </div>
        </section>
    </>
  )
}

export default Stations