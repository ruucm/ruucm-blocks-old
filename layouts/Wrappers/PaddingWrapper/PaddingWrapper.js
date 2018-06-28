var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ';\n  ', '\n'], ['\n  padding: ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: ', '\n  '], ['\n    padding: ', '\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import media from '../../../tools/media';

var PaddingWrapper = styled.div(_templateObject, function (props) {
  return props.padding;
}, media.phone(_templateObject2, function (props) {
  return props.mPadding;
}));
export default PaddingWrapper;