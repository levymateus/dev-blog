import Heading from "@components/Heading"
import PostMeta from "@components/PostMeta"
import Markdown from "@components/Markdown"
import { fetchAPI } from "lib/api"
import { useRouter } from "next/router"
import Breadcumb from "@components/Breadcumb"
import { minToMs } from "@utils/time"
import useTimeout from "@hooks/useTimeout"
import usePost from "@hooks/usePost"

function Post({ post }) {
  const router = useRouter()
  const slug = router.query.slug
  const [, { visualize }] = usePost(slug)

  useTimeout(() => visualize(), minToMs(1))

  return <div className="flex flex-col mt-12">
    <Breadcumb />
    <Heading size="xl" className="mt-12">{post.title}</Heading>
    <PostMeta
      slug={slug}
      date={new Date(post.publishedAt)}
    />
    <Markdown className="mt-10 fade-in">{post.text}</Markdown>
  </div>
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/posts?populate=*");
  return {
    paths: posts?.data?.map(({ attributes }) => ({
      params: {
        slug: attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const data = await fetchAPI(`/posts?filters[slug][$eq]=${context.params.slug}`);
  return { props: {
      post: {
        ...data.data[0].attributes,
      },
    }
  }
}

export default Post
