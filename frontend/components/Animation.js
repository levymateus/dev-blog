import { Slot } from "@radix-ui/react-slot"

function Animation({ duration, name, children, asChild, ...props }) {
  const Element = asChild ? Slot : 'div'
  return <Element
    className={name}
    style={{
      '--duration': `${duration}s`
    }}
    {...props}
  >{children}</Element>
}

export default Animation
