import Nav from "./Nav"
import Logo from "./Logo"

import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"

import styles from "./Header.module.scss"

function Header() {
  const global = useContext(GlobalContext)
  return <header className={styles.header}>
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

Header.displayName = 'Header'

export default Header
