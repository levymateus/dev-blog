import { useState, useCallback } from "react"

function useList(initialState) {
  const [list, setList] = useState(initialState)

  const forEach = useCallback((callback) => {
    const newState = [...list]
    newState.forEach(callback)
    setList(newState)
    return newState
  }, [list])

  return [list, { forEach }]
}

export default useList
