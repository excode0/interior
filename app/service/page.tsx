'use client';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import item1 from '../assets/images/item_1.jpg';

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Header />
      <div className='relative h-[80vh] flex justify-center items-center bg-gray-900'>
        <Image src={item1} alt='item1' className='object-cover w-full h-full' />
      </div>
      <div className='min-h-screen'>
        <video
          className='object-cover w-full h-full'
          controls
          autoPlay
          loop
          muted
        >
          <source src={'/vid_1.mp4'} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default page;
