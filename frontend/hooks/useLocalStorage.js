import { useCallback, useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)

  const setValue = useCallback((value) => {
    try {
      if (typeof window !== "undefined") {
        setStoredValue((prevState) => {
          const currState = value instanceof Function ? value(prevState) : value;
          window.localStorage.setItem(key, JSON.stringify(currState));
          return currState
        })
      }
    } catch (error) {
      console.error('useLocalStorage ' + error);
    }
  }, [key]);

  useEffect(() => {
    setStoredValue(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const item = window.localStorage?.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error('useLocalStorage ' + error);
        return initialValue;
      }
    })
  }, [initialValue, key])

  return [storedValue, setValue];
}
