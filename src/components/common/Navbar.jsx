import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <div className='lg:block hidden'>
      {/* ----------------Header Section----------------- */}
        <header className="py-[12px] bg-[#F3F6FB]">
          <div className="container">
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2 text-secondBK font-inter text-[17px]">
                <FaLocationDot />
                <p>6391 Elgin St. Celina, 10299</p>
              </div>
              <div className="flex items-center gap-[31px] font-inter text-[17px] text-secondBK">
                <p className='flex items-center gap-1'><IoCall /> (629) 555-0129</p>
                <p className='flex items-center gap-1'><MdEmail /> info@example.com</p>
              </div>
            </div>
          </div>
        </header>
      {/* ----------------Navbar Section----------------- */}
      <nav>
        <div className="container">
          <div id='Navbar-Row' className="flex items-center justify-between py-4">
            <div className='flex items-center gap-[32px]'>
              <img src={Logo} alt="Logo" />
              <ul className="flex items-center gap-[24px] font-inter text-base text-secondBK font-medium">
                <Link to={'/'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Home <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/about'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">About Us <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/services'} className="hover:text-blue-600 cursor-npm run devointer flex items-center gap-1">Services <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/projects'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Projects <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/blog'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Blog <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/page'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Page <FaAngleDown className='text-[10px]'/></Link>
                <Link to={'/contact'} className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Contact <FaAngleDown className='text-[10px]'/></Link>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Search" className="w-[263px] h-[50px] outline-none border-1 border-[#19233533] pl-[20px] rounded-[5px]" />
              <button className="h-[50px] w-[50px] bg-brand rounded-[5px] flex items-center justify-center text-white text-[20px] cursor-pointer"><IoSearchSharp /></button>
              <button className="h-[50px] w-[50px] hover:bg-brand duration-[.3s] text-brbg-brand rounded-[5px] flex items-center justify-center hover:text-white text-[20px] cursor-pointer"><MdOutlineShoppingCart  /></button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;