import { createContext, useCallback, useState } from "react"

export const LoadingStateContext = createContext({ isLoading: true, setIsLoading: () => {} })

const LoadingState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  return <LoadingStateContext.Provider value={{ isLoading, setIsLoading }}>
    {children({ isLoading, setIsLoading })}
  </LoadingStateContext.Provider>
}

export default LoadingState
