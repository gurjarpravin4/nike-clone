import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="header py-8 padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
          src={headerLogo} 
          alt="Nike Logo" 
          width={130}
          height={29}
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className="text-slate-gray text-lg font-montserrat leading-normal"
              >
              {item.label}
              </a>
            </li>
            ))}
        </ul>
        <div>
          <img 
          src={hamburger} 
          alt="Hamburger"
          className="max-lg:block hidden"
          width={25}
          height={25}
          />
          
        </div>
      </nav>
    </header>
  )
}

export default Nav
