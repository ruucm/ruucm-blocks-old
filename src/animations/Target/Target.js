/**
 *
 * Target
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle } from 'recompose'
import { log } from 'ruucm-util'

const Target = props => {
  log('props(Target)', props)
  return (
    <div style={props.style}>
      {props.formOpened ? 'opened - ' : 'not opened - '}
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

export default enhance(Target)
