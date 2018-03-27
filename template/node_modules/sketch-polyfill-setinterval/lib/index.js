/* globals coscript */

var ids = []

function setInterval (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  coscript.shouldKeepAround = true
  var id = ids.length
  ids.push(true)
  function trigger () {
    coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        if (ids[id]) { // if not cleared
          func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
          trigger()
        }
      }
    )
  }
  trigger()
  return id
}

function clearInterval (id) {
  ids[id] = false
  if (ids.every(function (_id) { return !_id })) { // if everything is cleared
    coscript.shouldKeepAround = false
  }
}

// polyfill the global object
var commonjsGlobal = typeof global !== 'undefined'
  ? global
  : this

commonjsGlobal.setInterval = commonjsGlobal.setInterval || setInterval
commonjsGlobal.clearInterval = commonjsGlobal.clearInterval || clearInterval

module.exports = {
  setInterval: setInterval,
  clearInterval: clearInterval
}
