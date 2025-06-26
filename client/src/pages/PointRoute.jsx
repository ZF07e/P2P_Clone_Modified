import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import TimeCard from '../components/TimeCard.jsx';

const btn_animation = `hover:shadow-md/40 
                       hover:-translate-y-1 
                       active:bg-stone-200 
                       cursor-pointer 
                       transition-all`;

function PointRoute() {
  return (
    <>
        <Header active_nav={"Stations"} />
        <main className='md:px-12 mb-16'>
          <section className='mx-2'>
            <div>
              <button className='font-medium hover:underline cursor-pointer active:opacity-40'>Go Back</button>
            </div>
          </section>

          <section className='w-full grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-x-2 gap-y-2 px-2 my-4'>
              <div className='order-1'>
                <h4>From:</h4>
                <div className={`mt-1 bg-stone-100 p-4 text-center rounded select-none ${btn_animation}`}>
                  <h5>Santa Clara Bulacan</h5>
                </div>
              </div>

              <button className={`order-2 bg-stone-100 px-4 py-2 mx-auto mt-auto text-(--dark-color) rounded ${btn_animation}`}>&#8652;</button>

              <div className='order-3'>
                <h4>To:</h4>
                <div className={`mt-1 bg-stone-100 p-4 text-center rounded select-none ${btn_animation}`}>
                  <h5>Caypombo Bulacan</h5>
                </div>
              </div>
          </section>

          <hr />

          <section className='grid grid-cols-2 grid-rows-1 my-2 bg-stone-100 px-4 py-1 text-(--dark-color)'>
            <div className='my-auto'>
              <h5 className='font-medium text-lg'>Departure</h5>
            </div>
            <div className='ms-auto text-end'>
              <p>{'{Schedule}'}</p>
              <p>{'{Time - Time}'}</p>
            </div>
          </section>

          <section className='mx-2'>
            <table className='w-full border-separate border-spacing-2'>
              <tbody className='gap-2'>
                <TimeCard time={"10:10 AM"} />
                <TimeCard time={"10:10 AM"} />
                <TimeCard time={"10:10 AM"} />
                <TimeCard time={"10:10 AM"} />
                <TimeCard time={"10:10 AM"} />
                <TimeCard time={"10:10 AM"} />
              </tbody>
            </table>
            
          </section>
        </main>

        <Footer active_page={"Stations"} />
    </>
  )
}

export default PointRoute