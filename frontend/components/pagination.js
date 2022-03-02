import Button from "./button"
import Icon from "./icon"
import Show from "./show"

function Pagination({ meta, total, onChange, ...props }) {
  const page = props.page <= 0 ? 1 : props.page

  const inc = () => {
    if (page + 1 <= total) {
      if (onChange) onChange(page + 1)
      return page + 1
    }
    return total
  }

  const dec = () => {
    if (page > 1) {
      if (onChange) onChange(page - 1)
      return page - 1
    }
    return 1
  }

  return <div className="flex flex-wrap-center flex-align-center">
    <Show when={page > 1}>
      <Button className="cursor-pointer" onClick={dec}>
        <Icon role="button">CaretLeftFilled</Icon>
      </Button>
    </Show>
    <p>{page} of {total}</p>
    <Show when={page < total}>
      <Button className="cursor-pointer" onClick={inc}>
        <Icon role="button">CaretRightFilled</Icon>
      </Button>
    </Show>
  </div>
}

export default Pagination