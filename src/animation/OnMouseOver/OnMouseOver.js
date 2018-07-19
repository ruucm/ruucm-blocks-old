/**
 *
 * OnMouseOver
 *
 */

import React from 'react'
import { log } from 'ruucm-util'
import { isString } from 'lodash'

const OnMouseOver = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onMouseOver={e => {
        e.stopPropagation()
        props.startAnim(true)
      }}
      style={props.style}
      className={props.className}
    >
      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...otherProps,
          style: child.props ? child.props.style : '',
        }
        if (isString(child)) return child
        else
          return isString(child.type)
            ? child
            : React.cloneElement(
                child,
                newChildProps
                // Only pass anim props, when child id Animate(Comp)
              )
      })}
    </div>
  )
}

export default OnMouseOver
