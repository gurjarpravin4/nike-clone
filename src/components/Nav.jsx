import React from 'react'
import { useState } from "react";
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <header className="header py-8 padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130}height={29}/>
        </a>
        <ul className={`${isNavOpen ? 'flex flex-col' : 'hidden lg:flex'} flex-1 justify-center items-center gap-16`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-slate-gray text-lg font-montserrat leading-normal">
              {item.label}
              </a>
            </li>
            ))}
        </ul>
        <div onClick={toggleNav}>
          <img src={hamburger} alt="Hamburger" className="lg:hidden block absolute" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
