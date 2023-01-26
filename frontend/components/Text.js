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
    'text-xs': size === 'xs', // 11px
    'text-sm': size === 'sm', // 12px
    'text-base': size === 'base', // 14px
    'text-md': size === 'md',
    'text-lg': size === 'lg', // 15px
    'text-xl': size === 'xl' // 16px
  })}>{children}</Text>
}

export default Text
