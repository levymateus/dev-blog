
function If({ stmt, children }) {
  if (Boolean(stmt)) {
    return children
  }
  return null
}

export default If
