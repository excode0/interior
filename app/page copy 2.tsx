'use client';
import Image from 'next/image';
import bgHeader from './assets/images/bg_1.jpg';
import item1 from './assets/images/item_1.jpg';
import item2 from './assets/images/item_2.jpg';
import bankBni from './assets/images/bank/bni.png';

import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from './components/header';
import { products } from './data/dataDummy';
export default function Home() {
  const testimoniData = [
    {
      id: 1,
      text: 'This is the best service I have ever used!, i alwasy buy in this company bro!!!',
      name: 'John Doe',
    },
    {
      id: 2,
      text: 'Amazing experience with this company!, great company',
      name: 'Jane Smith',
    },
    {
      id: 3,
      text: 'High-quality products and friendly staff!',
      name: 'Michael Johnson',
    },
    {
      id: 4,
      text: 'I will definitely recommend this to my friends!',
      name: 'Emily Davis',
    },
  ];
  const x = useMotionValue(0); // Kontrol animasi secara langsung
  const [isHovered, setIsHovered] = useState(false);
  const speed = 0.5; // Kecepatan pergerakan carousel
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    // Hitung lebar total carousel berdasarkan jumlah item
    const handleResize = () => {
      setCarouselWidth(testimoniData.length * 550);
    };

    handleResize(); // Set initial width

    window.addEventListener('resize', handleResize); // Update width on resize
    return () => window.removeEventListener('resize', handleResize);
  }, [testimoniData.length]);

  useAnimationFrame(() => {
    if (!isHovered) {
      x.set(x.get() - speed); // Pindahkan sesuai kecepatan yang ditentukan
    }
  });

  useEffect(() => {
    // Reset posisi carousel untuk loop yang seamless
    if (x.get() <= -carouselWidth) {
      x.set(0);
    }
  }, [x, carouselWidth]);

  const heightHover = {
    default: { opacity: 0, hight: '0%' },
    hover: { opacity: 1, height: '100%' },
  };
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className='flex-grow bg-gray-100'>
        {/* Fullscreen Header Section with Background Image */}
        <div className='relative w-full h-screen'>
          <Image src={bgHeader} alt='Header' fill className='object-cover' />
          <div className='absolute w-full h-screen flex flex-col justify-center items-center p-10'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <span className='text-[5em] font-bold text-white font-title'>
                LET'S DESIGN YOUR DREAM
              </span>
              <span className='border-4 border-primary rounded-lg text-xl text-textThird font-semibold hover:bg-primary  hover:scale-110 duration-150 cursor-pointer p-2'>
                ORDER NOW
              </span>
            </div>
          </div>
        </div>

        {/* Section with About Us and Border Box */}
        <div className='grid grid-cols-2 bg-gray-100 p-10'>
          {/* LEFT */}
          <div className='min-h-screen flex flex-col gap-20 bg-gray-100 p-20'>
            <div className='flex items-center relative'>
              <div className='border-4 border-primary w-16 h-16 absolute -left-5 z-0' />
              <span className='text-5xl font-title1 bg-gray-100 z-10 pl-3 relative'>
                About Us
              </span>
              {/* Corner Squares */}
              <div className='absolute -top-10 -left-10 border-4 border-primary w-4 h-4'></div>
              <div className='absolute -bottom-10 -left-10 border-4 border-primary w-4 h-4'></div>
            </div>
            <div>
              <span className='font-title2 text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, ratione a commodi molestias maxime, vero totam quis
                dicta iure natus quae culpa reiciendis enim? Rerum facilis
                dolores quod quasi unde.
              </span>
            </div>
            <div>
              <span className='text-2xl font-semibold text-primary'>
                Complete Interior Concepts
              </span>
            </div>
            <div>
              <div className='w-[100%] bottom-0 flex justify-evenly bg-gray-100 rounded-t-xl p-10 text-black shadow-2xl z-5'>
                <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
                  <span className='text-2xl font-semibold'>300+</span>
                  <span>Project</span>
                </div>
                <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
                  <span className='text-2xl font-semibold'>1000+</span>
                  <span>Clients</span>
                </div>
                <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
                  <span className='text-2xl font-semibold'>1000+</span>
                  <span>Styles Unik</span>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className='relative flex items-start p-10'>
            <div className='border-l-2 border-t-2 border-primary p-5'>
              <Image src={item1} alt='item1' className='shadow-xl w-[350px]' />
            </div>
            <div className='absolute right-20 top-40 border-r-2 border-b-2 border-primary rounded-tl-xl p-5 bg-gray-100'>
              <Image src={item2} alt='item1' className='shadow-xl w-[350px]' />
            </div>
          </div>
        </div>

        {/* Section  line */}
        <div className='relative w-full bg-gray-100 flex items-center justify-evenly text-black text-2xl p-5'>
          {/* SVG untuk menggambar garis melengkung */}
          <div className='w-full absolute bg-primary h-1 z-5'></div>

          {/* Elemen-elemen yang akan dihubungkan */}
          <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-compass-drafting'></i>
            </span>
          </div>

          <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-user-tie'></i>
            </span>
          </div>

          <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-cubes-stacked'></i>
            </span>
          </div>

          <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-brands fa-unity'></i>
            </span>
          </div>

          <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-percent'></i>
            </span>
          </div>
        </div>

        {/* Section Product */}
        <div className='bg-gray-100 flex flex-col gap-5 p-10 mt-10'>
          <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center font-title1 font-thin text-xl'>
              <div className='flex justify-center items-center gap-5'>
                <div className='bg-primary h-1 w-10 ' />
                <div>
                  <span className='text-xl'>Our Offering</span>
                </div>
                <div className='bg-primary h-1 w-10' />
              </div>
              <span className='text-3xl'>SERVICES</span>
            </div>
          </div>
          {/* itemset 1 */}
          <div className='flex justify-center gap-5'>
            {products.map((product) => (
              <motion.section
                key={product.id}
                className='relative w-[500px] h-[500px] overflow-hidden group'
                whileHover='hover'
              >
                {/* Gambar yang memicu hover */}
                <img
                  src={product.imageUrl[0]} // Using the first image from product's image array
                  alt={product.name}
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <motion.div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-20'>
                  <span className='text-2xl font-bold'>BEST</span>
                  <div className='flex flex-col'>
                    <div className='flex gap-5 items-center'>
                      <span className='text-2xl font-bold'>
                        <i className='fa-solid fa-couch'></i>
                      </span>
                      <span>{product.name}</span> {/* Product name displayed */}
                    </div>
                    <span className='text-2xl font-bold'>ENTERTAINMENT</span>
                  </div>
                </motion.div>
                {/* Overlay yang berubah tinggi saat hover */}
                <motion.div
                  className='absolute top-0 left-0 w-full h-[0%] bg-black bg-opacity-50 flex items-center justify-center overflow-hidden'
                  variants={heightHover}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className='p-5 text-white text-center'>
                    <span>{product.description}</span>{' '}
                    {/* Product description displayed */}
                  </div>
                </motion.div>
              </motion.section>
            ))}
            <motion.section
              className='relative w-[500px] h-[500px] overflow-hidden group'
              whileHover='hover'
            >
              {/* Gambar yang memicu hover */}
              <Image
                src={item1}
                alt='item'
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <motion.div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-20'>
                <span className='text-2xl font-bold'>BEST</span>
                <div className='flex flex-col'>
                  <div className='flex gap-5 items-center'>
                    <span className='text-2xl font-bold'>
                      <i className='fa-solid fa-couch'></i>
                    </span>
                    <span>CHAIR</span>
                  </div>
                  <span className='text-2xl font-bold'>ENTERTAINMENT</span>
                </div>
              </motion.div>
              {/* Overlay yang berubah tinggi saat hover */}
              <motion.div
                className='absolute top-0 left-0 w-full h-[0%] bg-black bg-opacity-50 flex items-center justify-center overflow-hidden'
                variants={heightHover}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='p-5 text-white text-center'>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur porro, voluptas maxime est laboriosam harum
                    praesentium fuga vero voluptatum! Rem dolorum culpa omnis
                    alias repudiandae ea, distinctio animi suscipit nisi.
                  </span>
                </div>
              </motion.div>
            </motion.section>
          </div>

          {/* itemset 2 */}
          <div className='flex justify-center gap-5'>
            <motion.section
              className='relative w-[500px] h-[500px] overflow-hidden group'
              whileHover='hover'
            >
              {/* Gambar yang memicu hover */}
              <Image
                src={item1}
                alt='item'
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <motion.div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-20'>
                <span className='text-2xl font-bold'>BEST</span>
                <div className='flex flex-col'>
                  <div className='flex gap-5 items-center'>
                    <span className='text-2xl font-bold'>
                      <i className='fa-solid fa-couch'></i>
                    </span>
                    <span>CHAIR</span>
                  </div>
                  <span className='text-2xl font-bold'>ENTERTAINMENT</span>
                </div>
              </motion.div>
              {/* Overlay yang berubah tinggi saat hover */}
              <motion.div
                className='absolute top-0 left-0 w-full h-[0%] bg-black bg-opacity-50 flex items-center justify-center overflow-hidden'
                variants={heightHover}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='p-5 text-white text-center'>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur porro, voluptas maxime est laboriosam harum
                    praesentium fuga vero voluptatum! Rem dolorum culpa omnis
                    alias repudiandae ea, distinctio animi suscipit nisi.
                  </span>
                </div>
              </motion.div>
            </motion.section>
            <motion.section
              className='relative w-[500px] h-[500px] overflow-hidden group'
              whileHover='hover'
            >
              {/* Gambar yang memicu hover */}
              <Image
                src={item1}
                alt='item'
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <motion.div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-20'>
                <span className='text-2xl font-bold'>BEST</span>
                <div className='flex flex-col'>
                  <div className='flex gap-5 items-center'>
                    <span className='text-2xl font-bold'>
                      <i className='fa-solid fa-couch'></i>
                    </span>
                    <span>CHAIR</span>
                  </div>
                  <span className='text-2xl font-bold'>ENTERTAINMENT</span>
                </div>
              </motion.div>
              {/* Overlay yang berubah tinggi saat hover */}
              <motion.div
                className='absolute top-0 left-0 w-full h-[0%] bg-black bg-opacity-50 flex items-center justify-center overflow-hidden'
                variants={heightHover}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className='p-5 text-white text-center'>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur porro, voluptas maxime est laboriosam harum
                    praesentium fuga vero voluptatum! Rem dolorum culpa omnis
                    alias repudiandae ea, distinctio animi suscipit nisi.
                  </span>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </div>

        {/* Section Pembayaran */}
        <div className='flex justify-center items-center mt-10'>
          <div className='w-[80%] grid grid-cols-2 gap-4'>
            {/* Grid pertama untuk menampilkan gambar */}
            <div className='grid grid-cols-3 gap-4 border-t-2 border-r-2 border-black border-opacity-30 p-5'>
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
              <Image src={bankBni} alt='bank' className='w-full' />
            </div>
            {/* Grid kedua untuk menampilkan teks */}
            <div className='flex flex-col items-start justify-start gap-5 border-t-2 border-l-2 border-black border-opacity-30 p-5'>
              <span className='text-5xl font-semibold'>
                Cicilan 0% Hingga 36 Bulan
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                autem sequi culpa odio vel, ad nobis laudantium ut eum incidunt
                minima debitis aliquam numquam suscipit, saepe natus distinctio
                ipsam facere.
              </span>
              <span className='border-2 border-blue-500 p-2'>
                Lihat Selengkapnya Bro/Sis...
              </span>
            </div>
          </div>
        </div>

        {/* Section Testimoni */}
        <div className='relative w-full mt-10 overflow-hidden'>
          <motion.div
            className='flex'
            style={{ x }}
            animate={{ x: [0, -carouselWidth] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            {testimoniData.map((testimoni, index) => (
              <motion.div
                key={index}
                className='flex-shrink-0 w-[550px] h-[250px] flex items-center justify-center  relative'
                onHoverStart={() => setIsHovered(true)} // Pause animasi saat hover
                onHoverEnd={() => setIsHovered(false)} // Lanjutkan animasi setelah hover
                whileHover={{ scale: 1.05 }} // Efek zoom saat hover
              >
                <motion.div
                  className='absolute w-[150px] h-[150px] top-1 left-[20%] z-10'
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Image
                    src={item1} // Ganti dengan gambar sesuai data
                    alt={`Testimoni dari ${testimoni.name}`}
                    className='w-full h-full object-cover'
                  />
                </motion.div>
                <div className='ml-10 bg-gray-100 p-5 flex flex-col items-center justify-center shadow-xl z-20 w-[50%]'>
                  <span className='text-sm italic text-gray-700 mb-2'>
                    {testimoni.text}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {testimoni.name}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* Copy lagi data untuk memastikan loop seamless */}
            {testimoniData.map((testimoni, index) => (
              <motion.div
                key={index + testimoniData.length}
                className='flex-shrink-0 w-[550px] h-[250px] flex items-center justify-center relative'
                onHoverStart={() => setIsHovered(true)} // Pause animasi saat hover
                onHoverEnd={() => setIsHovered(false)} // Lanjutkan animasi setelah hover
                whileHover={{ scale: 1.05 }} // Efek zoom saat hover
              >
                <motion.div
                  className='absolute w-[150px] h-[150px] top-1 left-[20%] z-10'
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Image
                    src={item1} // Ganti dengan gambar sesuai data
                    alt={`Testimoni dari ${testimoni.name}`}
                    className='w-full h-full object-cover'
                  />
                </motion.div>
                <div className='ml-10 bg-gray-100 p-5 flex flex-col items-center justify-center shadow-xl z-20 w-[50%]'>
                  <span className='text-sm italic text-gray-700 mb-2'>
                    {testimoni.text}
                  </span>
                  <span className='font-semibold text-gray-800'>
                    {testimoni.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section Contact */}
        <div className='p-20'>
          <div className='flex flex-col p-10 w-[70%] gap-5'>
            <span className='text-2xl'>
              STAY INFORMED ON ANNOUNCEMENTS OR CONTACT US
            </span>
            <span>
              The latest designs and trends in luxury custom cabinets are just a
              click away. Sign up for email updates from LXRY to get the latest
              news on our events, trends, and exclusive promotions.
            </span>
            <input type='text' placeholder='your@email.com' className='p-2' />
            <textarea
              name=''
              id=''
              className='p-2 h-[200px]'
              placeholder='Your Text Here...'
            ></textarea>
            <button className='bg-gray-300 p-2'>SEND...</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-200 text-gray-900 py-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-between items-start'>
            {/* Logo and Brand Info */}
            <div className='w-full md:w-1/3 mb-6'>
              <h2 className='text-xl font-bold mb-2'>Your Company</h2>
              <p className='text-gray-900'>
                Providing high-quality services since 2024. We are committed to
                excellence and delivering top-notch solutions.
              </p>
            </div>

            {/* Navigation Links */}
            <div className='w-full md:w-1/3 mb-6'>
              <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='#home' className='text-gray-900 hover:text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' className='text-gray-900 hover:text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className='text-gray-900 hover:text-white'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href='#contact' className='text-gray-900 hover:text-white'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='w-full md:w-1/3 mb-6'>
              <h3 className='text-lg font-semibold mb-3'>Get in Touch</h3>
              <ul className='space-y-2'>
                <li>
                  <span className='text-gray-900'>
                    Email: info@yourcompany.com
                  </span>
                </li>
                <li>
                  <span className='text-gray-900'>Phone: +123 456 7890</span>
                </li>
                <li>
                  <span className='text-gray-900'>
                    Address: 123 Street, City, Country
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className='mt-6 flex justify-center space-x-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 hover:text-white'
            >
              <i className='fab fa-facebook fa-lg'></i>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 hover:text-white'
            >
              <i className='fab fa-twitter fa-lg'></i>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 hover:text-white'
            >
              <i className='fab fa-instagram fa-lg'></i>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-900 hover:text-white'
            >
              <i className='fab fa-linkedin fa-lg'></i>
            </a>
          </div>

          {/* Copyright */}
          <div className='mt-10 text-center text-gray-900'>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
