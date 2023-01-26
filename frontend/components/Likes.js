import { HiHeart, HiOutlineHeart } from "react-icons/hi"
import useCounter from "@hooks/useCounter"
import Toogle from "@components/Toggle"

function Likes({ count: initialState, size = 'base', }) {
  const { count, increment, decrement } = useCounter(initialState)
  return <div className="flex items-center">
    <Toogle defaultValue={false}>
      <Toogle.On>
        {(toggle) => <button
            type="button"
            onClick={() => {
              decrement()
              toggle()
            }}
          >
            <div className="flex items-center">
              <HiHeart className="text-red-700" />
              <span className={`text-${size} pl-1`}>{count} {count <= 1 ? 'like' : 'likes'}</span>
            </div>
          </button>}
      </Toogle.On>
      <Toogle.Off>
        {(toggle) => <button
            type="button"
            onClick={() => {
              increment()
              toggle()
            }}
          >
            <div className="flex items-center">
              <HiOutlineHeart />
              <span className={`text-${size} pl-1`}>{count} {count <= 1 ? 'like' : 'likes'}</span>
            </div>
          </button>}
      </Toogle.Off>
    </Toogle>
  </div>
}

export default Likes
