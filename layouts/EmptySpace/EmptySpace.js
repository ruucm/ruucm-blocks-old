var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n\n  ', ';\n'], ['\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        height: ', ';\n      '], ['\n        height: ', ';\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    ', ';\n  '], ['\n    ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n          height: ', ';\n        '], ['\n          height: ', ';\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';
import media from 'ruucm-blocks/tools/media';

var EmptySpaceWrapper = styled.div(_templateObject, function (props) {
  var height = props.height + '';
  return props.height && css(_templateObject2, height.includes('px') || height.includes('vw') ? height : height + 'px');
}, media.phone(_templateObject3, function (props) {
  var mHeight = props.mHeight + '';
  return (props.mHeight || props.mHeight == 0) && css(_templateObject4, mHeight.includes('px') || mHeight.includes('vw') ? mHeight : mHeight + 'px');
}));

var EmptySpace = function EmptySpace(props) {
  return React.createElement(
    EmptySpaceWrapper,
    props,
    props.children
  );
};

export default EmptySpace;