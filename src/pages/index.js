import React, { useState } from 'react';
import BottomNav from '../components/bottom-nav';
import Div100vh from 'react-div-100vh';
import Slider from '../components/home-slider/slider';
import CooboColor from '../images/coobomedia_logo_color.png';
import { Link } from 'gatsby';
import SideNav from '../components/side-nav';
import SocialNav from '../components/social-nav';
import Footer from '../components/footer';

const Index = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="z-0 bg-red-500">
      <header
        style={{ marginBottom: '.25rem' }}
        className="z-40 w-full fixed lg:hidden shadow bg-white"
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
      <Div100vh className="z-10 h-screen relative border-8 border-white bg-gray-500">
        <Slider />
        <SideNav isOpen={isNavOpen} />
        <SocialNav />
        <BottomNav />
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
      </Div100vh>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 bg-gray-100 mx-auto p-5 lg:px-20 lg:py-40">
          <h2 className="text-gray-800 text-2xl lg:text-5xl tracking-wide font-bold">
            Transforming Ideas
          </h2>
          <p className="text-gray-700">
            Whether you’re launching a new business or want to modernize an
            established brand, the team at Coobo Media can help bring your ideas
            to life. By listening and understanding your goals, Coobo Media can
            help you develop a strategy that blends the appropriate design,
            technology and user experience into successful outcomes.
          </p>
          <button
            style={{ backgroundColor: 'rgb(236, 82, 38)' }}
            className="mr-2 uppercase tracking-widest mt-4 bg-red-500 hover:bg-gray-700 text-white text-xs font-bold py-3 px-12 "
          >
            Our Team
          </button>
          <button
            style={{ backgroundColor: 'rgb(236, 82, 38)' }}
            className="uppercase tracking-widest mt-4 bg-red-500 hover:bg-gray-700 text-white text-xs font-bold py-3 px-12 "
          >
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2 bg-gray-400"></div>
      </div>
      <div className="flex justify-center items-center bg-gray-700">
        <div className="container mx-auto p-10">
          <p className="text-white text-lg text text-center font-light">
            My Company has worked with Coobo Media over the past three years
            developing our internal and external marketing materials. They’ve
            done a wonderful job helping us build and promote the Swagelok brand
            to the Houston community, whether it’s through marketing materials,
            website development or event materials. Coobo is truly a partner in
            our business and always there to support our day to day marketing
            needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
