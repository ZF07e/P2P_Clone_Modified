import React from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TimeCard from '../components/TimeCard.jsx';
import { data, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const btn_animation = `hover:shadow-md/40 
                       hover:-translate-y-1 
                       active:bg-stone-200 
                       cursor-pointer 
                       transition-all`;



function PointRoute() {
  // Variables
  let station = useParams();
  let [route, setRoute] = useState([]);
  let [departureList, setDepartureList] = useState([]);

  // Fetch API and get route and departure time based on url param
  const setup_departure_array = (data)=>{
    const departure_array = data.departure_time.map((obj, idx)=><TimeCard key={idx} time={obj} />);
    setDepartureList(departure_array)
  }

  const fetch_route_time = async ()=>{
    const response = await axios.get(`http://localhost:3000/api/routes/${station.route_id}`);
    const fetched_data = response.data;
    
    setRoute(fetched_data);
    setup_departure_array(fetched_data);
  }

  const swap_route = async ()=>{
    const response = await axios.post('http://localhost:3000/routes/swap',
      {
        start_route_ID : route.id,
        end_route_ID: route.end_id
      }
    );

    setRoute(response.data)
    setup_departure_array(response.data);
  }

   useState(()=>{
      fetch_route_time();
   }, []);

  //Page
  return (
    <>
        <Header active_nav={"Stations"} />
        <main className='md:px-12 mb-16'>
          <section className='mx-2'>
            <div>
              <Link to={`/stations/${station.station_name}`} className='font-medium hover:underline cursor-pointer active:opacity-40'>
              <span className="material-symbols-outlined text-sm! text-justify">arrow_back_ios</span>Go Back</Link>
            </div>
          </section>

          <section className='w-full grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-x-2 gap-y-2 px-2 my-4'>
              <div className='order-1'>
                <h4>From:</h4>
                <div className={`mt-1 bg-stone-100 p-4 text-center rounded select-none border border-stone-200 ${btn_animation}`}>
                  <h5>{route.start_point}</h5>
                </div>
              </div>

              <button className={`order-2 bg-stone-100 px-4 py-2 mx-auto mt-auto text-(--dark-color) rounded ${btn_animation}`} onClick={()=>{swap_route()}}>&#8652;</button>

              <div className='order-3'>
                <h4>To:</h4>
                <div className={`mt-1 bg-stone-100 p-4 text-center rounded select-none border border-stone-200 ${btn_animation}`}>
                  <h5>{route.end_point}</h5>
                </div>
              </div>
          </section>

          <hr />

          <section className='grid grid-cols-2 grid-rows-1 my-2 bg-stone-100 px-4 py-1 text-(--dark-color)'>
            <div className='my-auto'>
              <h5 className='font-medium text-lg'>Departure</h5>
            </div>
            <div className='ms-auto text-end'>
              <p>{route.schedule}</p>
              <p>{route.departure_time? `${route.departure_time[0]} - ${route.departure_time[route.departure_time.length - 1]}` : ""}</p>
            </div>
          </section>

          <section className='mx-2'>
            <table className='w-full border-separate border-spacing-2'>
              <tbody className='gap-2'>
                {departureList}
              </tbody>
            </table>
            
          </section>
        </main>

        <Footer active_page={"Stations"} />
    </>
  )
}

export default PointRoute