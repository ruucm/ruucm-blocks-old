/**
 *
 * MobileOnly
 *
 */

import React from 'react'
import styled from 'styled-components'
import media from 'ruucm-blocks/tools/media'

const Wrapper = styled.div`
  display: none;
  ${media.phone`
    display: block;
  `};
`

const MobileOnly = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default MobileOnly
