import { useState } from "react"
import AppBar from "@components/AppBar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import Animation from "@components/Animation"
import useEventListener from "@hooks/useEventListener"
import useStore from "@hooks/useStore"
import If from "@components/If"
import clsx from "clsx"

let lastScrollY = 0

function Layout({ children }) {
  const [appBarIsVisible, setAppBarIsVisible] = useStore(store => [store.appBarIsVisible, store.setAppBarIsVisible])
  const [animation, setAnimation] = useState()
  const [scrollPos, setScrollPos] = useState('')

  function handleToggleMenu(isOpen) {
    setAnimation(isOpen ? "bounce-right" : "bounce-left")
  }

  useEventListener("resize", () => setAnimation())
  useEventListener("scroll", () => {
    const currentScrollY = window.scrollY
    if(window.scrollY === 0) {
      setAppBarIsVisible(true)
      setScrollPos('')
    } else {
      if (currentScrollY - lastScrollY < 0) {
        setScrollPos('top')
      } else {
        setScrollPos('bottom')
      }
    }

    lastScrollY = window.scrollY
  })

  return <div className="container flex flex-col overflow-x-hidden sm:overflow-clip px-4 mt-[80px] mb-14 mx-auto sm:max-w-screen-md">

    <div className="relative">
      <div className={clsx("fixed top-0 left-0 right-0 pt-8 pb-2 px-4 mx-auto sm:max-w-screen-md bg-white dark:bg-black z-10", {
          'bounce-top': scrollPos === 'top',
          'bounce-bottom': !appBarIsVisible && scrollPos === 'bottom',
        }, !appBarIsVisible ? 'hidden' : '')}>
          <AppBar onToggleMenu={handleToggleMenu} />
      </div>
    </div>

    <div className="relative">
      <div className="fixed top-[104px] left-0 right-0 px-4 bg-white dark:bg-black z-10">
        <Sidebar onSelectItem={() => setAnimation("bounce-left")} />
      </div>
    </div>

    <Animation
      asChild
      name={animation}
      duration={1}
      from={animation === 'bounce-right' ? "0px" : "156px"}
      to={animation === 'bounce-right' ? "156px" : "0px"}
    >

      <div>
        <main className={clsx("sm:w-full overflow-clip")}>
          {children}
        </main>

        <footer className="mt-8">
          <Footer />
        </footer>
      </div>

    </Animation>

  </div>
}

export default Layout
