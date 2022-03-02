import { forwardRef } from "react"

const Button = forwardRef(({ children, variant = 'primary', active, ...props }, ref) =>  {
  return <button
    ref={ref}
    role="button"
    data-variant={variant}
    data-active={active}
    {...props}
  >{children}</button>
})

Button.displayName = 'Button'

export default Button