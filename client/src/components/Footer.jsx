import React from 'react'
import {Link} from 'react-router-dom'

const links_class = 'flex flex-col gap-2 mt-2 text-stone-700 hover:cursor-pointer';


function Footer({active_page}) {

  const footer_nav = [<Link key={1} className={`${active_page == 'About'? 'hidden': 'hover:underline'}`} to={""}>About Us</Link>,
                      <Link key={2} className={`${active_page == 'Contact'? 'hidden': 'hover:underline'}`} to={"/contact"}>Contact</Link>,
                      <Link key={3} className={`${active_page == 'Stations'? 'hidden': 'hover:underline'}`} to={"/stations"}>Stations</Link>,
                      <Link key={4} className={`${active_page == 'Home'? 'hidden': 'hover:underline'}`} to={"/"}>Home</Link>
                     ];
  return (
    <footer className='w-full bg-stone-200 grid grid-cols-[25%_25%_25%_25%] grid-rows-[0.5fr_1fr_auto_auto] gap-y-8 pt-8 pb-4 px-4
                       md:grid-cols-4 md:grid-rows-[0.5fr_1fr_auto]
                       lg:grid-cols-[1fr_0.5fr_0.5fr_1fr] lg:grid-rows-[1fr_auto] lg:gap-4'>

        <div className='flex col-span-4 lg:col-span-1'>
            <div className=''>
                <img src="./src/assets/P2P-Logo.png" alt="" className='w-16 lg:w-20' />
            </div>
            <div>
                <h5 className='font-bold text-xl'>P2P BUS PH.</h5>
                <p className='text-sm w-xs  '>A premium point-to-point bus service in the Philippines</p>
            </div>
        </div>

        <div className='col-span-2 md:col-span-1'>
            <h5 className={'font-medium'}>Navigation Links</h5>
            <div className={links_class}>
                {footer_nav}
            </div>
        </div>

        <div className='col-span-2 md:col-span-1'>
            <h5 className={'font-medium'}>Legal & Compilance</h5>
            <div className={links_class}>
                <Link className="hover:underline" to={""}>Privacy Policy</Link>
            </div>
        </div>

        <div className='col-span-4 md:col-span-1'>
            <h5 className={'font-medium'}>Socials</h5>
            <div className="flex gap-4">
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
            </div>
        </div>

        <div className='col-span-4 flex items-end lg:mt-20'>
            <p className='text-sm'>©2025 P2P Bus Philippines</p>
        </div>

    </footer>
  )
}

export default Footer