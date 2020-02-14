import React from 'react';
// import Typical from 'react-typical';
import { animated, useSpring, config } from 'react-spring';
import Tilt from '../images/tilt_houston.jpg';
import Coobo from '../images/coobo-logo-white.png';
import Typical from 'react-typical';
import { Link } from 'gatsby';

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

const Index = () => {
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

  return (
    <>
      <div
        className="relative h-screen border-4 lg:border-8 border-white"
        style={{
          backgroundImage: `url(${Tilt})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="hidden sm:block absolute top-0 left-0 ">
          <button className="font-bold text-xs lg:text-2xl tracking-wide text-white py-3 px-5">
            <img src={Coobo} />
          </button>
        </div>

        <div className="hidden sm:block absolute border-b-4 border-l-4 lg:border-b-8 lg:border-l-8 border-white bg-white top-0 right-0 ">
          <button className="font-bold text-xs lg:text-2xl tracking-wide bg-red-500 text-white py-3 px-5">
            --
          </button>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="mx-auto px-4">
            <animated.h1
              style={fade}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white font-bold"
            >
              A Creative Agency
            </animated.h1>

            <animated.span
              style={focus}
              className="text-small lg:text-3xl text-white font-light italic"
            >
              Focused on{' '}
            </animated.span>
            <animated.span style={type}>
              <Typical
                wrapper="span"
                steps={steps}
                loop={Infinity}
                className={
                  'text-white text-small lg:text-3xl italic font-light'
                }
              />
            </animated.span>
          </div>
        </div>
        <div className="absolute border-t-4 border-l-4 lg:border-t-8 lg:border-l-8 border-white bg-white bottom-0 right-0 ">
          <button className="hover:bg-gray-900 font-semibold text-xs lg:text-3xl tracking-wide bg-red-500 text-white py-2 px-4">
            <Link to="/web">Web</Link>
          </button>
          <button className="hover:bg-gray-900 font-semibold text-xs lg:text-3xl tracking-wide bg-green-500 text-white py-2 px-4 ml-1">
            <Link to="/print">Print</Link>
          </button>
          <button className="hover:bg-gray-900 font-semibold text-xs lg:text-3xl tracking-wide bg-purple-500 text-white py-2 px-4 ml-1">
            <Link to="/brand">Brand</Link>
          </button>
          <button className="hover:bg-gray-900 font-semibold text-xs lg:text-3xl tracking-wide bg-blue-500 text-white py-2 px-4 ml-1">
            <Link to="/marketing">Marketing</Link>
          </button>
        </div>
      </div>
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
          <button className="uppercase tracking-widest mt-4 bg-red-500 hover:bg-gray-700 text-white text-xs font-bold py-3 px-12 ">
            Our Team
          </button>
          <button className="ml-2 uppercase tracking-widest mt-4 bg-red-500 hover:bg-gray-700 text-white text-xs font-bold py-3 px-12 ">
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
    </>
  );
};

export default Index;
