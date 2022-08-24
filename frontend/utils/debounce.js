
let prevValue = null
let id = null

function debounce(debounceValue, compareFn, callbackFn, delay) {

  const start = () => {
    id = window.setTimeout(callbackFn, delay)
  }

  const clear = () => {
    if (id) {
      window.clearTimeout(id)
      id = null
    }
  }

  if (prevValue === null) {
    prevValue = debounceValue
  }

  if (compareFn(prevValue, debounceValue)) {
    clear()
    start()
  }

  return { clear, start }
}

export default debounce
