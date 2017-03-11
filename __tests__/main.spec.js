const Application = require('spectron').Application
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const electron = require('electron')
const path = require('path')

chai.should()
chai.use(chaiAsPromised)

const timeout = process.env.CI ? 30000 : 10000

describe('electron app', function () {
  this.timeout(timeout)

  let app

  const setupApp = function (app) {
    chaiAsPromised.transferPromiseness = app.transferPromiseness
    return app.client.waitUntilWindowLoaded()
  }

  const startApp = function () {
    app = new Application({
      path: electron,
      args: [
        path.join(__dirname, '..')
      ],
      waitTimeout: timeout
    })

    return app.start().then(setupApp)
  }

  const restartApp = function () {
    return app.restart().then(setupApp)
  }

  before(function () {
    return startApp()
  })

  after(function () {
    if (app && app.isRunning()) return app.stop()
  })

  it('opens a window', function () {
    app.client.getWindowCount().should.eventually.equal(1)
  })

  it('shows hello world', function () {
    app.client.waitForVisible('Hello, World!').should.eventually.be.true
  })
})
