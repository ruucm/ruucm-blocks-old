/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onTap = props => {
  log('props(onTap)', props)

  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onClick={() => {
        props.startAnim(true)
      }}
      style={props.style}
    >
      {React.Children.map(props.children, child =>
        React.cloneElement(child, otherProps)
      )}
    </div>
  )
}

export default onTap
