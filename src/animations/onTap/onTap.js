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
  log('props(onTap)', props)
  let dom

  const otherProps = Object.assign({}, props)
  delete otherProps.children
  return (
    <div
      style={props.style}
      ref={node => {
        dom = node
      }}
      onClick={() => {
        log('dom', dom)
        // animate(dom)
      }}
    >
      {React.Children.map(props.children, child =>
        React.cloneElement(child, otherProps)
      )}
    </div>
  )
}

// const animate = dom => {
//   animation.hide(dom)
// }

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

export default enhance(onTap)
