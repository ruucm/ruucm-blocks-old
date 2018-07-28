var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  ', ';\n  left: calc(50% - ', ');\n  display: inline-block;\n  width: ', ';\n  height: ', ';\n  border-radius: ', ' 0 0 0;\n  z-index: 1;\n  animation: bop 0.48s ease-in-out alternate infinite;\n\n  @keyframes bop {\n    to {\n      transform: translateY(-40%);\n    }\n  }\n'], ['\n  position: absolute;\n  ', ';\n  left: calc(50% - ', ');\n  display: inline-block;\n  width: ', ';\n  height: ', ';\n  border-radius: ', ' 0 0 0;\n  z-index: 1;\n  animation: bop 0.48s ease-in-out alternate infinite;\n\n  @keyframes bop {\n    to {\n      transform: translateY(-40%);\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: -', ';\n  display: block;\n  left: 0;\n  width: ', ';\n  height: ', ';\n  background-size: 133% 144%;\n  animation: sail 4s linear infinite;\n\n  ', ';\n\n  @keyframes sail {\n    to {\n      background-position: ', ' 0;\n    }\n  }\n'], ['\n  position: absolute;\n  bottom: -', ';\n  display: block;\n  left: 0;\n  width: ', ';\n  height: ', ';\n  background-size: 133% 144%;\n  animation: sail 4s linear infinite;\n\n  ', ';\n\n  @keyframes sail {\n    to {\n      background-position: ', ' 0;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      background-image: url(', ');\n    '], ['\n      background-image: url(', ');\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled, { css } from 'styled-components';
import { center } from '../../../tools/mixins';
import { wem } from 'ruucm-blocks/tools/mixins';

var FerryWrapper = styled.span(_templateObject, center('y'), wem(43), wem(86), wem(89), wem(3));
var Ferry = function Ferry() {
  return React.createElement(
    'svg',
    {
      width: wem(86),
      height: wem(100),
      viewBox: '0 0 86 100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d: 'M43.1996 0L85.0675 23.8459L42.2585 46.2713L21.0405 45.8984L0 33.9489L0.266335 22.3366L43.1996 0Z',
      transform: 'translate(0.35498 33.4161)',
      fill: '#E33E33'
    }),
    React.createElement('path', {
      d: 'M43.1996 0L85.0675 23.8459L42.2585 46.2713L21.0405 45.8984L0 33.9489L0.266335 22.3366L43.1996 0Z',
      transform: 'translate(0.35498 33.4161)',
      fill: '#E33E33'
    }),
    React.createElement('path', {
      d: 'M43.1641 -1.35465e-07L42.8089 20.3303L0 42.7379L0.355114 22.4254L43.1641 -1.35465e-07Z',
      transform: 'translate(42.2583 57.2621)',
      fill: '#992929'
    }),
    React.createElement('path', {
      d: 'M43.1641 -1.35465e-07L42.8089 20.3303L0 42.7379L0.355114 22.4254L43.1641 -1.35465e-07Z',
      transform: 'translate(42.2583 57.2621)',
      fill: '#992929'
    }),
    React.createElement('path', {
      d: 'M0 20.3125L0.355114 0L21.5732 0.37287L21.218 20.6854L0 20.3125Z',
      transform: 'translate(21.0405 79.3146)',
      fill: '#A82C2C'
    }),
    React.createElement('path', {
      d: 'M0 20.3125L0.355114 0L21.5732 0.37287L21.218 20.6854L0 20.3125Z',
      transform: 'translate(21.0405 79.3146)',
      fill: '#A82C2C'
    }),
    React.createElement('path', {
      d: 'M21.3956 11.9496L21.0405 32.2621L0 20.3125L0.355114 -5.4186e-07L21.3956 11.9496Z',
      transform: 'translate(0 67.3651)',
      fill: '#CC3232'
    }),
    React.createElement('path', {
      d: 'M21.3956 11.9496L21.0405 32.2621L0 20.3125L0.355114 -5.4186e-07L21.3956 11.9496Z',
      transform: 'translate(0 67.3651)',
      fill: '#CC3232'
    }),
    React.createElement('path', {
      d: 'M0.355114 11.6122L0.621449 -1.35465e-07L0.266335 20.3303L0 31.9247L0.355114 11.6122Z',
      transform: 'translate(0 55.7528)',
      fill: '#CC3232'
    }),
    React.createElement('path', {
      d: 'M0.355114 11.6122L0.621449 -1.35465e-07L0.266335 20.3303L0 31.9247L0.355114 11.6122Z',
      transform: 'translate(0 55.7528)',
      fill: '#CC3232'
    }),
    React.createElement('path', {
      d: 'M14.5064 5.4186e-07L42.4716 16.0866L28.1427 23.5973L1.08372e-06 7.59943L14.5064 5.4186e-07Z',
      transform: 'translate(30.4688 20.6854)',
      fill: '#FEFEFE'
    }),
    React.createElement('path', {
      d: 'M14.5064 5.4186e-07L42.4716 16.0866L28.1427 23.5973L1.08372e-06 7.59943L14.5064 5.4186e-07Z',
      transform: 'translate(30.4688 20.6854)',
      fill: '#FEFEFE'
    }),
    React.createElement('path', {
      d: 'M14.7372 2.7093e-07L14.3288 23.5263L-2.16744e-06 31.0369L0.408376 7.51065L14.7372 2.7093e-07Z',
      transform: 'translate(58.2031 36.772)',
      fill: '#B2B2B2'
    }),
    React.createElement('path', {
      d: 'M14.7372 2.7093e-07L14.3288 23.5263L-2.16744e-06 31.0369L0.408376 7.51065L14.7372 2.7093e-07Z',
      transform: 'translate(58.2031 36.772)',
      fill: '#B2B2B2'
    }),
    React.createElement('path', {
      d: 'M28.5511 15.9979L28.1428 39.5241L-2.16744e-06 23.5085L0.408382 -2.7093e-07L28.5511 15.9979Z',
      transform: 'translate(30.0605 28.2848)',
      fill: '#E5E5E5'
    }),
    React.createElement('path', {
      d: 'M28.5511 15.9979L28.1428 39.5241L-2.16744e-06 23.5085L0.408382 -2.7093e-07L28.5511 15.9979Z',
      transform: 'translate(30.0605 28.2848)',
      fill: '#E5E5E5'
    }),
    React.createElement('path', {
      d: 'M7.43963 -1.08372e-06L-1.08372e-06 4.29688L7.43963 8.59375V-1.08372e-06Z',
      transform: 'translate(43.5723 1.17188)',
      fill: '#E33E33'
    }),
    React.createElement('path', {
      d: 'M0.30335 33.6825H0.818259C0.97806 33.6825 1.12011 33.5405 1.12011 33.3807V0.301847C1.12011 0.142045 0.97806 -2.16744e-06 0.818259 -2.16744e-06H0.30335C0.143549 -2.16744e-06 0.00150167 0.142045 0.00150167 0.301847V33.3807C-0.016254 33.5582 0.125794 33.6825 0.30335 33.6825Z',
      transform: 'translate(50.9575)',
      fill: '#E5E5E5'
    })
  );
};

var Waves = styled.span(_templateObject2, wem(37), wem(100), wem(50), function (props) {
  return props.waveColor && css(_templateObject3, getWaveImage(props.waveColor));
}, wem(400));

export var LittleFerryLoader = function LittleFerryLoader(props) {
  return React.createElement(
    FerryWrapper,
    null,
    React.createElement(Ferry, null),
    React.createElement(Waves, props)
  );
};

function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function getWaveImage(color) {
  var waveString = '<svg width=' + wem(115) + ' height=' + wem(85) + ' xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="none" id="canvas_background" height=' + wem(87) + ' width=' + wem(157) + ' y="-1" x="-1"/><g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g></g><g><title>Layer 1</title><g id="svg_9"><ellipse ry="26" rx="26" id="svg_1" cy="33.5" cx="34.5" stroke-width="1.5" fill="' + color + '"/><ellipse ry="26" rx="26" id="svg_3" cy="33.5" cx="63.868493" stroke-width="1.5" fill="' + color + '"/><ellipse ry="26" rx="26" id="svg_6" cy="33.5" cx="91.71888" stroke-width="1.5" fill="' + color + '"/><ellipse ry="26" rx="26" id="svg_7" cy="33.5" cx="121.087373" stroke-width="1.5" fill="' + color + '"/><rect id="svg_8" height="46" width="140.000006" y="32.5" x="7.5" stroke-width="1.5" fill="' + color + '"/></g></g></svg>';
  var waveImage = 'data:image/svg+xml;base64,' + b64EncodeUnicode(waveString);

  return waveImage;
}

export default LittleFerryLoader;