import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa6'
import reviewImg from '../../assets/images/ServicesProfile.png'
const ClientsSingleCard = ({img , text , name , role}) => {
  return (
    <>
        <div className='w-[410px] py-[40px] px-[40px] rounded-[5px] bg-white'>
            {/* ----------------Stars---------------- */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-[#FFBA08] text-lg'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='w-[50px] h-[50px] bg-txtBrand rounded-full flex items-center justify-center text-white text-2xl'>
                    <FaQuoteRight />
                </div>
            </div>
            <p className='text-secondBK text-[17px] leading-[26px] my-[40px]'>{text}</p>
            <div className='flex items-center gap-[15px]'>
                <img src={img} alt="pfp" />
                <div>
                    <h2 className='text-secondBK text-lg font-bold'>{name}</h2>
                    <p className='text-secondBK text-[17px] mt-1'>{role}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ClientsSingleCard