import tape from 'tape'
import path from '../index.js'
const pwd = process.cwd()

tape('path.join zero-length', function (t) {
  // join will internally ignore all the zero-length strings and it will return
  // '.' if the joined string is a zero-length string.
  t.strictEqual(path.posix.join(''), '.')
  t.strictEqual(path.posix.join('', ''), '.')
  if (path.win32) t.strictEqual(path.win32.join(''), '.')
  if (path.win32) t.strictEqual(path.win32.join('', ''), '.')
  t.strictEqual(path.join(pwd), pwd)
  t.strictEqual(path.join(pwd, ''), pwd)
  t.end()
})

tape('path.normalize zero-length', function (t) {
  // normalize will return '.' if the input is a zero-length string
  t.strictEqual(path.posix.normalize(''), '.')
  if (path.win32) t.strictEqual(path.win32.normalize(''), '.')
  t.strictEqual(path.normalize(pwd), pwd)
  t.end()
})

tape('path.isAbsolute zero-length', function (t) {
  // Since '' is not a valid path in any of the common environments, return false
  t.strictEqual(path.posix.isAbsolute(''), false)
  if (path.win32) t.strictEqual(path.win32.isAbsolute(''), false)
  t.end()
})

tape('path.resolve zero-length', function (t) {
  // resolve, internally ignores all the zero-length strings and returns the
  // current working directory
  t.strictEqual(path.resolve(''), pwd)
  t.strictEqual(path.resolve('', ''), pwd)
  t.end()
})

tape('path.relative zero-length', function (t) {
  // relative, internally calls resolve. So, '' is actually the current directory
  t.strictEqual(path.relative('', pwd), '')
  t.strictEqual(path.relative(pwd, ''), '')
  t.strictEqual(path.relative(pwd, pwd), '')
  t.end()
})
