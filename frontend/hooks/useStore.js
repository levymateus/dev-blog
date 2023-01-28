import create from "zustand"

const useStore = create(set => ({
  sidebarIsOpen: false,
  appBarIsOpen: true,
  setSidebarOpen: (isOpen) => set(() => ({ sidebarIsOpen: isOpen })),
  setAppBarIsOpen: (isOpen) => set(() => ({ appBarIsOpen: isOpen }))
}))

export default useStore
