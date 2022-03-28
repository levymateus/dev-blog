import { Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import ReactMarkdown from "react-markdown"

const code = ({ style }) => ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')

  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={style}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

const a = ({ node, children, ...props }) => {
  const text = String(children).split('//')[0]
  let jsonProps = {}
  try {
    jsonProps = JSON.parse(String(children).split('//')[1])
    return <a
      {...props}
      {...jsonProps}
    >{text}</a>
  } catch (error) {
    return <a {...props}>{text}</a>
  }
}

function Markdown({ text, code: style }) {
  return <div className="markdown">
    <ReactMarkdown components={{ code: code({ style }), a }}>{text}</ReactMarkdown>
  </div>
}

export default Markdown
