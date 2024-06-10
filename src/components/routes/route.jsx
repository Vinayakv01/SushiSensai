// main route
// import React from 'react';
import Home from '../home/home';
import Layout from '../layout/layouts';
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
