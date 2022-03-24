import Nav from "./nav"

function Topbar() {
  return <header className="fixed-top full-width pl-16 pr-16 pb-8">
    <Nav />
  </header>
}

Topbar.displayName = 'Topbar'

export default Topbar
