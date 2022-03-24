import { useEffect } from "react"
import { useRouter } from "next/router"

function useNotFound(conditional) {
  const { push } = useRouter()
  useEffect(() => {
     if (conditional()) {
      push('/404')
    }
  }, [])
}

export default useNotFound