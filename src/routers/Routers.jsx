import React from 'react';
import {Routes, Route,Navigate } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import CarListing from '../pages/CarListing';
import Blog from '../pages/Blog';
import CarDetails from '../pages/CarDetails';
import BlogDetails from "../pages/BlogDetails";

const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path="/cars" element={<CarListing />} />
    <Route path="/cars/:slug" element={<CarDetails />} />
    <Route path="/blogs" element={<Blog />} />
    <Route path="/blogs/:slug" element={<BlogDetails />} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers