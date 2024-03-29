/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'
import { isString, isEmpty } from 'lodash'

const onTap = ({ animStarted, ...props }) => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children
  let startAnim = props.startAnim ? props.startAnim : () => false

  return (
    <div
      onClick={e => {
        e.stopPropagation()
        if (!animStarted) startAnim(true)
        else startAnim(false)
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

export default onTap
