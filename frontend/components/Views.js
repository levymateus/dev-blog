import { Eye } from "react-feather"
import useCounter from "@hooks/useCounter"

function Views({ count: maxCountValue = 0, size = 'base' }) {
  const { count } = useCounter(maxCountValue)
  return <div className="flex items-center">
    <Eye width={14} height={14} />
    <span className={`text-${size} ml-1 hover:cursor-default`}>{count} {count <= 1 ? 'view' : 'views'}</span>
  </div>
}

export default Views
