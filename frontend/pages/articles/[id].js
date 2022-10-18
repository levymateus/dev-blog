import { QueryClient } from "react-query"
import Markdown from "../../components/Markdown"
import Heading from "../../components/Heading"
import Show from "../../components/Show"
import { defaultOptions } from "../_app"
import defaultPaths from "../../consts/paths"
import useNotFound from "../../hooks/useNotFound"

function Article({ article }) {
  useNotFound(() => !article)
  return <main className="articles">
    <Heading type="h1" id="title">{article.attributes?.title}</Heading>
    <Heading type="h4" id="subtitle">{article.attributes?.description}</Heading>
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
