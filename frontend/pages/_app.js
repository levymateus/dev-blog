import Head from "next/head"
import NextApp from "next/app"

import "@styles/globals.css"

import { fetchAPI } from "../lib/api"
import Layout from "@components/Layout"
import useProgress from "@hooks/useProgress"
import useEventListener from "@hooks/useEventListener"
import { useRouter } from "next/router"
import useTheme from "@hooks/useTheme"

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useTheme()
  useProgress()

  useEventListener('keydown', () => {
    if (!document.activeElement) {
      window.focus()
    }
  })

  return (
    <Layout>
      <Head>
        <title>{pageProps?.title || router.basePath}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

App.getInitialProps = async (ctx) => {
  const appProps = await NextApp.getInitialProps(ctx);
  const data = await fetchAPI("/global?populate=*");
  return { ...appProps, pageProps: { ...data?.data?.attributes } }
}

App.displayName = 'App'

export default App
