/**
 *
 * TabletOnly
 *
 */

import React from 'react'
import styled from 'styled-components'
import media from 'ruucm-blocks/tools/media'

const Wrapper = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `};
`

const TabletOnly = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default TabletOnly
