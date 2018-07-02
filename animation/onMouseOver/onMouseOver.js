/**
 *
 * OnMouseOver
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

var OnMouseOver = function OnMouseOver(props) {
  return React.createElement(
    'div',
    {
      onMouseOver: function onMouseOver() {
        log('onMouseOver!');
        props.startAnim(true);
      },
      style: props.style
    },
    props.children
  );
};

export default OnMouseOver;