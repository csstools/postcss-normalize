/*eslint no-unused-expressions: 0, block-scoped-var: 0, no-undef: 0*/
'use strict';

var postcss = require('postcss'),
    expect = require('chai').expect,
    fs = require('fs'),
    path = require('path'),
    plugin = require('../');

var test = function (input, expected, opts, done) {

  input = fs.readFileSync(path.join(__dirname, 'fixtures', input), 'utf8');
  expected = fs.readFileSync(path.join(__dirname, 'fixtures', expected), 'utf8');

  postcss([ plugin(opts) ])
    .process(input)
    .then(function (result) {
      expect(result.css).to.eql(expected);
      expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });

};

describe('postcss-normalize', function () {

  it('injects normalize at top of stylesheet', function (done) {
   test('test.css', 'test.expected.css', { }, done);
  });

});
