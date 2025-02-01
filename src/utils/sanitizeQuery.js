const querySanitizingRegex = new RegExp('[^\\w\\s#&-]', 'gi')

export function sanitizeQuery(query) {
  return query.trim().replace(querySanitizingRegex, '').toLowerCase()
}