import Nav from "./nav"
import Logo from "./logo"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header>
    <div className="flex">
      <Logo
        url={global.logo.data?.attributes.url}
        caption={global.logo.data?.attributes.caption}
        alt={global.logo.data?.attributes.alternativeText}
        width={24}
        height={24}
      />
      <h3>{global?.title}</h3>
    </div>
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader