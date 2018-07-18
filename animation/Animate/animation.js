import { TweenMax, Elastic, Power1 } from 'gsap';
import { merge } from 'lodash';
import { log } from 'ruucm-util';

var defaultDuration = 1;

var doNothing = function doNothing() {
  void 0;
};

export default {
  to: function to(target, props) {
    var customDuration = void 0;
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: Power1.easeIn,
      force3D: false

      /**
       * Animate props
       */

    };if (props.to) {
      if (props.to.scale) merge(options, { scale: props.to.scale });
      if (props.to.opacity || props.to.opacity == 0) merge(options, { opacity: props.to.opacity });
      if (props.to.x) merge(options, { x: props.to.x });
      if (props.to.y) merge(options, { y: props.to.y });
      // if (props.z) merge(options, { z: props.z, force3D: true })
      if (props.to.transformOrigin) merge(options, { transformOrigin: props.to.transformOrigin });
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve ? merge(options, { ease: eval(props.options.curve) }) : doNothing();
      props.options.delay ? merge(options, { delay: props.options.delay }) : doNothing();
      props.options.time ? customDuration = props.options.time : customDuration = defaultDuration;
    } else customDuration = defaultDuration;

    return TweenMax.to(target, customDuration, options);
  },
  from: function from(target, props) {
    var customDuration = void 0;
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: Power1.easeIn,
      force3D: false,
      autoAlpha: 0

      /**
       * Animate props
       */

    };if (props.from) {
      if (props.from.scale) merge(options, { scale: props.from.scale });
      if (props.from.opacity || props.from.opacity == 0) merge(options, { opacity: props.from.opacity });
      if (props.from.x) merge(options, { x: props.from.x });
      if (props.from.y) merge(options, { y: props.from.y });
      if (props.from.transformOrigin) merge(options, { transformOrigin: props.from.transformOrigin });
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve ? merge(options, { ease: eval(props.options.curve) }) : '';
      props.options.delay ? merge(options, { delay: props.options.delay }) : '';
      props.options.time ? customDuration = props.options.time : customDuration = defaultDuration;
    }

    return TweenMax.from(target, customDuration, options);
  },
  rewind: function rewind(target, props) {
    var customDuration = void 0;
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: Power1.easeOut

      /**
       * Animate props options
       */

    };if (props.options) {
      var o = props.options;
      o.curve ? merge(options, { ease: eval(o.curve) }) : doNothing();
      o.delay ? merge(options, { delay: o.delay }) : doNothing();
      o.time ? customDuration = o.time : customDuration = defaultDuration;
    }

    /**
     * Animate props
     */

    if (props.to) {
      var p = props.to;

      if (p.scale) merge(options, { scale: 1 });
      if (p.opacity || p.opacity == 0) merge(options, { opacity: 1 });
      if (p.x) merge(options, { x: 0 });
      if (p.y) merge(options, { y: 0 });

      if (p.transformOrigin) merge(options, { transformOrigin: p.transformOrigin });

      return TweenMax.to(target, defaultDuration, options);
    } else if (props.from) {
      var _p = props.from;

      if (_p.scale) merge(options, { scale: 1 });
      if (_p.opacity || _p.opacity == 0) merge(options, { opacity: 1 });
      if (_p.x) merge(options, { x: 0 });
      if (_p.y) merge(options, { y: 0 });
      return TweenMax.from(target, defaultDuration, options);
    }

    // return TweenMax.to(target, defaultDuration, options)
  }
};