/**
 *
 * Animate
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle, withHandlers } from 'recompose';
import { log } from 'ruucm-util';

import animation from './animation';

var Animate = function Animate(props) {
  log('props(Animate)', props);
  return React.createElement(
    'div',
    { style: props.style },
    props.children
  );
};

var enhance = compose(withHandlers({
  start: function start(props) {
    return function (dom) {
      animation.start(dom, props);
    };
  },
  rewind: function rewind(props) {
    return function (dom) {
      animation.rewind(dom, props);
    };
  }
}), lifecycle({
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // Animate When Trigger State change Detected
    if (newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      animation.start(dom, this.props);
    }

    if (!newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = ReactDOM.findDOMNode(this);
      animation.rewind(dom, this.props);
    }
  }
}));

export default enhance(Animate);