var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        height: ', ';\n      '], ['\n        height: ', ';\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      ', ';\n    '], ['\n      ', ';\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../tools/media';

var EmptySpaceWrapper = styled.div(_templateObject, function (props) {
  var height = props.height.toString();
  return props.height && css(_templateObject2, height.includes('px') || height.includes('vw') ? height : height + 'px');
}, function (props) {
  return props.mHeight && css(_templateObject3, media.phone(_templateObject2, props.mHeight.includes('px') || props.mHeight.includes('vw') ? props.mHeight : props.mHeight + 'px'));
});

var EmptySpace = function EmptySpace(props) {
  return React.createElement(
    EmptySpaceWrapper,
    props,
    props.children
  );
};

export default EmptySpace;