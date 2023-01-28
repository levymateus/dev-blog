import Link from "next/link"
import { GitHub, Twitter } from "react-feather"
import Text from "@components/Text"

function NavLink({ href, children }) {
  return <li className="my-2">
    <Link href={href} passHref>
      <span className="text-black hover:text-indigo-600 dark:hover:text-white dark:text-neutral-500">{children}</span>
    </Link>
  </li>
}

function Footer() {
  return <>
    <div className="grid sm:grid-cols-3 border-t border-black dark:border-neutral-500 pt-6">
      <ul className="flex flex-col">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
      </ul>
      <ul className="flex flex-col">
        <NavLink href="/snippets">Snippets</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </ul>
      <ul className="flex flex-col">
        <NavLink href="https://github.com/levymateus" target="__blank">
          <span className="text-black hover:text-indigo-600 dark:hover:text-white dark:text-neutral-500 flex items-center">
            <GitHub width={14} height={14} /> <span className="pl-1">Github</span>
          </span>
        </NavLink>
        <NavLink href="/twitter">
          <span className="text-black hover:text-indigo-600 dark:hover:text-white dark:text-neutral-500 flex items-center">
            <Twitter width={14} height={14} /> <span className="pl-1">Twitter</span>
          </span>
        </NavLink>
      </ul>
    </div>
    <div className="flex flex-col sm:justify-center sm:items-center mt-6">
      <Text className="mb-3">Designed and developed by <strong>Levy Mateus Macedo</strong></Text>
      <Text>Build with <Link href="https://nextjs.org" target="_blank" passHref><strong>Next.js</strong></Link> and <Link href="https://tailwindcss.com" target="_blank" passHref><strong>Tailwindcss</strong></Link>.</Text>
    </div>
  </>
}

export default Footer
