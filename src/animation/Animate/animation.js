import { TweenMax, Elastic, Power1, Power3, Power4 } from 'gsap'
import { merge } from 'lodash'
import { log } from 'ruucm-util'

const defaultDuration = 1

const doNothing = () => {
  void 0
}

export default {
  to(target, props) {
    let customDuration
    let options = {
      onComplete() {
        // cb()
      },
      ease: Power1.easeIn,
      force3D: false,
      transformOrigin: 'center center', // default transformOrigin
    }

    /**
     * Animate props
     */

    if (props.to) {
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
        : doNothing()
      props.options.delay
        ? merge(options, { delay: props.options.delay })
        : doNothing()
      props.options.time
        ? (customDuration = props.options.time)
        : (customDuration = defaultDuration)
    } else customDuration = defaultDuration

    let tween = TweenMax.to(target, customDuration, options)

    return tween
    // setTimeout(() => {
    //   alert('hey')
    //   tween.reverse()
    // }, 2000)
  },
  from(target, props) {
    let customDuration
    let options = {
      onComplete() {
        // cb()
      },
      ease: Power1.easeIn,
      force3D: false,
      autoAlpha: 0,
    }

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
        : (customDuration = defaultDuration)
    }

    return TweenMax.from(target, customDuration, options)
  },
}
