import React from 'react'
import CommonHead from './common/CommonHead'
import SingleBlogCard from './common/SingleBlogCard'
import img1 from '../assets/images/blogImg1.png'
import img2 from '../assets/images/blogImg2.png'
import img3 from '../assets/images/blogImg3.png'

const Blog = () => {
  return (
    <>
        <section id='Blog' className='mt-[112px]'>
            <div className="container">
                <div id="Blog-Row">
                    {/* -----------------------------Header------------------------- */}
                    <div className='lg:w-[617px] w-full mx-auto text-center'>
                        <CommonHead topText={'Blog & Article'} BottomText={'Business strategy is the plan and actions'}/>
                    </div>
                    {/* -----------------------------Blog Cards------------------------- */}
                    <div className='mt-[51px] flex lg:flex-row gap-y-[20px] flex-col items-center justify-between'>
                        <SingleBlogCard blogImg={img1} heading={'Corporate culture refers to the values  beliefs market'}/>
                        <SingleBlogCard blogImg={img2} heading={'Unleashing the full potential of your business'}/>
                        <SingleBlogCard blogImg={img3} heading={'Solving problems seizing opportunities For Us'}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog