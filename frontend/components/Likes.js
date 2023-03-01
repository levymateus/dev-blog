import { HiHeart, HiOutlineHeart } from "react-icons/hi"
import usePost from "@hooks/usePost"

function Likes({ slug }) {
  const [{ liked }, { like, dislike }] = usePost(slug)

  return <div className="flex items-center">
    {liked ?
      <button
        type="button"
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded p-1 outline-0"
        onClick={() => dislike()}
      >
        <div className="flex items-center">
          <HiHeart className="text-red-700" />
        </div>
      </button> :
      <button
        type="button"
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded p-1 outline-0"
        onClick={() => like()}
      >
        <div className="flex items-center">
          <HiOutlineHeart />
        </div>
      </button>}
  </div>
}

export default Likes
