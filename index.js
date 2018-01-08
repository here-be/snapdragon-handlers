'use strict';

/**
 * Module dependencies
 */

const assert = require('assert');
const Emitter = require('@sellside/emitter');
const use = require('use');

/**
 * Create a new `Handlers` with the given `options`.
 *
 * ```js
 * const Handlers = require('snapdragon-handlers');
 * class Lexer extends Handlers {
 *   constructor(options) {
 *     super(options);
 *     // do lexer stuff
 *   }
 * }
 * ```
 * @name Handlers
 * @param {Object} `options`
 * @api public
 */

class Handlers extends Emitter {
  constructor(options) {
    super();
    this.options = Object.assign({}, options);
    this.handlers = {};
    this.types = [];
    use(this);
  }

  /**
   * Register a handler function.
   *
   * ```js
   * handlers.set('star', function() {
   *   // do parser, lexer, or compiler stuff
   * });
   * ```
   * @name .set
   * @param {String} `type`
   * @param {Function} `fn` The handler function to register.
   * @api public
   */

  set(type, handler) {
    assert.equal(typeof handler, 'function', 'expected a function');
    assert.equal(typeof type, 'string', 'expected a string');
    if (this.types.indexOf(type) === -1) {
      this.types.push(type);
    }
    const self = this;
    const fn = function() {
      if (self.isLexer && self.constructor.isLexer(this)) {
        return handler.apply(this, arguments);
      }
      return handler.apply(self, arguments);
    };
    if (handler.name) {
      Reflect.defineProperty(fn, 'name', {value: handler.name});
    }
    this.handlers[type] = fn;
    return this;
  }

  /**
   * Get a registered handler function.
   *
   * ```js
   * handlers.set('star', function() {
   *   // do parser, lexer, or compiler stuff
   * });
   * const star = handlers.get('star');
   * ```
   * @name .get
   * @param {String} `type`
   * @param {Function} `fn` The handler function to register.
   * @api public
   */

  get(type) {
    const handler = this.handlers[type] || this.handlers.default;
    assert.equal(typeof handler, 'function', 'expected handler to be a function');
    return handler;
  }
};

/**
 * Expose `Handlers`
 * @type {Function}
 */

module.exports = Handlers;
