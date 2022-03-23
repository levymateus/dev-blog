import Nav from "./nav"
import Logo from "./logo"
import Show from "./show"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header>
    <div className="flex">
      <Logo {...global.logo.data?.attributes} />
      <h3>{global?.title}</h3>
    </div>
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader