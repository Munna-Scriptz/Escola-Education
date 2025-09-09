import React from 'react'
import CourseImg from '../../assets/images/CoursesImg.png'
import CourseICon1 from '../../assets/images/CourseIcon1.png'
import CourseICon2 from '../../assets/images/CourseIcon2.png'
import CourseICon3 from '../../assets/images/CourseIcon3.png'
import CommonHead from '../common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const Courses = () => {
  return (
    <>
        <section id="Courses" className='mt-[120px]'>
            <div className="container">
                <div id="CourseRow" className='flex lg:flex-row flex-col items-center gap-[80px]'>
                    {/* ----------Left Side-------- */}
                    <div className='lg:w-[770px] w-full'>
                        <div className='relative'>
                            <img src={CourseImg} alt="Image" />
                            <div className='bg-white lg:w-[268px] w-[170px] absolute top-[15px] left-[15px] flex items-center gap-[15px] p-[12px] rounded-[5px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                <img src={CourseICon3} alt="icon" className='lg:w-full w-[30px]'/>
                                <div>
                                    <h1 className='text-secondBK font-inter font-bold lg:text-[21px] text-sm'>Daily Activity</h1>
                                    <p className='text-secondBK font-inter font-normal lg:text-[17px] text-xs'>Loream is ispam</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-around'>
                            <div className='mt-[66px] flex items-center lg:gap-[37px] gap-3'>
                                <img src={CourseICon1} alt="Icon" className='lg:w-full w-[40px]'/>
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold lg:text-[46px] text-xl'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium lg:text-[21px] text-base'>Courses</p>
                                </div>
                            </div>
                            <div className='mt-[66px] flex items-center lg:gap-[37px] gap-3'>
                                <img src={CourseICon2} alt="Icon" className='lg:w-full w-[40px]'/>
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold lg:text-[46px] text-xl'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium lg:text-[21px] text-base'>Courses</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ----------Left Side-------- */}
                    <div className='lg:w-[440px] w-full'>
                        <CommonHead topText={'Top Popular Course'} BottomText={'Knowledge is power  education is the key'}/>
                        <p className='font-inter lg:text-[17px] text-sm md:leading-[26px] text-secondBK mt-[17px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training</p>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white lg:w-[30px] w-[25px] lg:h-[30px] h-[25px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold lg:text-[21px] text-[18px]'>Knowledge Hub</h2>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px] mt-3'>Ecologists use a variety of methods, such as field observa tions, experiments</p>
                            </div>
                        </div>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white lg:w-[30px] w-[25px] lg:h-[30px] h-[25px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold lg:text-[21px] text-[18px]'>Smart Scholars</h2>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px] mt-3'>The goal of ecology is to understand how organisms interact with each other </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Courses