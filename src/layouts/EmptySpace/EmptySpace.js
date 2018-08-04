import React from 'react'
import styled, { css } from 'styled-components'
import media from 'ruucm-blocks/tools/media'

const EmptySpaceWrapper = styled.div`
  ${props => {
    let height = props.height + ''
    return (
      props.height &&
      css`
        height: ${height.includes('px') || height.includes('vw')
          ? height
          : height + 'px'};
      `
    )
  }};

  ${media.phone`
    ${props => {
      let mHeight = props.mHeight + ''
      return (
        (props.mHeight || props.mHeight == 0) &&
        css`
          background: rebeccapurple;
          height: ${mHeight.includes('px') || mHeight.includes('vw')
            ? mHeight
            : mHeight + 'px'};
        `
      )
    }};
  `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
