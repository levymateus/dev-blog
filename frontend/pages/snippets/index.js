import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import Snnipet from "@components/Snnipet"
import { fetchAPI } from "lib/api"

function Snippets({ snippets, title }) {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <Heading size="xl">Code Snippets</Heading>
        <Text size="md" className="text-black dark:text-gray-500 mt-2 mb-4 fade-in">
          {title}
        </Text>
      </div>
      <div className="flex flex-col space-y-6 space-x-0 flex-wrap sm:grid sm:grid-cols-3 sm:space-y-0 sm:gap-6 mt-8 fade-in">
        {snippets.length <= 0 ? <Text>
          <strong>No code snippets published!</strong>
        </Text> : null}
        {snippets.map(({ slug, image, title, description }) => <Snnipet
          key={slug}
          slug={slug}
          title={title}
          src={image.url}
          description={description}
          alt={image.alternativeText}
          className="grow"
        />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/snippets?populate=image");
  return {
    props: {
      snippets: data.data.map((data) => ({
        ...data.attributes,
        image: data.attributes.image.data.attributes
      }))
    }
  }
}

export default withErrorBoundary(Snippets, { FallbackComponent: ErrorFallback })
