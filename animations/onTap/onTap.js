/**
 *
 * onTap
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

var onTap = function onTap(props) {
  log('props(onTap)', props);
  return React.createElement(
    'div',
    {
      onClick: function onClick() {
        props.startAnim(true);
      },
      style: props.style
    },
    props.children
  );
};

export default onTap;