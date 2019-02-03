/**
 * reverse order of words in a sentence
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

export default reverse
export { snakize }
