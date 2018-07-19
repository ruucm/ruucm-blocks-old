var _templateObject = _taggedTemplateLiteral(['\n  .magharbor {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'magharbor\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .magharbor-main-logo:before {\n    content: \'\\e900\';\n    color: #fff;\n  }\n'], ['\n  .magharbor {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'magharbor\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .magharbor-main-logo:before {\n    content: \'\\\\e900\';\n    color: #fff;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

/**
 * Should add one more \, cause it's javascript !
 */
var Style = css(_templateObject);

export default Style;