import { useCallback, useState } from 'react'

function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue)
  const toggle = useCallback(() => setValue(value => !value), [])
  return [value, toggle, setValue]
}

export default useToggle
