import { expect } from 'chai'
import fibonacci from '../src/component/fibonacci.js'
import { describe, it } from 'mocha'

describe('test fibonacci function', () => {
  describe('fibonacci(0)', () => {
    it('should be []', () => {
      const fibonacciArray = fibonacci(0)
      expect(fibonacciArray.length).to.equal(0)
    })
  })

  describe('fibonacci(1)', () => {
    it('should be [0]', () => {
      const fibonacciArray = fibonacci(1)
      expect(fibonacciArray.length).to.equal(1)
      expect(fibonacciArray[0]).to.equal(0)
    })
  })

  describe('fibonacci(20)', () => {
    it('should be [0,1,1...4181]', () => {
      const fibonacciArray = fibonacci(20)
      expect(fibonacciArray.length).to.equal(20)
      expect(fibonacciArray[19]).to.equal(4181)
    })
  })

})
