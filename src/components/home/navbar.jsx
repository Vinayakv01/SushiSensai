import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import Signin from './login/signin';
import SignUp from './login/signup';

const Navbar = ({ className }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarBlurred, setNavbarBlurred] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 100;
    setNavbarBlurred(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };


  return (
    <nav className={` w-full py-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg px-8 ${isNavbarBlurred ? 'bg-[rgba(0,0,0,0.3)] backdrop-blur-lg' : 'bg-transparent'} ${className}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-white text-lg font-bold font-sans">
          <Link to="/" className="text-white text-lg font-bold">Logo</Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden lg:flex space-x-5 items-center">
          <div className="space-x-10 mb-1 font-Montserrat flex items-center">

          </div>

          {/* <div className="h-14 bg-[#3f4340] w-px mx-4"></div>  */}

          <button
            onClick={openSignInModal}
            className="text-white text-[20px] px-6 py-2.5 font-Montserrat  rounded-lg hover:bg-opacity-75 transition duration-300"
          >
            log in
          </button>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">

          <button
            onClick={openSignInModal}
            className="font-Montserrat"
          >
            Login
            <CiLogin className="inline-block ml-1" />
          </button>
        </div>
      )}

      {isSignInModalOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <Signin onClose={closeSignInModal} />
        </div>
      )}

    </nav>
  );
};

export default Navbar;





// bg-opacity-50 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg