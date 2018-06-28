var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  width: 100%;\n'], ['\n  position: absolute;\n  top: ', ';\n  width: 100%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

import Image from './Image';
import Text from './Text';
import Title from './Title';
import Form from './Form';
import Input from './Input';
import InputHr from './InputHr';
import InputError from './InputError';
import Button from './Button';

var Card = styled.div(_templateObject, function (props) {
  return props.top;
});

Card.Title = Title;
Card.Form = Form;
Card.Input = Input;
Card.InputHr = InputHr;
Card.InputError = InputError;
Card.Button = Button;
Card.Image = Image;
Card.Text = Text;

export default Card;