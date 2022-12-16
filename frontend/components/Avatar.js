import clsx from "clsx"
import Image from "next/image"

function Avatar({ className, src }) {
  return <Image
    className={clsx(className, "rounded-full w-32 h-32")}
    width={128}
    height={128}
    alt="avatar"
    src={src}
  />
}

export default Avatar
