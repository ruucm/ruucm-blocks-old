var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 426
};

var isMobile = function isMobile() {
  return screen.width < sizes.phone;
};

// iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return css(_templateObject, emSize, css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

export default media;

export { sizes, isMobile };