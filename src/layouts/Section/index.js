import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.div`
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `};
`
const Section = props => {
  return <SectionWrapper style={props.style}>{props.children}</SectionWrapper>
}

export default Section
