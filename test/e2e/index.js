'use strict'

const chai = require('chai')
const sinonChai = require('sinon-chai')

// Set BABEL_ENV to use proper preset config
process.env.BABEL_ENV = 'testing-e2e'

// Enable use of es2015 on required files
require('babel-register')({
  ignore: /node_modules/
})

// use sinon-chai
chai.use(sinonChai)

// Attach Chai APIs to global scope
const { expect, should, assert } = chai
global.expect = expect
global.should = should
global.assert = assert

// Require all JS files in `./specs` for Mocha to consume
require('require-dir')('./specs')
