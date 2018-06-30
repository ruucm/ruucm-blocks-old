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
    props.formOpened ? 'target opened - ' : 'target not opened - ',
    props.children
  );
};

var enhance = compose(withHandlers({
  animate: function animate(props) {
    return function (dom) {
      log('animate!!!!');
      // animation.show(dom)
      animation.start(dom, props);
    };
  }
}), lifecycle({
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // Animate When Trigger State change Detected
    if (newProps.formOpened != this.props.formOpened) {
      var dom = ReactDOM.findDOMNode(this);
      this.props.animate(dom);
    }
  }
}));

export default enhance(Animate);