/**
 *
 * onTap
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

import animation from './animation'

const onTap = props => {
  let dom
  return (
    <div
      {...props}
      ref={node => {
        dom = node
      }}
      onClick={() => {
        // animate(this)
        log('dom', dom)
        animate(dom)
      }}
    >
      {props.children}
    </div>
  )
}

const animate = dom => {
  animation.hide(dom)
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {},
    componentWillUnmount() {},
  })
)

export default enhance(onTap)
