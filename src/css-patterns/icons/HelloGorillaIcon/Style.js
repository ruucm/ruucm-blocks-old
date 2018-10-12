import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .hellogorilla {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'hellogorilla' !important;
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

  .hellogorilla-arrow-left-selected:before {
    content: '\\e900';
    color: #805de9;
  }
  .hellogorilla-arrow-left:before {
    content: '\\e901';
    color: #e9e8e8;
  }
  .hellogorilla-arrow-right-selected:before {
    content: '\\e902';
    color: #805de9;
  }
  .hellogorilla-arrow-right:before {
    content: '\\e903';
    color: #e9e8e8;
  }
  .hellogorilla-icon-cart-61:before {
    content: '\\e904';
    color: #fff;
  }
  .hellogorilla-icon-facebook-24 .path1:before {
    content: '\\e905';
    color: rgb(35, 31, 32);
  }
  .hellogorilla-icon-facebook-24 .path2:before {
    content: '\\e906';
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .hellogorilla-icon-facebook-hover-24 .path1:before {
    content: '\\e907';
    color: rgb(128, 93, 233);
  }
  .hellogorilla-icon-facebook-hover-24 .path2:before {
    content: '\\e908';
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .hellogorilla-icon-instagram-24:before {
    content: '\\e909';
  }
  .hellogorilla-icon-instagram-hover-24:before {
    content: '\\e90a';
    color: #805de9;
  }
  .hellogorilla-icon-play:before {
    content: '\\e90b';
    color: #805de9;
  }
  .hellogorilla-icon-website-32:before {
    content: '\\e90c';
  }
  .hellogorilla-icon-website-hover-32:before {
    content: '\\e90d';
    color: #805de9;
  }
  .hellogorilla-logo .path1:before {
    content: '\\e90e';
    color: rgb(83, 60, 151);
  }
  .hellogorilla-logo .path2:before {
    content: '\\e90f';
    margin-left: -2.376953125em;
    color: rgb(254, 254, 254);
  }
  .hellogorilla-logo .path3:before {
    content: '\\e910';
    margin-left: -2.376953125em;
    color: rgb(254, 254, 254);
  }
`

export default Style
