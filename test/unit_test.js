const chai              = require('chai')
const expect            = chai.expect
const { concatStrings,
        squareNumber
                      } = require('../public/javascripts/bitEngine.js')

describe('Unit Tests for bitEngine', function() {
  context('concatStrings', function() {
    it('concats two strings', function() {
      expected = "This is a concated string"
      result = concatStrings('This is a ', 'concated string')
      expect(result).to.equal(expected)
    })

    it('returns a string', function() {
      result = typeof concatStrings('I am part ', 'of a string')
      expect(result).to.equal('string')
    })

    it('throws an error if no string is provided', function() {
      expect(concatStrings).to.throw('Please provide two strings')
    })
  })

  context('squareNumber', function() {
    it('squares a number', function(){
      expected = 16
      result = squareNumber(4)
      expect(result).to.equal(expected)
    })

    it('throws an error if no number is provided', function() {
      expect(squareNumber).to.throw('Please provide a number')
    })
  })
})
