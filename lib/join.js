import { assertPath } from './util.js'
import { normalize } from './normalize.js'

export function join () {
  if (arguments.length === 0) { return '.' }
  let joined
  for (let i = 0; i < arguments.length; ++i) {
    const arg = arguments[i]
    assertPath(arg)
    if (arg.length > 0) {
      if (joined === undefined) { joined = arg } else { joined += '/' + arg }
    }
  }
  if (joined === undefined) { return '.' }
  return normalize(joined)
}
