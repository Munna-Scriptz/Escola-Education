import React from 'react'
import CommonHead from './common/CommonHead'
import pfp from '../assets/images/ServicesProfile.png'
import { FaRegUser } from "react-icons/fa6";

const Services = () => {
  return (
    <>
        <section id='Services' className='mt-[120px]'>
            <div className="container">
                {/* -------------Header----------------- */}
                <div className='w-[434px]'>
                    <CommonHead topText={'Services we’re offering'} BottomText={'Navigating your path to success'}/>
                </div>
                {/* -------------Services Slider----------------- */}
                <div className='mt-[40px] w-[410px] p-[30px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[10px]'>
                            <img src={pfp} alt="Review Imag" />
                            <p className='text-secondBK font-inter text-[13px]'>By leonardo</p>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <FaRegUser className='text-[#2F57EF]'/>
                            <p className='text-secondBK font-inter text-[13px]'>50 Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services