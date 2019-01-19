const promiseMd5 = require('../promise-md5');
const expect = require("chai").expect;

describe("#promiseMd5()", function() {
  context("with string arguments", function() {
    it("should compute md5 hash", function() {
      return promiseMd5("Glad Chinda")
        .then((hash) => {
          expect(hash)
            .to.be.a('string')
            .that.matches(/^[a-f0-9]{32}$/)
            .and.equal('877dbb93f50eb8a89012e15bd37ee7e4')
        })
    })

    it("should compute md5 async", async function() {
      const hash = await promiseMd5('Glad Chinda');

      expect(hash)
        .to.be.a('string')
        .that.matches(/^[a-f0-9]{32}$/)
        .and.equal('877dbb93f50eb8a89012e15bd37ee7e4')

    })
  })

  context('with non-string argument', function() {
    it('should throw an error', function() {
    
      return promiseMd5(12345)
        .catch(function(err) {
          // add an assertion to check the error
          expect(function() { throw err })
            .to.throw(TypeError, 'Data must be a string or a buffer');
        })
        
    })
  })
})