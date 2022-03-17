import { QueryClient } from "react-query"
import atomDarkTheme from "../../consts/atom-dark-theme"
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import ReactMarkdown from "react-markdown"
import { defaultOptions } from "../_app"

function Article({ article }) {
  return <main className="articles">
    <div className="markdown">
      <ReactMarkdown components={{
        code: function({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={atomDarkTheme}
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
      }}>{article?.attributes.text || ''}</ReactMarkdown>
    </div>
  </main>
}

export async function getStaticPaths() {
  const queryClient = new QueryClient({ defaultOptions: defaultOptions })
  const { data: articles } = await queryClient.fetchQuery(['/articles'])

  const paths = articles?.map(({ id }) => ({
    params: { id: String(id) },
  })) || defaultPaths

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient({ defaultOptions: defaultOptions })
  const { data: article } = await queryClient.fetchQuery(['/articles', params.id])
  return { props: { article } }
}

export default Article
