import { useEffect, useRef, useState } from "react"
import Animation from "@components/Animation"
import NavLink from "@components/NavLink"
import useStore from "@hooks/useStore"
import useList from "@hooks/useList"
import max from "@utils/max"
import clsx from "clsx"
import useEventListener from "@hooks/useEventListener"

const items = [
  { href: '/', name: 'Home', duration: 0.4 },
  { href: '/about', name: 'About', duration: 0.6 },
  { href: '/#contact', name: 'Contact', duration: 0.8 },
  { href: '/snippets', name: 'Snippets', duration: 1.0 },
]

function Sidebar({ onSelectItem }) {
  const ref = useRef()
  const [list, { forEach }] = useList(items)
  const [isOpen, setOpen] = useStore(({ sidebarIsOpen, setSidebarOpen }) => [sidebarIsOpen, setSidebarOpen])
  const [isVisible, setVisible] = useState(false)
  const animation = isOpen ? "bounce-right" : "bounce-left"

  function rearrange(pivot) {
    let step = 0.4
    forEach((_, index, array) => {
      if (pivot !== index) {
        step += 0.2
        array[index].duration = step
      } else {
        array[pivot].duration = 0.4
      }
    })
  }

  useEffect(() => {
    if (isOpen) setVisible(true)
  }, [isOpen])

  useEventListener('scroll', () => {
    if (isOpen) {
      setOpen(false)
      rearrange(0)
      onSelectItem()
    }
  })

  return <aside ref={ref} className={clsx("absolute sm:hidden h-screen", { 'visible': isVisible, 'hidden': !isVisible })}>
    <ul className="flex flex-col space-y-8">
      {list.map(({ name, href, duration }, index) => (
        <Animation
          asChild
          key={name}
          name={animation}
          duration={duration}
          onAnimationEnd={() => {
            if (!isOpen && duration >= max(list, ({ duration }) => duration)) setVisible(false)
          }}
        >
          <li>
            <NavLink
              href={href}
              onClick={() => {
                setOpen(false)
                rearrange(index)
                onSelectItem()
              }}
            >
              {name}
            </NavLink>
          </li>
        </Animation>))}
    </ul>
  </aside>
}

export default Sidebar
