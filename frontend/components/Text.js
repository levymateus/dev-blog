import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

function Text({
  size = 'base',
  asChild = false,
  variant = 'default',
  children = '',
  className = '',
  isLoading = false,
}) {
  const Text = asChild ? Slot : 'span'
  const textSize = {
    'text-xs': size === 'xs', // 11px
    'text-sm': size === 'sm', // 12px
    'text-base': size === 'base', // 14px
    'text-lg': size === 'lg', // 15px
    'text-xl': size === 'xl' // 16px
  }
  const textColor = {
    "text-black dark:text-white": variant === 'default' && !isLoading,
    "text-neutral-500 dark:text-gray-500": variant === 'neutral'
  }
  const skeleton = {
    "skeleton skeleton-text select-none hover:cursor-default pointer-events-none": isLoading,
  }

  return <Text className={clsx(textColor, textSize, skeleton, className)}>{children}</Text>
}

export default Text
