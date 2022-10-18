import React from "react"

import styles from "./Heading.module.scss"

function Heading({ type, ...props }) {
  return React.createElement(type, {
    className: styles.heading,
    ...props,
  })
}

export default Heading
