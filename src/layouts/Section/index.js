import React from 'react'
import styled, { css } from 'styled-components'

const SectionWrapper = styled.div`
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
      margin: 0 auto;
    `};
`
const Section = props => {
  return <SectionWrapper {...props}>{props.children}</SectionWrapper>
}

export default Section
