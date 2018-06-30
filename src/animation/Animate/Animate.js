/**
 *
 * Animate
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers } from 'recompose'
import { log } from 'ruucm-util'

import animation from './animation'

const Animate = props => {
  log('props(Animate)', props)
  return (
    <div style={props.style}>
      {props.animStarted ? 'target opened - ' : 'target not opened - '}
      {props.children}
    </div>
  )
}

const enhance = compose(
  withHandlers({
    animate: props => dom => {
      log('animate!!!!')
      // animation.show(dom)
      animation.start(dom, props)
    },
  }),
  lifecycle({
    componentWillReceiveProps(newProps) {
      log('newProps', newProps)
      // Animate When Trigger State change Detected
      if (newProps.animStarted != this.props.animStarted) {
        var dom = ReactDOM.findDOMNode(this)
        this.props.animate(dom)
      }
    },
  })
)

export default enhance(Animate)
