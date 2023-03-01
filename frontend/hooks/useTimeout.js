import { useEffect, useRef } from 'react'

export default function useTimeout(handler, timeout) {
  const id = useRef(null)

  useEffect(() => {
    id.current = window.setTimeout(handler, timeout)
    return () => {
      window.clearTimeout(id.current)
    }
  }, [id, handler, timeout])

}
