import Markdown from '../components/markdown'
import { useContext } from 'react'
import GlobalContext from '../contexts/global-context'

function Contact({ contact }) {
  const global = useContext(GlobalContext)
  return <section className="contact full-width mt-64">
    <Markdown
      code={global?.code?.style}
      text={contact.data?.attributes.description}
    />
  </section>
}

export default Contact
