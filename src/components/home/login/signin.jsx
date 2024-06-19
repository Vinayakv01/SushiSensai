import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const Signin = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#D2E6C9] rounded-lg shadow-lg px-8 pb-8 pt-4 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold mb-4">Log In</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <RxCross2 size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-500">
                Remember Me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-gray-500 hover:text-green-600">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#BCE158] to-[#387339] hover:from-[#387339] hover:to-[#BCE158] text-lg font-semibold w-full text-white px-4 py-2 rounded-md  transition-colors"
            >
              Log In
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Don't have an account? <a href="#" className="text-gray-600 hover:text-green-800">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
