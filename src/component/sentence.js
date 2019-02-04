/**
 * @author Sylvain Gogel <sylvain.gogel@gmail.com>
 *
 *  reverse order of words in a sentence
 * in an async way using async
 */

const reverse = async sentence => {
  return sentence
    .trim()
    .split(' ')
    .reverse()
    .join(' ')
}

const snakize = async sentence => {
  return sentence
    .trim()
    .toLowerCase()
    .split(' ')
    .join('_')
}

/**
 * Transform as java camelcase standard
 *
 * @param {} sentence
 */
const camelCase = async sentence => {
  return sentence
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

export default reverse
export { snakize, camelCase }
