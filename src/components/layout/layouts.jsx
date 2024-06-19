import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../home/navbar';
import Footer from '../home/footer';

const Layout = () => {
  return (
    <div className="">
      {window.location.pathname !== '/register' && (
        <>
          <Navbar className="absolute top-0 left-0 z-10" />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
      {window.location.pathname === '/register' && (
        <main>
          <Outlet />
        </main>
      )}
    </div>
  );
};

export default Layout;
