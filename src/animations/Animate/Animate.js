/**
 *
 * Animate
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle } from 'recompose'
import { log } from 'ruucm-util'

const Animate = props => {
  log('props(Animate)', props)
  return (
    <div style={props.style}>
      {props.formOpened ? 'target opened - ' : 'target not opened - '}
      {props.children}
    </div>
  )
}

const enhance = compose(
  lifecycle({
    componentWillReceiveProps(newProps) {
      // Animate When Trigger State change Detected
      if (newProps.formOpened != this.props.formOpened) {
        var dom = ReactDOM.findDOMNode(this)
        this.props.animate(dom)
      }
    },
  })
)

export default enhance(Animate)
