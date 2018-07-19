function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import AnimationSagas from './containers/Animation/sagas.js'
import FrameSagas from './containers/Frame/sagas.js';

export default [].concat(_toConsumableArray(FrameSagas));