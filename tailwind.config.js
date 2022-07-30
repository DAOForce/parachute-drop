/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],

  // add daisyUI plugin
  plugins: [require('daisyui')],
  styled: true,
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#FFE55C',
          main: '#FFE55C',
        },
      },
    ],
  },
  theme: {
    color: {
      primary: '#FFE55C',
      main: '#FFE55C',
    },
    extend: {
      colors: {
        main: '#FFE55C',
      },
    },
  },
};
