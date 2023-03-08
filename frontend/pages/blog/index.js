import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import Post from "@components/Post"
import useList from "@hooks/useList"
import usePrevious from "@hooks/usePrevious"
import { useEffect, useState } from "react"
import clsx from "clsx"
import InputSeach from "@components/InputSearch"
import { fetchAPI } from "lib/api"
import { database } from "@lib/database"
import useIsMounted from "@hooks/useIsMounted"

function Blog({ blog }) {
  const [posts, { set }] = useList([])
  const [isLoading, setIsLoading] = useState(true)
  const isMounted = useIsMounted()
  const [searchIsActive, setSearchIsActive] = useState(false)
  const [search, setSeach] = useState('')
  const prevPosts = usePrevious(posts)

  useEffect(() => {
    (async function() {
      const data = await database().getPosts()
      if (isMounted()) {
        set(data)
        setIsLoading(false)
      }
    })()
  }, [isMounted, set])

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
            onCancel={() => set(prevPosts)}
            onChange={(evt) => {
              (async function() {
                const data = await database().getPosts();
                if (isMounted()) {
                  set(data.filter(({ title }) => title.toLowerCase().includes(evt.target.value.toLowerCase())))
                }
              })()
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
          <Text className={clsx({ "hidden": posts.length || isLoading })}>No results!</Text>
          <Text className={clsx({ "hidden": !isLoading })}>Loading posts...</Text>
          <div className={clsx("space-y-7", { "hidden": !posts.length })}>
            {posts.map(({ slug, title, description, publishedAt }) => <Post
              key={slug}
              slug={slug}
              title={title}
              shortText={description}
              date={new Date(publishedAt)}
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

  posts?.data.forEach(async (props) => {
    await database().addPost(props.attributes.slug, {
      title: props.attributes.title,
      description: props.attributes.description,
      publishedAt: props.attributes.publishedAt,
    })
  })

  return {
    props: {
      blog: global?.data?.attributes.blog,
    }
  }
}

export default withErrorBoundary(Blog, { FallbackComponent: ErrorFallback })
