const workerpool = require('workerpool')
const path = require('path')

const pool = workerpool.pool(path.join(__dirname, 'worker.js'))

function runBoss() {
  return pool.exec('testAndFail')
}

module.exports = {
  runBoss
}
