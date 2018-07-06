import React from 'react'
import styled from 'styled-components'
import bootstrapGrid from '../../libs/bootstrap-grid'

const RowWrapper = styled.div`
  ${bootstrapGrid};
`

const Row = ({ style, children }) => {
  return (
    <RowWrapper>
      <div className="row" style={style}>
        {children}
      </div>
    </RowWrapper>
  )
}

export default Row
