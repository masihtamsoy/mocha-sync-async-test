// Good thing about this approach is you get to know how 
// function or module is being delivered


const md5 = require("../md5");
const expect = require("chai").expect;

describe("#md5()", function() {

  context("with string arguments", function() {
    it("should compute md5 hash", function(done) {

      md5('Glad Chinda', function(err, hash) {
        if (err) return done(err);

        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
        
        done()
      })
    })

    it.skip("with non-string arguments", function(done) {

      md5(1234, function(err, hash) {

        expect(function() {throw err})
          .to.throw(TypeError, 'data must contain string')
        
        return done();

      })

      done();
    })
  })
})