import styled from 'styled-components';

const Title = styled.h1`
  font-family: Josefin Sans;
  font-weight: bold;
  line-height: 57px;
  font-size: 50px;
  letter-spacing: -0.04em;
  color: #283E4E;
  text-align: center;
  margin: 0;
  margin-top: ${props => props.marginTop};
`;

export default Title;
