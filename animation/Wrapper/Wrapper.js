'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ruucmUtil = require('ruucm-util');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  // log('otherProps(Wrapper)', otherProps)
  return _react2.default.createElement(
    'div',
    { style: props.style },
    _react2.default.Children.map(props.children, function (child) {
      var newChildProps = {
        // ...otherProps,
        style: child.props.style,
        animStarted: props.animStarted,
        startAnim: props.startAnim,
        start: props.start,
        rewind: props.rewind
      };
      return (0, _lodash.isString)(child.type) ? child : _react2.default.cloneElement(child, newChildProps
      // Only pass anim props, when child id Wrapper(Comp)
      );
    })
  );
}; /**
    *
    * Wrapper
    *
    */

exports.default = Wrapper;