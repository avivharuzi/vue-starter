function capitalize(value) {
  value = value.toLowerCase()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export default capitalize
