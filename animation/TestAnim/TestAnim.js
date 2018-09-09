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

var _animation = require('./animation');

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestAnim = function TestAnim(props) {
  // const { component, id, toggleEdit, ...props } = props

  return _react2.default.createElement(
    'div',
    props,
    props.children
  );
};

// Component enhancer
/**
 *
 * TestAnim
 *
 */

var enhance = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    // create test user
    // this.props.createUser('')
    // alert('yapapa')
    (0, _ruucmUtil.log)('this.dom', this.dom);
    (0, _ruucmUtil.log)(this.dom);

    // this.dom.root = ReactDOM.findDOMNode(this)
    // animation.show(this.dom.root)

    var hey = _reactDom2.default.findDOMNode(this);
    (0, _ruucmUtil.log)('hey', hey);
    _animation2.default.show(hey);
  },
  componentWillUnmount: function componentWillUnmount() {}
}));

exports.default = enhance(TestAnim);