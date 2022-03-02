import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

function Logo({ url, width = 24, height = 24, caption }) {
  return <Image width={width} height={height} src={getStrapiMedia({ url })} alt={caption} />
}

export default Logo
