function trim(value, chars = '\\s') {
  return typeof value === 'string' ? value.replace(new RegExp(
    `^[${chars}]+|[${chars}]+$`, 'g'
  ), '') : value
}

export default trim
