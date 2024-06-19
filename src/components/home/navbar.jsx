import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import Signin from './login/signin';
import logo from "../../assets/Sushilogo.png";

const Navbar = ({ className }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarBlurred, setNavbarBlurred] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={`w-full py-4 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg px-8 ${isNavbarBlurred ? 'bg-[rgba(0,0,0,0.3)]' : 'bg-transparent'} ${className}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white text-lg font-bold font-sans">
            <Link to="/" className="text-white text-lg font-bold">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
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
              {/* Dropdown menu */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white text-[20px] px-6 py-2.5 font-Montserrat rounded-lg hover:bg-opacity-75 transition duration-300"
                >
                  Language
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <ul className="py-1 text-black">
                      <li className="px-4 py-2 hover:bg-gray-200">German</li>
                      <li className="px-4 py-2 hover:bg-gray-200">English</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={openSignInModal}
              className="text-white text-[20px] px-6 py-2.5 font-Montserrat rounded-lg hover:bg-opacity-75 transition duration-300"
            >
              Log In
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
      </nav>

      {isSignInModalOpen && (
        <Signin onClose={closeSignInModal} />
      )}
    </>
  );
};

export default Navbar;


// bg-black bg-opacity-50

// bg-opacity-50 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg