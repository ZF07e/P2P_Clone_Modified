import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const btn_animation = `hover:shadow-md/40 
                       hover:-translate-y-1 
                       active:bg-stone-200 
                       cursor-pointer 
                       transition-all`;

function PointRoute() {
  return (
    <>
        <Header active_nav={"Stations"} />
        <main className='md:px-12'>
          <section>
            <div>
              <button className='font-medium hover:underline cursor-pointer'>Go Back</button>
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

          <section>
            <div>
              <div>
                <h5>Departure</h5>
              </div>
              <div>
                <p>{'{Schedule}'}</p>
                <p>{'{Time - Time}'}</p>
              </div>
            </div>
          </section>

          <section>
            {/* Time List */}
          </section>
        </main>
    </>
  )
}

export default PointRoute