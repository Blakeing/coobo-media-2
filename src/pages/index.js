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
        className="fixed z-40 w-full bg-white shadow lg:hidden"
      >
        <div className="flex flex-wrap items-center justify-between p-4 mx-auto ">
          <Link className="flex items-center text-white no-underline" to="/">
            <img className="h-6" src={CooboColor} />
          </Link>
          <button
            className="z-40 flex items-center block px-1 py-1 text-white rounded focus:outline-none lg:hidden"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-500 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
      <Div100vh className="relative z-10 h-screen bg-gray-500 border-8 border-white">
        <Slider />
        <SideNav isOpen={isNavOpen} />
        <SocialNav />
        <BottomNav />
        <div className="fixed top-0 right-0 z-30 hidden lg:block ">
          <button
            style={{ backgroundColor: '#EC5226' }}
            className="px-3 py-2 text-white border-b-4 border-l-4 border-white focus:outline-none lg:border-l-8 lg:border-b-8"
            onClick={() => setNavOpen(!isNavOpen)}
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
      </Div100vh>
      <div className="flex flex-wrap">
        <div className="p-5 mx-auto bg-gray-100 md:w-1/2 lg:px-20 lg:py-40">
          <h2 className="text-2xl font-bold tracking-wide text-gray-800 lg:text-5xl">
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
            className="px-12 py-3 mt-4 mr-2 text-xs font-bold tracking-widest text-white uppercase bg-red-500 hover:bg-gray-700 "
          >
            Our Team
          </button>
          <button
            style={{ backgroundColor: 'rgb(236, 82, 38)' }}
            className="px-12 py-3 mt-4 text-xs font-bold tracking-widest text-white uppercase bg-red-500 hover:bg-gray-700 "
          >
            Contact Us
          </button>
        </div>
        <div className="bg-gray-400 md:w-1/2"></div>
      </div>
      <div className="flex items-center justify-center bg-gray-700">
        <div className="container p-10 mx-auto">
          <p className="text-lg font-light text-center text-white text">
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
