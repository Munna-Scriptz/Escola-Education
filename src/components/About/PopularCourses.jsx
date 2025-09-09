import React from 'react'
import CommonHead from '../common/CommonHead'
import { Link } from 'react-router'
import { FaCheck } from 'react-icons/fa6'
import coursesImg from '../../assets/images/aboutPopular.png'
import dotsDeco from '../../assets/images/dotsDeco.png'

const PopularCourses = () => {
  return (
    <>
        <section id='Popular' className='mt-[120px]'>
            <div className="container">
                <div id="Popular-Row">
                    {/* --------------Header------------------ */}
                    <div className='flex lg:flex-row flex-col items-center justify-between'>
                        <div className='lg:w-[459px]'>
                            <CommonHead topText={'Top Popular Course'} BottomText={'Knowledge is power  education is the key'}/> 
                        </div>
                        <div className='lg:w-[517px] lg:mt-0 mt-2'>
                            <p className='text-secondBK text-[17px] mb-10'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as</p>
                            <div>
                                <Link className='border-txtBrand border-1 py-[13px] px-[36px] rounded-[5px] hover:bg-txtBrand hover:text-white duration-300' to={'/contact'}>Contact us</Link>
                            </div>
                        </div>
                    </div>
                    {/* --------------Courses Card------------------ */}
                    <div className='relative pt-[45px] flex lg:flex-row flex-col items-center gap-[28px] lg:mt-0 mt-12'>
                        <div className='bg-[#FCCC44] lg:px-[40px] px-[30px] lg:py-[35px] py-[30px] rounded-[20px] w-fit'>
                            <p className='font-inter lg:text-[21px] text-xl text-secondBK mt-[17px] font-bold'>Education Is The Key</p>
                            <div className='flex flex-col gap-[16px] mt-[39px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                    <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[13px]'>education is the key</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                    <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[13px]'>A Whole Lot of Digital Love for Less</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                    <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[13px]'>Know what your target market wants and needs</p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                    <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[13px]'>A Whole Lot of Digital Love for Less</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={coursesImg} alt="Image" />
                        </div>
                        <div className='absolute top-0 right-[10px] z-[-1]'>
                            <img src={dotsDeco} alt="decoration" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PopularCourses