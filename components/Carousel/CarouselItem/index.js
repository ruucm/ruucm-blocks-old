var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  &:after {\n    position: absolute;\n    content: \' \';\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    background-color: rgba(82, 94, 246, 0.4);\n    transition: all 320ms;\n  }\n  &:hover {\n    &:after {\n      opacity: 0;\n    }\n  }\n'], ['\n  position: relative;\n  display: block;\n  &:after {\n    position: absolute;\n    content: \' \';\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    background-color: rgba(82, 94, 246, 0.4);\n    transition: all 320ms;\n  }\n  &:hover {\n    &:after {\n      opacity: 0;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 34.76vw;\n  object-fit: cover;\n'], ['\n  width: 100%;\n  height: 34.76vw;\n  object-fit: cover;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: NanumMyeongjoWeb;\n  font-size: 40px;\n  color: #eae5e3;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  white-space: nowrap;\n  ', ';\n'], ['\n  font-family: NanumMyeongjoWeb;\n  font-size: 40px;\n  color: #eae5e3;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  white-space: nowrap;\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translateX(-50%) translateY(-50%);\n  '], ['\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translateX(-50%) translateY(-50%);\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';

import { log } from 'ruucm-util';
import { map, isEmpty } from 'lodash';

var Wrapper = styled.a(_templateObject);

var Image = styled.img(_templateObject2);
var ItemTitle = styled.h1(_templateObject3, css(_templateObject4));

var CarouselItem = function CarouselItem(props) {
  return !isEmpty(props.itemData) ? React.createElement(
    Wrapper,
    { href: props.itemData.link },
    React.createElement(Image, { src: props.itemData._embedded['wp:featuredmedia'][0].source_url }),
    React.createElement(
      ItemTitle,
      null,
      props.itemData.title.rendered
    )
  ) : '[no item data]';
};

export default CarouselItem;