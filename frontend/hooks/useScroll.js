import { useState, useRef, useEffect } from "react"
import useEventListener from "@hooks/useEventListener"

const UP = 'UP'
const DOWN = 'DOWN'

export default function useScroll(eventName, callback) {
  const lastScrollYRef = useRef(0)
  const [scrollingDir, setScrollingDir] = useState(null)

  useEffect(() => {
    () => {
      lastScrollYRef.current = 0
    }
  }, [])

  useEventListener("scroll", () => {
    const currentScrollY = window.scrollY
    if(window.scrollY === 0) {
      if (eventName === 'on-scroll-top') {
        callback()
      }
      setScrollingDir(null)
    }
    if (currentScrollY - lastScrollYRef.current < 0) {
      if (eventName === 'on-scroll-up' && scrollingDir !== UP) {
        callback()
      }
      setScrollingDir(UP)
    } else {
      if (eventName === 'on-scroll-down' && scrollingDir !== DOWN) {
        callback()
      }
      setScrollingDir(DOWN)
    }
    lastScrollYRef.current = window.scrollY
  }, false)

  return { scrollingDir }
}
