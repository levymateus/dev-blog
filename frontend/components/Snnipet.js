import Text from "@components/Text"
import Image from "next/image"
import Link from "next/link"

function Snnipet({ slug, src }) {
  return <Link
    href={`/snippets/${slug}`}
    className="
      border
      border-neutral-900
      dark:border-neutral-700
      rounded p-6
      hover:cursor-pointer
    "
    passHref
    >
    <Image
      className="rounded-full"
      width={32}
      height={32}
      alt="javascript"
      src={src}
    />
    <div className="flex flex-col space-y-2">
      <Text className="mt-3 font-bold text-black dark:text-white" size="xl">Lore ipsum dolor sit amet.</Text>
      <Text className="font-bold text-gray-500 dark:text-gray-500" size="base">Lore ipsum dolor sit amet.</Text>
    </div>
  </Link>
}

export default Snnipet
