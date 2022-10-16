import { withErrorBoundary } from "react-error-boundary"
import { QueryClient, dehydrate } from "react-query"

import Markdown from "../components/markdown"
import ErrorFallback from "../components/error"
import { defaultOptions } from "./_app"

function About({ about }) {
  return (
    <main>
      <h1 id="about">About</h1>
      <p>{about?.attributes.description}</p>
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
