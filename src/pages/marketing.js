import React from 'react';
import { Link } from 'gatsby';
import Mark from '../images/header_bg_mark.jpg';
import Edge from '../images/web_energy-edge.jpg';

const Marketing = () => {
  return (
    <>
      <div
        className="flex bg-cover bg-center h-32 md:h-48 xl:h-64"
        style={{ backgroundImage: `url(${Mark})` }}
      >
        <div className="w-1/2 flex items-center">
          <h2 className="pl-5 lg:pl-16 text-white text-3xl md:text-5xl font-bold">
            Marketing
          </h2>
        </div>
        <div className=" w-1/2 hidden lg:flex lg:items-center lg:justify-center">
          <nav className="">
            <ul className="flex">
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
          </nav>
        </div>
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
      <div className="flex flex-wrap ">
        <div className="md:w-1/2 bg-gray-100 p-5 lg:p-16">
          <h2 className="leading-tight text-gray-900 font-bold text-3xl pb-6">
            It starts with a plan...
          </h2>
          <p className="text-gray-700 pb-6">
            From the origin of your company to your most recent “win” lies a
            marketing strategy. Coobo Media understands where it lives and how
            to make it shine. When marketing gets lost or put aside, we help you
            refocus.
          </p>
          <p className="text-gray-700 pb-6">
            With the advent of Digital Marketing, companies can now reach
            customers and prospects with precise messaging and targeted offers
            using budgets of all sizes. Now you have the ability to analyze
            results in real-time and to continually optimize your message,
            audience and spending.
          </p>

          <p className="pb-6 text-xl font-bold">
            <q>By failing to prepare, you are preparing to fail.</q>
            <br />- Benjamin Franklin
          </p>
          <ul className="pb-5">
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Marketing
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Digital Marketing
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Content Planning
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Pay-Per-Click Advertising (PPC)
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Email Marketing
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Blog Content Management
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Social Media Posts
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Social Media Advertising
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Search Engine Optimization (SEO)
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Public Relations
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Print Advertising
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Video
            </li>
          </ul>
          <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-red-600">
            Contact Us
          </button>
        </div>
        <div className="bg-gray-800 md:w-1/2">
          <div className=" flex flex-col justify-between">
            <div className="flex flex-wrap">
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src={Edge}
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
            </div>
            <div className="mx-auto py-10">
              <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-red-600">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-6"></div>
    </>
  );
};

export default Marketing;