import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Markdown from "@components/Markdown"
import Text from "@components/Text"

function Snippet({ title, content }) {
  return <div className="mt-12">
    <div className="flex flex-col">
      <Heading size="xl">{title}</Heading>
      <Text size="md" className="mt-2 mb-4 fade-in">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae sagittis nisl, nec facilisis velit. Duis eu ex lectus. Nullam neque libero, condimentum eu.
      </Text>
    </div>
    <Markdown className="mt-10 fade-in">{content}</Markdown>
  </div>
}

export async function getStaticPaths() {
  const snippets = [
    { slug: 'slug' }
  ]

  return {
    paths: snippets.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps() {
  console.log(JSON.stringify(process.env))
  let file = await fetch(
    `http://192.168.100.85:3000/DOC.md`,
    {
      method: 'GET'
    }
  )
  file = await file.text()
  return {
    props: {
      title: 'Lore ipsum.',
      content: file
    }
  }
}

export default withErrorBoundary(Snippet, { FallbackComponent: ErrorFallback })
