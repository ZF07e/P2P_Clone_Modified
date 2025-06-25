import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/P2P-Logo.png'

const active_class = 'bg-stone-800 text-(--primary-color) ';
const link_class = 'transition-all underline-offset-4 rounded font-medium flex items-center px-4 py-2 ';

function Header({active_nav}) {
    const links = [
        <Link key="1" to={'/'} className={link_class + `${active_nav == "Home"? active_class : 'hover:underline'}`}>Home</Link>,
        <Link key="2" to={'/stations'} className={link_class + `${active_nav == "Stations"? active_class : 'hover:underline'}`}>Stations</Link>,
        <Link key="3" to={'/contact'} className={link_class + `${active_nav == "Contact"? active_class : 'hover:underline'}`}>Contact</Link>,
        <Link key="4" to={'#'} className={link_class + `${active_nav == "About"? active_class : 'hover:underline'}`}>About Us</Link>
    ];

    return (
        <header className='bg-(--primary-color) fixed top-0 left-0 right-0 h-18 flex items-center px-4 sm:px-8 py-4 justify-between z-100'>
            <div>
                <Link key="1" to={'#'} className='flex items-center hover:underline transition-all'>
                    <img src={logo} alt="" className='w-12' />
                    <h5 className="font-bold text-xl text-nowrap">P2P BUS PH.</h5>
                </Link>
            </div>
            <div>   
                <div className='md:hidden'>
                    <div className='px-2 py-3 rounded border border-(--primary-color) hover:border-(--dark-color) active:bg-stone-600/10 transition-all'>
                        <div className='w-7 h-5 flex flex-col justify-center gap-1'>
                            <span className='w-full h-1 bg-stone-900'></span>
                            <span className='w-full h-1 bg-stone-900'></span>
                            <span className='w-full h-1 bg-stone-900'></span>
                        </div>
                    </div>
                </div>
                <nav className='hidden gap-4 md:flex'>
                    {links} 
                </nav>       
            </div>
        </header>
    )
}

export default Header