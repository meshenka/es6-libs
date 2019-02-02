/**
 * @usage const a = [...fibonacci(20)]
 *
 * @param int n
 * @param int current
 * @param int next
 */

function fibonacci(n) {
  return [...fibonacciRaw(n)]
}

/**
 *
 * @param int n  positive integer
 * @param {*} current
 * @param {*} next
 */
function* fibonacciRaw(n, current = 0, next = 1) {
  //Condition de fin de l'appel reccursif
  if (n === 0) {
    return current
  }

  yield current
  yield* fibonacciRaw(n - 1, next, current + next)
}

export default fibonacci
