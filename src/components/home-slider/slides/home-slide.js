import React from 'react';
import Tilt from '../../../images/tilt_houston.jpg';
import { animated, useSpring, config } from 'react-spring';
import Typical from 'react-typical';
import { Link } from 'gatsby';
import Coobo from '../../../images/coobo-logo-white.png';
import { useMediaQuery } from 'react-responsive';

const steps = [
  '',
  3000,
  'Search Engine Optimization',
  3000,
  'Brand Development',
  3000,
  'Social Media Marketing',
  3000,
  'Graphic Design',
  3000
];

const Slide1 = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: config.molasses
  });

  const focus = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: config.molasses
  });

  const type = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 5000,
    config: config.molasses
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <div
      style={{
        backgroundImage: `url(${Tilt})`,
        backgroundRepeat: 'no-repeat',
        bacgrkoundColor: 'rgba(0, 0, 0, 0.9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        boxShadow: '0 3000px rgba(0, 0, 0, 0.4) inset'
      }}
    >
      <Link to="/">
        <img
          style={{ top: '5%', left: '5%' }}
          className="hidden lg:block absolute top-0 left-0 bg-transparent "
          src={Coobo}
        />
      </Link>

      <div className="flex h-full  lg:items-center lg:justify-center">
        <div className="w-full lg:w-auto inline-block text-left mt-56 lg:mt-0 px-6 lg:px-0">
          <animated.h1
            style={{ ...fade, fontSize: isDesktopOrLaptop ? '6rem' : '2rem' }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white font-bold lg:font-extrabold"
          >
            A Creative Agency
          </animated.h1>
          <animated.span
            style={focus}
            className="text-xl lg:text-4xl text-white font-light italic"
          >
            Focused on{' '}
          </animated.span>
          {isDesktopOrLaptop ? '' : <br />}
          <animated.span style={type}>
            <Typical
              wrapper="span"
              steps={steps}
              loop={Infinity}
              className={'text-white text-xl lg:text-4xl italic font-light'}
            />
          </animated.span>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
