import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "leaflet/dist/leaflet.css";
import {MapContainer, Popup, TileLayer, Marker} from 'react-leaflet';

function Home() {
  return (
    <>
        <Header active_nav={"Home"} />

        <section className='h-dvh'>
            <div className='w-full bg-stone-100 flex flex-col items-center py-4 select-none gap-4'>
                <img src="./src/assets/bus-image2.png" alt="" className='w-82' />
            </div>

            <div className='text-center mt-8'>
                <h5 className='font-black text-4xl select-none text-(--dark-color) mt-16'>P2P BUS PHILIPPINES.</h5>
                <p className='font-medium text-sm text-stone-800'>A premium point-to-point bus service in the Philippines</p>
            </div>

            <div className='mt-8'>
                <div className='flex justify-center'>
                    <div>
                        <p className='ms-1 font-medium'>Find routes</p>
                        {/* <img src="" alt="" /> */}
                        <select type="text" list='route_list' className='rounded w-sm py-2 border-1 focus:outline-0'>
                            <option className='text-stone-300' value="" disabled selected>Select a route</option>
                            <option value="">Terminal 1</option>
                            <option value="">Terminal 2</option>
                            <option value="">Terminal 3</option>
                        </select>
                    </div> 
                </div>
            </div>
        </section>

        <section className="bg-stone-100 h-dvh flex justify-evenly items-center px-16">
            <MapContainer center={[14.449548, 481.025391]} zoom={8} className='h-120 w-120 z-1'>
                <TileLayer attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

                </TileLayer>
            </MapContainer>

            <div className='flex flex-col gap-4'>
                <h5 className='font-black text-(--dark-color) text-2xl w-md'>With over (n) Stations across Metro Manila and nearby Provinces</h5>
                <p className='w-sm'>P2P buses offer convenient access to key destinations without the hassle of multiple stops.</p>
                <div>
                    <button className='px-8 py-2 font-medium bg-(--dark-color) text-(--primary-color) rounded'>View Stations</button>
                </div>
            </div>
        </section>  

        <section className='py-8 px-16 flex flex-col justify-center items-center'>
            <h5 className='font-black text-(--dark-color) text-2xl'>Meet Our Operators</h5>
            <p className='mt-2'>Get to know the trusted bus companies behind our point-to-point routes</p>
            <div className="grid grid-cols-3"></div>
        </section>

        <Footer />
    </>
  )
}

export default Home