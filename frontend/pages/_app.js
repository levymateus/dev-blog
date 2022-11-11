import App from "next/app"

import "@styles/globals.css"

import Layout from "@components/Layout"
import useTheme from "@hooks/useTheme"

const MyApp = ({ Component, pageProps }) => {
  useTheme()
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  return { ...appProps, pageProps: {} }
}

MyApp.displayName = 'App'

export default MyApp
