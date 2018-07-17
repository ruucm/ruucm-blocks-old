var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      height: ', 'px;\n    '], ['\n      height: ', 'px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      ', ';\n    '], ['\n      ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        height: ', 'px;\n      '], ['\n        height: ', 'px;\n      ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../tools/media';
var EmptySpaceWrapper = styled.div(_templateObject, function (props) {
  return props.height && css(_templateObject2, props.height);
}, function (props) {
  return props.mHeight && css(_templateObject3, media.phone(_templateObject4, props.mHeight));
});

var EmptySpace = function EmptySpace(props) {
  return React.createElement(
    EmptySpaceWrapper,
    props,
    props.children
  );
};

export default EmptySpace;