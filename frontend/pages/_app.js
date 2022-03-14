import { QueryClient, Hydrate, QueryClientProvider } from "react-query"
import { useState } from "react"
import App from "next/app"

import { fetchAPI } from "../lib/api"
import queryFn from "../utils/queryFn"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Topbar from "../components/topbar"
import Show from "../components/show"
import GlobalContext from "../contexts/global-context"
import useProgress from "../hooks/useProgress"
import useMediaQuery from "../hooks/useMediaQuery"

import "../styles/globals.scss"
import "../styles/nprogress.scss"

export const defaultOptions = {
  queries: {
    queryFn: queryFn
  }
}

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }))
  const isMobile = useMediaQuery('(max-width: 1024px)', true, false)
  const { global, contact } = pageProps

  useProgress()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={global}>
        <Layout>
          <Head />
          {isMobile ? <Topbar /> : <Header />}
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <Show when={Boolean(contact.data?.attributes?.social)}>
            <Footer social={contact.data?.attributes?.social} />
          </Show>
        </Layout>
      </GlobalContext.Provider>
    </QueryClientProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const [global, contact] = await Promise.all([
    fetchAPI("/global?populate=*"),
    fetchAPI("/contact?populate=*")
  ])
  return { ...appProps, pageProps: { global, contact } }
}

MyApp.displayName = 'App'

export default MyApp
