import Icon from "./icon"
import Link from "next/link"
import Moment from "./moment"
import PropTypes from "prop-types"

function LatestArticles({ articles }) {
  return <section className="latest-articles full-width mt-64">
    <div className="flex flex-row flex-align-center flex-align-between">
      <h2>Latest Articles</h2>
      <Link role="button" href="/articles">All articles &gt;&gt;</Link>
    </div>
    <ol>
      {articles.data.map((article) => <li className="mb-16" key={article.id}>
        <div className="flex flex-align-center mb-8">
          <Icon className="p-4" role="icon">BulbFilled</Icon>
          <h3 className="pl-8 m-none">{article.attributes.title}</h3>
        </div>
        <Moment className="pos-rel pos-left-32 pos-top-0">{article.attributes.createdAt}</Moment>
      </li>)}
    </ol>
  </section>
}

LatestArticles.propTypes = {
  articles: PropTypes.object
}

export default LatestArticles
