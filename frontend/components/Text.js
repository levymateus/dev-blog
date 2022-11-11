import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

function Text({
  size = 'base',
  asChild = false,
  children = '',
  className = '',
}) {
  const Text = asChild ? Slot : 'span'
  return <Text className={clsx(className, "text-black dark:text-white", {
    'text-xs': size === 'xs',
    'text-base': size === 'base',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
    'text-xl': size === 'xl'
  })}>{children}</Text>
}

export default Text
