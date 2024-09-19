'use client';
import React from 'react';
import Header from '../components/header';
import item4 from '../assets/images/item_4.jpg';
// item promo
import item7 from '../assets/images/item_7.jpg';
import item8 from '../assets/images/item_8.jpg';
import item9 from '../assets/images/item_9.jpg';
import item10 from '../assets/images/item_10.jpg';
import item11 from '../assets/images/item_11.jpg';
// item Most
import item14 from '../assets/images/item_14.jpg';
import item15 from '../assets/images/item_15.jpg';
import item16 from '../assets/images/item_16.jpg';
import item17 from '../assets/images/item_17.jpg';
import item18 from '../assets/images/item_18.jpg';

import item6 from '../assets/images/item_6.jpg';
import Image from 'next/image';
import Footer from '../components/footer';

const Page = () => {
  // const [filterType, setFilterType] = useState('all'); // Property type filter
  // const [filterPrice, setFilterPrice] = useState('all'); // Price range filter
  // const [filterColor, setFilterColor] = useState('all'); // Color filter

  // // Handle filter changes
  // const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilterType(event.target.value);
  // };

  // const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilterPrice(event.target.value);
  // };

  // const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilterColor(event.target.value);
  // };

  // Filter the products array based on selected criteria
  // const filteredProducts = products.filter((product) => {
  //   // Filter by property type
  //   const typeMatch =
  //     filterType === 'all' || product.category.toLowerCase() === filterType;

  //   // Filter by price range
  //   let priceMatch = true;
  //   if (filterPrice === 'low') priceMatch = product.price <= 500;
  //   else if (filterPrice === 'medium')
  //     priceMatch = product.price > 500 && product.price <= 1000;
  //   else if (filterPrice === 'high') priceMatch = product.price > 1000;

  //   // Filter by color
  //   const colorMatch =
  //     filterColor === 'all' || product.colors.includes(filterColor);

  //   return typeMatch && priceMatch && colorMatch;
  // });

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='relative h-[80vh] flex justify-center items-center bg-gray-900'>
        <Image src={item4} alt={'alt'} className='object-cover w-full h-full' />
        <div className='absolute h-full top-0 flex flex-col justify-center items-center text-white font-bold text-3xl'>
          <span className='text-2xl font-semibold'>
            Eksklusif Hanya Untuk Anda
          </span>
          <span>
            POTONGAN HARGA <span className='text-green-500'>99%</span>
          </span>
          <span className='text-xl bg-blue-500 shadow-xl p-2 rounded-xl '>
            Check Sekarang
          </span>
        </div>
      </div>

      {/* Tampilkan Promo */}
      <div className='flex flex-col p-20'>
        <div className='w-full flex items-center gap-2'>
          <span className='text-2xl font-semibold text-gray-800 text-nowrap'>
            PROMO INTERIOR
          </span>
          <span className='bg-gray-800 bg-opacity-50 h-[2px] w-full' />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <div className='relative w-[250px] h-[350px]'>
            <Image
              src={item7}
              alt='itemPromo'
              className='object-cover w-full h-full'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>Nama Produk</span>
            </div>
          </div>
          <div className='relative w-[250px] h-[350px]'>
            <Image
              src={item8}
              alt='itemPromo'
              className='object-cover w-full h-full'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>Nama Produk</span>
            </div>
          </div>
          <div className='relative w-[250px] h-[350px]'>
            <Image
              src={item9}
              alt='itemPromo'
              className='object-cover w-full h-full'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>Nama Produk</span>
            </div>
          </div>
          <div className='relative w-[250px] h-[350px]'>
            <Image
              src={item10}
              alt='itemPromo'
              className='object-cover w-full h-full'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>Nama Produk</span>
            </div>
          </div>
          <div className='relative w-[250px] h-[350px]'>
            <Image
              src={item11}
              alt='itemPromo'
              className='object-cover w-full h-full'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>Nama Produk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tampilkan Iklan Stek lai Bro */}
      <div className='flex flex-col justify-center items-center gap-10 h-[50vh] w-full bg-gray-100'>
        <div className='flex flex-col justify-center items-center text-gray-800 text-2xl font-semibold'>
          <span>Kami Tukang Pembagus Rumah</span>
          <span>Akan Melayani Anda Sepenuh Hati Anjay....</span>
        </div>
        <div className='w-[50%] flex justify-center items-center text-center'>
          <span>
            Kami Menyediakan Layanan Jasa dan Produk Untuk Menciptakan Rumah
            Impian Anda, dan Anda pun Bisa Mendesign Sendiri Interior yang anda
            inginkan dengan melalui teknologi kami yang pastinya anda senang
            KAMI CUAN, xixixi;{')'}
          </span>
        </div>
        <div>
          <span className='p-2 bg-blue-500 rounded-xl text-white font-semibold text-xl'>
            Design Sendiri
          </span>
        </div>
      </div>

      {/* Product Andalan */}
      <div className='min-h-screen flex flex-col gap-5 p-10 mb-20'>
        <div>
          <span className='text-xl font-semibold'>Produk Paling Populer</span>
        </div>
        <div className='h-full grid grid-cols-2 gap-5 p-5'>
          <div className='h-full w-full'>
            <Image
              src={item14}
              alt='itemMost'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='h-full w-full grid grid-cols-2 gap-2'>
            <div className='flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[50vh]'
              />
              <div className='flex flex-col'>
                <span className='text-xl font-semibold'>KURSI</span>
                <span>tipe-tipe kursi</span>
                <div className='flex gap-2'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item16}
                alt='itemMost'
                className='object-cover w-full h-[50vh]'
              />
              <div className='flex flex-col'>
                <span className='text-xl font-semibold'>KURSI</span>
                <span>tipe-tipe kursi</span>
                <div className='flex gap-2'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item17}
                alt='itemMost'
                className='object-cover w-full h-[50vh]'
              />
              <div className='flex flex-col'>
                <span className='text-xl font-semibold'>KURSI</span>
                <span>tipe-tipe kursi</span>
                <div className='flex gap-2'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item18}
                alt='itemMost'
                className='object-cover w-full h-[50vh]'
              />
              <div className='flex flex-col'>
                <span className='text-xl font-semibold'>KURSI</span>
                <span>tipe-tipe kursi</span>
                <div className='flex gap-2'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROMOTE LO LIAK */}
      <div className='relative w-full flex justify-center items-center gap-10 p-10'>
        <div className='w-[50%] flex flex-col items-center justify-center gap-10 text-center text-xl'>
          <span className='text-3xl font-semibold'>
            PRODUCT BRAND IN INTERIOR
          </span>
          <span className=''>
            Produk kami terus berkembang dan menyesuaikan zamannya &quot;kami
            tak lekang oleh waktu tak lapuk pula dek hujan&quot; begitulah kami,
            produk-produk kami sudah dijamin oleh pak itam yaitu tukang buat web
            ini cuy
          </span>
          <span className='border-2 border-black px-3'>LIHAT BRAND</span>
        </div>
        <div className='w-full h-[70vh]'>
          <Image
            src={item6}
            alt='item'
            className='object-cover w-full h-full'
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-5 p-10'>
        <div className='w-full h-full flex justify-start gap-5 overflow-x-auto custom-scrollbar p-5'>
          {/* Wrapper to ensure full width scrolling */}
          <div className='flex justify-start gap-5 w-max'>
            {/* Product Item 1 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the image
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>

            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the image
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the image
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the image
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-black border-opacity-30 p-5'>
              <Image
                src={item15}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the image
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className='bg-gray-100 p-20'>
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
      {/* Display the filtered products */}
      {/* <div className='p-10'>
        <h2 className='text-2xl font-bold mb-5'>Hasil Filter:</h2>
        <div className='grid grid-cols-3 gap-6'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className='border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              >
                <Image src={item1} alt={product.name} className='mb-4' />
                <h2 className='text-2xl font-bold'>{product.name}</h2>
                <p className='text-gray-500'>{product.description}</p>
                <p className='text-xl font-semibold'>Rp {product.price} juta</p>
                <p className='text-sm text-gray-400'>
                  Available colors: {product.colors.join(', ')}
                </p>
              </div>
            ))
          ) : (
            <div>Tidak ada produk yang sesuai dengan filter</div>
          )}
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Page;
