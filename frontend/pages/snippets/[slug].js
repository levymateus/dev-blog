import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Markdown from "@components/Markdown"
import { fetchAPI } from "lib/api"
import Text from "@components/Text"

function Snippet({ title, description, text }) {
  return <div className="mt-12">
    <div className="flex flex-col">
      <Heading size="xl">{title}</Heading>
      <Text size="md" className="mt-2 mb-4 fade-in">{description}</Text>
    </div>
    <Markdown className="mt-10 fade-in">{text}</Markdown>
  </div>
}

export async function getStaticPaths() {
  const data = (await fetchAPI("/snippets"))?.data.map(({ attributes }) => ({
    ...attributes,
  }));
  return {
    paths: data.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const data = await fetchAPI(`/snippets?filters[slug][$eq]=${context.params.slug}`);
  return {
    props: {
      ...data.data[0].attributes,
    }
  }
}

export default withErrorBoundary(Snippet, { FallbackComponent: ErrorFallback })
