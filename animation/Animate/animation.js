import { TweenMax, Elastic, Power1 } from 'gsap';
import { merge } from 'lodash';
import { log } from 'ruucm-util';

var duration = 4;

export default {
  show: function show(target, cb) {
    return TweenMax.from(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: Elastic.easeIn.config(1, 0.75)
    });
  },
  hide: function hide(target, cb) {
    return TweenMax.to(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(1, 0.75)
    });
  },
  start: function start(target, props) {
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: Power1.easeIn,
      force3D: false
    };
    var customDuration = void 0;

    /**
     * Animate props
     */

    if (props.scale) merge(options, { scale: props.scale });
    if (props.opacity) merge(options, { opacity: props.opacity });
    if (props.x) merge(options, { x: props.x });
    if (props.y) merge(options, { y: props.y });
    // if (props.z) merge(options, { z: props.z, force3D: true })
    if (props.transformOrigin) merge(options, { transformOrigin: props.transformOrigin });

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve ? merge(options, { ease: eval(props.options.curve) }) : '';
      props.options.delay ? merge(options, { delay: props.options.delay }) : '';
      props.options.time ? customDuration = props.options.time : customDuration = duration;
    }

    log('options', options);

    return TweenMax.to(target, customDuration, options);
  },
  rewind: function rewind(target, props) {
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      transformOrigin: '0px 0px',
      ease: Power1.easeOut
    };
    if (props.scale) merge(options, { scale: 1 });
    if (props.opacity) merge(options, { opacity: props.style.opacity });
    if (props.x) merge(options, { x: 0 });
    if (props.y) merge(options, { y: 0 });

    // props.options
    if (props.transformOrigin) merge(options, { transformOrigin: props.transformOrigin });
    if (props.options.curve) merge(options, { ease: eval(props.options.curve) });
    return TweenMax.to(target, duration, options);
  }
};