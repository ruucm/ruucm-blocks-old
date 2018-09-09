'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Helvetica Regular\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'HelveticaRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Regular Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'HelveticaRegularO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: normal;\n    font-weight: 500;\n    src: local(\'HelveticaMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: italic;\n    font-weight: 500;\n    src: local(\'HelveticaMediumO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Helvetica Regular\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'HelveticaRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Regular Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'HelveticaRegularO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: normal;\n    font-weight: 500;\n    src: local(\'HelveticaMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaCnWeb\';\n    font-style: italic;\n    font-weight: 500;\n    src: local(\'HelveticaMediumO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _HelveticaNeueLTProCn = require('./fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.eot');

var _HelveticaNeueLTProCn2 = _interopRequireDefault(_HelveticaNeueLTProCn);

var _HelveticaNeueLTProCn3 = require('./fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.ttf');

var _HelveticaNeueLTProCn4 = _interopRequireDefault(_HelveticaNeueLTProCn3);

var _HelveticaNeueLTProCn5 = require('./fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.woff');

var _HelveticaNeueLTProCn6 = _interopRequireDefault(_HelveticaNeueLTProCn5);

var _HelveticaNeueLTProCnO = require('./fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.eot');

var _HelveticaNeueLTProCnO2 = _interopRequireDefault(_HelveticaNeueLTProCnO);

var _HelveticaNeueLTProCnO3 = require('./fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.ttf');

var _HelveticaNeueLTProCnO4 = _interopRequireDefault(_HelveticaNeueLTProCnO3);

var _HelveticaNeueLTProCnO5 = require('./fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.woff');

var _HelveticaNeueLTProCnO6 = _interopRequireDefault(_HelveticaNeueLTProCnO5);

var _HelveticaNeueLTProMdCn = require('./fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.eot');

var _HelveticaNeueLTProMdCn2 = _interopRequireDefault(_HelveticaNeueLTProMdCn);

var _HelveticaNeueLTProMdCn3 = require('./fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.ttf');

var _HelveticaNeueLTProMdCn4 = _interopRequireDefault(_HelveticaNeueLTProMdCn3);

var _HelveticaNeueLTProMdCn5 = require('./fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.woff');

var _HelveticaNeueLTProMdCn6 = _interopRequireDefault(_HelveticaNeueLTProMdCn5);

var _HelveticaNeueLTProMdCnO = require('./fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.eot');

var _HelveticaNeueLTProMdCnO2 = _interopRequireDefault(_HelveticaNeueLTProMdCnO);

var _HelveticaNeueLTProMdCnO3 = require('./fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.ttf');

var _HelveticaNeueLTProMdCnO4 = _interopRequireDefault(_HelveticaNeueLTProMdCnO3);

var _HelveticaNeueLTProMdCnO5 = require('./fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.woff');

var _HelveticaNeueLTProMdCnO6 = _interopRequireDefault(_HelveticaNeueLTProMdCnO5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helvetica = (0, _styledComponents.css)(_templateObject, _HelveticaNeueLTProCn6.default, _HelveticaNeueLTProCn6.default, _HelveticaNeueLTProCn4.default, _HelveticaNeueLTProCn2.default, _HelveticaNeueLTProCnO6.default, _HelveticaNeueLTProCnO6.default, _HelveticaNeueLTProCnO4.default, _HelveticaNeueLTProCnO2.default, _HelveticaNeueLTProMdCn6.default, _HelveticaNeueLTProMdCn6.default, _HelveticaNeueLTProMdCn4.default, _HelveticaNeueLTProMdCn2.default, _HelveticaNeueLTProMdCnO6.default, _HelveticaNeueLTProMdCnO6.default, _HelveticaNeueLTProMdCnO4.default, _HelveticaNeueLTProMdCnO2.default);

exports.default = Helvetica;