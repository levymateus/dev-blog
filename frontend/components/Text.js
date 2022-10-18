import React from "react"

import styles from "./Text.module.scss"

function Text({ type = 'span', ...props }) {
  return React.createElement(type, {
    className: styles.text,
    ...props,
  })
}

export default Text
