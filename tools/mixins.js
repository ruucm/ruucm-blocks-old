'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mem = exports.fem2 = exports.wem2 = exports.wem = exports.centerIconA = exports.transition = exports.center = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n      position: absolute;\n    '], ['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n      position: absolute;\n    ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n      position: absolute;\n    '], ['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n      position: absolute;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n      position: absolute;\n    '], ['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n      position: absolute;\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    -webkit-transition: ', ' ', '; /* Safari */\n    transition: ', ' ', ';\n  '], ['\n    -webkit-transition: ', ' ', '; /* Safari */\n    transition: ', ' ', ';\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    > span {\n      font-size: ', ';\n      vertical-align: middle;\n    }\n    > a {\n      font-size: ', ';\n      display: inline-block;\n      vertical-align: middle;\n    }\n  '], ['\n    > span {\n      font-size: ', ';\n      vertical-align: middle;\n    }\n    > a {\n      font-size: ', ';\n      display: inline-block;\n      vertical-align: middle;\n    }\n  ']);

var _styledComponents = require('styled-components');

var _media = require('./media');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var center = exports.center = function center(type) {
  if (type == 'y') return (0, _styledComponents.css)(_templateObject);else if (type == 'x') return (0, _styledComponents.css)(_templateObject2);else if (type == 'xy') return (0, _styledComponents.css)(_templateObject3);
};

var transition = exports.transition = function transition(type, duration) {
  return (0, _styledComponents.css)(_templateObject4, type, duration + 'ms', type, duration + 'ms');
};

var centerIconA = exports.centerIconA = function centerIconA(iconSize, textSize) {
  return (0, _styledComponents.css)(_templateObject5, iconSize, textSize);
};

var wem = exports.wem = function wem(pxSize) {
  var baseScreenSize = 1920;

  if (screen.width > _media.sizes.phone) return pxSize / baseScreenSize * 100 + 'vw';else return pxSize / baseScreenSize * 2.5 * 100 + 'vw';
};

var wem2 = exports.wem2 = function wem2(pxSize) {
  var baseScreenSize = 1440;

  if (screen.width > _media.sizes.phone) return pxSize / baseScreenSize * 100 + 'vw';else return pxSize / baseScreenSize * 2.5 * 100 + 'vw';
};

var fem2 = exports.fem2 = function fem2(pxSize) {
  var baseScreenSize = 1400;

  if (screen.width > baseScreenSize) return pxSize + 'px';
  // srceen is bigger than 1400, return original pixel sizes
  else if (screen.width > _media.sizes.phone) return pxSize / baseScreenSize * 100 + 'vw';else return pxSize / baseScreenSize * 5.181 * 100 + 'vw'; // cnyttan project only
};

var mem = exports.mem = function mem(pxSize) {
  var mBaseScreenSize = 375;

  if (screen.width > mBaseScreenSize) return pxSize + 'px';
  // srceen is bigger than 1400, return original pixel sizes
  else return pxSize / mBaseScreenSize * 100 + 'vw'; // cnyttan project only
};