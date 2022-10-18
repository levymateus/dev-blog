import Head from "next/head"
import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"
import { getStrapiMedia } from "../lib/media"

function AppHead() {
  const global = useContext(GlobalContext)
  const url = global.favicon?.data.attributes.url || ''
  const iconUrl = getStrapiMedia({ url })
  return <Head>
    <title>{global.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={global.description}></meta>
    <link rel="icon" href={iconUrl} />
  </Head>
}

AppHead.displayName = 'Head'

export default AppHead
