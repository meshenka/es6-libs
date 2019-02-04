//flip the first k element of an array
const flipFirstKElements = (arr, k) => {
  if (k > arr.length) {
    throw 'k superior to array length error'
  }

  const firstElements = arr.slice(0, k)
  const otherElements = arr.slice(k)
  return [...firstElements.reverse(), ...otherElements]
}

export { flipFirstKElements }
