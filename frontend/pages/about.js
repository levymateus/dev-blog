import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Markdown from "@components/Markdown"
import Heading from "@components/Heading"

const str = `
# Title 1 🚀
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
## Title 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
### Title 3
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
#### Title 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
##### Title 5
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra. [link](https://#)

This text is ***really important***.

This text is **_really important_**.

A *cat* meow

- item [@link-1](https://#)
- item [@link-2](https://#)
- item [@link-3](https://#)

* item [@link-1](https://#)
* item [@link-2](https://#)
* item [@link-3](https://#)
`

function About() {
  return (
    <div className="mt-10">
      <Heading size="xl">About Me</Heading>
      <Markdown className="mt-10">{str}</Markdown>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} }
}

export default withErrorBoundary(About, { FallbackComponent: ErrorFallback })
