import Head from "next/head"
import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHead() {
  const global = useContext(GlobalContext)
  return <Head>
    <title>{global.data.attributes.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
}

AppHead.displayName = 'Head'

export default AppHead