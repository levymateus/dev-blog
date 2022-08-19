
const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query)
  const match = !!mediaQuery.matches

  return match ? whenTrue : whenFalse
};

export default useMediaQuery
