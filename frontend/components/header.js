import Nav from "./nav"
import Logo from "./logo"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header className="flex flex-align-between pl-16 pr-16 pb-8 z-200">
    <Logo
      title={global?.title}
      url={global.logo.data?.attributes.url}
      caption={global.logo.data?.attributes.caption}
      alt={global.logo.data?.attributes.alternativeText}
      width={24}
      height={24}
    />
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader