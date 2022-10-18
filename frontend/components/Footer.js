import { useContext } from "react"
import { GlobalContext } from "../contexts/global-context"
import Markdown from "./Markdown"
import Show from "./Show"
import Icon from "./Icon"

import styles from "./Footer.module.scss"

function Footer({ social }) {
  const global = useContext(GlobalContext)
  return <footer className={styles.footer}>
    <Markdown
      code={global?.code?.style}
      text={global?.footnote}
    />
    <Show when={Boolean(social && social.length)}>
      <ul role="group">
        {social?.map(({ id, icon, ...props }) => <li>
          <Icon
            key={id}
            role="button"
            {...props}
          >
            {icon}
          </Icon>
        </li>)}
      </ul>
    </Show>
  </footer>
}

Footer.displayName = 'Footer'

export default Footer
