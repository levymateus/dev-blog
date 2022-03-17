import { QueryClient, dehydrate } from "react-query"
import { withErrorBoundary } from "react-error-boundary"
import { useRouter } from "next/router"

import ArticlesPage from "../../components/articles-page"
import Pagination from "../../components/pagination"
import Show from "../../components/show"
import ErrorFallback from "../../components/error"
import { defaultOptions } from "../_app"
import defaultMeta from "../../consts/meta"

function Articles({ articles, meta }) {
  const { query, isReady, push, route } = useRouter()
  const page = isReady && query?.page ? Number(query.page) : 1
  const { pagination: { pageSize } } = meta

  function handleChange(page) {
    push(`${route}?page=${page}`, null, { scroll: false })
  }

  const hasData = !!articles.length
  const greatherThanPageSize = articles.length > pageSize
  const isEmptyResponse = !hasData
  const total = Math.ceil(articles.length / pageSize)
  const articlesSlice = articles.slice(page - 1, Math.ceil((page - 1) + pageSize))

  return <main className="articles">
    <h1>Articles</h1>
    <Show when={isEmptyResponse}>
      <p>No articles published.</p>
    </Show>
    <ArticlesPage articles={articlesSlice} />
    <Show when={hasData && greatherThanPageSize && meta}>
      <Pagination
        page={page}
        meta={meta}
        total={total}
        onChange={handleChange}
      />
    </Show>
  </main>
}

export async function getStaticProps() {
  const queryClient = new QueryClient({ defaultOptions: defaultOptions })

  const { data, meta } = await queryClient.fetchQuery(['/articles', {
    sort: ['publishedAt:desc']
  }])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      articles: data || [],
      meta: meta || defaultMeta,
    },
  }
}

export default withErrorBoundary(Articles, { FallbackComponent: ErrorFallback })
