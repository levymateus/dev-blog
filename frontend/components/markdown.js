import { useEffect, useRef } from 'react'
import { marked } from 'marked';

function Markdown({ text, code: style }) {
  const ref = useRef(null)

  useEffect(() => {
    const html = marked.parse(text)
    if (ref.current) {
      ref.current.innerHTML = html
    }
  }, [ref])

  return <div ref={ref} className="markdown"></div>
}

export default Markdown
