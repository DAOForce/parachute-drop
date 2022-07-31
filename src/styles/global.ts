import { css } from '@emotion/react';
import reset from 'emotion-reset';

export const global = css`
  ${reset};

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  body {
    min-height: 100vh;
    height: fit-content;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
