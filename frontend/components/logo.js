import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

function Logo({ url, width = 24, height = 24, caption }) {
  const src = getStrapiMedia({ url })
  return src && <Image width={width} height={height} src={src} alt={caption} />
}

export default Logo
