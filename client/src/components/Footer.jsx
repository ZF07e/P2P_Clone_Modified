import React from 'react'
import {Link} from 'react-router-dom'

const links_class = 'flex flex-col gap-2 mt-2 text-stone-700 hover:cursor-pointer';

function Footer() {
  return (
    <footer className='grid grid-cols-4 gap-12 bg-stone-300 py-8 px-16'>
        <div className='grid grid-cols-1'>
            <div>
                <div>
                    <img src="./src/assets/P2P-Logo.png" alt="" />
                </div>
                <div>
                    <h5>P2P BUS PH.</h5>
                    <p>A premium point-to-point bus service in the Philippines</p>
                </div>
            </div>

            <div>
                <p>©2025 P2P Bus Philippines</p>
            </div>
        </div>

        <div>
            <h5 className={'font-medium'}>Navigation Links</h5>
            <div className={links_class}>
                <Link to={""}>About Us</Link>
                <Link to={""}>Contact</Link>
                <Link to={""}>Schedules</Link>
            </div>
        </div>

        <div>
            <h5 className={'font-medium'}>Legal & Compilance</h5>
            <div className={links_class}>
                <Link to={""}>Privacy Policy</Link>
            </div>
        </div>

        <div>
            <h5 className={'font-medium'}>Socials</h5>
            <div className="flex gap-4">
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer