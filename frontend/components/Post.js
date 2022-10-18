import Link from "next/link"
import A from "./Link"
import Moment from "./Moment"

import styles from "./Post.module.scss"

function Post({ createdAt, title, description, href, as }) {
  return <div className={styles.post}>
    <Moment type="div">{createdAt}</Moment>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link href={href} as={as}>
      <A>Read more...</A>
    </Link>
  </div>
}

export default Post
