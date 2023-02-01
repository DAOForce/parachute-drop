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
          primary: '#ffffff',
          main: '#ffffff',
          warning: '#FFE55C',
          neutral: '#111',
          '.btn-custom': {
            'background-color': '#000',
            'border-color': 'transparent',
          },
          '.btn-custom2': {
            'background-color': '#111',
            'border-color': 'transparent',
          },
          '.btn-custom-hover': {
            'background-color': '#fff',
            color: '#111',
            fill: '#111 !important',
          },
          '.btn-custom-border': {
            'background-color': 'transparent',
            'border-color': '#fff',
            color: '#fff',
          },
          '.btn-custom-border-hover': {
            'background-color': '#fff',
            'border-color': 'transparent',
            color: '#111',
          },
          '.btn-text-custom': {
            'background-color': 'transparent',
            'border-color': 'transparent',
            color: '#fff',
          },
          '.btn-text-custom-hover': {
            'background-color': '#fff',
            'border-color': '#fff',
            color: '#111',
          },
          'th-custom': {
            'background-color': '#222',
          },
          'td-custom': {
            'background-color': '#111',
          },
        },
      },
    ],
  },
};
