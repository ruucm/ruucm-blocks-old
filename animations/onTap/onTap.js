/**
 *
 * onTap
 *
 */

import React from 'react';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { log } from 'ruucm-util';

var onTap = function onTap(props) {
  var dom = void 0;
  log('props(onTap)', props);
  return React.createElement(
    'div',
    {
      ref: function ref(node) {
        dom = node;
      },
      onClick: function onClick() {
        log('dom', dom);
        props.animate(dom);
      },
      style: props.style
    },
    '(Tap me)',
    props.children
  );
};

export default onTap;