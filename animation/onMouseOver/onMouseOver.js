/**
 *
 * OnMouseOver
 *
 */

import React from 'react';
import { log } from 'ruucm-util';

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
      return React.cloneElement(child, child.type.displayName == 'withHandlers(lifecycle(Animate))' ? otherProps : {} // Only pass all props, when child id Animate(Comp)
      );
    })
  );
};

export default OnMouseOver;