"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.sampleSaga = sampleSaga;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(sampleSaga);

// import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
// import { SagaCancellationException } from 'redux-saga';
// import { sampleAction } from './actions.js';

// Individual exports for testing
function sampleSaga() {
  return _regenerator2.default.wrap(function sampleSaga$(_context) {
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
exports.default = [sampleSaga];