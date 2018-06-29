var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var dom = void 0;
  return React.createElement(
    'div',
    _extends({}, props, {
      ref: function ref(node) {
        dom = node;
      },
      onClick: function onClick() {
        // animate(this)
        log('dom', dom);
        animate(dom);
      }
    }),
    props.children
  );
};

var animate = function animate(dom) {
  animation.hide(dom);
};

// Component enhancer
var enhance = compose(lifecycle({
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {}
}));

export default enhance(onTap);