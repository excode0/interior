import React from 'react';
import Header from '../components/header';

const interiorDesignThemes: string[] = [
  'Modern',
  'Minimalis',
  'Skandinavia',
  'Industrial',
  'Mid-century Modern',
  'Bohemian',
  'Klasik',
  'Rustik',
  'Kontemporer',
  'Jepang',
  'Tropis',
  'Vintage',
  'Art Deco',
  'Tradisional',
  'Farmhouse',
  'Mediterania',
  'Coastal',
  'Transitional',
  'Eklektik',
  'Kolonial',
];
const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header tipe={1} />
      <div className='w-full bg-gray-100 grid grid-cols-2 p-10 '>
        <div className='flex flex-col gap-5  p-5'>
          <span className='text-2xl font-semibold'>
            Ayo Temukan Design Impian anda!!!
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            molestias asperiores beatae, fugit harum ex nulla ipsa
            necessitatibus dicta, unde rerum qui quas vitae sit, voluptates hic
            aliquid consequuntur perferendis.
          </span>
          <input
            type='text'
            className='p-2 w-full border-2'
            placeholder='temukan design impian'
          />
        </div>
      </div>
      {/* Tampilkan Portofolio interior */}
      <div className='w-full p-10 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {interiorDesignThemes.map((theme, index) => (
          <div key={index} className='border p-5 rounded-lg shadow-lg'>
            <div className='h-40 bg-gray-200 mb-5'>
              {/* Gambar dummy, bisa diganti dengan gambar nyata */}
              <span className='text-gray-500 flex justify-center items-center h-full'>
                {theme} Image
              </span>
            </div>
            <h3 className='text-xl font-semibold'>{theme}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
