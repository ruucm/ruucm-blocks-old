/**
 *
 * TestAnim
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
// import styled, { css } from 'styled-components'

import animation from './animation';

var TestAnim = function TestAnim(props) {
  return React.createElement('div', props, props.children);
};

// Component enhancer
var enhance = compose(lifecycle({
  componentDidMount: function componentDidMount() {
    // create test user
    // this.props.createUser('')
    alert('yapapa');
  }
}));

export default enhance(TestAnim);