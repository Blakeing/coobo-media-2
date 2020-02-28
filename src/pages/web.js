import React, { useState } from 'react';
import { Link } from 'gatsby';
import Dog from '../images/header_bg_web.jpg';

import Coobo from '../images/coobo-logo-white.png';
import SideNav from '../components/side-nav';
import Footer from '../components/footer';

const images = [
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-red-500',
    alt: 'work',
    route: '/contact'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  },
  {
    url: 'https://source.unsplash.com/random/1000x671',
    color: 'bg-teal-500',
    alt: 'hi',
    route: '/'
  }
];

const Web = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className="flex relative border-white border-t-8 bg-cover bg-center h-32 md:h-48 xl:h-64"
        style={{
          backgroundImage: `url(${Dog})`,
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
            Web
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
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              Responsive Website Design
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              WordPress Development
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              Website Hosting
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              E-commerce
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              Blogs
            </li>
            <li className="border-l-4 p-2 mb-2 border-orange bg-steel text-gray-900">
              Web Applications
            </li>
            <li className="border-l-4 p-2 border-orange bg-steel text-gray-700">
              Explainer Videos
            </li>
          </ul>
          <button className="px-10 py-3 tracking-wider uppercase font-semibold text-sm text-white bg-orange">
            Contact Us
          </button>
        </div>
        <div style={{ backgroundColor: '#2e2e2e' }} className=" md:w-1/2">
          <div className=" flex flex-col justify-between">
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative sm:max-w-1/2 xl:max-w-1/3 w-full h-auto"
                >
                  <img
                    className="block w-full h-auto"
                    alt={image.alt}
                    src={image.url}
                  />
                  <Link to={image.route}>
                    <div
                      style={{
                        transition: '.5 ease'
                      }}
                      className={`${image.color}  absolute hover:opacity-75 inset-0 h-full -w-full opacity-0`}
                    >
                      <div
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                        className="absolute text-center text-white"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="plus-circle"
                          className="fill-current h-10 w-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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

export default Web;
