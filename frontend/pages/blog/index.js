import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import Post from "@components/Post"
import useList from "@hooks/useList"
import usePrevious from "@hooks/usePrevious"
import { useState } from "react"
import clsx from "clsx"
import InputSeach from "@components/InputSearch"
import { fetchAPI } from "lib/api"

function Blog({ posts: data, blog }) {
  const [posts, { filter, set: clearFilter }] = useList(data)
  const [searchIsActive, setSearchIsActive] = useState(false)
  const [search, setSeach] = useState('')
  const prevPosts = usePrevious(data)

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <section id="blog-search" className="flex flex-col w-full">
          <Heading size="xl" className={clsx({ "hidden": searchIsActive })}>Blog</Heading>
          <Text size="md" className={clsx("mt-2 fade-in", { "hidden": searchIsActive })}>
            {blog}
          </Text>
          <InputSeach
            value={search}
            setValue={setSeach}
            setActive={setSearchIsActive}
            onCancel={() => clearFilter(prevPosts)}
            onChange={(evt) => {
              filter(({ attributes }) => attributes.title.toLowerCase().includes(evt.target.value.toLowerCase()))
              setSeach(evt.target.value)
            }}
          />
          <Text
            size="sm"
            variant="neutral"
            className={clsx(" fade-in", { "hidden": !search || !posts.length })}
            asChild
          >
            <span className="italic mx-1">Results for: {search} ({posts.length})</span>
          </Text>
        </section>
        <section id="blog-all-posts" className="flex flex-col mt-14 fade-in">
          <Heading size="xl" className={clsx("fade-in mb-8", { "hidden": search })}>
            All Posts
          </Heading>
          <Text className={clsx({ "hidden": posts.length })}>No results!</Text>
          <div className={clsx("space-y-7", { "hidden": !posts.length })}>
            {posts.map(({ attributes }) => <Post
              key={attributes.slug}
              slug={attributes.slug}
              title={attributes.title}
              shortText={attributes.description}
              date={new Date(attributes.publishedAt)}
            />)}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchAPI("/posts?populate=*")
  const global = await fetchAPI("/global?populate=*")
  return {
    props: {
      blog: global?.data?.attributes.blog,
      posts: posts?.data.map((props) => ({
        ...props,
      }))
    }
  }
}

export default withErrorBoundary(Blog, { FallbackComponent: ErrorFallback })
