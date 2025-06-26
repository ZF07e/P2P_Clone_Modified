import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "leaflet/dist/leaflet.css";
import {MapContainer, Popup, TileLayer, Marker} from 'react-leaflet';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <Header active_nav={"Home"} />
        <section className='h-dvh grid grid-cols-1 grid-rows-[1fr_auto_1fr] md:px-12'>

            <div className='select-none mt-auto'>
                <img src="./src/assets/bus-stop1.png" alt="" className='w-100 aspect-square mx-auto' />
            </div>

            <div className='text-center'>
                <h5 className='font-black text-4xl select-none text-(--dark-color)'>P2P BUS PHILIPPINES.</h5>
                <p className='font-medium text-sm text-stone-800'>A premium point-to-point bus service in the Philippines</p>
            </div>

            <div className='text-center'>
                <div className='mt-4'>
                    <select type="text" list='route_list' defaultValue={""} className='rounded py-2 border-1 focus:outline-0 w-[80%] sm:w-[70%] md:w-[50%] font-medium'>
                        <option className='text-stone-300' value="" disabled >Select a route</option>
                        <option value="">Terminal 1</option>
                        <option value="">Terminal 2</option>
                        <option value="">Terminal 3</option>
                    </select>
                </div>
            </div>
        </section>

        <section className="bg-stone-100 h-dvh w-full p-8 gap-4 grid grid-cols-1 grid-rows-[1fr_auto_1fr] 
                            sm:grid-rows-[1fr_1fr] sm:grid-cols-[1fr_0.5fr]
                            md:gap-x-12 md:px-12 md:gap-y-0 
                            ">
            <MapContainer center={[14.449548, 481.025391]} zoom={8} scrollWheelZoom={false} className='z-1 order-2 sm: sm:order-1 sm:row-span-2 aspect-3/2 my-auto rounded'>
                <TileLayer attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

                </TileLayer>
            </MapContainer>

            <div className='order-1 md:order-2 mt-auto'>
                <h5 className='font-black text-(--dark-color) text-2xl'>With over (n) Stations across Metro Manila and nearby Provinces</h5>
            </div>

            <div className='flex flex-col gap-4 order-3'>
                <p className=''>P2P buses offer convenient access to key destinations without the hassle of multiple stops.</p>
                <div>
                    <Link to={'/stations'} className='px-8 py-2 font-medium bg-(--dark-color) text-(--primary-color) rounded'>View Stations</Link>
                </div>
            </div>
        </section>  

        <section className='py-8 px-16 flex flex-col justify-center items-center'>
            <h5 className='font-black text-(--dark-color) text-2xl'>Meet Our Operators</h5>
            <p className='mt-2'>Get to know the trusted bus companies behind our point-to-point routes</p>
            <div className="grid grid-cols-3"></div>
        </section>

        <Footer active_page={'Home'} />
    </>
  )
}

export default Home