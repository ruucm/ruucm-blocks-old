'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  position: absolute;\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    '], ['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    '], ['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    '], ['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    ']); /**
                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                        * Center
                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                        */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CenterWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.axis == 'x' && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.axis == 'y' && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.axis == 'xy' && (0, _styledComponents.css)(_templateObject4);
});

var Center = function (_Component) {
  (0, _inherits3.default)(Center, _Component);

  function Center() {
    (0, _classCallCheck3.default)(this, Center);
    return (0, _possibleConstructorReturn3.default)(this, (Center.__proto__ || Object.getPrototypeOf(Center)).apply(this, arguments));
  }

  (0, _createClass3.default)(Center, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        CenterWrapper,
        this.props,
        this.props.children
      );
    }
  }]);
  return Center;
}(_react.Component);

exports.default = Center;