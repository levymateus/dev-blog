import { useEffect, useState } from "react"
import NavLink from "@components/NavLink"
import useStore from "@hooks/useStore"
import clsx from "clsx"

function ListItem({ open, duration, children, ...props }) {
  return <li
    className={clsx({
      'bounce-right': open,
      'bounce-left': !open
    })}
    style={{
      '--duration': `${duration}s`
    }}
    {...props}
  >{children}</li>
}

function Sidebar() {
  const [isOpen, setOpen] = useStore(({ sidebarIsOpen, setSidebarOpen }) => [sidebarIsOpen, setSidebarOpen])
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) setVisible(true)
  }, [isOpen])

  return <aside className={clsx("sm:hidden w-3/4", { 'visible': isVisible, 'hidden': !isVisible })}>
    <ul className="flex flex-col gap-8 pt-10">
      <ListItem open={isOpen} duration={0.4}>
        <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
      </ListItem>
      <ListItem open={isOpen} duration={0.6}>
        <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
      </ListItem>
      <ListItem open={isOpen} duration={0.8}>
        <NavLink href="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </ListItem>
      <ListItem open={isOpen} duration={1.0}>
        <NavLink href="/snippets" onClick={() => setOpen(false)}>Snippets</NavLink>
      </ListItem>
      <ListItem
        open={isOpen}
        duration={1.2}
        onClick={() => setOpen(false)}
        onAnimationEnd={() => !isOpen && setVisible(false)}
      >
        <NavLink href="/projects">Projects</NavLink>
      </ListItem>
    </ul>
  </aside>
}

export default Sidebar
