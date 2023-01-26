import { useState } from 'react'

function useCounter(initialValue = 0, maxCountValue = null) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(x => {
    if (
      (maxCountValue !== null && x + 1 <= maxCountValue) ||
      (maxCountValue === null)
    )
      return x + 1
    return x
  })
  const decrement = () => setCount(x => x - 1)
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
