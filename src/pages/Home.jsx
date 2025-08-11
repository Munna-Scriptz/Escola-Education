import React from 'react'
import Banner from '../components/Banner'
import Teaches from '../components/Teaches'
import Courses from '../components/Courses'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'

const Home = () => {
  return (
    <>
      <Banner/>
      <Teaches/>
      <Courses/>
      <Services/>
      <GetInTouch/>
    </>
  )
}

export default Home