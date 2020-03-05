import React, { useState } from 'react';
import { Link } from 'gatsby';
import Mark from '../images/header_bg_mark.jpg';
import Edge from '../images/web_energy-edge.jpg';
import Coobo from '../images/coobo-logo-white.png';
import SideNav from '../components/side-nav';
import Footer from '../components/footer';

const Marketing = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <div
        className="relative flex h-32 bg-center bg-cover border-t-8 border-white md:h-48 xl:h-64"
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
            className="absolute top-0 left-0 hidden bg-transparent lg:block "
            src={Coobo}
          />
        </Link>
        <div className="fixed top-0 right-0 z-30 hidden lg:block ">
          <button
            style={{ backgroundColor: '#EC5226' }}
            onClick={() => setNavOpen(!isNavOpen)}
            className="px-3 py-2 text-white border-b-4 border-l-4 border-white focus:outline-none lg:border-l-8 lg:border-b-8"
          >
            <svg
              className="w-10 h-10 text-white fill-current"
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
          <h2 className="pl-5 text-3xl font-bold text-white lg:pl-16 md:text-5xl">
            Marketing
          </h2>
        </div>

        <ul className="hidden pr-40 lg:w-full lg:flex lg:items-center lg:justify-end">
          <li className="px-3 py-1 text-2xl font-thin text-white border-l-4 border-white bg-dark-steel ">
            Services
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange"
              to="/web"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/print"
            >
              Print
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/marketing"
            >
              Marketing
            </Link>
          </li>
        </ul>
      </div>
      <nav className="flex bg-gray-900 lg:hidden ">
        <Link className="py-3 pl-5 pr-6 text-sm text-white " to="/">
          Web
        </Link>
        <Link className="py-3 pr-6 text-sm text-white" to="/">
          Print
        </Link>
        <Link className="py-3 pr-6 text-sm text-white" to="/">
          Brand
        </Link>
        <Link className="py-3 text-sm text-white " to="/">
          Marketing
        </Link>
      </nav>
      <div className="flex flex-wrap ">
        <div className="p-5 bg-gray-100 md:w-1/2 lg:p-16">
          <h2 className="pb-6 text-3xl font-bold leading-tight text-gray-900">
            It starts with a plan...
          </h2>
          <p className="pb-6 text-gray-700">
            From the origin of your company to your most recent “win” lies a
            marketing strategy. Coobo Media understands where it lives and how
            to make it shine. When marketing gets lost or put aside, we help you
            refocus.
          </p>
          <p className="pb-6 text-gray-700">
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
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Digital Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Content Planning
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Pay-Per-Click Advertising (PPC)
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Email Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Blog Content Management
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Social Media Posts
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Social Media Advertising
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Search Engine Optimization (SEO)
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Public Relations
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Print Advertising
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Video
            </li>
          </ul>
          <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
            Contact Us
          </button>
        </div>
        <div className="bg-gray-800 md:w-1/2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap">
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src={Edge}
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
              <img
                className="w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                alt="A dog relaxing"
                src="https://source.unsplash.com/random/1000x671"
              />
            </div>
            <div className="py-10 mx-auto">
              <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketing;
