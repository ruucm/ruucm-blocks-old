/**
 *
 * Frame
 *
 */

import React from 'react';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { log } from 'ruucm-util';

import animation from './animation';

var Frame = function Frame(props) {
  log('props(Frame)', props);

  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    { style: props.style },
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, otherProps);
    })
  );
};

// Component enhancer
var enhance = compose(withHandlers({
  animate: function animate(props) {
    return function (dom) {
      log('animate!!!!');
      animation.hide(dom);
    };
  }
}), lifecycle({
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {}
}));

export default enhance(Frame);