import { useState } from "react"
import AppBar from "@components/AppBar"
import Footer from "@components/Footer"
import Sidebar from "@components/Sidebar"
import Animation from "@components/Animation"
import useEventListener from "@hooks/useEventListener"
import useStore from "@hooks/useStore"
import clsx from "clsx"

function Layout({ children }) {
  const isSidebarOpen = useStore(store => store.sidebarIsOpen)
  const [animation, setAnimation] = useState()

  function handleToggleMenu(isOpen) {
    setAnimation(isOpen ? "bounce-right" : "bounce-left")
  }

  useEventListener("resize", () => setAnimation())

  return <div className="container flex flex-col overflow-clip sm:overflow-clip px-4 mt-14 mb-14 mx-auto sm:max-w-screen-md">

    <div className="relative">
      <div className="fixed top-0 left-0 right-0 pt-8 pb-2 px-4 mx-auto sm:max-w-screen-md bg-white dark:bg-black z-10">
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
