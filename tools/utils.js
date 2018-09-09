'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commaPipe = exports.commaPipe = function commaPipe(number) {
  if (number != null) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};