import { msToSeconds } from '@utils/time'
import { useEffect, useRef } from 'react'

export default function useTimeout(handler, timeoutInSeconds) {
  const id = useRef(null)

  useEffect(() => {
    id.current = window.setTimeout(handler, msToSeconds(timeoutInSeconds))
    return () => {
      window.clearTimeout(id.current)
    }
  }, [id, handler, timeoutInSeconds])

}
