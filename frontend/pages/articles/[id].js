import defaultPaths from "../../consts/paths"

function Article() {
  return <div>article</div>
}

export async function getStaticPaths() {
  return { paths: defaultPaths, fallback: false }
}

export async function getStaticProps() {
  return { props: { } }
}

export default Article
