var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      height: ', 'px;\n    '], ['\n      height: ', 'px;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';

var EmptySpaceWrapper = styled.div(_templateObject, function (props) {
  return props.height && css(_templateObject2, props.height);
});

var EmptySpace = function EmptySpace(props) {
  return React.createElement(
    EmptySpaceWrapper,
    props,
    props.children
  );
};

export default EmptySpace;