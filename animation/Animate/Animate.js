/**
 *
 * Animate
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle, withState } from 'recompose';
import { log } from 'ruucm-util';
import { isString, isNil } from 'lodash';

import animation from './animation';

var Animate = function Animate(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return React.createElement(
    'div',
    {
      style: props.style,
      className: props.className,
      onClick: props.onClick
    },
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

var enhance = compose(withState('tween', 'setTween', -1), // Prventing Duplicated tween animation
lifecycle({
  componentDidMount: function componentDidMount() {
    // auto start animation (when it doesn't have trigger, Alone 😢)
    var _props = this.props,
        tween = _props.tween,
        setTween = _props.setTween,
        isAlone = _props.isAlone;

    if (!isNil(isAlone) && !isAlone) {
      // check it has a trigger
      var dom = ReactDOM.findDOMNode(this);
      if (tween == -1) setTween(animation.to(dom, this.props));else if (tween.reversed()) tween.play();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _props2 = this.props,
        tween = _props2.tween,
        setTween = _props2.setTween;

    if (this.props.to && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      // start animation (Prevent Duplicated anim)
      if (tween == -1) setTween(animation.to(dom, this.props));else if (tween.reversed()) tween.play();
    }

    if (this.props.from && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      animation.from(dom, this.props);
    }

    if (!newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      if (!tween.reversed()) tween.reverse(); // reverse animation
    }
  }
}));

export default enhance(Animate);