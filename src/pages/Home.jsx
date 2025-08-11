import React from 'react'
import Banner from '../components/Banner'
import Teaches from '../components/Teaches'
import Courses from '../components/Courses'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import Knowledge from '../components/Knowledge'

const Home = () => {
  return (
    <>
      <Banner/>
      <Teaches/>
      <Courses/>
      <Services/>
      <GetInTouch/>
      <Brands/>
      <Testimonials/>
      <Knowledge/>
    </>
  )
}

export default Home