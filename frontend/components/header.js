import Nav from "./nav"
import Logo from "./logo"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header>
    <div className="flex">
      <Logo {...global.data.attributes.logo.data.attributes} />
      <h3>{global.data.attributes.title}</h3>
    </div>
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader