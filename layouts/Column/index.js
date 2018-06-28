import React from 'react';
import styled from 'styled-components';

var Column = function Column(props) {
  var col = props.col ? 'col-sm-' + props.col : '';
  var mCol = props.mCol ? ' col-' + props.mCol : '';
  return React.createElement(
    'div',
    { className: col + mCol },
    props.children
  );
};

export default Column;