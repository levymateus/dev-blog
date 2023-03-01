import { useState } from 'react'

function useCounter(initialValue = 0, maxCountValue = null) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    let value = 0
    setCount(x => {
      if (
        (maxCountValue !== null && x + 1 <= maxCountValue) ||
        (maxCountValue === null)
      )
        value = x + 1
      else
        value = x
      return value
    })
    return value
  }

  const decrement = () => {
    let value = 0
    setCount(x => {
      value = x - 1
      return value
    })
    return value
  }

  const reset = () => setCount(initialValue)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}

export default useCounter
