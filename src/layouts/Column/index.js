import React from 'react'

const Column = ({ col, mCol, style, children, className }) => {
  let colClass = col ? 'col-sm-' + col : ''
  let mColClass = mCol ? ' col-' + mCol : ''
  let parentClassName = className ? ' ' + className : ''
  return (
    <div className={colClass + mColClass + parentClassName} style={style}>
      {children}
    </div>
  )
}

export default Column
