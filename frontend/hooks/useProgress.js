import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"

import useLockedBody from "@hooks/useLockedBody"

function useProgress() {
  const router = useRouter()
  const [, setLocked] = useLockedBody(false)

  useEffect(() => {
    const handleStart = () => {
      setLocked(true)
      nProgress.start()
    }
    const handleStop = () => {
      setLocked(false)
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router, setLocked])

  return nProgress
}

export default useProgress
