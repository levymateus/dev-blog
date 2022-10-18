import { useContext } from 'react'
import Markdown from './Markdown'
import Heading from './Heading'
import GlobalContext from '../contexts/global-context'

import styles from "./Contact.module.scss"

function Contact({ contact }) {
  const global = useContext(GlobalContext)
  return <section className={styles.contact}>
    <Heading type="h1" id="title">{contact.data?.attributes.title}</Heading>
    <Markdown
      code={global?.code?.style}
      text={contact.data?.attributes.description}
    />
  </section>
}

export default Contact
