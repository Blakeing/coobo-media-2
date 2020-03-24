import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';
//import { useTransition, animated } from 'react-spring';

const images = [
  {
    url: require('../images/web_energy-edge.jpg'),
    color: 'bg-edge',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_hci.jpg'),
    color: 'bg-hci',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_gkh.jpg'),
    color: 'bg-gkh',
    alt: 'work',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_holland-parker.jpg'),
    color: 'bg-holland',
    alt: 'work',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_hookie.jpg'),
    color: 'bg-hookie',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_julie-rhodes.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_jennifer-martinez.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_lead-houston.jpg'),
    color: 'bg-lead',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_sbl.jpg'),
    color: 'bg-sbl',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_trace.jpg'),
    color: 'bg-trace',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_rice-online.jpg'),
    color: 'bg-creed',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_flash-funding.jpg'),
    color: 'bg-flash',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_reynolds-frizzell.jpg'),
    color: 'bg-frizzell',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_griesenbeck.jpg'),
    color: 'bg-griesenbeck',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/web_cpc.jpg'),
    color: 'bg-cpc',
    alt: 'hi',
    route: '/',
    category: 'web'
  },
  {
    url: require('../images/brand_gkh-firm.jpg'),
    color: 'bg-edge',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_spm.jpg'),
    color: 'bg-hci',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_sp-foundry.jpg'),
    color: 'bg-gkh',
    alt: 'work',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_flexifloat.jpg'),
    color: 'bg-holland',
    alt: 'work',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_bond.jpg'),
    color: 'bg-hookie',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_aag_law.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_alitek.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_gunner-and-hook.jpg'),
    color: 'bg-lead',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_spindletap.jpg'),
    color: 'bg-sbl',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_evolution_well_services.jpg'),
    color: 'bg-trace',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_griesenbeck.jpg'),
    color: 'bg-creed',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_back_porch_bbq.jpg'),
    color: 'bg-flash',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_round_top.jpg'),
    color: 'bg-frizzell',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_bci.jpg'),
    color: 'bg-griesenbeck',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/brand_blue_willow.jpg'),
    color: 'bg-cpc',
    alt: 'hi',
    route: '/',
    category: 'brand'
  },
  {
    url: require('../images/mark-alitek_thumb.jpg'),
    color: 'bg-edge',
    alt: 'hi',
    route: '/',
    category: 'marketing'
  },
  {
    url: require('../images/mark-iarch_thumb.jpg'),
    color: 'bg-hci',
    alt: 'hi',
    route: '/',
    category: 'marketing'
  },
  {
    url: require('../images/first-tire.jpg'),
    color: 'bg-gkh',
    alt: 'work',
    route: '/',
    category: 'marketing'
  },
  {
    url: require('../images/mark-auc_thumb.jpg'),
    color: 'bg-holland',
    alt: 'work',
    route: '/',
    category: 'marketing'
  },
  {
    url: require('../images/mark-marks-clothiers_thumb.jpg'),
    color: 'bg-hookie',
    alt: 'hi',
    route: '/',
    category: 'marketing'
  },
  {
    url: require('../images/mark-cert-crane-rig-thumb.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
    category: 'marketing'
  }
];

const brand = images.filter(image => image.category === 'brand');
const web = images.filter(image => image.category === 'web');
const marketing = images.filter(image => image.category === 'marketing');
const print = images.filter(image => image.category === 'print');
const shuffledImages = shuffle(images);

const OurWork = () => {
  const [services, setServices] = useState(shuffledImages);
  //useEffect(() => void setInterval(() => setServices(shuffle), 10000), []);

  return (
    <>
      <button
        className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
        onClick={() => setServices(shuffle(images))}
      >
        All
      </button>
      <button
        className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
        onClick={() => setServices(brand)}
      >
        Brand
      </button>
      <button
        className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
        onClick={() => setServices(web)}
      >
        Web
      </button>
      <button
        className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
        onClick={() => setServices(marketing)}
      >
        Marketing
      </button>
      <button
        className="px-10 py-3 m-2 text-sm font-semibold tracking-wider text-white uppercase focus:outline-none bg-orange"
        onClick={() => setServices(print)}
      >
        Print
      </button>
      <div className="flex flex-wrap bg-gray-500 ">
        {services.map((image, index) => (
          <img
            className="w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={index}
            src={image.url}
          />
        ))}
      </div>
    </>
  );
};

export default OurWork;
