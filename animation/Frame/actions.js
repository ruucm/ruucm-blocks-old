'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleAction = sampleAction;
exports.updateData = updateData;
exports.updateOpenForm = updateOpenForm;
exports.refreshProps = refreshProps;

var _ruucmUtil = require('ruucm-util');

var _constants = require('./constants');

/**
 * Sample action description
 *
 * @param  {name} name param description
 *
 * @return {object} An action object with a type of SAMPLE_ACTION
 */
/**
 * Frame Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
function sampleAction(name) {
  return {
    type: _constants.SAMPLE_ACTION,
    name: name
  };
}
function updateData(name) {
  return {
    type: _constants.SAMPLE_ACTION,
    name: name
  };
}
function updateOpenForm(id, data) {
  return {
    type: _constants.START_ANIM + '/' + id,
    id: id,
    data: data
  };
}

function refreshProps(id, data) {
  return {
    type: _constants.REFRESH_PROPS + '/' + id,
    id: id,
    data: data
  };
}