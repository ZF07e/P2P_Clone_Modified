import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
        <Header active_nav={"Contact"} />
        <div className='flex flex-col items-center mb-5'>
            <img src="./src/assets/contacting.png" className='w-40' alt="" />
            <h5 className='font-bold text-4xl'>Contact us!</h5>
            <p>Share a tip or report an issue. We're listening.</p>
        </div>
        <section className='w-full flex justify-center items-center mb-40'>
            <form action="" className='bg-stone-100 border-1 p-8 w-full md:w-[90%] lg:w-[56%] rounded shadow-sm'>
                <div className='grid grid-rows-[1fr_auto_auto] gap-2'>
                    <div className='flex items-center mb-4'>
                        <img src="./src/assets/P2P-Logo.png" className='w-12' alt="" />
                        <h5 className='font-bold text-xl'>P2P BUS PH.</h5>
                    </div>

                    <div className='grid grid-rows-2 md:grid-rows-[auto] md:grid-cols-2 gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="email_input" className='font-medium'>Email</label>
                            <input id='email_input' type='email' placeholder='you@email.com' className='w-full mt-1 border-1 rounded px-2 py-1 focus:outline-0' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name_input" className='font-medium'>Name</label>
                            <input id='name_input' type="text" placeholder='Your name' className='w-full mt-1 border-1 rounded px-2 py-1 focus:outline-0' />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="textarea_input" className='font-medium'>Message</label>
                        <textarea name="" id="textarea_input" className='mt-1 resize-none border-1 h-40 rounded focus:outline-0 p-2' placeholder='Write your message here...'></textarea>
                        <div className='mt-4 flex justify-end'>
                            <button className='px-8 py-1 bg-(--primary-color) font-medium rounded cursor-pointer
                                                hover:bg-(--primary-color)/90 active:bg-(--primary-color)/75'>Send</button>
                        </div>
                    </div>
                </div>
            </form>            
        </section>

        <Footer active_page={"Contact"} />
    </>
  )
}

export default Contact