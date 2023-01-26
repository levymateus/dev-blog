import create from "zustand"

const useStore = create(set => ({
  sidebarIsOpen: false,
  appBarIsVisible: true,
  setSidebarOpen: (isOpen) => set(() => ({ sidebarIsOpen: isOpen })),
  setAppBarIsVisible: (isVisible) => set(() => ({ appBarIsVisible: isVisible }))
}))

export default useStore
