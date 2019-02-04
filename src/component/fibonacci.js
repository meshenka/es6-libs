/**
 * @author Sylvain Gogel <sylvain.gogel@gmail.com>
 *
 * @usage const a = fibonacci(20)
 *
 * @param int n length of the fibonacci suite
 * @returns Array
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function fibonacci(n) {
  //doing spread operator on iterable will generate the array
  return [...fibonacciRaw(n)]
}

/**
 * private function that do the trick
 *
 * it use functionnal recusion and generator
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*
 *
 * @param int n
 * @param {*} current
 * @param {*} next
 * @returns iterable
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
