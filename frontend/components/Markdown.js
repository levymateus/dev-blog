import { useEffect, useRef } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'

import styles from "./Markdown.module.scss"

String.prototype.removeChar = function removeChar(char) {
  return this.replace(char, '')
}

const renderer = {
  link(href, title, text) {
    const targetAttr = { key: '', value: [] }
    const titleAttr = { key: title || '' }
    const isBlank = new RegExp(/!.+/g).test(text || '')

    if (isBlank) {
      targetAttr.value.push('_blank')
    }

    if (targetAttr.value.length) {
      targetAttr.key = "target=" + targetAttr.value.join('|')
    }

    let innerHTML = !!targetAttr.key ? text.removeChar('!') : text

    return `
      <a href="${href}" ${titleAttr.key} ${targetAttr.key}>${innerHTML}</a>
    `
  }
}

marked.use({ renderer })

marked.setOptions({
  highlight: (code) => hljs.highlight(code, { language: 'javascript' }).value
})

function Markdown({ text }) {
  const ref = useRef(null)

  useEffect(() => {
    const html = marked.parse(text)
    if (ref.current) {
      ref.current.innerHTML = html
    }
  }, [ref])

  return <div ref={ref} className={styles.markdown}></div>
}

export default Markdown
