import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import P2PLogo from '../assets/P2P-Logo1.png';

function About() {
  return (
    <>

        <section>
            <div>
                <img src={P2PLogo} alt="" />
            </div>
            
            <article>
                <h4>About Us</h4>
                <p>The Premium Point-to-Point (P2P) Bus Service, formerly known as Express Connect, is an express bus service in the 
                   Philippines administered by the Department of Transportation and operated by private bus companies in partnership 
                   with the Land Transportation Franchising and Regulatory Board.</p>
            </article>
            <hr />
            <h4>History</h4>
            <article>
                <h5>2015</h5>
                <p>Introduced in March 2015, the service was initially available in Metro Manila connecting the city's suburbs to the central business districts, including the Makati CBD, Ortigas Center, and Bonifacio Global City.</p>
            </article>

            <article>
                <h5>2016</h5>
                <p>In February 2016, the express bus service to Ninoy Aquino International Airport was launched with the franchise awarded to Air Freight 2100 (UBE Express). The service runs 24 hours a day with scheduled stops at the SM Mall of Asia, Entertainment City, and the Makati CBD.</p>
            </article>

            <article>
                <h5>2017</h5>
                <p>In September 2017, the land transportation board announced services to Clark International Airport in Pampanga with three new routes provided by Genesis Transport.</p>
            </article>

            <article>
                <h5>2019</h5>
                <p>As of March 2019, the Department of Transportation's premium P2P bus service runs 31 routes across 52 stops in Metro Manila and nearby suburbs in the Greater Manila Area. Services also began operations in the Visayas and other areas in Luzon in the same year.</p>
            </article>

        </section>

    </>
  )
}

export default About