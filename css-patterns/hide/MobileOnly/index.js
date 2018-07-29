var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  ', ';\n'], ['\n  display: none;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: block;\n  '], ['\n    display: block;\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * MobileOnly
 *
 */

import React from 'react';
import styled from 'styled-components';
import media from 'ruucm-blocks/tools/media';

var Wrapper = styled.div(_templateObject, media.phone(_templateObject2));

var MobileOnly = function MobileOnly(props) {
  return React.createElement(
    Wrapper,
    props,
    props.children
  );
};

export default MobileOnly;