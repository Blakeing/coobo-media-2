// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {
        orange: '#EC5226',
        marketing: 'rgb(58,175,210)',
        brand: 'rgb(93,37,100)',
        web: 'rgb(181,47,47)',
        print: 'rgb(67,135,75)',
        steel: '#E3E3E3',
        'dark-steel': 'rgba(167, 167, 167, 0.75)'
      }
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      'screen-sm': ' 640px',
      'screen-md': ' 768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px',
      'none	max-width': 'none',
      '1/2': '50%',
      '1/3': '33.33%'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '25em'
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')]
};
