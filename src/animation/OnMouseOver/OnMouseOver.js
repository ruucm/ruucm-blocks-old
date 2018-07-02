/**
 *
 * OnMouseOver
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const OnMouseOver = props => {
  return (
    <div
      onMouseOver={() => {
        log('onMouseOver!')
        props.startAnim(true)
      }}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default OnMouseOver
