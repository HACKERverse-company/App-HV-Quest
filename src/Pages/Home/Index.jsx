import React from 'react';
import logo from '../../../logogreen.png'; // make sure to replace with your actual logo path
import 'tailwindcss/tailwind.css';

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <img src={logo} alt="Company Logo" className="w-36 mb-8" />
      <h1 className="text-4xl text-gray-300">Welcome to the Hackerverse App</h1>
    </div>
  );
};

export default Index;
