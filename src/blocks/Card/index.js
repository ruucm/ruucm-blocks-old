import styled from 'styled-components';

import Image from './Image';
import Text from './Text';
import Title from './Title';
import Form from './Form';
import Input from './Input';
import InputHr from './InputHr';
import InputError from './InputError';
import Button from './Button';

const Card = styled.div`
  position: absolute;
  top: ${props => props.top};
  width: 100%;
`;

Card.Title = Title;
Card.Form = Form;
Card.Input = Input;
Card.InputHr = InputHr;
Card.InputError = InputError;
Card.Button = Button;
Card.Image = Image;
Card.Text = Text;

export default Card;