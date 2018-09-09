'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gsap = require('gsap');

var _lodash = require('lodash');

var _ruucmUtil = require('ruucm-util');

var defaultDuration = 1;

var doNothing = function doNothing() {
  void 0;
};

exports.default = {
  to: function to(target, props) {
    var customDuration = void 0;
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: _gsap.Power1.easeIn,
      force3D: false,
      transformOrigin: 'center center' // default transformOrigin


      /**
       * Animate props
       */

    };if (props.to) {
      if (props.to.scale) (0, _lodash.merge)(options, { scale: props.to.scale });
      if (props.to.opacity || props.to.opacity == 0) (0, _lodash.merge)(options, { opacity: props.to.opacity });
      if (props.to.x) (0, _lodash.merge)(options, { x: props.to.x });
      if (props.to.y) (0, _lodash.merge)(options, { y: props.to.y });
      // if (props.z) merge(options, { z: props.z, force3D: true })
      if (props.to.transformOrigin) (0, _lodash.merge)(options, { transformOrigin: props.to.transformOrigin });
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve ? (0, _lodash.merge)(options, { ease: eval(props.options.curve) }) : doNothing();
      props.options.delay ? (0, _lodash.merge)(options, { delay: props.options.delay }) : doNothing();
      props.options.time ? customDuration = props.options.time : customDuration = defaultDuration;
    } else customDuration = defaultDuration;

    var tween = _gsap.TweenMax.to(target, customDuration, options);

    return tween;
    // setTimeout(() => {
    //   alert('hey')
    //   tween.reverse()
    // }, 2000)
  },
  from: function from(target, props) {
    var customDuration = void 0;
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: _gsap.Power1.easeIn,
      force3D: false,
      autoAlpha: 0

      /**
       * Animate props
       */

    };if (props.from) {
      if (props.from.scale) (0, _lodash.merge)(options, { scale: props.from.scale });
      if (props.from.opacity || props.from.opacity == 0) (0, _lodash.merge)(options, { opacity: props.from.opacity });
      if (props.from.x) (0, _lodash.merge)(options, { x: props.from.x });
      if (props.from.y) (0, _lodash.merge)(options, { y: props.from.y });
      if (props.from.transformOrigin) (0, _lodash.merge)(options, { transformOrigin: props.from.transformOrigin });
    }

    /**
     * Animate props options
     */

    if (props.options) {
      props.options.curve ? (0, _lodash.merge)(options, { ease: eval(props.options.curve) }) : '';
      props.options.delay ? (0, _lodash.merge)(options, { delay: props.options.delay }) : '';
      props.options.time ? customDuration = props.options.time : customDuration = defaultDuration;
    }

    return _gsap.TweenMax.from(target, customDuration, options);
  }
};