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
      ref={node => {
        dom = node
      }}
      onClick={() => {
        log('dom', dom)
        props.animate(dom)
      }}
      style={props.style}
    >
      (Tap me)
      {props.children}
    </div>
  )
}

export default onTap
