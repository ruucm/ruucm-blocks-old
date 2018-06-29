import { TweenMax, Elastic } from 'gsap';

var duration = 10;

export default {
  show: function show(target, cb) {
    return TweenMax.from(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: Elastic.easeOut.config(0.25, 1)
    });
  },
  hide: function hide(target, cb) {
    return TweenMax.to(target, duration, {
      opacity: 0,
      height: 0,
      onComplete: function onComplete() {
        cb();
      },

      ease: Elastic.easeIn.config(0.25, 1)
    });
  }
};