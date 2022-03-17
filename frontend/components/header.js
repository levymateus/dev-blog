import Nav from "./nav"
import Logo from "./logo"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header>
    <div className="flex">
      <Show when={Boolean(global.logo?.data?.attributes)}>
        <Logo {...global.logo?.data?.attributes} />
      </Show>
      <h3>{global?.title}</h3>
    </div>
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader