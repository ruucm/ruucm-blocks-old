'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ruucmUtil = require('ruucm-util');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onTap = function onTap(_ref) {
  var animStarted = _ref.animStarted,
      props = (0, _objectWithoutProperties3.default)(_ref, ['animStarted']);

  var otherProps = Object.assign({}, props);
  delete otherProps.children;
  var startAnim = props.startAnim ? props.startAnim : function () {
    return false;
  };

  return _react2.default.createElement(
    'div',
    {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (!animStarted) startAnim(true);else startAnim(false);
      },
      style: props.style,
      className: props.className
    },
    _react2.default.Children.map(props.children, function (child) {
      var newChildProps = (0, _extends3.default)({}, otherProps, {
        style: child.props ? child.props.style : ''
      });
      if ((0, _lodash.isString)(child)) return child;else return (0, _lodash.isString)(child.type) ? child : _react2.default.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
}; /**
    *
    * onTap
    *
    */

exports.default = onTap;