import NavLink from "@components/NavLink"
import Toggle from "@components/Toggle"
import Button from "@components/Button"
import If from "@components/If"
import useTheme from "@hooks/useTheme"
import useStore from "@hooks/useStore"
import { Moon, Sun, Menu, X } from "react-feather"

function HamburgerMenu({ onToggleMenu }) {
  const [sidebarIsOpen, setSidebarOpen] = useStore(({ sidebarIsOpen, setSidebarOpen }) => [sidebarIsOpen, setSidebarOpen])

  function handleClick(value) {
    setSidebarOpen(value)
    onToggleMenu(value)
  }

  if (sidebarIsOpen) {
    return <Button
      variant="secondary"
      onClick={() => handleClick(false)}
    >
      <X />
    </Button>
  }

  return <Button
    variant="secondary"
    onClick={() => handleClick(true)}
  >
    <Menu />
  </Button>
}

function ThemeToggle() {
  const [theme, setAsDark, setAsLight] = useTheme()
  return <If stmt={theme}>
    <Toggle defaultValue={theme === 'light'}>
      <Toggle.On>
        {(off) => <Button onClick={() => { setAsDark(); off() }}>
          <Moon />
        </Button>}
      </Toggle.On>
      <Toggle.Off>
        {(on) => <Button onClick={() => { setAsLight(); on() }}>
          <Sun />
        </Button>}
      </Toggle.Off>
    </Toggle>
  </If>
}

function AppBar({ onToggleMenu }) {
  return <header className="flex grow flex-row items-center place-content-between">
    <div className="visible sm:hidden">
      <HamburgerMenu onToggleMenu={onToggleMenu} />
    </div>
    <div className="invisible sm:visible flex flex-row">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/snippets">Snippets</NavLink>
    </div>
    <div className="visible sm:visible flex">
      <ThemeToggle />
    </div>
  </header>
}

export default AppBar
