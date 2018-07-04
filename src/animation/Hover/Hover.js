/**
 *
 * Hover
 *
 */

import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const HoverWrapper = styled.span`
  ${props =>
    props.color &&
    css`
      &:hover {
        color: ${props.color} !important;
      }
    `};
  ${props =>
    props.boxShadow &&
    css`
      display: inline-block;
      &:hover {
        box-shadow: ${props.boxShadow} !important;
      }
    `};
  ${props =>
    props.border &&
    css`
      &:hover {
        border: ${props.border} !important;
      }
    `};
  ${props =>
    props.backgroundColor &&
    css`
      &:hover {
        background-color: ${props.backgroundColor} !important;
      }
    `};
  ${props =>
    props.transition &&
    props.transition.target &&
    props.transition.time &&
    css`
      -webkit-transition: ${props.transition.target}
        ${props.transition.time + 'ms'}; /* Safari */
      transition: ${props.transition.target} ${props.transition.time + 'ms'};
    `};
`
class Hover extends Component {
  render() {
    return <HoverWrapper {...this.props}>{this.props.children}</HoverWrapper>
  }
}

export default Hover
