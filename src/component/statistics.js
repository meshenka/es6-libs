/**
 * compute statistic order
 * find the Nth smallest value in an array
 *
 * @see https://youtu.be/D35llNtkCps
 *
 * @param array values
 * @array int position
 */
const orderOfStatistics = (values, position) => {
  const sortedArray = values
    .filter((v, i) => values.indexOf(v) === i)
    .sort((a, b) => a - b)
  if (position > sortedArray.length) {
    throw 'there is no value at this position'
  }

  return sortedArray[--position]
}

const firstRecurringCharacter = text => {
  const occurences = {}
  for (const char of text) {
    if (occurences[char] != undefined) {
      return char
    }
    occurences[char] = 1
  }
  return null
}

export default orderOfStatistics
export { firstRecurringCharacter }
