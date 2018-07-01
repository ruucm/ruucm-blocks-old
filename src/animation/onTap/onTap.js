/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onTap = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div
      onClick={() => {
        log('onTap!')
        log('props', props)
        props.startAnim(true)
      }}
      style={props.style}
    >
      {/* {React.Children.map(props.children, child =>
        React.cloneElement(child, otherProps)
      )} */}
      {props.children}
    </div>
  )
}

export default onTap
