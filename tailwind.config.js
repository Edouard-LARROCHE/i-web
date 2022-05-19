module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      black1: '#333',
      black2: '#1F242D',
      white: '#fff',
      white1: '#e5e5db',
      white2: '#d4d5cd',
      white3: '#fcfaf7',
      gray1: 'rgb(17 24 39)',
      gray2: 'rgb(31 41 55)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        ml: '10px',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
