import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .beerspick {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'beerspick' !important;
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

  .beerspick-circle-with-cross:before {
    content: '\\e912';
  }
  .beerspick-keyboard_arrow_right:before {
    content: '\\e90d';
  }
  .beerspick-keyboard_arrow_left:before {
    content: '\\e90e';
  }
  .beerspick-check-square-regular:before {
    content: '\\e90f';
  }
  .beerspick-check-square-solid:before {
    content: '\\e910';
  }
  .beerspick-shopping-cart-solid:before {
    content: '\\e911';
  }
  .beerspick-beer-speak-banner:before {
    content: '\\e908';
  }
  .beerspick-beer-speak-banner-2:before {
    content: '\\e90c';
  }
  .beerspick-beerspick_circle_logo_black:before {
    content: '\\e909';
  }
  .beerspick-beerspick_circle_logo_white:before {
    content: '\\e90a';
    color: #fff;
  }
  .beerspick-beerspick_square_logo_white:before {
    content: '\\e90b';
    color: #fff;
  }
  .beerspick-beerspick_logo_about:before {
    content: '\\e907';
  }
  .beerspick-beerspick_logo_header:before {
    content: '\\e900';
  }
  .beerspick-instagram_logo:before {
    content: '\\e901';
  }
  .beerspick-tel:before {
    content: '\\e902';
  }
  .beerspick-beerspick_logo_footer:before {
    content: '\\e903';
    color: #fff;
  }
  .beerspick-envelope:before {
    content: '\\e904';
    color: #f6c914;
  }
  .beerspick-facebook_logo:before {
    content: '\\e905';
  }
  .beerspick-location-arrow:before {
    content: '\\e906';
    color: #ff8748;
  }
`

export default Style
