import styled, { css } from 'styled-components';

const EmptySpace = styled.div`
  width: 100%;
  height: ${props => props.height}; 
  ${props => props.vertical && css`
    width: ${props => props.width};
    display: inline-block;
  `} 
`;

export default EmptySpace;
