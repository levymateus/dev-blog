import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html id="root" lang="en" className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.svg" />
      </Head>
      <body className="dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
