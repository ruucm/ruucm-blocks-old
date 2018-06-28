var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  ', '\n'], ['\n  border-radius: 10px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin: 0 auto;\n'], ['\n  position: relative;\n  width: ', ';\n  height: ', ';\n  margin: 0 auto;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';

import { center } from '../../tools/mixins';
import { log } from 'ruucm-util';

var Image = styled.img(_templateObject, center('x'));

var Wrapper = styled.div(_templateObject2, function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var CenteredImage = function CenteredImage(props) {
  log('CenteredImage src is', props);
  return React.createElement(
    Wrapper,
    { width: props.width, height: props.height },
    React.createElement(Image, { src: props.src })
  );
};

export default CenteredImage;