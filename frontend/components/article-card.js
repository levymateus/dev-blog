import Link from "next/link"
import Moment from "./moment"

function ArticleCard({ createdAt, title, description, href, as }) {
  return <div className="article-card full-width">
    <Moment type="div">{createdAt}</Moment>
    <h2 className="mt-8 mb-8 font-7">{title}</h2>
    <p className="mb-16 font-4">{description}</p>
    <Link href={href} as={as}>
      <a role="link" className="font-5 cursor-pointer">Read more...</a>
    </Link>
  </div>
}

export default ArticleCard
