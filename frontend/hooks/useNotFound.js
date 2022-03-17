import { useEffect } from "react"

function useNotFound(conditional) {
  const { push } = useRouter()
  useEffect(() => {
     if (conditional()) {
      push('/404')
    }
  }, [])
}

export default useNotFound