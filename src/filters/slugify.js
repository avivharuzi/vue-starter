export function slugify(value) {
  return typeof value === 'string'
    ? value.toLowerCase().trim()
      .replace(/[^\w\-]+/g, ' ')
      .replace(/\s+/g, '-')
    : value
}
