/**
 *
 * onTap
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { log } from 'ruucm-util';

import animation from './animation';

var onTap = function onTap(props) {
  // const { component, id, toggleEdit, ...props } = props

  return React.createElement(
    'div',
    props,
    props.children
  );
};

// Component enhancer
var enhance = compose(lifecycle({
  componentDidMount: function componentDidMount() {
    var hey = ReactDOM.findDOMNode(this);
    log('hey111', hey);
    // animation.show(hey)
  },
  componentWillUnmount: function componentWillUnmount() {}
}));

export default enhance(onTap);