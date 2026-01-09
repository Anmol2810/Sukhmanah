'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuIcon from "@/assets/menu.svg";
import logo from '@/assets/logo.png';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className='py-1'>
        <div className= "container">
          <div className = "flex items-center justify-between">
            <Image src = {logo} alt = "new logo" height={70} width={70}/>
            <button onClick={toggleMenu} className=" h-5 w-5 md:hidden cursor-pointer">
              <Image src={MenuIcon} alt="menu" className=" h-5 w-5 md:hidden"/>
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center capitalize">
              <a href='/'>home</a>
              <a href='/about'>about</a>
              <a href='/#services'>our services</a>
              {/* <a href='#'>blog</a> */}
              <button style={{
                backgroundColor: '#FFA0A0'
              }} className="text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Connect with us</button>
            </nav>        
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[88px] left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-white/20 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="container py-4 flex flex-col gap-4 capitalize text-black/60">
          <a href='/' onClick={closeMenu} className="hover:text-black transition">home</a>
          <a href='/about' onClick={closeMenu} className="hover:text-black transition">about</a>
          <a href='/#services' onClick={closeMenu} className="hover:text-black transition">our services</a>
          <button style={{
            backgroundColor: '#FFA0A0'
          }} className="text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight w-full">Connect with us</button>
        </nav>
      </div>
    </header>
  );
};
