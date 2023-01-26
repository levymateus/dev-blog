import Likes from "@components/Likes"
import Views from "@components/Views"
import DateText from "@components/DateText"

function PostMeta({ views, likes, date }) {
  return <div className="flex flex-row justify-between mt-3 text-black dark:text-white">
    <div className="flex flex-row space-x-6">
      <Likes count={likes} />
      <Views count={views} />
    </div>
    <DateText date={date} size="lg" />
  </div>
}

export default PostMeta
