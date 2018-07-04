/**
 *
 * Wrapper
 *
 */

import React from 'react'

import { log } from 'ruucm-util'
import { isString } from 'lodash'

const Wrapper = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  // log('otherProps(Wrapper)', otherProps)
  return (
    <div style={props.style}>
      {React.Children.map(props.children, child => {
        let newChildProps = {
          // ...otherProps,
          style: child.props.style,
          animStarted: props.animStarted,
          startAnim: props.startAnim,
          start: props.start,
          rewind: props.rewind,
        }
        return isString(child.type)
          ? child
          : React.cloneElement(
              child,
              newChildProps
              // Only pass anim props, when child id Wrapper(Comp)
            )
      })}
    </div>
  )
}

export default Wrapper
