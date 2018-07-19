/**
 *
 * Animate
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers } from 'recompose'
import { log } from 'ruucm-util'
import { isString } from 'lodash'

import animation from './animation'

const Animate = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div style={props.style}>
      {React.Children.map(props.children, child => {
        let newChildProps = {
          animStarted: props.animStarted,
          startAnim: props.startAnim,
          start: props.start,
          rewind: props.rewind,
          style: child.props ? child.props.style : '',
        }
        if (isString(child)) return child
        else
          return isString(child.type)
            ? child
            : React.cloneElement(
                child,
                newChildProps
                // Only pass anim props, when child id Animate(Comp)
              )
      })}
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
      if (
        this.props.to &&
        newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        animation.to(dom, this.props)
      }

      if (
        this.props.from &&
        newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        animation.from(dom, this.props)
      }

      // Animate When Trigger State change Detected
      // if (
      //   newProps.animStarted &&
      //   newProps.animStarted != this.props.animStarted
      // ) {
      //   var dom = ReactDOM.findDOMNode(this)
      //   animation.start(dom, this.props)
      // }

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
