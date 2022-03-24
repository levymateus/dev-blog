import React from "react"
import useLang from "../hooks/useLang"

function Moment({ type = 'span', children, className }) {
  const lang = useLang()

  const moment = Intl.DateTimeFormat(lang, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(children))

  return React.createElement(type, ({
    children: moment,
    className: "moment" + " " + className
  }))
}

export default Moment
