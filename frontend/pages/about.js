import { useContext } from "react"
import { withErrorBoundary } from "react-error-boundary"
import ReactMarkdown from "react-markdown"
import { QueryClient, dehydrate } from "react-query"

import ErrorFallback from "../components/error"
import Load from "../components/load"
import GlobalContext from "../contexts/global-context"
import { defaultOptions } from "./_app"

function About({ about }) {
  const global = useContext(GlobalContext)
  return <main className="">
    <Load isLoading={false}>
      <div className="markdown">
        <ReactMarkdown
          code={global?.code.style}
          text={about?.attributes.text}
        />
      </div>
      <br />
    </Load>
  </main>
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
