import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const Breadcrumb = ({toPara , toLink}) => {
  return (
    <>
        <section id='Breadcrumb'>
            <div className="container">
                <div id="BreadCrumb-Row" className='lg:py-[96px] py-[42px] lg:h-[320px] h-auto'>
                    <h2 className='text-secondBK lg:text-[36px] text-[26px] font-bold text-center'>About Us</h2>
                    <div className='text-secondBK lg:text-[20px] text-base font-bold text-center mt-4 flex items-center justify-center lg:gap-[19px] gap-3'>
                        <Link to={'/'}>Home</Link>
                        <FaAngleRight />
                        <Link to={`/${toLink}`}>{toLink}</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Breadcrumb