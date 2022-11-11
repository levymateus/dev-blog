import clsx from "clsx"

function Button({ variant = 'primary', children, ...props }) {
  return <button
    type="button"
    className={clsx("flex rounded p-2", {
      'bg-black dark:bg-neutral-800 text-white': variant === 'primary',
      'text-black dark:text-white': variant === 'secondary'
    })}
    {...props}
  >{children}</button>
}

export default Button
