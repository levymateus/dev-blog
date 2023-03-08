import clsx from "clsx"
import Image from "next/image"

function Avatar({ className, src, alt, ...props }) {
  return <Image
    className={clsx(className, "rounded-full h-32")}
    width={128}
    height={128}
    src={src}
    alt={alt}
    priority
    {...props}
  />
}

export default Avatar
