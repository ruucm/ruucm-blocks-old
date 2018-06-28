var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n      &:hover {\n        color: ', ' !important;\n      }\n    '], ['\n      &:hover {\n        color: ', ' !important;\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      &:hover {\n        box-shadow: ', ' !important;\n      }\n    '], ['\n      &:hover {\n        box-shadow: ', ' !important;\n      }\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      -webkit-transition: ', '\n        ', '; /* Safari */\n      transition: ', ' ', ';\n    '], ['\n      -webkit-transition: ', '\n        ', '; /* Safari */\n      transition: ', ' ', ';\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Hover
 *
 */

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

var HoverWrapper = styled.span(_templateObject, function (props) {
  return props.color && css(_templateObject2, props.color);
}, function (props) {
  return props.boxShadow && css(_templateObject3, props.boxShadow);
}, function (props) {
  return props.transition && props.transition.target && props.transition.time && css(_templateObject4, props.transition.target, props.transition.time + 'ms', props.transition.target, props.transition.time + 'ms');
});

var Hover = function (_Component) {
  _inherits(Hover, _Component);

  function Hover() {
    _classCallCheck(this, Hover);

    return _possibleConstructorReturn(this, (Hover.__proto__ || Object.getPrototypeOf(Hover)).apply(this, arguments));
  }

  _createClass(Hover, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        HoverWrapper,
        this.props,
        this.props.children
      );
    }
  }]);

  return Hover;
}(Component);

export default Hover;