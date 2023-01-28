import { Moon, Sun, Menu, X } from "react-feather"
import useScroll from "@hooks/useScroll"
import NavLink from "@components/NavLink"
import Toggle from "@components/Toggle"
import Button from "@components/Button"
import useTheme from "@hooks/useTheme"
import useStore from "@hooks/useStore"
import If from "@components/If"
import { useDebugValue, useEffect, useState } from "react"
import clsx from "clsx"

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
  const [appBarIsOpen, setAppBarIsOpen] = useStore(({ appBarIsOpen, setAppBarIsOpen }) => [appBarIsOpen, setAppBarIsOpen])
  const [appBarState, setAppBarState] = useState('')

  useDebugValue(appBarIsOpen, (value) => value ? 'open' : 'closed')

  useScroll('on-scroll-down', () => {
    setAppBarState('bounce-top')
  })

  useScroll('on-scroll-up', () => {
    setAppBarState('bounce-bottom')
  })

  useScroll('on-scroll-top', () => {
    setAppBarState('bounce-bottom')
  })

  useEffect(() => {
    () => setAppBarIsOpen(false)
  }, [setAppBarIsOpen])

  return <>
    <div className={clsx("fixed top-0 left-0 right-0 pt-8 pb-2 px-4 mx-auto sm:max-w-screen-md bg-white dark:bg-black z-10", { "hidden": !appBarIsOpen }, appBarState)}>
      <header className="flex grow flex-row items-center place-content-between">
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
    </div>
  </>
}

export default AppBar
