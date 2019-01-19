let expect = require('chai').expect;
let sum = require('../sum');

// test suit of one or more test
describe('#sum()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(sum()).to.equal(0);
    })
  })

  context('with any number of arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15);
    })

    it('should return argument is only one number is passed', function() {
      expect(1).to.equal(1);
    })
  })

  context.skip("with no-number arguments", function() {
    it("should throw error", function() {
      expect(function(){
        sum(1, 3, [4], '3')
      }).to.throw(TypeError, 'sum() expect only numbers.')
    })
  })

})