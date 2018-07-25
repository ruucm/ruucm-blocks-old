var _templateObject = _taggedTemplateLiteral(['\n  .harborpin {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'harborpin\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .harborpin-pin-logo .path1:before {\n    content: \'\\e900\';\n    color: rgb(82, 94, 246);\n  }\n  .harborpin-pin-logo .path2:before {\n    content: \'\\e901\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n  .harborpin-pin-logo .path3:before {\n    content: \'\\e902\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n'], ['\n  .harborpin {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'harborpin\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .harborpin-pin-logo .path1:before {\n    content: \'\\\\e900\';\n    color: rgb(82, 94, 246);\n  }\n  .harborpin-pin-logo .path2:before {\n    content: \'\\\\e901\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n  .harborpin-pin-logo .path3:before {\n    content: \'\\\\e902\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

/**
 * Should add one more \, cause it's javascript !
 */
var Style = css(_templateObject);

export default Style;