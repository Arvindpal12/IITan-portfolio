import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    
//   const toggleMenu = () => {
//     setShowMenu(prev => !prev);
//   };

    return (
        <nav className='flex flex-wrap justify-between md:item-center text-white px-10 pt-6 md:px-20'>
            <span className='text-xl font-bold tracking-wide '>Portfolio</span>
            <ul className={`${menu ? "black" : "hidden"}  mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

                <a href="#About"> <li className='text-md  text-white px-4
             py-2 rounded transition-all duration-300 ease-in-out hover:bg-indigo-900 hover:text-white hover:shadow-lg hover:scale-105 '>About</li></a>
                <a href="#Skills"> <li className="text-md  text-white px-4
               py-2 rounded transition-all duration-300 ease-in-out hover:bg-indigo-900 hover:text-white hover:shadow-lg hover:scale-105 ">Skills</li></a>
                <a href="#projects"> <li className="text-md  text-white px-4
               py-2 rounded transition-all duration-300 ease-in-out hover:bg-indigo-900 hover:text-white hover:shadow-lg hover:scale-105 ">Projects</li></a>
                <a href="#Footer"> <li className="text-md  text-white px-4
               py-2 rounded transition-all duration-300 ease-in-out hover:bg-indigo-900 hover:text-white hover:shadow-lg hover:scale-105 ">Contact</li></a>



            </ul>
            {showMenu ? (
                <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration -300' onClick={() => { openMenu(!menu); setShowMenu(showMenu) }} />
            ) : <RiCloseLine sixe={30} className='md:hidden absolute right-10 top-6 transition-all duration -300' />}
        </nav>
    )
}

export default Navbar
