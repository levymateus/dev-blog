import { withErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@components/Error"
import Heading from "@components/Heading"
import Text from "@components/Text"
import InputText, { Input } from "@components/Input"
import Post from "@components/Post"
import { Search } from "react-feather"
import useList from "@hooks/useList"
import usePrevious from "@hooks/usePrevious"
import If from "@components/If"
import { useRouter } from "next/router"
import useStore from "@hooks/useStore"

function Blog({ posts: data }) {
  const [setAppBarIsVisible] = useStore(store => [store.setAppBarIsVisible])
  const [posts, { filter, set: clearFilter }] = useList(data)
  const prevPosts = usePrevious(data)
  const router = useRouter()
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <Heading size="xl">Blog</Heading>
        <Text size="md" className="mt-2 fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae sagittis nisl, nec facilisis velit. Duis eu ex lectus. Nullam neque libero, condimentum eu.
        </Text>
        <section
          id="blog-input-search"
          className="pt-4"
        >
          <InputText
            className="fade-in"
          >
            <Input.Input
              type="text"
              placeholder="Search"
              onChange={(evt) => {
                if (evt.target.value !== '') {
                  filter(({ title }) => title.toLowerCase().includes(evt.target.value.toLowerCase()))
                } else {
                  clearFilter(prevPosts)
                }
              }}
              onFocus={() => {
                router.push(`/blog#blog-input-search`)
                setAppBarIsVisible(false)
              }}
            />
            <Input.Icon icon={Search} />
          </InputText>
        </section>
        <section className="flex flex-col mt-14 space-y-8 fade-in">
          <Heading size="xl" className="fade-in">All Posts</Heading>
          <If stmt={posts.length <= 0}>
            <Text >No results!</Text>
          </If>
          <If stmt={posts.length > 0}>
            {posts.map(({ slug, date, ...postProps }) => <Post key={slug} slug={slug} date={new Date(date)} {...postProps} />)}
          </If>
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
