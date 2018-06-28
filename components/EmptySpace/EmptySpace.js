var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: ', '; \n  ', ' \n'], ['\n  width: 100%;\n  height: ', '; \n  ', ' \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: ', ';\n    display: inline-block;\n  '], ['\n    width: ', ';\n    display: inline-block;\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var EmptySpace = styled.div(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.vertical && css(_templateObject2, function (props) {
    return props.width;
  });
});

export default EmptySpace;