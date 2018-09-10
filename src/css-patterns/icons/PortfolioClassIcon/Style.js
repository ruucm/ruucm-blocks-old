import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .portfolio-class {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'portfolio-class' !important;
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

  .portfolio-class-Arrow:before {
    content: '\\e90c';
    color: #fff;
  }
  .portfolio-class-logo_main:before {
    content: '\\e90d';
    color: #fdd388;
  }
  .portfolio-class-list:before {
    content: '\\e900';
    color: #595959;
  }
  .portfolio-class-calendar:before {
    content: '\\e901';
    color: #284ea2;
  }
  .portfolio-class-pc-logo:before {
    content: '\\e902';
    color: #fdd388;
  }
  .portfolio-class-web:before {
    content: '\\e903';
    color: #fff;
  }
  .portfolio-class-group:before {
    content: '\\e904';
    color: #fff;
  }
  .portfolio-class-editor:before {
    content: '\\e905';
    color: #fff;
  }
  .portfolio-class-flag:before {
    content: '\\e906';
    color: #fff;
  }
  .portfolio-class-designer:before {
    content: '\\e907';
    color: #fff;
  }
  .portfolio-class-not-good:before {
    content: '\\e908';
    color: #2348a7;
  }
  .portfolio-class-fb-logo .path1:before {
    content: '\\e909';
    color: rgb(66, 103, 178);
  }
  .portfolio-class-fb-logo .path2:before {
    content: '\\e90a';
    margin-left: -1em;
    color: rgb(255, 255, 255);
  }
  .portfolio-class-question:before {
    content: '\\e90b';
    color: #2348a7;
  }
`

export default Style
