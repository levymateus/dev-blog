import { useState } from 'react'

function useCounter(initialValue, maxCountValue) {
  const [count, setCount] = useState(initialValue || 0)

  const increment = () => setCount(x => {
    if ((maxCountValue && x + 1 <= maxCountValue) || !maxCountValue)
      return x + 1
    return x
  })
  const decrement = () => setCount(x => x - 1)
  const reset = () => setCount(initialValue || 0)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}

export default useCounter
