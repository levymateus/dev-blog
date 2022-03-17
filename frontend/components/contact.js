import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import GlobalContext from '../contexts/global-context'

function Contact({ contact }) {
  const global = useContext(GlobalContext)
  return <section className="contact full-width mt-64">
    <ReactMarkdown
      code={global?.code.style}
      text={contact?.description}
    />
  </section>
}

Contact.propTypes = {
  contact: PropTypes.object
}

export default Contact
