import { assertPath, normalizeStringPosix } from './util.js'

export default function resolve () {
  let resolvedPath = ''
  let resolvedAbsolute = false
  let cwd

  for (let i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path
    if (i >= 0) { path = arguments[i] } else {
      if (cwd === undefined) { cwd = process.cwd() }
      path = cwd
    }

    assertPath(path)

    // Skip empty entries
    if (path.length === 0) {
      continue
    }

    resolvedPath = path + '/' + resolvedPath
    resolvedAbsolute = path.charCodeAt(0) === 47
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute)

  if (resolvedAbsolute) {
    if (resolvedPath.length > 0) { return '/' + resolvedPath } else { return '/' }
  } else if (resolvedPath.length > 0) {
    return resolvedPath
  } else {
    return '.'
  }
}
