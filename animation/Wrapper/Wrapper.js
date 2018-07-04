/**
 *
 * Wrapper
 *
 */

import React from 'react';

import { log } from 'ruucm-util';
import { isString } from 'lodash';

var Wrapper = function Wrapper(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  // log('otherProps(Wrapper)', otherProps)
  return React.createElement(
    'div',
    { style: props.style },
    React.Children.map(props.children, function (child) {
      var newChildProps = {
        // ...otherProps,
        style: child.props.style,
        animStarted: props.animStarted,
        startAnim: props.startAnim,
        start: props.start,
        rewind: props.rewind
      };
      return isString(child.type) ? child : React.cloneElement(child, newChildProps
      // Only pass anim props, when child id Wrapper(Comp)
      );
    })
  );
};

export default Wrapper;