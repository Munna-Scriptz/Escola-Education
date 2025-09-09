import React from 'react'
import { Link } from 'react-router'
import TestimonialImage from '../../assets/images/TestimonialImage.png'
import TestimonialPlay from '../../assets/images/TestimonialPLay.png'
const Passion = () => {
  return (
    <>
        <section id='Passion-About' className='mt-[120px]'>
            <div className="container">
                <div id="Passion-Row">
                    <div className='bg-[#2F57EF] relative py-8 lg:py-[56px] px-6 lg:pl-[71px] w-full h-auto lg:h-[330px] rounded-[5px] flex flex-col lg:flex-row items-center lg:items-start'>
                        <div className='flex-1 text-center lg:text-left'>
                            <h2 className='font-inter font-bold text-white text-2xl md:text-3xl lg:text-[42px] lg:w-[446px]'>
                            We made passion our raw material
                            </h2>
                            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-[50px]'>
                            <Link to={'/'}>
                                <img src={TestimonialPlay} alt="Play" className="w-10 sm:w-auto"/>
                            </Link>
                            <div>
                                <p className='text-white text-sm md:text-base lg:text-[17px]'>Call us now</p>
                                <p className='font-inter font-bold text-lg md:text-xl lg:text-[21px] text-white'>+880 1327-312666</p>
                            </div>
                            </div>
                        </div>
                        <div className='mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full w-full lg:w-auto'>
                            <img className='w-full lg:w-[494px] h-[200px] lg:h-full object-cover rounded-md lg:rounded-none' src={TestimonialImage} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Passion