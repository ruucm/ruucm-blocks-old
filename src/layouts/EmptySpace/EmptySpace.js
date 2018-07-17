import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../tools/media'
const EmptySpaceWrapper = styled.div`
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `};
  ${props =>
    props.mHeight &&
    css`
      ${media.phone`
        height: ${props.mHeight}px;
      `};
    `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
