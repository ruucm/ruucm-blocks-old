'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = exports.sizes = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  ']); // these sizes are arbitrary and you can set them to whatever you wish


var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 426
};

var isMobile = function isMobile() {
  return screen.width < sizes.phone;
};

// iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

exports.default = media;
exports.sizes = sizes;
exports.isMobile = isMobile;