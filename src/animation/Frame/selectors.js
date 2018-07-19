/**
 * Frame/Frame selectors
 */

import { createSelector } from 'reselect'

/**
 * Direct selector to the Frame.frame state domain
 */
const selectFrame = () => state => state.Animation.frame

/**
 * Other specific selectors
 */
const selectName = () =>
  createSelector(selectFrame(), frameState => frameState.name)
const selectFormOpened = id =>
  createSelector(selectFrame(), frameState => frameState[id + '_animStarted'])

export default selectFrame

export { selectName, selectFormOpened }
