import Nav from "./nav"
import Logo from "./logo"
import Show from "./show"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

function AppHeader() {
  const global = useContext(GlobalContext)
  return <header>
    <div className="flex">
      <Show when={Boolean(global.data?.attributes.logo.data?.attributes)}>
        <Logo {...global.data?.attributes.logo.data?.attributes} />
      </Show>
      <h3>{global.data?.attributes.title}</h3>
    </div>
    <Nav />
  </header>
}

AppHeader.displayName = 'Header'

export default AppHeader