/**
 *
 * onTap
 *
 */

import React from 'react'
import { log } from 'ruucm-util'

const onTap = props => {
  let dom
  log('props(onTap)', props)
  return (
    <div
      onClick={() => {
        props.openForm(true)
      }}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default onTap
