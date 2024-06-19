import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from "../../../assets/register.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    forename: '',
    surname: '',
    email: '',
    mobile: '',
    street: '',
    houseNumber: '',
    deliveryArea: '',
    floor: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    newsletterSubscribed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${register})` }}
          >
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="salutation" className="block text-sm font-medium text-gray-700">
              Salutation
            </label>
            <input
              type="text"
              id="salutation"
              name="salutation"
              value={formData.salutation}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="forename" className="block text-sm font-medium text-gray-700">
              Forename
            </label>
            <input
              type="text"
              id="forename"
              name="forename"
              value={formData.forename}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email e.g.: muster@domain.de
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">
              Street without house number
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">
              House number e.g.: 15, 100 b, 35C,...
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="deliveryArea" className="block text-sm font-medium text-gray-700">
              Delivery area
            </label>
            <input
              type="text"
              id="deliveryArea"
              name="deliveryArea"
              value={formData.deliveryArea}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="floor" className="block text-sm font-medium text-gray-700">
              Floor
            </label>
            <input
              type="text"
              id="floor"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company or name on the doorbell
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
              Accept terms and conditions
            </label>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="newsletterSubscribed"
              name="newsletterSubscribed"
              checked={formData.newsletterSubscribed}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="newsletterSubscribed" className="ml-2 block text-sm text-gray-900">
              Subscribe to our newsletter
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 w-full text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Create an account
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Already have an account? <Link to="/signin" className="text-indigo-600 hover:text-indigo-500">Sign In</Link>
            </p>
          </div>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">
          © Sushi Sensei 2023
        </div>
      </div>
    </div>
  );
};

export default Register;
