const workerpool = require('workerpool')

workerpool.worker({
  testAndFail: function() {
    return Promise.resolve('This test should have failed')
  }
})
