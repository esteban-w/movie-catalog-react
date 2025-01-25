export function getDebounceFn() {
  let timeoutId
  
  return function(fn, milliseconds = 500) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(fn, milliseconds)
  }
}