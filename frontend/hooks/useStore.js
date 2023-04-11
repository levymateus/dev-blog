import { create } from "zustand"

const useStore = create(set => ({
  sidebarIsOpen: false,
  appBarIsOpen: true,
  appBarState: 'bounce-bottom',
  setSidebarOpen: (isOpen) => set(() => ({ sidebarIsOpen: isOpen })),
  setAppBarIsOpen: (isOpen) => set(() => ({ appBarIsOpen: isOpen })),
  setAppBarState: (appBarState) => set(() => ({ appBarState: appBarState }))
}))

export default useStore
