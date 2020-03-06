import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import theme from 'global/theme'
import { mqMax } from 'utils/mediaQuery'

const rozha = `
  /* latin */
  @font-face {
    font-family: 'Delius';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Delius-Regular'), url(https://fonts.gstatic.com/s/delius/v9/PN_xRfK0pW_9e1rdZsg_rz7b_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  font-family: 'Delius';
`

export default createGlobalStyle`
  ${normalize()}

  ::selection {
    background: ${theme.colors.PRIMARY}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${theme.colors.PRIMARY}; /* WebKit/Blink Browsers */
  }

  html {
    font-size: 62.5%;
  }

  *, *::after, *::before {
      box-sizing: border-box;
  }

  body {
    display: block;
    background: ${theme.colors.PRIMARY};
    color: ${theme.colors.WHITE};

    h1, h2, h3, h4, h5, button, p, * {
      ${rozha};
    }

    button {
      outline: none;
    }

    overflow-x: hidden;

    font-size: 1.6rem;

    .overflowHidden {
      overflow: hidden;
      position: fixed;

      ${mqMax.desktop} {
        overflow: initial;
        position: initial;
      }
    }
  }
`
