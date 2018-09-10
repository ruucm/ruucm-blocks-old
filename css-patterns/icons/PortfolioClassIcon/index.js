'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  PortfolioClass Icons\n  */\n  @font-face {\n    font-family: \'portfolio-class\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'portfolio-class.eot-icons\'; */;\n'], ['\n  /**\n  *  PortfolioClass Icons\n  */\n  @font-face {\n    font-family: \'portfolio-class\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'portfolio-class.eot-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _portfolioClass = require('./fontFiles/portfolio-class.eot');

var _portfolioClass2 = _interopRequireDefault(_portfolioClass);

var _portfolioClass3 = require('./fontFiles/portfolio-class.ttf');

var _portfolioClass4 = _interopRequireDefault(_portfolioClass3);

var _portfolioClass5 = require('./fontFiles/portfolio-class.woff');

var _portfolioClass6 = _interopRequireDefault(_portfolioClass5);

var _portfolioClass7 = require('./fontFiles/portfolio-class.svg');

var _portfolioClass8 = _interopRequireDefault(_portfolioClass7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortfolioClassIcon = (0, _styledComponents.css)(_templateObject, _portfolioClass2.default, _portfolioClass2.default, _portfolioClass4.default, _portfolioClass6.default, _portfolioClass8.default, _Style2.default);

exports.default = PortfolioClassIcon;