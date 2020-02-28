import React, { useState } from 'react';
import City from '../images/page_title_bg_city2.jpg';
import SEO from '../components/seo';
import Coobo from '../images/coobo_3d_houston_2.png';
import CooboLogo from '../images/coobo-logo-white.png';
import SideNav from '../components/side-nav';
import { Link } from 'gatsby';
import Footer from '../components/footer';

const ContactPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <div
        className="relative flex bg-cover border-t-8 border-white bg-center h-32 md:h-48 xl:h-64"
        style={{
          backgroundImage: `url(${City})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '300px'
        }}
      >
        <Link to="/">
          <img
            style={{ top: '2rem', left: '2rem' }}
            className="hidden lg:block absolute top-0 left-0 bg-transparent "
            src={CooboLogo}
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
        <div style={{ bottom: '25%', left: '5%' }} className="absolute">
          <h2 className="pl-5 lg:pl-16 text-white text-3xl md:text-5xl font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <SideNav isOpen={isNavOpen} />
      <div className="flex flex-wrap">
        <div className="w-full bg-gray-500 p-10 md:w-1/2"></div>
        <div
          style={{ backgroundColor: '#3a3a3a' }}
          className="w-full  py-16 px-20 md:w-1/2"
        >
          <h1 className="text-white text-3xl font-bold ">Coobo Media</h1>
          <h2 className="text-white italic text-lg font-thin">
            Located Near Memorial City Mall
          </h2>
          <p className="text-white mt-2 ">
            9525 Katy Freeway, Suite 230
            <br /> Houston, Texas 77024
          </p>
          <div className="mt-6">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="mobile-alt"
              className="inline-block fill-current text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
              />
            </svg>

            <span className="text-white font-light ml-2">281.206.0022</span>
          </div>

          <div className="mt-6">
            <span>
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="mobile-alt"
                className=" fill-current text-white inline-block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                />
              </svg>
            </span>
            <span className="inline-block text-white ml-2 ">
              info@coobomedia.com
            </span>
          </div>
          <button
            style={{ backgroundColor: '#ea542b' }}
            className="text-white uppercase text-sm font-semibold tracking-widest mt-8 px-8 py-3"
          >
            Send us a message
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Coobo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#252525'
        }}
        className="flex flex-wrap"
      >
        <div className="hidden lg:block lg:w-1/2"></div>
        <div className="w-full lg:w-1/2">
          <div
            style={{ background: 'rgba(58,58,58, .8)' }}
            className="max-w-2xl py-16 px-20 "
          >
            <form className="max-w-lg">
              <h1 className="mb-2 text-white text-3xl font-bold">Contact Us</h1>

              <label
                className="block mb-2 text-white text-ms font-light"
                htmlFor="first-name"
              >
                Your Name (required)
              </label>

              <input
                style={{ border: '1px solid white ' }}
                className="w-full text-white px-3 py-4 mb-6 bg-transparent outline-none  bg-transparent"
                id="first-name"
                type="text"
              />

              <label
                className="block mb-2 text-white text-ms font-light"
                htmlFor="last-name"
              >
                Your Email (required)
              </label>

              <input
                style={{ border: '1px solid white ' }}
                className="w-full text-white px-3 py-4 mb-6 bg-transparent outline-none  bg-transparent"
                id="last-name"
                type="text"
              />

              <label
                className="block mb-2 text-white text-ms font-light"
                htmlFor="message"
              >
                Your Message
              </label>

              <textarea
                style={{ border: '1px solid white ' }}
                className="w-full text-white px-3 py-4 mb-6 bg-transparent outline-none bg-transparent"
                id="message"
                rows="8"
              />
              <button
                style={{ backgroundColor: '#ea542b' }}
                className="text-white uppercase text-sm font-semibold tracking-widest mt-8 px-8 py-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
