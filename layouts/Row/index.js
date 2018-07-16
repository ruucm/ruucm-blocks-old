var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import bootstrapGrid from '../../libs/bootstrap-grid';
// import bootstrapDisplay from '../../libs/bootstrap-display'
import { log } from 'ruucm-util';

var RowWrapper = styled.div(_templateObject, bootstrapGrid);

var Row = function Row(_ref) {
  var style = _ref.style,
      children = _ref.children,
      className = _ref.className;

  var parentClassName = className ? ' ' + className : '';
  return React.createElement(
    RowWrapper,
    null,
    React.createElement(
      'div',
      { className: 'row no-gutters' + parentClassName, style: style },
      children
    )
  );
};

export default Row;