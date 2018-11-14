'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 10px;\n  height: 10px;\n  background: red;\n  z-index: 1;\n  ', ';\n  ', ' ', ';\n'], ['\n  width: 10px;\n  height: 10px;\n  background: red;\n  z-index: 1;\n  ', ';\n  ', ' ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      right: 0;\n    '], ['\n      right: 0;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      left: 0;\n    '], ['\n      left: 0;\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background: beige;\n  text-align: center;\n  > li {\n    list-style: none;\n    display: inline-block;\n    &.slick-active {\n      button {\n        background: blue;\n      }\n    }\n  }\n'], ['\n  background: beige;\n  text-align: center;\n  > li {\n    list-style: none;\n    display: inline-block;\n    &.slick-active {\n      button {\n        background: blue;\n      }\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n'], ['\n  ', ';\n']); /**
                                                                                                *
                                                                                                * Slider
                                                                                                *
                                                                                                */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ruucmUtil = require('ruucm-util');

var _slickStyle = require('./slick-style');

var _slickStyle2 = _interopRequireDefault(_slickStyle);

var _mixins = require('ruucm-blocks/tools/mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledArrow = _styledComponents2.default.div(_templateObject, (0, _mixins.center)('y'), function (props) {
  return props.next && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.prev && (0, _styledComponents.css)(_templateObject3);
});
var DotsWrapper = _styledComponents2.default.div(_templateObject4);
var SampleNextArrow = function SampleNextArrow(props) {
  return _react2.default.createElement(StyledArrow, { next: true, onClick: props.onClick });
};
var SamplePrevArrow = function SamplePrevArrow(props) {
  return _react2.default.createElement(StyledArrow, { prev: true, onClick: props.onClick });
};
var SampleAppendDots = function SampleAppendDots(dots) {
  return _react2.default.createElement(
    DotsWrapper,
    null,
    dots
  );
};
var defaultSpeed = 500;
var defaultAutoplaySpeed = 2000;

var Wrapper = _styledComponents2.default.div(_templateObject5, _slickStyle2.default);

var SliderComp = function SliderComp(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;
  var settings = {
    dots: true,
    appendDots: props.appendDots ? props.appendDots : SampleAppendDots,
    infinite: true,
    speed: props.speed ? props.speed : defaultSpeed,
    autoplay: true,
    autoplaySpeed: props.autoplaySpeed ? props.autoplaySpeed : defaultAutoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: props.nextArrow ? props.nextArrow : _react2.default.createElement(SampleNextArrow, null),
    prevArrow: props.prevArrow ? props.prevArrow : _react2.default.createElement(SamplePrevArrow, null)
  };
  return _react2.default.createElement(
    Wrapper,
    { style: props.style },
    props.children ? _react2.default.createElement(
      _reactSlick2.default,
      settings,
      props.children
    ) : 'add slider items first'
  );
};

exports.default = SliderComp;