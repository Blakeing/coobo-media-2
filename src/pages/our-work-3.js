import React, { useState } from 'react';
import { useTransition, a } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from '../utils/useMeasure';
import useMedia from '../utils/useMedia';
import data from '../assets/data';
import '../css/gallery.css';

const brand = data.filter(data => data.category === 'brand');
const web = data.filter(data => data.category === 'web');
const marketing = data.filter(data => data.category === 'marketing');

function App() {
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
      <div>
        <button
          className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
          onClick={() => set(web)}
        >
          web
        </button>
        <button
          className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
          onClick={() => set(brand)}
        >
          brand
        </button>
        <button
          className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
          onClick={() => set(marketing)}
        >
          marketing
        </button>
        <button
          className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
          onClick={() => set(shuffle(data))}
        >
          all
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
    </>
  );
}

export default App;
