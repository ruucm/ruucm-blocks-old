/**
 *
 * SliderItem
 *
 */

import React from 'react';

var SliderItem = function SliderItem(props) {
  return React.createElement(
    'div',
    { style: props.style },
    props.children
  );
};

export default SliderItem;