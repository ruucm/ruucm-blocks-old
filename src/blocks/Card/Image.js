import React from 'react';
import styled from 'styled-components';

import { center } from '../../tools/mixins';
import { log } from 'ruucm-util';

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  ${center('x')}
`;

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 auto;
`;

const CenteredImage = (props) => {
  log('CenteredImage src is', props)
  return (
    <Wrapper width={props.width} height={props.height}>
      <Image src={props.src}/>
    </Wrapper>
  )}

export default CenteredImage;
