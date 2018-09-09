'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  ', '\n'], ['\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin: 0 auto;\n'], ['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin: 0 auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../../tools/mixins');

var _ruucmUtil = require('ruucm-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _styledComponents2.default.img(_templateObject, (0, _mixins.center)('x'));

var Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var CenteredImage = function CenteredImage(props) {
  (0, _ruucmUtil.log)('CenteredImage src is', props);
  return _react2.default.createElement(
    Wrapper,
    { width: props.width, height: props.height },
    _react2.default.createElement(Image, { src: props.src })
  );
};

exports.default = CenteredImage;