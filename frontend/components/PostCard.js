import { Eye, Heart } from "react-feather"
import clsx from "clsx"
import Text from "@components/Text"
import useInterval from "@hooks/useInterval"
import useCounter from "@hooks/useCounter"

function ViewsCount({ count: maxCountValue }) {
  const { count, increment } = useCounter(0, maxCountValue)
  useInterval(increment, maxCountValue / 100)
  return <div className="flex items-center gap-1">
    <Eye width={14} height={14} />
    <Text>{count} {count <= 1 ? 'view' : 'views'}</Text>
  </div>
}

function LikesCount({ count: maxCountValue }) {
  const { count, increment } = useCounter(0, maxCountValue)
  useInterval(increment, maxCountValue / 100)
  return <div className="flex items-center gap-1">
    <Heart width={14} height={14} />
    <Text>{count} {count <= 1 ? 'like' : 'likes'}</Text>
  </div>
}

function PostCard({ children, color = 'teal', likes = 1, views = 1 }) {
  return <div className={clsx("rounded hover:cursor-pointer relative text-black dark:text-white p-0.5", {
    "bg-rw-teal": color === 'teal',
    "bg-rw-indigo": color === 'indigo',
    "bg-rw-purple": color === 'purple'
  })}>
    <div className="rounded bg-white dark:bg-black text-black dark:text-white p-6">
      {children}
      <div className="flex flex-row mt-6 sm:mt-24 gap-8">
        <ViewsCount count={views} />
        <LikesCount count={likes} />
      </div>
    </div>
  </div>
}

export default PostCard
