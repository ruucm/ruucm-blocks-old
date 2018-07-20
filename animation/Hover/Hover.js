var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 *
 * OnMouseOver
 *
 */

import React from 'react';
import { log } from 'ruucm-util';
import { isString } from 'lodash';

var Hover = function Hover(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    {
      onMouseOver: function onMouseOver(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        props.startAnim(true);
      },
      onMouseOut: function onMouseOut(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        props.startAnim(false);
      },
      style: props.style,
      className: props.className
    },
    React.Children.map(props.children, function (child) {
      var newChildProps = _extends({}, otherProps, {
        trigger: true, // validate it is a trigger
        style: child.props ? child.props.style : ''
      });
      if (isString(child)) return child;else return isString(child.type) ? child : React.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
};

export default Hover;