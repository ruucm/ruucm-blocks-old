var _templateObject = _taggedTemplateLiteral(['\n  font-family: Josefin Sans;\n  font-weight: bold;\n  line-height: 57px;\n  font-size: 50px;\n  letter-spacing: -0.04em;\n  color: #283E4E;\n  text-align: center;\n  margin: 0;\n  margin-top: ', ';\n'], ['\n  font-family: Josefin Sans;\n  font-weight: bold;\n  line-height: 57px;\n  font-size: 50px;\n  letter-spacing: -0.04em;\n  color: #283E4E;\n  text-align: center;\n  margin: 0;\n  margin-top: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

var Title = styled.h1(_templateObject, function (props) {
  return props.marginTop;
});

export default Title;