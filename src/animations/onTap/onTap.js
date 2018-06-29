/**
 *
 * onTap
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
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
      (Tap me)
      {props.children}
    </div>
  )
}

export default onTap
