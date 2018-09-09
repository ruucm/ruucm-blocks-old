'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFormOpened = exports.selectName = undefined;

var _reselect = require('reselect');

/**
 * Direct selector to the Frame.frame state domain
 */
var selectFrame = function selectFrame() {
  return function (state) {
    return state.Animation.frame;
  };
};

/**
 * Other specific selectors
 */
/**
 * Frame/Frame selectors
 */

var selectName = function selectName() {
  return (0, _reselect.createSelector)(selectFrame(), function (frameState) {
    return frameState.name;
  });
};
var selectFormOpened = function selectFormOpened(id) {
  return (0, _reselect.createSelector)(selectFrame(), function (frameState) {
    return frameState[id + '_animStarted'];
  });
};

exports.default = selectFrame;
exports.selectName = selectName;
exports.selectFormOpened = selectFormOpened;