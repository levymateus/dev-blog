import { useState, useEffect } from 'react'

const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches)

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return match ? whenTrue : whenFalse;
};

export default useMediaQuery
