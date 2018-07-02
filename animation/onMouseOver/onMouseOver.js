/**
 *
 * OnMouseOver
 *
 */

import React from 'react';
import { log } from 'ruucm-util';
import { isString } from 'lodash';

var OnMouseOver = function OnMouseOver(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    {
      onMouseOver: function onMouseOver() {
        log('onMouseOver!');
        props.startAnim(true);
      },
      style: props.style
    },
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, isString(child.type) ? {} : otherProps // Only pass all props, when child id Animate(Comp)
      );
    })
  );
};

export default OnMouseOver;