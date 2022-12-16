import { useEffect, useRef } from 'react'
import { marked } from 'marked'
import HLJS from 'highlight.js'
import clsx from 'clsx'

String.prototype.removeChar = function removeChar(char) {
  return this.replace(char, '')
}

const renderer = {
  heading(text, level) {
    let size = level === 1 ? 'text-3xl' : ''
    size = level === 2 || level === 3 ? 'text-2xl' : size
    size = level === 4 || level === 5 || level === 6 ? 'text-xl' : size
    return `
      <h${level} class="${size} font-bold mt-10">${text}</h$>
    `
  },
  paragraph(text) {
    return `<p class="text-base font-normal mt-7">${text}</p>`
  },
  list(items) {
    return `
      <ul class="list-decimal font-normal text-base flex gap-3 flex-col mt-7">
        ${items}
      </ul>
    `
  },
  link(link, _, text) {
    return `
      <a href=${link} class="text-blue-600">${text}</a>
    `
  }
}

marked.use({ renderer })

marked.setOptions({
  highlight: (code) => HLJS.highlight(code, { language: 'javascript' }).value
})

function Markdown({ children, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const html = marked.parse(children)
    if (ref.current) {
      ref.current.innerHTML = html
    }
  }, [ref, children])

  return <div ref={ref} className={clsx("markdown", className)}></div>
}

export default Markdown
