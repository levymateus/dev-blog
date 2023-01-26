import Heading from "@components/Heading"
import PostMeta from "@components/PostMeta"
import Markdown from "@components/Markdown"

const markdownContent = `
# Title 1 🚀
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
## Title 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
### Title 3
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
#### Title 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra.
##### Title 5
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo pharetra. [link](https://#)

This text is ***really important***.

This text is **_really important_**.

A *cat* meow

- item [@link-1](https://#)
- item [@link-2](https://#)
- item [@link-3](https://#)

* item [@link-1](https://#)
* item [@link-2](https://#)
* item [@link-3](https://#)
`


function Post({ post }) {
  return <div className="mt-12">
    <Heading size="xl">{post.title}</Heading>
    <PostMeta views={post.views} likes={post.likes} date={new Date(post.datetime)} />
    <Markdown className="mt-10 fade-in">{post.content}</Markdown>
  </div>
}

export async function getStaticPaths() {
  const posts = [
    { slug: 'slug' }
  ]

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps() {
  return { props: {
      post: {
        title: 'Lore ipsum dot sit amet.',
        datetime: new Date().toISOString(),
        likes: 10,
        views: 100,
        content: markdownContent
      }
    }
  }
}

export default Post
