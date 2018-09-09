'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

// The initial state of the App
var initialState = {
  name: 'Sample Name'
  // animStarted: false,
}; /**
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

function frameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SAMPLE_ACTION:
      return Object.assign({}, state, { name: action.name });
    // case START_ANIM:
    //   return Object.assign({}, state, { animStarted: action.data })
    case _constants.START_ANIM + '/' + action.id:
      var key = action.id + '_animStarted';
      var obj = {};
      obj[key] = action.data;
      return Object.assign({}, state, obj);
    case _constants.REFRESH_PROPS + '/' + action.id:
      var key = action.id + '_animStarted';
      var obj = {};
      obj[key] = action.data;
      return Object.assign({}, state, obj);
    default:
      return state;
  }
}

exports.default = frameReducer;