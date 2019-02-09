import { expect } from 'chai'
import orderOfStatistics from '../src/component/statistics'
import { describe, it } from 'mocha'

const values = [10, 2, 5, 6, 11, 3, 15, 11]
describe('orderOfStatistics', () => {
  describe('find smallest value', () => {
    it('should return 2', () => {
      expect(orderOfStatistics(values, 1)).to.equal(2)
    })
  })
   describe('find 2nd smallest value', () => {
    it('should return 3', () => {
      expect(orderOfStatistics(values, 2)).to.equal(3)
    })
  })
 describe('find biggest value', () => {
    it('should return 15', () => {
      expect(orderOfStatistics(values, 7)).to.equal(15)
    })
  })
	
 describe('requesting Nth smallest bigger than array length', () => {
    it('should throw exception', () => {
      expect(() => orderOfStatistics(values, 17)).to.throw("at this position")
    })
  })
		
})
 
