import Heading from "@components/Heading"
import Text from "@components/Text"
import Avatar from "@components/Avatar"
import PostCard from "@components/PostCard"
import Card from "@components/Card"
import Link from "next/link"
import { ArrowRight } from "react-feather"

const HomePage = ({ avatarSrc }) => {
  return <>
    <div className="flex mt-10 flex-col sm:flex-row">
      <Avatar className="order-1 sm:order-2" src={avatarSrc} />
      <div className="flex-1 flex-col order-2 sm:order-1">
        <Heading className="mt-8" size="xl" asChild>
          <h1>Lore ipsum dolor.</h1>
        </Heading>
        <Heading className="mt-2" size="md" asChild>
          <h2>Lore ipsum dolor.</h2>
        </Heading>
        <Text className="mt-6" size="sm" asChild>
          <p>Lore ipsum dolor.</p>
        </Text>
      </div>
    </div>
    <section className="mt-14" >
      <Heading size="xl" asChild>
        <h3>Featured Posts</h3>
      </Heading>
      <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-7 mt-6">
        <PostCard color="teal" likes={10} views={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.
        </PostCard>
        <PostCard color="indigo" likes={1} views={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.
        </PostCard>
        <PostCard color="purple" likes={2} views={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.
        </PostCard>
      </div>
      <Link className="text-neutral-500" href="/blog" passHref>
        <div className="flex items-center gap-1 pt-6 pb-6 text-black hover:text-blue-600 dark:hover:text-white text-sm dark:text-neutral-500 ">Read all posts <ArrowRight width={14} height={14} /></div>
      </Link>
    </section>
    <section className="mt-14">
      <Card />
    </section>
  </>
};

export async function getStaticProps() {
  return { props: { avatarSrc: "https://levymateus-blog.s3.sa-east-1.amazonaws.com/profile_levy.jpeg" } }
}

export default HomePage
