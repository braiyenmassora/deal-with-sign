import React from 'react';
import Home from '../app/page';

const NavBar = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-white rounded-full"
            viewBox="0 0 24 24"
          >
            <path d=""></path>
          </svg>
          <span className="ml-3 text-base text-white font-semibold">DealWithSign</span>
        </a>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Projects</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav> */}
      </div>
    </header>
  );
};

export default NavBar;
