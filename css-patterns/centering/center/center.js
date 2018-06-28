var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    '], ['\n      left: 50%;\n      right: auto;\n      transform: translateX(-50%);\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    '], ['\n      top: 50%;\n      bottom: auto;\n      transform: translateY(-50%);\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    '], ['\n      left: 50%;\n      top: 50%;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%) translateY(-50%);\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Center
 *
 */

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

var CenterWrapper = styled.div(_templateObject, function (props) {
  return props.axis == 'x' && css(_templateObject2);
}, function (props) {
  return props.axis == 'y' && css(_templateObject3);
}, function (props) {
  return props.axis == 'xy' && css(_templateObject4);
});

var Center = function (_Component) {
  _inherits(Center, _Component);

  function Center() {
    _classCallCheck(this, Center);

    return _possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).apply(this, arguments));
  }

  _createClass(Center, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        CenterWrapper,
        this.props,
        this.props.children
      );
    }
  }]);

  return Center;
}(Component);

export default Center;