import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMap } from 'react-leaflet';
import {useState} from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RouteCard from '../components/RouteCard.jsx';
import { MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';

// Set canvas view to center where marker is placed
function SetToPosition({position}){
  const map = useMap();
  useEffect(()=>{
    if(position){
      map.setView(position, map.getZoom());
    }
  }, [position])
}

// Main Function
function Station_Profile() {
  // Variables
  const station_param = useParams();
  const [station, setStation] = useState([]);
  const [routes, setRoutes] = useState([]);

  // Anonymous Function
  const fetch_station = async ()=>{
    const response = await axios.get('http://localhost:3000/api/stations');
    const stations = response.data.stations;
    
    // Searches the station in an array of station data.
    const searched_station = stations.find(obj => 
          obj.terminalName == station_param.id);

    setStation(searched_station);
  }
  
  const fetch_routes = async ()=>{
    const response = await axios.get('http://localhost:3000/api/routes');
    const routes_list = response.data.routes;

    const station_route = routes_list.find(obj => 
          obj.start_point === station_param.id);

    setRoutes(Array(station_route).map((obj)=>{
      return <RouteCard key={obj.id} obj={obj} />
    }))
  }

  // fetch data when page is rendered
  useEffect(()=>{
    fetch_station();
    fetch_routes();

    if(station.location){
        map.setView(station.location, 8);
    }
  }, []);

  return (
    <>
        <Header active_nav={"Stations"} />

        <section className='h-fit mx-16 mb-16'>
            <div className='flex flex-col gap-4'>
              <div>
                <div className='p-2 shadow-sm bg-stone-100 flex justify-between cursor-pointer'>
                  <div className='flex items-center'>
                    <div className='relative'>
                      <img src="../src/assets/p2pin.png" alt="" className='w-20 h-full' />
                    </div>
                    <div className='ms-4'>
                      <h4 className='font-medium text-xl flex items-center gap-2'>
                        <div className='select-none cursor-pointer'>
                          {station.terminalName} <span className='font-normal text-base'>{station.operator}</span>
                        </div>
                      </h4>
                      <div className='select-none'>{station.address}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <MapContainer center={[14.449548, 481.025391]} zoom={12} scrollWheelZoom={false} className='h-70 w-full z-1'>
                    <TileLayer attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={station.location ?? [0,0]}>
                        </Marker>

                        <SetToPosition position={station.location} />
                </MapContainer>
              </div>

            </div>

            <div className='mt-4'>
              <div className='bg-stone-200 px-4 py-2'>
                <h5 className="font-medium text-lg">Routes</h5>
              </div>
              <div className='grid grid-cols-1 gap-3 mt-2'>
                {routes}
              </div>
            </div>
        </section>

        <Footer active_page={"Stations"} />
    </>
  )
}

export default Station_Profile