import React from 'react'

const Column = ({ col, mCol, hide, style, children, className }) => {
  let colClass = col ? 'col-sm-' + col : ''
  let mColClass = mCol ? ' col-' + mCol : ''
  let parentClassName = className ? ' ' + className : ''
  let hideClass
  switch (hide) {
    case 'all':
      hideClass = ' d-none'
      break
    case 'phone':
      hideClass = ' d-none d-sm-block'
      break
    case 'desktop':
      hideClass = ' d-sm-none'
      break
    default:
      hideClass = ''
      break
  }
  return (
    <div
      className={colClass + mColClass + hideClass + parentClassName}
      style={style}
    >
      {children}
    </div>
  )
}

export default Column
