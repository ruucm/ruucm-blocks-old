import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../tools/media'
const EmptySpaceWrapper = styled.div`
  ${props =>
    props.height &&
    css`
      height: ${props.height.includes('px') || props.height.includes('vw')
        ? props.height
        : props.height + 'px'};
    `};
  ${props =>
    props.mHeight &&
    css`
      ${media.phone`
        height: ${
          props.mHeight.includes('px') || props.mHeight.includes('vw')
            ? props.mHeight
            : props.mHeight + 'px'
        }px;
      `};
    `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
