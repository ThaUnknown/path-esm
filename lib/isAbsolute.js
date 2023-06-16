import { assertPath } from './util.js'

export function isAbsolute (path) {
  assertPath(path)
  return path.length > 0 && path.charCodeAt(0) === 47
}
