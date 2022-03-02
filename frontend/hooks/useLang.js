import { useState, useEffect } from "react"

function useLang(defaultLang = 'en') {
  const [lang, setLang] = useState(defaultLang)
  useEffect(() => setLang(window.navigator.language), [])
  return lang
}

export default useLang