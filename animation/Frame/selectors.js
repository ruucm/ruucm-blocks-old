/**
 * Frame/Frame selectors
 */

import { createSelector } from 'reselect';

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
var selectName = function selectName() {
  return createSelector(selectFrame(), function (frameState) {
    return frameState.name;
  });
};
var selectFormOpened = function selectFormOpened(id) {
  return createSelector(selectFrame(), function (frameState) {
    return frameState[id + '_animStarted'];
  });
};

export default selectFrame;

export { selectName, selectFormOpened };