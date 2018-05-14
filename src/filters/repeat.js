function repeat(value, n = 1, separator = '') {
  if (n <= 0) {
    throw new RangeError()
  }
  return n === 1 ? value : repeatWords(value, n - 1, separator)
}

function repeatWords(value, n, separator) {
  return typeof value === 'string'
    ? (n === 0 ? value : (value + separator + repeatWords(value, n - 1, separator)))
    : value
}

export default repeat
