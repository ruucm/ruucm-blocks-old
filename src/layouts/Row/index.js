import React from 'react'
import styled from 'styled-components'
import bootstrapGrid from '../../libs/bootstrap-grid'

const RowWrapper = styled.div`
  ${bootstrapGrid};
`

const Row = ({ children }) => {
  return (
    <RowWrapper>
      <div className="row">{children}</div>
    </RowWrapper>
  )
}

export default Row
