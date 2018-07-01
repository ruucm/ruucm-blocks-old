/**
 *
 * onTap
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

var onTap = function onTap(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    {
      onClick: function onClick() {
        log('onTap!');
        log('props', props);
        props.startAnim(true);
      },
      style: props.style
    },
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, otherProps);
    })
  );
};

export default onTap;