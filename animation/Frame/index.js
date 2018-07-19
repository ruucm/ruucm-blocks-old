var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * Frame Redux Container
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectName, selectFormOpened } from './selectors';
import { sampleAction, updateData, updateOpenForm } from './actions';
import { compose, lifecycle, withHandlers, mapProps } from 'recompose';

import { log } from 'ruucm-util';
import { isNil, isArray, uniqueId, isString } from 'lodash';

var Frame = function Frame(props) {
  var uuid = getUuid(props);
  log('props(Frame)', props);
  return React.createElement(
    'div',
    { style: props.style },
    React.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      props.frame_id
    ),
    React.Children.map(props.children, function (child) {
      var newChildProps = _extends({}, props, {
        animStarted: props[uuid + '_animStarted'] ? props[uuid + '_animStarted'] : false,
        startAnim: props.startAnim }, child.props, {
        style: child.props.style // Override parents style prop
      });
      return isString(child.type) ? child : React.cloneElement(child, newChildProps);
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
  log('key(mapStateToProps)', key);
  var obj = { name: selectName() };
  obj[key] = selectFormOpened(uuid);
  return createStructuredSelector(obj);
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

// Component enhancer
var enhance = compose(mapProps(function (_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _extends({
    frame_id: uniqueId('frame_'),
    children: children
  }, rest);
}));
export default enhance(connect(mapStateToProps, mapDispatchToProps)(withHandlers({
  startAnim: function startAnim(props) {
    return function (data) {
      var dispatch = props.dispatch,
          name = props.name; // eslint-disable-line

      var uuid = getUuid(props);
      dispatch(updateOpenForm(uuid, data));
    };
  }
})(Frame)));