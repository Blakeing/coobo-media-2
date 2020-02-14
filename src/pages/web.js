import React from 'react';
import { Link } from 'gatsby';
import Dog from '../images/header_bg_web.jpg';
import Edge from '../images/web_energy-edge.jpg';

const Web = () => {
  return (
    <>
      <div
        className="flex bg-cover bg-center h-32 md:h-48 xl:h-64"
        style={{ backgroundImage: `url(${Dog})` }}
      >
        <div className="w-1/2 flex items-center">
          <h2 className="pl-5 lg:pl-16 text-white text-3xl md:text-5xl font-bold">
            Web
          </h2>
        </div>
        <div className="w-1/2 hidden lg:flex lg:items-center  lg:justify-center">
          <nav className="">
            <ul className="flex px-5 py-2">
              <li>
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
      <div className="flex flex-wrap" style={{ height: '80vh' }}>
        <div className="md:w-1/2 bg-gray-100 p-5 lg:p-16">
          <h2 className="leading-tight text-gray-900 font-bold text-3xl pb-6">
            The Perfect Sales Pitch, Every Time
          </h2>
          <p className="text-gray-700 pb-6">
            Imagine training a sales person to present your company in the most
            perfect way. They would consistently deliver a succinct, yet
            strategic message that fully explains the benefits and features of
            your product/service; PLUS they would be available, on demand, 24
            hours a day, 365 days a year to answer questions or to close the
            deal. This… should be your website.
          </p>
          <p className="text-gray-700 pb-6">
            Our web designers are skilled in UX, UI with a range of experiences
            in HTML, CSS, PHP, Javascript, WordPress, AfterEffects, Premiere and
            the entire Adobe Creative Suite.
          </p>
          <p className="pb-6 text-xl font-bold">
            <q>Websites should be the perfect sales pitch, every time.</q>
            <br />
            -Blake Harrison
          </p>
          <ul className="pb-5">
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Responsive Website Design
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              WordPress Development
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Website Hosting
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              E-commerce
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Blogs
            </li>
            <li className="border-l-4 p-2 mb-2 border-red-600 bg-gray-300 text-gray-700">
              Web Applications
            </li>
            <li className="border-l-4 p-2 border-red-600 bg-gray-300 text-gray-700">
              Explainer Videos
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

export default Web;
