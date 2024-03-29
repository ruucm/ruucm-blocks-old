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
          height: ${mHeight.includes('px') || mHeight.includes('vw')
            ? mHeight
            : mHeight + 'px'};
        `
      )
    }};
  `};

  ${props => {
    let width = props.width + ''
    return (
      props.width &&
      css`
        width: ${width.includes('px') || width.includes('vw')
          ? width
          : width + 'px'};
        display: inline-block;
      `
    )
  }};

  ${media.phone`
    ${props => {
      let mWidth = props.mWidth + ''
      return (
        (props.mWidth || props.mWidth == 0) &&
        css`
          width: ${mWidth.includes('px') || mWidth.includes('vw')
            ? mWidth
            : mWidth + 'px'};
          display: inline-block;
        `
      )
    }};
  `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
