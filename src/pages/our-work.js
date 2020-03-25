import React, { useState } from 'react';
import { useTransition, a } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from '../utils/useMeasure';
import useMedia from '../utils/useMedia';
import data from '../assets/data';
import '../css/gallery.css';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/footer';
import SideNav from '../components/side-nav';
import Coobo from '../images/coobo-logo-white.png';
import CooboColor from '../images/coobomedia_logo_color.png';
import Dog from '../images/header_bg_web.jpg';
import { Link } from 'gatsby';

const brand = data.filter(data => data.category === 'brand');
const web = data.filter(data => data.category === 'web');
//const marketing = data.filter(data => data.category === 'marketing');
//const print = data.filter(data => data.category === 'print');

const OurWork = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [4, 3, 2],
    1
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState(data);

  // Hook4: shuffle data every 2 seconds
  //useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map(child => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 }
  });
  // Render the grid
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
              onClick={() => set(shuffle(data))}
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
              onClick={() => set(shuffle(data))}
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
          onClick={() => set(shuffle(data))}
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
          onClick={() => set(shuffle(data))}
        >
          All
        </button>
      </div>

      <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div
            key={key}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              ...rest
            }}
          >
            <div style={{ backgroundImage: item.css }} />
          </a.div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default OurWork;
