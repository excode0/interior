'use client';
import React, { useState } from 'react';
import Header from '../../components/header';
import { products, Product } from '../../data/productData';
import Image from 'next/image';

const Page = () => {
  const [filterType, setFilterType] = useState('all'); // Property type filter
  const [filterPrice, setFilterPrice] = useState('all'); // Price range filter
  const [filterColor, setFilterColor] = useState('all'); // Color filter

  // Handle filter changes
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPrice(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterColor(event.target.value);
  };

  // Filter the products array based on selected criteria
  const filteredProducts = products.filter((product) => {
    // Filter by property type
    const typeMatch =
      filterType === 'all' || product.category.toLowerCase() === filterType;

    // Filter by price range
    let priceMatch = true;
    if (filterPrice === 'low') priceMatch = product.price <= 500;
    else if (filterPrice === 'medium')
      priceMatch = product.price > 500 && product.price <= 1000;
    else if (filterPrice === 'high') priceMatch = product.price > 1000;

    // Filter by color
    const colorMatch =
      filterColor === 'all' || product.colors.includes(filterColor);

    return typeMatch && priceMatch && colorMatch;
  });

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='h-[300px] flex justify-center items-center bg-gray-900'>
        <span className='text-3xl font-bold text-white'>Banner</span>
      </div>

      {/* Layout utama dengan flexbox */}
      <div className='flex flex-col md:flex-col lg:flex-row p-10'>
        {/* Menu Filter di atas pada mode mobile dan sebelah kiri pada desktop */}
        <div className='w-full lg:w-64 bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-6 lg:mb-0 lg:mr-6'>
          <h2 className='text-xl font-bold mb-4'>Filter Produk</h2>
          <div className='flex flex-col gap-4'>
            <select
              name='propertyType'
              id='propertyType'
              className='p-2 rounded-md bg-gray-100 border'
              onChange={handleTypeChange}
            >
              <option value='all'>Semua Tipe Properti</option>
              <option value='furniture'>Furniture</option>
              <option value='lighting'>Pencahayaan</option>
            </select>

            <select
              name='priceRange'
              id='priceRange'
              className='p-2 rounded-md bg-gray-100 border'
              onChange={handlePriceChange}
            >
              <option value='all'>Semua Kisaran Harga</option>
              <option value='low'>Rp 0 - Rp 500 juta</option>
              <option value='medium'>Rp 500 juta - Rp 1 miliar</option>
              <option value='high'>Rp 1 miliar ke atas</option>
            </select>

            <select
              name='color'
              id='color'
              className='p-2 rounded-md bg-gray-100 border'
              onChange={handleColorChange}
            >
              <option value='all'>Semua Warna</option>
              <option value='Red'>Merah</option>
              <option value='Blue'>Biru</option>
              <option value='Green'>Hijau</option>
              <option value='Black'>Hitam</option>
            </select>
          </div>
        </div>

        {/* Display produk di bawah menu pada mobile dan di sebelah kanan pada desktop */}
        <div className='flex-grow'>
          <h2 className='text-2xl font-bold mb-5'>Hasil Filter:</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: Product) => (
                <div
                  key={product.id}
                  className='w-full h-[500px] flex flex-col border-2 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl'
                >
                  <div className='h-[250px] w-full overflow-hidden'>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <h2 className='text-2xl font-bold mt-4'>{product.name}</h2>
                  <p className='text-gray-500'>{product.description}</p>
                  <p className='text-xl font-semibold'>
                    Rp {product.price} juta
                  </p>
                  <p className='text-sm text-gray-400'>
                    Available colors: {product.colors.join(', ')}
                  </p>
                </div>
              ))
            ) : (
              <div>Tidak ada produk yang sesuai dengan filter</div>
            )}
          </div>
        </div>
      </div>

      <div className='h-screen bg-black'></div>
    </div>
  );
};

export default Page;
