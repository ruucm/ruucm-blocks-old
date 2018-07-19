/**
 * Frame/FrameReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { SAMPLE_ACTION, ST, START_ANIM } from './constants'

// The initial state of the App
const initialState = {
  name: 'Sample Name',
  // animStarted: false,
}

function frameReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { name: action.name })
    // case START_ANIM:
    //   return Object.assign({}, state, { animStarted: action.data })
    case `${START_ANIM}/${action.id}`:
      var key = action.id + '_animStarted'
      var obj = {}
      obj[key] = action.data
      return Object.assign({}, state, obj)
    default:
      return state
  }
}

export default frameReducer
