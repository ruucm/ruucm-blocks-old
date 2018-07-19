/**
 *
 * Animate
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle, withHandlers } from 'recompose';
import { log } from 'ruucm-util';
import { isString } from 'lodash';

import animation from './animation';

var tween;

var Animate = function Animate(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    { style: props.style, className: props.className },
    React.Children.map(props.children, function (child) {
      var newChildProps = {
        animStarted: props.animStarted,
        startAnim: props.startAnim,
        start: props.start,
        rewind: props.rewind,
        style: child.props ? child.props.style : ''
      };
      if (isString(child)) return child;else return isString(child.type) ? child : React.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
};

var enhance = compose(lifecycle({
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (this.props.to && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      tween = animation.to(dom, this.props);
    }

    if (this.props.from && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      animation.from(dom, this.props);
    }

    if (!newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      tween.reverse(2, false);
    }
  }
}));

export default enhance(Animate);