import React, { useState } from 'react';
import { Link } from 'gatsby';
import Mark from '../images/header_bg_mark.jpg';
import Harrison from '../images/staff_abt_blake_harrison.jpg';
import Coobo from '../images/coobo-logo-white.png';
import SideNav from '../components/side-nav';

const About = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className="relative border-white border-t-8 flex bg-cover bg-center h-32 md:h-48 xl:h-64"
        style={{
          backgroundImage: `url(${Mark})`,
          height: '300px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset'
        }}
      >
        <Link to="/">
          <img
            style={{ top: '2rem', left: '2rem' }}
            className="hidden lg:block absolute top-0 left-0 bg-transparent "
            src={Coobo}
          />
        </Link>
        <div className="hidden lg:block fixed top-0 right-0 z-30 ">
          <button
            style={{ backgroundColor: '#EC5226' }}
            onClick={() => setNavOpen(!isNavOpen)}
            className="focus:outline-none border-l-4 border-b-4 lg:border-l-8 lg:border-b-8 border-white px-3 py-2 text-white"
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
        <div style={{ bottom: '25%', left: '5%' }} className="absolute">
          <h2 className="pl-5 lg:pl-16 text-white text-3xl md:text-5xl font-bold">
            About Us
          </h2>
        </div>

        <ul className="pr-40 lg:w-full hidden lg:flex lg:items-center lg:justify-end">
          <li className="">
            <Link
              className="py-2 border-l-4 border-white bg-gray-400 px-3 text-2xl font-light text-white "
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 bg-gray-900 py-2 px-3 text-2xl font-light text-white"
              to="/web"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 bg-gray-900 py-2 px-3 text-2xl font-light text-white "
              to="/print"
            >
              Print
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 bg-gray-900 py-2 px-3 text-2xl font-light text-white "
              to="/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 bg-gray-900 py-2 px-3 text-2xl font-light text-white "
              to="/marketing"
            >
              Marketing
            </Link>
          </li>
        </ul>
      </div>
      <nav className="lg:hidden flex bg-gray-900 ">
        <Link className=" pl-5 py-3 text-sm text-white pr-6 " to="/">
          Web
        </Link>
        <Link className="py-3 text-sm text-white pr-6" to="/">
          Print
        </Link>
        <Link className="py-3 text-sm text-white pr-6" to="/">
          Brand
        </Link>
        <Link className=" text-sm text-white py-3" to="/">
          Marketing
        </Link>
      </nav>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 bg-gray-100 p-5 lg:p-16">
          <p className="text-gray-700 pb-6">
            Coobo Media takes pride in the partnerships we form with all of our
            clients. Our mantra is “Be Thoughtful in Everything You Do.” We
            believe that if you put an extra measure of considered thought into
            every design, plan and interaction, the results will exceed
            expectations.
          </p>
          <p className="text-gray-700 pb-6">
            Our branding, marketing and web design experience spans a wide
            variety of industries. We work with clients in our building, our
            neighborhoods, across Houston, around Texas, the U.S. and even the
            U.K. Our current client list includes consumer brands as well as
            business-to-business marketers. With Coobo Media, you get all of the
            services of a big agency with the personal, principal-level
            attention of a small firm.
          </p>

          <ul className="pb-5">
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Energy (oil and gas and oilfield equipment/services)
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Manufacturing
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Logistics
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Construction
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Architecture
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Law
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Health Care
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Insurance
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Private Schools
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Universities
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Retail
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Churches
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Food and Beverage
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Software
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Non-Profits
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Home Builders
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Interior Design
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Professional Athletes
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Book Publishing
            </li>
          </ul>
          <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-red-600">
            Contact Us
          </button>
        </div>
        <div className="w-full bg-gray-800 md:w-1/2 ">
          <div className="flex flex-wrap">
            <div
              style={{
                backgroundImage: `url(${Harrison})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset'
              }}
              className="relative hover:opacity-75 w-full md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute text-white tracking-wide font-semibold text-lg p-2"
              >
                Blake Harrison
              </span>
              <Link to="/blake">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block uppercase text-sm tracking-wider text-white font-semibold p-2 ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block pl-3 pb-1 h-10 w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Harrison})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset'
              }}
              className="relative hover:opacity-75 w-full md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute text-white tracking-wide font-semibold text-lg p-2"
              >
                Blake Harrison
              </span>
              <Link to="/blake">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block uppercase text-sm tracking-wider text-white font-semibold p-2 ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block pl-3 pb-1 h-10 w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-6"></div>
    </>
  );
};

export default About;
