import React from 'react';

const Footer = () => {
  return (
    <div>
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
};

export default Footer;
