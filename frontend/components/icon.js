
import PropTypes from "prop-types"

function Icon({ url, children, label, ...props }) {
  const icons = require("@ant-design/icons")

  if (!icons) {
    throw new Error('@ant-design/icons not found!')
  }

  const iconName = children
  const Icon = icons[iconName]
  if (Icon) {
    return <a href={url} target="_blank" {...props}><Icon>{label}</Icon></a>
  }

  console.warn(`${iconName} not defined in @ant-design/icons!`)
  return null
}

Icon.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string,
  label: PropTypes.string
}

export default Icon