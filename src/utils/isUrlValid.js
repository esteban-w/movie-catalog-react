export function isUrlValid(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}