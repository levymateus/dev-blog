import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import Snnipet from "@components/Snnipet"

function Snippets({ snippets }) {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <Heading size="xl">Code Snippets</Heading>
        <Text size="md" className="text-black dark:text-gray-500 mt-2 mb-4 fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae sagittis nisl, nec facilisis velit. Duis eu ex lectus. Nullam neque libero, condimentum eu.
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 space-y-8 space-x-6 mt-8 fade-in">
        {snippets.map(({ slug, imageUrl }) => <Snnipet key={slug} slug={slug} src={imageUrl} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      snippets: [
        { slug: 'slug', title: 'A test', shortText: 'test', imageUrl: '/js-logo.svg' },
      ]
    }
  }
}

export default withErrorBoundary(Snippets, { FallbackComponent: ErrorFallback })
