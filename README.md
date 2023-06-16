# path-esm 
> The `path` module from Node.js for browsers, in a tree-shakeable ESM form.

This implements the Node.js [`path`][path] module for environments that do not have it, like browsers.

## Install

```
npm install path-esm
```

## Usage

```javascript
import path from 'path'

const filename = 'logo.png';
const logo = path.join('./assets/img', filename);
document.querySelector('#logo').src = logo;
```

## API

See the [Node.js path docs][path]. `path-esm` currently matches the Node.js 10.3 API.
`path-esm` only implements the POSIX functions, not the win32 ones.

## License

[MIT](./LICENSE)

[path]: https://nodejs.org/docs/v10.3.0/api/path.html
