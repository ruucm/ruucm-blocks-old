import styled from 'styled-components';
import { center } from '../../tools/mixins';

const InputError = styled.span`
  ${center('x')}
  color: red;
  position: absolute;
  top: 200px;
`;

export default InputError;
