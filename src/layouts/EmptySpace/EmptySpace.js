import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../tools/media'

const EmptySpaceWrapper = styled.div`
  ${props => {
    let height = props.height.toString()
    return (
      props.height &&
      css`
        height: ${height.includes('px') || height.includes('vw')
          ? height
          : height + 'px'};
      `
    )
  }};
  ${props =>
    props.mHeight &&
    css`
      ${media.phone`
        height: ${
          props.mHeight.includes('px') || props.mHeight.includes('vw')
            ? props.mHeight
            : props.mHeight + 'px'
        };
      `};
    `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
