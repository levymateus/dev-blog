import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Markdown from "@components/Markdown"
import Heading from "@components/Heading"
import { fetchAPI } from "lib/api";

function About({ text }) {
  return (
    <div className="mt-10">
      <Heading size="xl">About Me</Heading>
      <Markdown className="mt-10 fade-in">{text}</Markdown>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/about-me");
  return {
    props: {
      text: data.data.attributes.text,
    }
  };
}

export default withErrorBoundary(About, { FallbackComponent: ErrorFallback })
