import React from 'react';
import { Link } from 'gatsby';

const BottomNav = () => {
  return (
    <div
      style={{ bottom: '0', right: '0' }}
      className="z-10 absolute border-t-4 border-l-4 lg:border-l-8 lg:border-t-8 border-white bg-white"
    >
      <button
        style={{ backgroundColor: 'rgb(181,47,47)' }}
        className="hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider bg-red-500 text-white py-2 px-3 lg:px-4"
      >
        <Link to="/web">Web</Link>
      </button>

      <button
        style={{ backgroundColor: 'rgb(67,135,75)' }}
        className="ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider bg-green-500 text-white py-2 px-3 lg:px-4 "
      >
        <Link to="/print">Print</Link>
      </button>
      <button
        style={{ backgroundColor: 'rgb(93,37,100)' }}
        className="ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider bg-purple-500 text-white py-2 px-3 lg:px-4 "
      >
        <Link to="/brand">Brand</Link>
      </button>
      <button
        style={{ backgroundColor: 'rgb(58,175,210)' }}
        className="ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider bg-blue-500 text-white py-2 px-3 lg:px-4 "
      >
        <Link to="/marketing">Marketing</Link>
      </button>
    </div>
  );
};

export default BottomNav;
