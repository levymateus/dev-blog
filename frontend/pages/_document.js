import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html id="root" lang="en">
      <Head>
        <title>dev-site</title>
        <link rel="shortcut icon" href="/static/favicon.svg" />
        <script src="https://unpkg.com/feather-icons"></script>
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
      </Head>
      <body className="dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
