var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  color: red;\n  position: absolute;\n  top: 200px;\n'], ['\n  ', '\n  color: red;\n  position: absolute;\n  top: 200px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { center } from '../../tools/mixins';

var InputError = styled.span(_templateObject, center('x'));

export default InputError;