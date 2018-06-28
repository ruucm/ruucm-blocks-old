import React from 'react';
import styled from 'styled-components';
import { log } from 'ruucm-util';
import bootstrapGrid from '../../libs/bootstrap-grid';

const RowWrapper = styled.div`
  ${bootstrapGrid}
`;

const Row = ({children}) => {
  return (
    <RowWrapper>
      <div className='row'>{children}</div>
    </RowWrapper>
  )}

export default Row;
