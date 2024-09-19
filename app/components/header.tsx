'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MyLogo from '../assets/icons/mrlogo.svg';
const Header = ({ tipe = 0 }) => {
  // Navbar

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return tipe === 1 ? (
    <nav
      className={`w-full top-0 flex justify-between items-center p-2 z-30 transition-all duration-300 bg-gray-200 bg-opacity-100`}
    >
      <div className='flex items-center gap-2'>
        {/* <Image src={icons} alt='Interior Logo' width={40} height={40} /> */}
        <MyLogo width='50' height='50' />
        <span className='font-bold text-xl'>INTERIOR</span>
      </div>
      <div className='flex gap-8'>
        <Link href='/' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            Home
          </span>
        </Link>
        <Link href='/product' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            Product
          </span>
        </Link>
        <Link href='/service' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            How Its Work
          </span>
        </Link>
        <Link href='/portofolio' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            Portofolio
          </span>
        </Link>
        {/* <Link href='/contact' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            Contact
          </span>
        </Link>
        <Link href='/about' passHref>
          <span className='cursor-pointer font-semibold text-xl hover:underline'>
            About
          </span>
        </Link> */}
      </div>
      <div>
        <span className='cursor-pointer hover:underline'>
          <i className='fa-solid fa-user'></i>
        </span>
      </div>
    </nav>
  ) : (
    <nav
      className={`fixed w-full ${
        isOpen ? 'h-screen' : null
      } top-0 flex flex-col justify-start items-center p-2 z-30 transition-all duration-300 ${
        isOpen
          ? 'bg-gray-200 bg-opacity-100'
          : scrollNav
          ? 'bg-gray-200 bg-opacity-100'
          : 'bg-gray-100 bg-opacity-50'
      }`}
    >
      <div className='w-full grid grid-cols-3'>
        <div className='flex justify-start items-center ml-5'>
          <div
            className='group flex gap-2 max-h-10 max-w-12 justify-center items-center cursor-pointer'
            onClick={toggleMenu}
          >
            <div className=' w-full h-full flex flex-col justify-center items-center gap-1.5'>
              <div
                className={`h-[2px] w-6 rounded-full bg-black transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2 bg-red-600' : ''
                }`}
              />
              <div
                className={`h-[2px] w-6 rounded-full bg-black transition-transform duration-300 ${
                  isOpen ? 'scale-0' : ''
                }`}
              />
              <div
                className={`h-[2px] w-6 rounded-full bg-black transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2 bg-red-600' : ''
                }`}
              />
            </div>
            <span className='group-hover:font-semibold'>Menu</span>
          </div>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <MyLogo width='50' height='50' className='bg-black rounded-full' />
        </div>
        <div className='flex justify-end items-center mr-5'>
          <span className='cursor-pointer hover:underline'>
            <i className='fa-solid fa-user'></i>
          </span>
        </div>
      </div>
      {isOpen ? (
        <div className='w-full h-full flex'>
          <div className='flex flex-col p-10'>
            <div className='flex flex-col gap-8'>
              <Link href='/' passHref>
                <span className='cursor-pointer font-semibold text-xl hover:underline'>
                  Home
                </span>
              </Link>
              <Link href='/product' passHref>
                <span className='cursor-pointer font-semibold text-xl hover:underline'>
                  Product
                </span>
              </Link>
              <Link href='/service' passHref>
                <span className='cursor-pointer font-semibold text-xl hover:underline'>
                  How Its Work
                </span>
              </Link>
              <Link href='/portofolio' passHref>
                <span className='cursor-pointer font-semibold text-xl hover:underline'>
                  Portofolio
                </span>
              </Link>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      ) : null}
      {/* <div className='w-full h-full'></div> */}
    </nav>
  );
};

export default Header;
