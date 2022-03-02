import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"
import ReactMarkdown from "react-markdown"
import Icon from "./icon"

function AppFooter({ social }) {
  const global = useContext(GlobalContext)
  return <footer>
    <div className="flex">
      <ReactMarkdown
        components={{
          a: function({ node, children, ...props }) {
            const text = String(children).split('//')[0]
            let jsonProps = {}
            try {
              jsonProps = JSON.parse(String(children).split('//')[1])
              return <a
                {...props}
                {...jsonProps}
              >{text}</a>
            } catch (error) {
              return <a {...props}>{text}</a>
            }
          }
        }}
      >{global.data.attributes.footnote}</ReactMarkdown>
      <div className="flex media">
        {social.map(({ id, icon, ...props }) => <Icon key={id} role="button" {...props}>{icon}</Icon>)}
      </div>
    </div>
  </footer>
}

AppFooter.displayName = 'Footer'

export default AppFooter
