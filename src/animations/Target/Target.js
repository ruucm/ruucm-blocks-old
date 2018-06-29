/**
 *
 * Target
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

const Target = props => {
  let dom
  log('props(Target)', props)
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
      {props.formOpened ? 'opened Target - ' : 'not opened - '}

      {props.children}
    </div>
  )
}

export default Target
