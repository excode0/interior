// 'use client';
// import Image from 'next/image';
// import icons from './assets/images/ic_1.png';
// import bgHeader from './assets/images/bg_1.jpg';
// import item1 from './assets/images/item_1.jpg';
// import item2 from './assets/images/item_2.jpg';
// import bankBni from './assets/images/bank/bni.png';
// import {
//   motion,
//   useAnimation,
//   useAnimationFrame,
//   useMotionValue,
// } from 'framer-motion';
// import { useEffect, useState } from 'react';
// export default function Home() {
//   const testimoniData = [
//     {
//       id: 1,
//       text: 'This is the best service I have ever used!, i alwasy buy in this company bro!!!',
//       name: 'John Doe',
//     },
//     {
//       id: 2,
//       text: 'Amazing experience with this company!, great company',
//       name: 'Jane Smith',
//     },
//     {
//       id: 3,
//       text: 'High-quality products and friendly staff!',
//       name: 'Michael Johnson',
//     },
//     {
//       id: 4,
//       text: 'I will definitely recommend this to my friends!',
//       name: 'Emily Davis',
//     },
//   ];
//   const x = useMotionValue(0); // Kontrol animasi secara langsung
//   const [isHovered, setIsHovered] = useState(false);
//   const speed = 0.5; // Kecepatan pergerakan carousel

//   useAnimationFrame((t, delta) => {
//     if (!isHovered) {
//       // Jika tidak di-hover, maka gerakkan carousel
//       x.set(x.get() - speed); // Pindahkan sesuai kecepatan yang ditentukan
//     }
//   });

//   useEffect(() => {
//     const length = testimoniData.length * 550; // Panjang carousel berdasarkan jumlah item
//     const currentX = x.get();

//     // Reset posisi carousel untuk loop yang seamless
//     if (currentX <= -length) {
//       x.set(0);
//     }
//   }, [x, testimoniData.length]);

//   const extendedTestimoniData = [...testimoniData, ...testimoniData];

//   return (
//     <div className='min-h-screen flex flex-col'>
//       {/* Header */}
//       <nav className='fixed w-full top-0 flex justify-between items-center bg-gray-100 bg-opacity-50 p-4 z-10'>
//         <div className='flex items-center gap-2'>
//           <Image src={icons} alt='Interior Logo' width={40} height={40} />
//           <span className='font-bold text-xl'>INTERIOR</span>
//         </div>
//         <div className='flex gap-8'>
//           <span className='cursor-pointer font-semibold text-xl hover:underline'>
//             Home
//           </span>
//           <span className='cursor-pointer font-semibold text-xl hover:underline'>
//             Product
//           </span>
//           <span className='cursor-pointer font-semibold text-xl hover:underline'>
//             Service
//           </span>
//           <span className='cursor-pointer font-semibold text-xl hover:underline'>
//             About
//           </span>
//         </div>
//         <div>
//           <span className='cursor-pointer hover:underline'>Login</span>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className='flex-grow bg-gray-100'>
//         {/* Fullscreen Header Section with Background Image */}
//         <div className='relative w-full h-screen'>
//           <Image src={bgHeader} alt='Header' fill className='object-cover' />
//           <div className='absolute w-full h-screen flex flex-col justify-center items-center p-10'>
//             <div className='flex flex-col justify-center items-center gap-5'>
//               <span className='text-5xl font-bold [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-white'>
//                 LET'S DESIGN YOUR DREAM
//               </span>
//               <span className='bg-blue-500 rounded-lg text-white font-semibold p-2 hover:scale-125 duration-150 cursor-pointer'>
//                 ORDER NOW
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Section with About Us and Border Box */}
//         <div className='grid grid-cols-2 bg-gray-100 p-10'>
//           {/* LEFT */}
//           <div className='min-h-screen flex flex-col gap-20 bg-gray-100 p-20'>
//             <div className='flex items-center relative'>
//               <div className='border-4 border-blue-500 w-16 h-16 absolute -left-5 z-0' />
//               <span className='text-3xl font-semibold bg-gray-100 z-10 pl-3 relative'>
//                 About Us
//               </span>
//               {/* Corner Squares */}
//               <div className='absolute -top-10 -left-10 border-4 border-blue-500 w-4 h-4'></div>
//               <div className='absolute -bottom-10 -left-10 border-4 border-blue-500 w-4 h-4'></div>
//             </div>
//             <div>
//               <span>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Dolorem, ratione a commodi molestias maxime, vero totam quis
//                 dicta iure natus quae culpa reiciendis enim? Rerum facilis
//                 dolores quod quasi unde.
//               </span>
//             </div>
//             <div>
//               <span className='text-2xl font-semibold text-blue-500'>
//                 Complete Interior Concepts
//               </span>
//             </div>
//             <div>
//               <div className='w-[100%] bottom-0 flex justify-evenly bg-gray-100 rounded-t-xl p-10 text-black shadow-2xl z-5'>
//                 <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
//                   <span className='text-2xl font-semibold'>300+</span>
//                   <span>Project</span>
//                 </div>
//                 <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
//                   <span className='text-2xl font-semibold'>1000+</span>
//                   <span>Clients</span>
//                 </div>
//                 <div className='w-[30%] flex flex-col justify-center itemns-center border-[5px] border-black border-opacity-5 rounded-xl p-5'>
//                   <span className='text-2xl font-semibold'>1000+</span>
//                   <span>Styles Unik</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* RIGHT */}
//           <div className='relative flex items-start p-10'>
//             <div className='border-l-2 border-t-2 border-blue-500 p-5'>
//               <Image src={item1} alt='item1' className='shadow-xl w-[350px]' />
//             </div>
//             <div className='absolute right-20 top-40 border-r-2 border-b-2 border-blue-500 rounded-tl-xl p-5 bg-gray-100'>
//               <Image src={item2} alt='item1' className='shadow-xl w-[350px]' />
//             </div>
//           </div>
//         </div>

