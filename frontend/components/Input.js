import clsx from 'clsx'
import { forwardRef } from 'react'

function InputBase({ children, className, ...props }) {
  return <div className={clsx("flex items-center m-1 space-3 py-3 px-4 rounded border border-gray-400 dark:border-neutral-600 bg-white dark:bg-neutral-900 focus-within:ring-2 ring-teal-500", className)} {...props}>{children}</div>
}

InputBase.displayName = 'InputBase'

const InputText = forwardRef((props, ref) => {
  return <input
    ref={ref}
    className={clsx("bg-transparent flex-1 text-base text-gray-800 dark:text-neutral-400 placeholder:text-gray-400 dark:placeholder:text-neutral-600 outline-0 leading-6", props.className)}
    {...props}
  />
})

InputText.displayName = 'InputText'

function InputIcon({ icon }) {
  const Icon = icon
  return <Icon className="text-gray-400 dark:text-neutral-600 text-base" weight="bold" />
}

InputIcon.displayName = 'InputIcon'

export const Input = {
  Input: InputText,
  Icon: InputIcon
}

export default InputBase
