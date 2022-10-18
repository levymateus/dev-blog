import { QueryClient, Hydrate, QueryClientProvider } from "react-query"
import { useState } from "react"
import App from "next/app"

import { fetchAPI } from "../lib/api"
import queryFn from "../utils/queryFn"
import Head from "../components/Head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import GlobalContext from "../contexts/global-context"
import useProgress from "../hooks/useProgress"
import defaultGlobal from "../consts/global"

import "../styles/globals.scss"
import "../styles/nprogress.scss"

export const defaultOptions = {
  queries: {
    queryFn: queryFn
  }
}

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }))
  const { global, contact } = pageProps

  useProgress()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={global.data?.attributes || defaultGlobal}>
        <Layout>
          <Head />
          <Header />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <Footer social={contact.data?.attributes?.social} />
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
