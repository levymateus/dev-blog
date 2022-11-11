import { withErrorBoundary } from "react-error-boundary"

import ErrorFallback from "../components/Error"

function About() {
  return (<div>about</div>);
}

export async function getStaticProps() {
  return { props: {} }
}

export default withErrorBoundary(About, { FallbackComponent: ErrorFallback })
