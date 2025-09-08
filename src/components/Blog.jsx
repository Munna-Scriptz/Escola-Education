import React from 'react'
import CommonHead from './common/CommonHead'
import SingleBlogCard from './common/SingleBlogCard'

const Blog = () => {
  return (
    <>
        <section id='Blog' className='mt-[112px]'>
            <div className="container">
                <div id="Blog-Row">
                    {/* -----------------------------Header------------------------- */}
                    <div className='w-[617px] mx-auto text-center'>
                        <CommonHead topText={'Blog & Article'} BottomText={'Business strategy is the plan and actions'}/>
                    </div>
                    {/* -----------------------------Blog Cards------------------------- */}
                    <div className='mt-[51px]'>
                        <SingleBlogCard/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog