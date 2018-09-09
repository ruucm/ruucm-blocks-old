'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor-school\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor-school\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _harborSchool = require('./fontFiles/harbor-school.eot');

var _harborSchool2 = _interopRequireDefault(_harborSchool);

var _harborSchool3 = require('./fontFiles/harbor-school.ttf');

var _harborSchool4 = _interopRequireDefault(_harborSchool3);

var _harborSchool5 = require('./fontFiles/harbor-school.woff');

var _harborSchool6 = _interopRequireDefault(_harborSchool5);

var _harborSchool7 = require('./fontFiles/harbor-school.svg');

var _harborSchool8 = _interopRequireDefault(_harborSchool7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HarborMagazineIcon = (0, _styledComponents.css)(_templateObject, _harborSchool2.default, _harborSchool2.default, _harborSchool4.default, _harborSchool6.default, _harborSchool8.default, _Style2.default);

exports.default = HarborMagazineIcon;