//         {/* Section  line */}
//         <div className='relative w-full bg-gray-100 flex items-center justify-evenly text-black text-2xl p-5'>
//           {/* SVG untuk menggambar garis melengkung */}
//           <div className='w-full absolute bg-blue-600 h-1 z-5'></div>

//           {/* Elemen-elemen yang akan dihubungkan */}
//           <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-blue-500 z-10'>
//             <span>
//               <i className='fa-solid fa-compass-drafting'></i>
//             </span>
//           </div>

//           <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-blue-500 z-10'>
//             <span>
//               <i className='fa-solid fa-user-tie'></i>
//             </span>
//           </div>

//           <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-blue-500 z-10'>
//             <span>
//               <i className='fa-solid fa-cubes-stacked'></i>
//             </span>
//           </div>

//           <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-blue-500 z-10'>
//             <span>
//               <i className='fa-brands fa-unity'></i>
//             </span>
//           </div>

//           <div className='bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-blue-500 z-10'>
//             <span>
//               <i className='fa-solid fa-percent'></i>
//             </span>
//           </div>
//         </div>

//         {/* Section Product */}
//         <div className='bg-gray-100 flex flex-col gap-5 p-10 mt-10'>
//           <div className='flex justify-center'>
//             <div className='flex flex-col justify-center items-center'>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='bg-black h-1 w-10' />
//                 <div>
//                   <span>Our Offering</span>
//                 </div>
//                 <div className='bg-black h-1 w-10' />
//               </div>
//               <span>SERVICES</span>
//             </div>
//           </div>
//           {/* itemset 1 */}
//           <div className='flex justify-center gap-5'>
//             <div className='group relative w-[500px] h-[500px] overflow-hidden'>
//               <Image
//                 src={item1}
//                 alt='item'
//                 fill
//                 className='object-cover transition-transform duration-300 group-hover:scale-105'
//               />
//               {/* Main content with text */}
//               <div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-10'>
//                 <span className='text-2xl font-bold'>BEST</span>
//                 <div className='flex flex-col'>
//                   <div className='flex gap-5 items-center'>
//                     <span className='text-2xl font-bold'>
//                       <i className='fa-solid fa-couch'></i>
//                     </span>
//                     <span>CHAIR</span>
//                   </div>
//                   <span className='text-2xl font-bold'>ENTERTAINMENT</span>
//                 </div>
//               </div>
//               {/* Overlay that appears on hover */}
//               <div className='absolute h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                 <div className='p-5 text-white text-center'>
//                   <span>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Consectetur porro, voluptas maxime est laboriosam harum
//                     praesentium fuga vero voluptatum! Rem dolorum culpa omnis
//                     alias repudiandae ea, distinctio animi suscipit nisi.
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className='group relative w-[500px] h-[500px] overflow-hidden'>
//               <Image
//                 src={item1}
//                 alt='item'
//                 fill
//                 className='object-cover transition-transform duration-300 group-hover:scale-105'
//               />
//               {/* Main content with text */}
//               <div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-10'>
//                 <span className='text-2xl font-bold'>BEST</span>
//                 <div className='flex flex-col'>
//                   <div className='flex gap-5 items-center'>
//                     <span className='text-2xl font-bold'>
//                       <i className='fa-solid fa-couch'></i>
//                     </span>
//                     <span>CHAIR</span>
//                   </div>
//                   <span className='text-2xl font-bold'>ENTERTAINMENT</span>
//                 </div>
//               </div>
//               {/* Overlay that appears on hover */}
//               <div className='absolute h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                 <div className='p-5 text-white text-center'>
//                   <span>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Consectetur porro, voluptas maxime est laboriosam harum
//                     praesentium fuga vero voluptatum! Rem dolorum culpa omnis
//                     alias repudiandae ea, distinctio animi suscipit nisi.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* itemset 2 */}
//           <div className='flex justify-center gap-5'>
//             <div className='group relative w-[500px] h-[500px] overflow-hidden'>
//               <Image
//                 src={item1}
//                 alt='item'
//                 fill
//                 className='object-cover transition-transform duration-300 group-hover:scale-105'
//               />
//               {/* Main content with text */}
//               <div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-10'>
//                 <span className='text-2xl font-bold'>BEST</span>
//                 <div className='flex flex-col'>
//                   <div className='flex gap-5 items-center'>
//                     <span className='text-2xl font-bold'>
//                       <i className='fa-solid fa-couch'></i>
//                     </span>
//                     <span>CHAIR</span>
//                   </div>
//                   <span className='text-2xl font-bold'>ENTERTAINMENT</span>
//                 </div>
//               </div>
//               {/* Overlay that appears on hover */}
//               <div className='absolute h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                 <div className='p-5 text-white text-center'>
//                   <span>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Consectetur porro, voluptas maxime est laboriosam harum
//                     praesentium fuga vero voluptatum! Rem dolorum culpa omnis
//                     alias repudiandae ea, distinctio animi suscipit nisi.
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className='group relative w-[500px] h-[500px] overflow-hidden'>
//               <Image
//                 src={item1}
//                 alt='item'
//                 fill
//                 className='object-cover transition-transform duration-300 group-hover:scale-105'
//               />
//               {/* Main content with text */}
//               <div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-between z-10'>
//                 <span className='text-2xl font-bold'>BEST</span>
//                 <div className='flex flex-col'>
//                   <div className='flex gap-5 items-center'>
//                     <span className='text-2xl font-bold'>
//                       <i className='fa-solid fa-couch'></i>
//                     </span>
//                     <span>CHAIR</span>
//                   </div>
//                   <span className='text-2xl font-bold'>ENTERTAINMENT</span>
//                 </div>
//               </div>
//               {/* Overlay that appears on hover */}
//               <div className='absolute h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                 <div className='p-5 text-white text-center'>
//                   <span>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Consectetur porro, voluptas maxime est laboriosam harum
//                     praesentium fuga vero voluptatum! Rem dolorum culpa omnis
//                     alias repudiandae ea, distinctio animi suscipit nisi.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section Pembayaran */}
//         <div className='flex justify-center items-center mt-10'>
//           <div className='w-[80%] grid grid-cols-2 gap-4'>
//             {/* Grid pertama untuk menampilkan gambar */}
//             <div className='grid grid-cols-3 gap-4 border-t-2 border-r-2 border-black border-opacity-30 p-5'>
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//               <Image src={bankBni} alt='bank' className='w-full' />
//             </div>
//             {/* Grid kedua untuk menampilkan teks */}
//             <div className='flex flex-col items-start justify-start gap-5 border-t-2 border-l-2 border-black border-opacity-30 p-5'>
//               <span className='text-5xl font-semibold'>
//                 Cicilan 0% Hingga 36 Bulan
//               </span>
//               <span>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//                 autem sequi culpa odio vel, ad nobis laudantium ut eum incidunt
//                 minima debitis aliquam numquam suscipit, saepe natus distinctio
//                 ipsam facere.
//               </span>
//               <span className='border-2 border-blue-500 p-2'>
//                 Lihat Selengkapnya Bro/Sis...
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Section Testimoni */}
//         <div className='relative w-full mt-10 overflow-hidden'>
//           <motion.div
//             className='flex'
//             style={{ x }} // Menggunakan motionValue x untuk kontrol animasi
//           >
//             {extendedTestimoniData.map((testimoni, index) => (
//               <motion.div
//                 key={index}
//                 className='relative flex-shrink-0 w-[550px] h-[250px] flex items-center justify-center '
//                 onHoverStart={() => setIsHovered(true)} // Pause animasi saat hover
//                 onHoverEnd={() => setIsHovered(false)}
//                 whileHover={{ scale: 1.05 }} // Lanjutkan animasi setelah hover
//               >
//                 {/* Gambar di belakang teks */}
//                 <motion.div
//                   className='absolute w-[150px] h-[150px] top-1 left-[20%] z-10'
//                   whileHover={{ scale: 1.2 }} // Membesar saat hover
//                 >
//                   <Image
//                     src={item1} // Ganti dengan gambar sesuai data
//                     alt={`Testimoni dari ${testimoni.name}`}
//                     className='w-full h-full object-cover rounded-xl'
//                     layout='fill'
//                   />
//                 </motion.div>
//                 <div className='ml-10 bg-gray-100 rounded-xl p-5 flex flex-col items-center justify-center shadow-xl z-20 w-[50%]'>
//                   <span className='border-2 shadow-xl w-16 h-16 rounded-full flex items-center justify-center'>
//                     <i className='fa-solid fa-user'></i>
//                   </span>
//                   <span className='text-sm italic text-gray-700 mb-2'>
//                     {testimoni.text}
//                   </span>
//                   <span className='font-semibold text-gray-800'>
//                     {testimoni.name}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className='h-sceen p-4 bg-gray-200 text-center mt-10'>
//         <span>Footer</span>
//       </footer>
//     </div>
//   );
// }
