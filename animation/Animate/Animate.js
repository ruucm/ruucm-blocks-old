'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _recompose = require('recompose');

var _ruucmUtil = require('ruucm-util');

var _lodash = require('lodash');

var _animation = require('./animation');

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Animate
 *
 */

var Animate = function Animate(props) {
  var otherProps = Object.assign({}, props);
  delete otherProps.children;

  return _react2.default.createElement(
    'div',
    {
      style: props.style,
      className: props.className,
      onClick: props.onClick
    },
    _react2.default.Children.map(props.children, function (child) {
      var newChildProps = {
        animStarted: props.animStarted,
        startAnim: props.startAnim,
        start: props.start,
        rewind: props.rewind,
        style: child.props ? child.props.style : ''
      };
      if ((0, _lodash.isString)(child)) return child;else return (0, _lodash.isString)(child.type) ? child : _react2.default.cloneElement(child, newChildProps
      // Only pass anim props, when child id Animate(Comp)
      );
    })
  );
};

var enhance = (0, _recompose.compose)((0, _recompose.withState)('tween', 'setTween', -1), // Prventing Duplicated tween animation
(0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    // auto start animation (when it doesn't have trigger, selfAnimate 😁)
    var _props = this.props,
        tween = _props.tween,
        setTween = _props.setTween,
        selfAnimate = _props.selfAnimate;

    if (!(0, _lodash.isNil)(selfAnimate) && selfAnimate) {
      // check it has a trigger
      var dom = _reactDom2.default.findDOMNode(this);
      if (tween == -1) setTween(_animation2.default.to(dom, this.props));else if (tween.reversed()) tween.play();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _props2 = this.props,
        tween = _props2.tween,
        setTween = _props2.setTween;

    if (this.props.to && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      (0, _ruucmUtil.log)('this', this);
      var dom = _reactDom2.default.findDOMNode(this);
      // start animation (Prevent Duplicated anim)
      if (tween == -1) setTween(_animation2.default.to(dom, this.props));else if (tween.reversed()) tween.play();
    }

    if (this.props.from && newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      var dom = _reactDom2.default.findDOMNode(this);
      _animation2.default.from(dom, this.props);
    }

    if (!newProps.animStarted && newProps.animStarted != this.props.animStarted) {
      if (!tween.reversed()) tween.reverse(); // reverse animation
    }
  }
}));

exports.default = enhance(Animate);