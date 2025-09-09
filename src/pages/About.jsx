import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Courses from '../components/Home/Courses'
import Passion from '../components/About/Passion'
import PopularCourses from '../components/About/PopularCourses'
import Brands from '../components/Home/Brands'
import ClientsReview from '../components/About/ClientsReview'

const About = () => {
  return (
    <>
        <Breadcrumb toPara={'About'} toLink={'about'}/>
        <Courses/>
        <Passion/>
        <PopularCourses/>
        <Brands/>
        <ClientsReview/>
    </>
  )
}

export default About