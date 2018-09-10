'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .portfolio-class {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'portfolio-class\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .portfolio-class-Arrow:before {\n    content: \'\\e90c\';\n    color: #fff;\n  }\n  .portfolio-class-logo_main:before {\n    content: \'\\e90d\';\n    color: #fdd388;\n  }\n  .portfolio-class-list:before {\n    content: \'\\e900\';\n    color: #595959;\n  }\n  .portfolio-class-calendar:before {\n    content: \'\\e901\';\n    color: #284ea2;\n  }\n  .portfolio-class-pc-logo:before {\n    content: \'\\e902\';\n    color: #fdd388;\n  }\n  .portfolio-class-web:before {\n    content: \'\\e903\';\n    color: #fff;\n  }\n  .portfolio-class-group:before {\n    content: \'\\e904\';\n    color: #fff;\n  }\n  .portfolio-class-editor:before {\n    content: \'\\e905\';\n    color: #fff;\n  }\n  .portfolio-class-flag:before {\n    content: \'\\e906\';\n    color: #fff;\n  }\n  .portfolio-class-designer:before {\n    content: \'\\e907\';\n    color: #fff;\n  }\n  .portfolio-class-not-good:before {\n    content: \'\\e908\';\n    color: #2348a7;\n  }\n  .portfolio-class-fb-logo .path1:before {\n    content: \'\\e909\';\n    color: rgb(66, 103, 178);\n  }\n  .portfolio-class-fb-logo .path2:before {\n    content: \'\\e90a\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n  .portfolio-class-question:before {\n    content: \'\\e90b\';\n    color: #2348a7;\n  }\n'], ['\n  .portfolio-class {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'portfolio-class\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .portfolio-class-Arrow:before {\n    content: \'\\\\e90c\';\n    color: #fff;\n  }\n  .portfolio-class-logo_main:before {\n    content: \'\\\\e90d\';\n    color: #fdd388;\n  }\n  .portfolio-class-list:before {\n    content: \'\\\\e900\';\n    color: #595959;\n  }\n  .portfolio-class-calendar:before {\n    content: \'\\\\e901\';\n    color: #284ea2;\n  }\n  .portfolio-class-pc-logo:before {\n    content: \'\\\\e902\';\n    color: #fdd388;\n  }\n  .portfolio-class-web:before {\n    content: \'\\\\e903\';\n    color: #fff;\n  }\n  .portfolio-class-group:before {\n    content: \'\\\\e904\';\n    color: #fff;\n  }\n  .portfolio-class-editor:before {\n    content: \'\\\\e905\';\n    color: #fff;\n  }\n  .portfolio-class-flag:before {\n    content: \'\\\\e906\';\n    color: #fff;\n  }\n  .portfolio-class-designer:before {\n    content: \'\\\\e907\';\n    color: #fff;\n  }\n  .portfolio-class-not-good:before {\n    content: \'\\\\e908\';\n    color: #2348a7;\n  }\n  .portfolio-class-fb-logo .path1:before {\n    content: \'\\\\e909\';\n    color: rgb(66, 103, 178);\n  }\n  .portfolio-class-fb-logo .path2:before {\n    content: \'\\\\e90a\';\n    margin-left: -1em;\n    color: rgb(255, 255, 255);\n  }\n  .portfolio-class-question:before {\n    content: \'\\\\e90b\';\n    color: #2348a7;\n  }\n']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Should add one more \, cause it's javascript !
 */
var Style = (0, _styledComponents.css)(_templateObject);

exports.default = Style;