import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import "leaflet/dist/leaflet.css";
import {MapContainer, Popup, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import { Link } from 'react-router-dom';

function SHOWLAT(){
    const [position, setPosition] = useState();
    const map = useMapEvents({
        click(e){
            map.locate();
            console.log(e.latlng)
        },

    });

    console.log(position);
}

function customIcon(_iconsize){
  return L.icon({
    iconUrl: "./src/assets/mrk_.png",
    iconSize: _iconsize,
    iconAnchor: [22, 30],
    popupAnchor: [-6, -24],
  })
}

function Home() {
    const [marks, setMarks] = useState([]);

    const Markings = async ()=>{
        const response = await axios.get('http://localhost:3000/api/stations');
        const stations = response.data;

        setMarks(stations.map((obj, idx)=>{
            console.log(obj)
            return <Marker key={idx} position={obj.location} icon={customIcon()}>
                <Popup>
                    <div className='text-center w-full '>
                        <p>{obj.terminalName}</p>
                        <Link to={`stations/${obj.terminalName}`} 
                              className='border px-3 py-2 rounded border-(--dark-color) !text-(--dark-color)
                                         hover:bg-(--dark-color) hover:!text-(--primary-color) transition'>View Station</Link>
                    </div>
                </Popup>
            </Marker> 
        }));
    }

    useEffect(()=>{
        Markings();
    },[])

    return (
    <>
        <Header active_nav={"Home"} />
        <section className='grid grid-rows-[auto_auto_1fr] gap-4 py-4'>

            <div className='bg-[url(src/assets/manila.jpg)] bg-center bg-cover py-32'>
                <div className='flex items-center justify-center gap-2 bg-stone-900/50 py-2 text-stone-100'>   
                    <img src="./src/assets/P2P-Logo-Light.png" alt="" className='aspect-square w-18' />
                    <div>
                        <h5 className='font-black text-4xl select-none'>P2P BUS PHILIPPINES.</h5>
                        <p className='font-medium text-sm'>A premium point-to-point bus service in the Philippines</p>
                    </div>            
                </div>

            </div>
                
            <div className='px-4'>
                <hr className='text-(--dark-color)' />

                <div className='grid grid-cols-1 grid-rows-3 text-center my-20 gap-40 mx-4 md:grid-rows-1 md:grid-cols-3 md:gap-8 text-(--dark-color) md:my-8'>

                    <div>
                        <div className=''>
                            <h4 className='font-medium text-lg border-b '>Faster, Non-Stop Commute</h4>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <h4 className='font-medium text-lg border-b '>Guaranteed Seating & Comfort</h4>
                        </div>
                    </div>

                    <div>
                        <div className=''>   
                            <h4 className='font-medium text-lg border-b '>Reliable Schedule</h4>
                        </div>
                    </div>
                </div>
            </div>


        </section>

        <section className="bg-stone-100 h-dvh w-full p-8 gap-4 grid grid-cols-1 grid-rows-[1fr_auto_1fr] 
                            sm:grid-rows-[1fr_1fr] sm:grid-cols-[1fr_0.5fr]
                            md:gap-x-12 md:px-12 md:gap-y-0 
                            ">
            <MapContainer center={[14.449548, 481.025391]} zoom={7} className='z-1 order-2 sm: sm:order-1 sm:row-span-2 aspect-3/2 my-auto rounded'>
                <TileLayer attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

                </TileLayer>
                {marks}
                <SHOWLAT />
            </MapContainer>

            <div className='order-1 md:order-2 mt-auto'>
                <h5 className='font-black text-(--dark-color) text-2xl'>With over {marks.length} Stations across Metro Manila and nearby Provinces</h5>
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