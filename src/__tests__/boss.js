const { runBoss } = require('../boss')

describe('boss', () => {
  it('returns success message', () => {
    return runBoss().then((value) => {
      expect(value).toEqual('Test succeeded')
    })
  })
})
