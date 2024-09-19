'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import icons from './../assets/images/ic_1.png';
import Link from 'next/link';
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
  return tipe === 1 ? (
    <nav
      className={`w-full top-0 flex justify-between items-center p-2 z-30 transition-all duration-300 bg-gray-200 bg-opacity-100`}
    >
      <div className='flex items-center gap-2'>
        <Image src={icons} alt='Interior Logo' width={40} height={40} />
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
        <span className='cursor-pointer hover:underline'>Login</span>
      </div>
    </nav>
  ) : (
    <nav
      className={`fixed w-full top-0 flex justify-between items-center p-2 z-30 transition-all duration-300 ${
        scrollNav ? 'bg-gray-200 bg-opacity-100' : 'bg-gray-100 bg-opacity-50'
      }`}
    >
      <div className='flex items-center gap-2'>
        <Image src={icons} alt='Interior Logo' width={40} height={40} />
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
        <span className='cursor-pointer hover:underline'>Login</span>
      </div>
    </nav>
  );
};

export default Header;
