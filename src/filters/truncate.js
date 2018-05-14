function truncate(value, limit, completeWords = false, ellipsis = '...') {
  if (completeWords) {
    limit = value.substr(0, limit).lastIndexOf(' ')
  }
  if (value.length <= limit) {
    ellipsis = ''
  }
  return `${value.substr(0, limit)}${ellipsis}`
}

export default truncate
