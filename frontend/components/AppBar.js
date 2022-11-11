import NavLink from "@components/NavLink"
import Toggle from "@components/Toggle"
import Button from "@components/Button"
import If from "@components/If"
import useTheme from "@hooks/useTheme"
import useStore from "@hooks/useStore"
import { Moon, Sun, Menu, X } from "react-feather"

function AppBar() {
  const [theme, setAsDark, setAsLight] = useTheme()
  const [sidebarIsOpen, setSidebarOpen] = useStore(({ sidebarIsOpen, setSidebarOpen }) => [sidebarIsOpen, setSidebarOpen])
  return <header className="flex flex-row items-center place-content-between">
   <div className="visible sm:hidden">
    {sidebarIsOpen ?
      <Button variant="secondary" onClick={() => setSidebarOpen(false)}>
        <X />
      </Button>
      : <Button variant="secondary" onClick={() => setSidebarOpen(true)}>
        <Menu />
      </Button>}
   </div>
    <div className="flex flex-row invisible sm:visible">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/snippets">Snippets</NavLink>
    </div>
    <div className="flex">
     <If stmt={theme}>
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
    </div>
  </header>
}

export default AppBar
