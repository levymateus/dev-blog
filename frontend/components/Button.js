import { forwardRef } from "react"

import styles from "./Button.module.scss"

const Button = forwardRef(({ children, variant = 'primary', active, className, ...props }, ref) =>  {
  return <button
    ref={ref}
    role="button"
    data-variant={variant}
    data-active={active}
    className={styles.button}
    {...props}
  >{children}</button>
})

Button.displayName = 'Button'

export default Button
