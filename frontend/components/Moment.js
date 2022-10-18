import React from "react"
import useLang from "../hooks/useLang"

import styles from "./Moment.module.scss"

function Moment({ type = 'span', children, className }) {
  const lang = useLang()

  const moment = Intl.DateTimeFormat(lang, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(children))

  return React.createElement(type, ({
    children: moment,
    className: styles.moment
  }))
}

export default Moment
