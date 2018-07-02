/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'
import { isString, isEmpty } from 'lodash'

const onTap = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onClick={() => {
        log('onTap!')
        props.startAnim(true)
        log('props', props)
      }}
      style={props.style}
    >
      {React.Children.map(props.children, child => {
        let newChildProps = {
          ...otherProps,
          style: child.props.style,
        }
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

export default onTap
