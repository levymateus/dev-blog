import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import InputText, { Input } from "@components/Input"
import Post from "@components/Post"
import { Search } from "react-feather"
import useList from "@hooks/useList"
import usePrevious from "@hooks/usePrevious"
import { useRouter } from "next/router"
import useStore from "@hooks/useStore"
import { useState } from "react"
import clsx from "clsx"

let timeoutId = null

function Blog({ posts: data }) {
  const setAppBarIsOpen = useStore(({ setAppBarIsOpen }) => setAppBarIsOpen)
  const [posts, { filter, set: clearFilter }] = useList(data)
  const [searchIsActive, setSearchIsActive] = useState(false)
  const [search, setSeach] = useState('')
  const prevPosts = usePrevious(data)
  const router = useRouter()

  function handleChange(evt) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    if (!evt.target.value) {
      clearFilter(prevPosts)
      setSeach('')
    }

    if (evt.target.value) {
      timeoutId = setTimeout(() => {
        filter(({ title }) => title.toLowerCase().includes(evt.target.value.toLowerCase()))
        setSeach(evt.target.value)
      }, 500)
    }
  }

  function handleFocus() {
    router.push(`/blog#blog-search`)
    setSearchIsActive(true)
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <section id="blog-search" className="flex flex-col w-full">
          <Heading size="xl" className={clsx({ "hidden": searchIsActive })}>Blog</Heading>
          <Text size="md" className={clsx("mt-2 fade-in", { "hidden": searchIsActive })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae sagittis nisl, nec facilisis velit. Duis eu ex lectus. Nullam neque libero, condimentum eu.
          </Text>
          <InputText className="mt-3">
            <Input.Input
              type="text"
              id="blog-input-search"
              placeholder="Search"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={(evt) => {
                window.scroll({ top: 0 })
                if (!evt.target.value) {
                  setSearchIsActive(false)
                }
              }}
            />
            <Input.Icon icon={Search} />
          </InputText>
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
            {posts.map(({ slug, date, ...postProps }) => <Post key={slug} slug={slug} date={new Date(date)} {...postProps} />)}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        { slug: 'slug', title: 'A test', shortText: 'test', date: new Date().toISOString(), views: 10, likes: 10 },
        { slug: 'slug', title: 'B test', shortText: 'test', date: new Date().toISOString(), views: 10, likes: 10 },
        { slug: 'slug', title: 'C test', shortText: 'test', date: new Date().toISOString(), views: 10, likes: 10 },
        { slug: 'slug', title: 'D test', shortText: 'test', date: new Date().toISOString(), views: 10, likes: 10 },
        { slug: 'slug', title: 'E test', shortText: 'test', date: new Date().toISOString(), views: 10, likes: 10 }
      ]
    }
  }
}

export default withErrorBoundary(Blog, { FallbackComponent: ErrorFallback })
