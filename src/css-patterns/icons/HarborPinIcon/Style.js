import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .harborpin {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'harborpin' !important;
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

  .harborpin-pin-logo .path1:before {
    content: '\\e900';
    color: rgb(82, 94, 246);
  }
  .harborpin-pin-logo .path2:before {
    content: '\\e901';
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .harborpin-pin-logo .path3:before {
    content: '\\e902';
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
`

export default Style
