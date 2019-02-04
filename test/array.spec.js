import { expect } from 'chai'
import { flipFirstKElements } from '../src/component/array'
import { describe, it } from 'mocha'

describe('flipFirstKElements', () => {
  describe('flipFirstKElements(["4", "5"], 2)', () => {
    it('should return [5, 4]', () => {
      expect(flipFirstKElements(['4', '5'], 2)).to.deep.equal(['5', '4'])
    })
  })
  describe('flipFirstKElements(["1", "2", "3", "4", "5"], 3)', () => {
    it('should return ["3", "2", "1", "4", "5"]', () => {
      expect(flipFirstKElements(["1", "2", "3", "4", "5"], 3)).to.deep.equal(["3", "2", "1", "4", "5"])
    })
  })
  describe('flipFirstKElements(["4", "5"], 3)', () => {
    it('throw exception', () => {
      expect(() => flipFirstKElements(['4', '5'], 3)).to.throw("k superior")
    })
  })
  
})
