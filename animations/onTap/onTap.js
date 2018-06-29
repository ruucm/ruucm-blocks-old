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
      }
      // onClick={() => {
      //   log('dom', dom)
      //   props.animate(dom)
      // }}
      , onClick: function onClick() {
        props.openForm(true);
      },
      style: props.style
    },
    '(Tap me)',
    props.children
  );
};

export default onTap;