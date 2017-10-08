
import http from './http'
import handler from './event'
import client from './client'

'use strict'

const finger = {
  http,
  handler,
  client,
}
if (typeof exports === 'object') {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like enviroments that support module.exports,
  // like Node.
  module.exports = finger
} else {
  window.finger = finger
}
