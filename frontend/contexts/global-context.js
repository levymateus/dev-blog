import { createContext } from "react"

export const GlobalContext = createContext({
  data: {
    attributes: {
      title: '',
      footnote: '',
      logo: '',
    }
  }
})

export default GlobalContext