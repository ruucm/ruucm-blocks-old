/**
 *
 * onMouseOver
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

var onMouseOver = function onMouseOver(props) {
  log('props(onMouseOver)', props);

  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    {
      onMouseOver: function onMouseOver() {
        props.startAnim(true);
      },
      style: props.style
    },
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, otherProps);
    })
  );
};

export default onMouseOver;