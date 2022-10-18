import Icon from "./Icon"
import Link from "next/link"
import Moment from "./Moment"
import Heading from "../components/Heading"
import Text from "../components/Text"

import styles from "./LatestPosts.module.scss"

function LatestPosts({ articles }) {
  return <section className={styles.posts}>
    <div>
      <Heading type="h3" id="latest-articles">Latest Articles</Heading>
      <Link role="button" href="/articles#articles">All articles &gt;&gt;</Link>
    </div>
    <ol role="list">
      {articles.data.map((article) => <li key={article.id}>
        <div role="group">
          <Icon role="listitem">BulbFilled</Icon>
          <Text type="span">{article.attributes.title}</Text>
        </div>
        <Moment>{article.attributes.createdAt}</Moment>
      </li>)}
    </ol>
  </section>
}

export default LatestPosts
