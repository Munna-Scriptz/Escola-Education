import React from 'react'
import img1 from '../../assets/images/blogImg1.png'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FaArrowRight, FaRegComments } from 'react-icons/fa6'
import { Link } from 'react-router'
const SingleBlogCard = () => {
  return (
    <>
        <div className='w-[410px]'>
            {/* -------------Blog Image----------- */}
            <div className='relative'>
                <img src={img1} alt="Blog image" />
                <div className='absolute top-[20px] left-[20px] bg-txtBrand w-[80px] h-[80px] rounded-l-[5px] py-[9px] px-[20px] leading-[31px]'>
                    <p className='text-white font-bold text-[21px] text-center'>21 FEB</p>
                </div>
            </div>
            {/* -----------------Text Body------------------ */}
            <div className='py-[30px]'>
                {/* -------------Blog Dates----------- */}
                <div className='flex items-center gap-[20px] mb-[19px]'>
                    <div className='flex items-center gap-[10px] text-txtBrand'>
                        <AiFillFolderOpen size={20}/>
                        <p className='text-secondBK text-[17px]'>Category</p>
                    </div>
                    <div className='flex items-center gap-[10px] text-txtBrand'>
                        <FaRegComments size={20}/>
                        <p className='text-secondBK text-[17px]'>Comments (05)</p>
                    </div>
                </div>
                <h2 className='text-secondBK font-bold text-[21px]'>Corporate culture refers to the values  beliefs Manket</h2>
                <p className='text-secondBK opacity-75 mt-[17px] text-[17px] mb-[35px]'>Contrary to popular belief, Lorem Ipsum is not simply random text many kindsman ontrary to popular belief Lorem Ipsum.</p>
                <div>
                    <Link to={'/'} className='text-secondBK font-medium text-[15px] flex items-center gap-3'>Read more <FaArrowRight size={20} fill='#2F57EF' /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlogCard