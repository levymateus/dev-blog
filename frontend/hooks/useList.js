import { useState, useCallback } from "react"

function useList(initialState = []) {
  const [list, set] = useState(initialState)

  const forEach = useCallback((callback) => {
    const newState = [...list]
    newState.forEach(callback)
    set(newState)
    return newState
  }, [list])

  const filter = useCallback((callback) => set(list.filter(callback)), [list])

  return [list, { forEach, filter, set }]
}

export default useList
