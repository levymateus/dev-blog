import Heading from "@components/Heading"
import Text from "@components/Text"
import Avatar from "@components/Avatar"
import PostCard from "@components/PostCard"
import Card from "@components/Card"
import Link from "next/link"
import { ArrowRight } from "react-feather"

const HomePage = ({ avatarSrc }) => {
  return <div className="fade-in">
    <section className="flex pt-10 flex-col sm:flex-row">
      <Avatar className="order-1 sm:order-2" src={avatarSrc} />
      <div className="flex-1 mt-8 sm:mt-0 flex-col order-2 sm:order-1">
        <Heading size="xl" asChild>
          <h1>Lore ipsum dolor.</h1>
        </Heading>
        <Heading className="mt-2" size="md" asChild>
          <h2>Lore ipsum dolor.</h2>
        </Heading>
        <Text className="mt-6" size="md" asChild>
          <p>Lore ipsum dolor.</p>
        </Text>
      </div>
    </section>
    <section className="pt-14" >
      <Heading size="xl" asChild>
        <h3>Featured Posts</h3>
      </Heading>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-7 mt-6 fade-in">
        <PostCard color="teal" likes={10} views={10}>
          <Link href="/blog/slug" passHref>
            <Text size="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.</Text>
          </Link>
        </PostCard>
        <PostCard color="indigo" likes={1} views={2}>
          <Link href="/blog/slug" passHref>
            <Text size="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.</Text>
          </Link>
        </PostCard>
        <PostCard color="purple" likes={2} views={3}>
          <Link href="/blog/slug" passHref>
            <Text size="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et urna feugiat.</Text>
          </Link>
        </PostCard>
      </div>
      <Link className="text-neutral-500" href="/blog" passHref>
        <div className="flex items-center space-y-1 pt-6 pb-6 text-black hover:text-blue-600 dark:hover:text-white text-md dark:text-neutral-500">Read all posts <ArrowRight width={14} height={14} /></div>
      </Link>
    </section>
    <section id="contact" className="pt-14">
      <Card />
    </section>
  </div>
};

export async function getStaticProps() {
  return { props: { avatarSrc: "https://levymateus-blog.s3.sa-east-1.amazonaws.com/profile_levy.jpeg" } }
}

export default HomePage
