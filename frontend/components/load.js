function Load({ isLoading, children }) {
  if (isLoading) {
    return <p>loading...</p>
  }
  return <>{children}</>
}

export default Load