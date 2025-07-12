import {useState, useEffect} from 'react'
import Header from '../components/Header.jsx';
import StationCard from '../components/StationCard.jsx';
import axios from 'axios';

function Stations() {
  const [stations, setStations] = useState([]);
  const [searchItem, setSearchItem] = useState();

  const fetchAPI = async ()=>{
    const response = await axios.get('http://localhost:3000/api/stations');
    setStations(response.data);
  }  
  useEffect(()=>{
    fetchAPI();
  }, []);

  const search_station = async ()=>{
    const response = await axios.get('http://localhost:3000/api/stations');
    const station_array = response.data;

    const searched_station = station_array.filter((obj)=>{
      return obj.terminalName.includes(searchItem, 0);
    });

    setStations(searched_station);
  }

  const getInput = (value)=>{
    if(!value){
      fetchAPI();
    }
    setSearchItem(value);
  }

  return (
    <>
        <Header active_nav={"Stations"} />
        <section className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4'>
            <h5 className='font-bold text-4xl'>Stations</h5>

            <div>
              <div className='flex items-center border rounded'>
                <img src="./src/assets/search.svg" alt="" className='h-5 w-5 mx-2 select-none' />
                <input type="text" name="station_search" onChange={(e)=>getInput(e.target.value)} placeholder='Search' className='w-full md:w-lg lg:w-md px-2 py-2 focus:outline-0 focus:bg-stone-100 rounded text-md' />
                <button onClick={(e)=>{search_station()}} className="px-3 py-2 cursor-pointer hover:bg-stone-100 active:bg-stone-200">Search</button>
              </div>
            </div>
          </div>


          <div className='mt-4 grid grid-cols-1 gap-3'>
              {
                stations.map((e)=>
                  <StationCard key={e.id} obj={{
                    name: e.terminalName,
                    operator: e.operator,
                    address: e.terminalName
                  }} />
                )
              }
          </div>
        </section>
    </>
  )
}

export default Stations