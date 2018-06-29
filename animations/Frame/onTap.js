/**
 *
 * onTap
 *
 */

import React from 'react';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { log } from 'ruucm-util';

import animation from './animation';

var onTap = function onTap(props) {
  log('props(onTap)', props);
  var dom = void 0;

  var otherProps = Object.assign({}, props);
  delete otherProps.children;
  return React.createElement(
    'div',
    {
      style: props.style,
      ref: function ref(node) {
        dom = node;
      },
      onClick: function onClick() {
        log('dom', dom);
        // animate(dom)
      }
    },
    React.Children.map(props.children, function (child) {
      return React.cloneElement(child, otherProps);
    })
  );
};

// const animate = dom => {
//   animation.hide(dom)
// }

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

export default enhance(onTap);