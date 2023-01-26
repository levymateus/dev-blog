import { useState, useCallback } from "react"

function useList(initialState) {
  const [list, setList] = useState(initialState)

  const forEach = useCallback((callback) => {
    const newState = [...list]
    newState.forEach(callback)
    setList(newState)
    return newState
  }, [list])

  const filter = useCallback((callback) => setList(list.filter(callback)), [list])

  return [list, { forEach, filter, set: setList }]
}

export default useList
