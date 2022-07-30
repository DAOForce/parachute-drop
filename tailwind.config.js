module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],

  // add daisyUI plugin
  plugins: [require('daisyui')],

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
        mytheme: {
          primary: '#FFE55C',
        },
      },
    ],
  },
  theme: {
    color: {
      primary: '#FFE55C',
    },
  },
};
