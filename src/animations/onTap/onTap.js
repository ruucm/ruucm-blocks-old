/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onTap = props => {
  log('props(onTap)', props)
  return (
    <div
      onClick={() => {
        props.startAnim(true)
      }}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default onTap
