var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * DesktopOnly
 *
 */

import React from 'react';
import styled from 'styled-components';
import media from 'ruucm-blocks/tools/media';

var Wrapper = styled.div(_templateObject, media.phone(_templateObject2));

var DesktopOnly = function DesktopOnly(props) {
  return React.createElement(
    Wrapper,
    props,
    props.children
  );
};

export default DesktopOnly;