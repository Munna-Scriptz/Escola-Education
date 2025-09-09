import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Route>
  ))


  return (
    <RouterProvider router={MyRoute} />
  )
}

export default App