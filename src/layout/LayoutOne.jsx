import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResNav from '../components/ResNav'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <ResNav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutOne