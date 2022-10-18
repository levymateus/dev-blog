import Button from "./Button"
import Icon from "./Icon"
import Show from "./Show"
import Text from "./Text"

import styles from "./Pagination.module.scss"

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

  return <div className={styles.pagination}>
    <Button onClick={dec}>
      <Icon role="button">CaretLeftFilled</Icon>
    </Button>
    <Text type="span">{page} of {total}</Text>
    <Button onClick={inc}>
      <Icon role="button">CaretRightFilled</Icon>
    </Button>
  </div>
}

export default Pagination
