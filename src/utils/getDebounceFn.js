export function getDebounceFn() {
  let timeoutId
  
  return function(fn, milliseconds = 300) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(fn, milliseconds)
  }
}