const querySanitizingRegex = new RegExp('[^\\w\\s#&-]', 'gi')

export function sanitizeQuery(query: string) {
  return query.trim().replace(querySanitizingRegex, '').toLowerCase()
}