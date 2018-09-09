'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Frame/Frame Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'ComponentName' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'namespace/ComponentName/YOUR_ACTION_CONSTANT';
 */

var SAMPLE_ACTION = exports.SAMPLE_ACTION = 'Frame/Frame/SAMPLE_ACTION';
var START_ANIM = exports.START_ANIM = 'Frame/Frame/START_ANIM';
var REFRESH_PROPS = exports.REFRESH_PROPS = 'Frame/Frame/REFRESH_PROPS';