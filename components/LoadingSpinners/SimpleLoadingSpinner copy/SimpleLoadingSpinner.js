var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  -ms-transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  height: 46px;\n  &:before {\n    position: absolute;\n    content: \'\';\n    top: 0%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 500rem;\n    border: 0.2em solid rgba(0, 0, 0, 0.1);\n  }\n  &:after {\n    position: absolute;\n    content: \'\';\n    top: 0%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    animation: loader 0.6s linear;\n    animation-iteration-count: infinite;\n    border-radius: 500rem;\n    border-color: #767676 transparent transparent;\n    border-style: solid;\n    border-width: 0.2em;\n    box-shadow: 0px 0px 0px 1px transparent;\n  }\n  &:before,\n  &:after {\n    width: 46px;\n    height: 46px;\n    margin: 0em;\n  }\n\n  /* Active Animation */\n\n  @-webkit-keyframes loader {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes loader {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  -ms-transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  transform: translateX(-50%) translateX(-23px) translateY(-50%);\n  height: 46px;\n  &:before {\n    position: absolute;\n    content: \'\';\n    top: 0%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    border-radius: 500rem;\n    border: 0.2em solid rgba(0, 0, 0, 0.1);\n  }\n  &:after {\n    position: absolute;\n    content: \'\';\n    top: 0%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    animation: loader 0.6s linear;\n    animation-iteration-count: infinite;\n    border-radius: 500rem;\n    border-color: #767676 transparent transparent;\n    border-style: solid;\n    border-width: 0.2em;\n    box-shadow: 0px 0px 0px 1px transparent;\n  }\n  &:before,\n  &:after {\n    width: 46px;\n    height: 46px;\n    margin: 0em;\n  }\n\n  /* Active Animation */\n\n  @-webkit-keyframes loader {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes loader {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var Loader = styled.div(_templateObject);

export var SimpleLoadingSpinner = function SimpleLoadingSpinner(_ref) {
  var size = _ref.size;
  return React.createElement(Loader, null);
};

SimpleLoadingSpinner.propTypes = {
  size: PropTypes.number
};

export default SimpleLoadingSpinner;