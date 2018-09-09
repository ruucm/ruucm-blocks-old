'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gsap = require('gsap');

var duration = 10;

exports.default = {
  show: function show(target, cb) {
    return _gsap.TweenMax.from(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: _gsap.Elastic.easeOut.config(0.25, 1)
    });
  },
  hide: function hide(target, cb) {
    return _gsap.TweenMax.to(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: _gsap.Elastic.easeIn.config(0.25, 1)
    });
  }
};