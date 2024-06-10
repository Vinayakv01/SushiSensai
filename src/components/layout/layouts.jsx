import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../home/navbar';
import Footer from '../home/footer';

const Layout = () => {
  return (
    <div className="">
      <div className="relative">
        <Navbar className="absolute top-0 left-0  z-10" />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
