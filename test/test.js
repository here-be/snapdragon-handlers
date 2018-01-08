'use strict';

require('mocha');
const assert = require('assert');
const Base = require('..');
let base;

describe('Handlers', function() {
  beforeEach(function() {
    base = new Base();
  });

  it('should export a function', function() {
    assert.equal(typeof Base, 'function');
  });

  it('should set and get base', function() {
    function aaa() {}
    function bbb() {}

    base.set('aaa', aaa);
    base.set('bbb', aaa);

    assert.equal(typeof base.get('aaa'), 'function');
    assert.equal(typeof base.get('bbb'), 'function');
  });

  it('should preserve order of base', function() {
    function aaa(a) {}
    function bbb(b) {}
    function ccc(c) {}

    base.set('aaa', aaa);
    base.set('bbb', bbb);
    base.set('aaa', ccc);

    assert.deepEqual(base.types, ['aaa', 'bbb']);
    assert.deepEqual(base.get('aaa').name, 'ccc');
  });
});
