import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './Home';
import AboutUs from './AboutUs';
import Team from './Team';
import Testimonial from './Testimonial';
import Services from './Services';
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import ContactUs from './ContactUs';


import reportWebVitals from './reportWebVitals';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
      <Route path="*" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/index" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/testimonials" element={<Testimonial/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/blog" element={<Blogs/>}></Route>
        {/* <Route path="/blog/:slug" element={<Blogs/>}></Route> */}
        <Route path="/blog-detail" element={<BlogDetail/>}></Route>
        {/* <Route path="/blog-detail/:slug" element={<BlogDetail/>}></Route> */}
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
