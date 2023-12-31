import { assertPath } from './util.js'

export default function isAbsolute (path) {
  assertPath(path)
  return path.length > 0 && path.charCodeAt(0) === 47
}
