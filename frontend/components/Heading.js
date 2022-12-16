import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

function Heading({ size = 'md', asChild = false, children = '', className }) {
  const Heading = asChild ? Slot : 'span'
  return <Heading className={clsx(className,"font-bold text-black dark:text-white", {
      'text-2xl': size === 'sm', // 23px
      'text-3xl': size === 'md', // 24px
      'text-4xl': size === 'lg', // 36px
      'text-5xl': size === 'xl' // 40px
    })}
  >{children}</Heading>
}

export default Heading
