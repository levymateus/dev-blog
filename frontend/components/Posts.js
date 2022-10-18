import Post from "./Post"

import styles from "./Posts.module.scss"

function Posts({ articles }) {

  if (!articles.length) {
    return null
  }

  return <section className={styles.posts}>
    <ul>
      {articles.map(article => <li key={article.id}>
        <Post
          title={article.attributes.title}
          description={article.attributes.description}
          createdAt={article.attributes.createdAt}
          href="/articles/[id]#title"
          as={`/articles/${article.id}#title`}
        />
      </li>)}
    </ul>
  </section>
}

export default Posts
