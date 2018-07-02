/**
 *
 * onTap
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

var onTap = function onTap(props) {
  return React.createElement(
    'div',
    {
      onClick: function onClick() {
        log('onTap!');
        props.startAnim(true);
        log('props', props);
      },
      style: props.style
    },
    props.children
  );
};

export default onTap;