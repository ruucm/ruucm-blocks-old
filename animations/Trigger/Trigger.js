/**
 *
 * Trigger
 *
 */

import React from 'react';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { log } from 'ruucm-util';

var Trigger = function Trigger(props) {
  var dom = void 0;
  log('props(Trigger)', props);
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
    props.formOpened ? 'opened Trigger - ' : 'not opened - ',
    props.children
  );
};

export default Trigger;