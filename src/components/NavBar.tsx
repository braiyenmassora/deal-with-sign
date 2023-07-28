
"use client"

import React, { useState } from 'react';
import Link from 'next/link'


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className='flex item-center justify-between relative'>
          <div className='px-4'>
            <a href='/' className='text-lg font-semibold text-primary block py-6'>DealWithSign</a>
          </div>
          <div className='flex items-center px-4'>
            <button
              id="humberger"
              name="humberger"
              type='button'
              className='block absolute right-4 lg:hidden'
              onClick={toggleMenu} // Toggle the menu when the button is clicked
            >
              <span className='w-[30px] h-[2px] my-2 block bg-black'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-black'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-black'></span>
            </button>
            <nav
              id='nav-menu'
              className={`absolute py-5 bg-white shadow-none rounded-none max-full w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <ul className='block lg:flex'>
                <li>
                  <Link href="/about" className='text-lg font-semibold text-primary py-2 mx-8 flex group-hover:text-primary'>About</Link>
                </li>
                <li>
                  <Link href="/projects" className='text-lg font-semibold text-primary py-2 mx-8 flex group-hover:text-primary'>Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
