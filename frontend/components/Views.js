import usePost from "@hooks/usePost"
import { Eye } from "react-feather"

function Views({ slug, size = 'base' }) {
  const [{ views }] = usePost(slug)
  return <div className="flex items-center p-1">
    <Eye width={14} height={14} />
    <span className={`text-${size} ml-1 hover:cursor-default`}>{views}</span>
  </div>
}

export default Views
