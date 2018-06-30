/**
 *
 * onMouseOver
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onMouseOver = props => {
  log('props(onMouseOver)', props)

  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onMouseOver={() => {
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

export default onMouseOver
