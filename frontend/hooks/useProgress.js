import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"

function useProgress() {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      nProgress.start()
    }
    const handleStop = () => {
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
  }, [router])

  return nProgress
}

export default useProgress
