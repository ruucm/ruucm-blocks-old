import { TweenMax, Elastic, Power1 } from 'gsap'
import { merge } from 'lodash'
import { log } from 'ruucm-util'

const duration = 4

export default {
  show(target, cb) {
    return TweenMax.from(target, duration, {
      opacity: 0,
      height: 0,
      onComplete() {
        cb()
      },
      ease: Elastic.easeIn.config(1, 0.75),
    })
  },
  hide(target, cb) {
    return TweenMax.to(target, duration, {
      opacity: 0,
      height: 0,
      onComplete() {
        cb()
      },
      ease: Elastic.easeOut.config(1, 0.75),
    })
  },
  start(target, props) {
    let options = {
      onComplete() {
        // cb()
      },
      transformOrigin: '0px 0px',
      ease: Power1.easeIn,
      force3D: false,
    }
    if (props.scale) merge(options, { scale: props.scale })
    if (props.opacity) merge(options, { opacity: props.opacity })
    if (props.x) merge(options, { x: props.x })
    if (props.y) merge(options, { y: props.y })
    // if (props.z) merge(options, { z: props.z, force3D: true })

    // props.options
    if (props.transformOrigin)
      merge(options, { transformOrigin: props.transformOrigin })
    if (props.options.curve) merge(options, { ease: eval(props.options.curve) })
    if (props.options.delay) merge(options, { delay: props.options.delay })
    log('options', options)

    return TweenMax.to(
      target,
      props.options.time ? props.options.time : duration,
      options
    )
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
