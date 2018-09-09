'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JellyLoadingSpinner = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 50px;\n  height: 50px;\n  position: relative;\n  margin: 0 auto;\n  ', ' #jelly-loader {\n    /* animation: loader 5s linear infinite; <-- horizontal anim */\n    position: absolute;\n    top: calc(50% - 20px);\n    left: calc(50% - 20px);\n  }\n  @keyframes loader {\n    0% {\n      left: 0px;\n    }\n    100% {\n      left: 110%;\n    }\n  }\n  #jelly-box {\n    width: 50px;\n    height: 50px;\n    background: #fff;\n    animation: animate 0.5s linear infinite;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 3px;\n  }\n  @keyframes animate {\n    17% {\n      border-bottom-right-radius: 3px;\n    }\n    25% {\n      transform: translateY(9px) rotate(22.5deg);\n    }\n    50% {\n      transform: translateY(18px) scale(1, 0.9) rotate(45deg);\n      border-bottom-right-radius: 40px;\n    }\n    75% {\n      transform: translateY(9px) rotate(67.5deg);\n    }\n    100% {\n      transform: translateY(0) rotate(90deg);\n    }\n  }\n  #jelly-shadow {\n    width: 50px;\n    height: 5px;\n    background: #f3a536;\n    opacity: 1;\n    position: absolute;\n    top: 59px;\n    left: 0;\n    border-radius: 50%;\n    animation: shadow 0.5s linear infinite;\n  }\n  @keyframes shadow {\n    50% {\n      transform: scale(1.2, 1);\n    }\n  }\n'], ['\n  width: 50px;\n  height: 50px;\n  position: relative;\n  margin: 0 auto;\n  ', ' #jelly-loader {\n    /* animation: loader 5s linear infinite; <-- horizontal anim */\n    position: absolute;\n    top: calc(50% - 20px);\n    left: calc(50% - 20px);\n  }\n  @keyframes loader {\n    0% {\n      left: 0px;\n    }\n    100% {\n      left: 110%;\n    }\n  }\n  #jelly-box {\n    width: 50px;\n    height: 50px;\n    background: #fff;\n    animation: animate 0.5s linear infinite;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 3px;\n  }\n  @keyframes animate {\n    17% {\n      border-bottom-right-radius: 3px;\n    }\n    25% {\n      transform: translateY(9px) rotate(22.5deg);\n    }\n    50% {\n      transform: translateY(18px) scale(1, 0.9) rotate(45deg);\n      border-bottom-right-radius: 40px;\n    }\n    75% {\n      transform: translateY(9px) rotate(67.5deg);\n    }\n    100% {\n      transform: translateY(0) rotate(90deg);\n    }\n  }\n  #jelly-shadow {\n    width: 50px;\n    height: 5px;\n    background: #f3a536;\n    opacity: 1;\n    position: absolute;\n    top: 59px;\n    left: 0;\n    border-radius: 50%;\n    animation: shadow 0.5s linear infinite;\n  }\n  @keyframes shadow {\n    50% {\n      transform: scale(1.2, 1);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../../../tools/mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div(_templateObject, (0, _mixins.center)('y'));

var JellyLoadingSpinner = exports.JellyLoadingSpinner = function JellyLoadingSpinner(_ref) {
  var size = _ref.size;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      'div',
      { id: 'jelly-loader' },
      _react2.default.createElement('div', { id: 'jelly-shadow' }),
      _react2.default.createElement('div', { id: 'jelly-box' })
    )
  );
};

exports.default = JellyLoadingSpinner;