import ArticleCard from "./article-card"

function ArticlesPage({ articles }) {

  if (!articles.length) {
    return null
  }

  return <section>
    <ul>
      {articles.map(article => <li key={article.id}>
        <ArticleCard
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

export default ArticlesPage
