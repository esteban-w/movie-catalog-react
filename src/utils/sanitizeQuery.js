export const queryCharClassContent = '\\w\\s#&'

const querySanitizingRegex = new RegExp(`[^${queryCharClassContent}]`, 'gi')

export function sanitizeQuery(query) {
  return query.replace(querySanitizingRegex, '')
}