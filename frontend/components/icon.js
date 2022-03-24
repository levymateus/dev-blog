

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

export default Icon
