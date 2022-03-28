import { useContext } from "react"
import { withErrorBoundary } from "react-error-boundary"
import Markdown from "../components/markdown"
import { QueryClient, dehydrate } from "react-query"

import ErrorFallback from "../components/error"
import GlobalContext from "../contexts/global-context"
import { defaultOptions } from "./_app"

function About({ about }) {
  const global = useContext(GlobalContext)
  return <main className="">
    <div className="markdown">
      <Markdown
        code={global?.code?.style}
        text={about?.attributes.text}
      />
    </div>
    <br />
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
