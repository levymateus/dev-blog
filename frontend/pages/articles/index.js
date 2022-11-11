import { withErrorBoundary } from "react-error-boundary"

import ErrorFallback from "../../components/Error"

function Articles() {
  return <div>articles</div>
}

export async function getStaticProps() {
  return { props: { } }
}

export default withErrorBoundary(Articles, { FallbackComponent: ErrorFallback })
