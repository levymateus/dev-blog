import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

function Contact({ contact }) {
  return <section className="contact full-width mt-64">
    <ReactMarkdown>{contact?.data.attributes.description}</ReactMarkdown>
  </section>
}

Contact.propTypes = {
  contact: PropTypes.object
}

export default Contact
