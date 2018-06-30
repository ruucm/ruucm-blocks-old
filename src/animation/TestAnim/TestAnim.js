/**
 *
 * TestAnim
 *
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

import animation from './animation'

const TestAnim = props => {
  // const { component, id, toggleEdit, ...props } = props

  return <div {...props}>{props.children}</div>
}

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      // create test user
      // this.props.createUser('')
      // alert('yapapa')
      log('this.dom', this.dom)
      log(this.dom)

      // this.dom.root = ReactDOM.findDOMNode(this)
      // animation.show(this.dom.root)

      var hey = ReactDOM.findDOMNode(this)
      log('hey', hey)
      animation.show(hey)
    },
    componentWillUnmount() {},
  })
)

export default enhance(TestAnim)
