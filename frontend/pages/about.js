import { withErrorBoundary } from "react-error-boundary"
import { QueryClient, dehydrate } from "react-query"

import Markdown from "../components/Markdown"
import ErrorFallback from "../components/Error"
import Heading from "../components/Heading"
import Text from "../components/Text"
import { defaultOptions } from "./_app"

function About({ about }) {
  return (
    <main>
      <Heading type="h1" id="about">About</Heading>
      <Text type="p">{about?.attributes.description}</Text>
      <Markdown text={about?.attributes.text} />
      <br />
    </main>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient({ defaultOptions: defaultOptions })
  const { data: about } = await queryClient.fetchQuery(['/about'])
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      about: about,
    },
  }
}

export default withErrorBoundary(About, { FallbackComponent: ErrorFallback })
