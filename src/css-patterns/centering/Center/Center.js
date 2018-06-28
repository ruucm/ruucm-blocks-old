/**
 *
 * Center
 *
 */

import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const CenterWrapper = styled.div`
  ${props =>
    props.axis == 'x' &&
    css`
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `};
  ${props =>
    props.axis == 'y' &&
    css`
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
    `};
  ${props =>
    props.axis == 'xy' &&
    css`
      left: 50%;
      top: 50%;
      bottom: auto;
      right: auto;
      transform: translateX(-50%) translateY(-50%);
    `};
`

class Center extends Component {
  render() {
    return <CenterWrapper {...this.props}>{this.props.children}</CenterWrapper>
  }
}

export default Center
