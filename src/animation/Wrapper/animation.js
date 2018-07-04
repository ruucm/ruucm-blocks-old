import { TweenMax, Elastic, Power1 } from 'gsap'
import { merge } from 'lodash'
import { log } from 'ruucm-util'

const duration = 4

export default {
  to(target, props) {
    let options = {
      onComplete() {
        // cb()
      },
      ease: Power1.easeIn,
      force3D: false,
    }
    let customDuration

    /**
     * Animate props
     */

    if (props.to) {
      log('props.to', props.to)
      if (props.to.scale) merge(options, { scale: props.to.scale })
      if (props.to.opacity || props.to.opacity == 0)
        merge(options, { opacity: props.to.opacity })
      if (props.to.x) merge(options, { x: props.to.x })
      if (props.to.y) merge(options, { y: props.to.y })
      // if (props.z) merge(options, { z: props.z, force3D: true })
      if (props.to.transformOrigin)
        merge(options, { transformOrigin: props.to.transformOrigin })
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve
        ? merge(options, { ease: eval(props.options.curve) })
        : ''
      props.options.delay ? merge(options, { delay: props.options.delay }) : ''
      props.options.time
        ? (customDuration = props.options.time)
        : (customDuration = duration)
    }

    log('options', options)

    return TweenMax.to(target, customDuration, options)
  },
  from(target, props) {
    let options = {
      onComplete() {
        // cb()
      },
      ease: Power1.easeIn,
      force3D: false,
      autoAlpha: 0,
    }
    let customDuration

    /**
     * Animate props
     */

    if (props.from) {
      if (props.from.scale) merge(options, { scale: props.from.scale })
      if (props.from.opacity || props.from.opacity == 0)
        merge(options, { opacity: props.from.opacity })
      if (props.from.x) merge(options, { x: props.from.x })
      if (props.from.y) merge(options, { y: props.from.y })
      if (props.from.transformOrigin)
        merge(options, { transformOrigin: props.from.transformOrigin })
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve
        ? merge(options, { ease: eval(props.options.curve) })
        : ''
      props.options.delay ? merge(options, { delay: props.options.delay }) : ''
      props.options.time
        ? (customDuration = props.options.time)
        : (customDuration = duration)
    }

    return TweenMax.from(target, customDuration, options)
  },
  rewind(target, props) {
    let options = {
      onComplete() {
        // cb()
      },
      transformOrigin: '0px 0px',
      ease: Power1.easeOut,
    }
    if (props.scale) merge(options, { scale: 1 })
    if (props.opacity) merge(options, { opacity: props.style.opacity })
    if (props.x) merge(options, { x: 0 })
    if (props.y) merge(options, { y: 0 })

    // props.options
    if (props.transformOrigin)
      merge(options, { transformOrigin: props.transformOrigin })
    if (props.options.curve) merge(options, { ease: eval(props.options.curve) })
    return TweenMax.to(target, duration, options)
  },
}
