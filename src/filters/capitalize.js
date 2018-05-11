export function capitalize(value) {
  if (value) {
    value = value.toLowerCase()
    return value.charAt(0).toUpperCase() + value.slice(1)
  } else {
    return value
  }
}
