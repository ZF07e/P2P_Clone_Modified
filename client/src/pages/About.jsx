import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import P2PLogo from '../assets/P2P-Logo1.png';

function About() {
  return (
    <>  
        <Header active_nav={"About"} />
        <main className='md:mx-32 mb-16 text-(--dark-color)'>
            <section className='w-full py-4'>
                <img src={P2PLogo} className='w-23 mx-auto aspect-square' alt="p2p-logo" />
            </section>
            
            <article className='text-center'>
                <h4 className='font-medium text-2xl'>About Us</h4>
                <p className='mt-4'>The Premium Point-to-Point (P2P) Bus Service, formerly known as Express Connect, is an express bus service in the 
                   Philippines administered by the Department of Transportation and operated by private bus companies in partnership 
                   with the Land Transportation Franchising and Regulatory Board.</p>
            </article>
            <hr className='my-4' />
            <h4 className='font-medium text-2xl text-center mt-8'>History</h4>

            <section className='grid grid-cols-1 gap-8 mt-4'>
                <article className='border-1 p-4'>
                    <h5 className='font-medium text-lg'>2015</h5>
                    <p>Introduced in March 2015, the service was initially available in Metro Manila connecting the city's suburbs to the central business districts, including the Makati CBD, Ortigas Center, and Bonifacio Global City.</p>
                </article>

                <article className='border-1 p-4'>
                    <h5 className='font-medium text-lg'>2016</h5>
                    <p>In February 2016, the express bus service to Ninoy Aquino International Airport was launched with the franchise awarded to Air Freight 2100 (UBE Express). The service runs 24 hours a day with scheduled stops at the SM Mall of Asia, Entertainment City, and the Makati CBD.</p>
                </article>

                <article className='border-1 p-4'>
                    <h5 className='font-medium text-lg'>2017</h5>
                    <p>In September 2017, the land transportation board announced services to Clark International Airport in Pampanga with three new routes provided by Genesis Transport.</p>
                </article>

                <article className='border-1 p-4'>
                    <h5 className='font-medium text-lg'>2019</h5>
                    <p>As of March 2019, the Department of Transportation's premium P2P bus service runs 31 routes across 52 stops in Metro Manila and nearby suburbs in the Greater Manila Area. Services also began operations in the Visayas and other areas in Luzon in the same year.</p>
                </article>
            </section>

        </main>
        <Footer active_page={"About"} />
    </>
  )
}

export default About