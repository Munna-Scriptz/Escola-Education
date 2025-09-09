import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const Breadcrumb = ({toPara , toLink}) => {
  return (
    <>
        <section id='Breadcrumb'>
            <div className="container">
                <div id="BreadCrumb-Row" className='py-[96px]'>
                    <h2 className='text-secondBK text-[36px] font-bold text-center'>About Us</h2>
                    <div className='text-secondBK text-[20px] font-bold text-center mt-4 flex items-center justify-center gap-[19px]'>
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