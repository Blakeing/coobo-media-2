import React, { useState } from 'react';
import { Link } from 'gatsby';
import Printer from '../images/header_bg_print.jpg';
import Edge from '../images/web_energy-edge.jpg';
import Coobo from '../images/coobo-logo-white.png';
import SideNav from '../components/side-nav';
import Footer from '../components/footer';

const Print = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className="flex relative border-white border-t-8 bg-cover bg-center h-32 md:h-48 xl:h-64"
        style={{
          backgroundImage: `url(${Printer})`,
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
            Print
          </h2>
        </div>

        <ul className="pr-40 lg:w-full hidden lg:flex lg:items-center lg:justify-end">
          <li className="py-1 border-l-4 border-white bg-dark-steel px-3 text-2xl font-thin text-white ">
            Services
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="hover:text-orange py-2 px-3 text-2xl font-thin text-white"
              to="/web"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="hover:text-orange py-2 px-3 text-2xl font-thin text-white "
              to="/print"
            >
              Print
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="hover:text-orange py-2 px-3 text-2xl font-thin text-white "
              to="/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="hover:text-orange py-2 px-3 text-2xl font-thin text-white "
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
          <h2 className="leading-tight text-gray-900 font-bold text-3xl pb-6">
            Design Sets Your Brand Apart
          </h2>
          <p className="text-gray-700 pb-6">
            Be proud of your brochure. Get noticed on the freeway. Give your
            competition business card envy. Place ads that stop your audience in
            their tracks.
          </p>

          <p className="pb-6 text-xl font-bold">
            <q>Information is cheap, meaning expensive.</q>
            <br />- George Dyson
          </p>
          <ul className="pb-5">
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Brochures
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Business cards
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Billboards
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Catalogs
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Annual Reports
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Trade show booths and banners
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Ad design
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Restaurant/retail collateral
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Vechicle wraps
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-700">
              Signs
            </li>
          </ul>
          <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-orange">
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
              <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-orange">
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

export default Print;
