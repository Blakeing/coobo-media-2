import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'gatsby';

// eslint-disable-next-line react/prop-types
const Nav = ({ style }) => {
  return (
    <animated.div className="fixed inset-0 py-24 px-5 z-20" style={style}>
      <nav>
        <div>
          <Link
            className="block font-bold tracking-wide text-left text-3xl text-white hover:text-gray-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block font-bold tracking-wide text-left text-3xl text-white hover:text-gray-400"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="block font-bold tracking-wide text-left text-3xl text-white hover:text-gray-400"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="block font-bold tracking-wide text-left text-3xl text-white hover:text-gray-400"
            to="/work"
          >
            Our Work
          </Link>
          <Link
            className="block font-bold tracking-wide text-left text-3xl text-white hover:text-gray-400"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-10">
          <h3 className="text-white text-2xl font-bold tracking-wide">
            Contact Information
          </h3>
          <p className="text-white font-thin">281.206.0022</p>
          <p className="text-white font-thin">info@coobomedia.com</p>
          <p className="text-white font-thin">
            9525 Katy Freeway, Suite 230 Houston, Texas 77024
          </p>
        </div>
      </nav>
    </animated.div>
  );
};

export default Nav;
