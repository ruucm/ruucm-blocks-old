/**
 *
 * Frame
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { log } from 'ruucm-util'

import animation from './animation'

const Frame = props => {
  log('props(Frame)', props)

  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div style={props.style}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, otherProps)
      )}
    </div>
  )
}

// Component enhancer
const enhance = compose(
  withHandlers({
    animate: props => dom => {
      log('animate!!!!')
      animation.hide(dom)
    },
  }),
  lifecycle({
    componentDidMount() {},
    componentWillUnmount() {},
  })
)

export default enhance(Frame)
