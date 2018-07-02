var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 *
 * onTap
 *
 */

import React from 'react';
import { log } from 'ruucm-util';
import { isString, isEmpty } from 'lodash';

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
      var newChildProps = _extends({}, otherProps, {
        style: child.props.style
      });
      return isString(child.type) ? child : React.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
};

export default onTap;