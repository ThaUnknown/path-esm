import { assertPath, normalizeStringPosix } from './util.js'

export function normalize (path) {
  assertPath(path)

  if (path.length === 0) return '.'

  const isAbsolute = path.charCodeAt(0) === 47
  const trailingSeparator = path.charCodeAt(path.length - 1) === 47

  // Normalize the path
  path = normalizeStringPosix(path, !isAbsolute)

  if (path.length === 0 && !isAbsolute) path = '.'
  if (path.length > 0 && trailingSeparator) path += '/'

  if (isAbsolute) return '/' + path
  return path
}
