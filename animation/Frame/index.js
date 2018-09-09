'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _selectors = require('./selectors');

var _actions = require('./actions');

var _recompose = require('recompose');

var _ruucmUtil = require('ruucm-util');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Frame Redux Container
 *
 */

var checkSelfAnimate = function checkSelfAnimate(target) {
  if (!(0, _lodash.isArray)(target.length) && target.props && target.props.to) return true;else return false;
};

var Frame = function Frame(props) {
  var uuid = getUuid(props);
  return _react2.default.createElement(
    'div',
    {
      style: props.style,
      className: props.className,
      onClick: props.onClick
    },
    _react2.default.Children.map(props.children, function (child) {
      var newChildProps = (0, _extends3.default)({}, props, {
        animStarted: props[uuid + '_animStarted'] ? props[uuid + '_animStarted'] : false,
        startAnim: props.startAnim }, child.props, {
        selfAnimate: checkSelfAnimate(props.children),
        className: child.props.className,
        style: child.props.style // Override parents style prop
      });
      return (0, _lodash.isString)(child.type) ? child : _react2.default.cloneElement(child, newChildProps);
    })
  ); // eslint-disable-line
};

var getUuid = function getUuid(props) {
  return props.frame_id;
};

// Component redux
var mapStateToProps = function mapStateToProps(state, ownProps) {
  var uuid = getUuid(ownProps);
  // Make Unique State Name
  var key = uuid + '_animStarted';
  var obj = { name: (0, _selectors.selectName)() };
  obj[key] = (0, _selectors.selectFormOpened)(uuid);
  return (0, _reselect.createStructuredSelector)(obj);
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

// Component enhancer
var enhance = (0, _recompose.compose)((0, _recompose.withState)('idLock', 'setIdLock', false), (0, _recompose.mapProps)(function (_ref) {
  var children = _ref.children,
      idLock = _ref.idLock,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'idLock']);

  if (!idLock) return (0, _extends3.default)({
    frame_id: (0, _lodash.uniqueId)('frame_'),
    children: children
  }, rest);else return (0, _extends3.default)({
    frame_id: idLock,
    children: children
  }, rest);
}), (0, _recompose.lifecycle)({
  componentWillMount: function componentWillMount() {
    if (!this.props.idLock) this.props.setIdLock(this.props.frame_id);
  }
}));
exports.default = enhance((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _recompose.withHandlers)({
  startAnim: function startAnim(props) {
    return function (data) {
      var dispatch = props.dispatch,
          name = props.name; // eslint-disable-line

      var uuid = getUuid(props);
      dispatch((0, _actions.updateOpenForm)(uuid, data));
    };
  }
})(Frame)));