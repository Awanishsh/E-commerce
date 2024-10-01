import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:24'>
      {/* Main footer container */}
      <div className='container flex space-x-6 mx-auto grid-cols-1 md:grid-cols-3 gap-8 justify-around'>
        
        {/* Company description */}
        <div className='w-52'>
          <h3 className='text-xl font-semibold'>Shopme</h3>
          <p className='mt-4'>
            Your one-stop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
        </div>
        
        {/* Quick Links section */}
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li><Link to='/' className='hover:underline'>Home</Link></li>
            <li><Link to='/shop' className='hover:underline'>Shop</Link></li>
            <li><Link to='/contact' className='hover:underline'>Contact</Link></li>
            <li><Link to='/about' className='hover:underline'>About</Link></li>
          </ul>
        </div>
        
        {/* Social media and subscription section */}
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            {/* Social media icons */}
            <a href="" className='hover:text-gray-400'><FaFacebook /></a>
            <a href="" className='hover:text-gray-400'><FaTwitter /></a>
            <a href="" className='hover:text-gray-400'><FaGithub /></a>
            <a href="" className='hover:text-gray-400'><FaLinkedin /></a>
          </div>
          
          {/* Subscription form for newsletters */}
          <form className='flex items-center justify-center mt-12'>
            <input 
              type="email" 
              className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' 
              placeholder='Enter Email' 
            />
            <button className='bg-red-500 text-white px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* Footer bottom section with copyright and links */}
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 Shopme All rights reserved</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
