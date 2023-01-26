import Views from "@components/Views"
import Likes from "@components/Likes"
import clsx from "clsx"

function PostCard({ children, color = 'teal', likes = 1, views = 1 }) {
  return <div className={clsx("rounded relative p-0.5", {
    "bg-rw-teal": color === 'teal',
    "bg-rw-indigo": color === 'indigo',
    "bg-rw-purple": color === 'purple'
  })}>
    <div className="rounded bg-white dark:bg-black p-6">
      {children}
      <div className="flex flex-row mt-6 sm:mt-24 space-x-8 text-black dark:text-white">
        <Views count={views} />
        <Likes count={likes} />
      </div>
    </div>
  </div>
}

export default PostCard
