import React, { useState } from 'react';
import { Link } from 'gatsby';
import Coobo from '../images/coobo-logo-white.png';
import CooboColor from '../images/coobomedia_logo_color.png';
import Tilt from '../images/tilt_houston.jpg';
import SideNav from '../components/side-nav';
import SocialNav from '../components/social-nav';
import { animated, useSpring, config } from 'react-spring';
import Typical from 'react-typical';

import { useMediaQuery } from 'react-responsive';

const steps = [
  '',
  3000,
  'Search Engine Optimization',
  3000,
  'Brand Development',
  3000,
  'Social Media Marketing',
  3000,
  'Graphic Design',
  3000
];

const Tuts = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: config.molasses
  });

  const focus = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: config.molasses
  });

  const type = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 5000,
    config: config.molasses
  });

  return (
    <>
      <header
        style={{ marginBottom: '1px' }}
        className="z-40 w-full lg:hidden shadow bg-white"
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link className="flex items-center no-underline text-white" to="/">
            <img className="h-6" src={CooboColor} />
          </Link>
          <button
            className="z-40 focus:outline-none block lg:hidden flex items-center px-1 py-1 rounded text-white"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            <svg
              className="fill-current text-gray-500 h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
      <div
        style={{ position: 'sticky', top: '0' }}
        className="hidden lg:block z-30 float-right"
      >
        <button
          style={{ backgroundColor: '#EC5226' }}
          className="focus:outline-none border-l-4 border-b-4 lg:border-l-8 lg:border-b-8 border-white px-3 py-2 text-white"
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <svg
            className="fill-current text-white h-10 w-10"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        style={{
          height: isDesktopOrLaptop ? '100vh' : 'calc(100vh - 7.5rem)'
        }}
        className="z-0"
      >
        <SideNav isOpen={isNavOpen} />
        <SocialNav />
        <div
          style={{
            backgroundImage: `url(${Tilt})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className="relative bg-center h-full border-8 lg:border-8 border-white"
        >
          <div className="hidden lg:block bg-transparent flex justify-between items-center py-10 px-16 text-white">
            <Link to="/">
              <img src={Coobo} />
            </Link>
          </div>

          <div className="mx-auto pl-4 pt-40 lg:pl-64 pr-16 lg:pt-48">
            <animated.h1
              style={fade}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white font-bold lg:font-extrabold"
            >
              A Creative Agency
            </animated.h1>

            <animated.span
              style={focus}
              className="text-small lg:text-4xl text-white font-light italic"
            >
              Focused on{' '}
            </animated.span>
            <animated.span style={type}>
              <Typical
                wrapper="span"
                steps={steps}
                loop={Infinity}
                className={
                  'text-white text-small lg:text-4xl italic font-light'
                }
              />
            </animated.span>
          </div>

          <div className="z-10 absolute border-l-4 border-t-4  lg:border-l-8 lg:border-t-8  border-white bg-white bottom-0 right-0 ">
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
        </div>
      </div>

      <div style={{ height: '1000px' }} className="">
        hi
      </div>
    </>
  );
};

export default Tuts;
