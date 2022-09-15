/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      spaceMono: ['Space Mono', 'cursive'],
      nav: ['IBM Plex Mono'],
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
    },
    screens: {
      xs: '20px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      cm: '810px',
      // => @media (min-width: 810px) { ... }

      bcm: '890px',
      // => @media (min-width: 890px) { ... }

      lg: '1054px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        link: '#6A91F4',
        linkHover: '#162ADE',
        cards: '#FCFCFD',
        heroBackground: '#FFFFFF',
        orangeColor: '#FEB273',
        defaultGray100: '#F2F2F2',
        extendedTrueGray500: '#737373',
        extendedTrueGray900: '#171717',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(-10px)' },
          '50%': { transform: 'translate(20px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
