import { getStrapiMedia } from "../lib/media"

function Logo({ url, alt, width = 24, height = 24, caption }) {
  const src = getStrapiMedia({ url })

  if(!src) {
    return null
  }

  return <img
    width={width}
    height={height}
    src={src}
    alt={alt}
    caption={caption}
  />
}

export default Logo
