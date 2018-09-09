'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gsap = require('gsap');

var _lodash = require('lodash');

var _ruucmUtil = require('ruucm-util');

var duration = 4;

exports.default = {
  to: function to(target, props) {
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: _gsap.Power1.easeIn,
      force3D: false
    };
    var customDuration = void 0;

    /**
     * Animate props
     */

    if (props.to) {
      (0, _ruucmUtil.log)('props.to', props.to);
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
      props.options.curve ? (0, _lodash.merge)(options, { ease: eval(props.options.curve) }) : '';
      props.options.delay ? (0, _lodash.merge)(options, { delay: props.options.delay }) : '';
      props.options.time ? customDuration = props.options.time : customDuration = duration;
    }

    (0, _ruucmUtil.log)('options', options);

    return _gsap.TweenMax.to(target, customDuration, options);
  },
  from: function from(target, props) {
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      ease: _gsap.Power1.easeIn,
      force3D: false,
      autoAlpha: 0
    };
    var customDuration = void 0;

    /**
     * Animate props
     */

    if (props.from) {
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
      props.options.time ? customDuration = props.options.time : customDuration = duration;
    }

    return _gsap.TweenMax.from(target, customDuration, options);
  },
  rewind: function rewind(target, props) {
    var options = {
      onComplete: function onComplete() {
        // cb()
      },

      transformOrigin: '0px 0px',
      ease: _gsap.Power1.easeOut
    };
    if (props.scale) (0, _lodash.merge)(options, { scale: 1 });
    if (props.opacity) (0, _lodash.merge)(options, { opacity: props.style.opacity });
    if (props.x) (0, _lodash.merge)(options, { x: 0 });
    if (props.y) (0, _lodash.merge)(options, { y: 0 });

    // props.options
    if (props.transformOrigin) (0, _lodash.merge)(options, { transformOrigin: props.transformOrigin });
    if (props.options.curve) (0, _lodash.merge)(options, { ease: eval(props.options.curve) });
    return _gsap.TweenMax.to(target, duration, options);
  }
};