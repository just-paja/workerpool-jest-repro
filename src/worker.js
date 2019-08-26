const workerpool = require('workerpool')

workerpool.worker({
  testAndFail: function() {
    return Promise.resolve('Test succeeded')
  }
})
