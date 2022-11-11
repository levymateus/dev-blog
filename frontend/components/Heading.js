import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

function Heading({ size = 'md', asChild = false, children = '' }) {
  const Heading = asChild ? Slot : 'span'
  return <Heading className={clsx("font-bold text-black dark:text-white", {
    'text-2xl': size === 'sm',
    'text-3xl': size === 'md',
    'text-4xl': size === 'lg',
    'text-5xl': size === 'xl'
  })}>{children}</Heading>
}

export default Heading
