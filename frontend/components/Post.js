import Heading from "@components/Heading"
import Text from "@components/Text"
import Views from "@components/Views"
import Likes from "@components/Likes"
import Link from "next/link"
import DateText from "@components/DateText"

export default function Post({
  title = '',
  shortText = '',
  date = new Date(),
  views = 0,
  likes = 0,
  slug = ''
}) {

  return <div className="flex flex-col space-y-3">
    <Link href={`blog/${slug}`} passHref className="w-fit">
      <Heading>{title}</Heading>
    </Link>
    <Link href={`blog/${slug}`} passHref className="w-fit">
      <Text className="text-gray-700 dark:text-gray-500">
        {shortText}
      </Text>
    </Link>
    <div className="flex flex-row">
      <DateText date={date} />
      <div className="flex flex-row text-gray-700 dark:text-gray-500 space-x-3 ml-10 hover:cursor-default">
        <Views count={views} size="sm" />
        <Likes count={likes} size="sm" />
      </div>
    </div>
  </div>
}
