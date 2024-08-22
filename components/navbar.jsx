
"use client" ;
import React,{useState} from 'react';
import NavLink from './navlink';
import Menuoverlay from './menuoverlay';

// main navbar/topbar 
const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen); 
    };

    return (
        <nav className='fixed mx-auto border-[#33353F] border top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 items-center justify-between mx-auto px-4 py-2'>
                <a href="/" className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </a>
                <div className='mobile-menu block md:hidden'>
                    <button
                        onClick={toggleNavbar}
                        className='flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        {navbarOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                <path d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        }
                    </button>
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <Menuoverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
