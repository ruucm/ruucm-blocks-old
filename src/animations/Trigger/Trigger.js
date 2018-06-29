/**
 *
 * Trigger
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

const Trigger = props => {
  let dom
  log('props(Trigger)', props)
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
      {props.formOpened ? 'opened Trigger - ' : 'not opened - '}

      {props.children}
    </div>
  )
}

export default Trigger
