var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n  width: 104.3%;\n  position: relative;\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n  width: 104.3%;\n  position: relative;\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      margin-left: 16.5vw;\n      ', ' {\n        left: 7.5vw;\n      }\n      ', ' {\n        margin-right: calc(16.5vw + 77px);\n      }\n      .slick-next {\n        right: calc(16.5vw + 120px);\n      }\n    '], ['\n      margin-left: 16.5vw;\n      ', ' {\n        left: 7.5vw;\n      }\n      ', ' {\n        margin-right: calc(16.5vw + 77px);\n      }\n      .slick-next {\n        right: calc(16.5vw + 120px);\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      margin-left: -16.5vw;\n      ', ' {\n        left: calc(16.5vw + 7.5vw);\n      }\n      ', ' {\n        margin-right: 17px;\n      }\n      .slick-next {\n        right: calc(16.5vw - 170px);\n      }\n    '], ['\n      margin-left: -16.5vw;\n      ', ' {\n        left: calc(16.5vw + 7.5vw);\n      }\n      ', ' {\n        margin-right: 17px;\n      }\n      .slick-next {\n        right: calc(16.5vw - 170px);\n      }\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  background: #525ef6;\n  height: 34.76vw;\n'], ['\n  position: relative;\n  background: #525ef6;\n  height: 34.76vw;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: NanumMyeongjoWeb;\n  color: #eae5e3;\n  font-size: 40px;\n  position: absolute;\n  ', ';\n'], ['\n  font-family: NanumMyeongjoWeb;\n  color: #eae5e3;\n  font-size: 40px;\n  position: absolute;\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: right;\n'], ['\n  position: relative;\n  text-align: right;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 122px;\n  font-family: Montserrat;\n  font-style: italic;\n  font-weight: 900;\n  color: #52f25b;\n  transform: rotate(-90deg);\n  transform-origin: left;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n'], ['\n  font-size: 122px;\n  font-family: Montserrat;\n  font-style: italic;\n  font-weight: 900;\n  color: #52f25b;\n  transform: rotate(-90deg);\n  transform-origin: left;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 35px;\n  font-family: NanumSquareWeb;\n  text-decoration: none;\n  display: block;\n  margin-bottom: 30px;\n  color: #525ef6;\n'], ['\n  font-weight: 300;\n  font-size: 35px;\n  font-family: NanumSquareWeb;\n  text-decoration: none;\n  display: block;\n  margin-bottom: 30px;\n  color: #525ef6;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';

import { log } from 'ruucm-util';
import { map, isNil, isEmpty } from 'lodash';
import Slider from 'react-slick';
import slickStyle from './slick-style';
import slickThemeStyle from './slick-theme-style';
import { Link } from 'react-router';
import { center } from 'ruucm-blocks/tools/mixins';
import { JellyLoadingSpinner, LittleFerryLoader } from 'ruucm-blocks/components/LoadingSpinners';

var Wrapper = styled.div(_templateObject, slickStyle, slickThemeStyle, function (props) {
  return props.align == 'right' && css(_templateObject2, Title, StyledLink);
}, function (props) {
  return props.align == 'left' && css(_templateObject3, Title, StyledLink);
});
var LoadingWrapper = styled.div(_templateObject4);
var LoadingText = styled.h1(_templateObject5, center('xy'));

var ContentWrapper = styled.div(_templateObject6);

var Title = styled.h1(_templateObject7);

var StyledLink = styled.a(_templateObject8);

function NextArrow(props) {
  var className = props.className,
      onClick = props.onClick;

  return React.createElement('div', { className: className, onClick: onClick });
}

function PrevArrow(props) {
  return React.createElement('div', null);
}

var Carousel = function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: React.createElement(NextArrow, null),
    prevArrow: React.createElement(PrevArrow, null)
  };
  return React.createElement(
    Wrapper,
    props,
    React.createElement(
      Title,
      null,
      props.title
    ),
    isNil(props.datas) ? React.createElement(
      LoadingWrapper,
      null,
      React.createElement(LittleFerryLoader, { waveColor: '#525EF6' })
    ) : isEmpty(props.datas) ? React.createElement(
      LoadingWrapper,
      null,
      React.createElement(
        LoadingText,
        null,
        '\uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.'
      )
    ) // No Data!
    : React.createElement(
      ContentWrapper,
      null,
      React.createElement(
        StyledLink,
        { href: props.viewAllLink },
        '\uBAA8\uC544\uBCF4\uAE30'
      ),
      React.createElement(
        Slider,
        settings,
        map(props.datas, function (data, id) {
          return React.Children.map(props.children, function (child) {
            return React.cloneElement(child, { itemData: data });
          });
        })
      )
    )
  );
};

export default Carousel;