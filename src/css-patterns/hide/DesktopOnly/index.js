/**
 *
 * DesktopOnly
 *
 */

import React from 'react'
import styled from 'styled-components'
import media from 'ruucm-blocks/tools/media'

const Wrapper = styled.div`
  ${media.phone`
    display: none;
  `};
`

const DesktopOnly = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default DesktopOnly
