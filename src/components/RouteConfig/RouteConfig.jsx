import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Services from '../../Pages/Services/Services'
import Contact from '../../Pages/Contact/Contact'
// components 
import Header from '../Header/Header'

const RouteConfig = () => {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default RouteConfig