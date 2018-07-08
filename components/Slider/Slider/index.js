var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Slider
 *
 */

import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import slickStyle from './slick-style';
import slickThemeStyle from './slick-theme-style';

function SampleNextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;

  return React.createElement('div', { className: className + ' next-arrow', onClick: onClick });
}

function SamplePrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;

  return React.createElement('div', { className: className + ' prev-arrow', onClick: onClick });
}

var Wrapper = styled.div(_templateObject, slickStyle, slickThemeStyle);

var SliderComp = function SliderComp(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: React.createElement(SampleNextArrow, null),
    prevArrow: React.createElement(SamplePrevArrow, null)
  };
  return React.createElement(
    Wrapper,
    { style: props.style },
    React.createElement(
      Slider,
      settings,
      props.children
    )
  );
};

export default SliderComp;