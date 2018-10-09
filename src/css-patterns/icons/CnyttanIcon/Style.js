import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .cnyttan {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'cnyttan' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .cnyttan-CNYTTAN_logo:before {
    content: '\\e907';
  }
  .cnyttan-adjust:before {
    content: '\\e900';
  }
  .cnyttan-call:before {
    content: '\\e901';
  }
  .cnyttan-cancel-button:before {
    content: '\\e902';
    color: #636363;
  }
  .cnyttan-close-circular-button-of-a-cross:before {
    content: '\\e903';
  }
  .cnyttan-coupon:before {
    content: '\\e904';
  }
  .cnyttan-drop-down-arrow:before {
    content: '\\e905';
  }
  .cnyttan-free-delivery:before {
    content: '\\e906';
  }
  .cnyttan-go-to-the-top:before {
    content: '\\e908';
  }
  .cnyttan-instagram:before {
    content: '\\e909';
  }
  .cnyttan-padlock:before {
    content: '\\e90a';
  }
  .cnyttan-rating:before {
    content: '\\e90b';
  }
  .cnyttan-shopping-cart-2:before {
    content: '\\e90c';
  }
  .cnyttan-shopping-cart:before {
    content: '\\e90d';
  }
  .cnyttan-support:before {
    content: '\\e90e';
  }
  .cnyttan-trophy:before {
    content: '\\e90f';
  }
  .cnyttan-welcome:before {
    content: '\\e910';
  }
`

export default Style
