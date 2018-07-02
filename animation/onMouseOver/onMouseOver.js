var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      var newChildProps = _extends({}, otherProps, {
        style: child.props.style
      });
      return isString(child.type) ? child : React.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
};

export default OnMouseOver;