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
    start: props => dom => {
      animation.start(dom, props)
    },
    rewind: props => dom => {
      animation.rewind(dom, props)
    },
  }),
  lifecycle({
    componentWillReceiveProps(newProps) {
      // Animate When Trigger State change Detected
      if (
        newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        animation.start(dom, this.props)
      }

      if (
        !newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        animation.rewind(dom, this.props)
      }
    },
  })
)

export default enhance(Animate)
