import React from 'react';
import Home from '../app/page';

const NavBar = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <span className="ml-3 text-base text-black font-semibold" style={{ marginLeft: '10px' }}>
            DealWithSign.com
          </span>
        </a>

      </div>
    </header>
  );
};

export default NavBar;
