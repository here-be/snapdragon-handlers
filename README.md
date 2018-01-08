# snapdragon-handlers [![NPM version](https://img.shields.io/npm/v/snapdragon-handlers.svg?style=flat)](https://www.npmjs.com/package/snapdragon-handlers) [![NPM monthly downloads](https://img.shields.io/npm/dm/snapdragon-handlers.svg?style=flat)](https://npmjs.org/package/snapdragon-handlers) [![NPM total downloads](https://img.shields.io/npm/dt/snapdragon-handlers.svg?style=flat)](https://npmjs.org/package/snapdragon-handlers) [![Linux Build Status](https://img.shields.io/travis/here-be/snapdragon-handlers.svg?style=flat&label=Travis)](https://travis-ci.org/here-be/snapdragon-handlers)

> Adds support for handlers, events and plugins to snapdragon libraries.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save snapdragon-handlers
```

## Usage

```js
const Handlers = require('snapdragon-handlers');
class MyClass extends Handlers {
  // do stuff
}
```

## API

### [Handlers](index.js#L28)

Create a new `Handlers` with the given `options`.

**Params**

* `options` **{Object}**

**Example**

```js
const Handlers = require('snapdragon-handlers');
class Lexer extends Handlers {
  constructor(options) {
    super(options);
    // do lexer stuff
  }
}
```

### [.set](index.js#L51)

Register a handler function.

**Params**

* `type` **{String}**
* `fn` **{Function}**: The handler function to register.

**Example**

```js
handlers.set('star', function() {
  // do parser, lexer, or compiler stuff
});
```

### [.get](index.js#L86)

Get a registered handler function.

**Params**

* `type` **{String}**
* `fn` **{Function}**: The handler function to register.

**Example**

```js
handlers.set('star', function() {
  // do parser, lexer, or compiler stuff
});
const star = handlers.get('star');
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>
<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 08, 2018._