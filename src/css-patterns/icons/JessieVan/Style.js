import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .jessievan {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'jessievan' !important;
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

  .jessievan-dribbble:before {
    content: '\\e901';
  }
  .jessievan-linkedin:before {
    content: '\\e902';
  }
  .jessievan-twitter:before {
    content: '\\e903';
  }
  .jessievan-eye-icon:before {
    content: '\\e900';
    color: #1106ff;
  }
`

export default Style
