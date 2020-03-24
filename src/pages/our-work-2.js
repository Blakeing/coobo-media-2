import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';
import { useTransition, animated } from 'react-spring';
import data from '../assets/data';

const brand = data.filter(data => data.category === 'brand');
//const web = data.filter(data => data.category === 'web');
const marketing = data.filter(data => data.category === 'marketing');
//const print = data.filter(data => data.category === 'print');
//const shuffleddata = shuffle(data);

const OurWork = () => {
  const [rows, set] = useState(data);

  let height = 0;
  const transitions = useTransition(
    rows.map(data => ({
      ...data,
      y: (height += data.height) - data.height
    })),
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  );

  return (
    <>
      <div>
        <button onClick={() => set(shuffle(marketing))}>marketing</button>
        <button onClick={() => set(shuffle(brand))}>brand</button>
      </div>
      <div className="flex justify-center overflow-auto">
        <div className="relative w-full h-full" style={{ height }}>
          {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
            <animated.div
              key={key}
              className="absolute w-full"
              style={{
                zIndex: data.length - index,
                transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
                ...rest
              }}
            >
              <div className="relative w-full h-full overflow-hidden bg-cover">
                <div className="relative bottom-0 left-0 w-full h-full shadow-md border-radius-2">
                  <img style={{ maxWidth: '300px' }} src={item.url} />
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurWork;
