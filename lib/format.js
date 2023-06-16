import { _format } from './util.js'

export function format (pathObject) {
  if (pathObject === null || typeof pathObject !== 'object') {
    throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject)
  }
  return _format('/', pathObject)
}
