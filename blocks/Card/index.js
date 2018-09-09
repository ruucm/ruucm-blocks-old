'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: ', ';\n  width: 100%;\n'], ['\n  position: absolute;\n  top: ', ';\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputHr = require('./InputHr');

var _InputHr2 = _interopRequireDefault(_InputHr);

var _InputError = require('./InputError');

var _InputError2 = _interopRequireDefault(_InputError);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = _styledComponents2.default.div(_templateObject, function (props) {
  return props.top;
});

Card.Title = _Title2.default;
Card.Form = _Form2.default;
Card.Input = _Input2.default;
Card.InputHr = _InputHr2.default;
Card.InputError = _InputError2.default;
Card.Button = _Button2.default;
Card.Image = _Image2.default;
Card.Text = _Text2.default;

exports.default = Card;