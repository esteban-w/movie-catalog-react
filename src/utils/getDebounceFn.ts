export function getDebounceFn() {
  let timeoutId: number | undefined
  
  return function(fn: () => void, milliseconds = 500) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(fn, milliseconds)
  }
}