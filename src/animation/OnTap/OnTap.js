/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onTap = props => {
  return (
    <div
      onClick={() => {
        log('onTap!')
        props.startAnim(true)
        log('props', props)
      }}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default onTap
