import chai from 'chai'
import sinonChai from 'sinon-chai'

// use sinon-chai
chai.use(sinonChai)

// Attach Chai APIs to global scope
const { expect, should, assert } = chai
global.expect = expect
global.should = should
global.assert = assert

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../app/src/renderer', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
