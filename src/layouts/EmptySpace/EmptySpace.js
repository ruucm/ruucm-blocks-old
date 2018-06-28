import React from 'react'
import styled, { css } from 'styled-components'

const EmptySpaceWrapper = styled.div`
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `};
`

const EmptySpace = props => {
  return <EmptySpaceWrapper {...props}>{props.children}</EmptySpaceWrapper>
}

export default EmptySpace
