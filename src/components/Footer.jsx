import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/Logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer className='mt-[120px] bg-[#F3F6FB]'>
            <div className='container'>
              <div id="FooterRow" className='flex items-start gap-[71px] py-[95px]'>
                {/* ----------------Column 1---------------- */}
                <div>
                  <img src={Logo} alt="Logo" />
                  <p className='font-inter text-[18px] leading-[36px] w-[300px] text-secondBK'>Lorem Ipsum is simply dummy texis the printing Lorem Ips is simply dummy text</p>
                  <div className='flex items-center gap-[10px] mt-[42px]'>
                    <div className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaTwitter className='text-[15px]'/>
                    </div>
                    <div className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaFacebookF className='text-[15px]'/>
                    </div>
                    <div className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <IoLogoInstagram className='text-[15px]'/>
                    </div>
                    <div className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaPinterestP className='text-[15px]'/>
                    </div>
                  </div>
                </div>
                {/* ----------------Column 2---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>All Links</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Credit industrys</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Credit Consulting</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Business Credit industry</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Finance industry</p>
                      </div>
                    </div>
                </div>
                {/* ----------------Column 3---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>More Servicve</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Ui Design</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Ux Design</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Digital Marketing</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Video Editing</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <p>Pc Repairs</p>
                      </div>
                    </div>
                </div>
                {/* ----------------Column 4---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>Get In Touch</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <p>E-mail:example@mail.com</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <p>Call:+125 856 632</p>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <p>Location:3 Number Road ,C block, Housing,USA</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            {/* ---------Bottom Section--------- */}
            <div className='border-t-1 border-[#19233559]'>
              <div className="container flex items-center justify-between py-[30px]">
                <h2 className='font-inter text-secondBK text-[16px]'>© Yoursitename  2023 | All Rights Reserved</h2>
                <div className='font-inter text-secondBK text-[16px] flex items-center gap-[43px]'>
                  <Link to={'/'}>Trams & Condition</Link>
                  <Link to={'/'}>Privacy Policy</Link>
                  <Link to={'/'}>Contact Us</Link>
                </div>
              </div>
            </div>
        </footer>
    </>
  )
}

export default Footer