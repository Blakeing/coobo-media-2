import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Nav from '../components/nav';

// eslint-disable-next-line react/prop-types
const SideNav = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.slow
  });
  return (
    <div
      className="z-20 fixed flex inset-0"
      style={{
        pointerEvents: isOpen ? 'all' : 'none'
      }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="w-1/4 lg:w-3/4 h-full"
      />
      <animated.div
        style={{
          backgroundColor: '#EC5226',
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }}
        className="w-3/4 lg:border-r-8 lg:border-l-8  lg:border-t-8 lg:border-b-8 border-white lg:w-1/4 h-full"
      >
        <Nav />
      </animated.div>
    </div>
  );
};

export default SideNav;
