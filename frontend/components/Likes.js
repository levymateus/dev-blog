import { HiHeart, HiOutlineHeart } from "react-icons/hi"
import usePost from "@hooks/usePost"
import clsx from "clsx"

function Likes({ slug }) {
  const [{ liked, isLoading }, { like, dislike }] = usePost(slug)

  return <div className="flex items-center">
    {liked ?
      <button
        type="button"
        className={clsx("hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded p-1 outline-0", {
          "cursor-not-allowed": isLoading
        })}
        onClick={() => {
          if (!isLoading) {
            dislike()
          }
        }}
      >
        <div className="flex items-center">
          <HiHeart className={clsx({
            "disabled:opacity-75": isLoading,
            "text-red-700": !isLoading
          })} />
        </div>
      </button> :
      <button
        type="button"
        className={clsx("hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded p-1 outline-0", {
          "cursor-not-allowed": isLoading
        })}
        onClick={() => {
          if (!isLoading) {
            like()
          }
        }}
      >
        <div className="flex items-center">
          <HiOutlineHeart />
        </div>
      </button>}
  </div>
}

export default Likes
