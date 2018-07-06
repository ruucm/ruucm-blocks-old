import React from 'react'

const Column = ({ col, mCol, style, children }) => {
  let colClass = col ? 'col-sm-' + col : ''
  let mColClass = mCol ? ' col-' + mCol : ''
  return (
    <div className={colClass + mColClass} style={style}>
      {children}
    </div>
  )
}

export default Column
