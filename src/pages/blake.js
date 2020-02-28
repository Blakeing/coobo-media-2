import React, { useState } from 'react';
import Harrison from '../images/staff_blake_harrison.jpg';
import Div100vh from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import SideNav from '../components/side-nav';
import { Link } from 'gatsby';

const Blake = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap z-0 bg-white border-t-8 border-white">
        <div className="hidden lg:block fixed top-0 right-0 z-30 ">
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
        <SideNav isOpen={isNavOpen} />
        <Div100vh
          style={{
            backgroundImage: `url(${Harrison})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isDesktopOrLaptop ? 'calc(100rvh - 6.5rem)' : '380px'
          }}
          className="w-full md:w-1/4"
        />
        <div
          style={{ backgroundColor: '#41b2bf' }}
          className="flex flex-col items-center justify-center md:w-3/4"
        >
          <div className="w-full px-5 py-6 lg:p-10  ">
            <h1 className=" mb-2 leading-none text-white text-4xl lg:text-6xl font-bold">
              Blake Harrison
            </h1>
            <h2 className="text-white text-lg tracking-wide font-bold">
              Creative Director / Managing Partner
            </h2>
          </div>
          <div style={{ backgroundColor: '#3795A0' }} className="p-5 lg:p-10">
            <p className="mb-6 text-white font-light">
              Coobo Media is not only named after Blake‘s twin boys, Cooper and
              Bo, but it is also the realization of his dream to create a
              business where he gets to interact with all types of people from
              different industries. Blake’s expertise lies in helping clients
              understand and communicate their unique business “stories,”
              creating distinctive designs and utilizing technology to
              differentiate each business from their competition.
            </p>
            <p className="mb-6 text-white font-light">
              After three years in Real Estate Banking right out of college,
              Blake changed gears and spent ten years in the entertainment
              industry in Los Angeles, working on the writing staff of
              television shows such as “The Nanny,” “Grace Under Fire,” and “Mad
              About You.” His entree into Web Development started in the 90’s
              after raising funds and launching an online portal, featuring
              serialized comedy sketches. He and his wife missed Texas and moved
              back in 2002. He then spent six years heading up the marketing
              department for a manufacturer/distributor, who remains a client
              today.
            </p>
            <p className="text-white font-light">
              A graduate of Texas AM University, Blake is married to TK and has
              three kids.
            </p>
          </div>
          <div className=" py-10 flex justify-center items-center">
            <Link to="/about">
              <button className="px-10 py-3 tracking-wider uppercase font-medium text-sm text-white bg-transparent border-2 border-white">
                Back to About Us Page
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gray-900 h-24 border-b-8 border-white">
        <div
          style={{ right: '8rem', bottom: '-8px' }}
          className="z-30 absolute border-4 lg:border-8 border-white bg-white "
        >
          <button
            style={{ backgroundColor: '#EC5226' }}
            className="bg-red-500 focus:outline-none border border-white flex items-center px-3 py-2 text-white"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="facebook-f"
              className="fill-current text-white h-3 w-3 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ right: '2rem', bottom: '-8px' }}
          className="z-30 absolute border-4 lg:border-8 border-white bg-white "
        >
          <button
            style={{ backgroundColor: '#EC5226' }}
            className="bg-red-500 focus:outline-none border border-white flex items-center px-3 py-2 text-white"
          >
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="fill-current text-white h-3 w-3 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blake;
