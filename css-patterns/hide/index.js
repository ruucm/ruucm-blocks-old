'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabletOnly = exports.MobileOnly = exports.DesktopOnly = undefined;

var _DesktopOnly = require('./DesktopOnly');

var _DesktopOnly2 = _interopRequireDefault(_DesktopOnly);

var _MobileOnly = require('./MobileOnly');

var _MobileOnly2 = _interopRequireDefault(_MobileOnly);

var _TabletOnly = require('./TabletOnly');

var _TabletOnly2 = _interopRequireDefault(_TabletOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DesktopOnly = _DesktopOnly2.default;
exports.MobileOnly = _MobileOnly2.default;
exports.TabletOnly = _TabletOnly2.default;