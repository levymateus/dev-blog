import { QueryClient } from "react-query"
import Markdown from "../../components/markdown"
import Show from "../../components/show"
import { defaultOptions } from "../_app"
import defaultPaths from "../../consts/paths"
import useNotFound from "../../hooks/useNotFound"

function Article({ article }) {

  useNotFound(() => !article)

  console.log(article)

  return <main className="articles">
    <h1 id="title" className="font-1">{article.attributes?.title}</h1>
    <h2 id="subtitle" className="font-3">{article.attributes?.description}</h2>
    <Show when={Boolean(article)}>
      <Markdown text={article?.attributes.text || ''} />
    </Show>
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
