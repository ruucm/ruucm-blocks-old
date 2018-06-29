/**
 *
 * Target
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, lifecycle } from 'recompose';
import { log } from 'ruucm-util';

var Target = function Target(props) {
  log('props(Target)', props);
  return React.createElement(
    'div',
    { style: props.style },
    props.formOpened ? 'target opened - ' : 'target not opened - ',
    props.children
  );
};

var enhance = compose(lifecycle({
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // Animate When Trigger State change Detected
    if (newProps.formOpened != this.props.formOpened) {
      var dom = ReactDOM.findDOMNode(this);
      this.props.animate(dom);
    }
  }
}));

export default enhance(Target);