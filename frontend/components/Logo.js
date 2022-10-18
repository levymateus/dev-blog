import Image from "./Image"
import Heading from "./Heading"
import Link from "next/link"

import styles from "./Logo.module.scss"

function Logo({ title, url, caption, alt }) {
  return <Link href="/#title">
    <div className={styles.logo}>
      <Image
        url={url}
        caption={caption}
        alt={alt}
        width={24}
        height={24}
      />
      <Heading type="h3">{title}</Heading>
    </div>
  </Link>
}

Logo.displayName = 'Logo'

export default Logo
