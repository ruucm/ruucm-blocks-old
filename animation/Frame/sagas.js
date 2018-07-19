var _marked = /*#__PURE__*/regeneratorRuntime.mark(sampleSaga);

// import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
// import { SagaCancellationException } from 'redux-saga';
// import { sampleAction } from './actions.js';

// Individual exports for testing
export function sampleSaga() {
  return regeneratorRuntime.wrap(function sampleSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

// All sagas to be loaded
export default [sampleSaga];