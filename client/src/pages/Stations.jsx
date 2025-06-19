import React from 'react'
import Header from '../components/Header.jsx';
import StationCard from '../components/StationCard.jsx';

function Stations() {
  return (
    <>
        <Header />
        
        <h5 className='font-bold text-3xl'>Stations</h5>

        <div className='mt-16 grid grid-cols-1 gap-2'>
            <StationCard />
            <StationCard />
        </div>
    </>
  )
}

export default Stations