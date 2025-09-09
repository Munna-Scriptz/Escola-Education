import React from 'react'
import Banner from '../components/Home/Banner'
import Teaches from '../components/Home/Teaches'
import Courses from '../components/Home/Courses'
import Services from '../components/Home/Services'
import GetInTouch from '../components/Home/GetInTouch'
import Brands from '../components/Home/Brands'
import Testimonials from '../components/Home/Testimonials'
import Knowledge from '../components/Home/Knowledge'
import Blog from '../components/Home/Blog'

const Home = () => {
  return (
    <>
      <div id='HomePage'>
        <Banner/>
        <Teaches/>
        <Courses/>
        <Services/>
        <GetInTouch/>
        <Brands/>
        <Testimonials/>
        <Knowledge/>
        <Blog/>
      </div>
    </>
  )
}

export default Home