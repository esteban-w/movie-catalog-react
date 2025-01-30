const querySanitizingRegex = new RegExp('[^\\w\\s#&]', 'gi')

export function sanitizeQuery(query) {
  return query.replace(querySanitizingRegex, '')
}