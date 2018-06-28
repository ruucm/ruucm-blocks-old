var _templateObject = _taggedTemplateLiteral(['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    '], ['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    '], ['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    '], ['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    -webkit-transition: ', ' ', '; /* Safari */\n    transition: ', ' ', ';\n  '], ['\n    -webkit-transition: ', ' ', '; /* Safari */\n    transition: ', ' ', ';\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

export var center = function center(type) {
  if (type == 'y') return css(_templateObject);else if (type == 'x') return css(_templateObject2);else if (type == 'xy') return css(_templateObject3);
};

export var transition = function transition(type, duration) {
  return css(_templateObject4, type, duration + 'ms', type, duration + 'ms');
};