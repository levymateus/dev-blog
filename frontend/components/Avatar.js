import clsx from "clsx"
import Image from "next/image"

function Avatar({ className, ...props }) {

  const src =`https://firebasestorage.googleapis.com/v0/b/levymateusmacedo-504ba.appspot.com/o/me.JPG?alt=media&token=${process.env.NEXT_PUBLIC_STORAGE_AVATAR_TOKEN}`
  const alt="Avatar image"

  return <Image
    className={clsx(className, "rounded-full h-32")}
    loading="eager"
    width={128}
    height={128}
    src={src}
    alt={alt}
    placeholder="blur"
    blurDataURL={src}
    {...props}
  />
}

export default Avatar
