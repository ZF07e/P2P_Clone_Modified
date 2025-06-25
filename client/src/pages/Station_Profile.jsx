import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RouteCard from '../components/RouteCard.jsx';
import StationCard from '../components/StationCard.jsx';
import { MapContainer, TileLayer } from 'react-leaflet';

function Station_Profile() {
  return (
    <>
        <Header active_nav={"Stations"} />

        <section className='h-fit mx-16 mb-16'>
            <div className='flex flex-col gap-4'>
              <div>
                <div className='p-2 shadow-sm bg-stone-100 flex justify-between cursor-pointer'>
                  <div className='flex items-center'>
                    <div className='relative'>
                      <img src="../src/assets/Sample-img.jpeg" alt="" className='w-36 h-full' />
                    </div>
                    <div className='ms-4'>
                      <h4 className='font-medium text-xl flex items-center gap-2'>
                        <div className='select-none cursor-pointer'>
                          {"{Terminal Name}"} <span className='font-normal text-base'>{`• {Operator}`}</span>
                        </div>
                      </h4>
                      <div className='select-none'>{'{Address}'}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <MapContainer center={[14.449548, 481.025391]} zoom={9} scrollWheelZoom={false} className='h-70 w-full z-1'>
                    <TileLayer attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

                    </TileLayer>
                </MapContainer>
              </div>

            </div>

            <div className='mt-4'>
              <div className='bg-stone-200 px-4 py-2'>
                <h5 className="font-medium text-lg">Routes</h5>
              </div>
              <div className='grid grid-cols-1 gap-3 mt-2'>
                <RouteCard />
                <RouteCard />
                <RouteCard />
                <RouteCard />
              </div>
            </div>
        </section>

        <Footer active_page={"Stations"} />
    </>
  )
}

export default Station_Profile