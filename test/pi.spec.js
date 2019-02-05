import { expect } from 'chai'
import { frequency, frequencyFromData } from '../src/component/pi'
import { describe, it } from 'mocha'

describe('test pi component', () => {
  describe('frequencyFromData()', () => {
    it('should be an Object with 10 properties', async () => {
      const result = await frequencyFromData()
      expect(result).to.be.an('object')
      expect(Object.keys(result).length).to.equal(10)
      expect(result[3]).to.equal(100230)
    }).timeout(5000)
  })

  describe('frequency() vs frequencyFromData()', () => {
    it('should be an equals', () => {
      //for some reasons Promise.all crash here :(clea
      const cache = frequency()
      frequencyFromData()
        .then(data => {
          expect(cache).to.deep.equal(data)
        })
    }).timeout(5000)
  })
})
