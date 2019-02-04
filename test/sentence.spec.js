import { expect } from 'chai'
import reverse, { snakize, camelCase } from '../src/component/sentence'
import { describe, it } from 'mocha'

describe('test reverse function', () => {
  describe('reverse("")', () => {
    it('should be ""', async () => {
      const result = await reverse('')
      expect(result).to.equal('')
    })
  })

  describe('reverse("one_word")', () => {
    it('should be "one_word")', async () => {
      const result = await reverse('one_word')
      expect(result).to.equal('one_word')
    })
  })

  describe('reverse("Javascript Rulz")', () => {
    it('should be "Rulz Javascipt"', async () => {
      const result = await reverse('Javascript Rulz')
      expect(result).to.equal('Rulz Javascript')
    })
  })
})

describe('test snakize function', () => {
  describe('snakize("")', () => {
    it('should be ""', async () => {
      const result = await snakize('')
      expect(result).to.equal('')
    })
  })

  describe('snakize("one_word")', () => {
    it('should be "one_word")', async () => {
      const result = await snakize('one_word')
      expect(result).to.equal('one_word')
    })
  })

  describe('snakize("Javascript Rulz")', () => {
    it('should be "javascript_rulz"', async () => {
      const result = await snakize('Javascript Rulz')
      expect(result).to.equal('javascript_rulz')
    })
  })
})


describe('camelCase ', () => {
  describe('camelCase("")', () => {
    it('should be ""', async () => {
      const result = await camelCase('')
      expect(result).to.equal('')
    })
  })

  describe('camelCase("one_word")', () => {
    it('should be "One_word")', async () => {
      const result = await camelCase('one_word')
      expect(result).to.equal('One_word')
    })
  })

  describe('camelCase("javascript rulz")', () => {
    it('should be "JavascriptRulz"', async () => {
      const result = await camelCase('javascript rulz')
      expect(result).to.equal('JavascriptRulz')
    })
  })

  describe('camelCase("JavaScript RULZ")', () => {
    it('should be "JavascriptRulz"', async () => {
      const result = await camelCase('JavaScript RULZ')
      expect(result).to.equal('JavascriptRulz')
    })
  })
})
