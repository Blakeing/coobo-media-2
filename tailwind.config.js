// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    maxWidth: {
      'max-w-xs': '20rem',
      'max-w-sm': '24rem',
      'max-w-md': '28rem',
      'max-w-lg': '32rem',
      'max-w-xl': '36rem',
      'max-w-2xl': '42rem',
      'max-w-3xl': '48rem',
      'max-w-4xl': '56rem',
      'max-w-5xl': '64rem',
      'max-w-6xl': '72rem',
      'max-w-full': '100%',
      'max-w-screen-sm': ' 640px',
      'max-w-screen-md': ' 768px',
      'max-w-screen-lg': '1024px',
      'max-w-screen-xl': '1280px',
      'max-w-none	max-width': 'none'
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
