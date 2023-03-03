import Heading from "@components/Heading"
import Text from "@components/Text"
import Avatar from "@components/Avatar"
import PostCard from "@components/PostCard"
import Card from "@components/Card"
import If from "@components/If"
import Link from "next/link"
import { ArrowRight } from "react-feather"
import { fetchAPI } from "../lib/api"

const HomePage = ({ bio, posts }) => {
  return <div className="fade-in">
    <section className="flex pt-10 flex-col sm:flex-row">
      <If stmt={bio.avatar}>
        <Avatar
          className="order-1 sm:order-2"
          src={bio.avatar.data.attributes.url}
          alt={bio.avatar.data.attributes.alternativeText}
        />
      </If>
      <div className="flex-1 mt-8 sm:mt-0 flex-col order-2 sm:order-1">
        <Heading size="xl" asChild>
          <h1>{bio.title}</h1>
        </Heading>
        <Heading className="mt-2" size="md" asChild>
          <h2>{bio.role}</h2>
        </Heading>
        <Text className="mt-6" size="md" asChild>
          <p>{bio.description}</p>
        </Text>
      </div>
    </section>
    <If stmt={posts.length}>
      <section className="pt-14" >
        <Heading size="xl" asChild>
          <h3>Featured Posts</h3>
        </Heading>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-7 mt-6 fade-in">
          <PostCard
            slug={posts[0]?.attributes.slug}
            description={posts[0]?.attributes.description} color="teal"
          />
          <If stmt={posts.length >= 2}>
            <PostCard
              slug={posts[1]?.attributes.slug}
              description={posts[1]?.attributes.description}
              color="indigo"
            />
          </If>
          <If stmt={posts.length >= 3}>
            <PostCard
              slug={posts[2]?.attributes.slug}
              description={posts[2]?.attributes.description}
              color="purple"
            />
          </If>
        </div>
        <Link className="text-neutral-500" href="/blog" passHref>
          <div className="flex items-center space-y-1 pt-6 pb-6 text-black hover:text-blue-600 dark:hover:text-white text-md dark:text-neutral-500">Read all posts <ArrowRight width={14} height={14} /></div>
        </Link>
      </section>
    </If>
    <section id="contact" className="pt-14">
      <Card />
    </section>
  </div>
};

export async function getStaticProps() {
  const [global, posts, bio] = await Promise.all([
    fetchAPI("/global?populate=*"),
    fetchAPI("/posts?populate=*"),
    fetchAPI("/global?populate=bio.avatar")
  ])
  return {
    props: {
      ...global?.data?.attributes,
      posts: posts?.data,
      bio: bio.data.attributes.bio
    }
  }
}

export default HomePage
