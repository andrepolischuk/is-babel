# is-babel [![Build Status][travis-image]][travis-url]

> Check if your code is running in [Babel][babel]

## Install

```sh
npm install --save is-babel
```

## Usage

```js
var isBabel = require('is-babel');

// node index.js
isBabel; // false

// babel-node index.js
isBabel; // true
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-babel
[travis-image]: https://travis-ci.org/andrepolischuk/is-babel.svg?branch=master

[babel]: https://babeljs.io
