import { useRef, useEffect } from "react"

function useEventListener(eventName, handler, opts, element = globalThis) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return
      const eventListener = (event) => savedHandler.current(event)
      element.addEventListener(eventName, eventListener, opts)
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element, opts]
  )

}

export default useEventListener
