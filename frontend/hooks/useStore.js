import create from "zustand"

const useStore = create(set => ({
  sidebarIsOpen: false,
  setSidebarOpen: (isOpen) => set(() => ({ sidebarIsOpen: isOpen }))
}))

export default useStore
