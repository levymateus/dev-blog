import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"
import Markdown from "./markdown"
import Show from "./show"
import Icon from "./icon"

function AppFooter({ social }) {
  const global = useContext(GlobalContext)
  return <footer>
    <div className="flex">
      <Markdown
        code={global?.code.style}
        text={global?.footnote}
      />
      <Show when={Boolean(social && social.length)}>
        <div className="flex media">
          {social?.map(({ id, icon, ...props }) => <Icon key={id} role="button" {...props}>{icon}</Icon>)}
        </div>
      </Show>
    </div>
  </footer>
}

AppFooter.displayName = 'Footer'

export default AppFooter
