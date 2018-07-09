var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      max-width: ', 'px;\n      margin: 0 auto;\n    '], ['\n      max-width: ', 'px;\n      margin: 0 auto;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';

var SectionWrapper = styled.div(_templateObject, function (props) {
  return props.maxWidth && css(_templateObject2, props.maxWidth);
});
var Section = function Section(props) {
  return React.createElement(
    SectionWrapper,
    props,
    props.children
  );
};

export default Section;