
import styles from "./Link.module.scss"

function Link({ children, ...props}) {
  return <a {...props} role="link" className={styles.link}>{children}</a>
}

export default Link
