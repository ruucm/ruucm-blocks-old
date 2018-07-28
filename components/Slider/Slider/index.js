var _templateObject = _taggedTemplateLiteral(['\n  width: 10px;\n  height: 10px;\n  background: red;\n  ', ';\n  ', ' ', ';\n'], ['\n  width: 10px;\n  height: 10px;\n  background: red;\n  ', ';\n  ', ' ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      right: 0;\n    '], ['\n      right: 0;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      left: 0;\n    '], ['\n      left: 0;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background: beige;\n  text-align: center;\n  > li {\n    list-style: none;\n    display: inline-block;\n    &.slick-active {\n      button {\n        background: blue;\n      }\n    }\n  }\n'], ['\n  background: beige;\n  text-align: center;\n  > li {\n    list-style: none;\n    display: inline-block;\n    &.slick-active {\n      button {\n        background: blue;\n      }\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Slider
 *
 */

import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import { log } from 'ruucm-util';

import slickStyle from './slick-style';
import { center } from 'ruucm-blocks/tools/mixins';

var StyledArrow = styled.div(_templateObject, center('y'), function (props) {
  return props.next && css(_templateObject2);
}, function (props) {
  return props.prev && css(_templateObject3);
});
var DotsWrapper = styled.div(_templateObject4);
var SampleNextArrow = function SampleNextArrow(props) {
  return React.createElement(StyledArrow, { next: true, onClick: props.onClick });
};
var SamplePrevArrow = function SamplePrevArrow(props) {
  return React.createElement(StyledArrow, { prev: true, onClick: props.onClick });
};
var SampleAppendDots = function SampleAppendDots(dots) {
  return React.createElement(
    DotsWrapper,
    null,
    dots
  );
};

var Wrapper = styled.div(_templateObject5, slickStyle);

var SliderComp = function SliderComp(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;
  log('props(SliderComp)', props);
  var settings = {
    dots: true,
    appendDots: props.appendDots ? props.appendDots : SampleAppendDots,
    infinite: true,
    slidesToShow: props.slidesToShow ? props.slidesToShow : 1,
    slidesToScroll: 1,
    vertical: props.vertical ? props.vertical : false,
    verticalSwiping: props.verticalSwiping ? props.verticalSwiping : false,

    afterChange: props.afterChange ? props.afterChange : void 0,
    beforeChange: props.beforeChange ? props.beforeChange : void 0,

    touchThreshold: props.touchThreshold ? props.touchThreshold : 5,
    speed: props.vertical ? 1000 : 500,

    nextArrow: props.nextArrow ? props.nextArrow : React.createElement(SampleNextArrow, null),
    prevArrow: props.prevArrow ? props.prevArrow : React.createElement(SamplePrevArrow, null)
  };
  log(';settings', settings);
  return React.createElement(
    Wrapper,
    { style: props.style },
    props.children ? React.createElement(
      Slider,
      settings,
      props.children
    ) : 'add slider items first'
  );
};

export default SliderComp;