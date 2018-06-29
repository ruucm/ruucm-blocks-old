/**
 *
 * onTap
 *
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

import animation from './animation'

const onTap = props => {
  // const { component, id, toggleEdit, ...props } = props

  return <div {...props}>{props.children}</div>
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      var hey = ReactDOM.findDOMNode(this)
      log('hey111', hey)
      // animation.show(hey)
    },
    componentWillUnmount() {},
  })
)

export default enhance(onTap)
