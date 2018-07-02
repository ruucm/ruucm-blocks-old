/**
 *
 * OnMouseOver
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const OnMouseOver = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onMouseOver={() => {
        log('onMouseOver!')
        props.startAnim(true)
      }}
      style={props.style}
    >
      {React.Children.map(props.children, child => {
        return React.cloneElement(
          child,
          child.type.displayName == 'withHandlers(lifecycle(Animate))'
            ? otherProps
            : {} // Only pass all props, when child id Animate(Comp)
        )
      })}
    </div>
  )
}

export default OnMouseOver
