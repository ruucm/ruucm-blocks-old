/**
 *
 * Animate
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { log } from 'ruucm-util'
import { isString } from 'lodash'

import animation from './animation'

const Animate = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children

  return (
    <div style={props.style} className={props.className}>
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
  withState('tween', 'setTween', -1), // Prventing Duplicated tween animation
  lifecycle({
    componentDidMount() {
      // auto start animation (when it doesn't have trigger)
      const { tween, setTween } = this.props
      if (!this.props.trigger) {
        // check it has a trigger
        var dom = ReactDOM.findDOMNode(this)
        if (tween == -1) setTween(animation.to(dom, this.props))
        else if (tween.reversed()) tween.play()
      }
    },
    componentWillReceiveProps(newProps) {
      const { tween, setTween } = this.props
      if (
        this.props.to &&
        newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        // start animation (Prevent Duplicated anim)
        if (tween == -1) setTween(animation.to(dom, this.props))
        else if (tween.reversed()) tween.play()
      }

      if (
        this.props.from &&
        newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        var dom = ReactDOM.findDOMNode(this)
        animation.from(dom, this.props)
      }

      if (
        !newProps.animStarted &&
        newProps.animStarted != this.props.animStarted
      ) {
        if (!tween.reversed()) tween.reverse() // reverse animation
      }
    },
  })
)

export default enhance(Animate)
