import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

function Animation({ animation, duration, from, to, name, children, asChild, ...props }) {
  const Element = asChild ? Slot : 'div'
  return <Element
    className={name}
    style={{
      '--duration': `${duration}s`,
      '--from': from,
      '--to': to,
    }}
    {...props}
  >{children}</Element>
}

export default Animation
