import Link from "next/link"
import { useRouter } from "next/router"

import clsx from "clsx"
import Text from "@components/Text"

function NavLink({
  href,
  children = '',
  size = 'xl',
  ...props
}) {
  const { route } = useRouter()
  return <Link href={href} {...props} passHref>
    <Text
      className={clsx("hover:underline px-4 py-2", {
        'font-bold': route === href
      })}
      size={size}
    >{children}</Text>
  </Link>
}

export default NavLink
