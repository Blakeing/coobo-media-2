import React from 'react';
import { Link } from 'gatsby';

const BottomNav = () => {
  return (
    <div
      style={{ bottom: '0', right: '0' }}
      className="z-10 absolute border-t-4 border-l-4 lg:border-l-8 lg:border-t-8 border-white bg-white"
    >
      <Link to="/web">
        <button className="bg-web hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider text-white py-2 px-3 lg:px-4 ">
          Web
        </button>
      </Link>
      <Link to="/print">
        <button className="bg-print ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider text-white py-2 px-3 lg:px-4 ">
          Print
        </button>
      </Link>
      <Link to="/brand">
        <button className="bg-brand ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider text-white py-2 px-3 lg:px-4 ">
          Brand
        </button>
      </Link>

      <Link to="/marketing">
        <button className="bg-marketing ml-1 lg:ml-2 hover:bg-gray-900 font-semibold text-sm lg:text-3xl tracking-wider text-white py-2 px-3 lg:px-4 ">
          Marketing
        </button>
      </Link>
    </div>
  );
};

export default BottomNav;
