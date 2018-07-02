/**
 *
 * onTap
 *
 */

import React from 'react';
import { log } from 'ruucm-util';
import { isString } from 'lodash';

var onTap = function onTap(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

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
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, isString(child.type) ? {} : otherProps // Only pass all props, when child id Animate(Comp)
      );
    })
  );
};

export default onTap;