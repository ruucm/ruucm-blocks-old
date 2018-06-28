var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import bootstrapGrid from '../../libs/bootstrap-grid';

var RowWrapper = styled.div(_templateObject, bootstrapGrid);

var Row = function Row(_ref) {
  var children = _ref.children;

  return React.createElement(
    RowWrapper,
    null,
    React.createElement(
      'div',
      { className: 'row' },
      children
    )
  );
};

export default Row;