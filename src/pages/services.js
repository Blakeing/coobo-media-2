import React, { useState } from 'react';
import { motion } from 'framer-motion';
import shuffle from 'lodash/shuffle';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/footer';
import SideNav from '../components/side-nav';
import Coobo from '../images/coobo-logo-white.png';
import CooboColor from '../images/coobomedia_logo_color.png';
import Dog from '../images/header_bg_web.jpg';
import { Link } from 'gatsby';
import images from '../assets/data-2';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.25,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

const brand = images.filter(images => images.category === 'brand');
const web = images.filter(images => images.category === 'web');

const Test = () => {
  const [items, set] = useState(shuffle(images));
  const [isNavOpen, setNavOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <>
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
      <div
        className="relative flex bg-no-repeat border-t-8 border-white h-184 sm:h-300 "
        style={{
          backgroundImage: `url(${Dog})`,
          backgroundSize: isDesktopOrLaptop ? 'cover' : 'auto 80%',
          backgroundPosition: isDesktopOrLaptop ? '' : 'left 3rem bottom -1rem',
          backgroundColor: '#7F7F7F',
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

        <ul className="hidden pr-40 lg:w-full lg:flex lg:items-center lg:justify-end">
          <li className="px-3 py-1 text-2xl font-thin text-white border-l-4 border-white bg-dark-steel ">
            Select a Category
          </li>
          <li>
            <button
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none"
              onClick={() => set(web)}
            >
              Web
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
              onClick={() => set(shuffle(images))}
            >
              Print
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
              onClick={() => set(brand)}
            >
              Brand
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
              onClick={() => set(shuffle(images))}
            >
              All
            </button>
          </li>
        </ul>
      </div>
      <div style={{ backgroundColor: '#2B2B2B' }} className="flex lg:hidden ">
        <button
          className="py-3 pl-5 pr-6 text-sm font-light tracking-wide text-white focus:outline-none "
          onClick={() => set(web)}
        >
          Web
        </button>
        <button
          className="py-3 pr-6 text-sm font-light tracking-wide text-white focus:outline-none"
          onClick={() => set(shuffle(images))}
        >
          Print
        </button>
        <button
          className="py-3 pr-6 text-sm font-light tracking-wide text-white focus:outline-none"
          onClick={() => set(brand)}
        >
          Brand
        </button>
        <button
          className="py-3 pr-6 text-sm font-light tracking-wide text-white focus:outline-none "
          onClick={() => set(shuffle(images))}
        >
          All
        </button>
      </div>
      <motion.div
        className="grid w-full h-full p-5 m-0 overflow-hidden list-none "
        style={{
          gridTemplateColumns: isDesktopOrLaptop
            ? 'repeat(4, 1fr)'
            : 'repeat(2, 1fr)',
          gap: '15px'
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {items.map((image, index) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            key={index}
            className="bg-white"
            variants={item}
          >
            <img
              className="w-full h-auto rounded shadow-lg "
              alt={image.alt}
              src={image.url}
            />
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </>
  );
};

export default Test;
