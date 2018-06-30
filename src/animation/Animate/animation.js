import { TweenMax, Elastic } from 'gsap'
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
      ease: Elastic.easeOut.config(0.25, 1),
    })
  },
  hide(target, cb) {
    return TweenMax.to(target, duration, {
      opacity: 0,
      height: 0,
      onComplete() {
        cb()
      },
      ease: Elastic.easeIn.config(0.25, 1),
    })
  },
  start(target, props) {
    let options = {
      onComplete() {
        // cb()
      },
      transformOrigin: '0px 0px',
      ease: Elastic.easeIn.config(0.25, 1),
    }
    if (props.scale) merge(options, { scale: props.scale })
    if (props.opacity) merge(options, { opacity: props.opacity })
    return TweenMax.to(target, duration, options)
  },
}
