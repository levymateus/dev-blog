import Contact from "../components/contact";
import LatestArticles from "../components/latest-articles"
import Show from "../components/show"
import queryFn from "../utils/queryFn"

const HomePage = ({ contact, articles }) => {
  return (
    <main>
      <Contact contact={contact} />
      <Show when={articles.data.length}>
        <LatestArticles articles={articles} />
      </Show>
    </main>
  );
};

export async function getStaticProps() {
  const articles = await queryFn({ queryKey: ['/articles', { sort: ['publishedAt:desc'], pagination: { page: 1, pageSize: 3 } }] })
  return { props: { articles } }
}

export default HomePage
