import React from 'react'
import styled from 'styled-components'
import bootstrapGrid from '../../libs/bootstrap-grid'
import { log } from 'ruucm-util'

const RowWrapper = styled.div`
  ${bootstrapGrid};
`

const Row = ({ style, children, className }) => {
  let parentClassName = className ? ' ' + className : ''
  return (
    <RowWrapper>
      <div className={'row no-gutters' + parentClassName} style={style}>
        {children}
      </div>
    </RowWrapper>
  )
}

export default Row
