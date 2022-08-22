import { useRouter } from "next/router"
import Link from "next/link"
import Button from "./button"

function AppNav() {
  const router = useRouter()
  const route = router.route.split('/')[1]

  return <nav>
    <ul>
      <li>
        <Link href="/articles">
          <Button variant="secondary" active={"articles" === route}>Articles</Button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Button variant="secondary" active={"about" === route}>About</Button>
        </Link>
      </li>
      <li>
        <Link href="/">
          <Button variant="secondary" active={"" === route}>Contact</Button>
        </Link>
      </li>
    </ul>
  </nav>
}

AppNav.displayName = 'Nav'

export default AppNav